
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service truncate API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the truncate interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's truncate interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_FileSystem_truncate": {
      "address": "submit_FileSystem_truncate",
      "messages": {
        "FileSystem.truncate_submit.message": {
          "description": "FileSystem truncate request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "path": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "FileSystem_truncate_submit"
          },
          "x-parser-unique-object-id": "FileSystem.truncate_submit.message",
          "x-parser-message-name": "FileSystem_truncate_submit"
        }
      },
      "description": "Send a **FileSystem_truncate_submit** message in this channel to receive a **FileSystem_truncate_None** message over the **None_FileSystem_truncate** channel.\n",
      "x-parser-unique-object-id": "submit_FileSystem_truncate"
    },
    "error_FileSystem_truncate": {
      "address": "error_FileSystem_truncate",
      "messages": {
        "FileSystem.truncate_error.message": {
          "description": "FileSystem truncate error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "PERMISSION_DENIED",
                  "INVALID_PATH",
                  "NODE_NOT_FOUND",
                  "NOT_A_FILE",
                  "IO_ERROR",
                  "OTHER"
                ],
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "FileSystem_truncate_error"
          },
          "x-parser-unique-object-id": "FileSystem.truncate_error.message",
          "x-parser-message-name": "FileSystem_truncate_error"
        }
      },
      "description": "Use this channel to receive FileSystem truncate errors as **FileSystem_truncate_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_truncate"
    }
  },
  "operations": {
    "FileSystem_truncate_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_FileSystem_truncate",
      "messages": [
        "$ref:$.channels.submit_FileSystem_truncate.messages.FileSystem.truncate_submit.message"
      ],
      "x-parser-unique-object-id": "FileSystem_truncate_submit"
    },
    "FileSystem_truncate_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_truncate",
      "messages": [
        "$ref:$.channels.error_FileSystem_truncate.messages.FileSystem.truncate_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_truncate_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_truncate_submit": "$ref:$.channels.submit_FileSystem_truncate.messages.FileSystem.truncate_submit.message.payload",
      "FileSystem_truncate_error": "$ref:$.channels.error_FileSystem_truncate.messages.FileSystem.truncate_error.message.payload"
    },
    "messages": {
      "FileSystem_truncate_submit": "$ref:$.channels.submit_FileSystem_truncate.messages.FileSystem.truncate_submit.message",
      "FileSystem_truncate_error": "$ref:$.channels.error_FileSystem_truncate.messages.FileSystem.truncate_error.message"
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
  