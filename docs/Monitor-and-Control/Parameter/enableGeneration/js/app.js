
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service enableGeneration API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableGeneration interaction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Parameter Service's enableGeneration interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Parameter_enableGeneration": {
      "address": "request_Parameter_enableGeneration",
      "messages": {
        "Parameter.enableGeneration_request.message": {
          "description": "Parameter enableGeneration request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains ParameterIdentity object instance identifiers.\nThe ParameterIdentity objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the ParameterIdentity objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all ParameterIdentity objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then reports for matching ParameterIdentity objects shall be generated, a value of FALSE requests that reports will not be generated.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current generationEnabled field of the definition for a matched ParameterIdentity object i.e. enabling an already enabled parameter will not result in an error.\nIf a requested ParameterIdentity or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain ParameterIdentity objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new ParameterDefinition object in the COM archive if the generationEnabled field is changed.\nIf a new ParameterDefinition object is created then that new object shall be the current ParameterDefinition used for the specific ParameterIdentity.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "enableInstances": {
                "properties": {
                  "id": {
                    "description": "The object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "value": {
                    "description": "An associated Boolean value.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "Parameter_enableGeneration_request"
          },
          "x-parser-unique-object-id": "Parameter.enableGeneration_request.message",
          "x-parser-message-name": "Parameter_enableGeneration_request"
        }
      },
      "description": "Send a **Parameter_enableGeneration_request** message in this channel to receive a **Parameter_enableGeneration_response** message over the **response_Parameter_enableGeneration** channel.\n",
      "x-parser-unique-object-id": "request_Parameter_enableGeneration"
    },
    "response_Parameter_enableGeneration": {
      "address": "response_Parameter_enableGeneration",
      "messages": {
        "Parameter.enableGeneration_response.message": {
          "description": "Parameter enableGeneration update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new ParameterDefinition objects.\n",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "Parameter_enableGeneration_response"
          },
          "x-parser-unique-object-id": "Parameter.enableGeneration_response.message",
          "x-parser-message-name": "Parameter_enableGeneration_response"
        }
      },
      "description": "Use this channel to receive Parameter enableGeneration responses as **Parameter_enableGeneration_response** messages.\n",
      "x-parser-unique-object-id": "response_Parameter_enableGeneration"
    },
    "error_Parameter_enableGeneration": {
      "address": "error_Parameter_enableGeneration",
      "messages": {
        "Parameter.enableGeneration_error.message": {
          "description": "Parameter enableGeneration error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "Parameter_enableGeneration_error"
          },
          "x-parser-unique-object-id": "Parameter.enableGeneration_error.message",
          "x-parser-message-name": "Parameter_enableGeneration_error"
        }
      },
      "description": "Use this channel to receive Parameter enableGeneration errors as **Parameter_enableGeneration_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Parameter_enableGeneration"
    }
  },
  "operations": {
    "Parameter_enableGeneration_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Parameter_enableGeneration",
      "messages": [
        "$ref:$.channels.request_Parameter_enableGeneration.messages.Parameter.enableGeneration_request.message"
      ],
      "x-parser-unique-object-id": "Parameter_enableGeneration_request"
    },
    "Parameter_enableGeneration_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Parameter_enableGeneration",
      "messages": [
        "$ref:$.channels.response_Parameter_enableGeneration.messages.Parameter.enableGeneration_response.message"
      ],
      "x-parser-unique-object-id": "Parameter_enableGeneration_response"
    },
    "Parameter_enableGeneration_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Parameter_enableGeneration",
      "messages": [
        "$ref:$.channels.error_Parameter_enableGeneration.messages.Parameter.enableGeneration_error.message"
      ],
      "x-parser-unique-object-id": "Parameter_enableGeneration_error"
    }
  },
  "components": {
    "schemas": {
      "Parameter_enableGeneration_request": "$ref:$.channels.request_Parameter_enableGeneration.messages.Parameter.enableGeneration_request.message.payload",
      "Parameter_enableGeneration_response": "$ref:$.channels.response_Parameter_enableGeneration.messages.Parameter.enableGeneration_response.message.payload",
      "Parameter_enableGeneration_error": "$ref:$.channels.error_Parameter_enableGeneration.messages.Parameter.enableGeneration_error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.request_Parameter_enableGeneration.messages.Parameter.enableGeneration_request.message.payload.properties.enableInstances",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Parameter_enableGeneration_request": "$ref:$.channels.request_Parameter_enableGeneration.messages.Parameter.enableGeneration_request.message",
      "Parameter_enableGeneration_response": "$ref:$.channels.response_Parameter_enableGeneration.messages.Parameter.enableGeneration_response.message",
      "Parameter_enableGeneration_error": "$ref:$.channels.error_Parameter_enableGeneration.messages.Parameter.enableGeneration_error.message"
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
  