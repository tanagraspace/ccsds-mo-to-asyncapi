
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "type": {
                "description": "List of possible node types",
                "enum": [
                  "FILE",
                  "DIRECTORY"
                ],
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "The path field contains the logical path to where the file or directory is to be created.\n",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "overwrite": {
                "type": "boolean",
                "description": "Force overwrite if the file or directory already exists.\n",
                "x-parser-schema-id": "<anonymous-schema-7>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-9>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-8>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-11>"
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
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-14>"
                },
                "x-parser-schema-id": "<anonymous-schema-13>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-17>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-15>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "source": {
                "type": "string",
                "format": "uri",
                "description": "Path to the node being moved.\n",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "target": {
                "type": "string",
                "format": "uri",
                "description": "Target name\n",
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "overwrite": {
                "type": "boolean",
                "description": "Force overwrite if the file or folder already exist.\n",
                "x-parser-schema-id": "<anonymous-schema-21>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-23>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-22>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-25>"
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
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-28>"
                },
                "x-parser-schema-id": "<anonymous-schema-27>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-31>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-29>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-32>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "The path field contains the path to the node to be deleted\n",
                "x-parser-schema-id": "<anonymous-schema-33>"
              },
              "force": {
                "type": "boolean",
                "description": "Force delete: true/false\n",
                "x-parser-schema-id": "<anonymous-schema-34>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-36>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-35>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-37>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-38>"
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
                "x-parser-schema-id": "<anonymous-schema-39>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-41>"
                },
                "x-parser-schema-id": "<anonymous-schema-40>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-43>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-44>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-42>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-45>"
              },
              "source": {
                "type": "string",
                "format": "uri",
                "description": "Path to the node being copied.\n",
                "x-parser-schema-id": "<anonymous-schema-46>"
              },
              "target": {
                "type": "string",
                "format": "uri",
                "description": "Target path of the copied node.\n",
                "x-parser-schema-id": "<anonymous-schema-47>"
              },
              "overwrite": {
                "type": "boolean",
                "description": "Force overwrite if the file or folder already exist.\n",
                "x-parser-schema-id": "<anonymous-schema-48>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-50>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-49>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-51>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM",
                  "None"
                ],
                "x-parser-schema-id": "<anonymous-schema-52>"
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
                "x-parser-schema-id": "<anonymous-schema-53>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-55>"
                },
                "x-parser-schema-id": "<anonymous-schema-54>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-57>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-58>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-56>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-59>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "The path of the node to be queried\n",
                "x-parser-schema-id": "<anonymous-schema-60>"
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
      "address": null,
      "messages": {
        "getAttributes_response.message": {
          "description": "getAttributes response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-62>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-61>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-63>"
              },
              "attributes": {
                "properties": {
                  "accessPermissions": {
                    "description": "Settable: yes",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-66>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-65>"
                  },
                  "creationTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-68>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-67>"
                  },
                  "lastAccessTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-70>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-69>"
                  },
                  "lastChangeTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-72>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-71>"
                  },
                  "lastModificationTime": {
                    "description": "Settable: no",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-74>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-73>"
                  },
                  "owner": {
                    "description": "Settable: yes",
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-76>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-75>"
                  },
                  "size": {
                    "description": "Size of the node in Kibibyte (1024 byte). Settable: no",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-77>"
                  },
                  "type_": "$ref:$.channels.create_submit.messages.create_submit.message.payload.properties.type"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-64>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-79>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-78>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-80>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-81>"
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
                "x-parser-schema-id": "<anonymous-schema-82>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-84>"
                },
                "x-parser-schema-id": "<anonymous-schema-83>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-86>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-87>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-88>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "Path to the node whose attributes will be set.\n",
                "x-parser-schema-id": "<anonymous-schema-89>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-91>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-92>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-93>"
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
                "x-parser-schema-id": "<anonymous-schema-94>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-96>"
                },
                "x-parser-schema-id": "<anonymous-schema-95>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-98>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-99>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-97>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-100>"
              },
              "path": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-101>"
              },
              "toFile": {
                "type": "boolean",
                "description": "Set to true if the list should be written to a file. If toFile is true then the Response contails the path to the file with the list.\n",
                "x-parser-schema-id": "<anonymous-schema-102>"
              },
              "nameRegexFilter": {
                "type": "string",
                "description": "Name filter to be applied. All files and folders that pass the filter will be added to the list.\n",
                "x-parser-schema-id": "<anonymous-schema-103>"
              },
              "lastModifiedTimeFilter": {
                "type": "number",
                "format": "uint64",
                "description": "Time filters to be applied. All files and folders with last modified time larger than or equal to the filter will be added to the list.\n",
                "x-parser-schema-id": "<anonymous-schema-104>"
              },
              "recursive": {
                "type": "boolean",
                "description": "Set to true to do a recursive list\n",
                "x-parser-schema-id": "<anonymous-schema-105>"
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
      "address": null,
      "messages": {
        "list_response.message": {
          "description": "list response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-107>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-106>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-108>"
              },
              "nodes": {
                "properties": {
                  "lmTime": {
                    "description": "Last modified time in seconds. Settable: no",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-110>"
                  },
                  "owner": {
                    "description": "The owner of the file",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-111>"
                  },
                  "path": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-112>"
                  },
                  "permissions": {
                    "description": "The node permissions. Settable: no",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-113>"
                  },
                  "size": {
                    "description": "Size of the node in byte. Settable: no",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-114>"
                  },
                  "type_": "$ref:$.channels.create_submit.messages.create_submit.message.payload.properties.type"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-109>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-116>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-115>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-117>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-118>"
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
                "x-parser-schema-id": "<anonymous-schema-119>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-121>"
                },
                "x-parser-schema-id": "<anonymous-schema-120>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-123>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-124>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-122>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-125>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "The location from where the search will be done.\n",
                "x-parser-schema-id": "<anonymous-schema-126>"
              },
              "toFile": {
                "type": "boolean",
                "description": "Set to true if the list should be written to a file. If toFile is true then the Update contails the path to the file with the list.\n",
                "x-parser-schema-id": "<anonymous-schema-127>"
              },
              "searchPattern": {
                "type": "string",
                "description": "Regular expression to be matched against files in the Directory. Only files that match will be returned. If null all files nodes will match.\n",
                "x-parser-schema-id": "<anonymous-schema-128>"
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
      "address": null,
      "messages": {
        "find_update.message": {
          "description": "find response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-130>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-129>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-131>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-133>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-134>"
              },
              "count": {
                "type": "integer",
                "format": "uint32",
                "description": "Number of matches\n",
                "x-parser-schema-id": "<anonymous-schema-135>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-137>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-138>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-139>"
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
                "x-parser-schema-id": "<anonymous-schema-140>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-142>"
                },
                "x-parser-schema-id": "<anonymous-schema-141>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-144>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-145>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-143>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-146>"
              },
              "path": {
                "type": "string",
                "format": "uri",
                "description": "File to which the data shall be appended to\n",
                "x-parser-schema-id": "<anonymous-schema-147>"
              },
              "data": {
                "type": "string",
                "format": "binary",
                "description": "Data to be appended to file\n",
                "x-parser-schema-id": "<anonymous-schema-148>"
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
      "address": null,
      "messages": {
        "append_response.message": {
          "description": "append response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-150>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-149>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-151>"
              },
              "size": {
                "type": "integer",
                "format": "uint32",
                "description": "New total file size\n",
                "x-parser-schema-id": "<anonymous-schema-152>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-154>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-153>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-155>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-156>"
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
                "x-parser-schema-id": "<anonymous-schema-157>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-159>"
                },
                "x-parser-schema-id": "<anonymous-schema-158>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-161>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-162>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-160>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-163>"
              },
              "path": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-164>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-166>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-165>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-167>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-168>"
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
                "x-parser-schema-id": "<anonymous-schema-169>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-171>"
                },
                "x-parser-schema-id": "<anonymous-schema-170>"
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
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-173>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-174>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-175>"
              },
              "path": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-176>"
              },
              "offset": {
                "type": "integer",
                "format": "uint32",
                "description": "Offset from the start of the file in byte. If Null then zero is assumed\n",
                "x-parser-schema-id": "<anonymous-schema-177>"
              },
              "size": {
                "type": "integer",
                "format": "uint32",
                "description": "Number of byte to read. If Null then read the whole file\n",
                "x-parser-schema-id": "<anonymous-schema-178>"
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
      "address": null,
      "messages": {
        "read_response.message": {
          "description": "read response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-180>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-179>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "data": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-182>"
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
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-184>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-185>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-186>"
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
                "x-parser-schema-id": "<anonymous-schema-187>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-189>"
                },
                "x-parser-schema-id": "<anonymous-schema-188>"
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
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getAttributes_response"
      },
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
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.list_response"
      },
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
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.find_update"
      },
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
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.append_response"
      },
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
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.read_response"
      },
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
      "create_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-190>"
          }
        },
        "x-parser-schema-id": "create_None"
      },
      "create_error": "$ref:$.channels.create_error.messages.create_error.message.payload",
      "move_submit": "$ref:$.channels.move_submit.messages.move_submit.message.payload",
      "move_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-191>"
          }
        },
        "x-parser-schema-id": "move_None"
      },
      "move_error": "$ref:$.channels.move_error.messages.move_error.message.payload",
      "delete_submit": "$ref:$.channels.delete_submit.messages.delete_submit.message.payload",
      "delete_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-192>"
          }
        },
        "x-parser-schema-id": "delete_None"
      },
      "delete_error": "$ref:$.channels.delete_error.messages.delete_error.message.payload",
      "copy_submit": "$ref:$.channels.copy_submit.messages.copy_submit.message.payload",
      "copy_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-193>"
          }
        },
        "x-parser-schema-id": "copy_None"
      },
      "copy_error": "$ref:$.channels.copy_error.messages.copy_error.message.payload",
      "getAttributes_request": "$ref:$.channels.getAttributes_request.messages.getAttributes_request.message.payload",
      "getAttributes_response": "$ref:$.channels.getAttributes_response.messages.getAttributes_response.message.payload",
      "getAttributes_error": "$ref:$.channels.getAttributes_error.messages.getAttributes_error.message.payload",
      "setAttributes_submit": "$ref:$.channels.setAttributes_submit.messages.setAttributes_submit.message.payload",
      "setAttributes_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-194>"
          }
        },
        "x-parser-schema-id": "setAttributes_None"
      },
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
      "truncate_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-195>"
          }
        },
        "x-parser-schema-id": "truncate_None"
      },
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
  