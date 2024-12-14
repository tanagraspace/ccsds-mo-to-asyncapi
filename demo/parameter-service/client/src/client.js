const mqtt = require('mqtt');
const { v4: uuidv4 } = require('uuid'); // For generating unique subscription IDs

// MQTT connection options
const options = {
  host: 'mqtt', // Connect to the MQTT broker using the service name as defined in docker-compose.yml
  port: 1883,
  protocol: 'mqtt',
};

// The unique subscription UUID and reply topic for this client
const subscriptionUuid = uuidv4();
const replyToTopic = `client/${subscriptionUuid}/reply`;

// Topics for subscription
const subscribeTopic = 'monitorValue_sub';

// First payload to send to monitorValue_sub
// A parameterDefinitionId of 1 will subscribe the client to random int values
const subscriptionPayloadGetRandomIntValues = {
  subscriptionId: `Sub-RandomInt-${subscriptionUuid}`,
  name: 'PARAM_INT',
  parameterDefinitionId: 1,
  parameterValueInstance: 1,
};

// Second payload to send to monitorValue_sub
// A parameterDefinitionId of 2 will subscribe the client to random float values
const subscriptionPayloadGetRandomFloatValues = {
  subscriptionId: `Sub-RandomFloat-${subscriptionUuid}`,
  name: 'PARAM_FLOAT',
  parameterDefinitionId: 2,
  parameterValueInstance: 2,
};

// Collect all subscription payloads into an array
const subscriptionPayloads = [
  subscriptionPayloadGetRandomIntValues,
  subscriptionPayloadGetRandomFloatValues,
];

// Connect to the MQTT broker
const client = mqtt.connect(options);

// Handle connection event
client.on('connect', () => {
  console.log('✅ Client connected to MQTT broker.');

  // Publish the required payloads to subscribe to monitorValue_sub
  subscriptionPayloads.forEach((payload) => {
    const message = {
      payload,
      headers: {
        replyTo: replyToTopic, // Specify the reply-to topic dynamically
        requestId: uuidv4(), // Optional: Unique ID for correlating requests and responses
      },
    };

    client.publish(subscribeTopic, JSON.stringify(message), {}, (err) => {
      if (err) {
        console.error(`❌ Failed to publish subscription payload to ${subscribeTopic}:`, err.message);
      } else {
        console.log(`📤 Sent subscription payload to ${subscribeTopic}:`, message);
      }
    });
  });

  // Subscribe to the dynamically specified reply topic
  client.subscribe(replyToTopic, (err) => {
    if (err) {
      console.error(`❌ Failed to subscribe to dynamic reply topic ${replyToTopic}:`, err.message);
    } else {
      console.log(`📡 Subscribed to dynamic reply topic: ${replyToTopic}`);
    }
  });
});

// Handle incoming messages from the dynamically specified reply topic
client.on('message', (topic, message) => {
  if (topic === replyToTopic) {
    try {
      const parsedMessage = JSON.parse(message.toString());
      console.log(`📩 Received message on reply topic "${topic}":`, parsedMessage);
    } catch (err) {
      console.error('❌ Failed to parse message:', err.message);
    }
  } else {
    console.log(`📩 Received message on unexpected topic "${topic}": ${message.toString()}`);
  }
});

// Handle errors
client.on('error', (err) => {
  console.error('❌ MQTT client error:', err.message);
});

// Handle disconnection
client.on('close', () => {
  console.log('🔌 MQTT client disconnected.');
});
