
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service getValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getValue interaction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Parameter Service's getValue interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Parameter_getValue": {
      "address": "request_Parameter_getValue",
      "messages": {
        "Parameter.getValue_request.message": {
          "description": "Parameter getValue request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "paramInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The paramInstIds field shall provide the list of ParameterIdentity object instance identifiers.\nThe wildcard value of '0' shall be supported and matches all parameters of the provider.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested parameter is unknown then an UNKNOWN error shall be returned.\nIf a parameter is being reported periodically, using the operation shall not reset the reportInterval timer.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Parameter_getValue_request"
          },
          "x-parser-unique-object-id": "Parameter.getValue_request.message",
          "x-parser-message-name": "Parameter_getValue_request"
        }
      },
      "description": "Send a **Parameter_getValue_request** message in this channel to receive a **Parameter_getValue_response** message over the **response_Parameter_getValue** channel.\n",
      "x-parser-unique-object-id": "request_Parameter_getValue"
    },
    "response_Parameter_getValue": {
      "address": "response_Parameter_getValue",
      "messages": {
        "Parameter.getValue_response.message": {
          "description": "Parameter getValue update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "paramValDetails": {
                "properties": {
                  "defId": {
                    "description": "The ParameterDefinition object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "paramId": {
                    "description": "The ParameterIdentity object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "timestamp": {
                    "description": "The timestamp of the value.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "value": {
                    "properties": {
                      "convertedValue": {
                        "description": "The parameter converted value.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "rawValue": {
                        "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "validityState": {
                        "description": "Holds the validity state for a parameter value. If the parameter is valid then this should be set to '0'.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "Parameter_getValue_response"
          },
          "x-parser-unique-object-id": "Parameter.getValue_response.message",
          "x-parser-message-name": "Parameter_getValue_response"
        }
      },
      "description": "Use this channel to receive Parameter getValue responses as **Parameter_getValue_response** messages.\n",
      "x-parser-unique-object-id": "response_Parameter_getValue"
    },
    "error_Parameter_getValue": {
      "address": "error_Parameter_getValue",
      "messages": {
        "Parameter.getValue_error.message": {
          "description": "Parameter getValue error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-13>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-17>"
                },
                "x-parser-schema-id": "<anonymous-schema-16>"
              }
            },
            "x-parser-schema-id": "Parameter_getValue_error"
          },
          "x-parser-unique-object-id": "Parameter.getValue_error.message",
          "x-parser-message-name": "Parameter_getValue_error"
        }
      },
      "description": "Use this channel to receive Parameter getValue errors as **Parameter_getValue_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Parameter_getValue"
    }
  },
  "operations": {
    "Parameter_getValue_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Parameter_getValue",
      "messages": [
        "$ref:$.channels.request_Parameter_getValue.messages.Parameter.getValue_request.message"
      ],
      "x-parser-unique-object-id": "Parameter_getValue_request"
    },
    "Parameter_getValue_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Parameter_getValue",
      "messages": [
        "$ref:$.channels.response_Parameter_getValue.messages.Parameter.getValue_response.message"
      ],
      "x-parser-unique-object-id": "Parameter_getValue_response"
    },
    "Parameter_getValue_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Parameter_getValue",
      "messages": [
        "$ref:$.channels.error_Parameter_getValue.messages.Parameter.getValue_error.message"
      ],
      "x-parser-unique-object-id": "Parameter_getValue_error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_getValue_request": "$ref:$.channels.request_Parameter_getValue.messages.Parameter.getValue_request.message.payload",
      "Parameter_getValue_response": "$ref:$.channels.response_Parameter_getValue.messages.Parameter.getValue_response.message.payload",
      "Parameter_getValue_error": "$ref:$.channels.error_Parameter_getValue.messages.Parameter.getValue_error.message.payload",
      "mc": {
        "parameter": {
          "ParameterValue": "$ref:$.channels.response_Parameter_getValue.messages.Parameter.getValue_response.message.payload.properties.paramValDetails.properties.value",
          "ParameterValueDetails": "$ref:$.channels.response_Parameter_getValue.messages.Parameter.getValue_response.message.payload.properties.paramValDetails"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Parameter_getValue_request": "$ref:$.channels.request_Parameter_getValue.messages.Parameter.getValue_request.message",
      "Parameter_getValue_response": "$ref:$.channels.response_Parameter_getValue.messages.Parameter.getValue_response.message",
      "Parameter_getValue_error": "$ref:$.channels.error_Parameter_getValue.messages.Parameter.getValue_error.message"
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
  