
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service getValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getValue iteraction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the getValue interaction.",
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
    "Send_Parameter_getValue": {
      "address": "Send_Parameter_getValue",
      "messages": {
        "Parameter.getValue_Send.message": {
          "description": "Parameter getValue request submission",
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
                "description": "The paramInstIds field shall provide the list of ParameterIdentity object instance identifiers.\nThe wildcard value of '0' shall be supported and matches all parameters of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested parameter is unknown then an UNKNOWN error shall be returned.\nIf a parameter is being reported periodically, using the operation shall not reset the reportInterval timer.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Parameter_getValue_Send"
          },
          "x-parser-unique-object-id": "Parameter.getValue_Send.message",
          "x-parser-message-name": "Parameter_getValue_Send"
        }
      },
      "description": "Send a **Parameter_getValue_Send** message in this channel to receive a **Parameter_getValue_Receive** message over the **Receive_Parameter_getValue** channel.\n",
      "x-parser-unique-object-id": "Send_Parameter_getValue"
    },
    "Receive_Parameter_getValue": {
      "address": "Receive_Parameter_getValue",
      "messages": {
        "Parameter.getValue_Receive.message": {
          "description": "Parameter getValue update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "paramValDetails": {
                "properties": {
                  "defId": {
                    "description": "The ParameterDefinition object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "paramId": {
                    "description": "The ParameterIdentity object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "timestamp": {
                    "description": "The timestamp of the value.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "value": {
                    "properties": {
                      "convertedValue": {
                        "description": "The parameter converted value.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "rawValue": {
                        "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "validityState": {
                        "description": "Holds the validity state for a parameter value. If the parameter is valid then this should be set to '0'.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Parameter_getValue_Receive"
          },
          "x-parser-unique-object-id": "Parameter.getValue_Receive.message",
          "x-parser-message-name": "Parameter_getValue_Receive"
        }
      },
      "description": "Use this channel to receive Parameter getValue responses as **Parameter_getValue_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Parameter_getValue"
    },
    "Error_Parameter_getValue": {
      "address": "Error_Parameter_getValue",
      "messages": {
        "Parameter.getValue_Error.message": {
          "description": "Parameter getValue error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-16>"
                },
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "Parameter_getValue_Error"
          },
          "x-parser-unique-object-id": "Parameter.getValue_Error.message",
          "x-parser-message-name": "Parameter_getValue_Error"
        }
      },
      "description": "Use this channel to receive Parameter getValue errors as **Parameter_getValue_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Parameter_getValue"
    }
  },
  "operations": {
    "Parameter_getValue_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Parameter_getValue",
      "messages": [
        "$ref:$.channels.Send_Parameter_getValue.messages.Parameter.getValue_Send.message"
      ],
      "x-parser-unique-object-id": "Parameter_getValue_Send"
    },
    "Parameter_getValue_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Parameter_getValue",
      "messages": [
        "$ref:$.channels.Receive_Parameter_getValue.messages.Parameter.getValue_Receive.message"
      ],
      "x-parser-unique-object-id": "Parameter_getValue_Receive"
    },
    "Parameter_getValue_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Parameter_getValue",
      "messages": [
        "$ref:$.channels.Error_Parameter_getValue.messages.Parameter.getValue_Error.message"
      ],
      "x-parser-unique-object-id": "Parameter_getValue_Error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_getValue_Send": "$ref:$.channels.Send_Parameter_getValue.messages.Parameter.getValue_Send.message.payload",
      "Parameter_getValue_Receive": "$ref:$.channels.Receive_Parameter_getValue.messages.Parameter.getValue_Receive.message.payload",
      "Parameter_getValue_Error": "$ref:$.channels.Error_Parameter_getValue.messages.Parameter.getValue_Error.message.payload",
      "mc": {
        "parameter": {
          "ParameterValue": "$ref:$.channels.Receive_Parameter_getValue.messages.Parameter.getValue_Receive.message.payload.properties.paramValDetails.properties.value",
          "ParameterValueDetails": "$ref:$.channels.Receive_Parameter_getValue.messages.Parameter.getValue_Receive.message.payload.properties.paramValDetails"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Parameter_getValue_Send": "$ref:$.channels.Send_Parameter_getValue.messages.Parameter.getValue_Send.message",
      "Parameter_getValue_Receive": "$ref:$.channels.Receive_Parameter_getValue.messages.Parameter.getValue_Receive.message",
      "Parameter_getValue_Error": "$ref:$.channels.Error_Parameter_getValue.messages.Parameter.getValue_Error.message"
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
  