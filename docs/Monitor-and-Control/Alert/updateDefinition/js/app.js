
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition interaction of the Alert Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Alert Service's updateDefinition interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Alert_updateDefinition": {
      "address": "request_Alert_updateDefinition",
      "messages": {
        "Alert.updateDefinition_request.message": {
          "description": "Alert updateDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "alertObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The alertObjInstIds field shall contain the object instance identifiers of the AlertIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the alertObjInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "alertDefDetails": {
                "properties": {
                  "arguments": {
                    "description": "The list of argument definitions.",
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
                              "conversionId": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId"
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
                  "description": {
                    "description": "The description of the alert.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  },
                  "generationEnabled": {
                    "description": "Controls whether instances of this alert are to be generated.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-24>"
                  },
                  "severity": {
                    "description": "The severity enumeration holds the possible values for a severity. The numerical value represents the increasing severity, therefore CRITICAL is more severe than ALARM. Normally, for checks, only the Warning and Critical ranges are used: the colour yellow is associated with Warning, and the colour red is associated with Critical.",
                    "enum": [
                      "INFORMATIONAL",
                      "WARNING",
                      "ALARM",
                      "SEVERE",
                      "CRITICAL"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-25>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Alert_updateDefinition_request"
          },
          "x-parser-unique-object-id": "Alert.updateDefinition_request.message",
          "x-parser-message-name": "Alert_updateDefinition_request"
        }
      },
      "description": "Send a **Alert_updateDefinition_request** message in this channel to receive a **Alert_updateDefinition_response** message over the **response_Alert_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "request_Alert_updateDefinition"
    },
    "response_Alert_updateDefinition": {
      "address": "response_Alert_updateDefinition",
      "messages": {
        "Alert.updateDefinition_response.message": {
          "description": "Alert updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-28>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new AlertDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "Alert_updateDefinition_response"
          },
          "x-parser-unique-object-id": "Alert.updateDefinition_response.message",
          "x-parser-message-name": "Alert_updateDefinition_response"
        }
      },
      "description": "Use this channel to receive Alert updateDefinition responses as **Alert_updateDefinition_response** messages.\n",
      "x-parser-unique-object-id": "response_Alert_updateDefinition"
    },
    "error_Alert_updateDefinition": {
      "address": "error_Alert_updateDefinition",
      "messages": {
        "Alert.updateDefinition_error.message": {
          "description": "Alert updateDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
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
                  "UNKNOWN",
                  "INVALID"
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
            "x-parser-schema-id": "Alert_updateDefinition_error"
          },
          "x-parser-unique-object-id": "Alert.updateDefinition_error.message",
          "x-parser-message-name": "Alert_updateDefinition_error"
        }
      },
      "description": "Use this channel to receive Alert updateDefinition errors as **Alert_updateDefinition_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Alert_updateDefinition"
    }
  },
  "operations": {
    "Alert_updateDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Alert_updateDefinition",
      "messages": [
        "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message"
      ],
      "x-parser-unique-object-id": "Alert_updateDefinition_request"
    },
    "Alert_updateDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Alert_updateDefinition",
      "messages": [
        "$ref:$.channels.response_Alert_updateDefinition.messages.Alert.updateDefinition_response.message"
      ],
      "x-parser-unique-object-id": "Alert_updateDefinition_response"
    },
    "Alert_updateDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Alert_updateDefinition",
      "messages": [
        "$ref:$.channels.error_Alert_updateDefinition.messages.Alert.updateDefinition_error.message"
      ],
      "x-parser-unique-object-id": "Alert_updateDefinition_error"
    }
  },
  "components": {
    "schemas": {
      "Alert_updateDefinition_request": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload",
      "Alert_updateDefinition_response": "$ref:$.channels.response_Alert_updateDefinition.messages.Alert.updateDefinition_response.message.payload",
      "Alert_updateDefinition_error": "$ref:$.channels.error_Alert_updateDefinition.messages.Alert.updateDefinition_error.message.payload",
      "mc": {
        "alert": {
          "AlertDefinitionDetails": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload.properties.alertDefDetails"
        },
        "ArgumentDefinitionDetails": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload.properties.alertDefDetails.properties.arguments.items",
        "ConditionalConversion": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items",
        "ParameterExpression": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition",
        "Severity": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload.properties.alertDefDetails.properties.severity",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "archive": {
          "ExpressionOperator": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Alert_updateDefinition_request": "$ref:$.channels.request_Alert_updateDefinition.messages.Alert.updateDefinition_request.message",
      "Alert_updateDefinition_response": "$ref:$.channels.response_Alert_updateDefinition.messages.Alert.updateDefinition_response.message",
      "Alert_updateDefinition_error": "$ref:$.channels.error_Alert_updateDefinition.messages.Alert.updateDefinition_error.message"
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
  