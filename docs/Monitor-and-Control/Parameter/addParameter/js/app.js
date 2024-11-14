
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service addParameter API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addParameter interaction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Parameter Service's addParameter interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Parameter_addParameter": {
      "address": "request_Parameter_addParameter",
      "messages": {
        "Parameter.addParameter_request.message": {
          "description": "Parameter addParameter request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "paramDefDetails": {
                "properties": {
                  "name": {
                    "description": "The name of the parameter. Must not be empty or the wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-3>"
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
                                "conversionId": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.parameterId"
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
                      "validityExpression": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition"
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Parameter_addParameter_request"
          },
          "x-parser-unique-object-id": "Parameter.addParameter_request.message",
          "x-parser-message-name": "Parameter_addParameter_request"
        }
      },
      "description": "Send a **Parameter_addParameter_request** message in this channel to receive a **Parameter_addParameter_response** message over the **response_Parameter_addParameter** channel.\n",
      "x-parser-unique-object-id": "request_Parameter_addParameter"
    },
    "response_Parameter_addParameter": {
      "address": "response_Parameter_addParameter",
      "messages": {
        "Parameter.addParameter_response.message": {
          "description": "Parameter addParameter update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "newObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-25>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-26>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-24>"
              }
            },
            "x-parser-schema-id": "Parameter_addParameter_response"
          },
          "x-parser-unique-object-id": "Parameter.addParameter_response.message",
          "x-parser-message-name": "Parameter_addParameter_response"
        }
      },
      "description": "Use this channel to receive Parameter addParameter responses as **Parameter_addParameter_response** messages.\n",
      "x-parser-unique-object-id": "response_Parameter_addParameter"
    },
    "error_Parameter_addParameter": {
      "address": "error_Parameter_addParameter",
      "messages": {
        "Parameter.addParameter_error.message": {
          "description": "Parameter addParameter error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
                ],
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-31>"
                },
                "x-parser-schema-id": "<anonymous-schema-30>"
              }
            },
            "x-parser-schema-id": "Parameter_addParameter_error"
          },
          "x-parser-unique-object-id": "Parameter.addParameter_error.message",
          "x-parser-message-name": "Parameter_addParameter_error"
        }
      },
      "description": "Use this channel to receive Parameter addParameter errors as **Parameter_addParameter_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Parameter_addParameter"
    }
  },
  "operations": {
    "Parameter_addParameter_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Parameter_addParameter",
      "messages": [
        "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message"
      ],
      "x-parser-unique-object-id": "Parameter_addParameter_request"
    },
    "Parameter_addParameter_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Parameter_addParameter",
      "messages": [
        "$ref:$.channels.response_Parameter_addParameter.messages.Parameter.addParameter_response.message"
      ],
      "x-parser-unique-object-id": "Parameter_addParameter_response"
    },
    "Parameter_addParameter_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Parameter_addParameter",
      "messages": [
        "$ref:$.channels.error_Parameter_addParameter.messages.Parameter.addParameter_error.message"
      ],
      "x-parser-unique-object-id": "Parameter_addParameter_error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_addParameter_request": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload",
      "Parameter_addParameter_response": "$ref:$.channels.response_Parameter_addParameter.messages.Parameter.addParameter_response.message.payload",
      "Parameter_addParameter_error": "$ref:$.channels.error_Parameter_addParameter.messages.Parameter.addParameter_error.message.payload",
      "mc": {
        "parameter": {
          "ParameterConversion": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion",
          "ParameterCreationRequest": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails",
          "ParameterDefinitionDetails": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails"
        },
        "ConditionalConversion": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items",
        "ObjectInstancePair": "$ref:$.channels.response_Parameter_addParameter.messages.Parameter.addParameter_response.message.payload.properties.newObjInstIds",
        "ParameterExpression": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "archive": {
          "ExpressionOperator": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "ObjectKey": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Parameter_addParameter_request": "$ref:$.channels.request_Parameter_addParameter.messages.Parameter.addParameter_request.message",
      "Parameter_addParameter_response": "$ref:$.channels.response_Parameter_addParameter.messages.Parameter.addParameter_response.message",
      "Parameter_addParameter_error": "$ref:$.channels.error_Parameter_addParameter.messages.Parameter.addParameter_error.message"
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
  