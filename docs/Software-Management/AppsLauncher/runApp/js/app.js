
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "AppsLauncher Service runApp API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the runApp interaction of the AppsLauncher Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the AppsLauncher Service's runApp interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_AppsLauncher_runApp": {
      "address": "submit_AppsLauncher_runApp",
      "messages": {
        "AppsLauncher.runApp_submit.message": {
          "description": "AppsLauncher runApp request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "appInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The appInstIds field contains the list of apps to run.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "AppsLauncher_runApp_submit"
          },
          "x-parser-unique-object-id": "AppsLauncher.runApp_submit.message",
          "x-parser-message-name": "AppsLauncher_runApp_submit"
        }
      },
      "description": "Send a **AppsLauncher_runApp_submit** message in this channel to receive a **AppsLauncher_runApp_None** message over the **None_AppsLauncher_runApp** channel.\n",
      "x-parser-unique-object-id": "submit_AppsLauncher_runApp"
    },
    "error_AppsLauncher_runApp": {
      "address": "error_AppsLauncher_runApp",
      "messages": {
        "AppsLauncher.runApp_error.message": {
          "description": "AppsLauncher runApp error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID",
                  "INTERNAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "AppsLauncher_runApp_error"
          },
          "x-parser-unique-object-id": "AppsLauncher.runApp_error.message",
          "x-parser-message-name": "AppsLauncher_runApp_error"
        }
      },
      "description": "Use this channel to receive AppsLauncher runApp errors as **AppsLauncher_runApp_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_AppsLauncher_runApp"
    }
  },
  "operations": {
    "AppsLauncher_runApp_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_AppsLauncher_runApp",
      "messages": [
        "$ref:$.channels.submit_AppsLauncher_runApp.messages.AppsLauncher.runApp_submit.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_runApp_submit"
    },
    "AppsLauncher_runApp_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_AppsLauncher_runApp",
      "messages": [
        "$ref:$.channels.error_AppsLauncher_runApp.messages.AppsLauncher.runApp_error.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_runApp_error"
    }
  },
  "components": {
    "schemas": {
      "AppsLauncher_runApp_submit": "$ref:$.channels.submit_AppsLauncher_runApp.messages.AppsLauncher.runApp_submit.message.payload",
      "AppsLauncher_runApp_error": "$ref:$.channels.error_AppsLauncher_runApp.messages.AppsLauncher.runApp_error.message.payload"
    },
    "messages": {
      "AppsLauncher_runApp_submit": "$ref:$.channels.submit_AppsLauncher_runApp.messages.AppsLauncher.runApp_submit.message",
      "AppsLauncher_runApp_error": "$ref:$.channels.error_AppsLauncher_runApp.messages.AppsLauncher.runApp_error.message"
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
  