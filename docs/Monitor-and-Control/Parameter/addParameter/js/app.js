
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service addParameter API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addParameter iteraction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the addParameter interaction.",
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
    "Send_Parameter_addParameter": {
      "address": "Send_Parameter_addParameter",
      "messages": {
        "Parameter.addParameter_Send.message": {
          "description": "Parameter addParameter request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
                                "conversionId": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.parameterId"
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
                      "validityExpression": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition"
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Parameter_addParameter_Send"
          },
          "x-parser-unique-object-id": "Parameter.addParameter_Send.message",
          "x-parser-message-name": "Parameter_addParameter_Send"
        }
      },
      "description": "Send a **Parameter_addParameter_Send** message in this channel to receive a **Parameter_addParameter_Receive** message over the **Receive_Parameter_addParameter** channel.\n",
      "x-parser-unique-object-id": "Send_Parameter_addParameter"
    },
    "Receive_Parameter_addParameter": {
      "address": "Receive_Parameter_addParameter",
      "messages": {
        "Parameter.addParameter_Receive.message": {
          "description": "Parameter addParameter update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
            "x-parser-schema-id": "Parameter_addParameter_Receive"
          },
          "x-parser-unique-object-id": "Parameter.addParameter_Receive.message",
          "x-parser-message-name": "Parameter_addParameter_Receive"
        }
      },
      "description": "Use this channel to receive Parameter addParameter responses as **Parameter_addParameter_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Parameter_addParameter"
    },
    "Error_Parameter_addParameter": {
      "address": "Error_Parameter_addParameter",
      "messages": {
        "Parameter.addParameter_Error.message": {
          "description": "Parameter addParameter error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-31>"
                },
                "x-parser-schema-id": "<anonymous-schema-30>"
              }
            },
            "x-parser-schema-id": "Parameter_addParameter_Error"
          },
          "x-parser-unique-object-id": "Parameter.addParameter_Error.message",
          "x-parser-message-name": "Parameter_addParameter_Error"
        }
      },
      "description": "Use this channel to receive Parameter addParameter errors as **Parameter_addParameter_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Parameter_addParameter"
    }
  },
  "operations": {
    "Parameter_addParameter_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Parameter_addParameter",
      "messages": [
        "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message"
      ],
      "x-parser-unique-object-id": "Parameter_addParameter_Send"
    },
    "Parameter_addParameter_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Parameter_addParameter",
      "messages": [
        "$ref:$.channels.Receive_Parameter_addParameter.messages.Parameter.addParameter_Receive.message"
      ],
      "x-parser-unique-object-id": "Parameter_addParameter_Receive"
    },
    "Parameter_addParameter_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Parameter_addParameter",
      "messages": [
        "$ref:$.channels.Error_Parameter_addParameter.messages.Parameter.addParameter_Error.message"
      ],
      "x-parser-unique-object-id": "Parameter_addParameter_Error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_addParameter_Send": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload",
      "Parameter_addParameter_Receive": "$ref:$.channels.Receive_Parameter_addParameter.messages.Parameter.addParameter_Receive.message.payload",
      "Parameter_addParameter_Error": "$ref:$.channels.Error_Parameter_addParameter.messages.Parameter.addParameter_Error.message.payload",
      "mc": {
        "parameter": {
          "ParameterConversion": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion",
          "ParameterCreationRequest": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails",
          "ParameterDefinitionDetails": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails.properties.paramDefDetails"
        },
        "ConditionalConversion": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items",
        "ObjectInstancePair": "$ref:$.channels.Receive_Parameter_addParameter.messages.Parameter.addParameter_Receive.message.payload.properties.newObjInstIds",
        "ParameterExpression": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "archive": {
          "ExpressionOperator": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "ObjectKey": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Parameter_addParameter_Send": "$ref:$.channels.Send_Parameter_addParameter.messages.Parameter.addParameter_Send.message",
      "Parameter_addParameter_Receive": "$ref:$.channels.Receive_Parameter_addParameter.messages.Parameter.addParameter_Receive.message",
      "Parameter_addParameter_Error": "$ref:$.channels.Error_Parameter_addParameter.messages.Parameter.addParameter_Error.message"
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
  