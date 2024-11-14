
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service addAggregation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addAggregation interaction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Aggregation Service's addAggregation interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Aggregation_addAggregation": {
      "address": "request_Aggregation_addAggregation",
      "messages": {
        "Aggregation.addAggregation_request.message": {
          "description": "Aggregation addAggregation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "aggDefDetails": {
                "properties": {
                  "aggDefDetails": {
                    "properties": {
                      "category": {
                        "description": "Category of the aggregation. Value taken from AggregationCategory enumeration, although the use of a UOctet allows deployment specific extension. Extensions must use values greater than 127.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-4>"
                      },
                      "description": {
                        "description": "The description of the parameter. May be empty.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-5>"
                      },
                      "filterEnabled": {
                        "description": "Controls whether reports for this aggregation are to be filtered.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      },
                      "filteredTimeout": {
                        "description": "The maximum duration between filtered reports. If this value is exceeded, then a report is sent regardless of filtered thresholds. Ignored if not filtered.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-7>"
                      },
                      "generationEnabled": {
                        "description": "Controls whether reports for this aggregation are to be generated.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "parameterSets": {
                        "description": "List containing the parameter sets which define the aggregation.",
                        "items": {
                          "properties": {
                            "domain": {
                              "description": "The domain of the parameters being referenced in this set of parameters, NULL if the same domain as the aggregation.",
                              "items": {
                                "type": "string",
                                "x-parser-schema-id": "<anonymous-schema-12>"
                              },
                              "type": "array",
                              "x-parser-schema-id": "<anonymous-schema-11>"
                            },
                            "parameters": {
                              "description": "The list of object instance identifiers of the ParameterIdentity objects being included in the aggregation.",
                              "items": {
                                "type": "integer",
                                "x-parser-schema-id": "<anonymous-schema-14>"
                              },
                              "type": "array",
                              "x-parser-schema-id": "<anonymous-schema-13>"
                            },
                            "reportFilter": {
                              "properties": {
                                "thresholdType": {
                                  "description": "ThresholdType is an enumeration definition holding the types of filtering thresholds.",
                                  "enum": [
                                    "PERCENTAGE",
                                    "DELTA"
                                  ],
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-16>"
                                },
                                "thresholdValue": {
                                  "description": "Threshold value to apply.",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-17>"
                                },
                                "useConverted": {
                                  "description": "If true, and the relevant Parameter has a conversion, then use the converted value for the threshold comparison, otherwise use the raw value.",
                                  "type": "boolean",
                                  "x-parser-schema-id": "<anonymous-schema-18>"
                                }
                              },
                              "type": "object",
                              "x-parser-schema-id": "<anonymous-schema-15>"
                            },
                            "sampleInterval": {
                              "description": "The interval between samples of the parameters in the set. If '0' then just a single sample of the parameters is required per aggregation report.",
                              "format": "uint64",
                              "type": "number",
                              "x-parser-schema-id": "<anonymous-schema-19>"
                            }
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-10>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "reportInterval": {
                        "description": "The interval between periodic reports on this aggregation. If this aggregation is not periodic, this field must be '0'.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-20>"
                      },
                      "sendDefinitions": {
                        "description": "If TRUE reports will include the ParameterDefinition object instance identifier in the AggregationParameterValue, if FALSE it will be set to NULL.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-21>"
                      },
                      "sendUnchanged": {
                        "description": "If TRUE reports will include all values regardless of whether changed, if FALSE values unchanged from previous report are replaced with a NULL.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-22>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "name": {
                    "description": "The name of the aggregation. Must not be empty or the wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Aggregation_addAggregation_request"
          },
          "x-parser-unique-object-id": "Aggregation.addAggregation_request.message",
          "x-parser-message-name": "Aggregation_addAggregation_request"
        }
      },
      "description": "Send a **Aggregation_addAggregation_request** message in this channel to receive a **Aggregation_addAggregation_response** message over the **response_Aggregation_addAggregation** channel.\n",
      "x-parser-unique-object-id": "request_Aggregation_addAggregation"
    },
    "response_Aggregation_addAggregation": {
      "address": "response_Aggregation_addAggregation",
      "messages": {
        "Aggregation.addAggregation_response.message": {
          "description": "Aggregation addAggregation update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "newObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-26>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-27>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-25>"
              }
            },
            "x-parser-schema-id": "Aggregation_addAggregation_response"
          },
          "x-parser-unique-object-id": "Aggregation.addAggregation_response.message",
          "x-parser-message-name": "Aggregation_addAggregation_response"
        }
      },
      "description": "Use this channel to receive Aggregation addAggregation responses as **Aggregation_addAggregation_response** messages.\n",
      "x-parser-unique-object-id": "response_Aggregation_addAggregation"
    },
    "error_Aggregation_addAggregation": {
      "address": "error_Aggregation_addAggregation",
      "messages": {
        "Aggregation.addAggregation_error.message": {
          "description": "Aggregation addAggregation error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
                ],
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-32>"
                },
                "x-parser-schema-id": "<anonymous-schema-31>"
              }
            },
            "x-parser-schema-id": "Aggregation_addAggregation_error"
          },
          "x-parser-unique-object-id": "Aggregation.addAggregation_error.message",
          "x-parser-message-name": "Aggregation_addAggregation_error"
        }
      },
      "description": "Use this channel to receive Aggregation addAggregation errors as **Aggregation_addAggregation_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Aggregation_addAggregation"
    }
  },
  "operations": {
    "Aggregation_addAggregation_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Aggregation_addAggregation",
      "messages": [
        "$ref:$.channels.request_Aggregation_addAggregation.messages.Aggregation.addAggregation_request.message"
      ],
      "x-parser-unique-object-id": "Aggregation_addAggregation_request"
    },
    "Aggregation_addAggregation_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Aggregation_addAggregation",
      "messages": [
        "$ref:$.channels.response_Aggregation_addAggregation.messages.Aggregation.addAggregation_response.message"
      ],
      "x-parser-unique-object-id": "Aggregation_addAggregation_response"
    },
    "Aggregation_addAggregation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Aggregation_addAggregation",
      "messages": [
        "$ref:$.channels.error_Aggregation_addAggregation.messages.Aggregation.addAggregation_error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_addAggregation_error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_addAggregation_request": "$ref:$.channels.request_Aggregation_addAggregation.messages.Aggregation.addAggregation_request.message.payload",
      "Aggregation_addAggregation_response": "$ref:$.channels.response_Aggregation_addAggregation.messages.Aggregation.addAggregation_response.message.payload",
      "Aggregation_addAggregation_error": "$ref:$.channels.error_Aggregation_addAggregation.messages.Aggregation.addAggregation_error.message.payload",
      "mc": {
        "aggregation": {
          "AggregationCreationRequest": "$ref:$.channels.request_Aggregation_addAggregation.messages.Aggregation.addAggregation_request.message.payload.properties.aggDefDetails",
          "AggregationDefinitionDetails": "$ref:$.channels.request_Aggregation_addAggregation.messages.Aggregation.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails",
          "AggregationParameterSet": "$ref:$.channels.request_Aggregation_addAggregation.messages.Aggregation.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items",
          "ThresholdFilter": "$ref:$.channels.request_Aggregation_addAggregation.messages.Aggregation.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter",
          "ThresholdType": "$ref:$.channels.request_Aggregation_addAggregation.messages.Aggregation.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter.properties.thresholdType"
        },
        "ObjectInstancePair": "$ref:$.channels.response_Aggregation_addAggregation.messages.Aggregation.addAggregation_response.message.payload.properties.newObjInstIds",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Aggregation_addAggregation_request": "$ref:$.channels.request_Aggregation_addAggregation.messages.Aggregation.addAggregation_request.message",
      "Aggregation_addAggregation_response": "$ref:$.channels.response_Aggregation_addAggregation.messages.Aggregation.addAggregation_response.message",
      "Aggregation_addAggregation_error": "$ref:$.channels.error_Aggregation_addAggregation.messages.Aggregation.addAggregation_error.message"
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
  