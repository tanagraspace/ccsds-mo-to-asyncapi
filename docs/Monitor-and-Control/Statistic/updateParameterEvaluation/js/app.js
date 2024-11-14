
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service updateParameterEvaluation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateParameterEvaluation interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's updateParameterEvaluation interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Statistic_updateParameterEvaluation": {
      "address": "request_Statistic_updateParameterEvaluation",
      "messages": {
        "Statistic.updateParameterEvaluation_request.message": {
          "description": "Statistic updateParameterEvaluation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "linkIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The linkIds field shall contain the object instance identifiers of the StatisticLink objects to be updated.\nIf the linkIds list contains either NULL or '0' an INVALID error shall be raised.\nThe supplied object instance identifiers shall match existing link objects, an UNKNOWN error shall be raised if this is not the case.\nIf the supplied samplingInterval is not supported for the requested parameter then an INVALID error shall be returned.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "newDetails": {
                "properties": {
                  "collectionInterval": {
                    "description": "The collection and reset interval of the statistical evaluation for the linked parameter. If set to '0', then no periodic reset of the evaluation shall be performed.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "reportingEnabled": {
                    "description": "TRUE if reporting of the evaluation instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "reportingInterval": {
                    "description": "The interval between periodic reports being generated. If set to '0', then no periodic reports shall be sent.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "resetEveryCollection": {
                    "description": "If TRUE the evaluation will reset its value every collection interval. If FALSE it will maintain a moving evaluation of the function for the collection interval.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "samplingInterval": {
                    "description": "The interval between samples of the parameter.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "useConverted": {
                    "description": "If TRUE then use the converted value of the Parameter, else use the raw value",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Statistic_updateParameterEvaluation_request"
          },
          "x-parser-unique-object-id": "Statistic.updateParameterEvaluation_request.message",
          "x-parser-message-name": "Statistic_updateParameterEvaluation_request"
        }
      },
      "description": "Send a **Statistic_updateParameterEvaluation_request** message in this channel to receive a **Statistic_updateParameterEvaluation_response** message over the **response_Statistic_updateParameterEvaluation** channel.\n",
      "x-parser-unique-object-id": "request_Statistic_updateParameterEvaluation"
    },
    "response_Statistic_updateParameterEvaluation": {
      "address": "response_Statistic_updateParameterEvaluation",
      "messages": {
        "Statistic.updateParameterEvaluation_response.message": {
          "description": "Statistic updateParameterEvaluation update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "newLinkDefIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new StatisticLinkDefinition objects.\nThe returned list shall maintain the same order as the submitted links.\n",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "Statistic_updateParameterEvaluation_response"
          },
          "x-parser-unique-object-id": "Statistic.updateParameterEvaluation_response.message",
          "x-parser-message-name": "Statistic_updateParameterEvaluation_response"
        }
      },
      "description": "Use this channel to receive Statistic updateParameterEvaluation responses as **Statistic_updateParameterEvaluation_response** messages.\n",
      "x-parser-unique-object-id": "response_Statistic_updateParameterEvaluation"
    },
    "error_Statistic_updateParameterEvaluation": {
      "address": "error_Statistic_updateParameterEvaluation",
      "messages": {
        "Statistic.updateParameterEvaluation_error.message": {
          "description": "Statistic updateParameterEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-18>"
                },
                "x-parser-schema-id": "<anonymous-schema-17>"
              }
            },
            "x-parser-schema-id": "Statistic_updateParameterEvaluation_error"
          },
          "x-parser-unique-object-id": "Statistic.updateParameterEvaluation_error.message",
          "x-parser-message-name": "Statistic_updateParameterEvaluation_error"
        }
      },
      "description": "Use this channel to receive Statistic updateParameterEvaluation errors as **Statistic_updateParameterEvaluation_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Statistic_updateParameterEvaluation"
    }
  },
  "operations": {
    "Statistic_updateParameterEvaluation_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Statistic_updateParameterEvaluation",
      "messages": [
        "$ref:$.channels.request_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_request.message"
      ],
      "x-parser-unique-object-id": "Statistic_updateParameterEvaluation_request"
    },
    "Statistic_updateParameterEvaluation_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Statistic_updateParameterEvaluation",
      "messages": [
        "$ref:$.channels.response_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_response.message"
      ],
      "x-parser-unique-object-id": "Statistic_updateParameterEvaluation_response"
    },
    "Statistic_updateParameterEvaluation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Statistic_updateParameterEvaluation",
      "messages": [
        "$ref:$.channels.error_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_error.message"
      ],
      "x-parser-unique-object-id": "Statistic_updateParameterEvaluation_error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_updateParameterEvaluation_request": "$ref:$.channels.request_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_request.message.payload",
      "Statistic_updateParameterEvaluation_response": "$ref:$.channels.response_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_response.message.payload",
      "Statistic_updateParameterEvaluation_error": "$ref:$.channels.error_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_error.message.payload",
      "mc": {
        "statistic": {
          "StatisticLinkDetails": "$ref:$.channels.request_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_request.message.payload.properties.newDetails"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Statistic_updateParameterEvaluation_request": "$ref:$.channels.request_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_request.message",
      "Statistic_updateParameterEvaluation_response": "$ref:$.channels.response_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_response.message",
      "Statistic_updateParameterEvaluation_error": "$ref:$.channels.error_Statistic_updateParameterEvaluation.messages.Statistic.updateParameterEvaluation_error.message"
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
  