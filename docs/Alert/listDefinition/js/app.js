
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service listDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listDefinition iteraction of the Alert Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the listDefinition interaction.",
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
    "Send_Alert_listDefinition": {
      "address": "Send_Alert_listDefinition",
      "messages": {
        "Alert.listDefinition_Send.message": {
          "description": "Alert listDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "alertNames": {
                "type": "string",
                "description": "The alertNames field shall contain a list of alert names to retrieve the AlertIdentity and AlertDefinition object instance identifiers for.\nThe alertNames field may contain the wildcard value of '*' to return all supported AlertIdentity and AlertDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing AlertIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Alert_listDefinition_Send"
          },
          "x-parser-unique-object-id": "Alert.listDefinition_Send.message",
          "x-parser-message-name": "Alert_listDefinition_Send"
        }
      },
      "description": "Send a **Alert_listDefinition_Send** message in this channel to receive a **Alert_listDefinition_Receive** message over the **Receive_Alert_listDefinition** channel.\n",
      "x-parser-unique-object-id": "Send_Alert_listDefinition"
    },
    "Receive_Alert_listDefinition": {
      "address": "Receive_Alert_listDefinition",
      "messages": {
        "Alert.listDefinition_Receive.message": {
          "description": "Alert listDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "alertObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Alert_listDefinition_Receive"
          },
          "x-parser-unique-object-id": "Alert.listDefinition_Receive.message",
          "x-parser-message-name": "Alert_listDefinition_Receive"
        }
      },
      "description": "Use this channel to receive Alert listDefinition responses as **Alert_listDefinition_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Alert_listDefinition"
    },
    "Error_Alert_listDefinition": {
      "address": "Error_Alert_listDefinition",
      "messages": {
        "Alert.listDefinition_Error.message": {
          "description": "Alert listDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-11>"
                },
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "Alert_listDefinition_Error"
          },
          "x-parser-unique-object-id": "Alert.listDefinition_Error.message",
          "x-parser-message-name": "Alert_listDefinition_Error"
        }
      },
      "description": "Use this channel to receive Alert listDefinition errors as **Alert_listDefinition_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Alert_listDefinition"
    }
  },
  "operations": {
    "Alert_listDefinition_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Alert_listDefinition",
      "messages": [
        "$ref:$.channels.Send_Alert_listDefinition.messages.Alert.listDefinition_Send.message"
      ],
      "x-parser-unique-object-id": "Alert_listDefinition_Send"
    },
    "Alert_listDefinition_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Alert_listDefinition",
      "messages": [
        "$ref:$.channels.Receive_Alert_listDefinition.messages.Alert.listDefinition_Receive.message"
      ],
      "x-parser-unique-object-id": "Alert_listDefinition_Receive"
    },
    "Alert_listDefinition_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Alert_listDefinition",
      "messages": [
        "$ref:$.channels.Error_Alert_listDefinition.messages.Alert.listDefinition_Error.message"
      ],
      "x-parser-unique-object-id": "Alert_listDefinition_Error"
    }
  },
  "components": {
    "schemas": {
      "Alert_listDefinition_Send": "$ref:$.channels.Send_Alert_listDefinition.messages.Alert.listDefinition_Send.message.payload",
      "Alert_listDefinition_Receive": "$ref:$.channels.Receive_Alert_listDefinition.messages.Alert.listDefinition_Receive.message.payload",
      "Alert_listDefinition_Error": "$ref:$.channels.Error_Alert_listDefinition.messages.Alert.listDefinition_Error.message.payload",
      "mc": {
        "ObjectInstancePair": "$ref:$.channels.Receive_Alert_listDefinition.messages.Alert.listDefinition_Receive.message.payload.properties.alertObjInstIds",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Alert_listDefinition_Send": "$ref:$.channels.Send_Alert_listDefinition.messages.Alert.listDefinition_Send.message",
      "Alert_listDefinition_Receive": "$ref:$.channels.Receive_Alert_listDefinition.messages.Alert.listDefinition_Receive.message",
      "Alert_listDefinition_Error": "$ref:$.channels.Error_Alert_listDefinition.messages.Alert.listDefinition_Error.message"
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
  