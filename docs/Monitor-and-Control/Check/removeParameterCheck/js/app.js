
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service removeParameterCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeParameterCheck interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's removeParameterCheck interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Check_removeParameterCheck": {
      "address": "submit_Check_removeParameterCheck",
      "messages": {
        "Check.removeParameterCheck_submit.message": {
          "description": "Check removeParameterCheck request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "objInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The objInstIds field holds the object instance identifiers of the CheckLink objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided CheckLink instance identifier does not include a wildcard and does not match an existing link then this operation shall fail with an UNKNOWN error.\nMatched CheckLink objects shall not be removed from the COM archive only the list of available CheckLink objects in the provider.\nIf an error is raised then no CheckLink objects shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not evaluate those parameter/check definition combinations for the deleted CheckLink objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_removeParameterCheck_submit"
          },
          "x-parser-unique-object-id": "Check.removeParameterCheck_submit.message",
          "x-parser-message-name": "Check_removeParameterCheck_submit"
        }
      },
      "description": "Send a **Check_removeParameterCheck_submit** message in this channel to receive a **Check_removeParameterCheck_None** message over the **None_Check_removeParameterCheck** channel.\n",
      "x-parser-unique-object-id": "submit_Check_removeParameterCheck"
    },
    "error_Check_removeParameterCheck": {
      "address": "error_Check_removeParameterCheck",
      "messages": {
        "Check.removeParameterCheck_error.message": {
          "description": "Check removeParameterCheck error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
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
            "x-parser-schema-id": "Check_removeParameterCheck_error"
          },
          "x-parser-unique-object-id": "Check.removeParameterCheck_error.message",
          "x-parser-message-name": "Check_removeParameterCheck_error"
        }
      },
      "description": "Use this channel to receive Check removeParameterCheck errors as **Check_removeParameterCheck_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_removeParameterCheck"
    }
  },
  "operations": {
    "Check_removeParameterCheck_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Check_removeParameterCheck",
      "messages": [
        "$ref:$.channels.submit_Check_removeParameterCheck.messages.Check.removeParameterCheck_submit.message"
      ],
      "x-parser-unique-object-id": "Check_removeParameterCheck_submit"
    },
    "Check_removeParameterCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_removeParameterCheck",
      "messages": [
        "$ref:$.channels.error_Check_removeParameterCheck.messages.Check.removeParameterCheck_error.message"
      ],
      "x-parser-unique-object-id": "Check_removeParameterCheck_error"
    }
  },
  "components": {
    "schemas": {
      "Check_removeParameterCheck_submit": "$ref:$.channels.submit_Check_removeParameterCheck.messages.Check.removeParameterCheck_submit.message.payload",
      "Check_removeParameterCheck_error": "$ref:$.channels.error_Check_removeParameterCheck.messages.Check.removeParameterCheck_error.message.payload"
    },
    "messages": {
      "Check_removeParameterCheck_submit": "$ref:$.channels.submit_Check_removeParameterCheck.messages.Check.removeParameterCheck_submit.message",
      "Check_removeParameterCheck_error": "$ref:$.channels.error_Check_removeParameterCheck.messages.Check.removeParameterCheck_error.message"
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
  