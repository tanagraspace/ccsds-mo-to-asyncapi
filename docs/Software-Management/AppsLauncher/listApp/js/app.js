
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "AppsLauncher Service listApp API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listApp interaction of the AppsLauncher Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the AppsLauncher Service's listApp interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_AppsLauncher_listApp": {
      "address": "request_AppsLauncher_listApp",
      "messages": {
        "AppsLauncher.listApp_request.message": {
          "description": "AppsLauncher listApp request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "appNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The appNames field contains a list of application names.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "category": {
                "type": "string",
                "description": "The category field contains the category identifier to filter on.\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "AppsLauncher_listApp_request"
          },
          "x-parser-unique-object-id": "AppsLauncher.listApp_request.message",
          "x-parser-message-name": "AppsLauncher_listApp_request"
        }
      },
      "description": "Send a **AppsLauncher_listApp_request** message in this channel to receive a **AppsLauncher_listApp_response** message over the **response_AppsLauncher_listApp** channel.\n",
      "x-parser-unique-object-id": "request_AppsLauncher_listApp"
    },
    "response_AppsLauncher_listApp": {
      "address": "response_AppsLauncher_listApp",
      "messages": {
        "AppsLauncher.listApp_response.message": {
          "description": "AppsLauncher listApp update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "appInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "description": "The appInstIds field contains a list of apps.\n",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "running": {
                "type": "array",
                "items": {
                  "type": "boolean",
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "description": "The running field contains a list of boolean values with the information about thte running status of requested apps.\nThe returned lists shall maintain the same order as the submitted list unless the wildcard value was included in the appNames field request.\n",
                "x-parser-schema-id": "<anonymous-schema-8>"
              }
            },
            "x-parser-schema-id": "AppsLauncher_listApp_response"
          },
          "x-parser-unique-object-id": "AppsLauncher.listApp_response.message",
          "x-parser-message-name": "AppsLauncher_listApp_response"
        }
      },
      "description": "Use this channel to receive AppsLauncher listApp responses as **AppsLauncher_listApp_response** messages.\n",
      "x-parser-unique-object-id": "response_AppsLauncher_listApp"
    },
    "error_AppsLauncher_listApp": {
      "address": "error_AppsLauncher_listApp",
      "messages": {
        "AppsLauncher.listApp_error.message": {
          "description": "AppsLauncher listApp error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
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
            "x-parser-schema-id": "AppsLauncher_listApp_error"
          },
          "x-parser-unique-object-id": "AppsLauncher.listApp_error.message",
          "x-parser-message-name": "AppsLauncher_listApp_error"
        }
      },
      "description": "Use this channel to receive AppsLauncher listApp errors as **AppsLauncher_listApp_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_AppsLauncher_listApp"
    }
  },
  "operations": {
    "AppsLauncher_listApp_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_AppsLauncher_listApp",
      "messages": [
        "$ref:$.channels.request_AppsLauncher_listApp.messages.AppsLauncher.listApp_request.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_listApp_request"
    },
    "AppsLauncher_listApp_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_AppsLauncher_listApp",
      "messages": [
        "$ref:$.channels.response_AppsLauncher_listApp.messages.AppsLauncher.listApp_response.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_listApp_response"
    },
    "AppsLauncher_listApp_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_AppsLauncher_listApp",
      "messages": [
        "$ref:$.channels.error_AppsLauncher_listApp.messages.AppsLauncher.listApp_error.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_listApp_error"
    }
  },
  "components": {
    "schemas": {
      "AppsLauncher_listApp_request": "$ref:$.channels.request_AppsLauncher_listApp.messages.AppsLauncher.listApp_request.message.payload",
      "AppsLauncher_listApp_response": "$ref:$.channels.response_AppsLauncher_listApp.messages.AppsLauncher.listApp_response.message.payload",
      "AppsLauncher_listApp_error": "$ref:$.channels.error_AppsLauncher_listApp.messages.AppsLauncher.listApp_error.message.payload"
    },
    "messages": {
      "AppsLauncher_listApp_request": "$ref:$.channels.request_AppsLauncher_listApp.messages.AppsLauncher.listApp_request.message",
      "AppsLauncher_listApp_response": "$ref:$.channels.response_AppsLauncher_listApp.messages.AppsLauncher.listApp_response.message",
      "AppsLauncher_listApp_error": "$ref:$.channels.error_AppsLauncher_listApp.messages.AppsLauncher.listApp_error.message"
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
  