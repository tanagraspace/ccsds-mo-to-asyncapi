
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "AppsLauncher Service monitorExecution API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the monitorExecution interaction of the AppsLauncher Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the AppsLauncher Service's monitorExecution interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "publishNotify_AppsLauncher_monitorExecution": {
      "address": "publishNotify_AppsLauncher_monitorExecution",
      "messages": {
        "AppsLauncher.monitorExecution_publishNotify.message": {
          "description": "AppsLauncher monitorExecution update response",
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
            "x-parser-schema-id": "AppsLauncher_monitorExecution_publishNotify"
          },
          "x-parser-unique-object-id": "AppsLauncher.monitorExecution_publishNotify.message",
          "x-parser-message-name": "AppsLauncher_monitorExecution_publishNotify"
        }
      },
      "description": "Use this channel to receive AppsLauncher monitorExecution responses as **AppsLauncher_monitorExecution_publishNotify** messages.\n",
      "x-parser-unique-object-id": "publishNotify_AppsLauncher_monitorExecution"
    }
  },
  "operations": {
    "AppsLauncher_monitorExecution_publishNotify": {
      "action": "receive",
      "channel": "$ref:$.channels.publishNotify_AppsLauncher_monitorExecution",
      "messages": [
        "$ref:$.channels.publishNotify_AppsLauncher_monitorExecution.messages.AppsLauncher.monitorExecution_publishNotify.message"
      ],
      "x-parser-unique-object-id": "AppsLauncher_monitorExecution_publishNotify"
    }
  },
  "components": {
    "schemas": {
      "AppsLauncher_monitorExecution_publishNotify": "$ref:$.channels.publishNotify_AppsLauncher_monitorExecution.messages.AppsLauncher.monitorExecution_publishNotify.message.payload"
    },
    "messages": {
      "AppsLauncher_monitorExecution_publishNotify": "$ref:$.channels.publishNotify_AppsLauncher_monitorExecution.messages.AppsLauncher.monitorExecution_publishNotify.message"
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
  