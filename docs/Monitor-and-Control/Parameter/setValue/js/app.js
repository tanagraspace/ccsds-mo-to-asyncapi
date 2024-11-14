
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service setValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the setValue interaction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Parameter Service's setValue interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Parameter_setValue": {
      "address": "submit_Parameter_setValue",
      "messages": {
        "Parameter.setValue_submit.message": {
          "description": "Parameter setValue request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
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
            "x-parser-schema-id": "Parameter_setValue_submit"
          },
          "x-parser-unique-object-id": "Parameter.setValue_submit.message",
          "x-parser-message-name": "Parameter_setValue_submit"
        }
      },
      "description": "Send a **Parameter_setValue_submit** message in this channel to receive a **Parameter_setValue_None** message over the **None_Parameter_setValue** channel.\n",
      "x-parser-unique-object-id": "submit_Parameter_setValue"
    },
    "error_Parameter_setValue": {
      "address": "error_Parameter_setValue",
      "messages": {
        "Parameter.setValue_error.message": {
          "description": "Parameter setValue error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL",
                  "MC"
                ],
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "READONLY",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "x-parser-schema-id": "<anonymous-schema-8>"
              }
            },
            "x-parser-schema-id": "Parameter_setValue_error"
          },
          "x-parser-unique-object-id": "Parameter.setValue_error.message",
          "x-parser-message-name": "Parameter_setValue_error"
        }
      },
      "description": "Use this channel to receive Parameter setValue errors as **Parameter_setValue_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Parameter_setValue"
    }
  },
  "operations": {
    "Parameter_setValue_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Parameter_setValue",
      "messages": [
        "$ref:$.channels.submit_Parameter_setValue.messages.Parameter.setValue_submit.message"
      ],
      "x-parser-unique-object-id": "Parameter_setValue_submit"
    },
    "Parameter_setValue_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Parameter_setValue",
      "messages": [
        "$ref:$.channels.error_Parameter_setValue.messages.Parameter.setValue_error.message"
      ],
      "x-parser-unique-object-id": "Parameter_setValue_error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_setValue_submit": "$ref:$.channels.submit_Parameter_setValue.messages.Parameter.setValue_submit.message.payload",
      "Parameter_setValue_error": "$ref:$.channels.error_Parameter_setValue.messages.Parameter.setValue_error.message.payload",
      "mc": {
        "parameter": {
          "ParameterRawValue": "$ref:$.channels.submit_Parameter_setValue.messages.Parameter.setValue_submit.message.payload.properties.newRawValues"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Parameter_setValue_submit": "$ref:$.channels.submit_Parameter_setValue.messages.Parameter.setValue_submit.message",
      "Parameter_setValue_error": "$ref:$.channels.error_Parameter_setValue.messages.Parameter.setValue_error.message"
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
  