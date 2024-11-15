
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Heartbeat Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the Heartbeat Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Heartbeat Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "getPeriod_response": {
      "address": "getPeriod_response",
      "messages": {
        "getPeriod_response.message": {
          "description": "getPeriod response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "period": {
                "type": "number",
                "format": "uint64",
                "description": "The period field shall hold period of the heartbeat message.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "getPeriod_response"
          },
          "x-parser-unique-object-id": "getPeriod_response.message",
          "x-parser-message-name": "getPeriod_response"
        }
      },
      "description": "Use this channel to receive getPeriod responses as **getPeriod_response** messages.\n",
      "x-parser-unique-object-id": "getPeriod_response"
    }
  },
  "operations": {
    "getPeriod_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getPeriod_response",
      "messages": [
        "$ref:$.channels.getPeriod_response.messages.getPeriod_response.message"
      ],
      "x-parser-unique-object-id": "getPeriod_response"
    }
  },
  "components": {
    "schemas": {
      "getPeriod_response": "$ref:$.channels.getPeriod_response.messages.getPeriod_response.message.payload"
    },
    "messages": {
      "getPeriod_response": "$ref:$.channels.getPeriod_response.messages.getPeriod_response.message"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  