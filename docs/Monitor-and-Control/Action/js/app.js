
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "actionInstId": {
                "type": "integer",
                "format": "int64",
                "description": "The actionInstId field of the submission shall contain the object instance identifier of the ActionInstance to be used for activity tracking events.\n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "actionDetails": {
                "properties": {
                  "argumentIds": {
                    "description": "Optional list of argument definition identifiers. Allows the provider to verify that the correct arguments are being supplied. The ordering of the list matches that of the argument list of the action definition.",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-8>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "argumentValues": {
                    "description": "List containing the values of the arguments. The ordering of the list matches that of the definition. If a value for a particular entry is not being supplied, then its position is filled with a NULL value. If no arguments are defined, then the complete list is replaced with a NULL.",
                    "items": {
                      "properties": {
                        "value": {
                          "description": "The argument value. Must not be NULL. NULL may be represented by having a NULL in place of the complete AttributeValue composite.",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-11>"
                        }
                      },
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-10>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "defInstId": {
                    "description": "The object instance identifier of the ActionDefinition to be used.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "isRawValue": {
                    "description": "Optional list of Booleans that determine whether the supplied argument values are raw or converted. If the Boolean for a particular value is TRUE or NULL then that value is assumed to be raw. If the complete isRawValue list is NULL then all arguments are assumed to be raw values. The ordering of the list matches that of the argument list of the action definition.",
                    "items": {
                      "type": "boolean",
                      "x-parser-schema-id": "<anonymous-schema-14>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "stageCompletedRequired": {
                    "description": "If TRUE, then an activity event of type Execution is required for the COMPLETION stage.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "stageProgressRequired": {
                    "description": "If TRUE, then activity events of type Execution are required for the PROGRESS stages.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  },
                  "stageStartedRequired": {
                    "description": "If TRUE, then an activity event of type Execution is required for the STARTED stage.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-6>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-19>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-18>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-24>"
                },
                "x-parser-schema-id": "<anonymous-schema-23>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-25>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-28>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-30>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-29>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-31>"
              },
              "accepted": {
                "type": "boolean",
                "description": "The returned Boolean shall be set to TRUE if the action would be accepted successfully; otherwise the operation shall return FALSE.\n",
                "x-parser-schema-id": "<anonymous-schema-32>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-34>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-33>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-41>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-42>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-40>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-43>"
              },
              "actionNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-45>"
                },
                "description": "The actionNames field shall contain a list of action names to retrieve the ActionIdentity and ActionDefinition object instance identifiers for.\nThe request may contain the wildcard value of '*' to return all supported ActionIdentity and ActionDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing ActionIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-44>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-47>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-46>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-48>"
              },
              "actionInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-50>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-51>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-49>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-53>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-52>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-54>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-55>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-60>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-61>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-59>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-62>"
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
                              "x-parser-schema-id": "<anonymous-schema-67>"
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
                                        "x-parser-schema-id": "<anonymous-schema-71>"
                                      },
                                      "parameterId": {
                                        "properties": {
                                          "domain": {
                                            "description": "The domain of the object instance.",
                                            "items": {
                                              "type": "string",
                                              "x-parser-schema-id": "<anonymous-schema-74>"
                                            },
                                            "type": "array",
                                            "x-parser-schema-id": "<anonymous-schema-73>"
                                          },
                                          "instId": {
                                            "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                                            "format": "int64",
                                            "type": "integer",
                                            "x-parser-schema-id": "<anonymous-schema-75>"
                                          }
                                        },
                                        "type": "object",
                                        "x-parser-schema-id": "<anonymous-schema-72>"
                                      },
                                      "useConverted": {
                                        "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                                        "type": "boolean",
                                        "x-parser-schema-id": "<anonymous-schema-76>"
                                      },
                                      "value": {
                                        "description": "The value to be used in the expression.",
                                        "type": "string",
                                        "x-parser-schema-id": "<anonymous-schema-77>"
                                      }
                                    },
                                    "type": "object",
                                    "x-parser-schema-id": "<anonymous-schema-70>"
                                  },
                                  "conversionId": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId"
                                },
                                "type": "object",
                                "x-parser-schema-id": "<anonymous-schema-69>"
                              },
                              "type": "array",
                              "x-parser-schema-id": "<anonymous-schema-68>"
                            },
                            "convertedType": {
                              "description": "Holds the attribute short form part of the converted type of the argument, e.g., for a MAL::String argument it shall hold 15. Must not be NULL if a conversion condition is supplied.",
                              "format": "int8",
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-78>"
                            },
                            "convertedUnit": {
                              "description": "The converted argument units.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-79>"
                            },
                            "description": {
                              "description": "Optional argument description.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-80>"
                            },
                            "rawType": {
                              "description": "Holds the attribute short form part of the raw type of the argument, e.g., for a MAL::String argument it shall hold 15.",
                              "format": "int8",
                              "type": "integer",
                              "x-parser-schema-id": "<anonymous-schema-81>"
                            },
                            "rawUnit": {
                              "description": "The unit for the raw value.",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-82>"
                            }
                          },
                          "type": "object",
                          "x-parser-schema-id": "<anonymous-schema-66>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-65>"
                      },
                      "category": {
                        "description": "Category of the action. Value taken from ActionCategory enumeration, although the use of a UOctet allows deployment specific extension. Extensions must use values greater than 127.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-83>"
                      },
                      "description": {
                        "description": "The description of the action.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-84>"
                      },
                      "progressStepCount": {
                        "description": "Total number of steps that will be reported if PROGRESS reporting is selected in the sent Action. 0 if PROGRESS reporting is not used.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-85>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-64>"
                  },
                  "name": {
                    "description": "The name of the action. Must not be empty or the wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-86>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-63>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-88>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-89>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-91>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-92>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-93>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
                ],
                "x-parser-schema-id": "<anonymous-schema-94>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-96>"
                },
                "x-parser-schema-id": "<anonymous-schema-95>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-98>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-99>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-97>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-100>"
              },
              "actionObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-102>"
                },
                "description": "The actionObjInstIds field shall contain the list of object instance identifiers of the ActionIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the actionObjInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-101>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-104>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-103>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-105>"
              },
              "newDefInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-107>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new ActionDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-106>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-109>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-108>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-110>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-111>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-112>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-114>"
                },
                "x-parser-schema-id": "<anonymous-schema-113>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-116>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-117>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-115>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-118>"
              },
              "actionInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-120>"
                },
                "description": "The actionInstIds field shall hold the object instance identifiers of the ActionIdentity objects to be removed from the provider.\nThe wildcard value of '0' in the list of object instance identifiers shall be supported and matches all actions of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided ActionIdentity object instance identifier does not include a wildcard and does not match an existing ActionIdentity object then this operation shall fail with an UNKNOWN error.\nIf a matched definition is still being used by an executing action instance then this operation shall not fail because of this reason.\nMatched ActionIdentity objects shall not be removed from the COM archive only the list of ActionIdentity objects in the provider.\nRemoved ActionIdentity object shall not be allowed to be referenced by new action instances.\nIf an error is raised then no actions shall be removed as a result of this operation call.\n",
                "x-parser-schema-id": "<anonymous-schema-119>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-122>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-121>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-123>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-124>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-125>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-127>"
                },
                "x-parser-schema-id": "<anonymous-schema-126>"
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
      "submitAction_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-128>"
          }
        },
        "x-parser-schema-id": "submitAction_None"
      },
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
      "removeAction_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-129>"
          }
        },
        "x-parser-schema-id": "removeAction_None"
      },
      "removeAction_error": "$ref:$.channels.removeAction_error.messages.removeAction_error.message.payload",
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
      },
      "com": {
        "archive": {
          "ExpressionOperator": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "ObjectKey": "$ref:$.channels.addAction_request.messages.addAction_request.message.payload.properties.actionDefDetails.properties.actionDefDetails.properties.arguments.items.properties.conditionalConversions.items.properties.condition.properties.parameterId",
        "x-parser-schema-id": "com"
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
  