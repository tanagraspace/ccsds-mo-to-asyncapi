
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "PackageManagement Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the PackageManagement Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the PackageManagement Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "findPackage_request": {
      "address": "findPackage_request",
      "messages": {
        "findPackage_request.message": {
          "description": "findPackage request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
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
                "description": "The names field contains the names of the packages.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "findPackage_request"
          },
          "x-parser-unique-object-id": "findPackage_request.message",
          "x-parser-message-name": "findPackage_request"
        }
      },
      "description": "Send a **findPackage_request** message in this channel to receive a **findPackage_response** message over the **findPackage_response** channel.\n",
      "x-parser-unique-object-id": "findPackage_request"
    },
    "findPackage_response": {
      "address": null,
      "messages": {
        "findPackage_response.message": {
          "description": "findPackage response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "names": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                "description": "The names field contains the names of the packages.\n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "installed": {
                "type": "array",
                "items": {
                  "type": "boolean",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "description": "The installed field shall hold the status of the package.\n",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "findPackage_response"
          },
          "x-parser-unique-object-id": "findPackage_response.message",
          "x-parser-message-name": "findPackage_response"
        }
      },
      "description": "Use this channel to receive findPackage responses as **findPackage_response** messages.\n",
      "x-parser-unique-object-id": "findPackage_response"
    },
    "findPackage_error": {
      "address": "findPackage_error",
      "messages": {
        "findPackage_error.message": {
          "description": "findPackage error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
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
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
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
            "x-parser-schema-id": "findPackage_error"
          },
          "x-parser-unique-object-id": "findPackage_error.message",
          "x-parser-message-name": "findPackage_error"
        }
      },
      "description": "Use this channel to receive findPackage errors as **findPackage_error** messages.\n",
      "x-parser-unique-object-id": "findPackage_error"
    },
    "checkPackageIntegrity_request": {
      "address": "checkPackageIntegrity_request",
      "messages": {
        "checkPackageIntegrity_request.message": {
          "description": "checkPackageIntegrity request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "names": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-16>"
                },
                "description": "The names field contains the names of the packages.\n",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "checkPackageIntegrity_request"
          },
          "x-parser-unique-object-id": "checkPackageIntegrity_request.message",
          "x-parser-message-name": "checkPackageIntegrity_request"
        }
      },
      "description": "Send a **checkPackageIntegrity_request** message in this channel to receive a **checkPackageIntegrity_response** message over the **checkPackageIntegrity_response** channel.\n",
      "x-parser-unique-object-id": "checkPackageIntegrity_request"
    },
    "checkPackageIntegrity_response": {
      "address": null,
      "messages": {
        "checkPackageIntegrity_response.message": {
          "description": "checkPackageIntegrity response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "validCRCs": {
                "type": "array",
                "items": {
                  "type": "boolean",
                  "x-parser-schema-id": "<anonymous-schema-19>"
                },
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "publicKeys": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-21>"
                },
                "x-parser-schema-id": "<anonymous-schema-20>"
              }
            },
            "x-parser-schema-id": "checkPackageIntegrity_response"
          },
          "x-parser-unique-object-id": "checkPackageIntegrity_response.message",
          "x-parser-message-name": "checkPackageIntegrity_response"
        }
      },
      "description": "Use this channel to receive checkPackageIntegrity responses as **checkPackageIntegrity_response** messages.\n",
      "x-parser-unique-object-id": "checkPackageIntegrity_response"
    },
    "checkPackageIntegrity_error": {
      "address": "checkPackageIntegrity_error",
      "messages": {
        "checkPackageIntegrity_error.message": {
          "description": "checkPackageIntegrity error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-26>"
                },
                "x-parser-schema-id": "<anonymous-schema-25>"
              }
            },
            "x-parser-schema-id": "checkPackageIntegrity_error"
          },
          "x-parser-unique-object-id": "checkPackageIntegrity_error.message",
          "x-parser-message-name": "checkPackageIntegrity_error"
        }
      },
      "description": "Use this channel to receive checkPackageIntegrity errors as **checkPackageIntegrity_error** messages.\n",
      "x-parser-unique-object-id": "checkPackageIntegrity_error"
    }
  },
  "operations": {
    "findPackage_request": {
      "action": "send",
      "channel": "$ref:$.channels.findPackage_request",
      "messages": [
        "$ref:$.channels.findPackage_request.messages.findPackage_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.findPackage_response"
      },
      "x-parser-unique-object-id": "findPackage_request"
    },
    "findPackage_response": {
      "action": "receive",
      "channel": "$ref:$.channels.findPackage_response",
      "messages": [
        "$ref:$.channels.findPackage_response.messages.findPackage_response.message"
      ],
      "x-parser-unique-object-id": "findPackage_response"
    },
    "findPackage_error": {
      "action": "receive",
      "channel": "$ref:$.channels.findPackage_error",
      "messages": [
        "$ref:$.channels.findPackage_error.messages.findPackage_error.message"
      ],
      "x-parser-unique-object-id": "findPackage_error"
    },
    "checkPackageIntegrity_request": {
      "action": "send",
      "channel": "$ref:$.channels.checkPackageIntegrity_request",
      "messages": [
        "$ref:$.channels.checkPackageIntegrity_request.messages.checkPackageIntegrity_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.checkPackageIntegrity_response"
      },
      "x-parser-unique-object-id": "checkPackageIntegrity_request"
    },
    "checkPackageIntegrity_response": {
      "action": "receive",
      "channel": "$ref:$.channels.checkPackageIntegrity_response",
      "messages": [
        "$ref:$.channels.checkPackageIntegrity_response.messages.checkPackageIntegrity_response.message"
      ],
      "x-parser-unique-object-id": "checkPackageIntegrity_response"
    },
    "checkPackageIntegrity_error": {
      "action": "receive",
      "channel": "$ref:$.channels.checkPackageIntegrity_error",
      "messages": [
        "$ref:$.channels.checkPackageIntegrity_error.messages.checkPackageIntegrity_error.message"
      ],
      "x-parser-unique-object-id": "checkPackageIntegrity_error"
    }
  },
  "components": {
    "schemas": {
      "findPackage_request": "$ref:$.channels.findPackage_request.messages.findPackage_request.message.payload",
      "findPackage_response": "$ref:$.channels.findPackage_response.messages.findPackage_response.message.payload",
      "findPackage_error": "$ref:$.channels.findPackage_error.messages.findPackage_error.message.payload",
      "checkPackageIntegrity_request": "$ref:$.channels.checkPackageIntegrity_request.messages.checkPackageIntegrity_request.message.payload",
      "checkPackageIntegrity_response": "$ref:$.channels.checkPackageIntegrity_response.messages.checkPackageIntegrity_response.message.payload",
      "checkPackageIntegrity_error": "$ref:$.channels.checkPackageIntegrity_error.messages.checkPackageIntegrity_error.message.payload"
    },
    "messages": {
      "findPackage_request": "$ref:$.channels.findPackage_request.messages.findPackage_request.message",
      "findPackage_response": "$ref:$.channels.findPackage_response.messages.findPackage_response.message",
      "findPackage_error": "$ref:$.channels.findPackage_error.messages.findPackage_error.message",
      "checkPackageIntegrity_request": "$ref:$.channels.checkPackageIntegrity_request.messages.checkPackageIntegrity_request.message",
      "checkPackageIntegrity_response": "$ref:$.channels.checkPackageIntegrity_response.messages.checkPackageIntegrity_response.message",
      "checkPackageIntegrity_error": "$ref:$.channels.checkPackageIntegrity_error.messages.checkPackageIntegrity_error.message"
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
  