
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service addAlert API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addAlert iteraction of the Alert Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the addAlert interaction.",
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
    "Send_Alert_addAlert": {
      "address": "Send_Alert_addAlert",
      "messages": {
        "Alert.addAlert_Send.message": {
          "description": "Alert addAlert request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "alertDefDetails": {
                "properties": {
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
                                  "conversionId": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId"
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
                  },
                  "name": {
                    "description": "Alert name. Must not be empty or wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-25>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Alert_addAlert_Send"
          },
          "x-parser-unique-object-id": "Alert.addAlert_Send.message",
          "x-parser-message-name": "Alert_addAlert_Send"
        }
      },
      "description": "Send a **Alert_addAlert_Send** message in this channel to receive a **Alert_addAlert_Receive** message over the **Receive_Alert_addAlert** channel.\n",
      "x-parser-unique-object-id": "Send_Alert_addAlert"
    },
    "Receive_Alert_addAlert": {
      "address": "Receive_Alert_addAlert",
      "messages": {
        "Alert.addAlert_Receive.message": {
          "description": "Alert addAlert update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
            "x-parser-schema-id": "Alert_addAlert_Receive"
          },
          "x-parser-unique-object-id": "Alert.addAlert_Receive.message",
          "x-parser-message-name": "Alert_addAlert_Receive"
        }
      },
      "description": "Use this channel to receive Alert addAlert responses as **Alert_addAlert_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Alert_addAlert"
    },
    "Error_Alert_addAlert": {
      "address": "Error_Alert_addAlert",
      "messages": {
        "Alert.addAlert_Error.message": {
          "description": "Alert addAlert error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
                  "DUPLICATE",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-32>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-34>"
                },
                "x-parser-schema-id": "<anonymous-schema-33>"
              }
            },
            "x-parser-schema-id": "Alert_addAlert_Error"
          },
          "x-parser-unique-object-id": "Alert.addAlert_Error.message",
          "x-parser-message-name": "Alert_addAlert_Error"
        }
      },
      "description": "Use this channel to receive Alert addAlert errors as **Alert_addAlert_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Alert_addAlert"
    }
  },
  "operations": {
    "Alert_addAlert_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Alert_addAlert",
      "messages": [
        "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message"
      ],
      "x-parser-unique-object-id": "Alert_addAlert_Send"
    },
    "Alert_addAlert_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Alert_addAlert",
      "messages": [
        "$ref:$.channels.Receive_Alert_addAlert.messages.Alert.addAlert_Receive.message"
      ],
      "x-parser-unique-object-id": "Alert_addAlert_Receive"
    },
    "Alert_addAlert_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Alert_addAlert",
      "messages": [
        "$ref:$.channels.Error_Alert_addAlert.messages.Alert.addAlert_Error.message"
      ],
      "x-parser-unique-object-id": "Alert_addAlert_Error"
    }
  },
  "components": {
    "schemas": {
      "Alert_addAlert_Send": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload",
      "Alert_addAlert_Receive": "$ref:$.channels.Receive_Alert_addAlert.messages.Alert.addAlert_Receive.message.payload",
      "Alert_addAlert_Error": "$ref:$.channels.Error_Alert_addAlert.messages.Alert.addAlert_Error.message.payload",
      "mc": {
        "alert": {
          "AlertCreationRequest": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails",
          "AlertDefinitionDetails": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails.properties.alertDefDetails"
        },
        "ArgumentDefinitionDetails": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items",
        "ConditionalConversion": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items",
        "ObjectInstancePair": "$ref:$.channels.Receive_Alert_addAlert.messages.Alert.addAlert_Receive.message.payload.properties.newObjInstIds",
        "ParameterExpression": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition",
        "Severity": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.severity",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "archive": {
          "ExpressionOperator": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Alert_addAlert_Send": "$ref:$.channels.Send_Alert_addAlert.messages.Alert.addAlert_Send.message",
      "Alert_addAlert_Receive": "$ref:$.channels.Receive_Alert_addAlert.messages.Alert.addAlert_Receive.message",
      "Alert_addAlert_Error": "$ref:$.channels.Error_Alert_addAlert.messages.Alert.addAlert_Error.message"
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
  