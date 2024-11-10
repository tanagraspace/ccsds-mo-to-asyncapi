
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition iteraction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the updateDefinition interaction.",
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
    "Send_Parameter_updateDefinition": {
      "address": "Send_Parameter_updateDefinition",
      "messages": {
        "Parameter.updateDefinition_Send.message": {
          "description": "Parameter updateDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "paramInstIds": {
                "type": "integer",
                "description": "The paramInstIds field shall contain the object instance identifiers of the ParameterIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the paramInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "format": "int64",
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
                                  "x-parser-schema-id": "<anonymous-schema-8>"
                                },
                                "parameterId": {
                                  "properties": {
                                    "domain": {
                                      "description": "The domain of the object instance.",
                                      "items": {
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-11>"
                                      },
                                      "type": "array",
                                      "x-parser-schema-id": "<anonymous-schema-10>"
                                    },
                                    "instId": {
                                      "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                                      "format": "int64",
                                      "type": "integer",
                                      "x-parser-schema-id": "<anonymous-schema-12>"
                                    }
                                  },
                                  "type": "object",
                                  "x-parser-schema-id": "<anonymous-schema-9>"
                                },
                                "useConverted": {
                                  "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                                  "type": "boolean",
                                  "x-parser-schema-id": "<anonymous-schema-13>"
                                },
                                "value": {
                                  "description": "The value to be used in the expression.",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-14>"
                                }
                              },
                              "type": "object",
                              "x-parser-schema-id": "<anonymous-schema-7>"
                            },
                            "conversionId": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.parameterId"
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-6>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-5>"
                      },
                      "convertedType": {
                        "description": "Holds the attribute short form part of the converted type of the parameter, e.g., for a MAL::String parameter it shall hold 15.",
                        "format": "int8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      },
                      "convertedUnit": {
                        "description": "The converted parameter unit. If NULL then converted type has no unit.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "description": {
                    "description": "The description of the parameter. May be empty.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  },
                  "generationEnabled": {
                    "description": "Controls whether reports for this parameter are to be generated.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-18>"
                  },
                  "rawType": {
                    "description": "Holds the attribute short form part of the raw type of the parameter, e.g., for a MAL::String parameter it shall hold 15.",
                    "format": "int8",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  },
                  "rawUnit": {
                    "description": "The unit for the raw value. If NULL then raw type has no unit.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-20>"
                  },
                  "reportInterval": {
                    "description": "Periodic report interval. No periodic reports to be generated if this is set to '0'.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-21>"
                  },
                  "validityExpression": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "Parameter_updateDefinition_Send"
          },
          "x-parser-unique-object-id": "Parameter.updateDefinition_Send.message",
          "x-parser-message-name": "Parameter_updateDefinition_Send"
        }
      },
      "description": "Send a **Parameter_updateDefinition_Send** message in this channel to receive a **Parameter_updateDefinition_Receive** message over the **Receive_Parameter_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "Send_Parameter_updateDefinition"
    },
    "Receive_Parameter_updateDefinition": {
      "address": "Receive_Parameter_updateDefinition",
      "messages": {
        "Parameter.updateDefinition_Receive.message": {
          "description": "Parameter updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "newObjInstIds": {
                "type": "integer",
                "description": "The response shall contain the list of object instance identifiers for the new ParameterDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-23>"
              }
            },
            "x-parser-schema-id": "Parameter_updateDefinition_Receive"
          },
          "x-parser-unique-object-id": "Parameter.updateDefinition_Receive.message",
          "x-parser-message-name": "Parameter_updateDefinition_Receive"
        }
      },
      "description": "Use this channel to receive Parameter updateDefinition responses as **Parameter_updateDefinition_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Parameter_updateDefinition"
    },
    "Error_Parameter_updateDefinition": {
      "address": "Error_Parameter_updateDefinition",
      "messages": {
        "Parameter.updateDefinition_Error.message": {
          "description": "Parameter updateDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-28>"
                },
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "Parameter_updateDefinition_Error"
          },
          "x-parser-unique-object-id": "Parameter.updateDefinition_Error.message",
          "x-parser-message-name": "Parameter_updateDefinition_Error"
        }
      },
      "description": "Use this channel to receive Parameter updateDefinition errors as **Parameter_updateDefinition_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Parameter_updateDefinition"
    }
  },
  "operations": {
    "Parameter_updateDefinition_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Parameter_updateDefinition",
      "messages": [
        "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message"
      ],
      "x-parser-unique-object-id": "Parameter_updateDefinition_Send"
    },
    "Parameter_updateDefinition_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Parameter_updateDefinition",
      "messages": [
        "$ref:$.channels.Receive_Parameter_updateDefinition.messages.Parameter.updateDefinition_Receive.message"
      ],
      "x-parser-unique-object-id": "Parameter_updateDefinition_Receive"
    },
    "Parameter_updateDefinition_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Parameter_updateDefinition",
      "messages": [
        "$ref:$.channels.Error_Parameter_updateDefinition.messages.Parameter.updateDefinition_Error.message"
      ],
      "x-parser-unique-object-id": "Parameter_updateDefinition_Error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_updateDefinition_Send": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload",
      "Parameter_updateDefinition_Receive": "$ref:$.channels.Receive_Parameter_updateDefinition.messages.Parameter.updateDefinition_Receive.message.payload",
      "Parameter_updateDefinition_Error": "$ref:$.channels.Error_Parameter_updateDefinition.messages.Parameter.updateDefinition_Error.message.payload",
      "mc": {
        "parameter": {
          "ParameterConversion": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload.properties.paramDefDetails.properties.conversion",
          "ParameterDefinitionDetails": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload.properties.paramDefDetails"
        },
        "ConditionalConversion": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items",
        "ParameterExpression": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "archive": {
          "ExpressionOperator": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "ObjectKey": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message.payload.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Parameter_updateDefinition_Send": "$ref:$.channels.Send_Parameter_updateDefinition.messages.Parameter.updateDefinition_Send.message",
      "Parameter_updateDefinition_Receive": "$ref:$.channels.Receive_Parameter_updateDefinition.messages.Parameter.updateDefinition_Receive.message",
      "Parameter_updateDefinition_Error": "$ref:$.channels.Error_Parameter_updateDefinition.messages.Parameter.updateDefinition_Error.message"
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
  