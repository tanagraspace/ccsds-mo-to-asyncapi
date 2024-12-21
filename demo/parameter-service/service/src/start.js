const { setReady } = require("./health");
const { client } = require("./api/index.js");
const fs = require("fs");
const path = require("path");

// Store active subscriptions: subscriptionId -> { payload, replyTo }
const activeSubscriptions = new Map();

// Holds current parameter values
const paramValues = new Map();

// Registered parameter generators
const registeredParameters = new Map();

/**
 * Load parameter generators from the "params" directory.
 */
function loadParams() {
  const paramsDir = path.join(__dirname, "params");
  if (!fs.existsSync(paramsDir)) {
    throw new Error("Params directory does not exist.");
  }

  const paramFiles = fs.readdirSync(paramsDir).filter((file) => file.endsWith(".js"));

  paramFiles.forEach((file) => {
    const param = require(path.join(paramsDir, file));
    if (!param.name || typeof param.generate !== "function") {
      throw new Error(`Invalid param: ${file}. A param must export 'name' and 'generate'.`);
    }
    registeredParameters.set(param.name, param.generate);
    console.log(`✅ Param loaded: ${param.name}`);
  });
}

/**
 * Initialize registered parameters based on environment variables.
 */
function initializeParameters() {
  const parameterNames = (process.env.REGISTERED_PARAMETERS || "").split(",").map((name) => name.trim());
  parameterNames.forEach((name) => {
    if (!registeredParameters.has(name)) {
      throw new Error(`No param found for registered parameter: ${name}`);
    }
    paramValues.set(name, null); // Initialize parameter values
    console.log(`✅ Parameter registered: ${name}`);
  });
}

/**
 * Generate values for all registered parameters.
 */
function generateAllParamValues() {
  registeredParameters.forEach((generate, name) => {
    const value = generate();
    paramValues.set(name, value);
  });
  console.log("♻️  Parameter values updated:", Object.fromEntries(paramValues));
}

/**
 * Middleware to process subscription payloads.
 */
function processSubscriptionPayload(message, next) {
  try {
    const { payload, headers } = message.payload;

    if (!payload.subscriptionId || !payload.name || !headers.replyTo || !headers.requestId) {
      console.error("❌ Invalid subscription payload. Missing required fields.");
      return next(); // Ignore the invalid payload
    }
    // Validate the parameter name
    if (!registeredParameters.has(payload.name) && payload.name !== "*") {
      console.warn(`⚠️  Ignorie invalid parameter name ${payload.name} received from ${payload.subscriptionId}`);
      return next(); // Ignore invalid parameter names
    }

    // Add the subscription
    activeSubscriptions.set(payload.subscriptionId, {
      payload,
      replyTo: headers.replyTo,
      filter: payload.name, // Keep the filter as provided (e.g., exact name or wildcard)
    });

    console.log(
      `✅ Subscription added for subscriptionId: ${payload.subscriptionId}, filter: ${payload.name}, replyTo: ${headers.replyTo}`
    );

    next();
  } catch (error) {
    console.error("❌ Error processing subscription payload:", error.message);
    next(error);
  }
}

/**
 * Match parameter value updates with subscriptions and notify clients.
 */
function notifySubscribers() {
  paramValues.forEach((value, paramName) => {
    activeSubscriptions.forEach(({ payload, replyTo, filter }, subscriptionId) => {
      if (filter === "*" || filter === paramName) {
        // Match found, send notification
        const responsePayload = {
          subscriptionId,
          objId: {
            key: { domain: ["georges.fyi"], instId: 1 },
            type_: { area: 1, number: 2, service: 3, version: 1 },
          },
          newValue: {
            convertedValue: value.toString(),
            rawValue: value.toString(),
            validityState: 1,
          },
        };

        try {
          client.app.send(responsePayload, {}, replyTo);
          console.log(`📤 Notification sent to ${replyTo} for subscriptionId: ${subscriptionId}, paramName: ${paramName}`);
        } catch (err) {
          console.error(`❌ Error notifying ${replyTo} for subscriptionId: ${subscriptionId}:`, err.message);
        }
      }
    });
  });
}

/**
 * Start periodic parameter value generation.
 */
function startGeneratingParamValues() {
  setInterval(() => {
    generateAllParamValues();
  }, 3000); // Every 3 seconds
}

/**
 * Start periodic notifications to subscribers.
 */
function startNotifyingSubscribers() {
  setInterval(() => {
    if (activeSubscriptions.size === 0) {
      console.log("🔍 No active subscriptions. Skipping notifications.");
      return;
    }

    notifySubscribers();
  }, 5000); // Every 5 seconds
}

// Register middleware for the monitorValue_sub channel 
// FIXME: Can't get the intended approach to work with client.registerMonitorValue_subMiddleware(processSubscriptionPayload); 
//        Meanwhile, we are bypassing the abstraction by using client.app.use('monitorValue_sub', processSubscriptionPayload); 
//        The GitHub Issue: https://github.com/tanagraspace/ccsds-mo-to-asyncapi/issues/51
client.app.use("monitorValue_sub", processSubscriptionPayload);
console.log("✅ Middleware attached to monitorValue_sub.");

// Load params, initialize parameters, and start services
try {
  loadParams();
  initializeParameters();
  startGeneratingParamValues();
  startNotifyingSubscribers();

  client.init();
  console.log("✅ Service initialized");
  setReady(); // Signal the service is ready
} catch (error) {
  console.error("❌ Error during initialization:", error.message);
}
