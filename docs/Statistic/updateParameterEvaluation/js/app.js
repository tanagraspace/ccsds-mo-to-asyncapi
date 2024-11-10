
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service updateParameterEvaluation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateParameterEvaluation iteraction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the updateParameterEvaluation interaction.",
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
    "Send_Statistic_updateParameterEvaluation": {
      "address": "Send_Statistic_updateParameterEvaluation",
      "messages": {
        "Statistic.updateParameterEvaluation_Send.message": {
          "description": "Statistic updateParameterEvaluation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "linkIds": {
                "type": "integer",
                "description": "The linkIds field shall contain the object instance identifiers of the StatisticLink objects to be updated.\nIf the linkIds list contains either NULL or '0' an INVALID error shall be raised.\nThe supplied object instance identifiers shall match existing link objects, an UNKNOWN error shall be raised if this is not the case.\nIf the supplied samplingInterval is not supported for the requested parameter then an INVALID error shall be returned.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "newDetails": {
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
              }
            },
            "x-parser-schema-id": "Statistic_updateParameterEvaluation_Send"
          },
          "x-parser-unique-object-id": "Statistic.updateParameterEvaluation_Send.message",
          "x-parser-message-name": "Statistic_updateParameterEvaluation_Send"
        }
      },
      "description": "Send a **Statistic_updateParameterEvaluation_Send** message in this channel to receive a **Statistic_updateParameterEvaluation_Receive** message over the **Receive_Statistic_updateParameterEvaluation** channel.\n",
      "x-parser-unique-object-id": "Send_Statistic_updateParameterEvaluation"
    },
    "Receive_Statistic_updateParameterEvaluation": {
      "address": "Receive_Statistic_updateParameterEvaluation",
      "messages": {
        "Statistic.updateParameterEvaluation_Receive.message": {
          "description": "Statistic updateParameterEvaluation update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "newLinkDefIds": {
                "type": "integer",
                "description": "The response shall contain the list of object instance identifiers for the new StatisticLinkDefinition objects.\nThe returned list shall maintain the same order as the submitted links.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "Statistic_updateParameterEvaluation_Receive"
          },
          "x-parser-unique-object-id": "Statistic.updateParameterEvaluation_Receive.message",
          "x-parser-message-name": "Statistic_updateParameterEvaluation_Receive"
        }
      },
      "description": "Use this channel to receive Statistic updateParameterEvaluation responses as **Statistic_updateParameterEvaluation_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Statistic_updateParameterEvaluation"
    },
    "Error_Statistic_updateParameterEvaluation": {
      "address": "Error_Statistic_updateParameterEvaluation",
      "messages": {
        "Statistic.updateParameterEvaluation_Error.message": {
          "description": "Statistic updateParameterEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-16>"
                },
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "Statistic_updateParameterEvaluation_Error"
          },
          "x-parser-unique-object-id": "Statistic.updateParameterEvaluation_Error.message",
          "x-parser-message-name": "Statistic_updateParameterEvaluation_Error"
        }
      },
      "description": "Use this channel to receive Statistic updateParameterEvaluation errors as **Statistic_updateParameterEvaluation_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Statistic_updateParameterEvaluation"
    }
  },
  "operations": {
    "Statistic_updateParameterEvaluation_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Statistic_updateParameterEvaluation",
      "messages": [
        "$ref:$.channels.Send_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Send.message"
      ],
      "x-parser-unique-object-id": "Statistic_updateParameterEvaluation_Send"
    },
    "Statistic_updateParameterEvaluation_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Statistic_updateParameterEvaluation",
      "messages": [
        "$ref:$.channels.Receive_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Receive.message"
      ],
      "x-parser-unique-object-id": "Statistic_updateParameterEvaluation_Receive"
    },
    "Statistic_updateParameterEvaluation_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Statistic_updateParameterEvaluation",
      "messages": [
        "$ref:$.channels.Error_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Error.message"
      ],
      "x-parser-unique-object-id": "Statistic_updateParameterEvaluation_Error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_updateParameterEvaluation_Send": "$ref:$.channels.Send_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Send.message.payload",
      "Statistic_updateParameterEvaluation_Receive": "$ref:$.channels.Receive_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Receive.message.payload",
      "Statistic_updateParameterEvaluation_Error": "$ref:$.channels.Error_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Error.message.payload",
      "mc": {
        "statistic": {
          "StatisticLinkDetails": "$ref:$.channels.Send_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Send.message.payload.properties.newDetails"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Statistic_updateParameterEvaluation_Send": "$ref:$.channels.Send_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Send.message",
      "Statistic_updateParameterEvaluation_Receive": "$ref:$.channels.Receive_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Receive.message",
      "Statistic_updateParameterEvaluation_Error": "$ref:$.channels.Error_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_Error.message"
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
  