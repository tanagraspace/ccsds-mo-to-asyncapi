
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service removeAlert API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeAlert iteraction of the Alert Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the removeAlert interaction.",
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
    "Send_Alert_removeAlert": {
      "address": "Send_Alert_removeAlert",
      "messages": {
        "Alert.removeAlert_Send.message": {
          "description": "Alert removeAlert request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "alertInstIds": {
                "type": "integer",
                "description": "The alertInstIds field shall hold the object instance identifiers of the AlertIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided AlertIdentity object instance identifier does not include a wildcard and does not match an existing AlertIdentity object then this operation shall fail with an UNKNOWN error.\nMatched AlertIdentity objects shall not be removed from the COM archive only the list of AlertIdentity objects in the provider.\nIf an error is raised then no alerts shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish AlertEvent events for the deleted AlertIdentity objects anymore.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Alert_removeAlert_Send"
          },
          "x-parser-unique-object-id": "Alert.removeAlert_Send.message",
          "x-parser-message-name": "Alert_removeAlert_Send"
        }
      },
      "description": "Send a **Alert_removeAlert_Send** message in this channel to receive a **Alert_removeAlert_Receive** message over the **Receive_Alert_removeAlert** channel.\n",
      "x-parser-unique-object-id": "Send_Alert_removeAlert"
    },
    "Error_Alert_removeAlert": {
      "address": "Error_Alert_removeAlert",
      "messages": {
        "Alert.removeAlert_Error.message": {
          "description": "Alert removeAlert error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "Alert_removeAlert_Error"
          },
          "x-parser-unique-object-id": "Alert.removeAlert_Error.message",
          "x-parser-message-name": "Alert_removeAlert_Error"
        }
      },
      "description": "Use this channel to receive Alert removeAlert errors as **Alert_removeAlert_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Alert_removeAlert"
    }
  },
  "operations": {
    "Alert_removeAlert_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Alert_removeAlert",
      "messages": [
        "$ref:$.channels.Send_Alert_removeAlert.messages.Alert.removeAlert_Send.message"
      ],
      "x-parser-unique-object-id": "Alert_removeAlert_Send"
    },
    "Alert_removeAlert_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Alert_removeAlert",
      "messages": [
        "$ref:$.channels.Error_Alert_removeAlert.messages.Alert.removeAlert_Error.message"
      ],
      "x-parser-unique-object-id": "Alert_removeAlert_Error"
    }
  },
  "components": {
    "schemas": {
      "Alert_removeAlert_Send": "$ref:$.channels.Send_Alert_removeAlert.messages.Alert.removeAlert_Send.message.payload",
      "Alert_removeAlert_Error": "$ref:$.channels.Error_Alert_removeAlert.messages.Alert.removeAlert_Error.message.payload"
    },
    "messages": {
      "Alert_removeAlert_Send": "$ref:$.channels.Send_Alert_removeAlert.messages.Alert.removeAlert_Send.message",
      "Alert_removeAlert_Error": "$ref:$.channels.Error_Alert_removeAlert.messages.Alert.removeAlert_Error.message"
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
  