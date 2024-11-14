
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service addParameterEvaluation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addParameterEvaluation interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's addParameterEvaluation interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Statistic_addParameterEvaluation": {
      "address": "request_Statistic_addParameterEvaluation",
      "messages": {
        "Statistic.addParameterEvaluation_request.message": {
          "description": "Statistic addParameterEvaluation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
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
            "x-parser-schema-id": "Statistic_addParameterEvaluation_request"
          },
          "x-parser-unique-object-id": "Statistic.addParameterEvaluation_request.message",
          "x-parser-message-name": "Statistic_addParameterEvaluation_request"
        }
      },
      "description": "Send a **Statistic_addParameterEvaluation_request** message in this channel to receive a **Statistic_addParameterEvaluation_response** message over the **response_Statistic_addParameterEvaluation** channel.\n",
      "x-parser-unique-object-id": "request_Statistic_addParameterEvaluation"
    },
    "response_Statistic_addParameterEvaluation": {
      "address": "response_Statistic_addParameterEvaluation",
      "messages": {
        "Statistic.addParameterEvaluation_response.message": {
          "description": "Statistic addParameterEvaluation update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
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
            "x-parser-schema-id": "Statistic_addParameterEvaluation_response"
          },
          "x-parser-unique-object-id": "Statistic.addParameterEvaluation_response.message",
          "x-parser-message-name": "Statistic_addParameterEvaluation_response"
        }
      },
      "description": "Use this channel to receive Statistic addParameterEvaluation responses as **Statistic_addParameterEvaluation_response** messages.\n",
      "x-parser-unique-object-id": "response_Statistic_addParameterEvaluation"
    },
    "error_Statistic_addParameterEvaluation": {
      "address": "error_Statistic_addParameterEvaluation",
      "messages": {
        "Statistic.addParameterEvaluation_error.message": {
          "description": "Statistic addParameterEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
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
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-23>"
                },
                "x-parser-schema-id": "<anonymous-schema-22>"
              }
            },
            "x-parser-schema-id": "Statistic_addParameterEvaluation_error"
          },
          "x-parser-unique-object-id": "Statistic.addParameterEvaluation_error.message",
          "x-parser-message-name": "Statistic_addParameterEvaluation_error"
        }
      },
      "description": "Use this channel to receive Statistic addParameterEvaluation errors as **Statistic_addParameterEvaluation_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Statistic_addParameterEvaluation"
    }
  },
  "operations": {
    "Statistic_addParameterEvaluation_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Statistic_addParameterEvaluation",
      "messages": [
        "$ref:$.channels.request_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_request.message"
      ],
      "x-parser-unique-object-id": "Statistic_addParameterEvaluation_request"
    },
    "Statistic_addParameterEvaluation_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Statistic_addParameterEvaluation",
      "messages": [
        "$ref:$.channels.response_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_response.message"
      ],
      "x-parser-unique-object-id": "Statistic_addParameterEvaluation_response"
    },
    "Statistic_addParameterEvaluation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Statistic_addParameterEvaluation",
      "messages": [
        "$ref:$.channels.error_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_error.message"
      ],
      "x-parser-unique-object-id": "Statistic_addParameterEvaluation_error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_addParameterEvaluation_request": "$ref:$.channels.request_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_request.message.payload",
      "Statistic_addParameterEvaluation_response": "$ref:$.channels.response_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_response.message.payload",
      "Statistic_addParameterEvaluation_error": "$ref:$.channels.error_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_error.message.payload",
      "mc": {
        "statistic": {
          "StatisticCreationRequest": "$ref:$.channels.request_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_request.message.payload.properties.newDetails",
          "StatisticLinkDetails": "$ref:$.channels.request_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_request.message.payload.properties.newDetails.properties.linkDetails"
        },
        "ObjectInstancePair": "$ref:$.channels.response_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_response.message.payload.properties.newObjInstIds",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.request_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_request.message.payload.properties.newDetails.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Statistic_addParameterEvaluation_request": "$ref:$.channels.request_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_request.message",
      "Statistic_addParameterEvaluation_response": "$ref:$.channels.response_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_response.message",
      "Statistic_addParameterEvaluation_error": "$ref:$.channels.error_Statistic_addParameterEvaluation.messages.Statistic.addParameterEvaluation_error.message"
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
  