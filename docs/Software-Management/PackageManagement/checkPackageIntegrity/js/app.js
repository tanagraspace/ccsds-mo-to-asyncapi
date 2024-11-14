
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "PackageManagement Service checkPackageIntegrity API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the checkPackageIntegrity interaction of the PackageManagement Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the PackageManagement Service's checkPackageIntegrity interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_PackageManagement_checkPackageIntegrity": {
      "address": "request_PackageManagement_checkPackageIntegrity",
      "messages": {
        "PackageManagement.checkPackageIntegrity_request.message": {
          "description": "PackageManagement checkPackageIntegrity request submission",
          "payload": {
            "type": "object",
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
            "x-parser-schema-id": "PackageManagement_checkPackageIntegrity_request"
          },
          "x-parser-unique-object-id": "PackageManagement.checkPackageIntegrity_request.message",
          "x-parser-message-name": "PackageManagement_checkPackageIntegrity_request"
        }
      },
      "description": "Send a **PackageManagement_checkPackageIntegrity_request** message in this channel to receive a **PackageManagement_checkPackageIntegrity_response** message over the **response_PackageManagement_checkPackageIntegrity** channel.\n",
      "x-parser-unique-object-id": "request_PackageManagement_checkPackageIntegrity"
    },
    "response_PackageManagement_checkPackageIntegrity": {
      "address": "response_PackageManagement_checkPackageIntegrity",
      "messages": {
        "PackageManagement.checkPackageIntegrity_response.message": {
          "description": "PackageManagement checkPackageIntegrity update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "validCRCs": {
                "type": "array",
                "items": {
                  "type": "boolean",
                  "x-parser-schema-id": "<anonymous-schema-6>"
                },
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "publicKeys": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "PackageManagement_checkPackageIntegrity_response"
          },
          "x-parser-unique-object-id": "PackageManagement.checkPackageIntegrity_response.message",
          "x-parser-message-name": "PackageManagement_checkPackageIntegrity_response"
        }
      },
      "description": "Use this channel to receive PackageManagement checkPackageIntegrity responses as **PackageManagement_checkPackageIntegrity_response** messages.\n",
      "x-parser-unique-object-id": "response_PackageManagement_checkPackageIntegrity"
    },
    "error_PackageManagement_checkPackageIntegrity": {
      "address": "error_PackageManagement_checkPackageIntegrity",
      "messages": {
        "PackageManagement.checkPackageIntegrity_error.message": {
          "description": "PackageManagement checkPackageIntegrity error response",
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
            "x-parser-schema-id": "PackageManagement_checkPackageIntegrity_error"
          },
          "x-parser-unique-object-id": "PackageManagement.checkPackageIntegrity_error.message",
          "x-parser-message-name": "PackageManagement_checkPackageIntegrity_error"
        }
      },
      "description": "Use this channel to receive PackageManagement checkPackageIntegrity errors as **PackageManagement_checkPackageIntegrity_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_PackageManagement_checkPackageIntegrity"
    }
  },
  "operations": {
    "PackageManagement_checkPackageIntegrity_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_PackageManagement_checkPackageIntegrity",
      "messages": [
        "$ref:$.channels.request_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_request.message"
      ],
      "x-parser-unique-object-id": "PackageManagement_checkPackageIntegrity_request"
    },
    "PackageManagement_checkPackageIntegrity_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_PackageManagement_checkPackageIntegrity",
      "messages": [
        "$ref:$.channels.response_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_response.message"
      ],
      "x-parser-unique-object-id": "PackageManagement_checkPackageIntegrity_response"
    },
    "PackageManagement_checkPackageIntegrity_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_PackageManagement_checkPackageIntegrity",
      "messages": [
        "$ref:$.channels.error_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_error.message"
      ],
      "x-parser-unique-object-id": "PackageManagement_checkPackageIntegrity_error"
    }
  },
  "components": {
    "schemas": {
      "PackageManagement_checkPackageIntegrity_request": "$ref:$.channels.request_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_request.message.payload",
      "PackageManagement_checkPackageIntegrity_response": "$ref:$.channels.response_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_response.message.payload",
      "PackageManagement_checkPackageIntegrity_error": "$ref:$.channels.error_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_error.message.payload"
    },
    "messages": {
      "PackageManagement_checkPackageIntegrity_request": "$ref:$.channels.request_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_request.message",
      "PackageManagement_checkPackageIntegrity_response": "$ref:$.channels.response_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_response.message",
      "PackageManagement_checkPackageIntegrity_error": "$ref:$.channels.error_PackageManagement_checkPackageIntegrity.messages.PackageManagement.checkPackageIntegrity_error.message"
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
  