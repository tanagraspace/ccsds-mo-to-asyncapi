# Heartbeat Demos

Two demos implement the `beat` pub/sub interaction of the [Software Management's Heartbeat Service](./../yaml/Software-Management/Heartbeat.yaml):
1. [mqtt](./mqtt/): Based on MQTT and written in Python. Showcases a single client interacting with the service.
2. [ws](./ws/): Based on WebSocket and written in Golang. Showcases two clients interating with the service.

Additional clients can be included in each demo's `docker-compose.yml` file.