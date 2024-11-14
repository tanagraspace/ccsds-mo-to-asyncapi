
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service preCheckAction API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the preCheckAction interaction of the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Action Service's preCheckAction interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Action_preCheckAction": {
      "address": "request_Action_preCheckAction",
      "messages": {
        "Action.preCheckAction_request.message": {
          "description": "Action preCheckAction request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
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
            "x-parser-schema-id": "Action_preCheckAction_request"
          },
          "x-parser-unique-object-id": "Action.preCheckAction_request.message",
          "x-parser-message-name": "Action_preCheckAction_request"
        }
      },
      "description": "Send a **Action_preCheckAction_request** message in this channel to receive a **Action_preCheckAction_response** message over the **response_Action_preCheckAction** channel.\n",
      "x-parser-unique-object-id": "request_Action_preCheckAction"
    },
    "response_Action_preCheckAction": {
      "address": "response_Action_preCheckAction",
      "messages": {
        "Action.preCheckAction_response.message": {
          "description": "Action preCheckAction update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "accepted": {
                "type": "boolean",
                "description": "The returned Boolean shall be set to TRUE if the action would be accepted successfully; otherwise the operation shall return FALSE.\n",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "Action_preCheckAction_response"
          },
          "x-parser-unique-object-id": "Action.preCheckAction_response.message",
          "x-parser-message-name": "Action_preCheckAction_response"
        }
      },
      "description": "Use this channel to receive Action preCheckAction responses as **Action_preCheckAction_response** messages.\n",
      "x-parser-unique-object-id": "response_Action_preCheckAction"
    },
    "error_Action_preCheckAction": {
      "address": "error_Action_preCheckAction",
      "messages": {
        "Action.preCheckAction_error.message": {
          "description": "Action preCheckAction error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
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
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-20>"
                },
                "x-parser-schema-id": "<anonymous-schema-19>"
              }
            },
            "x-parser-schema-id": "Action_preCheckAction_error"
          },
          "x-parser-unique-object-id": "Action.preCheckAction_error.message",
          "x-parser-message-name": "Action_preCheckAction_error"
        }
      },
      "description": "Use this channel to receive Action preCheckAction errors as **Action_preCheckAction_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Action_preCheckAction"
    }
  },
  "operations": {
    "Action_preCheckAction_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Action_preCheckAction",
      "messages": [
        "$ref:$.channels.request_Action_preCheckAction.messages.Action.preCheckAction_request.message"
      ],
      "x-parser-unique-object-id": "Action_preCheckAction_request"
    },
    "Action_preCheckAction_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Action_preCheckAction",
      "messages": [
        "$ref:$.channels.response_Action_preCheckAction.messages.Action.preCheckAction_response.message"
      ],
      "x-parser-unique-object-id": "Action_preCheckAction_response"
    },
    "Action_preCheckAction_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Action_preCheckAction",
      "messages": [
        "$ref:$.channels.error_Action_preCheckAction.messages.Action.preCheckAction_error.message"
      ],
      "x-parser-unique-object-id": "Action_preCheckAction_error"
    }
  },
  "components": {
    "schemas": {
      "Action_preCheckAction_request": "$ref:$.channels.request_Action_preCheckAction.messages.Action.preCheckAction_request.message.payload",
      "Action_preCheckAction_response": "$ref:$.channels.response_Action_preCheckAction.messages.Action.preCheckAction_response.message.payload",
      "Action_preCheckAction_error": "$ref:$.channels.error_Action_preCheckAction.messages.Action.preCheckAction_error.message.payload",
      "mc": {
        "action": {
          "ActionInstanceDetails": "$ref:$.channels.request_Action_preCheckAction.messages.Action.preCheckAction_request.message.payload.properties.actionDetails"
        },
        "AttributeValue": "$ref:$.channels.request_Action_preCheckAction.messages.Action.preCheckAction_request.message.payload.properties.actionDetails.properties.argumentValues.items",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Action_preCheckAction_request": "$ref:$.channels.request_Action_preCheckAction.messages.Action.preCheckAction_request.message",
      "Action_preCheckAction_response": "$ref:$.channels.response_Action_preCheckAction.messages.Action.preCheckAction_response.message",
      "Action_preCheckAction_error": "$ref:$.channels.error_Action_preCheckAction.messages.Action.preCheckAction_error.message"
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
  