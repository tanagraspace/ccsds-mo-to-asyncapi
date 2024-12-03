
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "AppsLauncher Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the AppsLauncher Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the AppsLauncher Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "monitorExecution_publishNotify": {
      "address": null,
      "messages": {
        "monitorExecution_publishNotify.message": {
          "description": "monitorExecution response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "outputStream": {
                "type": "string",
                "description": "The outputStream field shall contain a stream of characters corresponding to the output stream of the application.\nThe MAL EntityKey.firstSubKey shall contain the App name.\nThe MAL EntityKey.secondSubKey shall contain the AppDetails object instance identifier.\nThe MAL EntityKey.thirdSubKey shall be NULL.\nThe MAL EntityKey.fourthSubKey shall be NULL.\nThe timestamp of the update shall be the on-board time when the update was published.\nThe publish message shall include the ObjectId of the source link of the update.\nIf no source link is needed then the ObjectId shall be replaced with a NULL.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "monitorExecution_publishNotify"
          },
          "x-parser-unique-object-id": "monitorExecution_publishNotify.message",
          "x-parser-message-name": "monitorExecution_publishNotify"
        }
      },
      "description": "Use this channel to receive monitorExecution responses as **monitorExecution_publishNotify** messages.\n",
      "x-parser-unique-object-id": "monitorExecution_publishNotify"
    },
    "runApp_submit": {
      "address": "runApp_submit",
      "messages": {
        "runApp_submit.message": {
          "description": "runApp request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "appInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "description": "The appInstIds field contains the list of apps to run.\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "runApp_submit"
          },
          "x-parser-unique-object-id": "runApp_submit.message",
          "x-parser-message-name": "runApp_submit"
        }
      },
      "description": "Send a **runApp_submit** message in this channel.\n",
      "x-parser-unique-object-id": "runApp_submit"
    },
    "runApp_error": {
      "address": "runApp_error",
      "messages": {
        "runApp_error.message": {
          "description": "runApp error response",
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
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID",
                  "INTERNAL"
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
            "x-parser-schema-id": "runApp_error"
          },
          "x-parser-unique-object-id": "runApp_error.message",
          "x-parser-message-name": "runApp_error"
        }
      },
      "description": "Use this channel to receive runApp errors as **runApp_error** messages.\n",
      "x-parser-unique-object-id": "runApp_error"
    },
    "killApp_submit": {
      "address": "killApp_submit",
      "messages": {
        "killApp_submit.message": {
          "description": "killApp request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "appInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "description": "The appInstIds field contains the list of apps to be killed.\n",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "killApp_submit"
          },
          "x-parser-unique-object-id": "killApp_submit.message",
          "x-parser-message-name": "killApp_submit"
        }
      },
      "description": "Send a **killApp_submit** message in this channel.\n",
      "x-parser-unique-object-id": "killApp_submit"
    },
    "killApp_error": {
      "address": "killApp_error",
      "messages": {
        "killApp_error.message": {
          "description": "killApp error response",
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
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
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
            "x-parser-schema-id": "killApp_error"
          },
          "x-parser-unique-object-id": "killApp_error.message",
          "x-parser-message-name": "killApp_error"
        }
      },
      "description": "Use this channel to receive killApp errors as **killApp_error** messages.\n",
      "x-parser-unique-object-id": "killApp_error"
    },
    "stopApp_progress": {
      "address": "stopApp_progress",
      "messages": {
        "stopApp_progress.message": {
          "description": "stopApp request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "appInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-21>"
                },
                "description": "The appInstIds field contains the list of apps to stop.\n",
                "x-parser-schema-id": "<anonymous-schema-20>"
              }
            },
            "x-parser-schema-id": "stopApp_progress"
          },
          "x-parser-unique-object-id": "stopApp_progress.message",
          "x-parser-message-name": "stopApp_progress"
        }
      },
      "description": "Send a **stopApp_progress** message in this channel to receive a **stopApp_update** message over the **stopApp_update** channel.\n",
      "x-parser-unique-object-id": "stopApp_progress"
    },
    "stopApp_update": {
      "address": null,
      "messages": {
        "stopApp_update.message": {
          "description": "stopApp response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "appClosing": {
                "type": "integer",
                "format": "int64",
                "description": "The appClosing field shall contain the object instance identifier of an app. This update shall be sent after the app acknowledges the reception of the command to stop.\n",
                "x-parser-schema-id": "<anonymous-schema-23>"
              }
            },
            "x-parser-schema-id": "stopApp_update"
          },
          "x-parser-unique-object-id": "stopApp_update.message",
          "x-parser-message-name": "stopApp_update"
        }
      },
      "description": "Use this channel to receive stopApp responses as **stopApp_update** messages.\n",
      "x-parser-unique-object-id": "stopApp_update"
    },
    "listApp_request": {
      "address": "listApp_request",
      "messages": {
        "listApp_request.message": {
          "description": "listApp request",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "appNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-26>"
                },
                "description": "The appNames field contains a list of application names.\n",
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "category": {
                "type": "string",
                "description": "The category field contains the category identifier to filter on.\n",
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "listApp_request"
          },
          "x-parser-unique-object-id": "listApp_request.message",
          "x-parser-message-name": "listApp_request"
        }
      },
      "description": "Send a **listApp_request** message in this channel to receive a **listApp_response** message over the **listApp_response** channel.\n",
      "x-parser-unique-object-id": "listApp_request"
    },
    "listApp_response": {
      "address": null,
      "messages": {
        "listApp_response.message": {
          "description": "listApp response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-28>"
              },
              "appInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-30>"
                },
                "description": "The appInstIds field contains a list of apps.\n",
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "running": {
                "type": "array",
                "items": {
                  "type": "boolean",
                  "x-parser-schema-id": "<anonymous-schema-32>"
                },
                "description": "The running field contains a list of boolean values with the information about thte running status of requested apps.\nThe returned lists shall maintain the same order as the submitted list unless the wildcard value was included in the appNames field request.\n",
                "x-parser-schema-id": "<anonymous-schema-31>"
              }
            },
            "x-parser-schema-id": "listApp_response"
          },
          "x-parser-unique-object-id": "listApp_response.message",
          "x-parser-message-name": "listApp_response"
        }
      },
      "description": "Use this channel to receive listApp responses as **listApp_response** messages.\n",
      "x-parser-unique-object-id": "listApp_response"
    },
    "listApp_error": {
      "address": "listApp_error",
      "messages": {
        "listApp_error.message": {
          "description": "listApp error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-33>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-34>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-37>"
                },
                "x-parser-schema-id": "<anonymous-schema-36>"
              }
            },
            "x-parser-schema-id": "listApp_error"
          },
          "x-parser-unique-object-id": "listApp_error.message",
          "x-parser-message-name": "listApp_error"
        }
      },
      "description": "Use this channel to receive listApp errors as **listApp_error** messages.\n",
      "x-parser-unique-object-id": "listApp_error"
    }
  },
  "operations": {
    "monitorExecution_publishNotify": {
      "action": "receive",
      "channel": "$ref:$.channels.monitorExecution_publishNotify",
      "messages": [
        "$ref:$.channels.monitorExecution_publishNotify.messages.monitorExecution_publishNotify.message"
      ],
      "x-parser-unique-object-id": "monitorExecution_publishNotify"
    },
    "runApp_submit": {
      "action": "send",
      "channel": "$ref:$.channels.runApp_submit",
      "messages": [
        "$ref:$.channels.runApp_submit.messages.runApp_submit.message"
      ],
      "x-parser-unique-object-id": "runApp_submit"
    },
    "runApp_error": {
      "action": "receive",
      "channel": "$ref:$.channels.runApp_error",
      "messages": [
        "$ref:$.channels.runApp_error.messages.runApp_error.message"
      ],
      "x-parser-unique-object-id": "runApp_error"
    },
    "killApp_submit": {
      "action": "send",
      "channel": "$ref:$.channels.killApp_submit",
      "messages": [
        "$ref:$.channels.killApp_submit.messages.killApp_submit.message"
      ],
      "x-parser-unique-object-id": "killApp_submit"
    },
    "killApp_error": {
      "action": "receive",
      "channel": "$ref:$.channels.killApp_error",
      "messages": [
        "$ref:$.channels.killApp_error.messages.killApp_error.message"
      ],
      "x-parser-unique-object-id": "killApp_error"
    },
    "stopApp_progress": {
      "action": "send",
      "channel": "$ref:$.channels.stopApp_progress",
      "messages": [
        "$ref:$.channels.stopApp_progress.messages.stopApp_progress.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.stopApp_update"
      },
      "x-parser-unique-object-id": "stopApp_progress"
    },
    "stopApp_update": {
      "action": "receive",
      "channel": "$ref:$.channels.stopApp_update",
      "messages": [
        "$ref:$.channels.stopApp_update.messages.stopApp_update.message"
      ],
      "x-parser-unique-object-id": "stopApp_update"
    },
    "listApp_request": {
      "action": "send",
      "channel": "$ref:$.channels.listApp_request",
      "messages": [
        "$ref:$.channels.listApp_request.messages.listApp_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.listApp_response"
      },
      "x-parser-unique-object-id": "listApp_request"
    },
    "listApp_response": {
      "action": "receive",
      "channel": "$ref:$.channels.listApp_response",
      "messages": [
        "$ref:$.channels.listApp_response.messages.listApp_response.message"
      ],
      "x-parser-unique-object-id": "listApp_response"
    },
    "listApp_error": {
      "action": "receive",
      "channel": "$ref:$.channels.listApp_error",
      "messages": [
        "$ref:$.channels.listApp_error.messages.listApp_error.message"
      ],
      "x-parser-unique-object-id": "listApp_error"
    }
  },
  "components": {
    "schemas": {
      "monitorExecution_subscriptionKeys": {
        "description": "A request message with no payload.",
        "type": "object",
        "additionalProperties": false,
        "x-parser-schema-id": "monitorExecution_subscriptionKeys"
      },
      "monitorExecution_publishNotify": "$ref:$.channels.monitorExecution_publishNotify.messages.monitorExecution_publishNotify.message.payload",
      "runApp_submit": "$ref:$.channels.runApp_submit.messages.runApp_submit.message.payload",
      "runApp_error": "$ref:$.channels.runApp_error.messages.runApp_error.message.payload",
      "killApp_submit": "$ref:$.channels.killApp_submit.messages.killApp_submit.message.payload",
      "killApp_error": "$ref:$.channels.killApp_error.messages.killApp_error.message.payload",
      "stopApp_progress": "$ref:$.channels.stopApp_progress.messages.stopApp_progress.message.payload",
      "stopApp_update": "$ref:$.channels.stopApp_update.messages.stopApp_update.message.payload",
      "listApp_request": "$ref:$.channels.listApp_request.messages.listApp_request.message.payload",
      "listApp_response": "$ref:$.channels.listApp_response.messages.listApp_response.message.payload",
      "listApp_error": "$ref:$.channels.listApp_error.messages.listApp_error.message.payload"
    },
    "messages": {
      "monitorExecution_publishNotify": "$ref:$.channels.monitorExecution_publishNotify.messages.monitorExecution_publishNotify.message",
      "runApp_submit": "$ref:$.channels.runApp_submit.messages.runApp_submit.message",
      "runApp_error": "$ref:$.channels.runApp_error.messages.runApp_error.message",
      "killApp_submit": "$ref:$.channels.killApp_submit.messages.killApp_submit.message",
      "killApp_error": "$ref:$.channels.killApp_error.messages.killApp_error.message",
      "stopApp_progress": "$ref:$.channels.stopApp_progress.messages.stopApp_progress.message",
      "stopApp_update": "$ref:$.channels.stopApp_update.messages.stopApp_update.message",
      "listApp_request": "$ref:$.channels.listApp_request.messages.listApp_request.message",
      "listApp_response": "$ref:$.channels.listApp_response.messages.listApp_response.message",
      "listApp_error": "$ref:$.channels.listApp_error.messages.listApp_error.message"
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
  