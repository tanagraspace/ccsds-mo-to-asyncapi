
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic monitorStatistics Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the monitorStatistics iteraction of the Statistic service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the monitorStatistics interaction.",
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
    "sub_Statistic_monitorStatistics": {
      "address": "sub_Statistic_monitorStatistics",
      "messages": {
        "Statistic.monitorStatisticsSubscribe.message": {
          "description": "Statistic monitorStatistics request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              }
            },
            "x-parser-schema-id": "Statistic_monitorStatisticsTransportRequest"
          },
          "x-parser-unique-object-id": "Statistic.monitorStatisticsSubscribe.message",
          "x-parser-message-name": "Statistic_monitorStatisticsRequest"
        }
      },
      "description": "Use this channel to send a **Statistic_monitorStatisticsRequest** message to receive a **Statistic_monitorStatisticsResponse** message over the **pub_Statistic_monitorStatistics** channel.\n",
      "x-parser-unique-object-id": "sub_Statistic_monitorStatistics"
    },
    "pub_Statistic_monitorStatistics": {
      "address": "pub_Statistic_monitorStatistics",
      "messages": {
        "Statistic.monitorStatisticsPublish.message": {
          "description": "Statistic monitorStatistics update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "relatedId": {
                "type": "integer",
                "description": "The MAL EntityKey.firstSubKey shall contain the statistic function name.\nThe MAL EntityKey.secondSubKey shall contain the StatisticLink object instance identifier.\nThe MAL EntityKey.thirdSubKey shall contain the ParameterIdentity object instance identifier.\nThe MAL EntityKey.fourthSubKey shall contain the new StatisticValueInstance object instance identifier.\nThe timestamp of the StatisticValueInstance report shall be taken from the publish message.\nThe related link of the update shall be held in the relatedId field.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "sourceId": {
                "properties": {
                  "key": {
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
                  },
                  "type_": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "statisticValue": {
                "properties": {
                  "endTime": {
                    "description": "Time the statistic calculations ended. This value can be NULL if the time can be derived by other means, e.g., other times in a set of StatisticValue structures.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "paramDefInstId": {
                    "description": "The object instance identifier of the ParameterDefinition object used for the parameter.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  },
                  "sampleCount": {
                    "description": "Holds the number of samples that contributed to the statistic value. For calculated values such as 'mean average' this holds the number of samples that were used to calculate the value, for non-calculated values such as 'min' then it is the number of samples that were in the set evaluated.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  },
                  "startTime": {
                    "description": "Time the statistic calculations started. This value can be NULL if the start time can be derived by other means, e.g., other start times in a set of StatisticValue structures.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-18>"
                  },
                  "value": {
                    "description": "Value of the statistic.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  },
                  "valueTime": {
                    "description": "Time the statistic value was reached. The time is only applicable for particular statistic values such as min or max. Shall be NULL if not applicable for cases such as 'mean average'.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-20>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-14>"
              }
            },
            "x-parser-schema-id": "Statistic_monitorStatisticsTransportResponse"
          },
          "x-parser-unique-object-id": "Statistic.monitorStatisticsPublish.message",
          "x-parser-message-name": "Statistic_monitorStatisticsResponse"
        }
      },
      "description": "Use this channel to receive Statistic monitorStatistics updates as **Statistic_monitorStatisticsResponse** responses.\n",
      "x-parser-unique-object-id": "pub_Statistic_monitorStatistics"
    }
  },
  "operations": {
    "Statistic_monitorStatisticsPublish": {
      "action": "send",
      "channel": "$ref:$.channels.sub_Statistic_monitorStatistics",
      "messages": [
        "$ref:$.channels.sub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsSubscribe.message"
      ],
      "x-parser-unique-object-id": "Statistic_monitorStatisticsPublish"
    },
    "Statistic_monitorStatisticsSubscribe": {
      "action": "receive",
      "channel": "$ref:$.channels.pub_Statistic_monitorStatistics",
      "messages": [
        "$ref:$.channels.pub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsPublish.message"
      ],
      "x-parser-unique-object-id": "Statistic_monitorStatisticsSubscribe"
    }
  },
  "components": {
    "schemas": {
      "Statistic_monitorStatisticsTransportRequest": "$ref:$.channels.sub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsSubscribe.message.payload",
      "Statistic_monitorStatisticsTransportResponse": "$ref:$.channels.pub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsPublish.message.payload",
      "com": {
        "ObjectId": "$ref:$.channels.pub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsPublish.message.payload.properties.sourceId",
        "ObjectKey": "$ref:$.channels.pub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsPublish.message.payload.properties.sourceId.properties.key",
        "ObjectType": "$ref:$.channels.pub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsPublish.message.payload.properties.sourceId.properties.type_",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "statistic": {
          "StatisticValue": "$ref:$.channels.pub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsPublish.message.payload.properties.statisticValue"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Statistic_monitorStatisticsRequest": "$ref:$.channels.sub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsSubscribe.message",
      "Statistic_monitorStatisticsResponse": "$ref:$.channels.pub_Statistic_monitorStatistics.messages.Statistic.monitorStatisticsPublish.message"
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
  