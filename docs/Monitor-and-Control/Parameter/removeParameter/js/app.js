
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service removeParameter API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeParameter iteraction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the removeParameter interaction.",
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
    "Send_Parameter_removeParameter": {
      "address": "Send_Parameter_removeParameter",
      "messages": {
        "Parameter.removeParameter_Send.message": {
          "description": "Parameter removeParameter request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "paramInstIds": {
                "type": "integer",
                "description": "The paramInstIds field shall hold the object instance identifiers of the ParameterIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided ParameterIdentity object instance identifier does not include a wildcard and does not match an existing parameter identity object then this operation shall fail with an UNKNOWN error.\nMatched ParameterIdentity and ParameterDefinition objects shall not be removed from the COM archive only the list of ParameterIdentity and ParameterDefinition objects from the provider.\nIf an error is raised then no parameters shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish parameter values for the deleted ParameterIdentity objects anymore.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Parameter_removeParameter_Send"
          },
          "x-parser-unique-object-id": "Parameter.removeParameter_Send.message",
          "x-parser-message-name": "Parameter_removeParameter_Send"
        }
      },
      "description": "Send a **Parameter_removeParameter_Send** message in this channel to receive a **Parameter_removeParameter_Receive** message over the **Receive_Parameter_removeParameter** channel.\n",
      "x-parser-unique-object-id": "Send_Parameter_removeParameter"
    },
    "Error_Parameter_removeParameter": {
      "address": "Error_Parameter_removeParameter",
      "messages": {
        "Parameter.removeParameter_Error.message": {
          "description": "Parameter removeParameter error response",
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
            "x-parser-schema-id": "Parameter_removeParameter_Error"
          },
          "x-parser-unique-object-id": "Parameter.removeParameter_Error.message",
          "x-parser-message-name": "Parameter_removeParameter_Error"
        }
      },
      "description": "Use this channel to receive Parameter removeParameter errors as **Parameter_removeParameter_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Parameter_removeParameter"
    }
  },
  "operations": {
    "Parameter_removeParameter_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Parameter_removeParameter",
      "messages": [
        "$ref:$.channels.Send_Parameter_removeParameter.messages.Parameter.removeParameter_Send.message"
      ],
      "x-parser-unique-object-id": "Parameter_removeParameter_Send"
    },
    "Parameter_removeParameter_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Parameter_removeParameter",
      "messages": [
        "$ref:$.channels.Error_Parameter_removeParameter.messages.Parameter.removeParameter_Error.message"
      ],
      "x-parser-unique-object-id": "Parameter_removeParameter_Error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_removeParameter_Send": "$ref:$.channels.Send_Parameter_removeParameter.messages.Parameter.removeParameter_Send.message.payload",
      "Parameter_removeParameter_Error": "$ref:$.channels.Error_Parameter_removeParameter.messages.Parameter.removeParameter_Error.message.payload"
    },
    "messages": {
      "Parameter_removeParameter_Send": "$ref:$.channels.Send_Parameter_removeParameter.messages.Parameter.removeParameter_Send.message",
      "Parameter_removeParameter_Error": "$ref:$.channels.Error_Parameter_removeParameter.messages.Parameter.removeParameter_Error.message"
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
  