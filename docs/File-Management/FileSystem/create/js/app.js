
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service create API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the create interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's create interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_FileSystem_create": {
      "address": "submit_FileSystem_create",
      "messages": {
        "FileSystem.create_submit.message": {
          "description": "FileSystem create request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "type": {
                "description": "List of possible node types",
                "enum": [
                  "FILE",
                  "DIRECTORY"
                ],
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "The path field contains the logical path to where the file or directory is to be created.\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "overwrite": {
                "type": "boolean",
                "description": "Force overwrite if the file or directory already exists.\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "FileSystem_create_submit"
          },
          "x-parser-unique-object-id": "FileSystem.create_submit.message",
          "x-parser-message-name": "FileSystem_create_submit"
        }
      },
      "description": "Send a **FileSystem_create_submit** message in this channel to receive a **FileSystem_create_None** message over the **None_FileSystem_create** channel.\n",
      "x-parser-unique-object-id": "submit_FileSystem_create"
    },
    "error_FileSystem_create": {
      "address": "error_FileSystem_create",
      "messages": {
        "FileSystem.create_error.message": {
          "description": "FileSystem create error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "PERMISSION_DENIED",
                  "INVALID_PATH",
                  "NODE_EXISTS",
                  "UNKNOWN_NODE_TYPE",
                  "OTHER"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "x-parser-schema-id": "<anonymous-schema-8>"
              }
            },
            "x-parser-schema-id": "FileSystem_create_error"
          },
          "x-parser-unique-object-id": "FileSystem.create_error.message",
          "x-parser-message-name": "FileSystem_create_error"
        }
      },
      "description": "Use this channel to receive FileSystem create errors as **FileSystem_create_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_create"
    }
  },
  "operations": {
    "FileSystem_create_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_FileSystem_create",
      "messages": [
        "$ref:$.channels.submit_FileSystem_create.messages.FileSystem.create_submit.message"
      ],
      "x-parser-unique-object-id": "FileSystem_create_submit"
    },
    "FileSystem_create_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_create",
      "messages": [
        "$ref:$.channels.error_FileSystem_create.messages.FileSystem.create_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_create_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_create_submit": "$ref:$.channels.submit_FileSystem_create.messages.FileSystem.create_submit.message.payload",
      "FileSystem_create_error": "$ref:$.channels.error_FileSystem_create.messages.FileSystem.create_error.message.payload",
      "fm": {
        "file_system": {
          "NodeType": "$ref:$.channels.submit_FileSystem_create.messages.FileSystem.create_submit.message.payload.properties.type"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileSystem_create_submit": "$ref:$.channels.submit_FileSystem_create.messages.FileSystem.create_submit.message",
      "FileSystem_create_error": "$ref:$.channels.error_FileSystem_create.messages.FileSystem.create_error.message"
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
  