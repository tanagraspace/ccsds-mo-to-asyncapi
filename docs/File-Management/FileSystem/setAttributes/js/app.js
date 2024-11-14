
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service setAttributes API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the setAttributes interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's setAttributes interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_FileSystem_setAttributes": {
      "address": "submit_FileSystem_setAttributes",
      "messages": {
        "FileSystem.setAttributes_submit.message": {
          "description": "FileSystem setAttributes request submission",
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
                "description": "Path to the node whose attributes will be set.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "attributes": {
                "properties": {
                  "accessPermissions": {
                    "description": "Settable: yes",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-5>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "creationTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "lastAccessTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-9>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "lastChangeTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-11>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "lastModificationTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-13>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "owner": {
                    "description": "Settable: yes",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-15>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "size": {
                    "description": "Size of the node in Kibibyte (1024 byte). Settable: no",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  },
                  "type_": {
                    "description": "List of possible node types",
                    "enum": [
                      "FILE",
                      "DIRECTORY"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "FileSystem_setAttributes_submit"
          },
          "x-parser-unique-object-id": "FileSystem.setAttributes_submit.message",
          "x-parser-message-name": "FileSystem_setAttributes_submit"
        }
      },
      "description": "Send a **FileSystem_setAttributes_submit** message in this channel to receive a **FileSystem_setAttributes_None** message over the **None_FileSystem_setAttributes** channel.\n",
      "x-parser-unique-object-id": "submit_FileSystem_setAttributes"
    },
    "error_FileSystem_setAttributes": {
      "address": "error_FileSystem_setAttributes",
      "messages": {
        "FileSystem.setAttributes_error.message": {
          "description": "FileSystem setAttributes error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "PERMISSION_DENIED",
                  "INVALID_PATH",
                  "NODE_NOT_FOUND",
                  "INVALID_ATTRIBUTE",
                  "OTHER"
                ],
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-22>"
                },
                "x-parser-schema-id": "<anonymous-schema-21>"
              }
            },
            "x-parser-schema-id": "FileSystem_setAttributes_error"
          },
          "x-parser-unique-object-id": "FileSystem.setAttributes_error.message",
          "x-parser-message-name": "FileSystem_setAttributes_error"
        }
      },
      "description": "Use this channel to receive FileSystem setAttributes errors as **FileSystem_setAttributes_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_setAttributes"
    }
  },
  "operations": {
    "FileSystem_setAttributes_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_FileSystem_setAttributes",
      "messages": [
        "$ref:$.channels.submit_FileSystem_setAttributes.messages.FileSystem.setAttributes_submit.message"
      ],
      "x-parser-unique-object-id": "FileSystem_setAttributes_submit"
    },
    "FileSystem_setAttributes_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_setAttributes",
      "messages": [
        "$ref:$.channels.error_FileSystem_setAttributes.messages.FileSystem.setAttributes_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_setAttributes_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_setAttributes_submit": "$ref:$.channels.submit_FileSystem_setAttributes.messages.FileSystem.setAttributes_submit.message.payload",
      "FileSystem_setAttributes_error": "$ref:$.channels.error_FileSystem_setAttributes.messages.FileSystem.setAttributes_error.message.payload",
      "fm": {
        "file_system": {
          "NodeAttributes": "$ref:$.channels.submit_FileSystem_setAttributes.messages.FileSystem.setAttributes_submit.message.payload.properties.attributes",
          "NodeType": "$ref:$.channels.submit_FileSystem_setAttributes.messages.FileSystem.setAttributes_submit.message.payload.properties.attributes.properties.type_"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileSystem_setAttributes_submit": "$ref:$.channels.submit_FileSystem_setAttributes.messages.FileSystem.setAttributes_submit.message",
      "FileSystem_setAttributes_error": "$ref:$.channels.error_FileSystem_setAttributes.messages.FileSystem.setAttributes_error.message"
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
  