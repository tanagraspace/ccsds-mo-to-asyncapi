
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service removeAction API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeAction interaction of the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Action Service's removeAction interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Action_removeAction": {
      "address": "submit_Action_removeAction",
      "messages": {
        "Action.removeAction_submit.message": {
          "description": "Action removeAction request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The actionInstIds field shall hold the object instance identifiers of the ActionIdentity objects to be removed from the provider.\nThe wildcard value of '0' in the list of object instance identifiers shall be supported and matches all actions of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided ActionIdentity object instance identifier does not include a wildcard and does not match an existing ActionIdentity object then this operation shall fail with an UNKNOWN error.\nIf a matched definition is still being used by an executing action instance then this operation shall not fail because of this reason.\nMatched ActionIdentity objects shall not be removed from the COM archive only the list of ActionIdentity objects in the provider.\nRemoved ActionIdentity object shall not be allowed to be referenced by new action instances.\nIf an error is raised then no actions shall be removed as a result of this operation call.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Action_removeAction_submit"
          },
          "x-parser-unique-object-id": "Action.removeAction_submit.message",
          "x-parser-message-name": "Action_removeAction_submit"
        }
      },
      "description": "Send a **Action_removeAction_submit** message in this channel to receive a **Action_removeAction_None** message over the **None_Action_removeAction** channel.\n",
      "x-parser-unique-object-id": "submit_Action_removeAction"
    },
    "error_Action_removeAction": {
      "address": "error_Action_removeAction",
      "messages": {
        "Action.removeAction_error.message": {
          "description": "Action removeAction error response",
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
            "x-parser-schema-id": "Action_removeAction_error"
          },
          "x-parser-unique-object-id": "Action.removeAction_error.message",
          "x-parser-message-name": "Action_removeAction_error"
        }
      },
      "description": "Use this channel to receive Action removeAction errors as **Action_removeAction_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Action_removeAction"
    }
  },
  "operations": {
    "Action_removeAction_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Action_removeAction",
      "messages": [
        "$ref:$.channels.submit_Action_removeAction.messages.Action.removeAction_submit.message"
      ],
      "x-parser-unique-object-id": "Action_removeAction_submit"
    },
    "Action_removeAction_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Action_removeAction",
      "messages": [
        "$ref:$.channels.error_Action_removeAction.messages.Action.removeAction_error.message"
      ],
      "x-parser-unique-object-id": "Action_removeAction_error"
    }
  },
  "components": {
    "schemas": {
      "Action_removeAction_submit": "$ref:$.channels.submit_Action_removeAction.messages.Action.removeAction_submit.message.payload",
      "Action_removeAction_error": "$ref:$.channels.error_Action_removeAction.messages.Action.removeAction_error.message.payload"
    },
    "messages": {
      "Action_removeAction_submit": "$ref:$.channels.submit_Action_removeAction.messages.Action.removeAction_submit.message",
      "Action_removeAction_error": "$ref:$.channels.error_Action_removeAction.messages.Action.removeAction_error.message"
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
  