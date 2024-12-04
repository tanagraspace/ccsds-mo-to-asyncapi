import asyncio
import json
from paho.mqtt import client as mqtt_client

BROKER = "mqtt"
PORT = 1883

# Only set the subsctiption topic
# The publish topic will be extracted from the the incoming message's replyTo property
TOPICS = {
  "beat_sub": "beat_sub"
}

# Period for sending publish messages (in seconds)
DEFAULT_PERIOD = 5

# Global variable to store the asyncio event loop
event_loop = None

# MQTT Connection Handler
def on_connect(client, userdata, flags, reason_code, properties):
  print("Connected to MQTT broker")
  client.subscribe(TOPICS["beat_sub"])
  print(f"Subscribed to topic: {TOPICS['beat_sub']}")


# Callback function for when a message is received
def on_message(client, userdata, msg):
  global event_loop
  try:
    if msg.topic == TOPICS["beat_sub"]:
      # Use the stored event loop to schedule the coroutine
      asyncio.run_coroutine_threadsafe(
        handle_beat_sub(client, msg),
        event_loop
      )
    else:
      print(f"Received message on unknown topic: {msg.topic}")
  except Exception as e:
    print(f"Caught exception in on_message: {e}")


# Handle beat_sub messages
async def handle_beat_sub(client, msg):
  payload = json.loads(msg.payload.decode())

  # Extract replyTo from the incoming message's UserProperty
  reply_to = None
  if hasattr(msg, 'properties') and msg.properties.UserProperty:
    for key, value in msg.properties.UserProperty:
      if key == "replyTo":
        reply_to = value
        break
  print(f"Received subscription message: {payload}, replying to {reply_to}")

  async def send_beat():
    while True:
      beat_message = {"subscriptionId": payload.get("subscriptionId", "default_sub")}
      client.publish(reply_to, json.dumps(beat_message))
      print(f"Sent to {reply_to}: {beat_message}")
      await asyncio.sleep(DEFAULT_PERIOD)

  asyncio.create_task(send_beat())


# Main MQTT client setup
def connect_mqtt():
  client = mqtt_client.Client(
    callback_api_version=mqtt_client.CallbackAPIVersion.VERSION2,
    client_id="heartbeat_server",
    protocol=mqtt_client.MQTTv5
  )
  client.on_message = on_message
  client.on_connect = on_connect
  client.connect(BROKER, PORT)
  return client


async def main():
  global event_loop
  event_loop = asyncio.get_running_loop()  # Store the running event loop

  client = connect_mqtt()
  client.loop_start()

  try:
    while True:
      await asyncio.sleep(1)
  finally:
    client.loop_stop()
    client.disconnect()


if __name__ == "__main__":
  asyncio.run(main())
