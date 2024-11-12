
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service enableService API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableService iteraction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the enableService interaction.",
      "variables": {
        "port": {
          "enum": [
            "8883",
            "8884"
          ],
          "default": "8883"
        }
      },
      "bindings": {
        "mqtt": {
          "clientId": "guest",
          "cleanSession": false,
          "keepAlive": 0,
          "lastWill": {
            "topic": "/will",
            "qos": 0,
            "message": "Guest gone offline.",
            "retain": false
          }
        }
      }
    }
  },
  "channels": {
    "Send_Statistic_enableService": {
      "address": "Send_Statistic_enableService",
      "messages": {
        "Statistic.enableService_Send.message": {
          "description": "Statistic enableService request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "enableService": {
                "type": "boolean",
                "description": "If enableService is set to TRUE the service shall be enabled and evaluation and reporting of statistics will be reset and commence.\nIf enableService is set to FALSE then all evaluation of statistics shall be suspended and no statistics will be reported.\nIf the enableService value matches the current enabled state of the service then no change shall be made and no error reported. Enabling an already enabled service has no effect.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Statistic_enableService_Send"
          },
          "x-parser-unique-object-id": "Statistic.enableService_Send.message",
          "x-parser-message-name": "Statistic_enableService_Send"
        }
      },
      "description": "Send a **Statistic_enableService_Send** message in this channel to receive a **Statistic_enableService_Receive** message over the **Receive_Statistic_enableService** channel.\n",
      "x-parser-unique-object-id": "Send_Statistic_enableService"
    }
  },
  "operations": {
    "Statistic_enableService_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Statistic_enableService",
      "messages": [
        "$ref:$.channels.Send_Statistic_enableService.messages.Statistic.enableService_Send.message"
      ],
      "x-parser-unique-object-id": "Statistic_enableService_Send"
    }
  },
  "components": {
    "schemas": {
      "Statistic_enableService_Send": "$ref:$.channels.Send_Statistic_enableService.messages.Statistic.enableService_Send.message.payload"
    },
    "messages": {
      "Statistic_enableService_Send": "$ref:$.channels.Send_Statistic_enableService.messages.Statistic.enableService_Send.message"
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
  