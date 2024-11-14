
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileTransfer Service cancelAll API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the cancelAll interaction of the FileTransfer Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileTransfer Service's cancelAll interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "error_FileTransfer_cancelAll": {
      "address": "error_FileTransfer_cancelAll",
      "messages": {
        "FileTransfer.cancelAll_error.message": {
          "description": "FileTransfer cancelAll error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "FileTransfer_cancelAll_error"
          },
          "x-parser-unique-object-id": "FileTransfer.cancelAll_error.message",
          "x-parser-message-name": "FileTransfer_cancelAll_error"
        }
      },
      "description": "Use this channel to receive FileTransfer cancelAll errors as **FileTransfer_cancelAll_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileTransfer_cancelAll"
    }
  },
  "operations": {
    "FileTransfer_cancelAll_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileTransfer_cancelAll",
      "messages": [
        "$ref:$.channels.error_FileTransfer_cancelAll.messages.FileTransfer.cancelAll_error.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_cancelAll_error"
    }
  },
  "components": {
    "schemas": {
      "FileTransfer_cancelAll_error": "$ref:$.channels.error_FileTransfer_cancelAll.messages.FileTransfer.cancelAll_error.message.payload"
    },
    "messages": {
      "FileTransfer_cancelAll_error": "$ref:$.channels.error_FileTransfer_cancelAll.messages.FileTransfer.cancelAll_error.message"
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
  