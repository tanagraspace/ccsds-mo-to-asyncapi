
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileTransfer Service getTransactionReport API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getTransactionReport interaction of the FileTransfer Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileTransfer Service's getTransactionReport interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_FileTransfer_getTransactionReport": {
      "address": "request_FileTransfer_getTransactionReport",
      "messages": {
        "FileTransfer.getTransactionReport_request.message": {
          "description": "FileTransfer getTransactionReport request submission",
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
            "x-parser-schema-id": "FileTransfer_getTransactionReport_request"
          },
          "x-parser-unique-object-id": "FileTransfer.getTransactionReport_request.message",
          "x-parser-message-name": "FileTransfer_getTransactionReport_request"
        }
      },
      "description": "Send a **FileTransfer_getTransactionReport_request** message in this channel to receive a **FileTransfer_getTransactionReport_response** message over the **response_FileTransfer_getTransactionReport** channel.\n",
      "x-parser-unique-object-id": "request_FileTransfer_getTransactionReport"
    },
    "response_FileTransfer_getTransactionReport": {
      "address": "response_FileTransfer_getTransactionReport",
      "messages": {
        "FileTransfer.getTransactionReport_response.message": {
          "description": "FileTransfer getTransactionReport update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "report": {
                "properties": {
                  "sourcePath": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "targetPath": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "transactionId": "$ref:$.channels.request_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_request.message.payload.properties.transactionId",
                  "transactionResponseCode": {
                    "description": "",
                    "enum": [
                      "UNSUCCESSFUL",
                      "SUCCESSFUL",
                      "UNKNOWN"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "transactionStatus": {
                    "description": "",
                    "enum": [
                      "UNDEFINED",
                      "ACTIVE",
                      "TERMINATED",
                      "UNRECOGNISED",
                      "UNKNOWN"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "FileTransfer_getTransactionReport_response"
          },
          "x-parser-unique-object-id": "FileTransfer.getTransactionReport_response.message",
          "x-parser-message-name": "FileTransfer_getTransactionReport_response"
        }
      },
      "description": "Use this channel to receive FileTransfer getTransactionReport responses as **FileTransfer_getTransactionReport_response** messages.\n",
      "x-parser-unique-object-id": "response_FileTransfer_getTransactionReport"
    },
    "error_FileTransfer_getTransactionReport": {
      "address": "error_FileTransfer_getTransactionReport",
      "messages": {
        "FileTransfer.getTransactionReport_error.message": {
          "description": "FileTransfer getTransactionReport error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_TRANSACTION",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-15>"
                },
                "x-parser-schema-id": "<anonymous-schema-14>"
              }
            },
            "x-parser-schema-id": "FileTransfer_getTransactionReport_error"
          },
          "x-parser-unique-object-id": "FileTransfer.getTransactionReport_error.message",
          "x-parser-message-name": "FileTransfer_getTransactionReport_error"
        }
      },
      "description": "Use this channel to receive FileTransfer getTransactionReport errors as **FileTransfer_getTransactionReport_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileTransfer_getTransactionReport"
    }
  },
  "operations": {
    "FileTransfer_getTransactionReport_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_FileTransfer_getTransactionReport",
      "messages": [
        "$ref:$.channels.request_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_request.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_getTransactionReport_request"
    },
    "FileTransfer_getTransactionReport_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_FileTransfer_getTransactionReport",
      "messages": [
        "$ref:$.channels.response_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_response.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_getTransactionReport_response"
    },
    "FileTransfer_getTransactionReport_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileTransfer_getTransactionReport",
      "messages": [
        "$ref:$.channels.error_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_error.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_getTransactionReport_error"
    }
  },
  "components": {
    "schemas": {
      "FileTransfer_getTransactionReport_request": "$ref:$.channels.request_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_request.message.payload",
      "FileTransfer_getTransactionReport_response": "$ref:$.channels.response_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_response.message.payload",
      "FileTransfer_getTransactionReport_error": "$ref:$.channels.error_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_error.message.payload",
      "fm": {
        "file_transfer": {
          "FileTransactionId": "$ref:$.channels.request_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_request.message.payload.properties.transactionId",
          "FileTransactionReport": "$ref:$.channels.response_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_response.message.payload.properties.report",
          "FileTransactionResponseCode": "$ref:$.channels.response_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_response.message.payload.properties.report.properties.transactionResponseCode",
          "FileTransactionStatus": "$ref:$.channels.response_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_response.message.payload.properties.report.properties.transactionStatus"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileTransfer_getTransactionReport_request": "$ref:$.channels.request_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_request.message",
      "FileTransfer_getTransactionReport_response": "$ref:$.channels.response_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_response.message",
      "FileTransfer_getTransactionReport_error": "$ref:$.channels.error_FileTransfer_getTransactionReport.messages.FileTransfer.getTransactionReport_error.message"
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
  