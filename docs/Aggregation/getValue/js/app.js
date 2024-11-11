
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service getValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getValue iteraction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the getValue interaction.",
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
    "Send_Aggregation_getValue": {
      "address": "Send_Aggregation_getValue",
      "messages": {
        "Aggregation.getValue_Send.message": {
          "description": "Aggregation getValue request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "aggInstIds": {
                "type": "integer",
                "description": "The aggInstIds field shall provide the list of AggregationIdentity object instance identifiers.\nThe wildcard value of '0' shall be supported and matches all aggregations of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested aggregation is unknown then an UNKNOWN error shall be returned.\nThe filter shall not be applied for the getValue operation.\nIf an aggregation is being reported periodically, using the operation shall not reset the reportInterval or filteredTimeout timer.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Aggregation_getValue_Send"
          },
          "x-parser-unique-object-id": "Aggregation.getValue_Send.message",
          "x-parser-message-name": "Aggregation_getValue_Send"
        }
      },
      "description": "Send a **Aggregation_getValue_Send** message in this channel to receive a **Aggregation_getValue_Receive** message over the **Receive_Aggregation_getValue** channel.\n",
      "x-parser-unique-object-id": "Send_Aggregation_getValue"
    },
    "Receive_Aggregation_getValue": {
      "address": "Receive_Aggregation_getValue",
      "messages": {
        "Aggregation.getValue_Receive.message": {
          "description": "Aggregation getValue update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "aggValDetails": {
                "properties": {
                  "aggId": {
                    "description": "The AggregationIdentity object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "defId": {
                    "description": "The AggregationDefinition object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "timestamp": {
                    "description": "The timestamp of the value. Use for the calculation of the individual parameter value timestamps.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "value": {
                    "properties": {
                      "filtered": {
                        "description": "If a filter is enabled when the aggregation value is generated then this value shall be set to TRUE, else FALSE.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "generationMode": {
                        "description": "GenerationMode is an enumeration definition holding the reasons for the aggregation to be generated.",
                        "enum": [
                          "ADHOC",
                          "PERIODIC",
                          "FILTERED_TIMEOUT"
                        ],
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "parameterSetValues": {
                        "description": "The parameterSetValues list holds the sets of values of the aggregation. The sets must be held in the same order as that defined in the aggregation definition.",
                        "items": {
                          "properties": {
                            "deltaTime": {
                              "description": "Optional delta time, from the timestamp of the aggregation for the first parameter set of the aggregation or the last value of the previous parameter set otherwise, for the first parameter sample of this set. If NULL, then the first sample time is the same as the aggregation timestamp for the first parameter set of the aggregation or the last value of the previous parameter set otherwise.",
                              "format": "uint64",
                              "type": "number",
                              "x-parser-schema-id": "<anonymous-schema-13>"
                            },
                            "intervalTime": {
                              "description": "Optional delta time between samples in this set. If NULL, then all samples in this set are given the same time. This is usually driven by the sampleInterval in the aggregation set definition.",
                              "format": "uint64",
                              "type": "number",
                              "x-parser-schema-id": "<anonymous-schema-14>"
                            },
                            "values": {
                              "description": "List containing values of the parameters which are part of the aggregation. The ordering of the list entries shall match that of the definition of the aggregation. If there are more values than contained in the definition then it is assumed that the parameters cycle as a complete parameter set.",
                              "items": {
                                "properties": {
                                  "paramDefInstId": {
                                    "description": "The object instance identifier of the ParameterDefinition. NULL if sendDefinitions in the AggregationDefinitionDetails is FALSE.",
                                    "format": "int64",
                                    "type": "integer",
                                    "x-parser-schema-id": "<anonymous-schema-17>"
                                  },
                                  "value": {
                                    "properties": {
                                      "convertedValue": {
                                        "description": "The parameter converted value.",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-19>"
                                      },
                                      "rawValue": {
                                        "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-20>"
                                      },
                                      "validityState": {
                                        "description": "Holds the validity state for a parameter value. If the parameter is valid then this should be set to '0'.",
                                        "format": "uint8",
                                        "type": "integer",
                                        "x-parser-schema-id": "<anonymous-schema-21>"
                                      }
                                    },
                                    "type": "object",
                                    "x-parser-schema-id": "<anonymous-schema-18>"
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
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Aggregation_getValue_Receive"
          },
          "x-parser-unique-object-id": "Aggregation.getValue_Receive.message",
          "x-parser-message-name": "Aggregation_getValue_Receive"
        }
      },
      "description": "Use this channel to receive Aggregation getValue responses as **Aggregation_getValue_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Aggregation_getValue"
    },
    "Error_Aggregation_getValue": {
      "address": "Error_Aggregation_getValue",
      "messages": {
        "Aggregation.getValue_Error.message": {
          "description": "Aggregation getValue error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-26>"
                },
                "x-parser-schema-id": "<anonymous-schema-25>"
              }
            },
            "x-parser-schema-id": "Aggregation_getValue_Error"
          },
          "x-parser-unique-object-id": "Aggregation.getValue_Error.message",
          "x-parser-message-name": "Aggregation_getValue_Error"
        }
      },
      "description": "Use this channel to receive Aggregation getValue errors as **Aggregation_getValue_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Aggregation_getValue"
    }
  },
  "operations": {
    "Aggregation_getValue_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Aggregation_getValue",
      "messages": [
        "$ref:$.channels.Send_Aggregation_getValue.messages.Aggregation.getValue_Send.message"
      ],
      "x-parser-unique-object-id": "Aggregation_getValue_Send"
    },
    "Aggregation_getValue_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Aggregation_getValue",
      "messages": [
        "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message"
      ],
      "x-parser-unique-object-id": "Aggregation_getValue_Receive"
    },
    "Aggregation_getValue_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Aggregation_getValue",
      "messages": [
        "$ref:$.channels.Error_Aggregation_getValue.messages.Aggregation.getValue_Error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_getValue_Error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_getValue_Send": "$ref:$.channels.Send_Aggregation_getValue.messages.Aggregation.getValue_Send.message.payload",
      "Aggregation_getValue_Receive": "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message.payload",
      "Aggregation_getValue_Error": "$ref:$.channels.Error_Aggregation_getValue.messages.Aggregation.getValue_Error.message.payload",
      "mc": {
        "aggregation": {
          "AggregationParameterValue": "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message.payload.properties.aggValDetails.properties.value.properties.parameterSetValues.items.properties.values.items",
          "AggregationSetValue": "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message.payload.properties.aggValDetails.properties.value.properties.parameterSetValues.items",
          "AggregationValue": "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message.payload.properties.aggValDetails.properties.value",
          "AggregationValueDetails": "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message.payload.properties.aggValDetails",
          "GenerationMode": "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message.payload.properties.aggValDetails.properties.value.properties.generationMode"
        },
        "parameter": {
          "ParameterValue": "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message.payload.properties.aggValDetails.properties.value.properties.parameterSetValues.items.properties.values.items.properties.value"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Aggregation_getValue_Send": "$ref:$.channels.Send_Aggregation_getValue.messages.Aggregation.getValue_Send.message",
      "Aggregation_getValue_Receive": "$ref:$.channels.Receive_Aggregation_getValue.messages.Aggregation.getValue_Receive.message",
      "Aggregation_getValue_Error": "$ref:$.channels.Error_Aggregation_getValue.messages.Aggregation.getValue_Error.message"
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
  