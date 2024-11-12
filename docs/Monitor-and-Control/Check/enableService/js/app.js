
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service enableService API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableService iteraction of the Check Service."
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
    "Send_Check_enableService": {
      "address": "Send_Check_enableService",
      "messages": {
        "Check.enableService_Send.message": {
          "description": "Check enableService request submission",
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
                "description": "If enableService is set to TRUE the service shall be enabled and evaluation and reporting of check will commence.\nIf enableService is set to FALSE then all evaluation of checks shall be suspended and no check transitions will be reported.\nIf the enableService value matches the current enabled state of the service then no change shall be made and no error reported. Enabling an already enabled service has no effect.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_enableService_Send"
          },
          "x-parser-unique-object-id": "Check.enableService_Send.message",
          "x-parser-message-name": "Check_enableService_Send"
        }
      },
      "description": "Send a **Check_enableService_Send** message in this channel to receive a **Check_enableService_Receive** message over the **Receive_Check_enableService** channel.\n",
      "x-parser-unique-object-id": "Send_Check_enableService"
    }
  },
  "operations": {
    "Check_enableService_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Check_enableService",
      "messages": [
        "$ref:$.channels.Send_Check_enableService.messages.Check.enableService_Send.message"
      ],
      "x-parser-unique-object-id": "Check_enableService_Send"
    }
  },
  "components": {
    "schemas": {
      "Check_enableService_Send": "$ref:$.channels.Send_Check_enableService.messages.Check.enableService_Send.message.payload"
    },
    "messages": {
      "Check_enableService_Send": "$ref:$.channels.Send_Check_enableService.messages.Check.enableService_Send.message"
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
  