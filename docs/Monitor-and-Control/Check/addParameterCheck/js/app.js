
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service addParameterCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addParameterCheck iteraction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the addParameterCheck interaction.",
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
    "Send_Check_addParameterCheck": {
      "address": "Send_Check_addParameterCheck",
      "messages": {
        "Check.addParameterCheck_Send.message": {
          "description": "Check addParameterCheck request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "linkDetails": {
                "properties": {
                  "checkEnabled": {
                    "description": "TRUE if the check instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "checkInterval": {
                    "description": "The interval that a check should be applied. Only applicable if checkOnChange is FALSE. If '0', then no periodic checking shall be performed, and a check will be triggered by another mechanism. Ignored for Compound checks.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "checkOnChange": {
                    "description": "If TRUE then any change to state or value of the parameter, or the check condition will trigger a check evaluation. Ignored for Compound checks.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
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
                        "x-parser-schema-id": "<anonymous-schema-7>"
                      },
                      "parameterId": {
                        "properties": {
                          "domain": {
                            "description": "The domain of the object instance.",
                            "items": {
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-10>"
                            },
                            "type": "array",
                            "x-parser-schema-id": "<anonymous-schema-9>"
                          },
                          "instId": {
                            "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                            "format": "int64",
                            "type": "integer",
                            "x-parser-schema-id": "<anonymous-schema-11>"
                          }
                        },
                        "type": "object",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "useConverted": {
                        "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      },
                      "value": {
                        "description": "The value to be used in the expression.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "useConverted": {
                    "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used. Ignored for Compound checks.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "linkRefs": {
                "properties": {
                  "related": {
                    "description": "Contains the object instance identifier of a related object (e.g. the ActionDefinition that an Action uses). This is service specific. The ObjectType of the related object is specified in the service specification. The related object must exist in the same domain as this object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  },
                  "source": {
                    "properties": {
                      "key": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload.properties.linkDetails.properties.condition.properties.parameterId",
                      "type_": {
                        "properties": {
                          "area": {
                            "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                            "format": "uint16",
                            "type": "integer",
                            "x-parser-schema-id": "<anonymous-schema-19>"
                          },
                          "number": {
                            "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                            "format": "uint16",
                            "type": "integer",
                            "x-parser-schema-id": "<anonymous-schema-20>"
                          },
                          "service": {
                            "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                            "format": "uint16",
                            "type": "integer",
                            "x-parser-schema-id": "<anonymous-schema-21>"
                          },
                          "version": {
                            "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                            "format": "uint8",
                            "type": "integer",
                            "x-parser-schema-id": "<anonymous-schema-22>"
                          }
                        },
                        "type": "object",
                        "x-parser-schema-id": "<anonymous-schema-18>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "Check_addParameterCheck_Send"
          },
          "x-parser-unique-object-id": "Check.addParameterCheck_Send.message",
          "x-parser-message-name": "Check_addParameterCheck_Send"
        }
      },
      "description": "Send a **Check_addParameterCheck_Send** message in this channel to receive a **Check_addParameterCheck_Receive** message over the **Receive_Check_addParameterCheck** channel.\n",
      "x-parser-unique-object-id": "Send_Check_addParameterCheck"
    },
    "Receive_Check_addParameterCheck": {
      "address": "Receive_Check_addParameterCheck",
      "messages": {
        "Check.addParameterCheck_Receive.message": {
          "description": "Check addParameterCheck update response",
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
            "x-parser-schema-id": "Check_addParameterCheck_Receive"
          },
          "x-parser-unique-object-id": "Check.addParameterCheck_Receive.message",
          "x-parser-message-name": "Check_addParameterCheck_Receive"
        }
      },
      "description": "Use this channel to receive Check addParameterCheck responses as **Check_addParameterCheck_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Check_addParameterCheck"
    },
    "Error_Check_addParameterCheck": {
      "address": "Error_Check_addParameterCheck",
      "messages": {
        "Check.addParameterCheck_Error.message": {
          "description": "Check addParameterCheck error response",
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
                  "MAL",
                  "COM"
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
            "x-parser-schema-id": "Check_addParameterCheck_Error"
          },
          "x-parser-unique-object-id": "Check.addParameterCheck_Error.message",
          "x-parser-message-name": "Check_addParameterCheck_Error"
        }
      },
      "description": "Use this channel to receive Check addParameterCheck errors as **Check_addParameterCheck_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Check_addParameterCheck"
    }
  },
  "operations": {
    "Check_addParameterCheck_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Check_addParameterCheck",
      "messages": [
        "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message"
      ],
      "x-parser-unique-object-id": "Check_addParameterCheck_Send"
    },
    "Check_addParameterCheck_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Check_addParameterCheck",
      "messages": [
        "$ref:$.channels.Receive_Check_addParameterCheck.messages.Check.addParameterCheck_Receive.message"
      ],
      "x-parser-unique-object-id": "Check_addParameterCheck_Receive"
    },
    "Check_addParameterCheck_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Check_addParameterCheck",
      "messages": [
        "$ref:$.channels.Error_Check_addParameterCheck.messages.Check.addParameterCheck_Error.message"
      ],
      "x-parser-unique-object-id": "Check_addParameterCheck_Error"
    }
  },
  "components": {
    "schemas": {
      "Check_addParameterCheck_Send": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload",
      "Check_addParameterCheck_Receive": "$ref:$.channels.Receive_Check_addParameterCheck.messages.Check.addParameterCheck_Receive.message.payload",
      "Check_addParameterCheck_Error": "$ref:$.channels.Error_Check_addParameterCheck.messages.Check.addParameterCheck_Error.message.payload",
      "mc": {
        "check": {
          "CheckLinkDetails": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload.properties.linkDetails"
        },
        "ObjectInstancePair": "$ref:$.channels.Receive_Check_addParameterCheck.messages.Check.addParameterCheck_Receive.message.payload.properties.newObjInstIds",
        "ParameterExpression": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload.properties.linkDetails.properties.condition",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectDetails": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload.properties.linkRefs",
        "ObjectId": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload.properties.linkRefs.properties.source",
        "ObjectKey": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload.properties.linkDetails.properties.condition.properties.parameterId",
        "ObjectType": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload.properties.linkRefs.properties.source.properties.type_",
        "archive": {
          "ExpressionOperator": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message.payload.properties.linkDetails.properties.condition.properties.operator"
        },
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Check_addParameterCheck_Send": "$ref:$.channels.Send_Check_addParameterCheck.messages.Check.addParameterCheck_Send.message",
      "Check_addParameterCheck_Receive": "$ref:$.channels.Receive_Check_addParameterCheck.messages.Check.addParameterCheck_Receive.message",
      "Check_addParameterCheck_Error": "$ref:$.channels.Error_Check_addParameterCheck.messages.Check.addParameterCheck_Error.message"
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
  