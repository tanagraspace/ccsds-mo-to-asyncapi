
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service copy API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the copy interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's copy interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_FileSystem_copy": {
      "address": "submit_FileSystem_copy",
      "messages": {
        "FileSystem.copy_submit.message": {
          "description": "FileSystem copy request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "source": {
                "type": "string",
                "format": "uri",
                "description": "Path to the node being copied.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "target": {
                "type": "string",
                "format": "uri",
                "description": "Target path of the copied node.\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "overwrite": {
                "type": "boolean",
                "description": "Force overwrite if the file or folder already exist.\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "FileSystem_copy_submit"
          },
          "x-parser-unique-object-id": "FileSystem.copy_submit.message",
          "x-parser-message-name": "FileSystem_copy_submit"
        }
      },
      "description": "Send a **FileSystem_copy_submit** message in this channel to receive a **FileSystem_copy_None** message over the **None_FileSystem_copy** channel.\n",
      "x-parser-unique-object-id": "submit_FileSystem_copy"
    },
    "error_FileSystem_copy": {
      "address": "error_FileSystem_copy",
      "messages": {
        "FileSystem.copy_error.message": {
          "description": "FileSystem copy error response",
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
                  "NODE_NOT_FOUND",
                  "FILESYSTEM_FULL",
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
            "x-parser-schema-id": "FileSystem_copy_error"
          },
          "x-parser-unique-object-id": "FileSystem.copy_error.message",
          "x-parser-message-name": "FileSystem_copy_error"
        }
      },
      "description": "Use this channel to receive FileSystem copy errors as **FileSystem_copy_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_copy"
    }
  },
  "operations": {
    "FileSystem_copy_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_FileSystem_copy",
      "messages": [
        "$ref:$.channels.submit_FileSystem_copy.messages.FileSystem.copy_submit.message"
      ],
      "x-parser-unique-object-id": "FileSystem_copy_submit"
    },
    "FileSystem_copy_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_copy",
      "messages": [
        "$ref:$.channels.error_FileSystem_copy.messages.FileSystem.copy_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_copy_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_copy_submit": "$ref:$.channels.submit_FileSystem_copy.messages.FileSystem.copy_submit.message.payload",
      "FileSystem_copy_error": "$ref:$.channels.error_FileSystem_copy.messages.FileSystem.copy_error.message.payload"
    },
    "messages": {
      "FileSystem_copy_submit": "$ref:$.channels.submit_FileSystem_copy.messages.FileSystem.copy_submit.message",
      "FileSystem_copy_error": "$ref:$.channels.error_FileSystem_copy.messages.FileSystem.copy_error.message"
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
  