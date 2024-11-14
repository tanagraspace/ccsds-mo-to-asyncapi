
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition interaction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Parameter Service's updateDefinition interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Parameter_updateDefinition": {
      "address": "request_Parameter_updateDefinition",
      "messages": {
        "Parameter.updateDefinition_request.message": {
          "description": "Parameter updateDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "paramInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The paramInstIds field shall contain the object instance identifiers of the ParameterIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the paramInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "paramDefDetails": {
                "properties": {
                  "conversion": {
                    "properties": {
                      "conditionalConversions": {
                        "description": "The conversions to be applied. Only the first TRUE conversion should be applied.",
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
                                  "x-parser-schema-id": "<anonymous-schema-9>"
                                },
                                "parameterId": {
                                  "properties": {
                                    "domain": {
                                      "description": "The domain of the object instance.",
                                      "items": {
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-12>"
                                      },
                                      "type": "array",
                                      "x-parser-schema-id": "<anonymous-schema-11>"
                                    },
                                    "instId": {
                                      "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                                      "format": "int64",
                                      "type": "integer",
                                      "x-parser-schema-id": "<anonymous-schema-13>"
                                    }
                                  },
                                  "type": "object",
                                  "x-parser-schema-id": "<anonymous-schema-10>"
                                },
                                "useConverted": {
                                  "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                                  "type": "boolean",
                                  "x-parser-schema-id": "<anonymous-schema-14>"
                                },
                                "value": {
                                  "description": "The value to be used in the expression.",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-15>"
                                }
                              },
                              "type": "object",
                              "x-parser-schema-id": "<anonymous-schema-8>"
                            },
                            "conversionId": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.parameterId"
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-7>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      },
                      "convertedType": {
                        "description": "Holds the attribute short form part of the converted type of the parameter, e.g., for a MAL::String parameter it shall hold 15.",
                        "format": "int8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      },
                      "convertedUnit": {
                        "description": "The converted parameter unit. If NULL then converted type has no unit.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-17>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "description": {
                    "description": "The description of the parameter. May be empty.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-18>"
                  },
                  "generationEnabled": {
                    "description": "Controls whether reports for this parameter are to be generated.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  },
                  "rawType": {
                    "description": "Holds the attribute short form part of the raw type of the parameter, e.g., for a MAL::String parameter it shall hold 15.",
                    "format": "int8",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-20>"
                  },
                  "rawUnit": {
                    "description": "The unit for the raw value. If NULL then raw type has no unit.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-21>"
                  },
                  "reportInterval": {
                    "description": "Periodic report interval. No periodic reports to be generated if this is set to '0'.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-22>"
                  },
                  "validityExpression": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Parameter_updateDefinition_request"
          },
          "x-parser-unique-object-id": "Parameter.updateDefinition_request.message",
          "x-parser-message-name": "Parameter_updateDefinition_request"
        }
      },
      "description": "Send a **Parameter_updateDefinition_request** message in this channel to receive a **Parameter_updateDefinition_response** message over the **response_Parameter_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "request_Parameter_updateDefinition"
    },
    "response_Parameter_updateDefinition": {
      "address": "response_Parameter_updateDefinition",
      "messages": {
        "Parameter.updateDefinition_response.message": {
          "description": "Parameter updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-25>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new ParameterDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-24>"
              }
            },
            "x-parser-schema-id": "Parameter_updateDefinition_response"
          },
          "x-parser-unique-object-id": "Parameter.updateDefinition_response.message",
          "x-parser-message-name": "Parameter_updateDefinition_response"
        }
      },
      "description": "Use this channel to receive Parameter updateDefinition responses as **Parameter_updateDefinition_response** messages.\n",
      "x-parser-unique-object-id": "response_Parameter_updateDefinition"
    },
    "error_Parameter_updateDefinition": {
      "address": "error_Parameter_updateDefinition",
      "messages": {
        "Parameter.updateDefinition_error.message": {
          "description": "Parameter updateDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-30>"
                },
                "x-parser-schema-id": "<anonymous-schema-29>"
              }
            },
            "x-parser-schema-id": "Parameter_updateDefinition_error"
          },
          "x-parser-unique-object-id": "Parameter.updateDefinition_error.message",
          "x-parser-message-name": "Parameter_updateDefinition_error"
        }
      },
      "description": "Use this channel to receive Parameter updateDefinition errors as **Parameter_updateDefinition_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Parameter_updateDefinition"
    }
  },
  "operations": {
    "Parameter_updateDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Parameter_updateDefinition",
      "messages": [
        "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message"
      ],
      "x-parser-unique-object-id": "Parameter_updateDefinition_request"
    },
    "Parameter_updateDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Parameter_updateDefinition",
      "messages": [
        "$ref:$.channels.response_Parameter_updateDefinition.messages.Parameter.updateDefinition_response.message"
      ],
      "x-parser-unique-object-id": "Parameter_updateDefinition_response"
    },
    "Parameter_updateDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Parameter_updateDefinition",
      "messages": [
        "$ref:$.channels.error_Parameter_updateDefinition.messages.Parameter.updateDefinition_error.message"
      ],
      "x-parser-unique-object-id": "Parameter_updateDefinition_error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_updateDefinition_request": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload",
      "Parameter_updateDefinition_response": "$ref:$.channels.response_Parameter_updateDefinition.messages.Parameter.updateDefinition_response.message.payload",
      "Parameter_updateDefinition_error": "$ref:$.channels.error_Parameter_updateDefinition.messages.Parameter.updateDefinition_error.message.payload",
      "mc": {
        "parameter": {
          "ParameterConversion": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload.properties.paramDefDetails.properties.conversion",
          "ParameterDefinitionDetails": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload.properties.paramDefDetails"
        },
        "ConditionalConversion": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items",
        "ParameterExpression": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "archive": {
          "ExpressionOperator": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "ObjectKey": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Parameter_updateDefinition_request": "$ref:$.channels.request_Parameter_updateDefinition.messages.Parameter.updateDefinition_request.message",
      "Parameter_updateDefinition_response": "$ref:$.channels.response_Parameter_updateDefinition.messages.Parameter.updateDefinition_response.message",
      "Parameter_updateDefinition_error": "$ref:$.channels.error_Parameter_updateDefinition.messages.Parameter.updateDefinition_error.message"
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
  