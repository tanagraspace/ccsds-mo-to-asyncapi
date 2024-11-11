
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition iteraction of the Alert Service."
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
    "Send_Alert_updateDefinition": {
      "address": "Send_Alert_updateDefinition",
      "messages": {
        "Alert.updateDefinition_Send.message": {
          "description": "Alert updateDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "alertObjInstIds": {
                "type": "integer",
                "description": "The alertObjInstIds field shall contain the object instance identifiers of the AlertIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the alertObjInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "format": "int64",
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
                              "conversionId": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId"
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
                  "description": {
                    "description": "The description of the alert.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-22>"
                  },
                  "generationEnabled": {
                    "description": "Controls whether instances of this alert are to be generated.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-23>"
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
                    "x-parser-schema-id": "<anonymous-schema-24>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "Alert_updateDefinition_Send"
          },
          "x-parser-unique-object-id": "Alert.updateDefinition_Send.message",
          "x-parser-message-name": "Alert_updateDefinition_Send"
        }
      },
      "description": "Send a **Alert_updateDefinition_Send** message in this channel to receive a **Alert_updateDefinition_Receive** message over the **Receive_Alert_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "Send_Alert_updateDefinition"
    },
    "Receive_Alert_updateDefinition": {
      "address": "Receive_Alert_updateDefinition",
      "messages": {
        "Alert.updateDefinition_Receive.message": {
          "description": "Alert updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "newObjInstIds": {
                "type": "integer",
                "description": "The response shall contain the list of object instance identifiers for the new AlertDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-26>"
              }
            },
            "x-parser-schema-id": "Alert_updateDefinition_Receive"
          },
          "x-parser-unique-object-id": "Alert.updateDefinition_Receive.message",
          "x-parser-message-name": "Alert_updateDefinition_Receive"
        }
      },
      "description": "Use this channel to receive Alert updateDefinition responses as **Alert_updateDefinition_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Alert_updateDefinition"
    },
    "Error_Alert_updateDefinition": {
      "address": "Error_Alert_updateDefinition",
      "messages": {
        "Alert.updateDefinition_Error.message": {
          "description": "Alert updateDefinition error response",
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
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
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
            "x-parser-schema-id": "Alert_updateDefinition_Error"
          },
          "x-parser-unique-object-id": "Alert.updateDefinition_Error.message",
          "x-parser-message-name": "Alert_updateDefinition_Error"
        }
      },
      "description": "Use this channel to receive Alert updateDefinition errors as **Alert_updateDefinition_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Alert_updateDefinition"
    }
  },
  "operations": {
    "Alert_updateDefinition_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Alert_updateDefinition",
      "messages": [
        "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message"
      ],
      "x-parser-unique-object-id": "Alert_updateDefinition_Send"
    },
    "Alert_updateDefinition_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Alert_updateDefinition",
      "messages": [
        "$ref:$.channels.Receive_Alert_updateDefinition.messages.Alert.updateDefinition_Receive.message"
      ],
      "x-parser-unique-object-id": "Alert_updateDefinition_Receive"
    },
    "Alert_updateDefinition_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Alert_updateDefinition",
      "messages": [
        "$ref:$.channels.Error_Alert_updateDefinition.messages.Alert.updateDefinition_Error.message"
      ],
      "x-parser-unique-object-id": "Alert_updateDefinition_Error"
    }
  },
  "components": {
    "schemas": {
      "Alert_updateDefinition_Send": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload",
      "Alert_updateDefinition_Receive": "$ref:$.channels.Receive_Alert_updateDefinition.messages.Alert.updateDefinition_Receive.message.payload",
      "Alert_updateDefinition_Error": "$ref:$.channels.Error_Alert_updateDefinition.messages.Alert.updateDefinition_Error.message.payload",
      "mc": {
        "alert": {
          "AlertDefinitionDetails": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload.properties.alertDefDetails"
        },
        "ArgumentDefinitionDetails": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload.properties.alertDefDetails.properties.arguments.items",
        "ConditionalConversion": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items",
        "ParameterExpression": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition",
        "Severity": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload.properties.alertDefDetails.properties.severity",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "archive": {
          "ExpressionOperator": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message.payload.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Alert_updateDefinition_Send": "$ref:$.channels.Send_Alert_updateDefinition.messages.Alert.updateDefinition_Send.message",
      "Alert_updateDefinition_Receive": "$ref:$.channels.Receive_Alert_updateDefinition.messages.Alert.updateDefinition_Receive.message",
      "Alert_updateDefinition_Error": "$ref:$.channels.Error_Alert_updateDefinition.messages.Alert.updateDefinition_Error.message"
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
  