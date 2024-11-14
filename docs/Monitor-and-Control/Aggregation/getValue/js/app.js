
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service getValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getValue interaction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Aggregation Service's getValue interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Aggregation_getValue": {
      "address": "request_Aggregation_getValue",
      "messages": {
        "Aggregation.getValue_request.message": {
          "description": "Aggregation getValue request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "aggInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The aggInstIds field shall provide the list of AggregationIdentity object instance identifiers.\nThe wildcard value of '0' shall be supported and matches all aggregations of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested aggregation is unknown then an UNKNOWN error shall be returned.\nThe filter shall not be applied for the getValue operation.\nIf an aggregation is being reported periodically, using the operation shall not reset the reportInterval or filteredTimeout timer.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Aggregation_getValue_request"
          },
          "x-parser-unique-object-id": "Aggregation.getValue_request.message",
          "x-parser-message-name": "Aggregation_getValue_request"
        }
      },
      "description": "Send a **Aggregation_getValue_request** message in this channel to receive a **Aggregation_getValue_response** message over the **response_Aggregation_getValue** channel.\n",
      "x-parser-unique-object-id": "request_Aggregation_getValue"
    },
    "response_Aggregation_getValue": {
      "address": "response_Aggregation_getValue",
      "messages": {
        "Aggregation.getValue_response.message": {
          "description": "Aggregation getValue update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "aggValDetails": {
                "properties": {
                  "aggId": {
                    "description": "The AggregationIdentity object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "defId": {
                    "description": "The AggregationDefinition object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "timestamp": {
                    "description": "The timestamp of the value. Use for the calculation of the individual parameter value timestamps.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "value": {
                    "properties": {
                      "filtered": {
                        "description": "If a filter is enabled when the aggregation value is generated then this value shall be set to TRUE, else FALSE.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "generationMode": {
                        "description": "GenerationMode is an enumeration definition holding the reasons for the aggregation to be generated.",
                        "enum": [
                          "ADHOC",
                          "PERIODIC",
                          "FILTERED_TIMEOUT"
                        ],
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "parameterSetValues": {
                        "description": "The parameterSetValues list holds the sets of values of the aggregation. The sets must be held in the same order as that defined in the aggregation definition.",
                        "items": {
                          "properties": {
                            "deltaTime": {
                              "description": "Optional delta time, from the timestamp of the aggregation for the first parameter set of the aggregation or the last value of the previous parameter set otherwise, for the first parameter sample of this set. If NULL, then the first sample time is the same as the aggregation timestamp for the first parameter set of the aggregation or the last value of the previous parameter set otherwise.",
                              "format": "uint64",
                              "type": "number",
                              "x-parser-schema-id": "<anonymous-schema-14>"
                            },
                            "intervalTime": {
                              "description": "Optional delta time between samples in this set. If NULL, then all samples in this set are given the same time. This is usually driven by the sampleInterval in the aggregation set definition.",
                              "format": "uint64",
                              "type": "number",
                              "x-parser-schema-id": "<anonymous-schema-15>"
                            },
                            "values": {
                              "description": "List containing values of the parameters which are part of the aggregation. The ordering of the list entries shall match that of the definition of the aggregation. If there are more values than contained in the definition then it is assumed that the parameters cycle as a complete parameter set.",
                              "items": {
                                "properties": {
                                  "paramDefInstId": {
                                    "description": "The object instance identifier of the ParameterDefinition. NULL if sendDefinitions in the AggregationDefinitionDetails is FALSE.",
                                    "format": "int64",
                                    "type": "integer",
                                    "x-parser-schema-id": "<anonymous-schema-18>"
                                  },
                                  "value": {
                                    "properties": {
                                      "convertedValue": {
                                        "description": "The parameter converted value.",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-20>"
                                      },
                                      "rawValue": {
                                        "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-21>"
                                      },
                                      "validityState": {
                                        "description": "Holds the validity state for a parameter value. If the parameter is valid then this should be set to '0'.",
                                        "format": "uint8",
                                        "type": "integer",
                                        "x-parser-schema-id": "<anonymous-schema-22>"
                                      }
                                    },
                                    "type": "object",
                                    "x-parser-schema-id": "<anonymous-schema-19>"
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
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "Aggregation_getValue_response"
          },
          "x-parser-unique-object-id": "Aggregation.getValue_response.message",
          "x-parser-message-name": "Aggregation_getValue_response"
        }
      },
      "description": "Use this channel to receive Aggregation getValue responses as **Aggregation_getValue_response** messages.\n",
      "x-parser-unique-object-id": "response_Aggregation_getValue"
    },
    "error_Aggregation_getValue": {
      "address": "error_Aggregation_getValue",
      "messages": {
        "Aggregation.getValue_error.message": {
          "description": "Aggregation getValue error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-27>"
                },
                "x-parser-schema-id": "<anonymous-schema-26>"
              }
            },
            "x-parser-schema-id": "Aggregation_getValue_error"
          },
          "x-parser-unique-object-id": "Aggregation.getValue_error.message",
          "x-parser-message-name": "Aggregation_getValue_error"
        }
      },
      "description": "Use this channel to receive Aggregation getValue errors as **Aggregation_getValue_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Aggregation_getValue"
    }
  },
  "operations": {
    "Aggregation_getValue_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Aggregation_getValue",
      "messages": [
        "$ref:$.channels.request_Aggregation_getValue.messages.Aggregation.getValue_request.message"
      ],
      "x-parser-unique-object-id": "Aggregation_getValue_request"
    },
    "Aggregation_getValue_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Aggregation_getValue",
      "messages": [
        "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message"
      ],
      "x-parser-unique-object-id": "Aggregation_getValue_response"
    },
    "Aggregation_getValue_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Aggregation_getValue",
      "messages": [
        "$ref:$.channels.error_Aggregation_getValue.messages.Aggregation.getValue_error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_getValue_error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_getValue_request": "$ref:$.channels.request_Aggregation_getValue.messages.Aggregation.getValue_request.message.payload",
      "Aggregation_getValue_response": "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message.payload",
      "Aggregation_getValue_error": "$ref:$.channels.error_Aggregation_getValue.messages.Aggregation.getValue_error.message.payload",
      "mc": {
        "aggregation": {
          "AggregationParameterValue": "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message.payload.properties.aggValDetails.properties.value.properties.parameterSetValues.items.properties.values.items",
          "AggregationSetValue": "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message.payload.properties.aggValDetails.properties.value.properties.parameterSetValues.items",
          "AggregationValue": "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message.payload.properties.aggValDetails.properties.value",
          "AggregationValueDetails": "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message.payload.properties.aggValDetails",
          "GenerationMode": "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message.payload.properties.aggValDetails.properties.value.properties.generationMode"
        },
        "parameter": {
          "ParameterValue": "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message.payload.properties.aggValDetails.properties.value.properties.parameterSetValues.items.properties.values.items.properties.value"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Aggregation_getValue_request": "$ref:$.channels.request_Aggregation_getValue.messages.Aggregation.getValue_request.message",
      "Aggregation_getValue_response": "$ref:$.channels.response_Aggregation_getValue.messages.Aggregation.getValue_response.message",
      "Aggregation_getValue_error": "$ref:$.channels.error_Aggregation_getValue.messages.Aggregation.getValue_error.message"
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
  