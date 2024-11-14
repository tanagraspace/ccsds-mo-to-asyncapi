
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service monitorStatistics API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the monitorStatistics interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's monitorStatistics interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "publishNotify_Statistic_monitorStatistics": {
      "address": "publishNotify_Statistic_monitorStatistics",
      "messages": {
        "Statistic.monitorStatistics_publishNotify.message": {
          "description": "Statistic monitorStatistics update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "relatedId": {
                "type": "integer",
                "format": "int64",
                "description": "The MAL EntityKey.firstSubKey shall contain the statistic function name.\nThe MAL EntityKey.secondSubKey shall contain the StatisticLink object instance identifier.\nThe MAL EntityKey.thirdSubKey shall contain the ParameterIdentity object instance identifier.\nThe MAL EntityKey.fourthSubKey shall contain the new StatisticValueInstance object instance identifier.\nThe timestamp of the StatisticValueInstance report shall be taken from the publish message.\nThe related link of the update shall be held in the relatedId field.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "sourceId": {
                "properties": {
                  "key": {
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
                  },
                  "type_": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "statisticValue": {
                "properties": {
                  "endTime": {
                    "description": "Time the statistic calculations ended. This value can be NULL if the time can be derived by other means, e.g., other times in a set of StatisticValue structures.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "paramDefInstId": {
                    "description": "The object instance identifier of the ParameterDefinition object used for the parameter.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "sampleCount": {
                    "description": "Holds the number of samples that contributed to the statistic value. For calculated values such as 'mean average' this holds the number of samples that were used to calculate the value, for non-calculated values such as 'min' then it is the number of samples that were in the set evaluated.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  },
                  "startTime": {
                    "description": "Time the statistic calculations started. This value can be NULL if the start time can be derived by other means, e.g., other start times in a set of StatisticValue structures.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  },
                  "value": {
                    "description": "Value of the statistic.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-18>"
                  },
                  "valueTime": {
                    "description": "Time the statistic value was reached. The time is only applicable for particular statistic values such as min or max. Shall be NULL if not applicable for cases such as 'mean average'.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            },
            "x-parser-schema-id": "Statistic_monitorStatistics_publishNotify"
          },
          "x-parser-unique-object-id": "Statistic.monitorStatistics_publishNotify.message",
          "x-parser-message-name": "Statistic_monitorStatistics_publishNotify"
        }
      },
      "description": "Use this channel to receive Statistic monitorStatistics responses as **Statistic_monitorStatistics_publishNotify** messages.\n",
      "x-parser-unique-object-id": "publishNotify_Statistic_monitorStatistics"
    }
  },
  "operations": {
    "Statistic_monitorStatistics_publishNotify": {
      "action": "receive",
      "channel": "$ref:$.channels.publishNotify_Statistic_monitorStatistics",
      "messages": [
        "$ref:$.channels.publishNotify_Statistic_monitorStatistics.messages.Statistic.monitorStatistics_publishNotify.message"
      ],
      "x-parser-unique-object-id": "Statistic_monitorStatistics_publishNotify"
    }
  },
  "components": {
    "schemas": {
      "Statistic_monitorStatistics_publishNotify": "$ref:$.channels.publishNotify_Statistic_monitorStatistics.messages.Statistic.monitorStatistics_publishNotify.message.payload",
      "com": {
        "ObjectId": "$ref:$.channels.publishNotify_Statistic_monitorStatistics.messages.Statistic.monitorStatistics_publishNotify.message.payload.properties.sourceId",
        "ObjectKey": "$ref:$.channels.publishNotify_Statistic_monitorStatistics.messages.Statistic.monitorStatistics_publishNotify.message.payload.properties.sourceId.properties.key",
        "ObjectType": "$ref:$.channels.publishNotify_Statistic_monitorStatistics.messages.Statistic.monitorStatistics_publishNotify.message.payload.properties.sourceId.properties.type_",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "statistic": {
          "StatisticValue": "$ref:$.channels.publishNotify_Statistic_monitorStatistics.messages.Statistic.monitorStatistics_publishNotify.message.payload.properties.statisticValue"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Statistic_monitorStatistics_publishNotify": "$ref:$.channels.publishNotify_Statistic_monitorStatistics.messages.Statistic.monitorStatistics_publishNotify.message"
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
  