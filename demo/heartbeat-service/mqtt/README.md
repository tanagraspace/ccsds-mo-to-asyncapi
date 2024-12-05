# MQTT Heartbeat Demo

This is an MQTT-based Python implementation demo for the `beat` pub/sub interaction defined in the [Software Management's Heartbeat Service](./../../../yaml/Software-Management/Heartbeat.yaml). It demonstrates the heartbeat mechanism where a client subscribes to periodic heartbeats from a service. The implementation uses Python's `paho-mqtt` library and consists of a client and a service that communicate via a Mosquitto MQTT broker.

## Components

1. **MQTT Broker**: An instance of Mosquitto acting as the message broker.
2. **Heartbeat Service**: Listens for subscription requests (`beat_sub`) and responds with periodic heartbeat messages.
3. **Heartbeat Client**: Sends subscription requests (`beat_sub`) and listens for periodic heartbeat messages.

## How it Works

1. The client sends a subscription request to the `beat_sub` topic with a `replyTo` property in the message header indicating the topic for responses.
2. The service processes the subscription request, reads the `replyTo` header, and starts sending periodic heartbeat messages to the specified topic.
3. The `replyTo` property is included in the MQTT v5 message headers using the `UserProperty` field.

## Setup

The setup requires Docker and Docker Compose.

### Running the Demo

```bash
docker-compose up --build
```

### Stopping the Demo

```bash
docker-compose down
```