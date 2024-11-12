
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service submitAction API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the submitAction iteraction of the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the submitAction interaction.",
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
    "Send_Action_submitAction": {
      "address": "Send_Action_submitAction",
      "messages": {
        "Action.submitAction_Send.message": {
          "description": "Action submitAction request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionInstId": {
                "type": "integer",
                "description": "The actionInstId field of the submission shall contain the object instance identifier of the ActionInstance to be used for activity tracking events.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "actionDetails": {
                "properties": {
                  "argumentIds": {
                    "description": "Optional list of argument definition identifiers. Allows the provider to verify that the correct arguments are being supplied. The ordering of the list matches that of the argument list of the action definition.",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-5>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "argumentValues": {
                    "description": "List containing the values of the arguments. The ordering of the list matches that of the definition. If a value for a particular entry is not being supplied, then its position is filled with a NULL value. If no arguments are defined, then the complete list is replaced with a NULL.",
                    "items": {
                      "properties": {
                        "value": {
                          "description": "The argument value. Must not be NULL. NULL may be represented by having a NULL in place of the complete AttributeValue composite.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-8>"
                        }
                      },
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "defInstId": {
                    "description": "The object instance identifier of the ActionDefinition to be used.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "isRawValue": {
                    "description": "Optional list of Booleans that determine whether the supplied argument values are raw or converted. If the Boolean for a particular value is TRUE or NULL then that value is assumed to be raw. If the complete isRawValue list is NULL then all arguments are assumed to be raw values. The ordering of the list matches that of the argument list of the action definition.",
                    "items": {
                      "type": "boolean",
                      "x-parser-schema-id": "<anonymous-schema-11>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "stageCompletedRequired": {
                    "description": "If TRUE, then an activity event of type Execution is required for the COMPLETION stage.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "stageProgressRequired": {
                    "description": "If TRUE, then activity events of type Execution are required for the PROGRESS stages.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "stageStartedRequired": {
                    "description": "If TRUE, then an activity event of type Execution is required for the STARTED stage.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "Action_submitAction_Send"
          },
          "x-parser-unique-object-id": "Action.submitAction_Send.message",
          "x-parser-message-name": "Action_submitAction_Send"
        }
      },
      "description": "Send a **Action_submitAction_Send** message in this channel to receive a **Action_submitAction_Receive** message over the **Receive_Action_submitAction** channel.\n",
      "x-parser-unique-object-id": "Send_Action_submitAction"
    },
    "Error_Action_submitAction": {
      "address": "Error_Action_submitAction",
      "messages": {
        "Action.submitAction_Error.message": {
          "description": "Action submitAction error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-19>"
                },
                "x-parser-schema-id": "<anonymous-schema-18>"
              }
            },
            "x-parser-schema-id": "Action_submitAction_Error"
          },
          "x-parser-unique-object-id": "Action.submitAction_Error.message",
          "x-parser-message-name": "Action_submitAction_Error"
        }
      },
      "description": "Use this channel to receive Action submitAction errors as **Action_submitAction_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Action_submitAction"
    }
  },
  "operations": {
    "Action_submitAction_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Action_submitAction",
      "messages": [
        "$ref:$.channels.Send_Action_submitAction.messages.Action.submitAction_Send.message"
      ],
      "x-parser-unique-object-id": "Action_submitAction_Send"
    },
    "Action_submitAction_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Action_submitAction",
      "messages": [
        "$ref:$.channels.Error_Action_submitAction.messages.Action.submitAction_Error.message"
      ],
      "x-parser-unique-object-id": "Action_submitAction_Error"
    }
  },
  "components": {
    "schemas": {
      "Action_submitAction_Send": "$ref:$.channels.Send_Action_submitAction.messages.Action.submitAction_Send.message.payload",
      "Action_submitAction_Error": "$ref:$.channels.Error_Action_submitAction.messages.Action.submitAction_Error.message.payload",
      "mc": {
        "action": {
          "ActionInstanceDetails": "$ref:$.channels.Send_Action_submitAction.messages.Action.submitAction_Send.message.payload.properties.actionDetails"
        },
        "AttributeValue": "$ref:$.channels.Send_Action_submitAction.messages.Action.submitAction_Send.message.payload.properties.actionDetails.properties.argumentValues.items",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Action_submitAction_Send": "$ref:$.channels.Send_Action_submitAction.messages.Action.submitAction_Send.message",
      "Action_submitAction_Error": "$ref:$.channels.Error_Action_submitAction.messages.Action.submitAction_Error.message"
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
  