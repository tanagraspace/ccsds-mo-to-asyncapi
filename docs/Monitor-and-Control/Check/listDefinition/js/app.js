
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service listDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listDefinition interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's listDefinition interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Check_listDefinition": {
      "address": "request_Check_listDefinition",
      "messages": {
        "Check.listDefinition_request.message": {
          "description": "Check listDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "names": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The names field shall hold a list of CheckIdentity names to retrieve the CheckIdentity and actual check definition object instance identifiers for.\nThe request may contain the wildcard value of '*' to return all supported check definitions.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing CheckIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_listDefinition_request"
          },
          "x-parser-unique-object-id": "Check.listDefinition_request.message",
          "x-parser-message-name": "Check_listDefinition_request"
        }
      },
      "description": "Send a **Check_listDefinition_request** message in this channel to receive a **Check_listDefinition_response** message over the **response_Check_listDefinition** channel.\n",
      "x-parser-unique-object-id": "request_Check_listDefinition"
    },
    "response_Check_listDefinition": {
      "address": "response_Check_listDefinition",
      "messages": {
        "Check.listDefinition_response.message": {
          "description": "Check listDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "objInstIds": {
                "properties": {
                  "objDefCheckType": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-7>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "objInstIds": {
                    "properties": {
                      "objDefInstanceId": {
                        "description": "The object instance identifier of the Definition object.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      },
                      "objIdentityInstanceId": {
                        "description": "The object instance identifier of the Identity object.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "Check_listDefinition_response"
          },
          "x-parser-unique-object-id": "Check.listDefinition_response.message",
          "x-parser-message-name": "Check_listDefinition_response"
        }
      },
      "description": "Use this channel to receive Check listDefinition responses as **Check_listDefinition_response** messages.\n",
      "x-parser-unique-object-id": "response_Check_listDefinition"
    },
    "error_Check_listDefinition": {
      "address": "error_Check_listDefinition",
      "messages": {
        "Check.listDefinition_error.message": {
          "description": "Check listDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-18>"
                },
                "x-parser-schema-id": "<anonymous-schema-17>"
              }
            },
            "x-parser-schema-id": "Check_listDefinition_error"
          },
          "x-parser-unique-object-id": "Check.listDefinition_error.message",
          "x-parser-message-name": "Check_listDefinition_error"
        }
      },
      "description": "Use this channel to receive Check listDefinition errors as **Check_listDefinition_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_listDefinition"
    }
  },
  "operations": {
    "Check_listDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Check_listDefinition",
      "messages": [
        "$ref:$.channels.request_Check_listDefinition.messages.Check.listDefinition_request.message"
      ],
      "x-parser-unique-object-id": "Check_listDefinition_request"
    },
    "Check_listDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Check_listDefinition",
      "messages": [
        "$ref:$.channels.response_Check_listDefinition.messages.Check.listDefinition_response.message"
      ],
      "x-parser-unique-object-id": "Check_listDefinition_response"
    },
    "Check_listDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_listDefinition",
      "messages": [
        "$ref:$.channels.error_Check_listDefinition.messages.Check.listDefinition_error.message"
      ],
      "x-parser-unique-object-id": "Check_listDefinition_error"
    }
  },
  "components": {
    "schemas": {
      "Check_listDefinition_request": "$ref:$.channels.request_Check_listDefinition.messages.Check.listDefinition_request.message.payload",
      "Check_listDefinition_response": "$ref:$.channels.response_Check_listDefinition.messages.Check.listDefinition_response.message.payload",
      "Check_listDefinition_error": "$ref:$.channels.error_Check_listDefinition.messages.Check.listDefinition_error.message.payload",
      "mc": {
        "check": {
          "CheckTypedInstance": "$ref:$.channels.response_Check_listDefinition.messages.Check.listDefinition_response.message.payload.properties.objInstIds"
        },
        "ObjectInstancePair": "$ref:$.channels.response_Check_listDefinition.messages.Check.listDefinition_response.message.payload.properties.objInstIds.properties.objInstIds",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectType": "$ref:$.channels.response_Check_listDefinition.messages.Check.listDefinition_response.message.payload.properties.objInstIds.properties.objDefCheckType",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Check_listDefinition_request": "$ref:$.channels.request_Check_listDefinition.messages.Check.listDefinition_request.message",
      "Check_listDefinition_response": "$ref:$.channels.response_Check_listDefinition.messages.Check.listDefinition_response.message",
      "Check_listDefinition_error": "$ref:$.channels.error_Check_listDefinition.messages.Check.listDefinition_error.message"
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
  