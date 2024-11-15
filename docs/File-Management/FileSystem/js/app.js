
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "create_submit": {
      "address": "create_submit",
      "messages": {
        "create_submit.message": {
          "description": "create request",
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
            "x-parser-schema-id": "create_submit"
          },
          "x-parser-unique-object-id": "create_submit.message",
          "x-parser-message-name": "create_submit"
        }
      },
      "description": "Send a **create_submit** message in this channel.\n",
      "x-parser-unique-object-id": "create_submit"
    },
    "create_error": {
      "address": "create_error",
      "messages": {
        "create_error.message": {
          "description": "create error response",
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
            "x-parser-schema-id": "create_error"
          },
          "x-parser-unique-object-id": "create_error.message",
          "x-parser-message-name": "create_error"
        }
      },
      "description": "Use this channel to receive create errors as **create_error** messages.\n",
      "x-parser-unique-object-id": "create_error"
    },
    "move_submit": {
      "address": "move_submit",
      "messages": {
        "move_submit.message": {
          "description": "move request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "source": {
                "type": "string",
                "format": "uri",
                "description": "Path to the node being moved.\n",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "target": {
                "type": "string",
                "format": "uri",
                "description": "Target name\n",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "overwrite": {
                "type": "boolean",
                "description": "Force overwrite if the file or folder already exist.\n",
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            },
            "x-parser-schema-id": "move_submit"
          },
          "x-parser-unique-object-id": "move_submit.message",
          "x-parser-message-name": "move_submit"
        }
      },
      "description": "Send a **move_submit** message in this channel.\n",
      "x-parser-unique-object-id": "move_submit"
    },
    "move_error": {
      "address": "move_error",
      "messages": {
        "move_error.message": {
          "description": "move error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-15>"
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
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-18>"
                },
                "x-parser-schema-id": "<anonymous-schema-17>"
              }
            },
            "x-parser-schema-id": "move_error"
          },
          "x-parser-unique-object-id": "move_error.message",
          "x-parser-message-name": "move_error"
        }
      },
      "description": "Use this channel to receive move errors as **move_error** messages.\n",
      "x-parser-unique-object-id": "move_error"
    },
    "delete_submit": {
      "address": "delete_submit",
      "messages": {
        "delete_submit.message": {
          "description": "delete request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "The path field contains the path to the node to be deleted\n",
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "force": {
                "type": "boolean",
                "description": "Force delete: true/false\n",
                "x-parser-schema-id": "<anonymous-schema-21>"
              }
            },
            "x-parser-schema-id": "delete_submit"
          },
          "x-parser-unique-object-id": "delete_submit.message",
          "x-parser-message-name": "delete_submit"
        }
      },
      "description": "Send a **delete_submit** message in this channel.\n",
      "x-parser-unique-object-id": "delete_submit"
    },
    "delete_error": {
      "address": "delete_error",
      "messages": {
        "delete_error.message": {
          "description": "delete error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-23>"
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
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-26>"
                },
                "x-parser-schema-id": "<anonymous-schema-25>"
              }
            },
            "x-parser-schema-id": "delete_error"
          },
          "x-parser-unique-object-id": "delete_error.message",
          "x-parser-message-name": "delete_error"
        }
      },
      "description": "Use this channel to receive delete errors as **delete_error** messages.\n",
      "x-parser-unique-object-id": "delete_error"
    },
    "copy_submit": {
      "address": "copy_submit",
      "messages": {
        "copy_submit.message": {
          "description": "copy request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              "source": {
                "type": "string",
                "format": "uri",
                "description": "Path to the node being copied.\n",
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "target": {
                "type": "string",
                "format": "uri",
                "description": "Target path of the copied node.\n",
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "overwrite": {
                "type": "boolean",
                "description": "Force overwrite if the file or folder already exist.\n",
                "x-parser-schema-id": "<anonymous-schema-30>"
              }
            },
            "x-parser-schema-id": "copy_submit"
          },
          "x-parser-unique-object-id": "copy_submit.message",
          "x-parser-message-name": "copy_submit"
        }
      },
      "description": "Send a **copy_submit** message in this channel.\n",
      "x-parser-unique-object-id": "copy_submit"
    },
    "copy_error": {
      "address": "copy_error",
      "messages": {
        "copy_error.message": {
          "description": "copy error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-31>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-32>"
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
                "x-parser-schema-id": "<anonymous-schema-33>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-35>"
                },
                "x-parser-schema-id": "<anonymous-schema-34>"
              }
            },
            "x-parser-schema-id": "copy_error"
          },
          "x-parser-unique-object-id": "copy_error.message",
          "x-parser-message-name": "copy_error"
        }
      },
      "description": "Use this channel to receive copy errors as **copy_error** messages.\n",
      "x-parser-unique-object-id": "copy_error"
    },
    "getAttributes_request": {
      "address": "getAttributes_request",
      "messages": {
        "getAttributes_request.message": {
          "description": "getAttributes request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "The path of the node to be queried\n",
                "x-parser-schema-id": "<anonymous-schema-37>"
              }
            },
            "x-parser-schema-id": "getAttributes_request"
          },
          "x-parser-unique-object-id": "getAttributes_request.message",
          "x-parser-message-name": "getAttributes_request"
        }
      },
      "description": "Send a **getAttributes_request** message in this channel to receive a **getAttributes_response** message over the **getAttributes_response** channel.\n",
      "x-parser-unique-object-id": "getAttributes_request"
    },
    "getAttributes_response": {
      "address": "getAttributes_response",
      "messages": {
        "getAttributes_response.message": {
          "description": "getAttributes response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-38>"
              },
              "attributes": {
                "properties": {
                  "accessPermissions": {
                    "description": "Settable: yes",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-41>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-40>"
                  },
                  "creationTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-43>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-42>"
                  },
                  "lastAccessTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-45>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-44>"
                  },
                  "lastChangeTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-47>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-46>"
                  },
                  "lastModificationTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-49>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-48>"
                  },
                  "owner": {
                    "description": "Settable: yes",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-51>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-50>"
                  },
                  "size": {
                    "description": "Size of the node in Kibibyte (1024 byte). Settable: no",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-52>"
                  },
                  "type_": "$ref:$.channels.create_submit.messages.create_submit.message.payload.properties.type"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-39>"
              }
            },
            "x-parser-schema-id": "getAttributes_response"
          },
          "x-parser-unique-object-id": "getAttributes_response.message",
          "x-parser-message-name": "getAttributes_response"
        }
      },
      "description": "Use this channel to receive getAttributes responses as **getAttributes_response** messages.\n",
      "x-parser-unique-object-id": "getAttributes_response"
    },
    "getAttributes_error": {
      "address": "getAttributes_error",
      "messages": {
        "getAttributes_error.message": {
          "description": "getAttributes error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-53>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-54>"
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
                "x-parser-schema-id": "<anonymous-schema-55>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-57>"
                },
                "x-parser-schema-id": "<anonymous-schema-56>"
              }
            },
            "x-parser-schema-id": "getAttributes_error"
          },
          "x-parser-unique-object-id": "getAttributes_error.message",
          "x-parser-message-name": "getAttributes_error"
        }
      },
      "description": "Use this channel to receive getAttributes errors as **getAttributes_error** messages.\n",
      "x-parser-unique-object-id": "getAttributes_error"
    },
    "setAttributes_submit": {
      "address": "setAttributes_submit",
      "messages": {
        "setAttributes_submit.message": {
          "description": "setAttributes request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-58>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "Path to the node whose attributes will be set.\n",
                "x-parser-schema-id": "<anonymous-schema-59>"
              },
              "attributes": "$ref:$.channels.getAttributes_response.messages.getAttributes_response.message.payload.properties.attributes"
            },
            "x-parser-schema-id": "setAttributes_submit"
          },
          "x-parser-unique-object-id": "setAttributes_submit.message",
          "x-parser-message-name": "setAttributes_submit"
        }
      },
      "description": "Send a **setAttributes_submit** message in this channel.\n",
      "x-parser-unique-object-id": "setAttributes_submit"
    },
    "setAttributes_error": {
      "address": "setAttributes_error",
      "messages": {
        "setAttributes_error.message": {
          "description": "setAttributes error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-60>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-61>"
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
                "x-parser-schema-id": "<anonymous-schema-62>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-64>"
                },
                "x-parser-schema-id": "<anonymous-schema-63>"
              }
            },
            "x-parser-schema-id": "setAttributes_error"
          },
          "x-parser-unique-object-id": "setAttributes_error.message",
          "x-parser-message-name": "setAttributes_error"
        }
      },
      "description": "Use this channel to receive setAttributes errors as **setAttributes_error** messages.\n",
      "x-parser-unique-object-id": "setAttributes_error"
    },
    "list_request": {
      "address": "list_request",
      "messages": {
        "list_request.message": {
          "description": "list request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-65>"
              },
              "path": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-66>"
              },
              "toFile": {
                "type": "boolean",
                "description": "Set to true if the list should be written to a file. If toFile is true then the Response contails the path to the file with the list.\n",
                "x-parser-schema-id": "<anonymous-schema-67>"
              },
              "nameRegexFilter": {
                "type": "string",
                "description": "Name filter to be applied. All files and folders that pass the filter will be added to the list.\n",
                "x-parser-schema-id": "<anonymous-schema-68>"
              },
              "lastModifiedTimeFilter": {
                "type": "number",
                "format": "uint64",
                "description": "Time filters to be applied. All files and folders with last modified time larger than or equal to the filter will be added to the list.\n",
                "x-parser-schema-id": "<anonymous-schema-69>"
              },
              "recursive": {
                "type": "boolean",
                "description": "Set to true to do a recursive list\n",
                "x-parser-schema-id": "<anonymous-schema-70>"
              }
            },
            "x-parser-schema-id": "list_request"
          },
          "x-parser-unique-object-id": "list_request.message",
          "x-parser-message-name": "list_request"
        }
      },
      "description": "Send a **list_request** message in this channel to receive a **list_response** message over the **list_response** channel.\n",
      "x-parser-unique-object-id": "list_request"
    },
    "list_response": {
      "address": "list_response",
      "messages": {
        "list_response.message": {
          "description": "list response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-71>"
              },
              "nodes": {
                "properties": {
                  "lmTime": {
                    "description": "Last modified time in seconds. Settable: no",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-73>"
                  },
                  "owner": {
                    "description": "The owner of the file",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-74>"
                  },
                  "path": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-75>"
                  },
                  "permissions": {
                    "description": "The node permissions. Settable: no",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-76>"
                  },
                  "size": {
                    "description": "Size of the node in byte. Settable: no",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-77>"
                  },
                  "type_": "$ref:$.channels.create_submit.messages.create_submit.message.payload.properties.type"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-72>"
              }
            },
            "x-parser-schema-id": "list_response"
          },
          "x-parser-unique-object-id": "list_response.message",
          "x-parser-message-name": "list_response"
        }
      },
      "description": "Use this channel to receive list responses as **list_response** messages.\n",
      "x-parser-unique-object-id": "list_response"
    },
    "list_error": {
      "address": "list_error",
      "messages": {
        "list_error.message": {
          "description": "list error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-78>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-79>"
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
                "x-parser-schema-id": "<anonymous-schema-80>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-82>"
                },
                "x-parser-schema-id": "<anonymous-schema-81>"
              }
            },
            "x-parser-schema-id": "list_error"
          },
          "x-parser-unique-object-id": "list_error.message",
          "x-parser-message-name": "list_error"
        }
      },
      "description": "Use this channel to receive list errors as **list_error** messages.\n",
      "x-parser-unique-object-id": "list_error"
    },
    "find_progress": {
      "address": "find_progress",
      "messages": {
        "find_progress.message": {
          "description": "find request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-83>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "The location from where the search will be done.\n",
                "x-parser-schema-id": "<anonymous-schema-84>"
              },
              "toFile": {
                "type": "boolean",
                "description": "Set to true if the list should be written to a file. If toFile is true then the Update contails the path to the file with the list.\n",
                "x-parser-schema-id": "<anonymous-schema-85>"
              },
              "searchPattern": {
                "type": "string",
                "description": "Regular expression to be matched against files in the Directory. Only files that match will be returned. If null all files nodes will match.\n",
                "x-parser-schema-id": "<anonymous-schema-86>"
              }
            },
            "x-parser-schema-id": "find_progress"
          },
          "x-parser-unique-object-id": "find_progress.message",
          "x-parser-message-name": "find_progress"
        }
      },
      "description": "Send a **find_progress** message in this channel to receive a **find_update** message over the **find_update** channel.\n",
      "x-parser-unique-object-id": "find_progress"
    },
    "find_update": {
      "address": "find_update",
      "messages": {
        "find_update.message": {
          "description": "find response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-87>"
              },
              "nodes": "$ref:$.channels.list_response.messages.list_response.message.payload.properties.nodes"
            },
            "x-parser-schema-id": "find_update"
          },
          "x-parser-unique-object-id": "find_update.message",
          "x-parser-message-name": "find_update"
        }
      },
      "description": "Use this channel to receive find responses as **find_update** messages.\n",
      "x-parser-unique-object-id": "find_update"
    },
    "find_response": {
      "address": "find_response",
      "messages": {
        "find_response.message": {
          "description": "find update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-88>"
              },
              "count": {
                "type": "integer",
                "format": "uint32",
                "description": "Number of matches\n",
                "x-parser-schema-id": "<anonymous-schema-89>"
              }
            },
            "x-parser-schema-id": "find_response"
          },
          "x-parser-unique-object-id": "find_response.message",
          "x-parser-message-name": "find_response"
        }
      },
      "description": "Use this channel to receive additional find responses as **find_response** messages.\n",
      "x-parser-unique-object-id": "find_response"
    },
    "find_error": {
      "address": "find_error",
      "messages": {
        "find_error.message": {
          "description": "find error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-90>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-91>"
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
                "x-parser-schema-id": "<anonymous-schema-92>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-94>"
                },
                "x-parser-schema-id": "<anonymous-schema-93>"
              }
            },
            "x-parser-schema-id": "find_error"
          },
          "x-parser-unique-object-id": "find_error.message",
          "x-parser-message-name": "find_error"
        }
      },
      "description": "Use this channel to receive find errors as **find_error** messages.\n",
      "x-parser-unique-object-id": "find_error"
    },
    "append_request": {
      "address": "append_request",
      "messages": {
        "append_request.message": {
          "description": "append request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-95>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "File to which the data shall be appended to\n",
                "x-parser-schema-id": "<anonymous-schema-96>"
              },
              "data": {
                "type": "string",
                "format": "binary",
                "description": "Data to be appended to file\n",
                "x-parser-schema-id": "<anonymous-schema-97>"
              }
            },
            "x-parser-schema-id": "append_request"
          },
          "x-parser-unique-object-id": "append_request.message",
          "x-parser-message-name": "append_request"
        }
      },
      "description": "Send a **append_request** message in this channel to receive a **append_response** message over the **append_response** channel.\n",
      "x-parser-unique-object-id": "append_request"
    },
    "append_response": {
      "address": "append_response",
      "messages": {
        "append_response.message": {
          "description": "append response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-98>"
              },
              "size": {
                "type": "integer",
                "format": "uint32",
                "description": "New total file size\n",
                "x-parser-schema-id": "<anonymous-schema-99>"
              }
            },
            "x-parser-schema-id": "append_response"
          },
          "x-parser-unique-object-id": "append_response.message",
          "x-parser-message-name": "append_response"
        }
      },
      "description": "Use this channel to receive append responses as **append_response** messages.\n",
      "x-parser-unique-object-id": "append_response"
    },
    "append_error": {
      "address": "append_error",
      "messages": {
        "append_error.message": {
          "description": "append error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-100>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-101>"
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
                "x-parser-schema-id": "<anonymous-schema-102>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-104>"
                },
                "x-parser-schema-id": "<anonymous-schema-103>"
              }
            },
            "x-parser-schema-id": "append_error"
          },
          "x-parser-unique-object-id": "append_error.message",
          "x-parser-message-name": "append_error"
        }
      },
      "description": "Use this channel to receive append errors as **append_error** messages.\n",
      "x-parser-unique-object-id": "append_error"
    },
    "truncate_submit": {
      "address": "truncate_submit",
      "messages": {
        "truncate_submit.message": {
          "description": "truncate request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-105>"
              },
              "path": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-106>"
              }
            },
            "x-parser-schema-id": "truncate_submit"
          },
          "x-parser-unique-object-id": "truncate_submit.message",
          "x-parser-message-name": "truncate_submit"
        }
      },
      "description": "Send a **truncate_submit** message in this channel.\n",
      "x-parser-unique-object-id": "truncate_submit"
    },
    "truncate_error": {
      "address": "truncate_error",
      "messages": {
        "truncate_error.message": {
          "description": "truncate error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-107>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-108>"
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
                "x-parser-schema-id": "<anonymous-schema-109>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-111>"
                },
                "x-parser-schema-id": "<anonymous-schema-110>"
              }
            },
            "x-parser-schema-id": "truncate_error"
          },
          "x-parser-unique-object-id": "truncate_error.message",
          "x-parser-message-name": "truncate_error"
        }
      },
      "description": "Use this channel to receive truncate errors as **truncate_error** messages.\n",
      "x-parser-unique-object-id": "truncate_error"
    },
    "read_request": {
      "address": "read_request",
      "messages": {
        "read_request.message": {
          "description": "read request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-112>"
              },
              "path": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-113>"
              },
              "offset": {
                "type": "integer",
                "format": "uint32",
                "description": "Offset from the start of the file in byte. If Null then zero is assumed\n",
                "x-parser-schema-id": "<anonymous-schema-114>"
              },
              "size": {
                "type": "integer",
                "format": "uint32",
                "description": "Number of byte to read. If Null then read the whole file\n",
                "x-parser-schema-id": "<anonymous-schema-115>"
              }
            },
            "x-parser-schema-id": "read_request"
          },
          "x-parser-unique-object-id": "read_request.message",
          "x-parser-message-name": "read_request"
        }
      },
      "description": "Send a **read_request** message in this channel to receive a **read_response** message over the **read_response** channel.\n",
      "x-parser-unique-object-id": "read_request"
    },
    "read_response": {
      "address": "read_response",
      "messages": {
        "read_response.message": {
          "description": "read response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-116>"
              },
              "data": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-117>"
              }
            },
            "x-parser-schema-id": "read_response"
          },
          "x-parser-unique-object-id": "read_response.message",
          "x-parser-message-name": "read_response"
        }
      },
      "description": "Use this channel to receive read responses as **read_response** messages.\n",
      "x-parser-unique-object-id": "read_response"
    },
    "read_error": {
      "address": "read_error",
      "messages": {
        "read_error.message": {
          "description": "read error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-118>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-119>"
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
                "x-parser-schema-id": "<anonymous-schema-120>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-122>"
                },
                "x-parser-schema-id": "<anonymous-schema-121>"
              }
            },
            "x-parser-schema-id": "read_error"
          },
          "x-parser-unique-object-id": "read_error.message",
          "x-parser-message-name": "read_error"
        }
      },
      "description": "Use this channel to receive read errors as **read_error** messages.\n",
      "x-parser-unique-object-id": "read_error"
    }
  },
  "operations": {
    "create_submit": {
      "action": "send",
      "channel": "$ref:$.channels.create_submit",
      "messages": [
        "$ref:$.channels.create_submit.messages.create_submit.message"
      ],
      "x-parser-unique-object-id": "create_submit"
    },
    "create_error": {
      "action": "receive",
      "channel": "$ref:$.channels.create_error",
      "messages": [
        "$ref:$.channels.create_error.messages.create_error.message"
      ],
      "x-parser-unique-object-id": "create_error"
    },
    "move_submit": {
      "action": "send",
      "channel": "$ref:$.channels.move_submit",
      "messages": [
        "$ref:$.channels.move_submit.messages.move_submit.message"
      ],
      "x-parser-unique-object-id": "move_submit"
    },
    "move_error": {
      "action": "receive",
      "channel": "$ref:$.channels.move_error",
      "messages": [
        "$ref:$.channels.move_error.messages.move_error.message"
      ],
      "x-parser-unique-object-id": "move_error"
    },
    "delete_submit": {
      "action": "send",
      "channel": "$ref:$.channels.delete_submit",
      "messages": [
        "$ref:$.channels.delete_submit.messages.delete_submit.message"
      ],
      "x-parser-unique-object-id": "delete_submit"
    },
    "delete_error": {
      "action": "receive",
      "channel": "$ref:$.channels.delete_error",
      "messages": [
        "$ref:$.channels.delete_error.messages.delete_error.message"
      ],
      "x-parser-unique-object-id": "delete_error"
    },
    "copy_submit": {
      "action": "send",
      "channel": "$ref:$.channels.copy_submit",
      "messages": [
        "$ref:$.channels.copy_submit.messages.copy_submit.message"
      ],
      "x-parser-unique-object-id": "copy_submit"
    },
    "copy_error": {
      "action": "receive",
      "channel": "$ref:$.channels.copy_error",
      "messages": [
        "$ref:$.channels.copy_error.messages.copy_error.message"
      ],
      "x-parser-unique-object-id": "copy_error"
    },
    "getAttributes_request": {
      "action": "send",
      "channel": "$ref:$.channels.getAttributes_request",
      "messages": [
        "$ref:$.channels.getAttributes_request.messages.getAttributes_request.message"
      ],
      "x-parser-unique-object-id": "getAttributes_request"
    },
    "getAttributes_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getAttributes_response",
      "messages": [
        "$ref:$.channels.getAttributes_response.messages.getAttributes_response.message"
      ],
      "x-parser-unique-object-id": "getAttributes_response"
    },
    "getAttributes_error": {
      "action": "receive",
      "channel": "$ref:$.channels.getAttributes_error",
      "messages": [
        "$ref:$.channels.getAttributes_error.messages.getAttributes_error.message"
      ],
      "x-parser-unique-object-id": "getAttributes_error"
    },
    "setAttributes_submit": {
      "action": "send",
      "channel": "$ref:$.channels.setAttributes_submit",
      "messages": [
        "$ref:$.channels.setAttributes_submit.messages.setAttributes_submit.message"
      ],
      "x-parser-unique-object-id": "setAttributes_submit"
    },
    "setAttributes_error": {
      "action": "receive",
      "channel": "$ref:$.channels.setAttributes_error",
      "messages": [
        "$ref:$.channels.setAttributes_error.messages.setAttributes_error.message"
      ],
      "x-parser-unique-object-id": "setAttributes_error"
    },
    "list_request": {
      "action": "send",
      "channel": "$ref:$.channels.list_request",
      "messages": [
        "$ref:$.channels.list_request.messages.list_request.message"
      ],
      "x-parser-unique-object-id": "list_request"
    },
    "list_response": {
      "action": "receive",
      "channel": "$ref:$.channels.list_response",
      "messages": [
        "$ref:$.channels.list_response.messages.list_response.message"
      ],
      "x-parser-unique-object-id": "list_response"
    },
    "list_error": {
      "action": "receive",
      "channel": "$ref:$.channels.list_error",
      "messages": [
        "$ref:$.channels.list_error.messages.list_error.message"
      ],
      "x-parser-unique-object-id": "list_error"
    },
    "find_progress": {
      "action": "send",
      "channel": "$ref:$.channels.find_progress",
      "messages": [
        "$ref:$.channels.find_progress.messages.find_progress.message"
      ],
      "x-parser-unique-object-id": "find_progress"
    },
    "find_update": {
      "action": "receive",
      "channel": "$ref:$.channels.find_update",
      "messages": [
        "$ref:$.channels.find_update.messages.find_update.message"
      ],
      "x-parser-unique-object-id": "find_update"
    },
    "find_response": {
      "action": "receive",
      "channel": "$ref:$.channels.find_response",
      "messages": [
        "$ref:$.channels.find_response.messages.find_response.message"
      ],
      "x-parser-unique-object-id": "find_response"
    },
    "find_error": {
      "action": "receive",
      "channel": "$ref:$.channels.find_error",
      "messages": [
        "$ref:$.channels.find_error.messages.find_error.message"
      ],
      "x-parser-unique-object-id": "find_error"
    },
    "append_request": {
      "action": "send",
      "channel": "$ref:$.channels.append_request",
      "messages": [
        "$ref:$.channels.append_request.messages.append_request.message"
      ],
      "x-parser-unique-object-id": "append_request"
    },
    "append_response": {
      "action": "receive",
      "channel": "$ref:$.channels.append_response",
      "messages": [
        "$ref:$.channels.append_response.messages.append_response.message"
      ],
      "x-parser-unique-object-id": "append_response"
    },
    "append_error": {
      "action": "receive",
      "channel": "$ref:$.channels.append_error",
      "messages": [
        "$ref:$.channels.append_error.messages.append_error.message"
      ],
      "x-parser-unique-object-id": "append_error"
    },
    "truncate_submit": {
      "action": "send",
      "channel": "$ref:$.channels.truncate_submit",
      "messages": [
        "$ref:$.channels.truncate_submit.messages.truncate_submit.message"
      ],
      "x-parser-unique-object-id": "truncate_submit"
    },
    "truncate_error": {
      "action": "receive",
      "channel": "$ref:$.channels.truncate_error",
      "messages": [
        "$ref:$.channels.truncate_error.messages.truncate_error.message"
      ],
      "x-parser-unique-object-id": "truncate_error"
    },
    "read_request": {
      "action": "send",
      "channel": "$ref:$.channels.read_request",
      "messages": [
        "$ref:$.channels.read_request.messages.read_request.message"
      ],
      "x-parser-unique-object-id": "read_request"
    },
    "read_response": {
      "action": "receive",
      "channel": "$ref:$.channels.read_response",
      "messages": [
        "$ref:$.channels.read_response.messages.read_response.message"
      ],
      "x-parser-unique-object-id": "read_response"
    },
    "read_error": {
      "action": "receive",
      "channel": "$ref:$.channels.read_error",
      "messages": [
        "$ref:$.channels.read_error.messages.read_error.message"
      ],
      "x-parser-unique-object-id": "read_error"
    }
  },
  "components": {
    "schemas": {
      "create_submit": "$ref:$.channels.create_submit.messages.create_submit.message.payload",
      "create_error": "$ref:$.channels.create_error.messages.create_error.message.payload",
      "move_submit": "$ref:$.channels.move_submit.messages.move_submit.message.payload",
      "move_error": "$ref:$.channels.move_error.messages.move_error.message.payload",
      "delete_submit": "$ref:$.channels.delete_submit.messages.delete_submit.message.payload",
      "delete_error": "$ref:$.channels.delete_error.messages.delete_error.message.payload",
      "copy_submit": "$ref:$.channels.copy_submit.messages.copy_submit.message.payload",
      "copy_error": "$ref:$.channels.copy_error.messages.copy_error.message.payload",
      "getAttributes_request": "$ref:$.channels.getAttributes_request.messages.getAttributes_request.message.payload",
      "getAttributes_response": "$ref:$.channels.getAttributes_response.messages.getAttributes_response.message.payload",
      "getAttributes_error": "$ref:$.channels.getAttributes_error.messages.getAttributes_error.message.payload",
      "setAttributes_submit": "$ref:$.channels.setAttributes_submit.messages.setAttributes_submit.message.payload",
      "setAttributes_error": "$ref:$.channels.setAttributes_error.messages.setAttributes_error.message.payload",
      "list_request": "$ref:$.channels.list_request.messages.list_request.message.payload",
      "list_response": "$ref:$.channels.list_response.messages.list_response.message.payload",
      "list_error": "$ref:$.channels.list_error.messages.list_error.message.payload",
      "find_progress": "$ref:$.channels.find_progress.messages.find_progress.message.payload",
      "find_update": "$ref:$.channels.find_update.messages.find_update.message.payload",
      "find_response": "$ref:$.channels.find_response.messages.find_response.message.payload",
      "find_error": "$ref:$.channels.find_error.messages.find_error.message.payload",
      "append_request": "$ref:$.channels.append_request.messages.append_request.message.payload",
      "append_response": "$ref:$.channels.append_response.messages.append_response.message.payload",
      "append_error": "$ref:$.channels.append_error.messages.append_error.message.payload",
      "truncate_submit": "$ref:$.channels.truncate_submit.messages.truncate_submit.message.payload",
      "truncate_error": "$ref:$.channels.truncate_error.messages.truncate_error.message.payload",
      "read_request": "$ref:$.channels.read_request.messages.read_request.message.payload",
      "read_response": "$ref:$.channels.read_response.messages.read_response.message.payload",
      "read_error": "$ref:$.channels.read_error.messages.read_error.message.payload",
      "fm": {
        "file_system": {
          "Node": "$ref:$.channels.list_response.messages.list_response.message.payload.properties.nodes",
          "NodeAttributes": "$ref:$.channels.getAttributes_response.messages.getAttributes_response.message.payload.properties.attributes",
          "NodeType": "$ref:$.channels.create_submit.messages.create_submit.message.payload.properties.type"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "create_submit": "$ref:$.channels.create_submit.messages.create_submit.message",
      "create_error": "$ref:$.channels.create_error.messages.create_error.message",
      "move_submit": "$ref:$.channels.move_submit.messages.move_submit.message",
      "move_error": "$ref:$.channels.move_error.messages.move_error.message",
      "delete_submit": "$ref:$.channels.delete_submit.messages.delete_submit.message",
      "delete_error": "$ref:$.channels.delete_error.messages.delete_error.message",
      "copy_submit": "$ref:$.channels.copy_submit.messages.copy_submit.message",
      "copy_error": "$ref:$.channels.copy_error.messages.copy_error.message",
      "getAttributes_request": "$ref:$.channels.getAttributes_request.messages.getAttributes_request.message",
      "getAttributes_response": "$ref:$.channels.getAttributes_response.messages.getAttributes_response.message",
      "getAttributes_error": "$ref:$.channels.getAttributes_error.messages.getAttributes_error.message",
      "setAttributes_submit": "$ref:$.channels.setAttributes_submit.messages.setAttributes_submit.message",
      "setAttributes_error": "$ref:$.channels.setAttributes_error.messages.setAttributes_error.message",
      "list_request": "$ref:$.channels.list_request.messages.list_request.message",
      "list_response": "$ref:$.channels.list_response.messages.list_response.message",
      "list_error": "$ref:$.channels.list_error.messages.list_error.message",
      "find_progress": "$ref:$.channels.find_progress.messages.find_progress.message",
      "find_update": "$ref:$.channels.find_update.messages.find_update.message",
      "find_response": "$ref:$.channels.find_response.messages.find_response.message",
      "find_error": "$ref:$.channels.find_error.messages.find_error.message",
      "append_request": "$ref:$.channels.append_request.messages.append_request.message",
      "append_response": "$ref:$.channels.append_response.messages.append_response.message",
      "append_error": "$ref:$.channels.append_error.messages.append_error.message",
      "truncate_submit": "$ref:$.channels.truncate_submit.messages.truncate_submit.message",
      "truncate_error": "$ref:$.channels.truncate_error.messages.truncate_error.message",
      "read_request": "$ref:$.channels.read_request.messages.read_request.message",
      "read_response": "$ref:$.channels.read_response.messages.read_response.message",
      "read_error": "$ref:$.channels.read_error.messages.read_error.message"
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
  