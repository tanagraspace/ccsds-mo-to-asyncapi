// This code was NOT generated
// As per the generated README instructions, this code was written to import the app, implement custom middleware, and start the app
// The generated code MUST NOT be modified
// We should be able to regenerate the boilerplate code without losing any of the written custom code

const { setReady } = require('./health');
const { client } = require('./api/index.js');

// Store active subscriptions: subscriptionId -> { payload, replyTo }
const activeSubscriptions = new Map();

// A set of all parameter names currently subscribed to by any client
const activeParamNames = new Set();

// Valid parameter names
const VALID_PARAM_NAMES = new Set(["PARAM_INT", "PARAM_FLOAT", "PARAM_STRING"]);

// Function to handle wildcard subscription
function handleWildcardSubscription(payload, headers) {
  if (VALID_PARAM_NAMES.size === 0) {
    throw new Error('No valid parameters available for wildcard subscription.');
  }

  // Subscribe to all valid parameters
  VALID_PARAM_NAMES.forEach((paramName) => {
    const subscriptionId = `${payload.subscriptionId}-${paramName}`;
    activeSubscriptions.set(subscriptionId, {
      payload: { ...payload, name: paramName }, // Clone payload with specific paramName
      replyTo: headers.replyTo,
    });
    activeParamNames.add(paramName);
    console.log(`✅ Subscribed to paramName: ${paramName} using wildcard.`);
  });
}

// Middleware to process subscription payloads
function processSubscriptionPayload(message, next) {
  try {
    const { payload, headers } = message.payload;

    if (
      !payload.subscriptionId ||
      !payload.name ||
      typeof payload.parameterDefinitionId !== 'number' ||
      typeof payload.parameterValueInstance !== 'number'
    ) {
      throw new Error('Invalid subscription payload received. Missing required fields.');
    }

    if (!headers.replyTo || !headers.requestId) {
      throw new Error('Missing replyTo header in subscription payload.');
    }

    // Split subscriptions if payload.name contains multiple items (e.g., "PARAM_INT,*")
    const paramNames = payload.name.split(',').map((name) => name.trim());

    // Process each parameter name individually
    paramNames.forEach((paramName) => {
      if (paramName === "*") {
        // Handle wildcard subscription
        handleWildcardSubscription(payload, headers);
      } else if (VALID_PARAM_NAMES.has(paramName)) {
        // Handle explicit parameter subscription
        const subscriptionId = `${payload.subscriptionId}-${paramName}`;
        activeSubscriptions.set(subscriptionId, {
          payload: { ...payload, name: paramName },
          replyTo: headers.replyTo,
        });
        activeParamNames.add(paramName);
        console.log(
          `✅ Subscription added for subscriptionId: ${subscriptionId}, paramName: ${paramName}, replyTo: ${headers.replyTo}`
        );
      } else {
        // Invalid parameter name, don't subscribe to anything
        console.error(`❌ Unsupported parameter name: ${paramName}. Must be one of ${[...VALID_PARAM_NAMES].join(', ')} or the wildcard '*'.`);
      }
    });

    next();
  } catch (error) {
    console.error('❌ Error processing subscription payload:', error.message);
    next(error);
  }
}

// Value generator based on exact param name
function generateParamValue(paramName) {
  switch (paramName) {
    case "PARAM_INT": // Random int 0–100
      return Math.floor(Math.random() * 101);
    case "PARAM_FLOAT": // Random float 0.00–1.00
      return parseFloat(Math.random().toFixed(2));
    case "PARAM_STRING": // Random String of 5 characters
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let str = '';
      for (let i = 0; i < 5; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return str;
    default:
      // This should never happen since we validated paramName earlier
      throw new Error(`No generator available for paramName: ${paramName}`);
  }
}

// Holds current values for each param name, updated every 3 seconds
const paramValues = new Map();

// Update paramValues every 3 seconds
function startUpdatingParamValues() {
  setInterval(() => {
    // Generate a fresh value for each active paramName
    for (const paramName of activeParamNames) {
      const newValue = generateParamValue(paramName);
      paramValues.set(paramName, newValue);
    }
    console.log('♻️  Param values updated:', Object.fromEntries(paramValues));
  }, 3000);
}

// Publish values every 5 seconds
function startPublishingValues() {
  setInterval(() => {
    if (activeSubscriptions.size === 0) {
      console.log('🔍 No active subscriptions. Skipping publish.');
      return;
    }

    // Use current paramValues snapshot. If a param value doesn't exist yet, skip sending.
    activeSubscriptions.forEach(({ payload, replyTo }, subscriptionId) => {
      const currentValue = paramValues.get(payload.name);

      // If the value does not exist yet, don't send anything
      if (typeof currentValue === 'undefined') {
        console.log(`⚠️ No value available yet for ${payload.name}, skipping send for subscriptionId: ${subscriptionId}`);
        return;
      }

      const responsePayload = {
        subscriptionId,
        objId: {
          key: { domain: ['georges.fyi'], instId: 1 },
          type_: { area: 1, number: 2, service: 3, version: 1 },
        },
        newValue: {
          convertedValue: currentValue.toString(),
          rawValue: currentValue.toString(),
          validityState: 1,
        },
      };

      try {
        // Publish the response to the client's replyTo topic
        client.app.send(responsePayload, {}, replyTo);
      } catch (err) {
        console.error(`❌ Error publishing to ${replyTo} for subscription ${subscriptionId}:`, err.message);
      }
    });

    console.log('🚀 Published current values to all subscribed clients.');
  }, 5000);
}

// Register middleware for the monitorValue_sub channel
client.app.use('monitorValue_sub', processSubscriptionPayload);
console.log('✅ Middleware attached to monitorValue_sub.');

// Start updating and publishing param values
startUpdatingParamValues();
startPublishingValues();

// Initialize the service
try {
  client.init();
  console.log('✅ Service initialized');
  setReady(); // Signal the service is ready
} catch (error) {
  console.error('❌ Error initializing service:', error.message);
}
