
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service monitorValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the monitorValue iteraction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the monitorValue interaction.",
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
    "Send_Aggregation_monitorValue": {
      "address": "Send_Aggregation_monitorValue",
      "messages": {
        "Aggregation.monitorValue_Send.message": {
          "description": "Aggregation monitorValue request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              }
            },
            "x-parser-schema-id": "Aggregation_monitorValue_Send"
          },
          "x-parser-unique-object-id": "Aggregation.monitorValue_Send.message",
          "x-parser-message-name": "Aggregation_monitorValue_Send"
        }
      },
      "description": "Send a **Aggregation_monitorValue_Send** message in this channel to receive a **Aggregation_monitorValue_Receive** message over the **Receive_Aggregation_monitorValue** channel.\n",
      "x-parser-unique-object-id": "Send_Aggregation_monitorValue"
    },
    "Receive_Aggregation_monitorValue": {
      "address": "Receive_Aggregation_monitorValue",
      "messages": {
        "Aggregation.monitorValue_Receive.message": {
          "description": "Aggregation monitorValue update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "objId": {
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
              "newValue": {
                "properties": {
                  "filtered": {
                    "description": "If a filter is enabled when the aggregation value is generated then this value shall be set to TRUE, else FALSE.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "generationMode": {
                    "description": "GenerationMode is an enumeration definition holding the reasons for the aggregation to be generated.",
                    "enum": [
                      "ADHOC",
                      "PERIODIC",
                      "FILTERED_TIMEOUT"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "parameterSetValues": {
                    "description": "The parameterSetValues list holds the sets of values of the aggregation. The sets must be held in the same order as that defined in the aggregation definition.",
                    "items": {
                      "properties": {
                        "deltaTime": {
                          "description": "Optional delta time, from the timestamp of the aggregation for the first parameter set of the aggregation or the last value of the previous parameter set otherwise, for the first parameter sample of this set. If NULL, then the first sample time is the same as the aggregation timestamp for the first parameter set of the aggregation or the last value of the previous parameter set otherwise.",
                          "format": "uint64",
                          "type": "number",
                          "x-parser-schema-id": "<anonymous-schema-18>"
                        },
                        "intervalTime": {
                          "description": "Optional delta time between samples in this set. If NULL, then all samples in this set are given the same time. This is usually driven by the sampleInterval in the aggregation set definition.",
                          "format": "uint64",
                          "type": "number",
                          "x-parser-schema-id": "<anonymous-schema-19>"
                        },
                        "values": {
                          "description": "List containing values of the parameters which are part of the aggregation. The ordering of the list entries shall match that of the definition of the aggregation. If there are more values than contained in the definition then it is assumed that the parameters cycle as a complete parameter set.",
                          "items": {
                            "properties": {
                              "paramDefInstId": {
                                "description": "The object instance identifier of the ParameterDefinition. NULL if sendDefinitions in the AggregationDefinitionDetails is FALSE.",
                                "format": "int64",
                                "type": "integer",
                                "x-parser-schema-id": "<anonymous-schema-22>"
                              },
                              "value": {
                                "properties": {
                                  "convertedValue": {
                                    "description": "The parameter converted value.",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-24>"
                                  },
                                  "rawValue": {
                                    "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-25>"
                                  },
                                  "validityState": {
                                    "description": "Holds the validity state for a parameter value. If the parameter is valid then this should be set to '0'.",
                                    "format": "uint8",
                                    "type": "integer",
                                    "x-parser-schema-id": "<anonymous-schema-26>"
                                  }
                                },
                                "type": "object",
                                "x-parser-schema-id": "<anonymous-schema-23>"
                              }
                            },
                            "type": "object",
                            "x-parser-schema-id": "<anonymous-schema-21>"
                          },
                          "type": "array",
                          "x-parser-schema-id": "<anonymous-schema-20>"
                        }
                      },
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-17>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            },
            "x-parser-schema-id": "Aggregation_monitorValue_Receive"
          },
          "x-parser-unique-object-id": "Aggregation.monitorValue_Receive.message",
          "x-parser-message-name": "Aggregation_monitorValue_Receive"
        }
      },
      "description": "Use this channel to receive Aggregation monitorValue responses as **Aggregation_monitorValue_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Aggregation_monitorValue"
    }
  },
  "operations": {
    "Aggregation_monitorValue_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Aggregation_monitorValue",
      "messages": [
        "$ref:$.channels.Send_Aggregation_monitorValue.messages.Aggregation.monitorValue_Send.message"
      ],
      "x-parser-unique-object-id": "Aggregation_monitorValue_Send"
    },
    "Aggregation_monitorValue_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Aggregation_monitorValue",
      "messages": [
        "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message"
      ],
      "x-parser-unique-object-id": "Aggregation_monitorValue_Receive"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_monitorValue_Send": "$ref:$.channels.Send_Aggregation_monitorValue.messages.Aggregation.monitorValue_Send.message.payload",
      "Aggregation_monitorValue_Receive": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload",
      "com": {
        "ObjectId": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload.properties.objId",
        "ObjectKey": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload.properties.objId.properties.key",
        "ObjectType": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload.properties.objId.properties.type_",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "aggregation": {
          "AggregationParameterValue": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload.properties.newValue.properties.parameterSetValues.items.properties.values.items",
          "AggregationSetValue": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload.properties.newValue.properties.parameterSetValues.items",
          "AggregationValue": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload.properties.newValue",
          "GenerationMode": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload.properties.newValue.properties.generationMode"
        },
        "parameter": {
          "ParameterValue": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message.payload.properties.newValue.properties.parameterSetValues.items.properties.values.items.properties.value"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Aggregation_monitorValue_Send": "$ref:$.channels.Send_Aggregation_monitorValue.messages.Aggregation.monitorValue_Send.message",
      "Aggregation_monitorValue_Receive": "$ref:$.channels.Receive_Aggregation_monitorValue.messages.Aggregation.monitorValue_Receive.message"
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
  