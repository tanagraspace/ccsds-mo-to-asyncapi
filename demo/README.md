# Demos

This project includes three demos that showcase pub/sub interactions defined in the generated AsyncAPI MO MAL specifications.

## With Code Generation

[One of the demos](./parameter-service/) used the [AsyncAPI Node.js Code Generator](https://github.com/asyncapi/nodejs-template) to implement the `monitorValue` pub/sub interaction, as defined in [this reduced version of the Monitor and Control's Parameter Service](./parameter-service/Parameter.yaml).

## Without Code Generation

The two other demos implement the `beat` pub/sub interaction of the [Software Management's Heartbeat Service](./../yaml/Software-Management/Heartbeat.yaml):
- [One demo](./heartbeat-service/mqtt/) is based on MQTT and written in Python.
- [The other demo](./heartbeat-service/ws/) is based on WebSocket and written in Golang.
