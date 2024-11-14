
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "PackageManagement Service findPackage API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the findPackage interaction of the PackageManagement Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the PackageManagement Service's findPackage interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_PackageManagement_findPackage": {
      "address": "request_PackageManagement_findPackage",
      "messages": {
        "PackageManagement.findPackage_request.message": {
          "description": "PackageManagement findPackage request submission",
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
            "x-parser-schema-id": "PackageManagement_findPackage_request"
          },
          "x-parser-unique-object-id": "PackageManagement.findPackage_request.message",
          "x-parser-message-name": "PackageManagement_findPackage_request"
        }
      },
      "description": "Send a **PackageManagement_findPackage_request** message in this channel to receive a **PackageManagement_findPackage_response** message over the **response_PackageManagement_findPackage** channel.\n",
      "x-parser-unique-object-id": "request_PackageManagement_findPackage"
    },
    "response_PackageManagement_findPackage": {
      "address": "response_PackageManagement_findPackage",
      "messages": {
        "PackageManagement.findPackage_response.message": {
          "description": "PackageManagement findPackage update response",
          "payload": {
            "type": "object",
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
            "x-parser-schema-id": "PackageManagement_findPackage_response"
          },
          "x-parser-unique-object-id": "PackageManagement.findPackage_response.message",
          "x-parser-message-name": "PackageManagement_findPackage_response"
        }
      },
      "description": "Use this channel to receive PackageManagement findPackage responses as **PackageManagement_findPackage_response** messages.\n",
      "x-parser-unique-object-id": "response_PackageManagement_findPackage"
    },
    "error_PackageManagement_findPackage": {
      "address": "error_PackageManagement_findPackage",
      "messages": {
        "PackageManagement.findPackage_error.message": {
          "description": "PackageManagement findPackage error response",
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
            "x-parser-schema-id": "PackageManagement_findPackage_error"
          },
          "x-parser-unique-object-id": "PackageManagement.findPackage_error.message",
          "x-parser-message-name": "PackageManagement_findPackage_error"
        }
      },
      "description": "Use this channel to receive PackageManagement findPackage errors as **PackageManagement_findPackage_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_PackageManagement_findPackage"
    }
  },
  "operations": {
    "PackageManagement_findPackage_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_PackageManagement_findPackage",
      "messages": [
        "$ref:$.channels.request_PackageManagement_findPackage.messages.PackageManagement.findPackage_request.message"
      ],
      "x-parser-unique-object-id": "PackageManagement_findPackage_request"
    },
    "PackageManagement_findPackage_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_PackageManagement_findPackage",
      "messages": [
        "$ref:$.channels.response_PackageManagement_findPackage.messages.PackageManagement.findPackage_response.message"
      ],
      "x-parser-unique-object-id": "PackageManagement_findPackage_response"
    },
    "PackageManagement_findPackage_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_PackageManagement_findPackage",
      "messages": [
        "$ref:$.channels.error_PackageManagement_findPackage.messages.PackageManagement.findPackage_error.message"
      ],
      "x-parser-unique-object-id": "PackageManagement_findPackage_error"
    }
  },
  "components": {
    "schemas": {
      "PackageManagement_findPackage_request": "$ref:$.channels.request_PackageManagement_findPackage.messages.PackageManagement.findPackage_request.message.payload",
      "PackageManagement_findPackage_response": "$ref:$.channels.response_PackageManagement_findPackage.messages.PackageManagement.findPackage_response.message.payload",
      "PackageManagement_findPackage_error": "$ref:$.channels.error_PackageManagement_findPackage.messages.PackageManagement.findPackage_error.message.payload"
    },
    "messages": {
      "PackageManagement_findPackage_request": "$ref:$.channels.request_PackageManagement_findPackage.messages.PackageManagement.findPackage_request.message",
      "PackageManagement_findPackage_response": "$ref:$.channels.response_PackageManagement_findPackage.messages.PackageManagement.findPackage_response.message",
      "PackageManagement_findPackage_error": "$ref:$.channels.error_PackageManagement_findPackage.messages.PackageManagement.findPackage_error.message"
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
  