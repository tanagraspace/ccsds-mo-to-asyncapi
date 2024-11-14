
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service listDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listDefinition interaction of the Alert Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Alert Service's listDefinition interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Alert_listDefinition": {
      "address": "request_Alert_listDefinition",
      "messages": {
        "Alert.listDefinition_request.message": {
          "description": "Alert listDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "alertNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The alertNames field shall contain a list of alert names to retrieve the AlertIdentity and AlertDefinition object instance identifiers for.\nThe alertNames field may contain the wildcard value of '*' to return all supported AlertIdentity and AlertDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing AlertIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Alert_listDefinition_request"
          },
          "x-parser-unique-object-id": "Alert.listDefinition_request.message",
          "x-parser-message-name": "Alert_listDefinition_request"
        }
      },
      "description": "Send a **Alert_listDefinition_request** message in this channel to receive a **Alert_listDefinition_response** message over the **response_Alert_listDefinition** channel.\n",
      "x-parser-unique-object-id": "request_Alert_listDefinition"
    },
    "response_Alert_listDefinition": {
      "address": "response_Alert_listDefinition",
      "messages": {
        "Alert.listDefinition_response.message": {
          "description": "Alert listDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "alertObjInstIds": {
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
            "x-parser-schema-id": "Alert_listDefinition_response"
          },
          "x-parser-unique-object-id": "Alert.listDefinition_response.message",
          "x-parser-message-name": "Alert_listDefinition_response"
        }
      },
      "description": "Use this channel to receive Alert listDefinition responses as **Alert_listDefinition_response** messages.\n",
      "x-parser-unique-object-id": "response_Alert_listDefinition"
    },
    "error_Alert_listDefinition": {
      "address": "error_Alert_listDefinition",
      "messages": {
        "Alert.listDefinition_error.message": {
          "description": "Alert listDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
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
            "x-parser-schema-id": "Alert_listDefinition_error"
          },
          "x-parser-unique-object-id": "Alert.listDefinition_error.message",
          "x-parser-message-name": "Alert_listDefinition_error"
        }
      },
      "description": "Use this channel to receive Alert listDefinition errors as **Alert_listDefinition_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Alert_listDefinition"
    }
  },
  "operations": {
    "Alert_listDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Alert_listDefinition",
      "messages": [
        "$ref:$.channels.request_Alert_listDefinition.messages.Alert.listDefinition_request.message"
      ],
      "x-parser-unique-object-id": "Alert_listDefinition_request"
    },
    "Alert_listDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Alert_listDefinition",
      "messages": [
        "$ref:$.channels.response_Alert_listDefinition.messages.Alert.listDefinition_response.message"
      ],
      "x-parser-unique-object-id": "Alert_listDefinition_response"
    },
    "Alert_listDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Alert_listDefinition",
      "messages": [
        "$ref:$.channels.error_Alert_listDefinition.messages.Alert.listDefinition_error.message"
      ],
      "x-parser-unique-object-id": "Alert_listDefinition_error"
    }
  },
  "components": {
    "schemas": {
      "Alert_listDefinition_request": "$ref:$.channels.request_Alert_listDefinition.messages.Alert.listDefinition_request.message.payload",
      "Alert_listDefinition_response": "$ref:$.channels.response_Alert_listDefinition.messages.Alert.listDefinition_response.message.payload",
      "Alert_listDefinition_error": "$ref:$.channels.error_Alert_listDefinition.messages.Alert.listDefinition_error.message.payload",
      "mc": {
        "ObjectInstancePair": "$ref:$.channels.response_Alert_listDefinition.messages.Alert.listDefinition_response.message.payload.properties.alertObjInstIds",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Alert_listDefinition_request": "$ref:$.channels.request_Alert_listDefinition.messages.Alert.listDefinition_request.message",
      "Alert_listDefinition_response": "$ref:$.channels.response_Alert_listDefinition.messages.Alert.listDefinition_response.message",
      "Alert_listDefinition_error": "$ref:$.channels.error_Alert_listDefinition.messages.Alert.listDefinition_error.message"
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
  