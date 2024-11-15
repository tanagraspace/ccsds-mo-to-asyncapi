
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the Alert Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Alert Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "enableGeneration_request": {
      "address": "enableGeneration_request",
      "messages": {
        "enableGeneration_request.message": {
          "description": "enableGeneration request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains AlertIdentity object instance identifiers.\nThe AlertIdentity objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the AlertIdentity objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all AlertIdentity objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then instances of matching AlertIdentity objects shall be generated, a value of FALSE requests that instances will not be generated.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current generationEnabled field for an alert object i.e. enabling an already enabled alert will not result in an error.\nIf a requested AlertIdentity or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain AlertIdentity objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new AlertDefinition object in the COM archive if the generationEnabled field is changed.\nIf a new AlertDefinition object is created then that new object shall be the current AlertDefinition used for the specific AlertIdentity.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "enableInstances": {
                "properties": {
                  "id": {
                    "description": "The object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "value": {
                    "description": "An associated Boolean value.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
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
      "address": "enableGeneration_response",
      "messages": {
        "enableGeneration_response.message": {
          "description": "enableGeneration response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new AlertDefinition objects.\n",
                "x-parser-schema-id": "<anonymous-schema-7>"
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
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "x-parser-schema-id": "<anonymous-schema-12>"
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
    "listDefinition_request": {
      "address": "listDefinition_request",
      "messages": {
        "listDefinition_request.message": {
          "description": "listDefinition request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "alertNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-16>"
                },
                "description": "The alertNames field shall contain a list of alert names to retrieve the AlertIdentity and AlertDefinition object instance identifiers for.\nThe alertNames field may contain the wildcard value of '*' to return all supported AlertIdentity and AlertDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing AlertIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-15>"
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
      "address": "listDefinition_response",
      "messages": {
        "listDefinition_response.message": {
          "description": "listDefinition response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "alertObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-20>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-18>"
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
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-25>"
                },
                "x-parser-schema-id": "<anonymous-schema-24>"
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
    "addAlert_request": {
      "address": "addAlert_request",
      "messages": {
        "addAlert_request.message": {
          "description": "addAlert request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "alertDefDetails": {
                "properties": {
                  "alertDefDetails": {
                    "properties": {
                      "arguments": {
                        "description": "The list of argument definitions.",
                        "items": {
                          "properties": {
                            "argId": {
                              "description": "Holds the argument definition identifier.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-31>"
                            },
                            "conditionalConversions": {
                              "description": "The conditional conversions to apply to the argument. Only the first TRUE conversion should be applied.",
                              "items": {
                                "properties": {
                                  "condition": {
                                    "properties": {
                                      "operator": {
                                        "description": "The ExpressionOperator enumeration holds a set of possible expression operators.",
                                        "enum": [
                                          "EQUAL",
                                          "DIFFER",
                                          "GREATER",
                                          "GREATER_OR_EQUAL",
                                          "LESS",
                                          "LESS_OR_EQUAL",
                                          "CONTAINS",
                                          "ICONTAINS"
                                        ],
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-35>"
                                      },
                                      "parameterId": {
                                        "properties": {
                                          "domain": {
                                            "description": "The domain of the object instance.",
                                            "items": {
                                              "type": "string",
                                              "x-parser-schema-id": "<anonymous-schema-38>"
                                            },
                                            "type": "array",
                                            "x-parser-schema-id": "<anonymous-schema-37>"
                                          },
                                          "instId": {
                                            "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                                            "format": "int64",
                                            "type": "integer",
                                            "x-parser-schema-id": "<anonymous-schema-39>"
                                          }
                                        },
                                        "type": "object",
                                        "x-parser-schema-id": "<anonymous-schema-36>"
                                      },
                                      "useConverted": {
                                        "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                                        "type": "boolean",
                                        "x-parser-schema-id": "<anonymous-schema-40>"
                                      },
                                      "value": {
                                        "description": "The value to be used in the expression.",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-41>"
                                      }
                                    },
                                    "type": "object",
                                    "x-parser-schema-id": "<anonymous-schema-34>"
                                  },
                                  "conversionId": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId"
                                },
                                "type": "object",
                                "x-parser-schema-id": "<anonymous-schema-33>"
                              },
                              "type": "array",
                              "x-parser-schema-id": "<anonymous-schema-32>"
                            },
                            "convertedType": {
                              "description": "Holds the attribute short form part of the converted type of the argument, e.g., for a MAL::String argument it shall hold 15. Must not be NULL if a conversion condition is supplied.",
                              "format": "int8",
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-42>"
                            },
                            "convertedUnit": {
                              "description": "The converted argument units.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-43>"
                            },
                            "description": {
                              "description": "Optional argument description.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-44>"
                            },
                            "rawType": {
                              "description": "Holds the attribute short form part of the raw type of the argument, e.g., for a MAL::String argument it shall hold 15.",
                              "format": "int8",
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-45>"
                            },
                            "rawUnit": {
                              "description": "The unit for the raw value.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-46>"
                            }
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-30>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-29>"
                      },
                      "description": {
                        "description": "The description of the alert.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-47>"
                      },
                      "generationEnabled": {
                        "description": "Controls whether instances of this alert are to be generated.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-48>"
                      },
                      "severity": {
                        "description": "The severity enumeration holds the possible values for a severity. The numerical value represents the increasing severity, therefore CRITICAL is more severe than ALARM. Normally, for checks, only the Warning and Critical ranges are used: the colour yellow is associated with Warning, and the colour red is associated with Critical.",
                        "enum": [
                          "INFORMATIONAL",
                          "WARNING",
                          "ALARM",
                          "SEVERE",
                          "CRITICAL"
                        ],
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-49>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-28>"
                  },
                  "name": {
                    "description": "Alert name. Must not be empty or wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-50>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "addAlert_request"
          },
          "x-parser-unique-object-id": "addAlert_request.message",
          "x-parser-message-name": "addAlert_request"
        }
      },
      "description": "Send a **addAlert_request** message in this channel to receive a **addAlert_response** message over the **addAlert_response** channel.\n",
      "x-parser-unique-object-id": "addAlert_request"
    },
    "addAlert_response": {
      "address": "addAlert_response",
      "messages": {
        "addAlert_response.message": {
          "description": "addAlert response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-51>"
              },
              "newObjInstIds": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.alertObjInstIds"
            },
            "x-parser-schema-id": "addAlert_response"
          },
          "x-parser-unique-object-id": "addAlert_response.message",
          "x-parser-message-name": "addAlert_response"
        }
      },
      "description": "Use this channel to receive addAlert responses as **addAlert_response** messages.\n",
      "x-parser-unique-object-id": "addAlert_response"
    },
    "addAlert_error": {
      "address": "addAlert_error",
      "messages": {
        "addAlert_error.message": {
          "description": "addAlert error response",
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
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-53>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "DUPLICATE",
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
            "x-parser-schema-id": "addAlert_error"
          },
          "x-parser-unique-object-id": "addAlert_error.message",
          "x-parser-message-name": "addAlert_error"
        }
      },
      "description": "Use this channel to receive addAlert errors as **addAlert_error** messages.\n",
      "x-parser-unique-object-id": "addAlert_error"
    },
    "updateDefinition_request": {
      "address": "updateDefinition_request",
      "messages": {
        "updateDefinition_request.message": {
          "description": "updateDefinition request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-57>"
              },
              "alertObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-59>"
                },
                "description": "The alertObjInstIds field shall contain the object instance identifiers of the AlertIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the alertObjInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-58>"
              },
              "alertDefDetails": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails"
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
      "address": "updateDefinition_response",
      "messages": {
        "updateDefinition_response.message": {
          "description": "updateDefinition response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-60>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-62>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new AlertDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-61>"
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
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-63>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-64>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-65>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-67>"
                },
                "x-parser-schema-id": "<anonymous-schema-66>"
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
    "removeAlert_submit": {
      "address": "removeAlert_submit",
      "messages": {
        "removeAlert_submit.message": {
          "description": "removeAlert request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-68>"
              },
              "alertInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-70>"
                },
                "description": "The alertInstIds field shall hold the object instance identifiers of the AlertIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided AlertIdentity object instance identifier does not include a wildcard and does not match an existing AlertIdentity object then this operation shall fail with an UNKNOWN error.\nMatched AlertIdentity objects shall not be removed from the COM archive only the list of AlertIdentity objects in the provider.\nIf an error is raised then no alerts shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish AlertEvent events for the deleted AlertIdentity objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-69>"
              }
            },
            "x-parser-schema-id": "removeAlert_submit"
          },
          "x-parser-unique-object-id": "removeAlert_submit.message",
          "x-parser-message-name": "removeAlert_submit"
        }
      },
      "description": "Send a **removeAlert_submit** message in this channel.\n",
      "x-parser-unique-object-id": "removeAlert_submit"
    },
    "removeAlert_error": {
      "address": "removeAlert_error",
      "messages": {
        "removeAlert_error.message": {
          "description": "removeAlert error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-71>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-72>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-73>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-75>"
                },
                "x-parser-schema-id": "<anonymous-schema-74>"
              }
            },
            "x-parser-schema-id": "removeAlert_error"
          },
          "x-parser-unique-object-id": "removeAlert_error.message",
          "x-parser-message-name": "removeAlert_error"
        }
      },
      "description": "Use this channel to receive removeAlert errors as **removeAlert_error** messages.\n",
      "x-parser-unique-object-id": "removeAlert_error"
    }
  },
  "operations": {
    "enableGeneration_request": {
      "action": "send",
      "channel": "$ref:$.channels.enableGeneration_request",
      "messages": [
        "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message"
      ],
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
    "listDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.listDefinition_request",
      "messages": [
        "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message"
      ],
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
    "addAlert_request": {
      "action": "send",
      "channel": "$ref:$.channels.addAlert_request",
      "messages": [
        "$ref:$.channels.addAlert_request.messages.addAlert_request.message"
      ],
      "x-parser-unique-object-id": "addAlert_request"
    },
    "addAlert_response": {
      "action": "receive",
      "channel": "$ref:$.channels.addAlert_response",
      "messages": [
        "$ref:$.channels.addAlert_response.messages.addAlert_response.message"
      ],
      "x-parser-unique-object-id": "addAlert_response"
    },
    "addAlert_error": {
      "action": "receive",
      "channel": "$ref:$.channels.addAlert_error",
      "messages": [
        "$ref:$.channels.addAlert_error.messages.addAlert_error.message"
      ],
      "x-parser-unique-object-id": "addAlert_error"
    },
    "updateDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.updateDefinition_request",
      "messages": [
        "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message"
      ],
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
    "removeAlert_submit": {
      "action": "send",
      "channel": "$ref:$.channels.removeAlert_submit",
      "messages": [
        "$ref:$.channels.removeAlert_submit.messages.removeAlert_submit.message"
      ],
      "x-parser-unique-object-id": "removeAlert_submit"
    },
    "removeAlert_error": {
      "action": "receive",
      "channel": "$ref:$.channels.removeAlert_error",
      "messages": [
        "$ref:$.channels.removeAlert_error.messages.removeAlert_error.message"
      ],
      "x-parser-unique-object-id": "removeAlert_error"
    }
  },
  "components": {
    "schemas": {
      "enableGeneration_request": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message.payload",
      "enableGeneration_response": "$ref:$.channels.enableGeneration_response.messages.enableGeneration_response.message.payload",
      "enableGeneration_error": "$ref:$.channels.enableGeneration_error.messages.enableGeneration_error.message.payload",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message.payload",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message.payload",
      "addAlert_request": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload",
      "addAlert_response": "$ref:$.channels.addAlert_response.messages.addAlert_response.message.payload",
      "addAlert_error": "$ref:$.channels.addAlert_error.messages.addAlert_error.message.payload",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message.payload",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message.payload",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message.payload",
      "removeAlert_submit": "$ref:$.channels.removeAlert_submit.messages.removeAlert_submit.message.payload",
      "removeAlert_error": "$ref:$.channels.removeAlert_error.messages.removeAlert_error.message.payload",
      "mc": {
        "ArgumentDefinitionDetails": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items",
        "ConditionalConversion": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items",
        "ObjectInstancePair": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.alertObjInstIds",
        "ParameterExpression": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition",
        "Severity": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.severity",
        "alert": {
          "AlertCreationRequest": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails",
          "AlertDefinitionDetails": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails"
        },
        "x-parser-schema-id": "mc"
      },
      "com": {
        "archive": {
          "ExpressionOperator": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "InstanceBooleanPair": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message.payload.properties.enableInstances",
        "ObjectKey": "$ref:$.channels.addAlert_request.messages.addAlert_request.message.payload.properties.alertDefDetails.properties.alertDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "enableGeneration_request": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message",
      "enableGeneration_response": "$ref:$.channels.enableGeneration_response.messages.enableGeneration_response.message",
      "enableGeneration_error": "$ref:$.channels.enableGeneration_error.messages.enableGeneration_error.message",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message",
      "addAlert_request": "$ref:$.channels.addAlert_request.messages.addAlert_request.message",
      "addAlert_response": "$ref:$.channels.addAlert_response.messages.addAlert_response.message",
      "addAlert_error": "$ref:$.channels.addAlert_error.messages.addAlert_error.message",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message",
      "removeAlert_submit": "$ref:$.channels.removeAlert_submit.messages.removeAlert_submit.message",
      "removeAlert_error": "$ref:$.channels.removeAlert_error.messages.removeAlert_error.message"
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
  