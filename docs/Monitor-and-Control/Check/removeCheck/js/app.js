
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service removeCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeCheck iteraction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the removeCheck interaction.",
      "variables": {
        "port": {
          "enum": [
            "8883",
            "8884"
          ],
          "default": "8883"
        }
      },
      "bindings": {
        "mqtt": {
          "clientId": "guest",
          "cleanSession": false,
          "keepAlive": 0,
          "lastWill": {
            "topic": "/will",
            "qos": 0,
            "message": "Guest gone offline.",
            "retain": false
          }
        }
      }
    }
  },
  "channels": {
    "Send_Check_removeCheck": {
      "address": "Send_Check_removeCheck",
      "messages": {
        "Check.removeCheck_Send.message": {
          "description": "Check removeCheck request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "objInstIds": {
                "type": "integer",
                "description": "The objInstIds field holds the object instance identifiers of the CheckIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided CheckIdentity instance identifier does not include a wildcard and does not match an existing check then this operation shall fail with an UNKNOWN error.\nIf any of the matched CheckIdentity objects are being referenced by a CheckLink object then a REFERENCED error shall be returned.\nMatched CheckIdentity objects shall not be removed from the COM archive only the list of available CheckIdentity objects in the provider.\nIf an error is raised then no CheckIdentity objects shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not allow new CheckLink objects to be created for the matched CheckIdentity anymore, existing CheckLink objects are not affected.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_removeCheck_Send"
          },
          "x-parser-unique-object-id": "Check.removeCheck_Send.message",
          "x-parser-message-name": "Check_removeCheck_Send"
        }
      },
      "description": "Send a **Check_removeCheck_Send** message in this channel to receive a **Check_removeCheck_Receive** message over the **Receive_Check_removeCheck** channel.\n",
      "x-parser-unique-object-id": "Send_Check_removeCheck"
    },
    "Error_Check_removeCheck": {
      "address": "Error_Check_removeCheck",
      "messages": {
        "Check.removeCheck_Error.message": {
          "description": "Check removeCheck error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "MC"
                ],
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "REFERENCED"
                ],
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "Check_removeCheck_Error"
          },
          "x-parser-unique-object-id": "Check.removeCheck_Error.message",
          "x-parser-message-name": "Check_removeCheck_Error"
        }
      },
      "description": "Use this channel to receive Check removeCheck errors as **Check_removeCheck_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Check_removeCheck"
    }
  },
  "operations": {
    "Check_removeCheck_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Check_removeCheck",
      "messages": [
        "$ref:$.channels.Send_Check_removeCheck.messages.Check.removeCheck_Send.message"
      ],
      "x-parser-unique-object-id": "Check_removeCheck_Send"
    },
    "Check_removeCheck_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Check_removeCheck",
      "messages": [
        "$ref:$.channels.Error_Check_removeCheck.messages.Check.removeCheck_Error.message"
      ],
      "x-parser-unique-object-id": "Check_removeCheck_Error"
    }
  },
  "components": {
    "schemas": {
      "Check_removeCheck_Send": "$ref:$.channels.Send_Check_removeCheck.messages.Check.removeCheck_Send.message.payload",
      "Check_removeCheck_Error": "$ref:$.channels.Error_Check_removeCheck.messages.Check.removeCheck_Error.message.payload"
    },
    "messages": {
      "Check_removeCheck_Send": "$ref:$.channels.Send_Check_removeCheck.messages.Check.removeCheck_Send.message",
      "Check_removeCheck_Error": "$ref:$.channels.Error_Check_removeCheck.messages.Check.removeCheck_Error.message"
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
  