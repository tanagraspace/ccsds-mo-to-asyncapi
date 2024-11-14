
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service removeParameter API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeParameter interaction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Parameter Service's removeParameter interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Parameter_removeParameter": {
      "address": "submit_Parameter_removeParameter",
      "messages": {
        "Parameter.removeParameter_submit.message": {
          "description": "Parameter removeParameter request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
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
                "description": "The paramInstIds field shall hold the object instance identifiers of the ParameterIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided ParameterIdentity object instance identifier does not include a wildcard and does not match an existing parameter identity object then this operation shall fail with an UNKNOWN error.\nMatched ParameterIdentity and ParameterDefinition objects shall not be removed from the COM archive only the list of ParameterIdentity and ParameterDefinition objects from the provider.\nIf an error is raised then no parameters shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish parameter values for the deleted ParameterIdentity objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Parameter_removeParameter_submit"
          },
          "x-parser-unique-object-id": "Parameter.removeParameter_submit.message",
          "x-parser-message-name": "Parameter_removeParameter_submit"
        }
      },
      "description": "Send a **Parameter_removeParameter_submit** message in this channel to receive a **Parameter_removeParameter_None** message over the **None_Parameter_removeParameter** channel.\n",
      "x-parser-unique-object-id": "submit_Parameter_removeParameter"
    },
    "error_Parameter_removeParameter": {
      "address": "error_Parameter_removeParameter",
      "messages": {
        "Parameter.removeParameter_error.message": {
          "description": "Parameter removeParameter error response",
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
            "x-parser-schema-id": "Parameter_removeParameter_error"
          },
          "x-parser-unique-object-id": "Parameter.removeParameter_error.message",
          "x-parser-message-name": "Parameter_removeParameter_error"
        }
      },
      "description": "Use this channel to receive Parameter removeParameter errors as **Parameter_removeParameter_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Parameter_removeParameter"
    }
  },
  "operations": {
    "Parameter_removeParameter_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Parameter_removeParameter",
      "messages": [
        "$ref:$.channels.submit_Parameter_removeParameter.messages.Parameter.removeParameter_submit.message"
      ],
      "x-parser-unique-object-id": "Parameter_removeParameter_submit"
    },
    "Parameter_removeParameter_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Parameter_removeParameter",
      "messages": [
        "$ref:$.channels.error_Parameter_removeParameter.messages.Parameter.removeParameter_error.message"
      ],
      "x-parser-unique-object-id": "Parameter_removeParameter_error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_removeParameter_submit": "$ref:$.channels.submit_Parameter_removeParameter.messages.Parameter.removeParameter_submit.message.payload",
      "Parameter_removeParameter_error": "$ref:$.channels.error_Parameter_removeParameter.messages.Parameter.removeParameter_error.message.payload"
    },
    "messages": {
      "Parameter_removeParameter_submit": "$ref:$.channels.submit_Parameter_removeParameter.messages.Parameter.removeParameter_submit.message",
      "Parameter_removeParameter_error": "$ref:$.channels.error_Parameter_removeParameter.messages.Parameter.removeParameter_error.message"
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
  