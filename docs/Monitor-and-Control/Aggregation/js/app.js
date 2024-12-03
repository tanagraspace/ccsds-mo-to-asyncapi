
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Aggregation Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "monitorValue_pub": {
      "address": null,
      "messages": {
        "monitorValue_pub.message": {
          "description": "monitorValue response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
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
            "x-parser-schema-id": "monitorValue_pub"
          },
          "x-parser-unique-object-id": "monitorValue_pub.message",
          "x-parser-message-name": "monitorValue_pub"
        }
      },
      "description": "Use this channel to receive monitorValue responses as **monitorValue_pub** messages.\n",
      "x-parser-unique-object-id": "monitorValue_pub"
    },
    "getValue_request": {
      "address": "getValue_request",
      "messages": {
        "getValue_request.message": {
          "description": "getValue request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "aggInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-28>"
                },
                "description": "The aggInstIds field shall provide the list of AggregationIdentity object instance identifiers.\nThe wildcard value of '0' shall be supported and matches all aggregations of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested aggregation is unknown then an UNKNOWN error shall be returned.\nThe filter shall not be applied for the getValue operation.\nIf an aggregation is being reported periodically, using the operation shall not reset the reportInterval or filteredTimeout timer.\n",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "getValue_request"
          },
          "x-parser-unique-object-id": "getValue_request.message",
          "x-parser-message-name": "getValue_request"
        }
      },
      "description": "Send a **getValue_request** message in this channel to receive a **getValue_response** message over the **getValue_response** channel.\n",
      "x-parser-unique-object-id": "getValue_request"
    },
    "getValue_response": {
      "address": null,
      "messages": {
        "getValue_response.message": {
          "description": "getValue response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "aggValDetails": {
                "properties": {
                  "aggId": {
                    "description": "The AggregationIdentity object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-31>"
                  },
                  "defId": {
                    "description": "The AggregationDefinition object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-32>"
                  },
                  "timestamp": {
                    "description": "The timestamp of the value. Use for the calculation of the individual parameter value timestamps.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-33>"
                  },
                  "value": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.newValue"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-30>"
              }
            },
            "x-parser-schema-id": "getValue_response"
          },
          "x-parser-unique-object-id": "getValue_response.message",
          "x-parser-message-name": "getValue_response"
        }
      },
      "description": "Use this channel to receive getValue responses as **getValue_response** messages.\n",
      "x-parser-unique-object-id": "getValue_response"
    },
    "getValue_error": {
      "address": "getValue_error",
      "messages": {
        "getValue_error.message": {
          "description": "getValue error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-34>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-38>"
                },
                "x-parser-schema-id": "<anonymous-schema-37>"
              }
            },
            "x-parser-schema-id": "getValue_error"
          },
          "x-parser-unique-object-id": "getValue_error.message",
          "x-parser-message-name": "getValue_error"
        }
      },
      "description": "Use this channel to receive getValue errors as **getValue_error** messages.\n",
      "x-parser-unique-object-id": "getValue_error"
    },
    "enableGeneration_request": {
      "address": "enableGeneration_request",
      "messages": {
        "enableGeneration_request.message": {
          "description": "enableGeneration request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-39>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains AggregationIdentity object instance identifiers.\nThe AggregationIdentity objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the AggregationIdentity objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all AggregationIdentity objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then reports of matching AggregationIdentity objects shall be generated, a value of FALSE requests that reports will not be generated.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current generationEnabled field of the definition for a matched AggregationIdentity object i.e. enabling an already enabled aggregation will not result in an error.\nIf a requested AggregationIdentity or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain AggregationIdentity objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new AggregationDefinition object in the COM archive if the generationEnabled field is changed.\nIf a new AggregationDefinition object is created then that new object shall be the current AggregationDefinition used for the specific AggregationIdentity.\n",
                "x-parser-schema-id": "<anonymous-schema-40>"
              },
              "enableInstances": {
                "properties": {
                  "id": {
                    "description": "The object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-42>"
                  },
                  "value": {
                    "description": "An associated Boolean value.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-43>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-41>"
              }
            },
            "x-parser-schema-id": "enableGeneration_request"
          },
          "x-parser-unique-object-id": "enableGeneration_request.message",
          "x-parser-message-name": "enableGeneration_request"
        }
      },
      "description": "Send a **enableGeneration_request** message in this channel to receive a **enableGeneration_response** message over the **enableGeneration_response** channel.\n",
      "x-parser-unique-object-id": "enableGeneration_request"
    },
    "enableGeneration_response": {
      "address": null,
      "messages": {
        "enableGeneration_response.message": {
          "description": "enableGeneration response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-44>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-46>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new AggregationDefinition objects.\n",
                "x-parser-schema-id": "<anonymous-schema-45>"
              }
            },
            "x-parser-schema-id": "enableGeneration_response"
          },
          "x-parser-unique-object-id": "enableGeneration_response.message",
          "x-parser-message-name": "enableGeneration_response"
        }
      },
      "description": "Use this channel to receive enableGeneration responses as **enableGeneration_response** messages.\n",
      "x-parser-unique-object-id": "enableGeneration_response"
    },
    "enableGeneration_error": {
      "address": "enableGeneration_error",
      "messages": {
        "enableGeneration_error.message": {
          "description": "enableGeneration error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-47>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-48>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-49>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-51>"
                },
                "x-parser-schema-id": "<anonymous-schema-50>"
              }
            },
            "x-parser-schema-id": "enableGeneration_error"
          },
          "x-parser-unique-object-id": "enableGeneration_error.message",
          "x-parser-message-name": "enableGeneration_error"
        }
      },
      "description": "Use this channel to receive enableGeneration errors as **enableGeneration_error** messages.\n",
      "x-parser-unique-object-id": "enableGeneration_error"
    },
    "enableFilter_submit": {
      "address": "enableFilter_submit",
      "messages": {
        "enableFilter_submit.message": {
          "description": "enableFilter request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-52>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains AggregationIdentity object instance identifiers.\nThe AggregationIdentity objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the AggregationIdentity objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all AggregationIdentity objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then reports of matching AggregationIdentity objects shall be filtered, a value of FALSE requests that reports will not be filtered.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current filterEnabled field of the definition for a matched AggregationIdentity object i.e. filtering an already filtered aggregation will not result in an error.\nIf a requested AggregationIdentity or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain AggregationIdentity objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new AggregationDefinition object in the COM archive if the filterEnabled field is changed.\nIf a new AggregationDefinition object is created then that new object shall be the current AggregationDefinition used for the specific AggregationIdentity.\n",
                "x-parser-schema-id": "<anonymous-schema-53>"
              },
              "enableInstances": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message.payload.properties.enableInstances"
            },
            "x-parser-schema-id": "enableFilter_submit"
          },
          "x-parser-unique-object-id": "enableFilter_submit.message",
          "x-parser-message-name": "enableFilter_submit"
        }
      },
      "description": "Send a **enableFilter_submit** message in this channel.\n",
      "x-parser-unique-object-id": "enableFilter_submit"
    },
    "enableFilter_error": {
      "address": "enableFilter_error",
      "messages": {
        "enableFilter_error.message": {
          "description": "enableFilter error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-54>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-55>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-56>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-58>"
                },
                "x-parser-schema-id": "<anonymous-schema-57>"
              }
            },
            "x-parser-schema-id": "enableFilter_error"
          },
          "x-parser-unique-object-id": "enableFilter_error.message",
          "x-parser-message-name": "enableFilter_error"
        }
      },
      "description": "Use this channel to receive enableFilter errors as **enableFilter_error** messages.\n",
      "x-parser-unique-object-id": "enableFilter_error"
    },
    "listDefinition_request": {
      "address": "listDefinition_request",
      "messages": {
        "listDefinition_request.message": {
          "description": "listDefinition request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-59>"
              },
              "aggNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-61>"
                },
                "description": "The aggNames field shall contain a list of aggregation names to retrieve the AggregationIdentity and AggregationDefinition object instance identifiers for.\nThe aggNames field may contain the wildcard value of '*' to return all supported AggregationIdentity and AggregationDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing AggregationIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-60>"
              }
            },
            "x-parser-schema-id": "listDefinition_request"
          },
          "x-parser-unique-object-id": "listDefinition_request.message",
          "x-parser-message-name": "listDefinition_request"
        }
      },
      "description": "Send a **listDefinition_request** message in this channel to receive a **listDefinition_response** message over the **listDefinition_response** channel.\n",
      "x-parser-unique-object-id": "listDefinition_request"
    },
    "listDefinition_response": {
      "address": null,
      "messages": {
        "listDefinition_response.message": {
          "description": "listDefinition response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-62>"
              },
              "objInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-64>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-65>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-63>"
              }
            },
            "x-parser-schema-id": "listDefinition_response"
          },
          "x-parser-unique-object-id": "listDefinition_response.message",
          "x-parser-message-name": "listDefinition_response"
        }
      },
      "description": "Use this channel to receive listDefinition responses as **listDefinition_response** messages.\n",
      "x-parser-unique-object-id": "listDefinition_response"
    },
    "listDefinition_error": {
      "address": "listDefinition_error",
      "messages": {
        "listDefinition_error.message": {
          "description": "listDefinition error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-66>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-67>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-68>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-70>"
                },
                "x-parser-schema-id": "<anonymous-schema-69>"
              }
            },
            "x-parser-schema-id": "listDefinition_error"
          },
          "x-parser-unique-object-id": "listDefinition_error.message",
          "x-parser-message-name": "listDefinition_error"
        }
      },
      "description": "Use this channel to receive listDefinition errors as **listDefinition_error** messages.\n",
      "x-parser-unique-object-id": "listDefinition_error"
    },
    "addAggregation_request": {
      "address": "addAggregation_request",
      "messages": {
        "addAggregation_request.message": {
          "description": "addAggregation request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-71>"
              },
              "aggDefDetails": {
                "properties": {
                  "aggDefDetails": {
                    "properties": {
                      "category": {
                        "description": "Category of the aggregation. Value taken from AggregationCategory enumeration, although the use of a UOctet allows deployment specific extension. Extensions must use values greater than 127.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-74>"
                      },
                      "description": {
                        "description": "The description of the parameter. May be empty.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-75>"
                      },
                      "filterEnabled": {
                        "description": "Controls whether reports for this aggregation are to be filtered.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-76>"
                      },
                      "filteredTimeout": {
                        "description": "The maximum duration between filtered reports. If this value is exceeded, then a report is sent regardless of filtered thresholds. Ignored if not filtered.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-77>"
                      },
                      "generationEnabled": {
                        "description": "Controls whether reports for this aggregation are to be generated.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-78>"
                      },
                      "parameterSets": {
                        "description": "List containing the parameter sets which define the aggregation.",
                        "items": {
                          "properties": {
                            "domain": {
                              "description": "The domain of the parameters being referenced in this set of parameters, NULL if the same domain as the aggregation.",
                              "items": {
                                "type": "string",
                                "x-parser-schema-id": "<anonymous-schema-82>"
                              },
                              "type": "array",
                              "x-parser-schema-id": "<anonymous-schema-81>"
                            },
                            "parameters": {
                              "description": "The list of object instance identifiers of the ParameterIdentity objects being included in the aggregation.",
                              "items": {
                                "type": "integer",
                                "x-parser-schema-id": "<anonymous-schema-84>"
                              },
                              "type": "array",
                              "x-parser-schema-id": "<anonymous-schema-83>"
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
                                  "x-parser-schema-id": "<anonymous-schema-86>"
                                },
                                "thresholdValue": {
                                  "description": "Threshold value to apply.",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-87>"
                                },
                                "useConverted": {
                                  "description": "If true, and the relevant Parameter has a conversion, then use the converted value for the threshold comparison, otherwise use the raw value.",
                                  "type": "boolean",
                                  "x-parser-schema-id": "<anonymous-schema-88>"
                                }
                              },
                              "type": "object",
                              "x-parser-schema-id": "<anonymous-schema-85>"
                            },
                            "sampleInterval": {
                              "description": "The interval between samples of the parameters in the set. If '0' then just a single sample of the parameters is required per aggregation report.",
                              "format": "uint64",
                              "type": "number",
                              "x-parser-schema-id": "<anonymous-schema-89>"
                            }
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-80>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-79>"
                      },
                      "reportInterval": {
                        "description": "The interval between periodic reports on this aggregation. If this aggregation is not periodic, this field must be '0'.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-90>"
                      },
                      "sendDefinitions": {
                        "description": "If TRUE reports will include the ParameterDefinition object instance identifier in the AggregationParameterValue, if FALSE it will be set to NULL.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-91>"
                      },
                      "sendUnchanged": {
                        "description": "If TRUE reports will include all values regardless of whether changed, if FALSE values unchanged from previous report are replaced with a NULL.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-92>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-73>"
                  },
                  "name": {
                    "description": "The name of the aggregation. Must not be empty or the wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-93>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-72>"
              }
            },
            "x-parser-schema-id": "addAggregation_request"
          },
          "x-parser-unique-object-id": "addAggregation_request.message",
          "x-parser-message-name": "addAggregation_request"
        }
      },
      "description": "Send a **addAggregation_request** message in this channel to receive a **addAggregation_response** message over the **addAggregation_response** channel.\n",
      "x-parser-unique-object-id": "addAggregation_request"
    },
    "addAggregation_response": {
      "address": null,
      "messages": {
        "addAggregation_response.message": {
          "description": "addAggregation response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-94>"
              },
              "newObjInstIds": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds"
            },
            "x-parser-schema-id": "addAggregation_response"
          },
          "x-parser-unique-object-id": "addAggregation_response.message",
          "x-parser-message-name": "addAggregation_response"
        }
      },
      "description": "Use this channel to receive addAggregation responses as **addAggregation_response** messages.\n",
      "x-parser-unique-object-id": "addAggregation_response"
    },
    "addAggregation_error": {
      "address": "addAggregation_error",
      "messages": {
        "addAggregation_error.message": {
          "description": "addAggregation error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-95>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-96>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "DUPLICATE",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-97>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-99>"
                },
                "x-parser-schema-id": "<anonymous-schema-98>"
              }
            },
            "x-parser-schema-id": "addAggregation_error"
          },
          "x-parser-unique-object-id": "addAggregation_error.message",
          "x-parser-message-name": "addAggregation_error"
        }
      },
      "description": "Use this channel to receive addAggregation errors as **addAggregation_error** messages.\n",
      "x-parser-unique-object-id": "addAggregation_error"
    },
    "updateDefinition_request": {
      "address": "updateDefinition_request",
      "messages": {
        "updateDefinition_request.message": {
          "description": "updateDefinition request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-100>"
              },
              "aggInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-102>"
                },
                "description": "The aggInstIds field shall contain the object instance identifiers of the AggregationIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the aggInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-101>"
              },
              "aggDefDetails": "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails"
            },
            "x-parser-schema-id": "updateDefinition_request"
          },
          "x-parser-unique-object-id": "updateDefinition_request.message",
          "x-parser-message-name": "updateDefinition_request"
        }
      },
      "description": "Send a **updateDefinition_request** message in this channel to receive a **updateDefinition_response** message over the **updateDefinition_response** channel.\n",
      "x-parser-unique-object-id": "updateDefinition_request"
    },
    "updateDefinition_response": {
      "address": null,
      "messages": {
        "updateDefinition_response.message": {
          "description": "updateDefinition response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-103>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-105>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new AggregationDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-104>"
              }
            },
            "x-parser-schema-id": "updateDefinition_response"
          },
          "x-parser-unique-object-id": "updateDefinition_response.message",
          "x-parser-message-name": "updateDefinition_response"
        }
      },
      "description": "Use this channel to receive updateDefinition responses as **updateDefinition_response** messages.\n",
      "x-parser-unique-object-id": "updateDefinition_response"
    },
    "updateDefinition_error": {
      "address": "updateDefinition_error",
      "messages": {
        "updateDefinition_error.message": {
          "description": "updateDefinition error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-106>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-107>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-108>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-110>"
                },
                "x-parser-schema-id": "<anonymous-schema-109>"
              }
            },
            "x-parser-schema-id": "updateDefinition_error"
          },
          "x-parser-unique-object-id": "updateDefinition_error.message",
          "x-parser-message-name": "updateDefinition_error"
        }
      },
      "description": "Use this channel to receive updateDefinition errors as **updateDefinition_error** messages.\n",
      "x-parser-unique-object-id": "updateDefinition_error"
    },
    "removeAggregation_submit": {
      "address": "removeAggregation_submit",
      "messages": {
        "removeAggregation_submit.message": {
          "description": "removeAggregation request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-111>"
              },
              "aggInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-113>"
                },
                "description": "The aggInstIds field shall hold the object instance identifiers of the AggregationIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided AggregationIdentity object instance identifier does not include a wildcard and does not match an existing aggregation then this operation shall fail with an UNKNOWN error.\nMatched AggregationIdentity and AggregationDefinition objects shall not be removed from the COM archive only the list of AggregationIdentity and AggregationDefinition objects in the provider.\nIf an error is raised then no aggregations shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish aggregation values for the deleted AggregationIdentity objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-112>"
              }
            },
            "x-parser-schema-id": "removeAggregation_submit"
          },
          "x-parser-unique-object-id": "removeAggregation_submit.message",
          "x-parser-message-name": "removeAggregation_submit"
        }
      },
      "description": "Send a **removeAggregation_submit** message in this channel.\n",
      "x-parser-unique-object-id": "removeAggregation_submit"
    },
    "removeAggregation_error": {
      "address": "removeAggregation_error",
      "messages": {
        "removeAggregation_error.message": {
          "description": "removeAggregation error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-114>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-115>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-116>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-118>"
                },
                "x-parser-schema-id": "<anonymous-schema-117>"
              }
            },
            "x-parser-schema-id": "removeAggregation_error"
          },
          "x-parser-unique-object-id": "removeAggregation_error.message",
          "x-parser-message-name": "removeAggregation_error"
        }
      },
      "description": "Use this channel to receive removeAggregation errors as **removeAggregation_error** messages.\n",
      "x-parser-unique-object-id": "removeAggregation_error"
    }
  },
  "operations": {
    "monitorValue_pub": {
      "action": "receive",
      "channel": "$ref:$.channels.monitorValue_pub",
      "messages": [
        "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message"
      ],
      "x-parser-unique-object-id": "monitorValue_pub"
    },
    "getValue_request": {
      "action": "send",
      "channel": "$ref:$.channels.getValue_request",
      "messages": [
        "$ref:$.channels.getValue_request.messages.getValue_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getValue_response"
      },
      "x-parser-unique-object-id": "getValue_request"
    },
    "getValue_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getValue_response",
      "messages": [
        "$ref:$.channels.getValue_response.messages.getValue_response.message"
      ],
      "x-parser-unique-object-id": "getValue_response"
    },
    "getValue_error": {
      "action": "receive",
      "channel": "$ref:$.channels.getValue_error",
      "messages": [
        "$ref:$.channels.getValue_error.messages.getValue_error.message"
      ],
      "x-parser-unique-object-id": "getValue_error"
    },
    "enableGeneration_request": {
      "action": "send",
      "channel": "$ref:$.channels.enableGeneration_request",
      "messages": [
        "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.enableGeneration_response"
      },
      "x-parser-unique-object-id": "enableGeneration_request"
    },
    "enableGeneration_response": {
      "action": "receive",
      "channel": "$ref:$.channels.enableGeneration_response",
      "messages": [
        "$ref:$.channels.enableGeneration_response.messages.enableGeneration_response.message"
      ],
      "x-parser-unique-object-id": "enableGeneration_response"
    },
    "enableGeneration_error": {
      "action": "receive",
      "channel": "$ref:$.channels.enableGeneration_error",
      "messages": [
        "$ref:$.channels.enableGeneration_error.messages.enableGeneration_error.message"
      ],
      "x-parser-unique-object-id": "enableGeneration_error"
    },
    "enableFilter_submit": {
      "action": "send",
      "channel": "$ref:$.channels.enableFilter_submit",
      "messages": [
        "$ref:$.channels.enableFilter_submit.messages.enableFilter_submit.message"
      ],
      "x-parser-unique-object-id": "enableFilter_submit"
    },
    "enableFilter_error": {
      "action": "receive",
      "channel": "$ref:$.channels.enableFilter_error",
      "messages": [
        "$ref:$.channels.enableFilter_error.messages.enableFilter_error.message"
      ],
      "x-parser-unique-object-id": "enableFilter_error"
    },
    "listDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.listDefinition_request",
      "messages": [
        "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.listDefinition_response"
      },
      "x-parser-unique-object-id": "listDefinition_request"
    },
    "listDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.listDefinition_response",
      "messages": [
        "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message"
      ],
      "x-parser-unique-object-id": "listDefinition_response"
    },
    "listDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.listDefinition_error",
      "messages": [
        "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message"
      ],
      "x-parser-unique-object-id": "listDefinition_error"
    },
    "addAggregation_request": {
      "action": "send",
      "channel": "$ref:$.channels.addAggregation_request",
      "messages": [
        "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.addAggregation_response"
      },
      "x-parser-unique-object-id": "addAggregation_request"
    },
    "addAggregation_response": {
      "action": "receive",
      "channel": "$ref:$.channels.addAggregation_response",
      "messages": [
        "$ref:$.channels.addAggregation_response.messages.addAggregation_response.message"
      ],
      "x-parser-unique-object-id": "addAggregation_response"
    },
    "addAggregation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.addAggregation_error",
      "messages": [
        "$ref:$.channels.addAggregation_error.messages.addAggregation_error.message"
      ],
      "x-parser-unique-object-id": "addAggregation_error"
    },
    "updateDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.updateDefinition_request",
      "messages": [
        "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.updateDefinition_response"
      },
      "x-parser-unique-object-id": "updateDefinition_request"
    },
    "updateDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.updateDefinition_response",
      "messages": [
        "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message"
      ],
      "x-parser-unique-object-id": "updateDefinition_response"
    },
    "updateDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.updateDefinition_error",
      "messages": [
        "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message"
      ],
      "x-parser-unique-object-id": "updateDefinition_error"
    },
    "removeAggregation_submit": {
      "action": "send",
      "channel": "$ref:$.channels.removeAggregation_submit",
      "messages": [
        "$ref:$.channels.removeAggregation_submit.messages.removeAggregation_submit.message"
      ],
      "x-parser-unique-object-id": "removeAggregation_submit"
    },
    "removeAggregation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.removeAggregation_error",
      "messages": [
        "$ref:$.channels.removeAggregation_error.messages.removeAggregation_error.message"
      ],
      "x-parser-unique-object-id": "removeAggregation_error"
    }
  },
  "components": {
    "schemas": {
      "monitorValue_sub": {
        "description": "A request message with no payload.",
        "type": "object",
        "additionalProperties": false,
        "x-parser-schema-id": "monitorValue_sub"
      },
      "monitorValue_pub": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload",
      "getValue_request": "$ref:$.channels.getValue_request.messages.getValue_request.message.payload",
      "getValue_response": "$ref:$.channels.getValue_response.messages.getValue_response.message.payload",
      "getValue_error": "$ref:$.channels.getValue_error.messages.getValue_error.message.payload",
      "enableGeneration_request": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message.payload",
      "enableGeneration_response": "$ref:$.channels.enableGeneration_response.messages.enableGeneration_response.message.payload",
      "enableGeneration_error": "$ref:$.channels.enableGeneration_error.messages.enableGeneration_error.message.payload",
      "enableFilter_submit": "$ref:$.channels.enableFilter_submit.messages.enableFilter_submit.message.payload",
      "enableFilter_error": "$ref:$.channels.enableFilter_error.messages.enableFilter_error.message.payload",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message.payload",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message.payload",
      "addAggregation_request": "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message.payload",
      "addAggregation_response": "$ref:$.channels.addAggregation_response.messages.addAggregation_response.message.payload",
      "addAggregation_error": "$ref:$.channels.addAggregation_error.messages.addAggregation_error.message.payload",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message.payload",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message.payload",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message.payload",
      "removeAggregation_submit": "$ref:$.channels.removeAggregation_submit.messages.removeAggregation_submit.message.payload",
      "removeAggregation_error": "$ref:$.channels.removeAggregation_error.messages.removeAggregation_error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message.payload.properties.enableInstances",
        "ObjectId": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.objId",
        "ObjectKey": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.objId.properties.key",
        "ObjectType": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.objId.properties.type_",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "aggregation": {
          "AggregationCreationRequest": "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message.payload.properties.aggDefDetails",
          "AggregationDefinitionDetails": "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails",
          "AggregationParameterSet": "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items",
          "AggregationParameterValue": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.newValue.properties.parameterSetValues.items.properties.values.items",
          "AggregationSetValue": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.newValue.properties.parameterSetValues.items",
          "AggregationValue": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.newValue",
          "AggregationValueDetails": "$ref:$.channels.getValue_response.messages.getValue_response.message.payload.properties.aggValDetails",
          "GenerationMode": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.newValue.properties.generationMode",
          "ThresholdFilter": "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter",
          "ThresholdType": "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message.payload.properties.aggDefDetails.properties.aggDefDetails.properties.parameterSets.items.properties.reportFilter.properties.thresholdType"
        },
        "parameter": {
          "ParameterValue": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.newValue.properties.parameterSetValues.items.properties.values.items.properties.value"
        },
        "ObjectInstancePair": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "monitorValue_pub": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message",
      "getValue_request": "$ref:$.channels.getValue_request.messages.getValue_request.message",
      "getValue_response": "$ref:$.channels.getValue_response.messages.getValue_response.message",
      "getValue_error": "$ref:$.channels.getValue_error.messages.getValue_error.message",
      "enableGeneration_request": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message",
      "enableGeneration_response": "$ref:$.channels.enableGeneration_response.messages.enableGeneration_response.message",
      "enableGeneration_error": "$ref:$.channels.enableGeneration_error.messages.enableGeneration_error.message",
      "enableFilter_submit": "$ref:$.channels.enableFilter_submit.messages.enableFilter_submit.message",
      "enableFilter_error": "$ref:$.channels.enableFilter_error.messages.enableFilter_error.message",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message",
      "addAggregation_request": "$ref:$.channels.addAggregation_request.messages.addAggregation_request.message",
      "addAggregation_response": "$ref:$.channels.addAggregation_response.messages.addAggregation_response.message",
      "addAggregation_error": "$ref:$.channels.addAggregation_error.messages.addAggregation_error.message",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message",
      "removeAggregation_submit": "$ref:$.channels.removeAggregation_submit.messages.removeAggregation_submit.message",
      "removeAggregation_error": "$ref:$.channels.removeAggregation_error.messages.removeAggregation_error.message"
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
  