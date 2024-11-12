
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service addParameterEvaluation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addParameterEvaluation iteraction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the addParameterEvaluation interaction.",
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
    "Send_Statistic_addParameterEvaluation": {
      "address": "Send_Statistic_addParameterEvaluation",
      "messages": {
        "Statistic.addParameterEvaluation_Send.message": {
          "description": "Statistic addParameterEvaluation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "newDetails": {
                "properties": {
                  "linkDetails": {
                    "properties": {
                      "collectionInterval": {
                        "description": "The collection and reset interval of the statistical evaluation for the linked parameter. If set to '0', then no periodic reset of the evaluation shall be performed.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-4>"
                      },
                      "reportingEnabled": {
                        "description": "TRUE if reporting of the evaluation instance is enabled.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-5>"
                      },
                      "reportingInterval": {
                        "description": "The interval between periodic reports being generated. If set to '0', then no periodic reports shall be sent.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      },
                      "resetEveryCollection": {
                        "description": "If TRUE the evaluation will reset its value every collection interval. If FALSE it will maintain a moving evaluation of the function for the collection interval.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-7>"
                      },
                      "samplingInterval": {
                        "description": "The interval between samples of the parameter.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "useConverted": {
                        "description": "If TRUE then use the converted value of the Parameter, else use the raw value",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-3>"
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
                  "statFuncInstId": {
                    "description": "The object instance identifier of the statistical function to be used.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Statistic_addParameterEvaluation_Send"
          },
          "x-parser-unique-object-id": "Statistic.addParameterEvaluation_Send.message",
          "x-parser-message-name": "Statistic_addParameterEvaluation_Send"
        }
      },
      "description": "Send a **Statistic_addParameterEvaluation_Send** message in this channel to receive a **Statistic_addParameterEvaluation_Receive** message over the **Receive_Statistic_addParameterEvaluation** channel.\n",
      "x-parser-unique-object-id": "Send_Statistic_addParameterEvaluation"
    },
    "Receive_Statistic_addParameterEvaluation": {
      "address": "Receive_Statistic_addParameterEvaluation",
      "messages": {
        "Statistic.addParameterEvaluation_Receive.message": {
          "description": "Statistic addParameterEvaluation update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "newObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-18>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-16>"
              }
            },
            "x-parser-schema-id": "Statistic_addParameterEvaluation_Receive"
          },
          "x-parser-unique-object-id": "Statistic.addParameterEvaluation_Receive.message",
          "x-parser-message-name": "Statistic_addParameterEvaluation_Receive"
        }
      },
      "description": "Use this channel to receive Statistic addParameterEvaluation responses as **Statistic_addParameterEvaluation_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Statistic_addParameterEvaluation"
    },
    "Error_Statistic_addParameterEvaluation": {
      "address": "Error_Statistic_addParameterEvaluation",
      "messages": {
        "Statistic.addParameterEvaluation_Error.message": {
          "description": "Statistic addParameterEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-23>"
                },
                "x-parser-schema-id": "<anonymous-schema-22>"
              }
            },
            "x-parser-schema-id": "Statistic_addParameterEvaluation_Error"
          },
          "x-parser-unique-object-id": "Statistic.addParameterEvaluation_Error.message",
          "x-parser-message-name": "Statistic_addParameterEvaluation_Error"
        }
      },
      "description": "Use this channel to receive Statistic addParameterEvaluation errors as **Statistic_addParameterEvaluation_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Statistic_addParameterEvaluation"
    }
  },
  "operations": {
    "Statistic_addParameterEvaluation_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Statistic_addParameterEvaluation",
      "messages": [
        "$ref:$.channels.Send_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Send.message"
      ],
      "x-parser-unique-object-id": "Statistic_addParameterEvaluation_Send"
    },
    "Statistic_addParameterEvaluation_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Statistic_addParameterEvaluation",
      "messages": [
        "$ref:$.channels.Receive_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Receive.message"
      ],
      "x-parser-unique-object-id": "Statistic_addParameterEvaluation_Receive"
    },
    "Statistic_addParameterEvaluation_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Statistic_addParameterEvaluation",
      "messages": [
        "$ref:$.channels.Error_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Error.message"
      ],
      "x-parser-unique-object-id": "Statistic_addParameterEvaluation_Error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_addParameterEvaluation_Send": "$ref:$.channels.Send_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Send.message.payload",
      "Statistic_addParameterEvaluation_Receive": "$ref:$.channels.Receive_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Receive.message.payload",
      "Statistic_addParameterEvaluation_Error": "$ref:$.channels.Error_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Error.message.payload",
      "mc": {
        "statistic": {
          "StatisticCreationRequest": "$ref:$.channels.Send_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Send.message.payload.properties.newDetails",
          "StatisticLinkDetails": "$ref:$.channels.Send_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Send.message.payload.properties.newDetails.properties.linkDetails"
        },
        "ObjectInstancePair": "$ref:$.channels.Receive_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Receive.message.payload.properties.newObjInstIds",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.Send_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Send.message.payload.properties.newDetails.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Statistic_addParameterEvaluation_Send": "$ref:$.channels.Send_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Send.message",
      "Statistic_addParameterEvaluation_Receive": "$ref:$.channels.Receive_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Receive.message",
      "Statistic_addParameterEvaluation_Error": "$ref:$.channels.Error_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_Error.message"
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
  