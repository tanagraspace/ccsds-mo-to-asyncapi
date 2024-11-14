
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileTransfer Service resume API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the resume interaction of the FileTransfer Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileTransfer Service's resume interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_FileTransfer_resume": {
      "address": "submit_FileTransfer_resume",
      "messages": {
        "FileTransfer.resume_submit.message": {
          "description": "FileTransfer resume request submission",
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
            "x-parser-schema-id": "FileTransfer_resume_submit"
          },
          "x-parser-unique-object-id": "FileTransfer.resume_submit.message",
          "x-parser-message-name": "FileTransfer_resume_submit"
        }
      },
      "description": "Send a **FileTransfer_resume_submit** message in this channel to receive a **FileTransfer_resume_None** message over the **None_FileTransfer_resume** channel.\n",
      "x-parser-unique-object-id": "submit_FileTransfer_resume"
    },
    "error_FileTransfer_resume": {
      "address": "error_FileTransfer_resume",
      "messages": {
        "FileTransfer.resume_error.message": {
          "description": "FileTransfer resume error response",
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
            "x-parser-schema-id": "FileTransfer_resume_error"
          },
          "x-parser-unique-object-id": "FileTransfer.resume_error.message",
          "x-parser-message-name": "FileTransfer_resume_error"
        }
      },
      "description": "Use this channel to receive FileTransfer resume errors as **FileTransfer_resume_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileTransfer_resume"
    }
  },
  "operations": {
    "FileTransfer_resume_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_FileTransfer_resume",
      "messages": [
        "$ref:$.channels.submit_FileTransfer_resume.messages.FileTransfer.resume_submit.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_resume_submit"
    },
    "FileTransfer_resume_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileTransfer_resume",
      "messages": [
        "$ref:$.channels.error_FileTransfer_resume.messages.FileTransfer.resume_error.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_resume_error"
    }
  },
  "components": {
    "schemas": {
      "FileTransfer_resume_submit": "$ref:$.channels.submit_FileTransfer_resume.messages.FileTransfer.resume_submit.message.payload",
      "FileTransfer_resume_error": "$ref:$.channels.error_FileTransfer_resume.messages.FileTransfer.resume_error.message.payload",
      "fm": {
        "file_transfer": {
          "FileTransactionId": "$ref:$.channels.submit_FileTransfer_resume.messages.FileTransfer.resume_submit.message.payload.properties.transactionId"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileTransfer_resume_submit": "$ref:$.channels.submit_FileTransfer_resume.messages.FileTransfer.resume_submit.message",
      "FileTransfer_resume_error": "$ref:$.channels.error_FileTransfer_resume.messages.FileTransfer.resume_error.message"
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
  