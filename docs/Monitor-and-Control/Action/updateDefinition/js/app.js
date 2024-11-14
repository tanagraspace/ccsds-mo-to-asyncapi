
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition interaction of the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Action Service's updateDefinition interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Action_updateDefinition": {
      "address": "request_Action_updateDefinition",
      "messages": {
        "Action.updateDefinition_request.message": {
          "description": "Action updateDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The actionObjInstIds field shall contain the list of object instance identifiers of the ActionIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the actionObjInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "actionDefDetails": {
                "properties": {
                  "arguments": {
                    "description": "The list of argument definitions. If no arguments are defined, then the complete list is replaced with a NULL.",
                    "items": {
                      "properties": {
                        "argId": {
                          "description": "Holds the argument definition identifier.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-7>"
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
                                    "x-parser-schema-id": "<anonymous-schema-11>"
                                  },
                                  "parameterId": {
                                    "properties": {
                                      "domain": {
                                        "description": "The domain of the object instance.",
                                        "items": {
                                          "type": "string",
                                          "x-parser-schema-id": "<anonymous-schema-14>"
                                        },
                                        "type": "array",
                                        "x-parser-schema-id": "<anonymous-schema-13>"
                                      },
                                      "instId": {
                                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                                        "format": "int64",
                                        "type": "integer",
                                        "x-parser-schema-id": "<anonymous-schema-15>"
                                      }
                                    },
                                    "type": "object",
                                    "x-parser-schema-id": "<anonymous-schema-12>"
                                  },
                                  "useConverted": {
                                    "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                                    "type": "boolean",
                                    "x-parser-schema-id": "<anonymous-schema-16>"
                                  },
                                  "value": {
                                    "description": "The value to be used in the expression.",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-17>"
                                  }
                                },
                                "type": "object",
                                "x-parser-schema-id": "<anonymous-schema-10>"
                              },
                              "conversionId": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message.payload.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId"
                            },
                            "type": "object",
                            "x-parser-schema-id": "<anonymous-schema-9>"
                          },
                          "type": "array",
                          "x-parser-schema-id": "<anonymous-schema-8>"
                        },
                        "convertedType": {
                          "description": "Holds the attribute short form part of the converted type of the argument, e.g., for a MAL::String argument it shall hold 15. Must not be NULL if a conversion condition is supplied.",
                          "format": "int8",
                          "type": "integer",
                          "x-parser-schema-id": "<anonymous-schema-18>"
                        },
                        "convertedUnit": {
                          "description": "The converted argument units.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-19>"
                        },
                        "description": {
                          "description": "Optional argument description.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-20>"
                        },
                        "rawType": {
                          "description": "Holds the attribute short form part of the raw type of the argument, e.g., for a MAL::String argument it shall hold 15.",
                          "format": "int8",
                          "type": "integer",
                          "x-parser-schema-id": "<anonymous-schema-21>"
                        },
                        "rawUnit": {
                          "description": "The unit for the raw value.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-22>"
                        }
                      },
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-6>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "category": {
                    "description": "Category of the action. Value taken from ActionCategory enumeration, although the use of a UOctet allows deployment specific extension. Extensions must use values greater than 127.",
                    "format": "uint8",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  },
                  "description": {
                    "description": "The description of the action.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-24>"
                  },
                  "progressStepCount": {
                    "description": "Total number of steps that will be reported if PROGRESS reporting is selected in the sent Action. 0 if PROGRESS reporting is not used.",
                    "format": "uint16",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-25>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Action_updateDefinition_request"
          },
          "x-parser-unique-object-id": "Action.updateDefinition_request.message",
          "x-parser-message-name": "Action_updateDefinition_request"
        }
      },
      "description": "Send a **Action_updateDefinition_request** message in this channel to receive a **Action_updateDefinition_response** message over the **response_Action_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "request_Action_updateDefinition"
    },
    "response_Action_updateDefinition": {
      "address": "response_Action_updateDefinition",
      "messages": {
        "Action.updateDefinition_response.message": {
          "description": "Action updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "newDefInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-28>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new ActionDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "Action_updateDefinition_response"
          },
          "x-parser-unique-object-id": "Action.updateDefinition_response.message",
          "x-parser-message-name": "Action_updateDefinition_response"
        }
      },
      "description": "Use this channel to receive Action updateDefinition responses as **Action_updateDefinition_response** messages.\n",
      "x-parser-unique-object-id": "response_Action_updateDefinition"
    },
    "error_Action_updateDefinition": {
      "address": "error_Action_updateDefinition",
      "messages": {
        "Action.updateDefinition_error.message": {
          "description": "Action updateDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-31>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-33>"
                },
                "x-parser-schema-id": "<anonymous-schema-32>"
              }
            },
            "x-parser-schema-id": "Action_updateDefinition_error"
          },
          "x-parser-unique-object-id": "Action.updateDefinition_error.message",
          "x-parser-message-name": "Action_updateDefinition_error"
        }
      },
      "description": "Use this channel to receive Action updateDefinition errors as **Action_updateDefinition_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Action_updateDefinition"
    }
  },
  "operations": {
    "Action_updateDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Action_updateDefinition",
      "messages": [
        "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message"
      ],
      "x-parser-unique-object-id": "Action_updateDefinition_request"
    },
    "Action_updateDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Action_updateDefinition",
      "messages": [
        "$ref:$.channels.response_Action_updateDefinition.messages.Action.updateDefinition_response.message"
      ],
      "x-parser-unique-object-id": "Action_updateDefinition_response"
    },
    "Action_updateDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Action_updateDefinition",
      "messages": [
        "$ref:$.channels.error_Action_updateDefinition.messages.Action.updateDefinition_error.message"
      ],
      "x-parser-unique-object-id": "Action_updateDefinition_error"
    }
  },
  "components": {
    "schemas": {
      "Action_updateDefinition_request": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message.payload",
      "Action_updateDefinition_response": "$ref:$.channels.response_Action_updateDefinition.messages.Action.updateDefinition_response.message.payload",
      "Action_updateDefinition_error": "$ref:$.channels.error_Action_updateDefinition.messages.Action.updateDefinition_error.message.payload",
      "mc": {
        "action": {
          "ActionDefinitionDetails": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message.payload.properties.actionDefDetails"
        },
        "ArgumentDefinitionDetails": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message.payload.properties.actionDefDetails.properties.arguments.items",
        "ConditionalConversion": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message.payload.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items",
        "ParameterExpression": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message.payload.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message.payload.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "archive": {
          "ExpressionOperator": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message.payload.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Action_updateDefinition_request": "$ref:$.channels.request_Action_updateDefinition.messages.Action.updateDefinition_request.message",
      "Action_updateDefinition_response": "$ref:$.channels.response_Action_updateDefinition.messages.Action.updateDefinition_response.message",
      "Action_updateDefinition_error": "$ref:$.channels.error_Action_updateDefinition.messages.Action.updateDefinition_error.message"
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
  