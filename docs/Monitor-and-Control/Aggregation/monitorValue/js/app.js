
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service monitorValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the monitorValue interaction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Aggregation Service's monitorValue interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "publishNotify_Aggregation_monitorValue": {
      "address": "publishNotify_Aggregation_monitorValue",
      "messages": {
        "Aggregation.monitorValue_publishNotify.message": {
          "description": "Aggregation monitorValue update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "objId": {
                "properties": {
                  "key": {
                    "properties": {
                      "domain": {
                        "description": "The domain of the object instance.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-5>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-4>"
                      },
                      "instId": {
                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "type_": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "newValue": {
                "properties": {
                  "filtered": {
                    "description": "If a filter is enabled when the aggregation value is generated then this value shall be set to TRUE, else FALSE.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "generationMode": {
                    "description": "GenerationMode is an enumeration definition holding the reasons for the aggregation to be generated.",
                    "enum": [
                      "ADHOC",
                      "PERIODIC",
                      "FILTERED_TIMEOUT"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "parameterSetValues": {
                    "description": "The parameterSetValues list holds the sets of values of the aggregation. The sets must be held in the same order as that defined in the aggregation definition.",
                    "items": {
                      "properties": {
                        "deltaTime": {
                          "description": "Optional delta time, from the timestamp of the aggregation for the first parameter set of the aggregation or the last value of the previous parameter set otherwise, for the first parameter sample of this set. If NULL, then the first sample time is the same as the aggregation timestamp for the first parameter set of the aggregation or the last value of the previous parameter set otherwise.",
                          "format": "uint64",
                          "type": "number",
                          "x-parser-schema-id": "<anonymous-schema-17>"
                        },
                        "intervalTime": {
                          "description": "Optional delta time between samples in this set. If NULL, then all samples in this set are given the same time. This is usually driven by the sampleInterval in the aggregation set definition.",
                          "format": "uint64",
                          "type": "number",
                          "x-parser-schema-id": "<anonymous-schema-18>"
                        },
                        "values": {
                          "description": "List containing values of the parameters which are part of the aggregation. The ordering of the list entries shall match that of the definition of the aggregation. If there are more values than contained in the definition then it is assumed that the parameters cycle as a complete parameter set.",
                          "items": {
                            "properties": {
                              "paramDefInstId": {
                                "description": "The object instance identifier of the ParameterDefinition. NULL if sendDefinitions in the AggregationDefinitionDetails is FALSE.",
                                "format": "int64",
                                "type": "integer",
                                "x-parser-schema-id": "<anonymous-schema-21>"
                              },
                              "value": {
                                "properties": {
                                  "convertedValue": {
                                    "description": "The parameter converted value.",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-23>"
                                  },
                                  "rawValue": {
                                    "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-24>"
                                  },
                                  "validityState": {
                                    "description": "Holds the validity state for a parameter value. If the parameter is valid then this should be set to '0'.",
                                    "format": "uint8",
                                    "type": "integer",
                                    "x-parser-schema-id": "<anonymous-schema-25>"
                                  }
                                },
                                "type": "object",
                                "x-parser-schema-id": "<anonymous-schema-22>"
                              }
                            },
                            "type": "object",
                            "x-parser-schema-id": "<anonymous-schema-20>"
                          },
                          "type": "array",
                          "x-parser-schema-id": "<anonymous-schema-19>"
                        }
                      },
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-16>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "Aggregation_monitorValue_publishNotify"
          },
          "x-parser-unique-object-id": "Aggregation.monitorValue_publishNotify.message",
          "x-parser-message-name": "Aggregation_monitorValue_publishNotify"
        }
      },
      "description": "Use this channel to receive Aggregation monitorValue responses as **Aggregation_monitorValue_publishNotify** messages.\n",
      "x-parser-unique-object-id": "publishNotify_Aggregation_monitorValue"
    }
  },
  "operations": {
    "Aggregation_monitorValue_publishNotify": {
      "action": "receive",
      "channel": "$ref:$.channels.publishNotify_Aggregation_monitorValue",
      "messages": [
        "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message"
      ],
      "x-parser-unique-object-id": "Aggregation_monitorValue_publishNotify"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_monitorValue_publishNotify": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload",
      "com": {
        "ObjectId": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload.properties.objId",
        "ObjectKey": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload.properties.objId.properties.key",
        "ObjectType": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload.properties.objId.properties.type_",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "aggregation": {
          "AggregationParameterValue": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload.properties.newValue.properties.parameterSetValues.items.properties.values.items",
          "AggregationSetValue": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload.properties.newValue.properties.parameterSetValues.items",
          "AggregationValue": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload.properties.newValue",
          "GenerationMode": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload.properties.newValue.properties.generationMode"
        },
        "parameter": {
          "ParameterValue": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message.payload.properties.newValue.properties.parameterSetValues.items.properties.values.items.properties.value"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Aggregation_monitorValue_publishNotify": "$ref:$.channels.publishNotify_Aggregation_monitorValue.messages.Aggregation.monitorValue_publishNotify.message"
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
  