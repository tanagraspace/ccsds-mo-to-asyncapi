
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service removeCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeCheck interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's removeCheck interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Check_removeCheck": {
      "address": "submit_Check_removeCheck",
      "messages": {
        "Check.removeCheck_submit.message": {
          "description": "Check removeCheck request submission",
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
                "description": "The objInstIds field holds the object instance identifiers of the CheckIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided CheckIdentity instance identifier does not include a wildcard and does not match an existing check then this operation shall fail with an UNKNOWN error.\nIf any of the matched CheckIdentity objects are being referenced by a CheckLink object then a REFERENCED error shall be returned.\nMatched CheckIdentity objects shall not be removed from the COM archive only the list of available CheckIdentity objects in the provider.\nIf an error is raised then no CheckIdentity objects shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not allow new CheckLink objects to be created for the matched CheckIdentity anymore, existing CheckLink objects are not affected.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_removeCheck_submit"
          },
          "x-parser-unique-object-id": "Check.removeCheck_submit.message",
          "x-parser-message-name": "Check_removeCheck_submit"
        }
      },
      "description": "Send a **Check_removeCheck_submit** message in this channel to receive a **Check_removeCheck_None** message over the **None_Check_removeCheck** channel.\n",
      "x-parser-unique-object-id": "submit_Check_removeCheck"
    },
    "error_Check_removeCheck": {
      "address": "error_Check_removeCheck",
      "messages": {
        "Check.removeCheck_error.message": {
          "description": "Check removeCheck error response",
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
                  "MAL",
                  "MC"
                ],
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "REFERENCED"
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
            "x-parser-schema-id": "Check_removeCheck_error"
          },
          "x-parser-unique-object-id": "Check.removeCheck_error.message",
          "x-parser-message-name": "Check_removeCheck_error"
        }
      },
      "description": "Use this channel to receive Check removeCheck errors as **Check_removeCheck_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_removeCheck"
    }
  },
  "operations": {
    "Check_removeCheck_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Check_removeCheck",
      "messages": [
        "$ref:$.channels.submit_Check_removeCheck.messages.Check.removeCheck_submit.message"
      ],
      "x-parser-unique-object-id": "Check_removeCheck_submit"
    },
    "Check_removeCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_removeCheck",
      "messages": [
        "$ref:$.channels.error_Check_removeCheck.messages.Check.removeCheck_error.message"
      ],
      "x-parser-unique-object-id": "Check_removeCheck_error"
    }
  },
  "components": {
    "schemas": {
      "Check_removeCheck_submit": "$ref:$.channels.submit_Check_removeCheck.messages.Check.removeCheck_submit.message.payload",
      "Check_removeCheck_error": "$ref:$.channels.error_Check_removeCheck.messages.Check.removeCheck_error.message.payload"
    },
    "messages": {
      "Check_removeCheck_submit": "$ref:$.channels.submit_Check_removeCheck.messages.Check.removeCheck_submit.message",
      "Check_removeCheck_error": "$ref:$.channels.error_Check_removeCheck.messages.Check.removeCheck_error.message"
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
  