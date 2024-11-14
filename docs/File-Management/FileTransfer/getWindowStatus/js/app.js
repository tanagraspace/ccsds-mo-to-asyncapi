
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileTransfer Service getWindowStatus API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getWindowStatus interaction of the FileTransfer Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileTransfer Service's getWindowStatus interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_FileTransfer_getWindowStatus": {
      "address": "request_FileTransfer_getWindowStatus",
      "messages": {
        "FileTransfer.getWindowStatus_request.message": {
          "description": "FileTransfer getWindowStatus request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "entityId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "FileTransfer_getWindowStatus_request"
          },
          "x-parser-unique-object-id": "FileTransfer.getWindowStatus_request.message",
          "x-parser-message-name": "FileTransfer_getWindowStatus_request"
        }
      },
      "description": "Send a **FileTransfer_getWindowStatus_request** message in this channel to receive a **FileTransfer_getWindowStatus_response** message over the **response_FileTransfer_getWindowStatus** channel.\n",
      "x-parser-unique-object-id": "request_FileTransfer_getWindowStatus"
    },
    "response_FileTransfer_getWindowStatus": {
      "address": "response_FileTransfer_getWindowStatus",
      "messages": {
        "FileTransfer.getWindowStatus_response.message": {
          "description": "FileTransfer getWindowStatus update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "statusReporty": {
                "properties": {
                  "rxWindowOpen": {
                    "description": "Returns true if the receive window is open otherwise false.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "txWindowOpen": {
                    "description": "Returns true if the transmit window is open otherwise false.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "FileTransfer_getWindowStatus_response"
          },
          "x-parser-unique-object-id": "FileTransfer.getWindowStatus_response.message",
          "x-parser-message-name": "FileTransfer_getWindowStatus_response"
        }
      },
      "description": "Use this channel to receive FileTransfer getWindowStatus responses as **FileTransfer_getWindowStatus_response** messages.\n",
      "x-parser-unique-object-id": "response_FileTransfer_getWindowStatus"
    },
    "error_FileTransfer_getWindowStatus": {
      "address": "error_FileTransfer_getWindowStatus",
      "messages": {
        "FileTransfer.getWindowStatus_error.message": {
          "description": "FileTransfer getWindowStatus error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_ENTITY",
                  "CANNOT_GET_MIB_VALUE",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-11>"
                },
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "FileTransfer_getWindowStatus_error"
          },
          "x-parser-unique-object-id": "FileTransfer.getWindowStatus_error.message",
          "x-parser-message-name": "FileTransfer_getWindowStatus_error"
        }
      },
      "description": "Use this channel to receive FileTransfer getWindowStatus errors as **FileTransfer_getWindowStatus_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileTransfer_getWindowStatus"
    }
  },
  "operations": {
    "FileTransfer_getWindowStatus_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_FileTransfer_getWindowStatus",
      "messages": [
        "$ref:$.channels.request_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_request.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_getWindowStatus_request"
    },
    "FileTransfer_getWindowStatus_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_FileTransfer_getWindowStatus",
      "messages": [
        "$ref:$.channels.response_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_response.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_getWindowStatus_response"
    },
    "FileTransfer_getWindowStatus_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileTransfer_getWindowStatus",
      "messages": [
        "$ref:$.channels.error_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_error.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_getWindowStatus_error"
    }
  },
  "components": {
    "schemas": {
      "FileTransfer_getWindowStatus_request": "$ref:$.channels.request_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_request.message.payload",
      "FileTransfer_getWindowStatus_response": "$ref:$.channels.response_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_response.message.payload",
      "FileTransfer_getWindowStatus_error": "$ref:$.channels.error_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_error.message.payload",
      "fm": {
        "file_transfer": {
          "WindowStatusReport": "$ref:$.channels.response_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_response.message.payload.properties.statusReporty"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileTransfer_getWindowStatus_request": "$ref:$.channels.request_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_request.message",
      "FileTransfer_getWindowStatus_response": "$ref:$.channels.response_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_response.message",
      "FileTransfer_getWindowStatus_error": "$ref:$.channels.error_FileTransfer_getWindowStatus.messages.FileTransfer.getWindowStatus_error.message"
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
  