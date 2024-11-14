
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition interaction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Aggregation Service's updateDefinition interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Aggregation_updateDefinition": {
      "address": "request_Aggregation_updateDefinition",
      "messages": {
        "Aggregation.updateDefinition_request.message": {
          "description": "Aggregation updateDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
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
                "description": "The aggInstIds field shall contain the object instance identifiers of the AggregationIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the aggInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "aggDefDetails": {
                "properties": {
                  "category": {
                    "description": "Category of the aggregation. Value taken from AggregationCategory enumeration, although the use of a UOctet allows deployment specific extension. Extensions must use values greater than 127.",
                    "format": "uint8",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "description": {
                    "description": "The description of the parameter. May be empty.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "filterEnabled": {
                    "description": "Controls whether reports for this aggregation are to be filtered.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "filteredTimeout": {
                    "description": "The maximum duration between filtered reports. If this value is exceeded, then a report is sent regardless of filtered thresholds. Ignored if not filtered.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "generationEnabled": {
                    "description": "Controls whether reports for this aggregation are to be generated.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "parameterSets": {
                    "description": "List containing the parameter sets which define the aggregation.",
                    "items": {
                      "properties": {
                        "domain": {
                          "description": "The domain of the parameters being referenced in this set of parameters, NULL if the same domain as the aggregation.",
                          "items": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-13>"
                          },
                          "type": "array",
                          "x-parser-schema-id": "<anonymous-schema-12>"
                        },
                        "parameters": {
                          "description": "The list of object instance identifiers of the ParameterIdentity objects being included in the aggregation.",
                          "items": {
                            "type": "integer",
                            "x-parser-schema-id": "<anonymous-schema-15>"
                          },
                          "type": "array",
                          "x-parser-schema-id": "<anonymous-schema-14>"
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
                              "x-parser-schema-id": "<anonymous-schema-17>"
                            },
                            "thresholdValue": {
                              "description": "Threshold value to apply.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-18>"
                            },
                            "useConverted": {
                              "description": "If true, and the relevant Parameter has a conversion, then use the converted value for the threshold comparison, otherwise use the raw value.",
                              "type": "boolean",
                              "x-parser-schema-id": "<anonymous-schema-19>"
                            }
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-16>"
                        },
                        "sampleInterval": {
                          "description": "The interval between samples of the parameters in the set. If '0' then just a single sample of the parameters is required per aggregation report.",
                          "format": "uint64",
                          "type": "number",
                          "x-parser-schema-id": "<anonymous-schema-20>"
                        }
                      },
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-11>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "reportInterval": {
                    "description": "The interval between periodic reports on this aggregation. If this aggregation is not periodic, this field must be '0'.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-21>"
                  },
                  "sendDefinitions": {
                    "description": "If TRUE reports will include the ParameterDefinition object instance identifier in the AggregationParameterValue, if FALSE it will be set to NULL.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-22>"
                  },
                  "sendUnchanged": {
                    "description": "If TRUE reports will include all values regardless of whether changed, if FALSE values unchanged from previous report are replaced with a NULL.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Aggregation_updateDefinition_request"
          },
          "x-parser-unique-object-id": "Aggregation.updateDefinition_request.message",
          "x-parser-message-name": "Aggregation_updateDefinition_request"
        }
      },
      "description": "Send a **Aggregation_updateDefinition_request** message in this channel to receive a **Aggregation_updateDefinition_response** message over the **response_Aggregation_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "request_Aggregation_updateDefinition"
    },
    "response_Aggregation_updateDefinition": {
      "address": "response_Aggregation_updateDefinition",
      "messages": {
        "Aggregation.updateDefinition_response.message": {
          "description": "Aggregation updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-26>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new AggregationDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-25>"
              }
            },
            "x-parser-schema-id": "Aggregation_updateDefinition_response"
          },
          "x-parser-unique-object-id": "Aggregation.updateDefinition_response.message",
          "x-parser-message-name": "Aggregation_updateDefinition_response"
        }
      },
      "description": "Use this channel to receive Aggregation updateDefinition responses as **Aggregation_updateDefinition_response** messages.\n",
      "x-parser-unique-object-id": "response_Aggregation_updateDefinition"
    },
    "error_Aggregation_updateDefinition": {
      "address": "error_Aggregation_updateDefinition",
      "messages": {
        "Aggregation.updateDefinition_error.message": {
          "description": "Aggregation updateDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-31>"
                },
                "x-parser-schema-id": "<anonymous-schema-30>"
              }
            },
            "x-parser-schema-id": "Aggregation_updateDefinition_error"
          },
          "x-parser-unique-object-id": "Aggregation.updateDefinition_error.message",
          "x-parser-message-name": "Aggregation_updateDefinition_error"
        }
      },
      "description": "Use this channel to receive Aggregation updateDefinition errors as **Aggregation_updateDefinition_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Aggregation_updateDefinition"
    }
  },
  "operations": {
    "Aggregation_updateDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Aggregation_updateDefinition",
      "messages": [
        "$ref:$.channels.request_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_request.message"
      ],
      "x-parser-unique-object-id": "Aggregation_updateDefinition_request"
    },
    "Aggregation_updateDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Aggregation_updateDefinition",
      "messages": [
        "$ref:$.channels.response_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_response.message"
      ],
      "x-parser-unique-object-id": "Aggregation_updateDefinition_response"
    },
    "Aggregation_updateDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Aggregation_updateDefinition",
      "messages": [
        "$ref:$.channels.error_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_updateDefinition_error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_updateDefinition_request": "$ref:$.channels.request_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_request.message.payload",
      "Aggregation_updateDefinition_response": "$ref:$.channels.response_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_response.message.payload",
      "Aggregation_updateDefinition_error": "$ref:$.channels.error_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_error.message.payload",
      "mc": {
        "aggregation": {
          "AggregationDefinitionDetails": "$ref:$.channels.request_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_request.message.payload.properties.aggDefDetails",
          "AggregationParameterSet": "$ref:$.channels.request_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_request.message.payload.properties.aggDefDetails.properties.parameterSets.items",
          "ThresholdFilter": "$ref:$.channels.request_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_request.message.payload.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter",
          "ThresholdType": "$ref:$.channels.request_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_request.message.payload.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter.properties.thresholdType"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Aggregation_updateDefinition_request": "$ref:$.channels.request_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_request.message",
      "Aggregation_updateDefinition_response": "$ref:$.channels.response_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_response.message",
      "Aggregation_updateDefinition_error": "$ref:$.channels.error_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_error.message"
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
  