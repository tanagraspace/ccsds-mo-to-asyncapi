
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileTransfer Service listTransactions API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listTransactions interaction of the FileTransfer Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileTransfer Service's listTransactions interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_FileTransfer_listTransactions": {
      "address": "request_FileTransfer_listTransactions",
      "messages": {
        "FileTransfer.listTransactions_request.message": {
          "description": "FileTransfer listTransactions request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "entityId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "FileTransfer_listTransactions_request"
          },
          "x-parser-unique-object-id": "FileTransfer.listTransactions_request.message",
          "x-parser-message-name": "FileTransfer_listTransactions_request"
        }
      },
      "description": "Send a **FileTransfer_listTransactions_request** message in this channel to receive a **FileTransfer_listTransactions_response** message over the **response_FileTransfer_listTransactions** channel.\n",
      "x-parser-unique-object-id": "request_FileTransfer_listTransactions"
    },
    "response_FileTransfer_listTransactions": {
      "address": "response_FileTransfer_listTransactions",
      "messages": {
        "FileTransfer.listTransactions_response.message": {
          "description": "FileTransfer listTransactions update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "transactionList": {
                "properties": {
                  "sourcePath": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "targetPath": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "transactionId": {
                    "properties": {
                      "entity": {
                        "description": "",
                        "format": "binary",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "id": {
                        "description": "The ID as a byte array",
                        "format": "binary",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "transactionResponseCode": {
                    "description": "",
                    "enum": [
                      "UNSUCCESSFUL",
                      "SUCCESSFUL",
                      "UNKNOWN"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-10>"
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
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "FileTransfer_listTransactions_response"
          },
          "x-parser-unique-object-id": "FileTransfer.listTransactions_response.message",
          "x-parser-message-name": "FileTransfer_listTransactions_response"
        }
      },
      "description": "Use this channel to receive FileTransfer listTransactions responses as **FileTransfer_listTransactions_response** messages.\n",
      "x-parser-unique-object-id": "response_FileTransfer_listTransactions"
    },
    "error_FileTransfer_listTransactions": {
      "address": "error_FileTransfer_listTransactions",
      "messages": {
        "FileTransfer.listTransactions_error.message": {
          "description": "FileTransfer listTransactions error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_ENTITY",
                  "UNKNOWN_TRANSACTION",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-16>"
                },
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "FileTransfer_listTransactions_error"
          },
          "x-parser-unique-object-id": "FileTransfer.listTransactions_error.message",
          "x-parser-message-name": "FileTransfer_listTransactions_error"
        }
      },
      "description": "Use this channel to receive FileTransfer listTransactions errors as **FileTransfer_listTransactions_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_FileTransfer_listTransactions"
    }
  },
  "operations": {
    "FileTransfer_listTransactions_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_FileTransfer_listTransactions",
      "messages": [
        "$ref:$.channels.request_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_request.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_listTransactions_request"
    },
    "FileTransfer_listTransactions_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_FileTransfer_listTransactions",
      "messages": [
        "$ref:$.channels.response_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_response.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_listTransactions_response"
    },
    "FileTransfer_listTransactions_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_FileTransfer_listTransactions",
      "messages": [
        "$ref:$.channels.error_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_error.message"
      ],
      "x-parser-unique-object-id": "FileTransfer_listTransactions_error"
    }
  },
  "components": {
    "schemas": {
      "FileTransfer_listTransactions_request": "$ref:$.channels.request_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_request.message.payload",
      "FileTransfer_listTransactions_response": "$ref:$.channels.response_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_response.message.payload",
      "FileTransfer_listTransactions_error": "$ref:$.channels.error_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_error.message.payload",
      "fm": {
        "file_transfer": {
          "FileTransactionId": "$ref:$.channels.response_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_response.message.payload.properties.transactionList.properties.transactionId",
          "FileTransactionReport": "$ref:$.channels.response_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_response.message.payload.properties.transactionList",
          "FileTransactionResponseCode": "$ref:$.channels.response_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_response.message.payload.properties.transactionList.properties.transactionResponseCode",
          "FileTransactionStatus": "$ref:$.channels.response_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_response.message.payload.properties.transactionList.properties.transactionStatus"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "FileTransfer_listTransactions_request": "$ref:$.channels.request_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_request.message",
      "FileTransfer_listTransactions_response": "$ref:$.channels.response_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_response.message",
      "FileTransfer_listTransactions_error": "$ref:$.channels.error_FileTransfer_listTransactions.messages.FileTransfer.listTransactions_error.message"
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
  