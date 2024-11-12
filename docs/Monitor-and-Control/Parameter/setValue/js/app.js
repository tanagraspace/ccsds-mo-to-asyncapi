
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service setValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the setValue iteraction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the setValue interaction.",
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
    "Send_Parameter_setValue": {
      "address": "Send_Parameter_setValue",
      "messages": {
        "Parameter.setValue_Send.message": {
          "description": "Parameter setValue request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "newRawValues": {
                "properties": {
                  "paramInstId": {
                    "description": "The object instance identifier of the parameter identity.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "rawValue": {
                    "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Parameter_setValue_Send"
          },
          "x-parser-unique-object-id": "Parameter.setValue_Send.message",
          "x-parser-message-name": "Parameter_setValue_Send"
        }
      },
      "description": "Send a **Parameter_setValue_Send** message in this channel to receive a **Parameter_setValue_Receive** message over the **Receive_Parameter_setValue** channel.\n",
      "x-parser-unique-object-id": "Send_Parameter_setValue"
    },
    "Error_Parameter_setValue": {
      "address": "Error_Parameter_setValue",
      "messages": {
        "Parameter.setValue_Error.message": {
          "description": "Parameter setValue error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "MC",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN",
                  "READONLY"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "x-parser-schema-id": "<anonymous-schema-8>"
              }
            },
            "x-parser-schema-id": "Parameter_setValue_Error"
          },
          "x-parser-unique-object-id": "Parameter.setValue_Error.message",
          "x-parser-message-name": "Parameter_setValue_Error"
        }
      },
      "description": "Use this channel to receive Parameter setValue errors as **Parameter_setValue_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Parameter_setValue"
    }
  },
  "operations": {
    "Parameter_setValue_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Parameter_setValue",
      "messages": [
        "$ref:$.channels.Send_Parameter_setValue.messages.Parameter.setValue_Send.message"
      ],
      "x-parser-unique-object-id": "Parameter_setValue_Send"
    },
    "Parameter_setValue_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Parameter_setValue",
      "messages": [
        "$ref:$.channels.Error_Parameter_setValue.messages.Parameter.setValue_Error.message"
      ],
      "x-parser-unique-object-id": "Parameter_setValue_Error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_setValue_Send": "$ref:$.channels.Send_Parameter_setValue.messages.Parameter.setValue_Send.message.payload",
      "Parameter_setValue_Error": "$ref:$.channels.Error_Parameter_setValue.messages.Parameter.setValue_Error.message.payload",
      "mc": {
        "parameter": {
          "ParameterRawValue": "$ref:$.channels.Send_Parameter_setValue.messages.Parameter.setValue_Send.message.payload.properties.newRawValues"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Parameter_setValue_Send": "$ref:$.channels.Send_Parameter_setValue.messages.Parameter.setValue_Send.message",
      "Parameter_setValue_Error": "$ref:$.channels.Error_Parameter_setValue.messages.Parameter.setValue_Error.message"
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
  