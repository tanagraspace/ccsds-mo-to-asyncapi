
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Action Service listDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listDefinition interaction of the Action Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Action Service's listDefinition interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Action_listDefinition": {
      "address": "request_Action_listDefinition",
      "messages": {
        "Action.listDefinition_request.message": {
          "description": "Action listDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "actionNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The actionNames field shall contain a list of action names to retrieve the ActionIdentity and ActionDefinition object instance identifiers for.\nThe request may contain the wildcard value of '*' to return all supported ActionIdentity and ActionDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing ActionIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Action_listDefinition_request"
          },
          "x-parser-unique-object-id": "Action.listDefinition_request.message",
          "x-parser-message-name": "Action_listDefinition_request"
        }
      },
      "description": "Send a **Action_listDefinition_request** message in this channel to receive a **Action_listDefinition_response** message over the **response_Action_listDefinition** channel.\n",
      "x-parser-unique-object-id": "request_Action_listDefinition"
    },
    "response_Action_listDefinition": {
      "address": "response_Action_listDefinition",
      "messages": {
        "Action.listDefinition_response.message": {
          "description": "Action listDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "actionInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "Action_listDefinition_response"
          },
          "x-parser-unique-object-id": "Action.listDefinition_response.message",
          "x-parser-message-name": "Action_listDefinition_response"
        }
      },
      "description": "Use this channel to receive Action listDefinition responses as **Action_listDefinition_response** messages.\n",
      "x-parser-unique-object-id": "response_Action_listDefinition"
    },
    "error_Action_listDefinition": {
      "address": "error_Action_listDefinition",
      "messages": {
        "Action.listDefinition_error.message": {
          "description": "Action listDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-12>"
                },
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "Action_listDefinition_error"
          },
          "x-parser-unique-object-id": "Action.listDefinition_error.message",
          "x-parser-message-name": "Action_listDefinition_error"
        }
      },
      "description": "Use this channel to receive Action listDefinition errors as **Action_listDefinition_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Action_listDefinition"
    }
  },
  "operations": {
    "Action_listDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Action_listDefinition",
      "messages": [
        "$ref:$.channels.request_Action_listDefinition.messages.Action.listDefinition_request.message"
      ],
      "x-parser-unique-object-id": "Action_listDefinition_request"
    },
    "Action_listDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Action_listDefinition",
      "messages": [
        "$ref:$.channels.response_Action_listDefinition.messages.Action.listDefinition_response.message"
      ],
      "x-parser-unique-object-id": "Action_listDefinition_response"
    },
    "Action_listDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Action_listDefinition",
      "messages": [
        "$ref:$.channels.error_Action_listDefinition.messages.Action.listDefinition_error.message"
      ],
      "x-parser-unique-object-id": "Action_listDefinition_error"
    }
  },
  "components": {
    "schemas": {
      "Action_listDefinition_request": "$ref:$.channels.request_Action_listDefinition.messages.Action.listDefinition_request.message.payload",
      "Action_listDefinition_response": "$ref:$.channels.response_Action_listDefinition.messages.Action.listDefinition_response.message.payload",
      "Action_listDefinition_error": "$ref:$.channels.error_Action_listDefinition.messages.Action.listDefinition_error.message.payload",
      "mc": {
        "ObjectInstancePair": "$ref:$.channels.response_Action_listDefinition.messages.Action.listDefinition_response.message.payload.properties.actionInstIds",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Action_listDefinition_request": "$ref:$.channels.request_Action_listDefinition.messages.Action.listDefinition_request.message",
      "Action_listDefinition_response": "$ref:$.channels.response_Action_listDefinition.messages.Action.listDefinition_response.message",
      "Action_listDefinition_error": "$ref:$.channels.error_Action_listDefinition.messages.Action.listDefinition_error.message"
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
  