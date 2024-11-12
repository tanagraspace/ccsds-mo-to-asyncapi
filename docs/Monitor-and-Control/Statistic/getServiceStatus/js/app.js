
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service getServiceStatus API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getServiceStatus iteraction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the getServiceStatus interaction.",
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
    "Send_Statistic_getServiceStatus": {
      "address": "Send_Statistic_getServiceStatus",
      "messages": {
        "Statistic.getServiceStatus_Send.message": {
          "description": "Statistic getServiceStatus request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              }
            },
            "x-parser-schema-id": "Statistic_getServiceStatus_Send"
          },
          "x-parser-unique-object-id": "Statistic.getServiceStatus_Send.message",
          "x-parser-message-name": "Statistic_getServiceStatus_Send"
        }
      },
      "description": "Send a **Statistic_getServiceStatus_Send** message in this channel to receive a **Statistic_getServiceStatus_Receive** message over the **Receive_Statistic_getServiceStatus** channel.\n",
      "x-parser-unique-object-id": "Send_Statistic_getServiceStatus"
    },
    "Receive_Statistic_getServiceStatus": {
      "address": "Receive_Statistic_getServiceStatus",
      "messages": {
        "Statistic.getServiceStatus_Receive.message": {
          "description": "Statistic getServiceStatus update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "serviceEnabled": {
                "type": "boolean",
                "description": "The operation shall return TRUE if the service is currently enabled or FALSE if the service is currently disabled.\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "Statistic_getServiceStatus_Receive"
          },
          "x-parser-unique-object-id": "Statistic.getServiceStatus_Receive.message",
          "x-parser-message-name": "Statistic_getServiceStatus_Receive"
        }
      },
      "description": "Use this channel to receive Statistic getServiceStatus responses as **Statistic_getServiceStatus_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Statistic_getServiceStatus"
    }
  },
  "operations": {
    "Statistic_getServiceStatus_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Statistic_getServiceStatus",
      "messages": [
        "$ref:$.channels.Send_Statistic_getServiceStatus.messages.Statistic.getServiceStatus_Send.message"
      ],
      "x-parser-unique-object-id": "Statistic_getServiceStatus_Send"
    },
    "Statistic_getServiceStatus_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Statistic_getServiceStatus",
      "messages": [
        "$ref:$.channels.Receive_Statistic_getServiceStatus.messages.Statistic.getServiceStatus_Receive.message"
      ],
      "x-parser-unique-object-id": "Statistic_getServiceStatus_Receive"
    }
  },
  "components": {
    "schemas": {
      "Statistic_getServiceStatus_Send": "$ref:$.channels.Send_Statistic_getServiceStatus.messages.Statistic.getServiceStatus_Send.message.payload",
      "Statistic_getServiceStatus_Receive": "$ref:$.channels.Receive_Statistic_getServiceStatus.messages.Statistic.getServiceStatus_Receive.message.payload"
    },
    "messages": {
      "Statistic_getServiceStatus_Send": "$ref:$.channels.Send_Statistic_getServiceStatus.messages.Statistic.getServiceStatus_Send.message",
      "Statistic_getServiceStatus_Receive": "$ref:$.channels.Receive_Statistic_getServiceStatus.messages.Statistic.getServiceStatus_Receive.message"
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
  