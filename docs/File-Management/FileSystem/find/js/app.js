
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service find API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the find interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's find interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "progress_FileSystem_find": {
      "address": "progress_FileSystem_find",
      "messages": {
        "FileSystem.find_progress.message": {
          "description": "FileSystem find request submission",
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
                "description": "The location from where the search will be done.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "toFile": {
                "type": "boolean",
                "description": "Set to true if the list should be written to a file. If toFile is true then the Update contails the path to the file with the list.\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "searchPattern": {
                "type": "string",
                "description": "Regular expression to be matched against files in the Directory. Only files that match will be returned. If null all files nodes will match.\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "FileSystem_find_progress"
          },
          "x-parser-unique-object-id": "FileSystem.find_progress.message",
          "x-parser-message-name": "FileSystem_find_progress"
        }
      },
      "description": "Send a **FileSystem_find_progress** message in this channel to receive a **FileSystem_find_update** message over the **update_FileSystem_find** channel.\n",
      "x-parser-unique-object-id": "progress_FileSystem_find"
    },
    "update_FileSystem_find": {
      "address": "update_FileSystem_find",
      "messages": {
        "FileSystem.find_update.message": {
          "description": "FileSystem find update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "nodes": {
                "properties": {
                  "lmTime": {
                    "description": "Last modified time in seconds. Settable: no",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "owner": {
                    "description": "The owner of the file",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "path": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "permissions": {
                    "description": "The node permissions. Settable: no",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "size": {
                    "description": "Size of the node in byte. Settable: no",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "type_": {
                    "description": "List of possible node types",
                    "enum": [
                      "FILE",
                      "DIRECTORY"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "FileSystem_find_update"
          },
          "x-parser-unique-object-id": "FileSystem.find_update.message",
          "x-parser-message-name": "FileSystem_find_update"
        }
      },
      "description": "Use this channel to receive FileSystem find responses as **FileSystem_find_update** messages.\n",
      "x-parser-unique-object-id": "update_FileSystem_find"
    },
    "response_FileSystem_find": {
      "address": "response_FileSystem_find",
      "messages": {
        "FileSystem.find_response.message": {
          "description": "FileSystem find update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "count": {
                "type": "integer",
                "format": "uint32",
                "description": "Number of matches\n",
                "x-parser-schema-id": "<anonymous-schema-14>"
              }
            },
            "x-parser-schema-id": "FileSystem_find_response"
          },
          "x-parser-unique-object-id": "FileSystem.find_response.message",
          "x-parser-message-name": "FileSystem_find_response"
        }
      },
      "description": "Use this channel to receive additional FileSystem find responses as **FileSystem_find_response** messages.\n",
      "x-parser-unique-object-id": "response_FileSystem_find"
    },
    "error_FileSystem_find": {
      "address": "error_FileSystem_find",
      "messages": {
        "FileSystem.find_error.message": {
          "description": "FileSystem find error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "PERMISSION_DENIED",
                  "INVALID_PATH",
                  "NODE_NOT_FOUND",
                  "NOT_A_DIRECTORY",
                  "IO_ERROR",
                  "OTHER"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-19>"
                },
                "x-parser-schema-id": "<anonymous-schema-18>"
              }
            },
            "x-parser-schema-id": "FileSystem_find_error"
          },
          "x-parser-unique-object-id": "FileSystem.find_error.message",
          "x-parser-message-name": "FileSystem_find_error"
        }
      },
      "description": "Use this channel to receive FileSystem find errors as **FileSystem_find_updateErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_find"
    }
  },
  "operations": {
    "FileSystem_find_progress": {
      "action": "send",
      "channel": "$ref:$.channels.progress_FileSystem_find",
      "messages": [
        "$ref:$.channels.progress_FileSystem_find.messages.FileSystem.find_progress.message"
      ],
      "x-parser-unique-object-id": "FileSystem_find_progress"
    },
    "FileSystem_find_update": {
      "action": "receive",
      "channel": "$ref:$.channels.update_FileSystem_find",
      "messages": [
        "$ref:$.channels.update_FileSystem_find.messages.FileSystem.find_update.message"
      ],
      "x-parser-unique-object-id": "FileSystem_find_update"
    },
    "FileSystem_find_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_FileSystem_find",
      "messages": [
        "$ref:$.channels.response_FileSystem_find.messages.FileSystem.find_response.message"
      ],
      "x-parser-unique-object-id": "FileSystem_find_response"
    },
    "FileSystem_find_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_find",
      "messages": [
        "$ref:$.channels.error_FileSystem_find.messages.FileSystem.find_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_find_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_find_progress": "$ref:$.channels.progress_FileSystem_find.messages.FileSystem.find_progress.message.payload",
      "FileSystem_find_update": "$ref:$.channels.update_FileSystem_find.messages.FileSystem.find_update.message.payload",
      "FileSystem_find_response": "$ref:$.channels.response_FileSystem_find.messages.FileSystem.find_response.message.payload",
      "FileSystem_find_error": "$ref:$.channels.error_FileSystem_find.messages.FileSystem.find_error.message.payload",
      "fm": {
        "file_system": {
          "Node": "$ref:$.channels.update_FileSystem_find.messages.FileSystem.find_update.message.payload.properties.nodes",
          "NodeType": "$ref:$.channels.update_FileSystem_find.messages.FileSystem.find_update.message.payload.properties.nodes.properties.type_"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileSystem_find_progress": "$ref:$.channels.progress_FileSystem_find.messages.FileSystem.find_progress.message",
      "FileSystem_find_update": "$ref:$.channels.update_FileSystem_find.messages.FileSystem.find_update.message",
      "FileSystem_find_response": "$ref:$.channels.response_FileSystem_find.messages.FileSystem.find_response.message",
      "FileSystem_find_error": "$ref:$.channels.error_FileSystem_find.messages.FileSystem.find_error.message"
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
  