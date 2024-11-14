
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service getStatistics API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getStatistics interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's getStatistics interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Statistic_getStatistics": {
      "address": "request_Statistic_getStatistics",
      "messages": {
        "Statistic.getStatistics_request.message": {
          "description": "Statistic getStatistics request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "funcObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The funcObjInstIds field shall include a list of StatisticFunction object instance identifiers to match.\nThe funcObjInstIds field shall support the wildcard value of '0' and will match all functions of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "isGroup": {
                "type": "boolean",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "paramObjInstIds": {
                "properties": {
                  "domain": {
                    "description": "The domain of the object instance.",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "instId": {
                    "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "Statistic_getStatistics_request"
          },
          "x-parser-unique-object-id": "Statistic.getStatistics_request.message",
          "x-parser-message-name": "Statistic_getStatistics_request"
        }
      },
      "description": "Send a **Statistic_getStatistics_request** message in this channel to receive a **Statistic_getStatistics_response** message over the **response_Statistic_getStatistics** channel.\n",
      "x-parser-unique-object-id": "request_Statistic_getStatistics"
    },
    "response_Statistic_getStatistics": {
      "address": "response_Statistic_getStatistics",
      "messages": {
        "Statistic.getStatistics_response.message": {
          "description": "Statistic getStatistics update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "evaluations": {
                "properties": {
                  "linkId": {
                    "description": "The statistic link object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "value": {
                    "properties": {
                      "endTime": {
                        "description": "Time the statistic calculations ended. This value can be NULL if the time can be derived by other means, e.g., other times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      },
                      "paramDefInstId": {
                        "description": "The object instance identifier of the ParameterDefinition object used for the parameter.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-14>"
                      },
                      "sampleCount": {
                        "description": "Holds the number of samples that contributed to the statistic value. For calculated values such as 'mean average' this holds the number of samples that were used to calculate the value, for non-calculated values such as 'min' then it is the number of samples that were in the set evaluated.",
                        "format": "uint32",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      },
                      "startTime": {
                        "description": "Time the statistic calculations started. This value can be NULL if the start time can be derived by other means, e.g., other start times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      },
                      "value": {
                        "description": "Value of the statistic.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-17>"
                      },
                      "valueTime": {
                        "description": "Time the statistic value was reached. The time is only applicable for particular statistic values such as min or max. Shall be NULL if not applicable for cases such as 'mean average'.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-18>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "Statistic_getStatistics_response"
          },
          "x-parser-unique-object-id": "Statistic.getStatistics_response.message",
          "x-parser-message-name": "Statistic_getStatistics_response"
        }
      },
      "description": "Use this channel to receive Statistic getStatistics responses as **Statistic_getStatistics_response** messages.\n",
      "x-parser-unique-object-id": "response_Statistic_getStatistics"
    },
    "error_Statistic_getStatistics": {
      "address": "error_Statistic_getStatistics",
      "messages": {
        "Statistic.getStatistics_error.message": {
          "description": "Statistic getStatistics error response",
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
            "x-parser-schema-id": "Statistic_getStatistics_error"
          },
          "x-parser-unique-object-id": "Statistic.getStatistics_error.message",
          "x-parser-message-name": "Statistic_getStatistics_error"
        }
      },
      "description": "Use this channel to receive Statistic getStatistics errors as **Statistic_getStatistics_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Statistic_getStatistics"
    }
  },
  "operations": {
    "Statistic_getStatistics_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Statistic_getStatistics",
      "messages": [
        "$ref:$.channels.request_Statistic_getStatistics.messages.Statistic.getStatistics_request.message"
      ],
      "x-parser-unique-object-id": "Statistic_getStatistics_request"
    },
    "Statistic_getStatistics_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Statistic_getStatistics",
      "messages": [
        "$ref:$.channels.response_Statistic_getStatistics.messages.Statistic.getStatistics_response.message"
      ],
      "x-parser-unique-object-id": "Statistic_getStatistics_response"
    },
    "Statistic_getStatistics_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Statistic_getStatistics",
      "messages": [
        "$ref:$.channels.error_Statistic_getStatistics.messages.Statistic.getStatistics_error.message"
      ],
      "x-parser-unique-object-id": "Statistic_getStatistics_error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_getStatistics_request": "$ref:$.channels.request_Statistic_getStatistics.messages.Statistic.getStatistics_request.message.payload",
      "Statistic_getStatistics_response": "$ref:$.channels.response_Statistic_getStatistics.messages.Statistic.getStatistics_response.message.payload",
      "Statistic_getStatistics_error": "$ref:$.channels.error_Statistic_getStatistics.messages.Statistic.getStatistics_error.message.payload",
      "com": {
        "ObjectKey": "$ref:$.channels.request_Statistic_getStatistics.messages.Statistic.getStatistics_request.message.payload.properties.paramObjInstIds",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "statistic": {
          "StatisticEvaluationReport": "$ref:$.channels.response_Statistic_getStatistics.messages.Statistic.getStatistics_response.message.payload.properties.evaluations",
          "StatisticValue": "$ref:$.channels.response_Statistic_getStatistics.messages.Statistic.getStatistics_response.message.payload.properties.evaluations.properties.value"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Statistic_getStatistics_request": "$ref:$.channels.request_Statistic_getStatistics.messages.Statistic.getStatistics_request.message",
      "Statistic_getStatistics_response": "$ref:$.channels.response_Statistic_getStatistics.messages.Statistic.getStatistics_response.message",
      "Statistic_getStatistics_error": "$ref:$.channels.error_Statistic_getStatistics.messages.Statistic.getStatistics_error.message"
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
  