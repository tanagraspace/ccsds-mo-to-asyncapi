
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "FileTransfer Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the FileTransfer Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the FileTransfer Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "cancel_submit": {
      "address": "cancel_submit",
      "messages": {
        "cancel_submit.message": {
          "description": "cancel request",
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
            "x-parser-schema-id": "cancel_submit"
          },
          "x-parser-unique-object-id": "cancel_submit.message",
          "x-parser-message-name": "cancel_submit"
        }
      },
      "description": "Send a **cancel_submit** message in this channel.\n",
      "x-parser-unique-object-id": "cancel_submit"
    },
    "cancel_error": {
      "address": "cancel_error",
      "messages": {
        "cancel_error.message": {
          "description": "cancel error response",
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
            "x-parser-schema-id": "cancel_error"
          },
          "x-parser-unique-object-id": "cancel_error.message",
          "x-parser-message-name": "cancel_error"
        }
      },
      "description": "Use this channel to receive cancel errors as **cancel_error** messages.\n",
      "x-parser-unique-object-id": "cancel_error"
    },
    "suspend_submit": {
      "address": "suspend_submit",
      "messages": {
        "suspend_submit.message": {
          "description": "suspend request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "transactionId": "$ref:$.channels.cancel_submit.messages.cancel_submit.message.payload.properties.transactionId"
            },
            "x-parser-schema-id": "suspend_submit"
          },
          "x-parser-unique-object-id": "suspend_submit.message",
          "x-parser-message-name": "suspend_submit"
        }
      },
      "description": "Send a **suspend_submit** message in this channel.\n",
      "x-parser-unique-object-id": "suspend_submit"
    },
    "suspend_error": {
      "address": "suspend_error",
      "messages": {
        "suspend_error.message": {
          "description": "suspend error response",
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
            "x-parser-schema-id": "suspend_error"
          },
          "x-parser-unique-object-id": "suspend_error.message",
          "x-parser-message-name": "suspend_error"
        }
      },
      "description": "Use this channel to receive suspend errors as **suspend_error** messages.\n",
      "x-parser-unique-object-id": "suspend_error"
    },
    "resume_submit": {
      "address": "resume_submit",
      "messages": {
        "resume_submit.message": {
          "description": "resume request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "transactionId": "$ref:$.channels.cancel_submit.messages.cancel_submit.message.payload.properties.transactionId"
            },
            "x-parser-schema-id": "resume_submit"
          },
          "x-parser-unique-object-id": "resume_submit.message",
          "x-parser-message-name": "resume_submit"
        }
      },
      "description": "Send a **resume_submit** message in this channel.\n",
      "x-parser-unique-object-id": "resume_submit"
    },
    "resume_error": {
      "address": "resume_error",
      "messages": {
        "resume_error.message": {
          "description": "resume error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_TRANSACTION",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-21>"
                },
                "x-parser-schema-id": "<anonymous-schema-20>"
              }
            },
            "x-parser-schema-id": "resume_error"
          },
          "x-parser-unique-object-id": "resume_error.message",
          "x-parser-message-name": "resume_error"
        }
      },
      "description": "Use this channel to receive resume errors as **resume_error** messages.\n",
      "x-parser-unique-object-id": "resume_error"
    },
    "cancelAll_error": {
      "address": "cancelAll_error",
      "messages": {
        "cancelAll_error.message": {
          "description": "cancelAll error response",
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
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "OTHER_ERROR"
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
            "x-parser-schema-id": "cancelAll_error"
          },
          "x-parser-unique-object-id": "cancelAll_error.message",
          "x-parser-message-name": "cancelAll_error"
        }
      },
      "description": "Use this channel to receive cancelAll errors as **cancelAll_error** messages.\n",
      "x-parser-unique-object-id": "cancelAll_error"
    },
    "suspendAll_submit": {
      "address": "suspendAll_submit",
      "messages": {
        "suspendAll_submit.message": {
          "description": "suspendAll request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-27>"
              },
              "entityId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "window": {
                "description": "This enumeration represents the communication windows of a file transfer entity. It should be noted that the reception/transmission is from the point of view of the entity being addressed.",
                "enum": [
                  "TX_WINDOW",
                  "RX_WINDOW",
                  "BOTH_WINDOW"
                ],
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-29>"
              }
            },
            "x-parser-schema-id": "suspendAll_submit"
          },
          "x-parser-unique-object-id": "suspendAll_submit.message",
          "x-parser-message-name": "suspendAll_submit"
        }
      },
      "description": "Send a **suspendAll_submit** message in this channel.\n",
      "x-parser-unique-object-id": "suspendAll_submit"
    },
    "suspendAll_error": {
      "address": "suspendAll_error",
      "messages": {
        "suspendAll_error.message": {
          "description": "suspendAll error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-30>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-31>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_ENTITY",
                  "CANNOT_SET_MIB_VALUE",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-32>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-34>"
                },
                "x-parser-schema-id": "<anonymous-schema-33>"
              }
            },
            "x-parser-schema-id": "suspendAll_error"
          },
          "x-parser-unique-object-id": "suspendAll_error.message",
          "x-parser-message-name": "suspendAll_error"
        }
      },
      "description": "Use this channel to receive suspendAll errors as **suspendAll_error** messages.\n",
      "x-parser-unique-object-id": "suspendAll_error"
    },
    "resumeAll_submit": {
      "address": "resumeAll_submit",
      "messages": {
        "resumeAll_submit.message": {
          "description": "resumeAll request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "entityId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "window": "$ref:$.channels.suspendAll_submit.messages.suspendAll_submit.message.payload.properties.window"
            },
            "x-parser-schema-id": "resumeAll_submit"
          },
          "x-parser-unique-object-id": "resumeAll_submit.message",
          "x-parser-message-name": "resumeAll_submit"
        }
      },
      "description": "Send a **resumeAll_submit** message in this channel.\n",
      "x-parser-unique-object-id": "resumeAll_submit"
    },
    "resumeAll_error": {
      "address": "resumeAll_error",
      "messages": {
        "resumeAll_error.message": {
          "description": "resumeAll error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-37>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-38>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_ENTITY",
                  "CANNOT_SET_MIB_VALUE",
                  "OTHER_ERROR"
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
            "x-parser-schema-id": "resumeAll_error"
          },
          "x-parser-unique-object-id": "resumeAll_error.message",
          "x-parser-message-name": "resumeAll_error"
        }
      },
      "description": "Use this channel to receive resumeAll errors as **resumeAll_error** messages.\n",
      "x-parser-unique-object-id": "resumeAll_error"
    },
    "getTransactionReport_request": {
      "address": "getTransactionReport_request",
      "messages": {
        "getTransactionReport_request.message": {
          "description": "getTransactionReport request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-42>"
              },
              "transactionId": "$ref:$.channels.cancel_submit.messages.cancel_submit.message.payload.properties.transactionId"
            },
            "x-parser-schema-id": "getTransactionReport_request"
          },
          "x-parser-unique-object-id": "getTransactionReport_request.message",
          "x-parser-message-name": "getTransactionReport_request"
        }
      },
      "description": "Send a **getTransactionReport_request** message in this channel to receive a **getTransactionReport_response** message over the **getTransactionReport_response** channel.\n",
      "x-parser-unique-object-id": "getTransactionReport_request"
    },
    "getTransactionReport_response": {
      "address": null,
      "messages": {
        "getTransactionReport_response.message": {
          "description": "getTransactionReport response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-43>"
              },
              "report": {
                "properties": {
                  "sourcePath": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-45>"
                  },
                  "targetPath": {
                    "description": "",
                    "format": "uri",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-46>"
                  },
                  "transactionId": "$ref:$.channels.cancel_submit.messages.cancel_submit.message.payload.properties.transactionId",
                  "transactionResponseCode": {
                    "description": "",
                    "enum": [
                      "UNSUCCESSFUL",
                      "SUCCESSFUL",
                      "UNKNOWN"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-47>"
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
                    "x-parser-schema-id": "<anonymous-schema-48>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-44>"
              }
            },
            "x-parser-schema-id": "getTransactionReport_response"
          },
          "x-parser-unique-object-id": "getTransactionReport_response.message",
          "x-parser-message-name": "getTransactionReport_response"
        }
      },
      "description": "Use this channel to receive getTransactionReport responses as **getTransactionReport_response** messages.\n",
      "x-parser-unique-object-id": "getTransactionReport_response"
    },
    "getTransactionReport_error": {
      "address": "getTransactionReport_error",
      "messages": {
        "getTransactionReport_error.message": {
          "description": "getTransactionReport error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-49>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-50>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_TRANSACTION",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-51>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-53>"
                },
                "x-parser-schema-id": "<anonymous-schema-52>"
              }
            },
            "x-parser-schema-id": "getTransactionReport_error"
          },
          "x-parser-unique-object-id": "getTransactionReport_error.message",
          "x-parser-message-name": "getTransactionReport_error"
        }
      },
      "description": "Use this channel to receive getTransactionReport errors as **getTransactionReport_error** messages.\n",
      "x-parser-unique-object-id": "getTransactionReport_error"
    },
    "listTransactions_request": {
      "address": "listTransactions_request",
      "messages": {
        "listTransactions_request.message": {
          "description": "listTransactions request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-54>"
              },
              "entityId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-55>"
              }
            },
            "x-parser-schema-id": "listTransactions_request"
          },
          "x-parser-unique-object-id": "listTransactions_request.message",
          "x-parser-message-name": "listTransactions_request"
        }
      },
      "description": "Send a **listTransactions_request** message in this channel to receive a **listTransactions_response** message over the **listTransactions_response** channel.\n",
      "x-parser-unique-object-id": "listTransactions_request"
    },
    "listTransactions_response": {
      "address": null,
      "messages": {
        "listTransactions_response.message": {
          "description": "listTransactions response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-56>"
              },
              "transactionList": "$ref:$.channels.getTransactionReport_response.messages.getTransactionReport_response.message.payload.properties.report"
            },
            "x-parser-schema-id": "listTransactions_response"
          },
          "x-parser-unique-object-id": "listTransactions_response.message",
          "x-parser-message-name": "listTransactions_response"
        }
      },
      "description": "Use this channel to receive listTransactions responses as **listTransactions_response** messages.\n",
      "x-parser-unique-object-id": "listTransactions_response"
    },
    "listTransactions_error": {
      "address": "listTransactions_error",
      "messages": {
        "listTransactions_error.message": {
          "description": "listTransactions error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-57>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-58>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_ENTITY",
                  "UNKNOWN_TRANSACTION",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-59>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-61>"
                },
                "x-parser-schema-id": "<anonymous-schema-60>"
              }
            },
            "x-parser-schema-id": "listTransactions_error"
          },
          "x-parser-unique-object-id": "listTransactions_error.message",
          "x-parser-message-name": "listTransactions_error"
        }
      },
      "description": "Use this channel to receive listTransactions errors as **listTransactions_error** messages.\n",
      "x-parser-unique-object-id": "listTransactions_error"
    },
    "getWindowStatus_request": {
      "address": "getWindowStatus_request",
      "messages": {
        "getWindowStatus_request.message": {
          "description": "getWindowStatus request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-62>"
              },
              "entityId": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-63>"
              }
            },
            "x-parser-schema-id": "getWindowStatus_request"
          },
          "x-parser-unique-object-id": "getWindowStatus_request.message",
          "x-parser-message-name": "getWindowStatus_request"
        }
      },
      "description": "Send a **getWindowStatus_request** message in this channel to receive a **getWindowStatus_response** message over the **getWindowStatus_response** channel.\n",
      "x-parser-unique-object-id": "getWindowStatus_request"
    },
    "getWindowStatus_response": {
      "address": null,
      "messages": {
        "getWindowStatus_response.message": {
          "description": "getWindowStatus response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-64>"
              },
              "statusReporty": {
                "properties": {
                  "rxWindowOpen": {
                    "description": "Returns true if the receive window is open otherwise false.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-66>"
                  },
                  "txWindowOpen": {
                    "description": "Returns true if the transmit window is open otherwise false.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-67>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-65>"
              }
            },
            "x-parser-schema-id": "getWindowStatus_response"
          },
          "x-parser-unique-object-id": "getWindowStatus_response.message",
          "x-parser-message-name": "getWindowStatus_response"
        }
      },
      "description": "Use this channel to receive getWindowStatus responses as **getWindowStatus_response** messages.\n",
      "x-parser-unique-object-id": "getWindowStatus_response"
    },
    "getWindowStatus_error": {
      "address": "getWindowStatus_error",
      "messages": {
        "getWindowStatus_error.message": {
          "description": "getWindowStatus error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-68>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "FM"
                ],
                "x-parser-schema-id": "<anonymous-schema-69>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN_ENTITY",
                  "CANNOT_GET_MIB_VALUE",
                  "OTHER_ERROR"
                ],
                "x-parser-schema-id": "<anonymous-schema-70>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-72>"
                },
                "x-parser-schema-id": "<anonymous-schema-71>"
              }
            },
            "x-parser-schema-id": "getWindowStatus_error"
          },
          "x-parser-unique-object-id": "getWindowStatus_error.message",
          "x-parser-message-name": "getWindowStatus_error"
        }
      },
      "description": "Use this channel to receive getWindowStatus errors as **getWindowStatus_error** messages.\n",
      "x-parser-unique-object-id": "getWindowStatus_error"
    }
  },
  "operations": {
    "cancel_submit": {
      "action": "send",
      "channel": "$ref:$.channels.cancel_submit",
      "messages": [
        "$ref:$.channels.cancel_submit.messages.cancel_submit.message"
      ],
      "x-parser-unique-object-id": "cancel_submit"
    },
    "cancel_error": {
      "action": "receive",
      "channel": "$ref:$.channels.cancel_error",
      "messages": [
        "$ref:$.channels.cancel_error.messages.cancel_error.message"
      ],
      "x-parser-unique-object-id": "cancel_error"
    },
    "suspend_submit": {
      "action": "send",
      "channel": "$ref:$.channels.suspend_submit",
      "messages": [
        "$ref:$.channels.suspend_submit.messages.suspend_submit.message"
      ],
      "x-parser-unique-object-id": "suspend_submit"
    },
    "suspend_error": {
      "action": "receive",
      "channel": "$ref:$.channels.suspend_error",
      "messages": [
        "$ref:$.channels.suspend_error.messages.suspend_error.message"
      ],
      "x-parser-unique-object-id": "suspend_error"
    },
    "resume_submit": {
      "action": "send",
      "channel": "$ref:$.channels.resume_submit",
      "messages": [
        "$ref:$.channels.resume_submit.messages.resume_submit.message"
      ],
      "x-parser-unique-object-id": "resume_submit"
    },
    "resume_error": {
      "action": "receive",
      "channel": "$ref:$.channels.resume_error",
      "messages": [
        "$ref:$.channels.resume_error.messages.resume_error.message"
      ],
      "x-parser-unique-object-id": "resume_error"
    },
    "cancelAll_error": {
      "action": "receive",
      "channel": "$ref:$.channels.cancelAll_error",
      "messages": [
        "$ref:$.channels.cancelAll_error.messages.cancelAll_error.message"
      ],
      "x-parser-unique-object-id": "cancelAll_error"
    },
    "suspendAll_submit": {
      "action": "send",
      "channel": "$ref:$.channels.suspendAll_submit",
      "messages": [
        "$ref:$.channels.suspendAll_submit.messages.suspendAll_submit.message"
      ],
      "x-parser-unique-object-id": "suspendAll_submit"
    },
    "suspendAll_error": {
      "action": "receive",
      "channel": "$ref:$.channels.suspendAll_error",
      "messages": [
        "$ref:$.channels.suspendAll_error.messages.suspendAll_error.message"
      ],
      "x-parser-unique-object-id": "suspendAll_error"
    },
    "resumeAll_submit": {
      "action": "send",
      "channel": "$ref:$.channels.resumeAll_submit",
      "messages": [
        "$ref:$.channels.resumeAll_submit.messages.resumeAll_submit.message"
      ],
      "x-parser-unique-object-id": "resumeAll_submit"
    },
    "resumeAll_error": {
      "action": "receive",
      "channel": "$ref:$.channels.resumeAll_error",
      "messages": [
        "$ref:$.channels.resumeAll_error.messages.resumeAll_error.message"
      ],
      "x-parser-unique-object-id": "resumeAll_error"
    },
    "getTransactionReport_request": {
      "action": "send",
      "channel": "$ref:$.channels.getTransactionReport_request",
      "messages": [
        "$ref:$.channels.getTransactionReport_request.messages.getTransactionReport_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getTransactionReport_response"
      },
      "x-parser-unique-object-id": "getTransactionReport_request"
    },
    "getTransactionReport_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getTransactionReport_response",
      "messages": [
        "$ref:$.channels.getTransactionReport_response.messages.getTransactionReport_response.message"
      ],
      "x-parser-unique-object-id": "getTransactionReport_response"
    },
    "getTransactionReport_error": {
      "action": "receive",
      "channel": "$ref:$.channels.getTransactionReport_error",
      "messages": [
        "$ref:$.channels.getTransactionReport_error.messages.getTransactionReport_error.message"
      ],
      "x-parser-unique-object-id": "getTransactionReport_error"
    },
    "listTransactions_request": {
      "action": "send",
      "channel": "$ref:$.channels.listTransactions_request",
      "messages": [
        "$ref:$.channels.listTransactions_request.messages.listTransactions_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.listTransactions_response"
      },
      "x-parser-unique-object-id": "listTransactions_request"
    },
    "listTransactions_response": {
      "action": "receive",
      "channel": "$ref:$.channels.listTransactions_response",
      "messages": [
        "$ref:$.channels.listTransactions_response.messages.listTransactions_response.message"
      ],
      "x-parser-unique-object-id": "listTransactions_response"
    },
    "listTransactions_error": {
      "action": "receive",
      "channel": "$ref:$.channels.listTransactions_error",
      "messages": [
        "$ref:$.channels.listTransactions_error.messages.listTransactions_error.message"
      ],
      "x-parser-unique-object-id": "listTransactions_error"
    },
    "getWindowStatus_request": {
      "action": "send",
      "channel": "$ref:$.channels.getWindowStatus_request",
      "messages": [
        "$ref:$.channels.getWindowStatus_request.messages.getWindowStatus_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getWindowStatus_response"
      },
      "x-parser-unique-object-id": "getWindowStatus_request"
    },
    "getWindowStatus_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getWindowStatus_response",
      "messages": [
        "$ref:$.channels.getWindowStatus_response.messages.getWindowStatus_response.message"
      ],
      "x-parser-unique-object-id": "getWindowStatus_response"
    },
    "getWindowStatus_error": {
      "action": "receive",
      "channel": "$ref:$.channels.getWindowStatus_error",
      "messages": [
        "$ref:$.channels.getWindowStatus_error.messages.getWindowStatus_error.message"
      ],
      "x-parser-unique-object-id": "getWindowStatus_error"
    }
  },
  "components": {
    "schemas": {
      "cancel_submit": "$ref:$.channels.cancel_submit.messages.cancel_submit.message.payload",
      "cancel_error": "$ref:$.channels.cancel_error.messages.cancel_error.message.payload",
      "suspend_submit": "$ref:$.channels.suspend_submit.messages.suspend_submit.message.payload",
      "suspend_error": "$ref:$.channels.suspend_error.messages.suspend_error.message.payload",
      "resume_submit": "$ref:$.channels.resume_submit.messages.resume_submit.message.payload",
      "resume_error": "$ref:$.channels.resume_error.messages.resume_error.message.payload",
      "cancelAll_error": "$ref:$.channels.cancelAll_error.messages.cancelAll_error.message.payload",
      "suspendAll_submit": "$ref:$.channels.suspendAll_submit.messages.suspendAll_submit.message.payload",
      "suspendAll_error": "$ref:$.channels.suspendAll_error.messages.suspendAll_error.message.payload",
      "resumeAll_submit": "$ref:$.channels.resumeAll_submit.messages.resumeAll_submit.message.payload",
      "resumeAll_error": "$ref:$.channels.resumeAll_error.messages.resumeAll_error.message.payload",
      "getTransactionReport_request": "$ref:$.channels.getTransactionReport_request.messages.getTransactionReport_request.message.payload",
      "getTransactionReport_response": "$ref:$.channels.getTransactionReport_response.messages.getTransactionReport_response.message.payload",
      "getTransactionReport_error": "$ref:$.channels.getTransactionReport_error.messages.getTransactionReport_error.message.payload",
      "listTransactions_request": "$ref:$.channels.listTransactions_request.messages.listTransactions_request.message.payload",
      "listTransactions_response": "$ref:$.channels.listTransactions_response.messages.listTransactions_response.message.payload",
      "listTransactions_error": "$ref:$.channels.listTransactions_error.messages.listTransactions_error.message.payload",
      "getWindowStatus_request": "$ref:$.channels.getWindowStatus_request.messages.getWindowStatus_request.message.payload",
      "getWindowStatus_response": "$ref:$.channels.getWindowStatus_response.messages.getWindowStatus_response.message.payload",
      "getWindowStatus_error": "$ref:$.channels.getWindowStatus_error.messages.getWindowStatus_error.message.payload",
      "fm": {
        "file_transfer": {
          "FileTransactionId": "$ref:$.channels.cancel_submit.messages.cancel_submit.message.payload.properties.transactionId",
          "FileTransactionReport": "$ref:$.channels.getTransactionReport_response.messages.getTransactionReport_response.message.payload.properties.report",
          "FileTransactionResponseCode": "$ref:$.channels.getTransactionReport_response.messages.getTransactionReport_response.message.payload.properties.report.properties.transactionResponseCode",
          "FileTransactionStatus": "$ref:$.channels.getTransactionReport_response.messages.getTransactionReport_response.message.payload.properties.report.properties.transactionStatus",
          "FileTransferWindow": "$ref:$.channels.suspendAll_submit.messages.suspendAll_submit.message.payload.properties.window",
          "WindowStatusReport": "$ref:$.channels.getWindowStatus_response.messages.getWindowStatus_response.message.payload.properties.statusReporty"
        },
        "x-parser-schema-id": "fm"
      }
    },
    "messages": {
      "cancel_submit": "$ref:$.channels.cancel_submit.messages.cancel_submit.message",
      "cancel_error": "$ref:$.channels.cancel_error.messages.cancel_error.message",
      "suspend_submit": "$ref:$.channels.suspend_submit.messages.suspend_submit.message",
      "suspend_error": "$ref:$.channels.suspend_error.messages.suspend_error.message",
      "resume_submit": "$ref:$.channels.resume_submit.messages.resume_submit.message",
      "resume_error": "$ref:$.channels.resume_error.messages.resume_error.message",
      "cancelAll_error": "$ref:$.channels.cancelAll_error.messages.cancelAll_error.message",
      "suspendAll_submit": "$ref:$.channels.suspendAll_submit.messages.suspendAll_submit.message",
      "suspendAll_error": "$ref:$.channels.suspendAll_error.messages.suspendAll_error.message",
      "resumeAll_submit": "$ref:$.channels.resumeAll_submit.messages.resumeAll_submit.message",
      "resumeAll_error": "$ref:$.channels.resumeAll_error.messages.resumeAll_error.message",
      "getTransactionReport_request": "$ref:$.channels.getTransactionReport_request.messages.getTransactionReport_request.message",
      "getTransactionReport_response": "$ref:$.channels.getTransactionReport_response.messages.getTransactionReport_response.message",
      "getTransactionReport_error": "$ref:$.channels.getTransactionReport_error.messages.getTransactionReport_error.message",
      "listTransactions_request": "$ref:$.channels.listTransactions_request.messages.listTransactions_request.message",
      "listTransactions_response": "$ref:$.channels.listTransactions_response.messages.listTransactions_response.message",
      "listTransactions_error": "$ref:$.channels.listTransactions_error.messages.listTransactions_error.message",
      "getWindowStatus_request": "$ref:$.channels.getWindowStatus_request.messages.getWindowStatus_request.message",
      "getWindowStatus_response": "$ref:$.channels.getWindowStatus_response.messages.getWindowStatus_response.message",
      "getWindowStatus_error": "$ref:$.channels.getWindowStatus_error.messages.getWindowStatus_error.message"
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
  