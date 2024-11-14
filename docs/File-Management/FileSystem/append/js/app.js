
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileSystem Service append API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the append interaction of the FileSystem Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileSystem Service's append interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_FileSystem_append": {
      "address": "request_FileSystem_append",
      "messages": {
        "FileSystem.append_request.message": {
          "description": "FileSystem append request submission",
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
                "description": "File to which the data shall be appended to\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "data": {
                "type": "string",
                "format": "binary",
                "description": "Data to be appended to file\n",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "FileSystem_append_request"
          },
          "x-parser-unique-object-id": "FileSystem.append_request.message",
          "x-parser-message-name": "FileSystem_append_request"
        }
      },
      "description": "Send a **FileSystem_append_request** message in this channel to receive a **FileSystem_append_response** message over the **response_FileSystem_append** channel.\n",
      "x-parser-unique-object-id": "request_FileSystem_append"
    },
    "response_FileSystem_append": {
      "address": "response_FileSystem_append",
      "messages": {
        "FileSystem.append_response.message": {
          "description": "FileSystem append update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "size": {
                "type": "integer",
                "format": "uint32",
                "description": "New total file size\n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "FileSystem_append_response"
          },
          "x-parser-unique-object-id": "FileSystem.append_response.message",
          "x-parser-message-name": "FileSystem_append_response"
        }
      },
      "description": "Use this channel to receive FileSystem append responses as **FileSystem_append_response** messages.\n",
      "x-parser-unique-object-id": "response_FileSystem_append"
    },
    "error_FileSystem_append": {
      "address": "error_FileSystem_append",
      "messages": {
        "FileSystem.append_error.message": {
          "description": "FileSystem append error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
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
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-10>"
                },
                "x-parser-schema-id": "<anonymous-schema-9>"
              }
            },
            "x-parser-schema-id": "FileSystem_append_error"
          },
          "x-parser-unique-object-id": "FileSystem.append_error.message",
          "x-parser-message-name": "FileSystem_append_error"
        }
      },
      "description": "Use this channel to receive FileSystem append errors as **FileSystem_append_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileSystem_append"
    }
  },
  "operations": {
    "FileSystem_append_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_FileSystem_append",
      "messages": [
        "$ref:$.channels.request_FileSystem_append.messages.FileSystem.append_request.message"
      ],
      "x-parser-unique-object-id": "FileSystem_append_request"
    },
    "FileSystem_append_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_FileSystem_append",
      "messages": [
        "$ref:$.channels.response_FileSystem_append.messages.FileSystem.append_response.message"
      ],
      "x-parser-unique-object-id": "FileSystem_append_response"
    },
    "FileSystem_append_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileSystem_append",
      "messages": [
        "$ref:$.channels.error_FileSystem_append.messages.FileSystem.append_error.message"
      ],
      "x-parser-unique-object-id": "FileSystem_append_error"
    }
  },
  "components": {
    "schemas": {
      "FileSystem_append_request": "$ref:$.channels.request_FileSystem_append.messages.FileSystem.append_request.message.payload",
      "FileSystem_append_response": "$ref:$.channels.response_FileSystem_append.messages.FileSystem.append_response.message.payload",
      "FileSystem_append_error": "$ref:$.channels.error_FileSystem_append.messages.FileSystem.append_error.message.payload"
    },
    "messages": {
      "FileSystem_append_request": "$ref:$.channels.request_FileSystem_append.messages.FileSystem.append_request.message",
      "FileSystem_append_response": "$ref:$.channels.response_FileSystem_append.messages.FileSystem.append_response.message",
      "FileSystem_append_error": "$ref:$.channels.error_FileSystem_append.messages.FileSystem.append_error.message"
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
  