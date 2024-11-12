
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service removeAction API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeAction iteraction of the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the removeAction interaction.",
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
    "Send_Action_removeAction": {
      "address": "Send_Action_removeAction",
      "messages": {
        "Action.removeAction_Send.message": {
          "description": "Action removeAction request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionInstIds": {
                "type": "integer",
                "description": "The actionInstIds field shall hold the object instance identifiers of the ActionIdentity objects to be removed from the provider.\nThe wildcard value of '0' in the list of object instance identifiers shall be supported and matches all actions of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided ActionIdentity object instance identifier does not include a wildcard and does not match an existing ActionIdentity object then this operation shall fail with an UNKNOWN error.\nIf a matched definition is still being used by an executing action instance then this operation shall not fail because of this reason.\nMatched ActionIdentity objects shall not be removed from the COM archive only the list of ActionIdentity objects in the provider.\nRemoved ActionIdentity object shall not be allowed to be referenced by new action instances.\nIf an error is raised then no actions shall be removed as a result of this operation call.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Action_removeAction_Send"
          },
          "x-parser-unique-object-id": "Action.removeAction_Send.message",
          "x-parser-message-name": "Action_removeAction_Send"
        }
      },
      "description": "Send a **Action_removeAction_Send** message in this channel to receive a **Action_removeAction_Receive** message over the **Receive_Action_removeAction** channel.\n",
      "x-parser-unique-object-id": "Send_Action_removeAction"
    },
    "Error_Action_removeAction": {
      "address": "Error_Action_removeAction",
      "messages": {
        "Action.removeAction_Error.message": {
          "description": "Action removeAction error response",
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
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
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
            "x-parser-schema-id": "Action_removeAction_Error"
          },
          "x-parser-unique-object-id": "Action.removeAction_Error.message",
          "x-parser-message-name": "Action_removeAction_Error"
        }
      },
      "description": "Use this channel to receive Action removeAction errors as **Action_removeAction_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Action_removeAction"
    }
  },
  "operations": {
    "Action_removeAction_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Action_removeAction",
      "messages": [
        "$ref:$.channels.Send_Action_removeAction.messages.Action.removeAction_Send.message"
      ],
      "x-parser-unique-object-id": "Action_removeAction_Send"
    },
    "Action_removeAction_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Action_removeAction",
      "messages": [
        "$ref:$.channels.Error_Action_removeAction.messages.Action.removeAction_Error.message"
      ],
      "x-parser-unique-object-id": "Action_removeAction_Error"
    }
  },
  "components": {
    "schemas": {
      "Action_removeAction_Send": "$ref:$.channels.Send_Action_removeAction.messages.Action.removeAction_Send.message.payload",
      "Action_removeAction_Error": "$ref:$.channels.Error_Action_removeAction.messages.Action.removeAction_Error.message.payload"
    },
    "messages": {
      "Action_removeAction_Send": "$ref:$.channels.Send_Action_removeAction.messages.Action.removeAction_Send.message",
      "Action_removeAction_Error": "$ref:$.channels.Error_Action_removeAction.messages.Action.removeAction_Error.message"
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
  