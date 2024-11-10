
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition iteraction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the updateDefinition interaction.",
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
    "Send_Aggregation_updateDefinition": {
      "address": "Send_Aggregation_updateDefinition",
      "messages": {
        "Aggregation.updateDefinition_Send.message": {
          "description": "Aggregation updateDefinition request submission",
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
                "description": "The aggInstIds field shall contain the object instance identifiers of the AggregationIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the aggInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
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
              }
            },
            "x-parser-schema-id": "Aggregation_updateDefinition_Send"
          },
          "x-parser-unique-object-id": "Aggregation.updateDefinition_Send.message",
          "x-parser-message-name": "Aggregation_updateDefinition_Send"
        }
      },
      "description": "Send a **Aggregation_updateDefinition_Send** message in this channel to receive a **Aggregation_updateDefinition_Receive** message over the **Receive_Aggregation_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "Send_Aggregation_updateDefinition"
    },
    "Receive_Aggregation_updateDefinition": {
      "address": "Receive_Aggregation_updateDefinition",
      "messages": {
        "Aggregation.updateDefinition_Receive.message": {
          "description": "Aggregation updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "newObjInstIds": {
                "type": "integer",
                "description": "The response shall contain the list of object instance identifiers for the new AggregationDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-24>"
              }
            },
            "x-parser-schema-id": "Aggregation_updateDefinition_Receive"
          },
          "x-parser-unique-object-id": "Aggregation.updateDefinition_Receive.message",
          "x-parser-message-name": "Aggregation_updateDefinition_Receive"
        }
      },
      "description": "Use this channel to receive Aggregation updateDefinition responses as **Aggregation_updateDefinition_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Aggregation_updateDefinition"
    },
    "Error_Aggregation_updateDefinition": {
      "address": "Error_Aggregation_updateDefinition",
      "messages": {
        "Aggregation.updateDefinition_Error.message": {
          "description": "Aggregation updateDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-29>"
                },
                "x-parser-schema-id": "<anonymous-schema-28>"
              }
            },
            "x-parser-schema-id": "Aggregation_updateDefinition_Error"
          },
          "x-parser-unique-object-id": "Aggregation.updateDefinition_Error.message",
          "x-parser-message-name": "Aggregation_updateDefinition_Error"
        }
      },
      "description": "Use this channel to receive Aggregation updateDefinition errors as **Aggregation_updateDefinition_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Aggregation_updateDefinition"
    }
  },
  "operations": {
    "Aggregation_updateDefinition_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Aggregation_updateDefinition",
      "messages": [
        "$ref:$.channels.Send_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Send.message"
      ],
      "x-parser-unique-object-id": "Aggregation_updateDefinition_Send"
    },
    "Aggregation_updateDefinition_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Aggregation_updateDefinition",
      "messages": [
        "$ref:$.channels.Receive_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Receive.message"
      ],
      "x-parser-unique-object-id": "Aggregation_updateDefinition_Receive"
    },
    "Aggregation_updateDefinition_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Aggregation_updateDefinition",
      "messages": [
        "$ref:$.channels.Error_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_updateDefinition_Error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_updateDefinition_Send": "$ref:$.channels.Send_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Send.message.payload",
      "Aggregation_updateDefinition_Receive": "$ref:$.channels.Receive_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Receive.message.payload",
      "Aggregation_updateDefinition_Error": "$ref:$.channels.Error_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Error.message.payload",
      "mc": {
        "aggregation": {
          "AggregationDefinitionDetails": "$ref:$.channels.Send_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Send.message.payload.properties.aggDefDetails",
          "AggregationParameterSet": "$ref:$.channels.Send_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Send.message.payload.properties.aggDefDetails.properties.parameterSets.items",
          "ThresholdFilter": "$ref:$.channels.Send_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Send.message.payload.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter",
          "ThresholdType": "$ref:$.channels.Send_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Send.message.payload.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter.properties.thresholdType"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Aggregation_updateDefinition_Send": "$ref:$.channels.Send_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Send.message",
      "Aggregation_updateDefinition_Receive": "$ref:$.channels.Receive_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Receive.message",
      "Aggregation_updateDefinition_Error": "$ref:$.channels.Error_Aggregation_updateDefinition.messages.Aggregation.updateDefinition_Error.message"
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
  