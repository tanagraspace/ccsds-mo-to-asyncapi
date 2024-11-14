
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileTransfer Service resumeAll API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the resumeAll interaction of the FileTransfer Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileTransfer Service's resumeAll interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_FileTransfer_resumeAll": {
      "address": "submit_FileTransfer_resumeAll",
      "messages": {
        "FileTransfer.resumeAll_submit.message": {
          "description": "FileTransfer resumeAll request submission",
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
              },
              "window": {
                "description": "This enumeration represents the communication windows of a file transfer entity. It should be noted that the reception/transmission is from the point of view of the entity being addressed.",
                "enum": [
                  "TX_WINDOW",
                  "RX_WINDOW",
                  "BOTH_WINDOW"
                ],
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "FileTransfer_resumeAll_submit"
          },
          "x-parser-unique-object-id": "FileTransfer.resumeAll_submit.message",
          "x-parser-message-name": "FileTransfer_resumeAll_submit"
        }
      },
      "description": "Send a **FileTransfer_resumeAll_submit** message in this channel to receive a **FileTransfer_resumeAll_None** message over the **None_FileTransfer_resumeAll** channel.\n",
      "x-parser-unique-object-id": "submit_FileTransfer_resumeAll"
    },
    "error_FileTransfer_resumeAll": {
      "address": "error_FileTransfer_resumeAll",
      "messages": {
        "FileTransfer.resumeAll_error.message": {
          "description": "FileTransfer resumeAll error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_ENTITY",
                  "CANNOT_SET_MIB_VALUE",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "FileTransfer_resumeAll_error"
          },
          "x-parser-unique-object-id": "FileTransfer.resumeAll_error.message",
          "x-parser-message-name": "FileTransfer_resumeAll_error"
        }
      },
      "description": "Use this channel to receive FileTransfer resumeAll errors as **FileTransfer_resumeAll_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileTransfer_resumeAll"
    }
  },
  "operations": {
    "FileTransfer_resumeAll_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_FileTransfer_resumeAll",
      "messages": [
        "$ref:$.channels.submit_FileTransfer_resumeAll.messages.FileTransfer.resumeAll_submit.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_resumeAll_submit"
    },
    "FileTransfer_resumeAll_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileTransfer_resumeAll",
      "messages": [
        "$ref:$.channels.error_FileTransfer_resumeAll.messages.FileTransfer.resumeAll_error.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_resumeAll_error"
    }
  },
  "components": {
    "schemas": {
      "FileTransfer_resumeAll_submit": "$ref:$.channels.submit_FileTransfer_resumeAll.messages.FileTransfer.resumeAll_submit.message.payload",
      "FileTransfer_resumeAll_error": "$ref:$.channels.error_FileTransfer_resumeAll.messages.FileTransfer.resumeAll_error.message.payload",
      "fm": {
        "file_transfer": {
          "FileTransferWindow": "$ref:$.channels.submit_FileTransfer_resumeAll.messages.FileTransfer.resumeAll_submit.message.payload.properties.window"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileTransfer_resumeAll_submit": "$ref:$.channels.submit_FileTransfer_resumeAll.messages.FileTransfer.resumeAll_submit.message",
      "FileTransfer_resumeAll_error": "$ref:$.channels.error_FileTransfer_resumeAll.messages.FileTransfer.resumeAll_error.message"
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
  