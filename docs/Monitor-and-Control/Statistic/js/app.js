
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "getStatistics_request": {
      "address": "getStatistics_request",
      "messages": {
        "getStatistics_request.message": {
          "description": "getStatistics request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "funcObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The funcObjInstIds field shall include a list of StatisticFunction object instance identifiers to match.\nThe funcObjInstIds field shall support the wildcard value of '0' and will match all functions of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "isGroup": {
                "type": "boolean",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "paramObjInstIds": {
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
              }
            },
            "x-parser-schema-id": "getStatistics_request"
          },
          "x-parser-unique-object-id": "getStatistics_request.message",
          "x-parser-message-name": "getStatistics_request"
        }
      },
      "description": "Send a **getStatistics_request** message in this channel to receive a **getStatistics_response** message over the **getStatistics_response** channel.\n",
      "x-parser-unique-object-id": "getStatistics_request"
    },
    "getStatistics_response": {
      "address": null,
      "messages": {
        "getStatistics_response.message": {
          "description": "getStatistics response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "evaluations": {
                "properties": {
                  "linkId": {
                    "description": "The statistic link object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "value": {
                    "properties": {
                      "endTime": {
                        "description": "Time the statistic calculations ended. This value can be NULL if the time can be derived by other means, e.g., other times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      },
                      "paramDefInstId": {
                        "description": "The object instance identifier of the ParameterDefinition object used for the parameter.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-14>"
                      },
                      "sampleCount": {
                        "description": "Holds the number of samples that contributed to the statistic value. For calculated values such as 'mean average' this holds the number of samples that were used to calculate the value, for non-calculated values such as 'min' then it is the number of samples that were in the set evaluated.",
                        "format": "uint32",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      },
                      "startTime": {
                        "description": "Time the statistic calculations started. This value can be NULL if the start time can be derived by other means, e.g., other start times in a set of StatisticValue structures.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      },
                      "value": {
                        "description": "Value of the statistic.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-17>"
                      },
                      "valueTime": {
                        "description": "Time the statistic value was reached. The time is only applicable for particular statistic values such as min or max. Shall be NULL if not applicable for cases such as 'mean average'.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-18>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "getStatistics_response"
          },
          "x-parser-unique-object-id": "getStatistics_response.message",
          "x-parser-message-name": "getStatistics_response"
        }
      },
      "description": "Use this channel to receive getStatistics responses as **getStatistics_response** messages.\n",
      "x-parser-unique-object-id": "getStatistics_response"
    },
    "getStatistics_error": {
      "address": "getStatistics_error",
      "messages": {
        "getStatistics_error.message": {
          "description": "getStatistics error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-23>"
                },
                "x-parser-schema-id": "<anonymous-schema-22>"
              }
            },
            "x-parser-schema-id": "getStatistics_error"
          },
          "x-parser-unique-object-id": "getStatistics_error.message",
          "x-parser-message-name": "getStatistics_error"
        }
      },
      "description": "Use this channel to receive getStatistics errors as **getStatistics_error** messages.\n",
      "x-parser-unique-object-id": "getStatistics_error"
    },
    "resetEvaluation_request": {
      "address": "resetEvaluation_request",
      "messages": {
        "resetEvaluation_request.message": {
          "description": "resetEvaluation request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "isStatLinkGroup": {
                "type": "boolean",
                "description": "If the isStatLinkGroup field is TRUE then the objInstIds field shall contain GroupIdentity object instance identifiers, otherwise the field shall contain StatisticFunction object instance identifiers.\nIf the isStatLinkGroup field is TRUE, the requested Group, or the Group objects referenced by that Group, must contain StatisticLink objects otherwise an INVALID error shall be returned.\nThe StatisticLink objects referenced, either indirectly via statistic functions or indirectly via groups, by the objInstIds field shall be the StatisticLink objects to match.\n",
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "objInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-27>"
                },
                "description": "The objInstIds field shall support the wildcard value of '0' and matches all StatisticLink objects of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested function or group is unknown then an UNKNOWN error shall be returned.\n",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "returnLatestEval": {
                "type": "boolean",
                "description": "If the returnLatestEval Boolean field is TRUE then the latest evaluation result for each of the matched links shall be returned before resetting, otherwise a NULL is returned.\nIf an error is raised then no resetting of evaluations shall be made as a result of this operation call.\n",
                "x-parser-schema-id": "<anonymous-schema-28>"
              }
            },
            "x-parser-schema-id": "resetEvaluation_request"
          },
          "x-parser-unique-object-id": "resetEvaluation_request.message",
          "x-parser-message-name": "resetEvaluation_request"
        }
      },
      "description": "Send a **resetEvaluation_request** message in this channel to receive a **resetEvaluation_response** message over the **resetEvaluation_response** channel.\n",
      "x-parser-unique-object-id": "resetEvaluation_request"
    },
    "resetEvaluation_response": {
      "address": null,
      "messages": {
        "resetEvaluation_response.message": {
          "description": "resetEvaluation response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "evaluations": "$ref:$.channels.getStatistics_response.messages.getStatistics_response.message.payload.properties.evaluations"
            },
            "x-parser-schema-id": "resetEvaluation_response"
          },
          "x-parser-unique-object-id": "resetEvaluation_response.message",
          "x-parser-message-name": "resetEvaluation_response"
        }
      },
      "description": "Use this channel to receive resetEvaluation responses as **resetEvaluation_response** messages.\n",
      "x-parser-unique-object-id": "resetEvaluation_response"
    },
    "resetEvaluation_error": {
      "address": "resetEvaluation_error",
      "messages": {
        "resetEvaluation_error.message": {
          "description": "resetEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-31>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-32>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-34>"
                },
                "x-parser-schema-id": "<anonymous-schema-33>"
              }
            },
            "x-parser-schema-id": "resetEvaluation_error"
          },
          "x-parser-unique-object-id": "resetEvaluation_error.message",
          "x-parser-message-name": "resetEvaluation_error"
        }
      },
      "description": "Use this channel to receive resetEvaluation errors as **resetEvaluation_error** messages.\n",
      "x-parser-unique-object-id": "resetEvaluation_error"
    },
    "monitorStatistics_publishNotify": {
      "address": null,
      "messages": {
        "monitorStatistics_publishNotify.message": {
          "description": "monitorStatistics response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "relatedId": {
                "type": "integer",
                "format": "int64",
                "description": "The MAL EntityKey.firstSubKey shall contain the statistic function name.\nThe MAL EntityKey.secondSubKey shall contain the StatisticLink object instance identifier.\nThe MAL EntityKey.thirdSubKey shall contain the ParameterIdentity object instance identifier.\nThe MAL EntityKey.fourthSubKey shall contain the new StatisticValueInstance object instance identifier.\nThe timestamp of the StatisticValueInstance report shall be taken from the publish message.\nThe related link of the update shall be held in the relatedId field.\n",
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "sourceId": {
                "properties": {
                  "key": "$ref:$.channels.getStatistics_request.messages.getStatistics_request.message.payload.properties.paramObjInstIds",
                  "type_": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-39>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-40>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-41>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-42>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-38>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-37>"
              },
              "statisticValue": "$ref:$.channels.getStatistics_response.messages.getStatistics_response.message.payload.properties.evaluations.properties.value"
            },
            "x-parser-schema-id": "monitorStatistics_publishNotify"
          },
          "x-parser-unique-object-id": "monitorStatistics_publishNotify.message",
          "x-parser-message-name": "monitorStatistics_publishNotify"
        }
      },
      "description": "Use this channel to receive monitorStatistics responses as **monitorStatistics_publishNotify** messages.\n",
      "x-parser-unique-object-id": "monitorStatistics_publishNotify"
    },
    "enableService_submit": {
      "address": "enableService_submit",
      "messages": {
        "enableService_submit.message": {
          "description": "enableService request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-43>"
              },
              "enableService": {
                "type": "boolean",
                "description": "If enableService is set to TRUE the service shall be enabled and evaluation and reporting of statistics will be reset and commence.\nIf enableService is set to FALSE then all evaluation of statistics shall be suspended and no statistics will be reported.\nIf the enableService value matches the current enabled state of the service then no change shall be made and no error reported. Enabling an already enabled service has no effect.\n",
                "x-parser-schema-id": "<anonymous-schema-44>"
              }
            },
            "x-parser-schema-id": "enableService_submit"
          },
          "x-parser-unique-object-id": "enableService_submit.message",
          "x-parser-message-name": "enableService_submit"
        }
      },
      "description": "Send a **enableService_submit** message in this channel.\n",
      "x-parser-unique-object-id": "enableService_submit"
    },
    "getServiceStatus_request": {
      "address": "getServiceStatus_request",
      "messages": {
        "getServiceStatus_request.message": {
          "description": "getServiceStatus request",
          "payload": {
            "description": "A request message with no payload.",
            "type": "object",
            "additionalProperties": false,
            "x-parser-schema-id": "getServiceStatus_request"
          },
          "x-parser-unique-object-id": "getServiceStatus_request.message",
          "x-parser-message-name": "getServiceStatus_request"
        }
      },
      "description": "Send a **getServiceStatus_request** message in this channel to receive a **getServiceStatus_response** message over the **getServiceStatus_response** channel.\n",
      "x-parser-unique-object-id": "getServiceStatus_request"
    },
    "getServiceStatus_response": {
      "address": null,
      "messages": {
        "getServiceStatus_response.message": {
          "description": "getServiceStatus response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-45>"
              },
              "serviceEnabled": {
                "type": "boolean",
                "description": "The operation shall return TRUE if the service is currently enabled or FALSE if the service is currently disabled.\n",
                "x-parser-schema-id": "<anonymous-schema-46>"
              }
            },
            "x-parser-schema-id": "getServiceStatus_response"
          },
          "x-parser-unique-object-id": "getServiceStatus_response.message",
          "x-parser-message-name": "getServiceStatus_response"
        }
      },
      "description": "Use this channel to receive getServiceStatus responses as **getServiceStatus_response** messages.\n",
      "x-parser-unique-object-id": "getServiceStatus_response"
    },
    "enableReporting_submit": {
      "address": "enableReporting_submit",
      "messages": {
        "enableReporting_submit.message": {
          "description": "enableReporting request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-47>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains StatisticFunction object instance identifiers.\nIf the isGroupIds field is TRUE, the requested Group, or the Group objects referenced by that Group, must contain StatisticLink objects otherwise an INVALID error shall be returned.\nThe StatisticLink objects referenced, either indirectly via StatisticFunction objects or indirectly via groups, by the enableInstances field shall be the StatisticLink objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all StatisticLink objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then reports after the reporting and collection intervals for matching StatisticLink objects shall be generated, a value of FALSE requests that reports will not be generated.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current reportingEnabled field for a StatisticLink object i.e. enabling an already enabled link will not result in an error.\nIf a requested StatisticFunction or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider should create and store a new StatisticLinkDefinition object in the COM archive if the reportingEnabled field is changed.\n",
                "x-parser-schema-id": "<anonymous-schema-48>"
              },
              "enableInstances": {
                "properties": {
                  "id": {
                    "description": "The object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-50>"
                  },
                  "value": {
                    "description": "An associated Boolean value.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-51>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-49>"
              }
            },
            "x-parser-schema-id": "enableReporting_submit"
          },
          "x-parser-unique-object-id": "enableReporting_submit.message",
          "x-parser-message-name": "enableReporting_submit"
        }
      },
      "description": "Send a **enableReporting_submit** message in this channel.\n",
      "x-parser-unique-object-id": "enableReporting_submit"
    },
    "enableReporting_error": {
      "address": "enableReporting_error",
      "messages": {
        "enableReporting_error.message": {
          "description": "enableReporting error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-52>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-53>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-54>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-56>"
                },
                "x-parser-schema-id": "<anonymous-schema-55>"
              }
            },
            "x-parser-schema-id": "enableReporting_error"
          },
          "x-parser-unique-object-id": "enableReporting_error.message",
          "x-parser-message-name": "enableReporting_error"
        }
      },
      "description": "Use this channel to receive enableReporting errors as **enableReporting_error** messages.\n",
      "x-parser-unique-object-id": "enableReporting_error"
    },
    "listParameterEvaluations_request": {
      "address": "listParameterEvaluations_request",
      "messages": {
        "listParameterEvaluations_request.message": {
          "description": "listParameterEvaluations request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-57>"
              },
              "statObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-59>"
                },
                "description": "The statObjInstIds field shall hold a list of StatisticFunction object instance identifiers to retrieve the StatisticLink object instance identifiers for.\nThe request may contain the wildcard value of '0' to return all supported statistic links.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing StatisticFunction object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-58>"
              }
            },
            "x-parser-schema-id": "listParameterEvaluations_request"
          },
          "x-parser-unique-object-id": "listParameterEvaluations_request.message",
          "x-parser-message-name": "listParameterEvaluations_request"
        }
      },
      "description": "Send a **listParameterEvaluations_request** message in this channel to receive a **listParameterEvaluations_response** message over the **listParameterEvaluations_response** channel.\n",
      "x-parser-unique-object-id": "listParameterEvaluations_request"
    },
    "listParameterEvaluations_response": {
      "address": null,
      "messages": {
        "listParameterEvaluations_response.message": {
          "description": "listParameterEvaluations response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-60>"
              },
              "statLinkObjInstIds": {
                "properties": {
                  "funcId": {
                    "description": "The object instance identifier of the StatisticFunction object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-62>"
                  },
                  "linkDefId": {
                    "description": "The object instance identifier of the StatisticLinkDefinition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-63>"
                  },
                  "linkId": {
                    "description": "The object instance identifier of the StatisticLink object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-64>"
                  },
                  "parameterId": "$ref:$.channels.getStatistics_request.messages.getStatistics_request.message.payload.properties.paramObjInstIds",
                  "reportingEnabled": {
                    "description": "TRUE if reporting of the evaluation instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-65>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-61>"
              }
            },
            "x-parser-schema-id": "listParameterEvaluations_response"
          },
          "x-parser-unique-object-id": "listParameterEvaluations_response.message",
          "x-parser-message-name": "listParameterEvaluations_response"
        }
      },
      "description": "Use this channel to receive listParameterEvaluations responses as **listParameterEvaluations_response** messages.\n",
      "x-parser-unique-object-id": "listParameterEvaluations_response"
    },
    "listParameterEvaluations_error": {
      "address": "listParameterEvaluations_error",
      "messages": {
        "listParameterEvaluations_error.message": {
          "description": "listParameterEvaluations error response",
          "payload": {
            "type": "object",
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
            "x-parser-schema-id": "listParameterEvaluations_error"
          },
          "x-parser-unique-object-id": "listParameterEvaluations_error.message",
          "x-parser-message-name": "listParameterEvaluations_error"
        }
      },
      "description": "Use this channel to receive listParameterEvaluations errors as **listParameterEvaluations_error** messages.\n",
      "x-parser-unique-object-id": "listParameterEvaluations_error"
    },
    "addParameterEvaluation_request": {
      "address": "addParameterEvaluation_request",
      "messages": {
        "addParameterEvaluation_request.message": {
          "description": "addParameterEvaluation request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-71>"
              },
              "newDetails": {
                "properties": {
                  "linkDetails": {
                    "properties": {
                      "collectionInterval": {
                        "description": "The collection and reset interval of the statistical evaluation for the linked parameter. If set to '0', then no periodic reset of the evaluation shall be performed.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-74>"
                      },
                      "reportingEnabled": {
                        "description": "TRUE if reporting of the evaluation instance is enabled.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-75>"
                      },
                      "reportingInterval": {
                        "description": "The interval between periodic reports being generated. If set to '0', then no periodic reports shall be sent.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-76>"
                      },
                      "resetEveryCollection": {
                        "description": "If TRUE the evaluation will reset its value every collection interval. If FALSE it will maintain a moving evaluation of the function for the collection interval.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-77>"
                      },
                      "samplingInterval": {
                        "description": "The interval between samples of the parameter.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-78>"
                      },
                      "useConverted": {
                        "description": "If TRUE then use the converted value of the Parameter, else use the raw value",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-79>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-73>"
                  },
                  "parameterId": "$ref:$.channels.getStatistics_request.messages.getStatistics_request.message.payload.properties.paramObjInstIds",
                  "statFuncInstId": {
                    "description": "The object instance identifier of the statistical function to be used.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-80>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-72>"
              }
            },
            "x-parser-schema-id": "addParameterEvaluation_request"
          },
          "x-parser-unique-object-id": "addParameterEvaluation_request.message",
          "x-parser-message-name": "addParameterEvaluation_request"
        }
      },
      "description": "Send a **addParameterEvaluation_request** message in this channel to receive a **addParameterEvaluation_response** message over the **addParameterEvaluation_response** channel.\n",
      "x-parser-unique-object-id": "addParameterEvaluation_request"
    },
    "addParameterEvaluation_response": {
      "address": null,
      "messages": {
        "addParameterEvaluation_response.message": {
          "description": "addParameterEvaluation response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-81>"
              },
              "newObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-83>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-84>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-82>"
              }
            },
            "x-parser-schema-id": "addParameterEvaluation_response"
          },
          "x-parser-unique-object-id": "addParameterEvaluation_response.message",
          "x-parser-message-name": "addParameterEvaluation_response"
        }
      },
      "description": "Use this channel to receive addParameterEvaluation responses as **addParameterEvaluation_response** messages.\n",
      "x-parser-unique-object-id": "addParameterEvaluation_response"
    },
    "addParameterEvaluation_error": {
      "address": "addParameterEvaluation_error",
      "messages": {
        "addParameterEvaluation_error.message": {
          "description": "addParameterEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-85>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-86>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-87>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-89>"
                },
                "x-parser-schema-id": "<anonymous-schema-88>"
              }
            },
            "x-parser-schema-id": "addParameterEvaluation_error"
          },
          "x-parser-unique-object-id": "addParameterEvaluation_error.message",
          "x-parser-message-name": "addParameterEvaluation_error"
        }
      },
      "description": "Use this channel to receive addParameterEvaluation errors as **addParameterEvaluation_error** messages.\n",
      "x-parser-unique-object-id": "addParameterEvaluation_error"
    },
    "updateParameterEvaluation_request": {
      "address": "updateParameterEvaluation_request",
      "messages": {
        "updateParameterEvaluation_request.message": {
          "description": "updateParameterEvaluation request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-90>"
              },
              "linkIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-92>"
                },
                "description": "The linkIds field shall contain the object instance identifiers of the StatisticLink objects to be updated.\nIf the linkIds list contains either NULL or '0' an INVALID error shall be raised.\nThe supplied object instance identifiers shall match existing link objects, an UNKNOWN error shall be raised if this is not the case.\nIf the supplied samplingInterval is not supported for the requested parameter then an INVALID error shall be returned.\n",
                "x-parser-schema-id": "<anonymous-schema-91>"
              },
              "newDetails": "$ref:$.channels.addParameterEvaluation_request.messages.addParameterEvaluation_request.message.payload.properties.newDetails.properties.linkDetails"
            },
            "x-parser-schema-id": "updateParameterEvaluation_request"
          },
          "x-parser-unique-object-id": "updateParameterEvaluation_request.message",
          "x-parser-message-name": "updateParameterEvaluation_request"
        }
      },
      "description": "Send a **updateParameterEvaluation_request** message in this channel to receive a **updateParameterEvaluation_response** message over the **updateParameterEvaluation_response** channel.\n",
      "x-parser-unique-object-id": "updateParameterEvaluation_request"
    },
    "updateParameterEvaluation_response": {
      "address": null,
      "messages": {
        "updateParameterEvaluation_response.message": {
          "description": "updateParameterEvaluation response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-93>"
              },
              "newLinkDefIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-95>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new StatisticLinkDefinition objects.\nThe returned list shall maintain the same order as the submitted links.\n",
                "x-parser-schema-id": "<anonymous-schema-94>"
              }
            },
            "x-parser-schema-id": "updateParameterEvaluation_response"
          },
          "x-parser-unique-object-id": "updateParameterEvaluation_response.message",
          "x-parser-message-name": "updateParameterEvaluation_response"
        }
      },
      "description": "Use this channel to receive updateParameterEvaluation responses as **updateParameterEvaluation_response** messages.\n",
      "x-parser-unique-object-id": "updateParameterEvaluation_response"
    },
    "updateParameterEvaluation_error": {
      "address": "updateParameterEvaluation_error",
      "messages": {
        "updateParameterEvaluation_error.message": {
          "description": "updateParameterEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-96>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-97>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-98>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-100>"
                },
                "x-parser-schema-id": "<anonymous-schema-99>"
              }
            },
            "x-parser-schema-id": "updateParameterEvaluation_error"
          },
          "x-parser-unique-object-id": "updateParameterEvaluation_error.message",
          "x-parser-message-name": "updateParameterEvaluation_error"
        }
      },
      "description": "Use this channel to receive updateParameterEvaluation errors as **updateParameterEvaluation_error** messages.\n",
      "x-parser-unique-object-id": "updateParameterEvaluation_error"
    },
    "removeParameterEvaluation_submit": {
      "address": "removeParameterEvaluation_submit",
      "messages": {
        "removeParameterEvaluation_submit.message": {
          "description": "removeParameterEvaluation request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-101>"
              },
              "objInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-103>"
                },
                "description": "The objInstIds field holds the object instance identifiers of the StatisticLink objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided StatisticLink object instance identifier does not include a wildcard and does not match an existing StatisticLink object then this operation shall fail with an UNKNOWN error.\nMatched StatisticLink objects shall not be removed from the COM archive only the list of evaluated StatisticLink objects in the provider.\nIf an error is raised then no StatisticLink objects shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not evaluate those parameter/function definition combinations for the deleted StatisticLink objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-102>"
              }
            },
            "x-parser-schema-id": "removeParameterEvaluation_submit"
          },
          "x-parser-unique-object-id": "removeParameterEvaluation_submit.message",
          "x-parser-message-name": "removeParameterEvaluation_submit"
        }
      },
      "description": "Send a **removeParameterEvaluation_submit** message in this channel.\n",
      "x-parser-unique-object-id": "removeParameterEvaluation_submit"
    },
    "removeParameterEvaluation_error": {
      "address": "removeParameterEvaluation_error",
      "messages": {
        "removeParameterEvaluation_error.message": {
          "description": "removeParameterEvaluation error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-104>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-105>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-106>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-108>"
                },
                "x-parser-schema-id": "<anonymous-schema-107>"
              }
            },
            "x-parser-schema-id": "removeParameterEvaluation_error"
          },
          "x-parser-unique-object-id": "removeParameterEvaluation_error.message",
          "x-parser-message-name": "removeParameterEvaluation_error"
        }
      },
      "description": "Use this channel to receive removeParameterEvaluation errors as **removeParameterEvaluation_error** messages.\n",
      "x-parser-unique-object-id": "removeParameterEvaluation_error"
    }
  },
  "operations": {
    "getStatistics_request": {
      "action": "send",
      "channel": "$ref:$.channels.getStatistics_request",
      "messages": [
        "$ref:$.channels.getStatistics_request.messages.getStatistics_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getStatistics_response"
      },
      "x-parser-unique-object-id": "getStatistics_request"
    },
    "getStatistics_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getStatistics_response",
      "messages": [
        "$ref:$.channels.getStatistics_response.messages.getStatistics_response.message"
      ],
      "x-parser-unique-object-id": "getStatistics_response"
    },
    "getStatistics_error": {
      "action": "receive",
      "channel": "$ref:$.channels.getStatistics_error",
      "messages": [
        "$ref:$.channels.getStatistics_error.messages.getStatistics_error.message"
      ],
      "x-parser-unique-object-id": "getStatistics_error"
    },
    "resetEvaluation_request": {
      "action": "send",
      "channel": "$ref:$.channels.resetEvaluation_request",
      "messages": [
        "$ref:$.channels.resetEvaluation_request.messages.resetEvaluation_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.resetEvaluation_response"
      },
      "x-parser-unique-object-id": "resetEvaluation_request"
    },
    "resetEvaluation_response": {
      "action": "receive",
      "channel": "$ref:$.channels.resetEvaluation_response",
      "messages": [
        "$ref:$.channels.resetEvaluation_response.messages.resetEvaluation_response.message"
      ],
      "x-parser-unique-object-id": "resetEvaluation_response"
    },
    "resetEvaluation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.resetEvaluation_error",
      "messages": [
        "$ref:$.channels.resetEvaluation_error.messages.resetEvaluation_error.message"
      ],
      "x-parser-unique-object-id": "resetEvaluation_error"
    },
    "monitorStatistics_publishNotify": {
      "action": "receive",
      "channel": "$ref:$.channels.monitorStatistics_publishNotify",
      "messages": [
        "$ref:$.channels.monitorStatistics_publishNotify.messages.monitorStatistics_publishNotify.message"
      ],
      "x-parser-unique-object-id": "monitorStatistics_publishNotify"
    },
    "enableService_submit": {
      "action": "send",
      "channel": "$ref:$.channels.enableService_submit",
      "messages": [
        "$ref:$.channels.enableService_submit.messages.enableService_submit.message"
      ],
      "x-parser-unique-object-id": "enableService_submit"
    },
    "getServiceStatus_request": {
      "action": "send",
      "channel": "$ref:$.channels.getServiceStatus_request",
      "messages": [
        "$ref:$.channels.getServiceStatus_request.messages.getServiceStatus_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getServiceStatus_response"
      },
      "x-parser-unique-object-id": "getServiceStatus_request"
    },
    "getServiceStatus_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getServiceStatus_response",
      "messages": [
        "$ref:$.channels.getServiceStatus_response.messages.getServiceStatus_response.message"
      ],
      "x-parser-unique-object-id": "getServiceStatus_response"
    },
    "enableReporting_submit": {
      "action": "send",
      "channel": "$ref:$.channels.enableReporting_submit",
      "messages": [
        "$ref:$.channels.enableReporting_submit.messages.enableReporting_submit.message"
      ],
      "x-parser-unique-object-id": "enableReporting_submit"
    },
    "enableReporting_error": {
      "action": "receive",
      "channel": "$ref:$.channels.enableReporting_error",
      "messages": [
        "$ref:$.channels.enableReporting_error.messages.enableReporting_error.message"
      ],
      "x-parser-unique-object-id": "enableReporting_error"
    },
    "listParameterEvaluations_request": {
      "action": "send",
      "channel": "$ref:$.channels.listParameterEvaluations_request",
      "messages": [
        "$ref:$.channels.listParameterEvaluations_request.messages.listParameterEvaluations_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.listParameterEvaluations_response"
      },
      "x-parser-unique-object-id": "listParameterEvaluations_request"
    },
    "listParameterEvaluations_response": {
      "action": "receive",
      "channel": "$ref:$.channels.listParameterEvaluations_response",
      "messages": [
        "$ref:$.channels.listParameterEvaluations_response.messages.listParameterEvaluations_response.message"
      ],
      "x-parser-unique-object-id": "listParameterEvaluations_response"
    },
    "listParameterEvaluations_error": {
      "action": "receive",
      "channel": "$ref:$.channels.listParameterEvaluations_error",
      "messages": [
        "$ref:$.channels.listParameterEvaluations_error.messages.listParameterEvaluations_error.message"
      ],
      "x-parser-unique-object-id": "listParameterEvaluations_error"
    },
    "addParameterEvaluation_request": {
      "action": "send",
      "channel": "$ref:$.channels.addParameterEvaluation_request",
      "messages": [
        "$ref:$.channels.addParameterEvaluation_request.messages.addParameterEvaluation_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.addParameterEvaluation_response"
      },
      "x-parser-unique-object-id": "addParameterEvaluation_request"
    },
    "addParameterEvaluation_response": {
      "action": "receive",
      "channel": "$ref:$.channels.addParameterEvaluation_response",
      "messages": [
        "$ref:$.channels.addParameterEvaluation_response.messages.addParameterEvaluation_response.message"
      ],
      "x-parser-unique-object-id": "addParameterEvaluation_response"
    },
    "addParameterEvaluation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.addParameterEvaluation_error",
      "messages": [
        "$ref:$.channels.addParameterEvaluation_error.messages.addParameterEvaluation_error.message"
      ],
      "x-parser-unique-object-id": "addParameterEvaluation_error"
    },
    "updateParameterEvaluation_request": {
      "action": "send",
      "channel": "$ref:$.channels.updateParameterEvaluation_request",
      "messages": [
        "$ref:$.channels.updateParameterEvaluation_request.messages.updateParameterEvaluation_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.updateParameterEvaluation_response"
      },
      "x-parser-unique-object-id": "updateParameterEvaluation_request"
    },
    "updateParameterEvaluation_response": {
      "action": "receive",
      "channel": "$ref:$.channels.updateParameterEvaluation_response",
      "messages": [
        "$ref:$.channels.updateParameterEvaluation_response.messages.updateParameterEvaluation_response.message"
      ],
      "x-parser-unique-object-id": "updateParameterEvaluation_response"
    },
    "updateParameterEvaluation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.updateParameterEvaluation_error",
      "messages": [
        "$ref:$.channels.updateParameterEvaluation_error.messages.updateParameterEvaluation_error.message"
      ],
      "x-parser-unique-object-id": "updateParameterEvaluation_error"
    },
    "removeParameterEvaluation_submit": {
      "action": "send",
      "channel": "$ref:$.channels.removeParameterEvaluation_submit",
      "messages": [
        "$ref:$.channels.removeParameterEvaluation_submit.messages.removeParameterEvaluation_submit.message"
      ],
      "x-parser-unique-object-id": "removeParameterEvaluation_submit"
    },
    "removeParameterEvaluation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.removeParameterEvaluation_error",
      "messages": [
        "$ref:$.channels.removeParameterEvaluation_error.messages.removeParameterEvaluation_error.message"
      ],
      "x-parser-unique-object-id": "removeParameterEvaluation_error"
    }
  },
  "components": {
    "schemas": {
      "getStatistics_request": "$ref:$.channels.getStatistics_request.messages.getStatistics_request.message.payload",
      "getStatistics_response": "$ref:$.channels.getStatistics_response.messages.getStatistics_response.message.payload",
      "getStatistics_error": "$ref:$.channels.getStatistics_error.messages.getStatistics_error.message.payload",
      "resetEvaluation_request": "$ref:$.channels.resetEvaluation_request.messages.resetEvaluation_request.message.payload",
      "resetEvaluation_response": "$ref:$.channels.resetEvaluation_response.messages.resetEvaluation_response.message.payload",
      "resetEvaluation_error": "$ref:$.channels.resetEvaluation_error.messages.resetEvaluation_error.message.payload",
      "monitorStatistics_subscriptionKeys": {
        "description": "A request message with no payload.",
        "type": "object",
        "additionalProperties": false,
        "x-parser-schema-id": "monitorStatistics_subscriptionKeys"
      },
      "monitorStatistics_publishNotify": "$ref:$.channels.monitorStatistics_publishNotify.messages.monitorStatistics_publishNotify.message.payload",
      "enableService_submit": "$ref:$.channels.enableService_submit.messages.enableService_submit.message.payload",
      "getServiceStatus_request": "$ref:$.channels.getServiceStatus_request.messages.getServiceStatus_request.message.payload",
      "getServiceStatus_response": "$ref:$.channels.getServiceStatus_response.messages.getServiceStatus_response.message.payload",
      "enableReporting_submit": "$ref:$.channels.enableReporting_submit.messages.enableReporting_submit.message.payload",
      "enableReporting_error": "$ref:$.channels.enableReporting_error.messages.enableReporting_error.message.payload",
      "listParameterEvaluations_request": "$ref:$.channels.listParameterEvaluations_request.messages.listParameterEvaluations_request.message.payload",
      "listParameterEvaluations_response": "$ref:$.channels.listParameterEvaluations_response.messages.listParameterEvaluations_response.message.payload",
      "listParameterEvaluations_error": "$ref:$.channels.listParameterEvaluations_error.messages.listParameterEvaluations_error.message.payload",
      "addParameterEvaluation_request": "$ref:$.channels.addParameterEvaluation_request.messages.addParameterEvaluation_request.message.payload",
      "addParameterEvaluation_response": "$ref:$.channels.addParameterEvaluation_response.messages.addParameterEvaluation_response.message.payload",
      "addParameterEvaluation_error": "$ref:$.channels.addParameterEvaluation_error.messages.addParameterEvaluation_error.message.payload",
      "updateParameterEvaluation_request": "$ref:$.channels.updateParameterEvaluation_request.messages.updateParameterEvaluation_request.message.payload",
      "updateParameterEvaluation_response": "$ref:$.channels.updateParameterEvaluation_response.messages.updateParameterEvaluation_response.message.payload",
      "updateParameterEvaluation_error": "$ref:$.channels.updateParameterEvaluation_error.messages.updateParameterEvaluation_error.message.payload",
      "removeParameterEvaluation_submit": "$ref:$.channels.removeParameterEvaluation_submit.messages.removeParameterEvaluation_submit.message.payload",
      "removeParameterEvaluation_error": "$ref:$.channels.removeParameterEvaluation_error.messages.removeParameterEvaluation_error.message.payload",
      "mc": {
        "statistic": {
          "StatisticCreationRequest": "$ref:$.channels.addParameterEvaluation_request.messages.addParameterEvaluation_request.message.payload.properties.newDetails",
          "StatisticEvaluationReport": "$ref:$.channels.getStatistics_response.messages.getStatistics_response.message.payload.properties.evaluations",
          "StatisticLinkDetails": "$ref:$.channels.addParameterEvaluation_request.messages.addParameterEvaluation_request.message.payload.properties.newDetails.properties.linkDetails",
          "StatisticLinkSummary": "$ref:$.channels.listParameterEvaluations_response.messages.listParameterEvaluations_response.message.payload.properties.statLinkObjInstIds",
          "StatisticValue": "$ref:$.channels.getStatistics_response.messages.getStatistics_response.message.payload.properties.evaluations.properties.value"
        },
        "ObjectInstancePair": "$ref:$.channels.addParameterEvaluation_response.messages.addParameterEvaluation_response.message.payload.properties.newObjInstIds",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.enableReporting_submit.messages.enableReporting_submit.message.payload.properties.enableInstances",
        "ObjectId": "$ref:$.channels.monitorStatistics_publishNotify.messages.monitorStatistics_publishNotify.message.payload.properties.sourceId",
        "ObjectKey": "$ref:$.channels.getStatistics_request.messages.getStatistics_request.message.payload.properties.paramObjInstIds",
        "ObjectType": "$ref:$.channels.monitorStatistics_publishNotify.messages.monitorStatistics_publishNotify.message.payload.properties.sourceId.properties.type_",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "getStatistics_request": "$ref:$.channels.getStatistics_request.messages.getStatistics_request.message",
      "getStatistics_response": "$ref:$.channels.getStatistics_response.messages.getStatistics_response.message",
      "getStatistics_error": "$ref:$.channels.getStatistics_error.messages.getStatistics_error.message",
      "resetEvaluation_request": "$ref:$.channels.resetEvaluation_request.messages.resetEvaluation_request.message",
      "resetEvaluation_response": "$ref:$.channels.resetEvaluation_response.messages.resetEvaluation_response.message",
      "resetEvaluation_error": "$ref:$.channels.resetEvaluation_error.messages.resetEvaluation_error.message",
      "monitorStatistics_publishNotify": "$ref:$.channels.monitorStatistics_publishNotify.messages.monitorStatistics_publishNotify.message",
      "enableService_submit": "$ref:$.channels.enableService_submit.messages.enableService_submit.message",
      "getServiceStatus_request": "$ref:$.channels.getServiceStatus_request.messages.getServiceStatus_request.message",
      "getServiceStatus_response": "$ref:$.channels.getServiceStatus_response.messages.getServiceStatus_response.message",
      "enableReporting_submit": "$ref:$.channels.enableReporting_submit.messages.enableReporting_submit.message",
      "enableReporting_error": "$ref:$.channels.enableReporting_error.messages.enableReporting_error.message",
      "listParameterEvaluations_request": "$ref:$.channels.listParameterEvaluations_request.messages.listParameterEvaluations_request.message",
      "listParameterEvaluations_response": "$ref:$.channels.listParameterEvaluations_response.messages.listParameterEvaluations_response.message",
      "listParameterEvaluations_error": "$ref:$.channels.listParameterEvaluations_error.messages.listParameterEvaluations_error.message",
      "addParameterEvaluation_request": "$ref:$.channels.addParameterEvaluation_request.messages.addParameterEvaluation_request.message",
      "addParameterEvaluation_response": "$ref:$.channels.addParameterEvaluation_response.messages.addParameterEvaluation_response.message",
      "addParameterEvaluation_error": "$ref:$.channels.addParameterEvaluation_error.messages.addParameterEvaluation_error.message",
      "updateParameterEvaluation_request": "$ref:$.channels.updateParameterEvaluation_request.messages.updateParameterEvaluation_request.message",
      "updateParameterEvaluation_response": "$ref:$.channels.updateParameterEvaluation_response.messages.updateParameterEvaluation_response.message",
      "updateParameterEvaluation_error": "$ref:$.channels.updateParameterEvaluation_error.messages.updateParameterEvaluation_error.message",
      "removeParameterEvaluation_submit": "$ref:$.channels.removeParameterEvaluation_submit.messages.removeParameterEvaluation_submit.message",
      "removeParameterEvaluation_error": "$ref:$.channels.removeParameterEvaluation_error.messages.removeParameterEvaluation_error.message"
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
  