
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service getStatistics API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getStatistics iteraction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the getStatistics interaction.",
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
    "Send_Statistic_getStatistics": {
      "address": "Send_Statistic_getStatistics",
      "messages": {
        "Statistic.getStatistics_Send.message": {
          "description": "Statistic getStatistics request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "funcObjInstIds": {
                "type": "integer",
                "description": "The funcObjInstIds field shall include a list of StatisticFunction object instance identifiers to match.\nThe funcObjInstIds field shall support the wildcard value of '0' and will match all functions of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "isGroup": {
                "type": "boolean",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "paramObjInstIds": {
                "properties": {
                  "domain": {
                    "description": "The domain of the object instance.",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-6>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "instId": {
                    "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Statistic_getStatistics_Send"
          },
          "x-parser-unique-object-id": "Statistic.getStatistics_Send.message",
          "x-parser-message-name": "Statistic_getStatistics_Send"
        }
      },
      "description": "Send a **Statistic_getStatistics_Send** message in this channel to receive a **Statistic_getStatistics_Receive** message over the **Receive_Statistic_getStatistics** channel.\n",
      "x-parser-unique-object-id": "Send_Statistic_getStatistics"
    },
    "Receive_Statistic_getStatistics": {
      "address": "Receive_Statistic_getStatistics",
      "messages": {
        "Statistic.getStatistics_Receive.message": {
          "description": "Statistic getStatistics update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "evaluations": {
                "properties": {
                  "linkId": {
                    "description": "The statistic link object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "value": {
                    "properties": {
                      "endTime": {
                        "description": "Time the statistic calculations ended. This value can be NULL if the time can be derived by other means, e.g., other times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      },
                      "paramDefInstId": {
                        "description": "The object instance identifier of the ParameterDefinition object used for the parameter.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      },
                      "sampleCount": {
                        "description": "Holds the number of samples that contributed to the statistic value. For calculated values such as 'mean average' this holds the number of samples that were used to calculate the value, for non-calculated values such as 'min' then it is the number of samples that were in the set evaluated.",
                        "format": "uint32",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-14>"
                      },
                      "startTime": {
                        "description": "Time the statistic calculations started. This value can be NULL if the start time can be derived by other means, e.g., other start times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      },
                      "value": {
                        "description": "Value of the statistic.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      },
                      "valueTime": {
                        "description": "Time the statistic value was reached. The time is only applicable for particular statistic values such as min or max. Shall be NULL if not applicable for cases such as 'mean average'.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-17>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-9>"
              }
            },
            "x-parser-schema-id": "Statistic_getStatistics_Receive"
          },
          "x-parser-unique-object-id": "Statistic.getStatistics_Receive.message",
          "x-parser-message-name": "Statistic_getStatistics_Receive"
        }
      },
      "description": "Use this channel to receive Statistic getStatistics responses as **Statistic_getStatistics_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Statistic_getStatistics"
    },
    "Error_Statistic_getStatistics": {
      "address": "Error_Statistic_getStatistics",
      "messages": {
        "Statistic.getStatistics_Error.message": {
          "description": "Statistic getStatistics error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-22>"
                },
                "x-parser-schema-id": "<anonymous-schema-21>"
              }
            },
            "x-parser-schema-id": "Statistic_getStatistics_Error"
          },
          "x-parser-unique-object-id": "Statistic.getStatistics_Error.message",
          "x-parser-message-name": "Statistic_getStatistics_Error"
        }
      },
      "description": "Use this channel to receive Statistic getStatistics errors as **Statistic_getStatistics_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Statistic_getStatistics"
    }
  },
  "operations": {
    "Statistic_getStatistics_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Statistic_getStatistics",
      "messages": [
        "$ref:$.channels.Send_Statistic_getStatistics.messages.Statistic.getStatistics_Send.message"
      ],
      "x-parser-unique-object-id": "Statistic_getStatistics_Send"
    },
    "Statistic_getStatistics_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Statistic_getStatistics",
      "messages": [
        "$ref:$.channels.Receive_Statistic_getStatistics.messages.Statistic.getStatistics_Receive.message"
      ],
      "x-parser-unique-object-id": "Statistic_getStatistics_Receive"
    },
    "Statistic_getStatistics_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Statistic_getStatistics",
      "messages": [
        "$ref:$.channels.Error_Statistic_getStatistics.messages.Statistic.getStatistics_Error.message"
      ],
      "x-parser-unique-object-id": "Statistic_getStatistics_Error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_getStatistics_Send": "$ref:$.channels.Send_Statistic_getStatistics.messages.Statistic.getStatistics_Send.message.payload",
      "Statistic_getStatistics_Receive": "$ref:$.channels.Receive_Statistic_getStatistics.messages.Statistic.getStatistics_Receive.message.payload",
      "Statistic_getStatistics_Error": "$ref:$.channels.Error_Statistic_getStatistics.messages.Statistic.getStatistics_Error.message.payload",
      "com": {
        "ObjectKey": "$ref:$.channels.Send_Statistic_getStatistics.messages.Statistic.getStatistics_Send.message.payload.properties.paramObjInstIds",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "statistic": {
          "StatisticEvaluationReport": "$ref:$.channels.Receive_Statistic_getStatistics.messages.Statistic.getStatistics_Receive.message.payload.properties.evaluations",
          "StatisticValue": "$ref:$.channels.Receive_Statistic_getStatistics.messages.Statistic.getStatistics_Receive.message.payload.properties.evaluations.properties.value"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Statistic_getStatistics_Send": "$ref:$.channels.Send_Statistic_getStatistics.messages.Statistic.getStatistics_Send.message",
      "Statistic_getStatistics_Receive": "$ref:$.channels.Receive_Statistic_getStatistics.messages.Statistic.getStatistics_Receive.message",
      "Statistic_getStatistics_Error": "$ref:$.channels.Error_Statistic_getStatistics.messages.Statistic.getStatistics_Error.message"
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
  