
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service resetEvaluation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the resetEvaluation iteraction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the resetEvaluation interaction.",
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
    "Send_Statistic_resetEvaluation": {
      "address": "Send_Statistic_resetEvaluation",
      "messages": {
        "Statistic.resetEvaluation_Send.message": {
          "description": "Statistic resetEvaluation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "isStatLinkGroup": {
                "type": "boolean",
                "description": "If the isStatLinkGroup field is TRUE then the objInstIds field shall contain GroupIdentity object instance identifiers, otherwise the field shall contain StatisticFunction object instance identifiers.\nIf the isStatLinkGroup field is TRUE, the requested Group, or the Group objects referenced by that Group, must contain StatisticLink objects otherwise an INVALID error shall be returned.\nThe StatisticLink objects referenced, either indirectly via statistic functions or indirectly via groups, by the objInstIds field shall be the StatisticLink objects to match.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "objInstIds": {
                "type": "integer",
                "description": "The objInstIds field shall support the wildcard value of '0' and matches all StatisticLink objects of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested function or group is unknown then an UNKNOWN error shall be returned.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "returnLatestEval": {
                "type": "boolean",
                "description": "If the returnLatestEval Boolean field is TRUE then the latest evaluation result for each of the matched links shall be returned before resetting, otherwise a NULL is returned.\nIf an error is raised then no resetting of evaluations shall be made as a result of this operation call.\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Statistic_resetEvaluation_Send"
          },
          "x-parser-unique-object-id": "Statistic.resetEvaluation_Send.message",
          "x-parser-message-name": "Statistic_resetEvaluation_Send"
        }
      },
      "description": "Send a **Statistic_resetEvaluation_Send** message in this channel to receive a **Statistic_resetEvaluation_Receive** message over the **Receive_Statistic_resetEvaluation** channel.\n",
      "x-parser-unique-object-id": "Send_Statistic_resetEvaluation"
    },
    "Receive_Statistic_resetEvaluation": {
      "address": "Receive_Statistic_resetEvaluation",
      "messages": {
        "Statistic.resetEvaluation_Receive.message": {
          "description": "Statistic resetEvaluation update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "evaluations": {
                "properties": {
                  "linkId": {
                    "description": "The statistic link object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "value": {
                    "properties": {
                      "endTime": {
                        "description": "Time the statistic calculations ended. This value can be NULL if the time can be derived by other means, e.g., other times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "paramDefInstId": {
                        "description": "The object instance identifier of the ParameterDefinition object used for the parameter.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "sampleCount": {
                        "description": "Holds the number of samples that contributed to the statistic value. For calculated values such as 'mean average' this holds the number of samples that were used to calculate the value, for non-calculated values such as 'min' then it is the number of samples that were in the set evaluated.",
                        "format": "uint32",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "startTime": {
                        "description": "Time the statistic calculations started. This value can be NULL if the start time can be derived by other means, e.g., other start times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      },
                      "value": {
                        "description": "Value of the statistic.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      },
                      "valueTime": {
                        "description": "Time the statistic value was reached. The time is only applicable for particular statistic values such as min or max. Shall be NULL if not applicable for cases such as 'mean average'.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-14>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "Statistic_resetEvaluation_Receive"
          },
          "x-parser-unique-object-id": "Statistic.resetEvaluation_Receive.message",
          "x-parser-message-name": "Statistic_resetEvaluation_Receive"
        }
      },
      "description": "Use this channel to receive Statistic resetEvaluation responses as **Statistic_resetEvaluation_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Statistic_resetEvaluation"
    },
    "Error_Statistic_resetEvaluation": {
      "address": "Error_Statistic_resetEvaluation",
      "messages": {
        "Statistic.resetEvaluation_Error.message": {
          "description": "Statistic resetEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-19>"
                },
                "x-parser-schema-id": "<anonymous-schema-18>"
              }
            },
            "x-parser-schema-id": "Statistic_resetEvaluation_Error"
          },
          "x-parser-unique-object-id": "Statistic.resetEvaluation_Error.message",
          "x-parser-message-name": "Statistic_resetEvaluation_Error"
        }
      },
      "description": "Use this channel to receive Statistic resetEvaluation errors as **Statistic_resetEvaluation_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Statistic_resetEvaluation"
    }
  },
  "operations": {
    "Statistic_resetEvaluation_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Statistic_resetEvaluation",
      "messages": [
        "$ref:$.channels.Send_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Send.message"
      ],
      "x-parser-unique-object-id": "Statistic_resetEvaluation_Send"
    },
    "Statistic_resetEvaluation_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Statistic_resetEvaluation",
      "messages": [
        "$ref:$.channels.Receive_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Receive.message"
      ],
      "x-parser-unique-object-id": "Statistic_resetEvaluation_Receive"
    },
    "Statistic_resetEvaluation_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Statistic_resetEvaluation",
      "messages": [
        "$ref:$.channels.Error_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Error.message"
      ],
      "x-parser-unique-object-id": "Statistic_resetEvaluation_Error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_resetEvaluation_Send": "$ref:$.channels.Send_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Send.message.payload",
      "Statistic_resetEvaluation_Receive": "$ref:$.channels.Receive_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Receive.message.payload",
      "Statistic_resetEvaluation_Error": "$ref:$.channels.Error_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Error.message.payload",
      "mc": {
        "statistic": {
          "StatisticEvaluationReport": "$ref:$.channels.Receive_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Receive.message.payload.properties.evaluations",
          "StatisticValue": "$ref:$.channels.Receive_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Receive.message.payload.properties.evaluations.properties.value"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Statistic_resetEvaluation_Send": "$ref:$.channels.Send_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Send.message",
      "Statistic_resetEvaluation_Receive": "$ref:$.channels.Receive_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Receive.message",
      "Statistic_resetEvaluation_Error": "$ref:$.channels.Error_Statistic_resetEvaluation.messages.Statistic.resetEvaluation_Error.message"
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
  