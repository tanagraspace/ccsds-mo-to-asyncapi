
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service list API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the list interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's list interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_FileSystem_list": {
      "address": "request_FileSystem_list",
      "messages": {
        "FileSystem.list_request.message": {
          "description": "FileSystem list request submission",
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
              },
              "toFile": {
                "type": "boolean",
                "description": "Set to true if the list should be written to a file. If toFile is true then the Response contails the path to the file with the list.\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "nameRegexFilter": {
                "type": "string",
                "description": "Name filter to be applied. All files and folders that pass the filter will be added to the list.\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "lastModifiedTimeFilter": {
                "type": "number",
                "format": "uint64",
                "description": "Time filters to be applied. All files and folders with last modified time larger than or equal to the filter will be added to the list.\n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "recursive": {
                "type": "boolean",
                "description": "Set to true to do a recursive list\n",
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "FileSystem_list_request"
          },
          "x-parser-unique-object-id": "FileSystem.list_request.message",
          "x-parser-message-name": "FileSystem_list_request"
        }
      },
      "description": "Send a **FileSystem_list_request** message in this channel to receive a **FileSystem_list_response** message over the **response_FileSystem_list** channel.\n",
      "x-parser-unique-object-id": "request_FileSystem_list"
    },
    "response_FileSystem_list": {
      "address": "response_FileSystem_list",
      "messages": {
        "FileSystem.list_response.message": {
          "description": "FileSystem list update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "nodes": {
                "properties": {
                  "lmTime": {
                    "description": "Last modified time in seconds. Settable: no",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "owner": {
                    "description": "The owner of the file",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "path": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "permissions": {
                    "description": "The node permissions. Settable: no",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "size": {
                    "description": "Size of the node in byte. Settable: no",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "type_": {
                    "description": "List of possible node types",
                    "enum": [
                      "FILE",
                      "DIRECTORY"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-8>"
              }
            },
            "x-parser-schema-id": "FileSystem_list_response"
          },
          "x-parser-unique-object-id": "FileSystem.list_response.message",
          "x-parser-message-name": "FileSystem_list_response"
        }
      },
      "description": "Use this channel to receive FileSystem list responses as **FileSystem_list_response** messages.\n",
      "x-parser-unique-object-id": "response_FileSystem_list"
    },
    "error_FileSystem_list": {
      "address": "error_FileSystem_list",
      "messages": {
        "FileSystem.list_error.message": {
          "description": "FileSystem list error response",
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
            "x-parser-schema-id": "FileSystem_list_error"
          },
          "x-parser-unique-object-id": "FileSystem.list_error.message",
          "x-parser-message-name": "FileSystem_list_error"
        }
      },
      "description": "Use this channel to receive FileSystem list errors as **FileSystem_list_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_list"
    }
  },
  "operations": {
    "FileSystem_list_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_FileSystem_list",
      "messages": [
        "$ref:$.channels.request_FileSystem_list.messages.FileSystem.list_request.message"
      ],
      "x-parser-unique-object-id": "FileSystem_list_request"
    },
    "FileSystem_list_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_FileSystem_list",
      "messages": [
        "$ref:$.channels.response_FileSystem_list.messages.FileSystem.list_response.message"
      ],
      "x-parser-unique-object-id": "FileSystem_list_response"
    },
    "FileSystem_list_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_list",
      "messages": [
        "$ref:$.channels.error_FileSystem_list.messages.FileSystem.list_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_list_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_list_request": "$ref:$.channels.request_FileSystem_list.messages.FileSystem.list_request.message.payload",
      "FileSystem_list_response": "$ref:$.channels.response_FileSystem_list.messages.FileSystem.list_response.message.payload",
      "FileSystem_list_error": "$ref:$.channels.error_FileSystem_list.messages.FileSystem.list_error.message.payload",
      "fm": {
        "file_system": {
          "Node": "$ref:$.channels.response_FileSystem_list.messages.FileSystem.list_response.message.payload.properties.nodes",
          "NodeType": "$ref:$.channels.response_FileSystem_list.messages.FileSystem.list_response.message.payload.properties.nodes.properties.type_"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileSystem_list_request": "$ref:$.channels.request_FileSystem_list.messages.FileSystem.list_request.message",
      "FileSystem_list_response": "$ref:$.channels.response_FileSystem_list.messages.FileSystem.list_response.message",
      "FileSystem_list_error": "$ref:$.channels.error_FileSystem_list.messages.FileSystem.list_error.message"
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
  