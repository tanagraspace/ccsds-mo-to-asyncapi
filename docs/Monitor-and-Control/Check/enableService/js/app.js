
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service enableService API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableService interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's enableService interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Check_enableService": {
      "address": "submit_Check_enableService",
      "messages": {
        "Check.enableService_submit.message": {
          "description": "Check enableService request submission",
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
                "description": "If enableService is set to TRUE the service shall be enabled and evaluation and reporting of check will commence.\nIf enableService is set to FALSE then all evaluation of checks shall be suspended and no check transitions will be reported.\nIf the enableService value matches the current enabled state of the service then no change shall be made and no error reported. Enabling an already enabled service has no effect.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_enableService_submit"
          },
          "x-parser-unique-object-id": "Check.enableService_submit.message",
          "x-parser-message-name": "Check_enableService_submit"
        }
      },
      "description": "Send a **Check_enableService_submit** message in this channel to receive a **Check_enableService_None** message over the **None_Check_enableService** channel.\n",
      "x-parser-unique-object-id": "submit_Check_enableService"
    }
  },
  "operations": {
    "Check_enableService_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Check_enableService",
      "messages": [
        "$ref:$.channels.submit_Check_enableService.messages.Check.enableService_submit.message"
      ],
      "x-parser-unique-object-id": "Check_enableService_submit"
    }
  },
  "components": {
    "schemas": {
      "Check_enableService_submit": "$ref:$.channels.submit_Check_enableService.messages.Check.enableService_submit.message.payload"
    },
    "messages": {
      "Check_enableService_submit": "$ref:$.channels.submit_Check_enableService.messages.Check.enableService_submit.message"
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
  