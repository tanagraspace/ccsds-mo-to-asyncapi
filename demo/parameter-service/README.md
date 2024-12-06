# MQTT Parameter Service

This service's boilerplate code was generated using the [AsyncAPI Node.js Code Generator](https://github.com/asyncapi/nodejs-template). It is an MQTT-based Node.js implementation demo of the `monitorValue` pub/sub interaction defined in [a reduced version of the Parameter Service AsyncAPI specification](./Parameter.yaml).

## Generated Code
There is no need to re-run the code generator. Review the [service's README](./service/README.md) for an overview on how to develop on top of the generated boilerplate code. For the sake of documentation _only_, the following commands show how the containerized code generator was built and executed:

```bash
docker build -f Dockerfile.generate -t asyncapi-generator .
docker run --rm -v $(pwd)/service:/app/service asyncapi-generator
sudo chown -R $(whoami):$(whoami) $(pwd)/service
```

Review [this tutorial](https://www.asyncapi.com/docs/tutorials/getting-started/request-reply) for a refresher on the **Dynamic Reply Address** pattern implemented in this demo.

## Components
1. **MQTT Broker**: An instance of Mosquitto acting as the message broker.
2. **Parameter Service**: Processes monitorValue_sub subscription requests and sends periodic updates for the subscribed parameters via the dynamic reply topic specified in the replyTo header.
3. **Parameter Clients**: Interact with the service by sending subscription requests and receiving parameter updates on dynamically allocated topics.

## How it Works
1. Clients send a `monitorValue_sub` message to subscribe to updates on a parameter's value. The request must include a `replyTo` header to specify the topic where updates should be sent.
2. The service dynamically determines the client's reply topic from the `replyTo` header and sends updates to that specific topic (Dynamic Reply Address).
3. The service periodically publishes parameter value updates to the reply topics, ensuring each client receives updates only for the parameters the subscribed to for updates.
4. The implementation supports multiple clients simultaneously, with isolated reply topics that ensure message delivery exclusivity. Additional clients can be included in [docker-compose.yml](./docker-compose.yml).

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
