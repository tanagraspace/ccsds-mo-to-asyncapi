// This code was NOT generated
// As per the generated README instructions, this code was written to import the app, implement custom middleware, and start the app
// The generated code MUST NOT be modified
// We should be able to regenerate the boilerplate code without losing any of the written custom code


// Import the health check readiness function
// We use the health check to ensure that clients only subscribe to the MQTT broker after the service has initialized
const { setReady } = require('./health');

// Import the generated client
const { client } = require('./api/index.js');

// Store active subscriptions
const activeSubscriptions = new Map();

// Middleware to process subscription payloads
function processSubscriptionPayload(message, next) {
  try {
    // Extract the actual payload and headers
    const { payload, headers } = message.payload;

    if (
      !payload.subscriptionId ||
      !payload.name ||
      typeof payload.parameterDefinitionId !== 'number' ||
      typeof payload.parameterValueInstance !== 'number'
    ) {
      throw new Error('Invalid subscription payload received. Missing required fields.');
    }

    if (
      !headers.replyTo ||
      !headers.requestId
    ) {
      throw new Error('Missing replyTo header in subscription payload.');
    }

    // Add the subscription to activeSubscriptions with the replyTo header
    activeSubscriptions.set(payload.subscriptionId, { payload, replyTo: headers.replyTo });

    console.log(
      `✅ Subscription added for subscriptionId: ${payload.subscriptionId}, replyTo: ${headers.replyTo}`
    );

    next();
  } catch (error) {
    console.error('❌ Error processing subscription payload:', error.message);
    next(error);
  }
}


// Value generators
const valueGenerators = {
  1: () => Math.floor(Math.random() * 101), // Random int 0–100
  2: () => parseFloat(Math.random().toFixed(2)), // Random float 0.00–1.00
};

function getValueGenerator(parameterDefinitionId) {
  // Default to the random int generator if an Id other than 1 or 2 is given
  return valueGenerators[parameterDefinitionId] || valueGenerators[1];
}

// Function to publish random values every 5 seconds
function startPublishingRandomValues() {
  setInterval(() => {
    if (activeSubscriptions.size === 0) {
      console.log('🔍 No active subscriptions. Skipping publish.');
      return;
    }

    activeSubscriptions.forEach(({ payload, replyTo }, subscriptionId) => {
      const generateValue = getValueGenerator(payload.parameterDefinitionId);
      const randomValue = generateValue();

      const responsePayload = {
        subscriptionId,
        objId: {
          key: { domain: ['georges.fyi'], instId: 1 },
          type_: { area: 1, number: 2, service: 3, version: 1 },
        },
        newValue: {
          convertedValue: randomValue.toString(),
          rawValue: randomValue.toString(),
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
  }, 5000);
}

// Register middleware for the monitorValue_sub channel
// FIXME: Can't get the intended approach to work with client.registerMonitorValue_subMiddleware(processSubscriptionPayload);
//        Meanwhile, we are bypassing the abstraction by using client.app.use('monitorValue_sub', processSubscriptionPayload);
client.app.use('monitorValue_sub', processSubscriptionPayload);
console.log('✅ Middleware attached to monitorValue_sub.');

// Start publishing values
startPublishingRandomValues();

// Initialize the service
try {
  client.init();
  console.log('✅ Service initialized');
  setReady(); // Signal the service is ready
} catch (error) {
  console.error('❌ Error initializing service:', error.message);
}
