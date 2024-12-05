# Demos

This project includes three demos showcasing pub/sub interactions defined in the generated AsyncAPI MO MAL specifications:

1. Two demos implement the `beat` pub/sub interaction of the [Software Management's Heartbeat Service](./../yaml/Software-Management/Heartbeat.yaml):
   - One demo is based on MQTT and written in Python.
   - The other demo is based on WebSocket and written in Golang.
2. The third demo uses the [Node.js Code Generator](https://github.com/asyncapi/nodejs-template) to implement the `monitorValue` pub/sub interaction from the [Monitor and Control's Parameter Service](./../yaml/Monitor-and-Control/Parameter.yaml).
