const mqtt = require('mqtt');
const { v4: uuidv4 } = require('uuid'); // For generating unique subscription IDs

// Read environment variables
const mqttHost = process.env.MQTT_HOST || 'mqtt';
const mqttPort = process.env.MQTT_PORT || 1883;
const subscriptions = (process.env.SUBSCRIPTIONS || '').split(',').map((sub) => sub.trim()).filter(Boolean);

if (subscriptions.length === 0) {
  console.error('❌ No subscriptions provided. Set the SUBSCRIPTIONS environment variable.');
  process.exit(1);
}

// MQTT connection options
const options = {
  host: mqttHost,
  port: parseInt(mqttPort, 10),
  protocol: 'mqtt',
};

// The unique subscription UUID and reply topic for this client
const subscriptionUuid = uuidv4();
const replyToTopic = `client/${subscriptionUuid}/reply`;

// Build the subscription payloads dynamically from the environment variable
const subscriptionPayloads = subscriptions.map((name, index) => ({
  subscriptionId: `Sub-${name}-${subscriptionUuid}`,
  name,
  parameterDefinitionId: index + 1, // Arbitrary definition IDs based on order
  parameterValueInstance: index + 1, // Arbitrary value instances
}));

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

    client.publish('monitorValue_sub', JSON.stringify(message), {}, (err) => {
      if (err) {
        console.error(`❌ Failed to publish subscription payload:`, err.message);
      } else {
        console.log(`📤 Sent subscription payload for ${payload.name}:`, message);
      }
    });
  });

  // Subscribe to the dynamically specified reply topic
  client.subscribe(replyToTopic, (err) => {
    if (err) {
      console.error(`❌ Failed to subscribe to reply topic ${replyToTopic}:`, err.message);
    } else {
      console.log(`📡 Subscribed to reply topic: ${replyToTopic}`);
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
