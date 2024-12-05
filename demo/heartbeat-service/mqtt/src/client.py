import asyncio
import json
import uuid
from paho.mqtt import client as mqtt_client

CLIENT_ID = str(uuid.uuid4())
BROKER = "mqtt"
PORT = 1883

# Put the beat_pub topic in the message header's replyTo property
# so that the service will know where to reply to (Dynamic Reply Address)
TOPICS = {
  "beat_sub": "beat_sub",
  "beat_pub": f"beat_pub_{CLIENT_ID}",
}


# MQTT Connection Handler
def on_connect(client, userdata, flags, reason_code, properties):
  print("Connected to MQTT broker")
  client.subscribe(TOPICS["beat_pub"])
  print(f"Subscribed to topic: {TOPICS['beat_pub']}")
  # Send the initial beat_sub message upon connection
  send_beat_sub(client)


# Callback function for when a message is received
def on_message(client, userdata, msg):
  if msg.topic == TOPICS["beat_pub"]:
    payload = json.loads(msg.payload.decode())
    print(f"Received from {msg.topic}: {payload}")


# Publish beat_sub message with subscriptionId and replyTo
def send_beat_sub(client):
  message = {
    "subscriptionId": CLIENT_ID,  # Unique identifier for this subscription
  }

  # Add replyTo property in the header
  properties = mqtt_client.Properties(mqtt_client.MQTTv5)
  properties.UserProperty = [("replyTo", TOPICS["beat_pub"])]

  # Publish to the beat_sub topic
  client.publish(TOPICS["beat_sub"], json.dumps(message), properties=properties)
  print(f"Sent beat_sub message with subscriptionId: {message['subscriptionId']}")


# Main MQTT client setup
def connect_mqtt():
  client = mqtt_client.Client(
    callback_api_version=mqtt_client.CallbackAPIVersion.VERSION2,
    client_id="heartbeat_client_subscriber",
    protocol=mqtt_client.MQTTv5
  )
  client.on_message = on_message
  client.on_connect = on_connect
  client.connect(BROKER, PORT)
  return client


# The Main function
async def main():
  client = connect_mqtt()
  client.loop_start()

  try:
    while True:
      await asyncio.sleep(1)
  finally:
    client.loop_stop()


if __name__ == "__main__":
  asyncio.run(main())
