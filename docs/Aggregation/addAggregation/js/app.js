
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service addAggregation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addAggregation iteraction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the addAggregation interaction.",
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
    "Send_Aggregation_addAggregation": {
      "address": "Send_Aggregation_addAggregation",
      "messages": {
        "Aggregation.addAggregation_Send.message": {
          "description": "Aggregation addAggregation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
            "x-parser-schema-id": "Aggregation_addAggregation_Send"
          },
          "x-parser-unique-object-id": "Aggregation.addAggregation_Send.message",
          "x-parser-message-name": "Aggregation_addAggregation_Send"
        }
      },
      "description": "Send a **Aggregation_addAggregation_Send** message in this channel to receive a **Aggregation_addAggregation_Receive** message over the **Receive_Aggregation_addAggregation** channel.\n",
      "x-parser-unique-object-id": "Send_Aggregation_addAggregation"
    },
    "Receive_Aggregation_addAggregation": {
      "address": "Receive_Aggregation_addAggregation",
      "messages": {
        "Aggregation.addAggregation_Receive.message": {
          "description": "Aggregation addAggregation update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
            "x-parser-schema-id": "Aggregation_addAggregation_Receive"
          },
          "x-parser-unique-object-id": "Aggregation.addAggregation_Receive.message",
          "x-parser-message-name": "Aggregation_addAggregation_Receive"
        }
      },
      "description": "Use this channel to receive Aggregation addAggregation responses as **Aggregation_addAggregation_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Aggregation_addAggregation"
    },
    "Error_Aggregation_addAggregation": {
      "address": "Error_Aggregation_addAggregation",
      "messages": {
        "Aggregation.addAggregation_Error.message": {
          "description": "Aggregation addAggregation error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
                  "DUPLICATE",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-32>"
                },
                "x-parser-schema-id": "<anonymous-schema-31>"
              }
            },
            "x-parser-schema-id": "Aggregation_addAggregation_Error"
          },
          "x-parser-unique-object-id": "Aggregation.addAggregation_Error.message",
          "x-parser-message-name": "Aggregation_addAggregation_Error"
        }
      },
      "description": "Use this channel to receive Aggregation addAggregation errors as **Aggregation_addAggregation_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Aggregation_addAggregation"
    }
  },
  "operations": {
    "Aggregation_addAggregation_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Aggregation_addAggregation",
      "messages": [
        "$ref:$.channels.Send_Aggregation_addAggregation.messages.Aggregation.addAggregation_Send.message"
      ],
      "x-parser-unique-object-id": "Aggregation_addAggregation_Send"
    },
    "Aggregation_addAggregation_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Aggregation_addAggregation",
      "messages": [
        "$ref:$.channels.Receive_Aggregation_addAggregation.messages.Aggregation.addAggregation_Receive.message"
      ],
      "x-parser-unique-object-id": "Aggregation_addAggregation_Receive"
    },
    "Aggregation_addAggregation_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Aggregation_addAggregation",
      "messages": [
        "$ref:$.channels.Error_Aggregation_addAggregation.messages.Aggregation.addAggregation_Error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_addAggregation_Error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_addAggregation_Send": "$ref:$.channels.Send_Aggregation_addAggregation.messages.Aggregation.addAggregation_Send.message.payload",
      "Aggregation_addAggregation_Receive": "$ref:$.channels.Receive_Aggregation_addAggregation.messages.Aggregation.addAggregation_Receive.message.payload",
      "Aggregation_addAggregation_Error": "$ref:$.channels.Error_Aggregation_addAggregation.messages.Aggregation.addAggregation_Error.message.payload",
      "mc": {
        "aggregation": {
          "AggregationCreationRequest": "$ref:$.channels.Send_Aggregation_addAggregation.messages.Aggregation.addAggregation_Send.message.payload.properties.aggDefDetails",
          "AggregationDefinitionDetails": "$ref:$.channels.Send_Aggregation_addAggregation.messages.Aggregation.addAggregation_Send.message.payload.properties.aggDefDetails.properties.aggDefDetails",
          "AggregationParameterSet": "$ref:$.channels.Send_Aggregation_addAggregation.messages.Aggregation.addAggregation_Send.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items",
          "ThresholdFilter": "$ref:$.channels.Send_Aggregation_addAggregation.messages.Aggregation.addAggregation_Send.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter",
          "ThresholdType": "$ref:$.channels.Send_Aggregation_addAggregation.messages.Aggregation.addAggregation_Send.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter.properties.thresholdType"
        },
        "ObjectInstancePair": "$ref:$.channels.Receive_Aggregation_addAggregation.messages.Aggregation.addAggregation_Receive.message.payload.properties.newObjInstIds",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Aggregation_addAggregation_Send": "$ref:$.channels.Send_Aggregation_addAggregation.messages.Aggregation.addAggregation_Send.message",
      "Aggregation_addAggregation_Receive": "$ref:$.channels.Receive_Aggregation_addAggregation.messages.Aggregation.addAggregation_Receive.message",
      "Aggregation_addAggregation_Error": "$ref:$.channels.Error_Aggregation_addAggregation.messages.Aggregation.addAggregation_Error.message"
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
  