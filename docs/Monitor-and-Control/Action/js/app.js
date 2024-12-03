
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Action Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submitAction_submit": {
      "address": "submitAction_submit",
      "messages": {
        "submitAction_submit.message": {
          "description": "submitAction request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionInstId": {
                "type": "integer",
                "format": "int64",
                "description": "The actionInstId field of the submission shall contain the object instance identifier of the ActionInstance to be used for activity tracking events.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "actionDetails": {
                "properties": {
                  "argumentIds": {
                    "description": "Optional list of argument definition identifiers. Allows the provider to verify that the correct arguments are being supplied. The ordering of the list matches that of the argument list of the action definition.",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-5>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "argumentValues": {
                    "description": "List containing the values of the arguments. The ordering of the list matches that of the definition. If a value for a particular entry is not being supplied, then its position is filled with a NULL value. If no arguments are defined, then the complete list is replaced with a NULL.",
                    "items": {
                      "properties": {
                        "value": {
                          "description": "The argument value. Must not be NULL. NULL may be represented by having a NULL in place of the complete AttributeValue composite.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-8>"
                        }
                      },
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "defInstId": {
                    "description": "The object instance identifier of the ActionDefinition to be used.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "isRawValue": {
                    "description": "Optional list of Booleans that determine whether the supplied argument values are raw or converted. If the Boolean for a particular value is TRUE or NULL then that value is assumed to be raw. If the complete isRawValue list is NULL then all arguments are assumed to be raw values. The ordering of the list matches that of the argument list of the action definition.",
                    "items": {
                      "type": "boolean",
                      "x-parser-schema-id": "<anonymous-schema-11>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "stageCompletedRequired": {
                    "description": "If TRUE, then an activity event of type Execution is required for the COMPLETION stage.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "stageProgressRequired": {
                    "description": "If TRUE, then activity events of type Execution are required for the PROGRESS stages.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "stageStartedRequired": {
                    "description": "If TRUE, then an activity event of type Execution is required for the STARTED stage.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "submitAction_submit"
          },
          "x-parser-unique-object-id": "submitAction_submit.message",
          "x-parser-message-name": "submitAction_submit"
        }
      },
      "description": "Send a **submitAction_submit** message in this channel.\n",
      "x-parser-unique-object-id": "submitAction_submit"
    },
    "submitAction_error": {
      "address": "submitAction_error",
      "messages": {
        "submitAction_error.message": {
          "description": "submitAction error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-19>"
                },
                "x-parser-schema-id": "<anonymous-schema-18>"
              }
            },
            "x-parser-schema-id": "submitAction_error"
          },
          "x-parser-unique-object-id": "submitAction_error.message",
          "x-parser-message-name": "submitAction_error"
        }
      },
      "description": "Use this channel to receive submitAction errors as **submitAction_error** messages.\n",
      "x-parser-unique-object-id": "submitAction_error"
    },
    "preCheckAction_request": {
      "address": "preCheckAction_request",
      "messages": {
        "preCheckAction_request.message": {
          "description": "preCheckAction request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "actionDetails": "$ref:$.channels.submitAction_submit.messages.submitAction_submit.message.payload.properties.actionDetails"
            },
            "x-parser-schema-id": "preCheckAction_request"
          },
          "x-parser-unique-object-id": "preCheckAction_request.message",
          "x-parser-message-name": "preCheckAction_request"
        }
      },
      "description": "Send a **preCheckAction_request** message in this channel to receive a **preCheckAction_response** message over the **preCheckAction_response** channel.\n",
      "x-parser-unique-object-id": "preCheckAction_request"
    },
    "preCheckAction_response": {
      "address": null,
      "messages": {
        "preCheckAction_response.message": {
          "description": "preCheckAction response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "accepted": {
                "type": "boolean",
                "description": "The returned Boolean shall be set to TRUE if the action would be accepted successfully; otherwise the operation shall return FALSE.\n",
                "x-parser-schema-id": "<anonymous-schema-22>"
              }
            },
            "x-parser-schema-id": "preCheckAction_response"
          },
          "x-parser-unique-object-id": "preCheckAction_response.message",
          "x-parser-message-name": "preCheckAction_response"
        }
      },
      "description": "Use this channel to receive preCheckAction responses as **preCheckAction_response** messages.\n",
      "x-parser-unique-object-id": "preCheckAction_response"
    },
    "preCheckAction_error": {
      "address": "preCheckAction_error",
      "messages": {
        "preCheckAction_error.message": {
          "description": "preCheckAction error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
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
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
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
            "x-parser-schema-id": "preCheckAction_error"
          },
          "x-parser-unique-object-id": "preCheckAction_error.message",
          "x-parser-message-name": "preCheckAction_error"
        }
      },
      "description": "Use this channel to receive preCheckAction errors as **preCheckAction_error** messages.\n",
      "x-parser-unique-object-id": "preCheckAction_error"
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
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "actionNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-30>"
                },
                "description": "The actionNames field shall contain a list of action names to retrieve the ActionIdentity and ActionDefinition object instance identifiers for.\nThe request may contain the wildcard value of '*' to return all supported ActionIdentity and ActionDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing ActionIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-29>"
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
                "x-parser-schema-id": "<anonymous-schema-31>"
              },
              "actionInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-33>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-34>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-32>"
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
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-37>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-39>"
                },
                "x-parser-schema-id": "<anonymous-schema-38>"
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
    "addAction_request": {
      "address": "addAction_request",
      "messages": {
        "addAction_request.message": {
          "description": "addAction request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-40>"
              },
              "actionDefDetails": {
                "properties": {
                  "actionDefDetails": {
                    "properties": {
                      "arguments": {
                        "description": "The list of argument definitions. If no arguments are defined, then the complete list is replaced with a NULL.",
                        "items": {
                          "properties": {
                            "argId": {
                              "description": "Holds the argument definition identifier.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-45>"
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
                                        "x-parser-schema-id": "<anonymous-schema-49>"
                                      },
                                      "parameterId": {
                                        "properties": {
                                          "domain": {
                                            "description": "The domain of the object instance.",
                                            "items": {
                                              "type": "string",
                                              "x-parser-schema-id": "<anonymous-schema-52>"
                                            },
                                            "type": "array",
                                            "x-parser-schema-id": "<anonymous-schema-51>"
                                          },
                                          "instId": {
                                            "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                                            "format": "int64",
                                            "type": "integer",
                                            "x-parser-schema-id": "<anonymous-schema-53>"
                                          }
                                        },
                                        "type": "object",
                                        "x-parser-schema-id": "<anonymous-schema-50>"
                                      },
                                      "useConverted": {
                                        "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                                        "type": "boolean",
                                        "x-parser-schema-id": "<anonymous-schema-54>"
                                      },
                                      "value": {
                                        "description": "The value to be used in the expression.",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-55>"
                                      }
                                    },
                                    "type": "object",
                                    "x-parser-schema-id": "<anonymous-schema-48>"
                                  },
                                  "conversionId": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId"
                                },
                                "type": "object",
                                "x-parser-schema-id": "<anonymous-schema-47>"
                              },
                              "type": "array",
                              "x-parser-schema-id": "<anonymous-schema-46>"
                            },
                            "convertedType": {
                              "description": "Holds the attribute short form part of the converted type of the argument, e.g., for a MAL::String argument it shall hold 15. Must not be NULL if a conversion condition is supplied.",
                              "format": "int8",
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-56>"
                            },
                            "convertedUnit": {
                              "description": "The converted argument units.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-57>"
                            },
                            "description": {
                              "description": "Optional argument description.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-58>"
                            },
                            "rawType": {
                              "description": "Holds the attribute short form part of the raw type of the argument, e.g., for a MAL::String argument it shall hold 15.",
                              "format": "int8",
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-59>"
                            },
                            "rawUnit": {
                              "description": "The unit for the raw value.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-60>"
                            }
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-44>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-43>"
                      },
                      "category": {
                        "description": "Category of the action. Value taken from ActionCategory enumeration, although the use of a UOctet allows deployment specific extension. Extensions must use values greater than 127.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-61>"
                      },
                      "description": {
                        "description": "The description of the action.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-62>"
                      },
                      "progressStepCount": {
                        "description": "Total number of steps that will be reported if PROGRESS reporting is selected in the sent Action. 0 if PROGRESS reporting is not used.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-63>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-42>"
                  },
                  "name": {
                    "description": "The name of the action. Must not be empty or the wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-64>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-41>"
              }
            },
            "x-parser-schema-id": "addAction_request"
          },
          "x-parser-unique-object-id": "addAction_request.message",
          "x-parser-message-name": "addAction_request"
        }
      },
      "description": "Send a **addAction_request** message in this channel to receive a **addAction_response** message over the **addAction_response** channel.\n",
      "x-parser-unique-object-id": "addAction_request"
    },
    "addAction_response": {
      "address": null,
      "messages": {
        "addAction_response.message": {
          "description": "addAction response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-65>"
              },
              "newObjInstIds": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.actionInstIds"
            },
            "x-parser-schema-id": "addAction_response"
          },
          "x-parser-unique-object-id": "addAction_response.message",
          "x-parser-message-name": "addAction_response"
        }
      },
      "description": "Use this channel to receive addAction responses as **addAction_response** messages.\n",
      "x-parser-unique-object-id": "addAction_response"
    },
    "addAction_error": {
      "address": "addAction_error",
      "messages": {
        "addAction_error.message": {
          "description": "addAction error response",
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
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-67>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
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
            "x-parser-schema-id": "addAction_error"
          },
          "x-parser-unique-object-id": "addAction_error.message",
          "x-parser-message-name": "addAction_error"
        }
      },
      "description": "Use this channel to receive addAction errors as **addAction_error** messages.\n",
      "x-parser-unique-object-id": "addAction_error"
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
                "x-parser-schema-id": "<anonymous-schema-71>"
              },
              "actionObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-73>"
                },
                "description": "The actionObjInstIds field shall contain the list of object instance identifiers of the ActionIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the actionObjInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-72>"
              },
              "actionDefDetails": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails"
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
                "x-parser-schema-id": "<anonymous-schema-74>"
              },
              "newDefInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-76>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new ActionDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-75>"
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
                "x-parser-schema-id": "<anonymous-schema-77>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-78>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-79>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-81>"
                },
                "x-parser-schema-id": "<anonymous-schema-80>"
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
    "removeAction_submit": {
      "address": "removeAction_submit",
      "messages": {
        "removeAction_submit.message": {
          "description": "removeAction request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-82>"
              },
              "actionInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-84>"
                },
                "description": "The actionInstIds field shall hold the object instance identifiers of the ActionIdentity objects to be removed from the provider.\nThe wildcard value of '0' in the list of object instance identifiers shall be supported and matches all actions of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided ActionIdentity object instance identifier does not include a wildcard and does not match an existing ActionIdentity object then this operation shall fail with an UNKNOWN error.\nIf a matched definition is still being used by an executing action instance then this operation shall not fail because of this reason.\nMatched ActionIdentity objects shall not be removed from the COM archive only the list of ActionIdentity objects in the provider.\nRemoved ActionIdentity object shall not be allowed to be referenced by new action instances.\nIf an error is raised then no actions shall be removed as a result of this operation call.\n",
                "x-parser-schema-id": "<anonymous-schema-83>"
              }
            },
            "x-parser-schema-id": "removeAction_submit"
          },
          "x-parser-unique-object-id": "removeAction_submit.message",
          "x-parser-message-name": "removeAction_submit"
        }
      },
      "description": "Send a **removeAction_submit** message in this channel.\n",
      "x-parser-unique-object-id": "removeAction_submit"
    },
    "removeAction_error": {
      "address": "removeAction_error",
      "messages": {
        "removeAction_error.message": {
          "description": "removeAction error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
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
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-86>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
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
            "x-parser-schema-id": "removeAction_error"
          },
          "x-parser-unique-object-id": "removeAction_error.message",
          "x-parser-message-name": "removeAction_error"
        }
      },
      "description": "Use this channel to receive removeAction errors as **removeAction_error** messages.\n",
      "x-parser-unique-object-id": "removeAction_error"
    }
  },
  "operations": {
    "submitAction_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submitAction_submit",
      "messages": [
        "$ref:$.channels.submitAction_submit.messages.submitAction_submit.message"
      ],
      "x-parser-unique-object-id": "submitAction_submit"
    },
    "submitAction_error": {
      "action": "receive",
      "channel": "$ref:$.channels.submitAction_error",
      "messages": [
        "$ref:$.channels.submitAction_error.messages.submitAction_error.message"
      ],
      "x-parser-unique-object-id": "submitAction_error"
    },
    "preCheckAction_request": {
      "action": "send",
      "channel": "$ref:$.channels.preCheckAction_request",
      "messages": [
        "$ref:$.channels.preCheckAction_request.messages.preCheckAction_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.preCheckAction_response"
      },
      "x-parser-unique-object-id": "preCheckAction_request"
    },
    "preCheckAction_response": {
      "action": "receive",
      "channel": "$ref:$.channels.preCheckAction_response",
      "messages": [
        "$ref:$.channels.preCheckAction_response.messages.preCheckAction_response.message"
      ],
      "x-parser-unique-object-id": "preCheckAction_response"
    },
    "preCheckAction_error": {
      "action": "receive",
      "channel": "$ref:$.channels.preCheckAction_error",
      "messages": [
        "$ref:$.channels.preCheckAction_error.messages.preCheckAction_error.message"
      ],
      "x-parser-unique-object-id": "preCheckAction_error"
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
    "addAction_request": {
      "action": "send",
      "channel": "$ref:$.channels.addAction_request",
      "messages": [
        "$ref:$.channels.addAction_request.messages.addAction_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.addAction_response"
      },
      "x-parser-unique-object-id": "addAction_request"
    },
    "addAction_response": {
      "action": "receive",
      "channel": "$ref:$.channels.addAction_response",
      "messages": [
        "$ref:$.channels.addAction_response.messages.addAction_response.message"
      ],
      "x-parser-unique-object-id": "addAction_response"
    },
    "addAction_error": {
      "action": "receive",
      "channel": "$ref:$.channels.addAction_error",
      "messages": [
        "$ref:$.channels.addAction_error.messages.addAction_error.message"
      ],
      "x-parser-unique-object-id": "addAction_error"
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
    "removeAction_submit": {
      "action": "send",
      "channel": "$ref:$.channels.removeAction_submit",
      "messages": [
        "$ref:$.channels.removeAction_submit.messages.removeAction_submit.message"
      ],
      "x-parser-unique-object-id": "removeAction_submit"
    },
    "removeAction_error": {
      "action": "receive",
      "channel": "$ref:$.channels.removeAction_error",
      "messages": [
        "$ref:$.channels.removeAction_error.messages.removeAction_error.message"
      ],
      "x-parser-unique-object-id": "removeAction_error"
    }
  },
  "components": {
    "schemas": {
      "submitAction_submit": "$ref:$.channels.submitAction_submit.messages.submitAction_submit.message.payload",
      "submitAction_error": "$ref:$.channels.submitAction_error.messages.submitAction_error.message.payload",
      "preCheckAction_request": "$ref:$.channels.preCheckAction_request.messages.preCheckAction_request.message.payload",
      "preCheckAction_response": "$ref:$.channels.preCheckAction_response.messages.preCheckAction_response.message.payload",
      "preCheckAction_error": "$ref:$.channels.preCheckAction_error.messages.preCheckAction_error.message.payload",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message.payload",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message.payload",
      "addAction_request": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload",
      "addAction_response": "$ref:$.channels.addAction_response.messages.addAction_response.message.payload",
      "addAction_error": "$ref:$.channels.addAction_error.messages.addAction_error.message.payload",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message.payload",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message.payload",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message.payload",
      "removeAction_submit": "$ref:$.channels.removeAction_submit.messages.removeAction_submit.message.payload",
      "removeAction_error": "$ref:$.channels.removeAction_error.messages.removeAction_error.message.payload",
      "com": {
        "archive": {
          "ExpressionOperator": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "ObjectKey": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "action": {
          "ActionCreationRequest": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails",
          "ActionDefinitionDetails": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails",
          "ActionInstanceDetails": "$ref:$.channels.submitAction_submit.messages.submitAction_submit.message.payload.properties.actionDetails"
        },
        "ArgumentDefinitionDetails": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items",
        "AttributeValue": "$ref:$.channels.submitAction_submit.messages.submitAction_submit.message.payload.properties.actionDetails.properties.argumentValues.items",
        "ConditionalConversion": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items",
        "ObjectInstancePair": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.actionInstIds",
        "ParameterExpression": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "submitAction_submit": "$ref:$.channels.submitAction_submit.messages.submitAction_submit.message",
      "submitAction_error": "$ref:$.channels.submitAction_error.messages.submitAction_error.message",
      "preCheckAction_request": "$ref:$.channels.preCheckAction_request.messages.preCheckAction_request.message",
      "preCheckAction_response": "$ref:$.channels.preCheckAction_response.messages.preCheckAction_response.message",
      "preCheckAction_error": "$ref:$.channels.preCheckAction_error.messages.preCheckAction_error.message",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message",
      "addAction_request": "$ref:$.channels.addAction_request.messages.addAction_request.message",
      "addAction_response": "$ref:$.channels.addAction_response.messages.addAction_response.message",
      "addAction_error": "$ref:$.channels.addAction_error.messages.addAction_error.message",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message",
      "removeAction_submit": "$ref:$.channels.removeAction_submit.messages.removeAction_submit.message",
      "removeAction_error": "$ref:$.channels.removeAction_error.messages.removeAction_error.message"
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
  