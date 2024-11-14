
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileTransfer Service suspend API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the suspend interaction of the FileTransfer Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileTransfer Service's suspend interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_FileTransfer_suspend": {
      "address": "submit_FileTransfer_suspend",
      "messages": {
        "FileTransfer.suspend_submit.message": {
          "description": "FileTransfer suspend request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "transactionId": {
                "properties": {
                  "entity": {
                    "description": "",
                    "format": "binary",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "id": {
                    "description": "The ID as a byte array",
                    "format": "binary",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "FileTransfer_suspend_submit"
          },
          "x-parser-unique-object-id": "FileTransfer.suspend_submit.message",
          "x-parser-message-name": "FileTransfer_suspend_submit"
        }
      },
      "description": "Send a **FileTransfer_suspend_submit** message in this channel to receive a **FileTransfer_suspend_None** message over the **None_FileTransfer_suspend** channel.\n",
      "x-parser-unique-object-id": "submit_FileTransfer_suspend"
    },
    "error_FileTransfer_suspend": {
      "address": "error_FileTransfer_suspend",
      "messages": {
        "FileTransfer.suspend_error.message": {
          "description": "FileTransfer suspend error response",
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
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_TRANSACTION",
                  "OTHER_ERROR"
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
            "x-parser-schema-id": "FileTransfer_suspend_error"
          },
          "x-parser-unique-object-id": "FileTransfer.suspend_error.message",
          "x-parser-message-name": "FileTransfer_suspend_error"
        }
      },
      "description": "Use this channel to receive FileTransfer suspend errors as **FileTransfer_suspend_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileTransfer_suspend"
    }
  },
  "operations": {
    "FileTransfer_suspend_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_FileTransfer_suspend",
      "messages": [
        "$ref:$.channels.submit_FileTransfer_suspend.messages.FileTransfer.suspend_submit.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_suspend_submit"
    },
    "FileTransfer_suspend_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileTransfer_suspend",
      "messages": [
        "$ref:$.channels.error_FileTransfer_suspend.messages.FileTransfer.suspend_error.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_suspend_error"
    }
  },
  "components": {
    "schemas": {
      "FileTransfer_suspend_submit": "$ref:$.channels.submit_FileTransfer_suspend.messages.FileTransfer.suspend_submit.message.payload",
      "FileTransfer_suspend_error": "$ref:$.channels.error_FileTransfer_suspend.messages.FileTransfer.suspend_error.message.payload",
      "fm": {
        "file_transfer": {
          "FileTransactionId": "$ref:$.channels.submit_FileTransfer_suspend.messages.FileTransfer.suspend_submit.message.payload.properties.transactionId"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileTransfer_suspend_submit": "$ref:$.channels.submit_FileTransfer_suspend.messages.FileTransfer.suspend_submit.message",
      "FileTransfer_suspend_error": "$ref:$.channels.error_FileTransfer_suspend.messages.FileTransfer.suspend_error.message"
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
  