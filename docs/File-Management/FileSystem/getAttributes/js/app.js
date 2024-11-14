
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service getAttributes API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getAttributes interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's getAttributes interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_FileSystem_getAttributes": {
      "address": "request_FileSystem_getAttributes",
      "messages": {
        "FileSystem.getAttributes_request.message": {
          "description": "FileSystem getAttributes request submission",
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
                "description": "The path of the node to be queried\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "FileSystem_getAttributes_request"
          },
          "x-parser-unique-object-id": "FileSystem.getAttributes_request.message",
          "x-parser-message-name": "FileSystem_getAttributes_request"
        }
      },
      "description": "Send a **FileSystem_getAttributes_request** message in this channel to receive a **FileSystem_getAttributes_response** message over the **response_FileSystem_getAttributes** channel.\n",
      "x-parser-unique-object-id": "request_FileSystem_getAttributes"
    },
    "response_FileSystem_getAttributes": {
      "address": "response_FileSystem_getAttributes",
      "messages": {
        "FileSystem.getAttributes_response.message": {
          "description": "FileSystem getAttributes update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "attributes": {
                "properties": {
                  "accessPermissions": {
                    "description": "Settable: yes",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-6>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "creationTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-8>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "lastAccessTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-10>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "lastChangeTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-12>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
                  "lastModificationTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-14>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "owner": {
                    "description": "Settable: yes",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-16>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "size": {
                    "description": "Size of the node in Kibibyte (1024 byte). Settable: no",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  },
                  "type_": {
                    "description": "List of possible node types",
                    "enum": [
                      "FILE",
                      "DIRECTORY"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-18>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "FileSystem_getAttributes_response"
          },
          "x-parser-unique-object-id": "FileSystem.getAttributes_response.message",
          "x-parser-message-name": "FileSystem_getAttributes_response"
        }
      },
      "description": "Use this channel to receive FileSystem getAttributes responses as **FileSystem_getAttributes_response** messages.\n",
      "x-parser-unique-object-id": "response_FileSystem_getAttributes"
    },
    "error_FileSystem_getAttributes": {
      "address": "error_FileSystem_getAttributes",
      "messages": {
        "FileSystem.getAttributes_error.message": {
          "description": "FileSystem getAttributes error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "PERMISSION_DENIED",
                  "INVALID_PATH",
                  "NODE_NOT_FOUND",
                  "OTHER"
                ],
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-23>"
                },
                "x-parser-schema-id": "<anonymous-schema-22>"
              }
            },
            "x-parser-schema-id": "FileSystem_getAttributes_error"
          },
          "x-parser-unique-object-id": "FileSystem.getAttributes_error.message",
          "x-parser-message-name": "FileSystem_getAttributes_error"
        }
      },
      "description": "Use this channel to receive FileSystem getAttributes errors as **FileSystem_getAttributes_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_getAttributes"
    }
  },
  "operations": {
    "FileSystem_getAttributes_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_FileSystem_getAttributes",
      "messages": [
        "$ref:$.channels.request_FileSystem_getAttributes.messages.FileSystem.getAttributes_request.message"
      ],
      "x-parser-unique-object-id": "FileSystem_getAttributes_request"
    },
    "FileSystem_getAttributes_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_FileSystem_getAttributes",
      "messages": [
        "$ref:$.channels.response_FileSystem_getAttributes.messages.FileSystem.getAttributes_response.message"
      ],
      "x-parser-unique-object-id": "FileSystem_getAttributes_response"
    },
    "FileSystem_getAttributes_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_getAttributes",
      "messages": [
        "$ref:$.channels.error_FileSystem_getAttributes.messages.FileSystem.getAttributes_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_getAttributes_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_getAttributes_request": "$ref:$.channels.request_FileSystem_getAttributes.messages.FileSystem.getAttributes_request.message.payload",
      "FileSystem_getAttributes_response": "$ref:$.channels.response_FileSystem_getAttributes.messages.FileSystem.getAttributes_response.message.payload",
      "FileSystem_getAttributes_error": "$ref:$.channels.error_FileSystem_getAttributes.messages.FileSystem.getAttributes_error.message.payload",
      "fm": {
        "file_system": {
          "NodeAttributes": "$ref:$.channels.response_FileSystem_getAttributes.messages.FileSystem.getAttributes_response.message.payload.properties.attributes",
          "NodeType": "$ref:$.channels.response_FileSystem_getAttributes.messages.FileSystem.getAttributes_response.message.payload.properties.attributes.properties.type_"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileSystem_getAttributes_request": "$ref:$.channels.request_FileSystem_getAttributes.messages.FileSystem.getAttributes_request.message",
      "FileSystem_getAttributes_response": "$ref:$.channels.response_FileSystem_getAttributes.messages.FileSystem.getAttributes_response.message",
      "FileSystem_getAttributes_error": "$ref:$.channels.error_FileSystem_getAttributes.messages.FileSystem.getAttributes_error.message"
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
  