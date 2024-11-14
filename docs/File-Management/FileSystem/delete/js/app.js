
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service delete API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the delete interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's delete interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_FileSystem_delete": {
      "address": "submit_FileSystem_delete",
      "messages": {
        "FileSystem.delete_submit.message": {
          "description": "FileSystem delete request submission",
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
                "format": "uri",
                "description": "The path field contains the path to the node to be deleted\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "force": {
                "type": "boolean",
                "description": "Force delete: true/false\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "FileSystem_delete_submit"
          },
          "x-parser-unique-object-id": "FileSystem.delete_submit.message",
          "x-parser-message-name": "FileSystem_delete_submit"
        }
      },
      "description": "Send a **FileSystem_delete_submit** message in this channel to receive a **FileSystem_delete_None** message over the **None_FileSystem_delete** channel.\n",
      "x-parser-unique-object-id": "submit_FileSystem_delete"
    },
    "error_FileSystem_delete": {
      "address": "error_FileSystem_delete",
      "messages": {
        "FileSystem.delete_error.message": {
          "description": "FileSystem delete error response",
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
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "PERMISSION_DENIED",
                  "INVALID_PATH",
                  "NODE_NOT_FOUND",
                  "UNKNOWN_NODE_TYPE",
                  "OTHER"
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
            "x-parser-schema-id": "FileSystem_delete_error"
          },
          "x-parser-unique-object-id": "FileSystem.delete_error.message",
          "x-parser-message-name": "FileSystem_delete_error"
        }
      },
      "description": "Use this channel to receive FileSystem delete errors as **FileSystem_delete_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_delete"
    }
  },
  "operations": {
    "FileSystem_delete_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_FileSystem_delete",
      "messages": [
        "$ref:$.channels.submit_FileSystem_delete.messages.FileSystem.delete_submit.message"
      ],
      "x-parser-unique-object-id": "FileSystem_delete_submit"
    },
    "FileSystem_delete_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_delete",
      "messages": [
        "$ref:$.channels.error_FileSystem_delete.messages.FileSystem.delete_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_delete_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_delete_submit": "$ref:$.channels.submit_FileSystem_delete.messages.FileSystem.delete_submit.message.payload",
      "FileSystem_delete_error": "$ref:$.channels.error_FileSystem_delete.messages.FileSystem.delete_error.message.payload"
    },
    "messages": {
      "FileSystem_delete_submit": "$ref:$.channels.submit_FileSystem_delete.messages.FileSystem.delete_submit.message",
      "FileSystem_delete_error": "$ref:$.channels.error_FileSystem_delete.messages.FileSystem.delete_error.message"
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
  