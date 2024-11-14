
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service resetEvaluation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the resetEvaluation interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's resetEvaluation interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Statistic_resetEvaluation": {
      "address": "request_Statistic_resetEvaluation",
      "messages": {
        "Statistic.resetEvaluation_request.message": {
          "description": "Statistic resetEvaluation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "isStatLinkGroup": {
                "type": "boolean",
                "description": "If the isStatLinkGroup field is TRUE then the objInstIds field shall contain GroupIdentity object instance identifiers, otherwise the field shall contain StatisticFunction object instance identifiers.\nIf the isStatLinkGroup field is TRUE, the requested Group, or the Group objects referenced by that Group, must contain StatisticLink objects otherwise an INVALID error shall be returned.\nThe StatisticLink objects referenced, either indirectly via statistic functions or indirectly via groups, by the objInstIds field shall be the StatisticLink objects to match.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "objInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "description": "The objInstIds field shall support the wildcard value of '0' and matches all StatisticLink objects of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested function or group is unknown then an UNKNOWN error shall be returned.\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "returnLatestEval": {
                "type": "boolean",
                "description": "If the returnLatestEval Boolean field is TRUE then the latest evaluation result for each of the matched links shall be returned before resetting, otherwise a NULL is returned.\nIf an error is raised then no resetting of evaluations shall be made as a result of this operation call.\n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "Statistic_resetEvaluation_request"
          },
          "x-parser-unique-object-id": "Statistic.resetEvaluation_request.message",
          "x-parser-message-name": "Statistic_resetEvaluation_request"
        }
      },
      "description": "Send a **Statistic_resetEvaluation_request** message in this channel to receive a **Statistic_resetEvaluation_response** message over the **response_Statistic_resetEvaluation** channel.\n",
      "x-parser-unique-object-id": "request_Statistic_resetEvaluation"
    },
    "response_Statistic_resetEvaluation": {
      "address": "response_Statistic_resetEvaluation",
      "messages": {
        "Statistic.resetEvaluation_response.message": {
          "description": "Statistic resetEvaluation update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "evaluations": {
                "properties": {
                  "linkId": {
                    "description": "The statistic link object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "value": {
                    "properties": {
                      "endTime": {
                        "description": "Time the statistic calculations ended. This value can be NULL if the time can be derived by other means, e.g., other times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "paramDefInstId": {
                        "description": "The object instance identifier of the ParameterDefinition object used for the parameter.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "sampleCount": {
                        "description": "Holds the number of samples that contributed to the statistic value. For calculated values such as 'mean average' this holds the number of samples that were used to calculate the value, for non-calculated values such as 'min' then it is the number of samples that were in the set evaluated.",
                        "format": "uint32",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      },
                      "startTime": {
                        "description": "Time the statistic calculations started. This value can be NULL if the start time can be derived by other means, e.g., other start times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      },
                      "value": {
                        "description": "Value of the statistic.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-14>"
                      },
                      "valueTime": {
                        "description": "Time the statistic value was reached. The time is only applicable for particular statistic values such as min or max. Shall be NULL if not applicable for cases such as 'mean average'.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "Statistic_resetEvaluation_response"
          },
          "x-parser-unique-object-id": "Statistic.resetEvaluation_response.message",
          "x-parser-message-name": "Statistic_resetEvaluation_response"
        }
      },
      "description": "Use this channel to receive Statistic resetEvaluation responses as **Statistic_resetEvaluation_response** messages.\n",
      "x-parser-unique-object-id": "response_Statistic_resetEvaluation"
    },
    "error_Statistic_resetEvaluation": {
      "address": "error_Statistic_resetEvaluation",
      "messages": {
        "Statistic.resetEvaluation_error.message": {
          "description": "Statistic resetEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-20>"
                },
                "x-parser-schema-id": "<anonymous-schema-19>"
              }
            },
            "x-parser-schema-id": "Statistic_resetEvaluation_error"
          },
          "x-parser-unique-object-id": "Statistic.resetEvaluation_error.message",
          "x-parser-message-name": "Statistic_resetEvaluation_error"
        }
      },
      "description": "Use this channel to receive Statistic resetEvaluation errors as **Statistic_resetEvaluation_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Statistic_resetEvaluation"
    }
  },
  "operations": {
    "Statistic_resetEvaluation_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Statistic_resetEvaluation",
      "messages": [
        "$ref:$.channels.request_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_request.message"
      ],
      "x-parser-unique-object-id": "Statistic_resetEvaluation_request"
    },
    "Statistic_resetEvaluation_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Statistic_resetEvaluation",
      "messages": [
        "$ref:$.channels.response_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_response.message"
      ],
      "x-parser-unique-object-id": "Statistic_resetEvaluation_response"
    },
    "Statistic_resetEvaluation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Statistic_resetEvaluation",
      "messages": [
        "$ref:$.channels.error_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_error.message"
      ],
      "x-parser-unique-object-id": "Statistic_resetEvaluation_error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_resetEvaluation_request": "$ref:$.channels.request_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_request.message.payload",
      "Statistic_resetEvaluation_response": "$ref:$.channels.response_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_response.message.payload",
      "Statistic_resetEvaluation_error": "$ref:$.channels.error_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_error.message.payload",
      "mc": {
        "statistic": {
          "StatisticEvaluationReport": "$ref:$.channels.response_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_response.message.payload.properties.evaluations",
          "StatisticValue": "$ref:$.channels.response_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_response.message.payload.properties.evaluations.properties.value"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Statistic_resetEvaluation_request": "$ref:$.channels.request_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_request.message",
      "Statistic_resetEvaluation_response": "$ref:$.channels.response_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_response.message",
      "Statistic_resetEvaluation_error": "$ref:$.channels.error_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_error.message"
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
  