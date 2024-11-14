
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "AppsLauncher Service stopApp API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the stopApp interaction of the AppsLauncher Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the AppsLauncher Service's stopApp interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "progress_AppsLauncher_stopApp": {
      "address": "progress_AppsLauncher_stopApp",
      "messages": {
        "AppsLauncher.stopApp_progress.message": {
          "description": "AppsLauncher stopApp request submission",
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
                "description": "The appInstIds field contains the list of apps to stop.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "AppsLauncher_stopApp_progress"
          },
          "x-parser-unique-object-id": "AppsLauncher.stopApp_progress.message",
          "x-parser-message-name": "AppsLauncher_stopApp_progress"
        }
      },
      "description": "Send a **AppsLauncher_stopApp_progress** message in this channel to receive a **AppsLauncher_stopApp_update** message over the **update_AppsLauncher_stopApp** channel.\n",
      "x-parser-unique-object-id": "progress_AppsLauncher_stopApp"
    },
    "update_AppsLauncher_stopApp": {
      "address": "update_AppsLauncher_stopApp",
      "messages": {
        "AppsLauncher.stopApp_update.message": {
          "description": "AppsLauncher stopApp update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "appClosing": {
                "type": "integer",
                "format": "int64",
                "description": "The appClosing field shall contain the object instance identifier of an app. This update shall be sent after the app acknowledges the reception of the command to stop.\n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "AppsLauncher_stopApp_update"
          },
          "x-parser-unique-object-id": "AppsLauncher.stopApp_update.message",
          "x-parser-message-name": "AppsLauncher_stopApp_update"
        }
      },
      "description": "Use this channel to receive AppsLauncher stopApp responses as **AppsLauncher_stopApp_update** messages.\n",
      "x-parser-unique-object-id": "update_AppsLauncher_stopApp"
    }
  },
  "operations": {
    "AppsLauncher_stopApp_progress": {
      "action": "send",
      "channel": "$ref:$.channels.progress_AppsLauncher_stopApp",
      "messages": [
        "$ref:$.channels.progress_AppsLauncher_stopApp.messages.AppsLauncher.stopApp_progress.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_stopApp_progress"
    },
    "AppsLauncher_stopApp_update": {
      "action": "receive",
      "channel": "$ref:$.channels.update_AppsLauncher_stopApp",
      "messages": [
        "$ref:$.channels.update_AppsLauncher_stopApp.messages.AppsLauncher.stopApp_update.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_stopApp_update"
    }
  },
  "components": {
    "schemas": {
      "AppsLauncher_stopApp_progress": "$ref:$.channels.progress_AppsLauncher_stopApp.messages.AppsLauncher.stopApp_progress.message.payload",
      "AppsLauncher_stopApp_update": "$ref:$.channels.update_AppsLauncher_stopApp.messages.AppsLauncher.stopApp_update.message.payload"
    },
    "messages": {
      "AppsLauncher_stopApp_progress": "$ref:$.channels.progress_AppsLauncher_stopApp.messages.AppsLauncher.stopApp_progress.message",
      "AppsLauncher_stopApp_update": "$ref:$.channels.update_AppsLauncher_stopApp.messages.AppsLauncher.stopApp_update.message"
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
  