
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service listDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listDefinition iteraction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the listDefinition interaction.",
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
    "Send_Parameter_listDefinition": {
      "address": "Send_Parameter_listDefinition",
      "messages": {
        "Parameter.listDefinition_Send.message": {
          "description": "Parameter listDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "paramNames": {
                "type": "string",
                "description": "The paramNames field shall contain a list of parameter names to retrieve the ParameterIdentity and ParameterDefinition object instance identifiers for.\nThe paramNames field may contain the wildcard value of '*' to return all supported ParameterIdentity and ParameterDefinition objects.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing ParameterIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Parameter_listDefinition_Send"
          },
          "x-parser-unique-object-id": "Parameter.listDefinition_Send.message",
          "x-parser-message-name": "Parameter_listDefinition_Send"
        }
      },
      "description": "Send a **Parameter_listDefinition_Send** message in this channel to receive a **Parameter_listDefinition_Receive** message over the **Receive_Parameter_listDefinition** channel.\n",
      "x-parser-unique-object-id": "Send_Parameter_listDefinition"
    },
    "Receive_Parameter_listDefinition": {
      "address": "Receive_Parameter_listDefinition",
      "messages": {
        "Parameter.listDefinition_Receive.message": {
          "description": "Parameter listDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "objInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Parameter_listDefinition_Receive"
          },
          "x-parser-unique-object-id": "Parameter.listDefinition_Receive.message",
          "x-parser-message-name": "Parameter_listDefinition_Receive"
        }
      },
      "description": "Use this channel to receive Parameter listDefinition responses as **Parameter_listDefinition_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Parameter_listDefinition"
    },
    "Error_Parameter_listDefinition": {
      "address": "Error_Parameter_listDefinition",
      "messages": {
        "Parameter.listDefinition_Error.message": {
          "description": "Parameter listDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-11>"
                },
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "Parameter_listDefinition_Error"
          },
          "x-parser-unique-object-id": "Parameter.listDefinition_Error.message",
          "x-parser-message-name": "Parameter_listDefinition_Error"
        }
      },
      "description": "Use this channel to receive Parameter listDefinition errors as **Parameter_listDefinition_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Parameter_listDefinition"
    }
  },
  "operations": {
    "Parameter_listDefinition_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Parameter_listDefinition",
      "messages": [
        "$ref:$.channels.Send_Parameter_listDefinition.messages.Parameter.listDefinition_Send.message"
      ],
      "x-parser-unique-object-id": "Parameter_listDefinition_Send"
    },
    "Parameter_listDefinition_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Parameter_listDefinition",
      "messages": [
        "$ref:$.channels.Receive_Parameter_listDefinition.messages.Parameter.listDefinition_Receive.message"
      ],
      "x-parser-unique-object-id": "Parameter_listDefinition_Receive"
    },
    "Parameter_listDefinition_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Parameter_listDefinition",
      "messages": [
        "$ref:$.channels.Error_Parameter_listDefinition.messages.Parameter.listDefinition_Error.message"
      ],
      "x-parser-unique-object-id": "Parameter_listDefinition_Error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_listDefinition_Send": "$ref:$.channels.Send_Parameter_listDefinition.messages.Parameter.listDefinition_Send.message.payload",
      "Parameter_listDefinition_Receive": "$ref:$.channels.Receive_Parameter_listDefinition.messages.Parameter.listDefinition_Receive.message.payload",
      "Parameter_listDefinition_Error": "$ref:$.channels.Error_Parameter_listDefinition.messages.Parameter.listDefinition_Error.message.payload",
      "mc": {
        "ObjectInstancePair": "$ref:$.channels.Receive_Parameter_listDefinition.messages.Parameter.listDefinition_Receive.message.payload.properties.objInstIds",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Parameter_listDefinition_Send": "$ref:$.channels.Send_Parameter_listDefinition.messages.Parameter.listDefinition_Send.message",
      "Parameter_listDefinition_Receive": "$ref:$.channels.Receive_Parameter_listDefinition.messages.Parameter.listDefinition_Receive.message",
      "Parameter_listDefinition_Error": "$ref:$.channels.Error_Parameter_listDefinition.messages.Parameter.listDefinition_Error.message"
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
  