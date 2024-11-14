
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service enableService API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableService interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's enableService interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Statistic_enableService": {
      "address": "submit_Statistic_enableService",
      "messages": {
        "Statistic.enableService_submit.message": {
          "description": "Statistic enableService request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "enableService": {
                "type": "boolean",
                "description": "If enableService is set to TRUE the service shall be enabled and evaluation and reporting of statistics will be reset and commence.\nIf enableService is set to FALSE then all evaluation of statistics shall be suspended and no statistics will be reported.\nIf the enableService value matches the current enabled state of the service then no change shall be made and no error reported. Enabling an already enabled service has no effect.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Statistic_enableService_submit"
          },
          "x-parser-unique-object-id": "Statistic.enableService_submit.message",
          "x-parser-message-name": "Statistic_enableService_submit"
        }
      },
      "description": "Send a **Statistic_enableService_submit** message in this channel to receive a **Statistic_enableService_None** message over the **None_Statistic_enableService** channel.\n",
      "x-parser-unique-object-id": "submit_Statistic_enableService"
    }
  },
  "operations": {
    "Statistic_enableService_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Statistic_enableService",
      "messages": [
        "$ref:$.channels.submit_Statistic_enableService.messages.Statistic.enableService_submit.message"
      ],
      "x-parser-unique-object-id": "Statistic_enableService_submit"
    }
  },
  "components": {
    "schemas": {
      "Statistic_enableService_submit": "$ref:$.channels.submit_Statistic_enableService.messages.Statistic.enableService_submit.message.payload"
    },
    "messages": {
      "Statistic_enableService_submit": "$ref:$.channels.submit_Statistic_enableService.messages.Statistic.enableService_submit.message"
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
  