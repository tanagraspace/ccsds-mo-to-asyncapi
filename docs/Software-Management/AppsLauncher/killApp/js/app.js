
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "AppsLauncher Service killApp API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the killApp interaction of the AppsLauncher Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the AppsLauncher Service's killApp interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_AppsLauncher_killApp": {
      "address": "submit_AppsLauncher_killApp",
      "messages": {
        "AppsLauncher.killApp_submit.message": {
          "description": "AppsLauncher killApp request submission",
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
                "description": "The appInstIds field contains the list of apps to be killed.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "AppsLauncher_killApp_submit"
          },
          "x-parser-unique-object-id": "AppsLauncher.killApp_submit.message",
          "x-parser-message-name": "AppsLauncher_killApp_submit"
        }
      },
      "description": "Send a **AppsLauncher_killApp_submit** message in this channel to receive a **AppsLauncher_killApp_None** message over the **None_AppsLauncher_killApp** channel.\n",
      "x-parser-unique-object-id": "submit_AppsLauncher_killApp"
    },
    "error_AppsLauncher_killApp": {
      "address": "error_AppsLauncher_killApp",
      "messages": {
        "AppsLauncher.killApp_error.message": {
          "description": "AppsLauncher killApp error response",
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
                  "INVALID"
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
            "x-parser-schema-id": "AppsLauncher_killApp_error"
          },
          "x-parser-unique-object-id": "AppsLauncher.killApp_error.message",
          "x-parser-message-name": "AppsLauncher_killApp_error"
        }
      },
      "description": "Use this channel to receive AppsLauncher killApp errors as **AppsLauncher_killApp_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_AppsLauncher_killApp"
    }
  },
  "operations": {
    "AppsLauncher_killApp_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_AppsLauncher_killApp",
      "messages": [
        "$ref:$.channels.submit_AppsLauncher_killApp.messages.AppsLauncher.killApp_submit.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_killApp_submit"
    },
    "AppsLauncher_killApp_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_AppsLauncher_killApp",
      "messages": [
        "$ref:$.channels.error_AppsLauncher_killApp.messages.AppsLauncher.killApp_error.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_killApp_error"
    }
  },
  "components": {
    "schemas": {
      "AppsLauncher_killApp_submit": "$ref:$.channels.submit_AppsLauncher_killApp.messages.AppsLauncher.killApp_submit.message.payload",
      "AppsLauncher_killApp_error": "$ref:$.channels.error_AppsLauncher_killApp.messages.AppsLauncher.killApp_error.message.payload"
    },
    "messages": {
      "AppsLauncher_killApp_submit": "$ref:$.channels.submit_AppsLauncher_killApp.messages.AppsLauncher.killApp_submit.message",
      "AppsLauncher_killApp_error": "$ref:$.channels.error_AppsLauncher_killApp.messages.AppsLauncher.killApp_error.message"
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
  