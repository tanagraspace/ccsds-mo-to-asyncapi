
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service getServiceStatus API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getServiceStatus interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's getServiceStatus interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "response_Check_getServiceStatus": {
      "address": "response_Check_getServiceStatus",
      "messages": {
        "Check.getServiceStatus_response.message": {
          "description": "Check getServiceStatus update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "serviceEnabled": {
                "type": "boolean",
                "description": "The operation shall return TRUE if the service is currently enabled or FALSE if the service is currently disabled.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_getServiceStatus_response"
          },
          "x-parser-unique-object-id": "Check.getServiceStatus_response.message",
          "x-parser-message-name": "Check_getServiceStatus_response"
        }
      },
      "description": "Use this channel to receive Check getServiceStatus responses as **Check_getServiceStatus_response** messages.\n",
      "x-parser-unique-object-id": "response_Check_getServiceStatus"
    }
  },
  "operations": {
    "Check_getServiceStatus_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Check_getServiceStatus",
      "messages": [
        "$ref:$.channels.response_Check_getServiceStatus.messages.Check.getServiceStatus_response.message"
      ],
      "x-parser-unique-object-id": "Check_getServiceStatus_response"
    }
  },
  "components": {
    "schemas": {
      "Check_getServiceStatus_response": "$ref:$.channels.response_Check_getServiceStatus.messages.Check.getServiceStatus_response.message.payload"
    },
    "messages": {
      "Check_getServiceStatus_response": "$ref:$.channels.response_Check_getServiceStatus.messages.Check.getServiceStatus_response.message"
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
  