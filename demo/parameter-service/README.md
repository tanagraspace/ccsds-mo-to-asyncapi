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

1. Subscription:
    - Clients send a `monitorValue_sub message` to subscribe to updates for specific parameters.
    - Each subscription request must include a `replyTo` header that specifies the dynamic reply topic for updates.
    - The service matches subscription filters to parameter updates and sends notifications accordingly.
    - The service supports multiple clients simultaneously, with isolated reply topics that ensure message delivery exclusivity.
    - Additional clients can be included in [docker-compose.yml](./docker-compose.yml).
2. Parameter Generation:
    - The service dynamically generates values for all registered parameters periodically, independent of subscriptions.
    - New parameter updates are produced at regular intervals and stored for reference.
3. Notification:
    - When a parameter value is updated, the service matches it against active subscriptions (e.g., exact parameter name or wildcard *) and sends updates to clients' reply topics.
4. Custom Parameters:
    - The service supports custom parameter generation through modular parameter definitions located in the **params** directory.
    - New parameters can be added without modifying the core service logic.

## Adding Custom Parameters

To add a new parameter; create a new .js file in the **params** directory that exports an object with the following structure:

```javascript
module.exports = {
  name: "PARAM_CUSTOM_NAME", // Unique name for the parameter
  generate: () => {
    // Logic to produce a parameter value
    return "Your custom value";
  },
};
```

E.g.: Add a parameter that generates random greetings:

```javascript
module.exports = {
  name: "PARAM_GREETING",
  generate: () => {
    const greetings = ["Hello!", "Hi there!", "Greetings!", "Howdy!", "Hey!"];
    return greetings[Math.floor(Math.random() * greetings.length)];
  },
};
```

Register the parameter by updating the `REGISTERED_PARAMETERS` environment variable in **docker-compose.yml** to include the new parameter:

```yaml
services:
  service:
    environment:
      - REGISTERED_PARAMETERS=PARAM_INT,PARAM_GREETING
```

Rebuild and run the Service.

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
