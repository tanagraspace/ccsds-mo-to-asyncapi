# WebSocket Heartbeat Demo

This is a WebSocket-based Go implementation demo for the `beat` pub/sub interaction  defined in the [Software Management's Heartbeat Service](./../../../yaml/Software-Management/Heartbeat.yaml). It demonstrates the heartbeat mechanism where a client subscribes to periodic heartbeats from a service. The implementation uses Go's `gorilla/websocket` library and consists of a client and a service that communicate over WebSockets.

## Components

1. **WebSocket Server (Heartbeat Service)**: Listens for subscription requests and responds with periodic heartbeat messages to the subscribed clients.
2. **WebSocket Client (Heartbeat Client)**: Sends subscription requests and listens for periodic heartbeat messages.

## How it Works

1. Each client establishes a WebSocket connection with the server and sends a subscription request (`BeatSub`) containing:
   - A unique `SubscriptionID` (generated using UUIDs) to identify the subscription.
   - A `replyTo` field, dynamically generated as `beat_pub_{SubscriptionID}`, which lets the server know how to identify and route responses (heartbeats) back to the correct client.

2. The server processes each subscription request independently, storing the connection details (`SubscriptionID` and `replyTo`) for each client. This ensures that the server sends responses only to the client that made the subscription request.

3. The server sends periodic heartbeat messages (`BeatPub`) to the `replyTo` field specified in each client's subscription request. These heartbeat messages include the original `SubscriptionID` provided by the respective client.

4. With two clients running:
   - Each client sends its own `SubscriptionID` and `replyTo` during the subscription process.
   - The server routes the heartbeat messages separately, ensuring that each client only receives messages meant for its subscription.

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
