
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Parameter Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "monitorValue_sub": {
      "address": "monitorValue_sub",
      "messages": {
        "monitorValue_sub.message": {
          "description": "monitorValue request",
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
              "subscriptionId": {
                "type": "string",
                "description": "The identifier of this subscription.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "name": {
                "type": "string",
                "description": "The parameter name.\n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "parameterDefinitionId": {
                "type": "integer",
                "format": "int64",
                "description": "The parameter identity.\n",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "parameterValueInstance": {
                "type": "integer",
                "format": "int64",
                "description": "The parameter value instance.\n",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "monitorValue_sub"
          },
          "x-parser-unique-object-id": "monitorValue_sub.message",
          "x-parser-message-name": "monitorValue_sub"
        }
      },
      "description": "Send a **monitorValue_sub** message in this channel to receive a **monitorValue_pub** message over the **monitorValue_pub** channel.\n",
      "x-parser-unique-object-id": "monitorValue_sub"
    },
    "monitorValue_pub": {
      "address": null,
      "messages": {
        "monitorValue_pub.message": {
          "description": "monitorValue response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-9>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-8>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "subscriptionId": {
                "type": "string",
                "description": "The identifier of this subscription.",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "objId": {
                "properties": {
                  "key": {
                    "properties": {
                      "domain": {
                        "description": "The domain of the object instance.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-14>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      },
                      "instId": {
                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "type_": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-17>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-18>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-19>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-20>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "newValue": {
                "properties": {
                  "convertedValue": {
                    "description": "The parameter converted value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-22>"
                  },
                  "rawValue": {
                    "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-23>"
                  },
                  "validityState": {
                    "description": "Holds the validity state for a parameter value. If the parameter is valid then this should be set to '0'.",
                    "format": "uint8",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-24>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-21>"
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
              "paramInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-30>"
                },
                "description": "The paramInstIds field shall provide the list of ParameterIdentity object instance identifiers.\nThe wildcard value of '0' shall be supported and matches all parameters of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested parameter is unknown then an UNKNOWN error shall be returned.\nIf a parameter is being reported periodically, using the operation shall not reset the reportInterval timer.\n",
                "x-parser-schema-id": "<anonymous-schema-29>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-32>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-31>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-33>"
              },
              "paramValDetails": {
                "properties": {
                  "defId": {
                    "description": "The ParameterDefinition object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-35>"
                  },
                  "paramId": {
                    "description": "The ParameterIdentity object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-36>"
                  },
                  "timestamp": {
                    "description": "The timestamp of the value.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-37>"
                  },
                  "value": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.newValue"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-34>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-39>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-38>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-40>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-41>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-42>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-44>"
                },
                "x-parser-schema-id": "<anonymous-schema-43>"
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
    "setValue_submit": {
      "address": "setValue_submit",
      "messages": {
        "setValue_submit.message": {
          "description": "setValue request",
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-46>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-47>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-45>"
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
              "newRawValues": {
                "properties": {
                  "paramInstId": {
                    "description": "The object instance identifier of the parameter identity.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-50>"
                  },
                  "rawValue": {
                    "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-51>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-49>"
              }
            },
            "x-parser-schema-id": "setValue_submit"
          },
          "x-parser-unique-object-id": "setValue_submit.message",
          "x-parser-message-name": "setValue_submit"
        }
      },
      "description": "Send a **setValue_submit** message in this channel.\n",
      "x-parser-unique-object-id": "setValue_submit"
    },
    "setValue_error": {
      "address": "setValue_error",
      "messages": {
        "setValue_error.message": {
          "description": "setValue error response",
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
                  "MAL",
                  "MC",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-55>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "READONLY",
                  "INVALID"
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
            "x-parser-schema-id": "setValue_error"
          },
          "x-parser-unique-object-id": "setValue_error.message",
          "x-parser-message-name": "setValue_error"
        }
      },
      "description": "Use this channel to receive setValue errors as **setValue_error** messages.\n",
      "x-parser-unique-object-id": "setValue_error"
    },
    "enableGeneration_request": {
      "address": "enableGeneration_request",
      "messages": {
        "enableGeneration_request.message": {
          "description": "enableGeneration request",
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
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains ParameterIdentity object instance identifiers.\nThe ParameterIdentity objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the ParameterIdentity objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all ParameterIdentity objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then reports for matching ParameterIdentity objects shall be generated, a value of FALSE requests that reports will not be generated.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current generationEnabled field of the definition for a matched ParameterIdentity object i.e. enabling an already enabled parameter will not result in an error.\nIf a requested ParameterIdentity or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain ParameterIdentity objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new ParameterDefinition object in the COM archive if the generationEnabled field is changed.\nIf a new ParameterDefinition object is created then that new object shall be the current ParameterDefinition used for the specific ParameterIdentity.\n",
                "x-parser-schema-id": "<anonymous-schema-63>"
              },
              "enableInstances": {
                "properties": {
                  "id": {
                    "description": "The object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-65>"
                  },
                  "value": {
                    "description": "An associated Boolean value.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-66>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-64>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-68>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-67>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-69>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-71>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new ParameterDefinition objects.\n",
                "x-parser-schema-id": "<anonymous-schema-70>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-73>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-72>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-74>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-75>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-76>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-78>"
                },
                "x-parser-schema-id": "<anonymous-schema-77>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-80>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-81>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-79>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-82>"
              },
              "paramNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-84>"
                },
                "description": "The paramNames field shall contain a list of parameter names to retrieve the ParameterIdentity and ParameterDefinition object instance identifiers for.\nThe paramNames field may contain the wildcard value of '*' to return all supported ParameterIdentity and ParameterDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing ParameterIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-83>"
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
                "x-parser-schema-id": "<anonymous-schema-86>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-87>"
              },
              "objInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-89>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-90>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-88>"
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
                "x-parser-schema-id": "<anonymous-schema-92>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-93>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-94>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-95>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-97>"
                },
                "x-parser-schema-id": "<anonymous-schema-96>"
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
    "addParameter_request": {
      "address": "addParameter_request",
      "messages": {
        "addParameter_request.message": {
          "description": "addParameter request",
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-99>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-100>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-98>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-101>"
              },
              "paramDefDetails": {
                "properties": {
                  "name": {
                    "description": "The name of the parameter. Must not be empty or the wildcard value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-103>"
                  },
                  "paramDefDetails": {
                    "properties": {
                      "conversion": {
                        "properties": {
                          "conditionalConversions": {
                            "description": "The conversions to be applied. Only the first TRUE conversion should be applied.",
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
                                      "x-parser-schema-id": "<anonymous-schema-109>"
                                    },
                                    "parameterId": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.objId.properties.key",
                                    "useConverted": {
                                      "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                                      "type": "boolean",
                                      "x-parser-schema-id": "<anonymous-schema-110>"
                                    },
                                    "value": {
                                      "description": "The value to be used in the expression.",
                                      "type": "string",
                                      "x-parser-schema-id": "<anonymous-schema-111>"
                                    }
                                  },
                                  "type": "object",
                                  "x-parser-schema-id": "<anonymous-schema-108>"
                                },
                                "conversionId": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.objId.properties.key"
                              },
                              "type": "object",
                              "x-parser-schema-id": "<anonymous-schema-107>"
                            },
                            "type": "array",
                            "x-parser-schema-id": "<anonymous-schema-106>"
                          },
                          "convertedType": {
                            "description": "Holds the attribute short form part of the converted type of the parameter, e.g., for a MAL::String parameter it shall hold 15.",
                            "format": "int8",
                            "type": "integer",
                            "x-parser-schema-id": "<anonymous-schema-112>"
                          },
                          "convertedUnit": {
                            "description": "The converted parameter unit. If NULL then converted type has no unit.",
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-113>"
                          }
                        },
                        "type": "object",
                        "x-parser-schema-id": "<anonymous-schema-105>"
                      },
                      "description": {
                        "description": "The description of the parameter. May be empty.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-114>"
                      },
                      "generationEnabled": {
                        "description": "Controls whether reports for this parameter are to be generated.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-115>"
                      },
                      "rawType": {
                        "description": "Holds the attribute short form part of the raw type of the parameter, e.g., for a MAL::String parameter it shall hold 15.",
                        "format": "int8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-116>"
                      },
                      "rawUnit": {
                        "description": "The unit for the raw value. If NULL then raw type has no unit.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-117>"
                      },
                      "reportInterval": {
                        "description": "Periodic report interval. No periodic reports to be generated if this is set to '0'.",
                        "format": "uint64",
                        "type": "number",
                        "x-parser-schema-id": "<anonymous-schema-118>"
                      },
                      "validityExpression": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition"
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-104>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-102>"
              }
            },
            "x-parser-schema-id": "addParameter_request"
          },
          "x-parser-unique-object-id": "addParameter_request.message",
          "x-parser-message-name": "addParameter_request"
        }
      },
      "description": "Send a **addParameter_request** message in this channel to receive a **addParameter_response** message over the **addParameter_response** channel.\n",
      "x-parser-unique-object-id": "addParameter_request"
    },
    "addParameter_response": {
      "address": null,
      "messages": {
        "addParameter_response.message": {
          "description": "addParameter response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-120>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-119>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-121>"
              },
              "newObjInstIds": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds"
            },
            "x-parser-schema-id": "addParameter_response"
          },
          "x-parser-unique-object-id": "addParameter_response.message",
          "x-parser-message-name": "addParameter_response"
        }
      },
      "description": "Use this channel to receive addParameter responses as **addParameter_response** messages.\n",
      "x-parser-unique-object-id": "addParameter_response"
    },
    "addParameter_error": {
      "address": "addParameter_error",
      "messages": {
        "addParameter_error.message": {
          "description": "addParameter error response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-123>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-122>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-124>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-125>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
                ],
                "x-parser-schema-id": "<anonymous-schema-126>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-128>"
                },
                "x-parser-schema-id": "<anonymous-schema-127>"
              }
            },
            "x-parser-schema-id": "addParameter_error"
          },
          "x-parser-unique-object-id": "addParameter_error.message",
          "x-parser-message-name": "addParameter_error"
        }
      },
      "description": "Use this channel to receive addParameter errors as **addParameter_error** messages.\n",
      "x-parser-unique-object-id": "addParameter_error"
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
                "x-parser-schema-id": "<anonymous-schema-130>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-131>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-129>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-132>"
              },
              "paramInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-134>"
                },
                "description": "The paramInstIds field shall contain the object instance identifiers of the ParameterIdentity objects to be updated.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the paramInstIds list contains either NULL or '0' an INVALID error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-133>"
              },
              "paramDefDetails": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails"
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
                "x-parser-schema-id": "<anonymous-schema-136>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-137>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-139>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new ParameterDefinition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-138>"
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
                "x-parser-schema-id": "<anonymous-schema-141>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-140>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-142>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-143>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-144>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-146>"
                },
                "x-parser-schema-id": "<anonymous-schema-145>"
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
    "removeParameter_submit": {
      "address": "removeParameter_submit",
      "messages": {
        "removeParameter_submit.message": {
          "description": "removeParameter request",
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-148>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-149>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-147>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-150>"
              },
              "paramInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-152>"
                },
                "description": "The paramInstIds field shall hold the object instance identifiers of the ParameterIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided ParameterIdentity object instance identifier does not include a wildcard and does not match an existing parameter identity object then this operation shall fail with an UNKNOWN error.\nMatched ParameterIdentity and ParameterDefinition objects shall not be removed from the COM archive only the list of ParameterIdentity and ParameterDefinition objects from the provider.\nIf an error is raised then no parameters shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish parameter values for the deleted ParameterIdentity objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-151>"
              }
            },
            "x-parser-schema-id": "removeParameter_submit"
          },
          "x-parser-unique-object-id": "removeParameter_submit.message",
          "x-parser-message-name": "removeParameter_submit"
        }
      },
      "description": "Send a **removeParameter_submit** message in this channel.\n",
      "x-parser-unique-object-id": "removeParameter_submit"
    },
    "removeParameter_error": {
      "address": "removeParameter_error",
      "messages": {
        "removeParameter_error.message": {
          "description": "removeParameter error response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-154>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-153>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-155>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-156>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-157>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-159>"
                },
                "x-parser-schema-id": "<anonymous-schema-158>"
              }
            },
            "x-parser-schema-id": "removeParameter_error"
          },
          "x-parser-unique-object-id": "removeParameter_error.message",
          "x-parser-message-name": "removeParameter_error"
        }
      },
      "description": "Use this channel to receive removeParameter errors as **removeParameter_error** messages.\n",
      "x-parser-unique-object-id": "removeParameter_error"
    }
  },
  "operations": {
    "monitorValue_sub": {
      "action": "send",
      "channel": "$ref:$.channels.monitorValue_sub",
      "messages": [
        "$ref:$.channels.monitorValue_sub.messages.monitorValue_sub.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.monitorValue_pub"
      },
      "x-parser-unique-object-id": "monitorValue_sub"
    },
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
    "setValue_submit": {
      "action": "send",
      "channel": "$ref:$.channels.setValue_submit",
      "messages": [
        "$ref:$.channels.setValue_submit.messages.setValue_submit.message"
      ],
      "x-parser-unique-object-id": "setValue_submit"
    },
    "setValue_error": {
      "action": "receive",
      "channel": "$ref:$.channels.setValue_error",
      "messages": [
        "$ref:$.channels.setValue_error.messages.setValue_error.message"
      ],
      "x-parser-unique-object-id": "setValue_error"
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
    "addParameter_request": {
      "action": "send",
      "channel": "$ref:$.channels.addParameter_request",
      "messages": [
        "$ref:$.channels.addParameter_request.messages.addParameter_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.addParameter_response"
      },
      "x-parser-unique-object-id": "addParameter_request"
    },
    "addParameter_response": {
      "action": "receive",
      "channel": "$ref:$.channels.addParameter_response",
      "messages": [
        "$ref:$.channels.addParameter_response.messages.addParameter_response.message"
      ],
      "x-parser-unique-object-id": "addParameter_response"
    },
    "addParameter_error": {
      "action": "receive",
      "channel": "$ref:$.channels.addParameter_error",
      "messages": [
        "$ref:$.channels.addParameter_error.messages.addParameter_error.message"
      ],
      "x-parser-unique-object-id": "addParameter_error"
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
    "removeParameter_submit": {
      "action": "send",
      "channel": "$ref:$.channels.removeParameter_submit",
      "messages": [
        "$ref:$.channels.removeParameter_submit.messages.removeParameter_submit.message"
      ],
      "x-parser-unique-object-id": "removeParameter_submit"
    },
    "removeParameter_error": {
      "action": "receive",
      "channel": "$ref:$.channels.removeParameter_error",
      "messages": [
        "$ref:$.channels.removeParameter_error.messages.removeParameter_error.message"
      ],
      "x-parser-unique-object-id": "removeParameter_error"
    }
  },
  "components": {
    "schemas": {
      "monitorValue_sub": "$ref:$.channels.monitorValue_sub.messages.monitorValue_sub.message.payload",
      "monitorValue_pub": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload",
      "getValue_request": "$ref:$.channels.getValue_request.messages.getValue_request.message.payload",
      "getValue_response": "$ref:$.channels.getValue_response.messages.getValue_response.message.payload",
      "getValue_error": "$ref:$.channels.getValue_error.messages.getValue_error.message.payload",
      "setValue_submit": "$ref:$.channels.setValue_submit.messages.setValue_submit.message.payload",
      "setValue_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-160>"
          }
        },
        "x-parser-schema-id": "setValue_None"
      },
      "setValue_error": "$ref:$.channels.setValue_error.messages.setValue_error.message.payload",
      "enableGeneration_request": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message.payload",
      "enableGeneration_response": "$ref:$.channels.enableGeneration_response.messages.enableGeneration_response.message.payload",
      "enableGeneration_error": "$ref:$.channels.enableGeneration_error.messages.enableGeneration_error.message.payload",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message.payload",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message.payload",
      "addParameter_request": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload",
      "addParameter_response": "$ref:$.channels.addParameter_response.messages.addParameter_response.message.payload",
      "addParameter_error": "$ref:$.channels.addParameter_error.messages.addParameter_error.message.payload",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message.payload",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message.payload",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message.payload",
      "removeParameter_submit": "$ref:$.channels.removeParameter_submit.messages.removeParameter_submit.message.payload",
      "removeParameter_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-161>"
          }
        },
        "x-parser-schema-id": "removeParameter_None"
      },
      "removeParameter_error": "$ref:$.channels.removeParameter_error.messages.removeParameter_error.message.payload",
      "mc": {
        "ConditionalConversion": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items",
        "ObjectInstancePair": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds",
        "ParameterExpression": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition",
        "parameter": {
          "ParameterConversion": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion",
          "ParameterCreationRequest": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload.properties.paramDefDetails",
          "ParameterDefinitionDetails": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails",
          "ParameterRawValue": "$ref:$.channels.setValue_submit.messages.setValue_submit.message.payload.properties.newRawValues",
          "ParameterValue": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.newValue",
          "ParameterValueDetails": "$ref:$.channels.getValue_response.messages.getValue_response.message.payload.properties.paramValDetails"
        },
        "x-parser-schema-id": "mc"
      },
      "com": {
        "archive": {
          "ExpressionOperator": "$ref:$.channels.addParameter_request.messages.addParameter_request.message.payload.properties.paramDefDetails.properties.paramDefDetails.properties.conversion.properties.conditionalConversions.items.properties.condition.properties.operator"
        },
        "InstanceBooleanPair": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message.payload.properties.enableInstances",
        "ObjectId": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.objId",
        "ObjectKey": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.objId.properties.key",
        "ObjectType": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message.payload.properties.objId.properties.type_",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "monitorValue_sub": "$ref:$.channels.monitorValue_sub.messages.monitorValue_sub.message",
      "monitorValue_pub": "$ref:$.channels.monitorValue_pub.messages.monitorValue_pub.message",
      "getValue_request": "$ref:$.channels.getValue_request.messages.getValue_request.message",
      "getValue_response": "$ref:$.channels.getValue_response.messages.getValue_response.message",
      "getValue_error": "$ref:$.channels.getValue_error.messages.getValue_error.message",
      "setValue_submit": "$ref:$.channels.setValue_submit.messages.setValue_submit.message",
      "setValue_error": "$ref:$.channels.setValue_error.messages.setValue_error.message",
      "enableGeneration_request": "$ref:$.channels.enableGeneration_request.messages.enableGeneration_request.message",
      "enableGeneration_response": "$ref:$.channels.enableGeneration_response.messages.enableGeneration_response.message",
      "enableGeneration_error": "$ref:$.channels.enableGeneration_error.messages.enableGeneration_error.message",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message",
      "addParameter_request": "$ref:$.channels.addParameter_request.messages.addParameter_request.message",
      "addParameter_response": "$ref:$.channels.addParameter_response.messages.addParameter_response.message",
      "addParameter_error": "$ref:$.channels.addParameter_error.messages.addParameter_error.message",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message",
      "removeParameter_submit": "$ref:$.channels.removeParameter_submit.messages.removeParameter_submit.message",
      "removeParameter_error": "$ref:$.channels.removeParameter_error.messages.removeParameter_error.message"
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
  