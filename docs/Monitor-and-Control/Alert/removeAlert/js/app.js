
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service removeAlert API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeAlert interaction of the Alert Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Alert Service's removeAlert interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Alert_removeAlert": {
      "address": "submit_Alert_removeAlert",
      "messages": {
        "Alert.removeAlert_submit.message": {
          "description": "Alert removeAlert request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "alertInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The alertInstIds field shall hold the object instance identifiers of the AlertIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided AlertIdentity object instance identifier does not include a wildcard and does not match an existing AlertIdentity object then this operation shall fail with an UNKNOWN error.\nMatched AlertIdentity objects shall not be removed from the COM archive only the list of AlertIdentity objects in the provider.\nIf an error is raised then no alerts shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish AlertEvent events for the deleted AlertIdentity objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Alert_removeAlert_submit"
          },
          "x-parser-unique-object-id": "Alert.removeAlert_submit.message",
          "x-parser-message-name": "Alert_removeAlert_submit"
        }
      },
      "description": "Send a **Alert_removeAlert_submit** message in this channel to receive a **Alert_removeAlert_None** message over the **None_Alert_removeAlert** channel.\n",
      "x-parser-unique-object-id": "submit_Alert_removeAlert"
    },
    "error_Alert_removeAlert": {
      "address": "error_Alert_removeAlert",
      "messages": {
        "Alert.removeAlert_error.message": {
          "description": "Alert removeAlert error response",
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
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
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
            "x-parser-schema-id": "Alert_removeAlert_error"
          },
          "x-parser-unique-object-id": "Alert.removeAlert_error.message",
          "x-parser-message-name": "Alert_removeAlert_error"
        }
      },
      "description": "Use this channel to receive Alert removeAlert errors as **Alert_removeAlert_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Alert_removeAlert"
    }
  },
  "operations": {
    "Alert_removeAlert_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Alert_removeAlert",
      "messages": [
        "$ref:$.channels.submit_Alert_removeAlert.messages.Alert.removeAlert_submit.message"
      ],
      "x-parser-unique-object-id": "Alert_removeAlert_submit"
    },
    "Alert_removeAlert_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Alert_removeAlert",
      "messages": [
        "$ref:$.channels.error_Alert_removeAlert.messages.Alert.removeAlert_error.message"
      ],
      "x-parser-unique-object-id": "Alert_removeAlert_error"
    }
  },
  "components": {
    "schemas": {
      "Alert_removeAlert_submit": "$ref:$.channels.submit_Alert_removeAlert.messages.Alert.removeAlert_submit.message.payload",
      "Alert_removeAlert_error": "$ref:$.channels.error_Alert_removeAlert.messages.Alert.removeAlert_error.message.payload"
    },
    "messages": {
      "Alert_removeAlert_submit": "$ref:$.channels.submit_Alert_removeAlert.messages.Alert.removeAlert_submit.message",
      "Alert_removeAlert_error": "$ref:$.channels.error_Alert_removeAlert.messages.Alert.removeAlert_error.message"
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
  