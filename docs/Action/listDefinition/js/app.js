
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service listDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listDefinition iteraction of the Action Service."
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
    "Send_Action_listDefinition": {
      "address": "Send_Action_listDefinition",
      "messages": {
        "Action.listDefinition_Send.message": {
          "description": "Action listDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionNames": {
                "type": "string",
                "description": "The actionNames field shall contain a list of action names to retrieve the ActionIdentity and ActionDefinition object instance identifiers for.\nThe request may contain the wildcard value of '*' to return all supported ActionIdentity and ActionDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing ActionIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Action_listDefinition_Send"
          },
          "x-parser-unique-object-id": "Action.listDefinition_Send.message",
          "x-parser-message-name": "Action_listDefinition_Send"
        }
      },
      "description": "Send a **Action_listDefinition_Send** message in this channel to receive a **Action_listDefinition_Receive** message over the **Receive_Action_listDefinition** channel.\n",
      "x-parser-unique-object-id": "Send_Action_listDefinition"
    },
    "Receive_Action_listDefinition": {
      "address": "Receive_Action_listDefinition",
      "messages": {
        "Action.listDefinition_Receive.message": {
          "description": "Action listDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "actionInstIds": {
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
            "x-parser-schema-id": "Action_listDefinition_Receive"
          },
          "x-parser-unique-object-id": "Action.listDefinition_Receive.message",
          "x-parser-message-name": "Action_listDefinition_Receive"
        }
      },
      "description": "Use this channel to receive Action listDefinition responses as **Action_listDefinition_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Action_listDefinition"
    },
    "Error_Action_listDefinition": {
      "address": "Error_Action_listDefinition",
      "messages": {
        "Action.listDefinition_Error.message": {
          "description": "Action listDefinition error response",
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
            "x-parser-schema-id": "Action_listDefinition_Error"
          },
          "x-parser-unique-object-id": "Action.listDefinition_Error.message",
          "x-parser-message-name": "Action_listDefinition_Error"
        }
      },
      "description": "Use this channel to receive Action listDefinition errors as **Action_listDefinition_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Action_listDefinition"
    }
  },
  "operations": {
    "Action_listDefinition_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Action_listDefinition",
      "messages": [
        "$ref:$.channels.Send_Action_listDefinition.messages.Action.listDefinition_Send.message"
      ],
      "x-parser-unique-object-id": "Action_listDefinition_Send"
    },
    "Action_listDefinition_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Action_listDefinition",
      "messages": [
        "$ref:$.channels.Receive_Action_listDefinition.messages.Action.listDefinition_Receive.message"
      ],
      "x-parser-unique-object-id": "Action_listDefinition_Receive"
    },
    "Action_listDefinition_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Action_listDefinition",
      "messages": [
        "$ref:$.channels.Error_Action_listDefinition.messages.Action.listDefinition_Error.message"
      ],
      "x-parser-unique-object-id": "Action_listDefinition_Error"
    }
  },
  "components": {
    "schemas": {
      "Action_listDefinition_Send": "$ref:$.channels.Send_Action_listDefinition.messages.Action.listDefinition_Send.message.payload",
      "Action_listDefinition_Receive": "$ref:$.channels.Receive_Action_listDefinition.messages.Action.listDefinition_Receive.message.payload",
      "Action_listDefinition_Error": "$ref:$.channels.Error_Action_listDefinition.messages.Action.listDefinition_Error.message.payload",
      "mc": {
        "ObjectInstancePair": "$ref:$.channels.Receive_Action_listDefinition.messages.Action.listDefinition_Receive.message.payload.properties.actionInstIds",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Action_listDefinition_Send": "$ref:$.channels.Send_Action_listDefinition.messages.Action.listDefinition_Send.message",
      "Action_listDefinition_Receive": "$ref:$.channels.Receive_Action_listDefinition.messages.Action.listDefinition_Receive.message",
      "Action_listDefinition_Error": "$ref:$.channels.Error_Action_listDefinition.messages.Action.listDefinition_Error.message"
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
  