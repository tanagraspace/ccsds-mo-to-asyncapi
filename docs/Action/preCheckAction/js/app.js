
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service preCheckAction API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the preCheckAction iteraction of the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the preCheckAction interaction.",
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
    "Send_Action_preCheckAction": {
      "address": "Send_Action_preCheckAction",
      "messages": {
        "Action.preCheckAction_Send.message": {
          "description": "Action preCheckAction request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionDetails": {
                "properties": {
                  "argumentIds": {
                    "description": "Optional list of argument definition identifiers. Allows the provider to verify that the correct arguments are being supplied. The ordering of the list matches that of the argument list of the action definition.",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-4>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "argumentValues": {
                    "description": "List containing the values of the arguments. The ordering of the list matches that of the definition. If a value for a particular entry is not being supplied, then its position is filled with a NULL value. If no arguments are defined, then the complete list is replaced with a NULL.",
                    "items": {
                      "properties": {
                        "value": {
                          "description": "The argument value. Must not be NULL. NULL may be represented by having a NULL in place of the complete AttributeValue composite.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-7>"
                        }
                      },
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-6>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "defInstId": {
                    "description": "The object instance identifier of the ActionDefinition to be used.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "isRawValue": {
                    "description": "Optional list of Booleans that determine whether the supplied argument values are raw or converted. If the Boolean for a particular value is TRUE or NULL then that value is assumed to be raw. If the complete isRawValue list is NULL then all arguments are assumed to be raw values. The ordering of the list matches that of the argument list of the action definition.",
                    "items": {
                      "type": "boolean",
                      "x-parser-schema-id": "<anonymous-schema-10>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "stageCompletedRequired": {
                    "description": "If TRUE, then an activity event of type Execution is required for the COMPLETION stage.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "stageProgressRequired": {
                    "description": "If TRUE, then activity events of type Execution are required for the PROGRESS stages.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "stageStartedRequired": {
                    "description": "If TRUE, then an activity event of type Execution is required for the STARTED stage.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Action_preCheckAction_Send"
          },
          "x-parser-unique-object-id": "Action.preCheckAction_Send.message",
          "x-parser-message-name": "Action_preCheckAction_Send"
        }
      },
      "description": "Send a **Action_preCheckAction_Send** message in this channel to receive a **Action_preCheckAction_Receive** message over the **Receive_Action_preCheckAction** channel.\n",
      "x-parser-unique-object-id": "Send_Action_preCheckAction"
    },
    "Receive_Action_preCheckAction": {
      "address": "Receive_Action_preCheckAction",
      "messages": {
        "Action.preCheckAction_Receive.message": {
          "description": "Action preCheckAction update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "accepted": {
                "type": "boolean",
                "description": "The returned Boolean shall be set to TRUE if the action would be accepted successfully; otherwise the operation shall return FALSE.\n",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "Action_preCheckAction_Receive"
          },
          "x-parser-unique-object-id": "Action.preCheckAction_Receive.message",
          "x-parser-message-name": "Action_preCheckAction_Receive"
        }
      },
      "description": "Use this channel to receive Action preCheckAction responses as **Action_preCheckAction_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Action_preCheckAction"
    },
    "Error_Action_preCheckAction": {
      "address": "Error_Action_preCheckAction",
      "messages": {
        "Action.preCheckAction_Error.message": {
          "description": "Action preCheckAction error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-20>"
                },
                "x-parser-schema-id": "<anonymous-schema-19>"
              }
            },
            "x-parser-schema-id": "Action_preCheckAction_Error"
          },
          "x-parser-unique-object-id": "Action.preCheckAction_Error.message",
          "x-parser-message-name": "Action_preCheckAction_Error"
        }
      },
      "description": "Use this channel to receive Action preCheckAction errors as **Action_preCheckAction_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Action_preCheckAction"
    }
  },
  "operations": {
    "Action_preCheckAction_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Action_preCheckAction",
      "messages": [
        "$ref:$.channels.Send_Action_preCheckAction.messages.Action.preCheckAction_Send.message"
      ],
      "x-parser-unique-object-id": "Action_preCheckAction_Send"
    },
    "Action_preCheckAction_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Action_preCheckAction",
      "messages": [
        "$ref:$.channels.Receive_Action_preCheckAction.messages.Action.preCheckAction_Receive.message"
      ],
      "x-parser-unique-object-id": "Action_preCheckAction_Receive"
    },
    "Action_preCheckAction_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Action_preCheckAction",
      "messages": [
        "$ref:$.channels.Error_Action_preCheckAction.messages.Action.preCheckAction_Error.message"
      ],
      "x-parser-unique-object-id": "Action_preCheckAction_Error"
    }
  },
  "components": {
    "schemas": {
      "Action_preCheckAction_Send": "$ref:$.channels.Send_Action_preCheckAction.messages.Action.preCheckAction_Send.message.payload",
      "Action_preCheckAction_Receive": "$ref:$.channels.Receive_Action_preCheckAction.messages.Action.preCheckAction_Receive.message.payload",
      "Action_preCheckAction_Error": "$ref:$.channels.Error_Action_preCheckAction.messages.Action.preCheckAction_Error.message.payload",
      "mc": {
        "action": {
          "ActionInstanceDetails": "$ref:$.channels.Send_Action_preCheckAction.messages.Action.preCheckAction_Send.message.payload.properties.actionDetails"
        },
        "AttributeValue": "$ref:$.channels.Send_Action_preCheckAction.messages.Action.preCheckAction_Send.message.payload.properties.actionDetails.properties.argumentValues.items",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Action_preCheckAction_Send": "$ref:$.channels.Send_Action_preCheckAction.messages.Action.preCheckAction_Send.message",
      "Action_preCheckAction_Receive": "$ref:$.channels.Receive_Action_preCheckAction.messages.Action.preCheckAction_Receive.message",
      "Action_preCheckAction_Error": "$ref:$.channels.Error_Action_preCheckAction.messages.Action.preCheckAction_Error.message"
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
  