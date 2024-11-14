
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service addAction API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addAction interaction of the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Action Service's addAction interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Action_addAction": {
      "address": "request_Action_addAction",
      "messages": {
        "Action.addAction_request.message": {
          "description": "Action addAction request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionDefDetails": {
                "properties": {
                  "actionDefDetails": {
                    "properties": {
                      "arguments": {
                        "description": "The list of argument definitions. If no arguments are defined, then the complete list is replaced with a NULL.",
                        "items": {
                          "properties": {
                            "argId": {
                              "description": "Holds the argument definition identifier.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-6>"
                            },
                            "conditionalConversions": {
                              "description": "The conditional conversions to apply to the argument. Only the first TRUE conversion should be applied.",
                              "items": {
                                "properties": {
                                  "condition": {
                                    "properties": {
                                      "operator": {
                                        "description": "The ExpressionOperator enumeration holds a set of possible expression operators.",
                                        "enum": [
                                          "EQUAL",
                                          "DIFFER",
                                          "GREATER",
                                          "GREATER_OR_EQUAL",
                                          "LESS",
                                          "LESS_OR_EQUAL",
                                          "CONTAINS",
                                          "ICONTAINS"
                                        ],
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-10>"
                                      },
                                      "parameterId": {
                                        "properties": {
                                          "domain": {
                                            "description": "The domain of the object instance.",
                                            "items": {
                                              "type": "string",
                                              "x-parser-schema-id": "<anonymous-schema-13>"
                                            },
                                            "type": "array",
                                            "x-parser-schema-id": "<anonymous-schema-12>"
                                          },
                                          "instId": {
                                            "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                                            "format": "int64",
                                            "type": "integer",
                                            "x-parser-schema-id": "<anonymous-schema-14>"
                                          }
                                        },
                                        "type": "object",
                                        "x-parser-schema-id": "<anonymous-schema-11>"
                                      },
                                      "useConverted": {
                                        "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                                        "type": "boolean",
                                        "x-parser-schema-id": "<anonymous-schema-15>"
                                      },
                                      "value": {
                                        "description": "The value to be used in the expression.",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-16>"
                                      }
                                    },
                                    "type": "object",
                                    "x-parser-schema-id": "<anonymous-schema-9>"
                                  },
                                  "conversionId": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId"
                                },
                                "type": "object",
                                "x-parser-schema-id": "<anonymous-schema-8>"
                              },
                              "type": "array",
                              "x-parser-schema-id": "<anonymous-schema-7>"
                            },
                            "convertedType": {
                              "description": "Holds the attribute short form part of the converted type of the argument, e.g., for a MAL::String argument it shall hold 15. Must not be NULL if a conversion condition is supplied.",
                              "format": "int8",
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-17>"
                            },
                            "convertedUnit": {
                              "description": "The converted argument units.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-18>"
                            },
                            "description": {
                              "description": "Optional argument description.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-19>"
                            },
                            "rawType": {
                              "description": "Holds the attribute short form part of the raw type of the argument, e.g., for a MAL::String argument it shall hold 15.",
                              "format": "int8",
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-20>"
                            },
                            "rawUnit": {
                              "description": "The unit for the raw value.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-21>"
                            }
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-5>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-4>"
                      },
                      "category": {
                        "description": "Category of the action. Value taken from ActionCategory enumeration, although the use of a UOctet allows deployment specific extension. Extensions must use values greater than 127.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-22>"
                      },
                      "description": {
                        "description": "The description of the action.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-23>"
                      },
                      "progressStepCount": {
                        "description": "Total number of steps that will be reported if PROGRESS reporting is selected in the sent Action. 0 if PROGRESS reporting is not used.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-24>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "name": {
                    "description": "The name of the action. Must not be empty or the wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-25>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Action_addAction_request"
          },
          "x-parser-unique-object-id": "Action.addAction_request.message",
          "x-parser-message-name": "Action_addAction_request"
        }
      },
      "description": "Send a **Action_addAction_request** message in this channel to receive a **Action_addAction_response** message over the **response_Action_addAction** channel.\n",
      "x-parser-unique-object-id": "request_Action_addAction"
    },
    "response_Action_addAction": {
      "address": "response_Action_addAction",
      "messages": {
        "Action.addAction_response.message": {
          "description": "Action addAction update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "newObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-28>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-29>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "Action_addAction_response"
          },
          "x-parser-unique-object-id": "Action.addAction_response.message",
          "x-parser-message-name": "Action_addAction_response"
        }
      },
      "description": "Use this channel to receive Action addAction responses as **Action_addAction_response** messages.\n",
      "x-parser-unique-object-id": "response_Action_addAction"
    },
    "error_Action_addAction": {
      "address": "error_Action_addAction",
      "messages": {
        "Action.addAction_error.message": {
          "description": "Action addAction error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-31>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
                ],
                "x-parser-schema-id": "<anonymous-schema-32>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-34>"
                },
                "x-parser-schema-id": "<anonymous-schema-33>"
              }
            },
            "x-parser-schema-id": "Action_addAction_error"
          },
          "x-parser-unique-object-id": "Action.addAction_error.message",
          "x-parser-message-name": "Action_addAction_error"
        }
      },
      "description": "Use this channel to receive Action addAction errors as **Action_addAction_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Action_addAction"
    }
  },
  "operations": {
    "Action_addAction_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Action_addAction",
      "messages": [
        "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message"
      ],
      "x-parser-unique-object-id": "Action_addAction_request"
    },
    "Action_addAction_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Action_addAction",
      "messages": [
        "$ref:$.channels.response_Action_addAction.messages.Action.addAction_response.message"
      ],
      "x-parser-unique-object-id": "Action_addAction_response"
    },
    "Action_addAction_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Action_addAction",
      "messages": [
        "$ref:$.channels.error_Action_addAction.messages.Action.addAction_error.message"
      ],
      "x-parser-unique-object-id": "Action_addAction_error"
    }
  },
  "components": {
    "schemas": {
      "Action_addAction_request": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload",
      "Action_addAction_response": "$ref:$.channels.response_Action_addAction.messages.Action.addAction_response.message.payload",
      "Action_addAction_error": "$ref:$.channels.error_Action_addAction.messages.Action.addAction_error.message.payload",
      "mc": {
        "action": {
          "ActionCreationRequest": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload.properties.actionDefDetails",
          "ActionDefinitionDetails": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails"
        },
        "ArgumentDefinitionDetails": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items",
        "ConditionalConversion": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items",
        "ObjectInstancePair": "$ref:$.channels.response_Action_addAction.messages.Action.addAction_response.message.payload.properties.newObjInstIds",
        "ParameterExpression": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "archive": {
          "ExpressionOperator": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Action_addAction_request": "$ref:$.channels.request_Action_addAction.messages.Action.addAction_request.message",
      "Action_addAction_response": "$ref:$.channels.response_Action_addAction.messages.Action.addAction_response.message",
      "Action_addAction_error": "$ref:$.channels.error_Action_addAction.messages.Action.addAction_error.message"
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
  