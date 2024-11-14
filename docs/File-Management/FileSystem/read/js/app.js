
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service read API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the read interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's read interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_FileSystem_read": {
      "address": "request_FileSystem_read",
      "messages": {
        "FileSystem.read_request.message": {
          "description": "FileSystem read request submission",
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
              "offset": {
                "type": "integer",
                "format": "uint32",
                "description": "Offset from the start of the file in byte. If Null then zero is assumed\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "size": {
                "type": "integer",
                "format": "uint32",
                "description": "Number of byte to read. If Null then read the whole file\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "FileSystem_read_request"
          },
          "x-parser-unique-object-id": "FileSystem.read_request.message",
          "x-parser-message-name": "FileSystem_read_request"
        }
      },
      "description": "Send a **FileSystem_read_request** message in this channel to receive a **FileSystem_read_response** message over the **response_FileSystem_read** channel.\n",
      "x-parser-unique-object-id": "request_FileSystem_read"
    },
    "response_FileSystem_read": {
      "address": "response_FileSystem_read",
      "messages": {
        "FileSystem.read_response.message": {
          "description": "FileSystem read update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "data": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "FileSystem_read_response"
          },
          "x-parser-unique-object-id": "FileSystem.read_response.message",
          "x-parser-message-name": "FileSystem_read_response"
        }
      },
      "description": "Use this channel to receive FileSystem read responses as **FileSystem_read_response** messages.\n",
      "x-parser-unique-object-id": "response_FileSystem_read"
    },
    "error_FileSystem_read": {
      "address": "error_FileSystem_read",
      "messages": {
        "FileSystem.read_error.message": {
          "description": "FileSystem read error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-8>"
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
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-11>"
                },
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "FileSystem_read_error"
          },
          "x-parser-unique-object-id": "FileSystem.read_error.message",
          "x-parser-message-name": "FileSystem_read_error"
        }
      },
      "description": "Use this channel to receive FileSystem read errors as **FileSystem_read_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_read"
    }
  },
  "operations": {
    "FileSystem_read_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_FileSystem_read",
      "messages": [
        "$ref:$.channels.request_FileSystem_read.messages.FileSystem.read_request.message"
      ],
      "x-parser-unique-object-id": "FileSystem_read_request"
    },
    "FileSystem_read_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_FileSystem_read",
      "messages": [
        "$ref:$.channels.response_FileSystem_read.messages.FileSystem.read_response.message"
      ],
      "x-parser-unique-object-id": "FileSystem_read_response"
    },
    "FileSystem_read_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_read",
      "messages": [
        "$ref:$.channels.error_FileSystem_read.messages.FileSystem.read_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_read_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_read_request": "$ref:$.channels.request_FileSystem_read.messages.FileSystem.read_request.message.payload",
      "FileSystem_read_response": "$ref:$.channels.response_FileSystem_read.messages.FileSystem.read_response.message.payload",
      "FileSystem_read_error": "$ref:$.channels.error_FileSystem_read.messages.FileSystem.read_error.message.payload"
    },
    "messages": {
      "FileSystem_read_request": "$ref:$.channels.request_FileSystem_read.messages.FileSystem.read_request.message",
      "FileSystem_read_response": "$ref:$.channels.response_FileSystem_read.messages.FileSystem.read_response.message",
      "FileSystem_read_error": "$ref:$.channels.error_FileSystem_read.messages.FileSystem.read_error.message"
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
  