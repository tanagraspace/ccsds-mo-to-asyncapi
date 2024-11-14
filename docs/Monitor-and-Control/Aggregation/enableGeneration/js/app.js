
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service enableGeneration API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableGeneration interaction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Aggregation Service's enableGeneration interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Aggregation_enableGeneration": {
      "address": "request_Aggregation_enableGeneration",
      "messages": {
        "Aggregation.enableGeneration_request.message": {
          "description": "Aggregation enableGeneration request submission",
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
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains AggregationIdentity object instance identifiers.\nThe AggregationIdentity objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the AggregationIdentity objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all AggregationIdentity objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then reports of matching AggregationIdentity objects shall be generated, a value of FALSE requests that reports will not be generated.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current generationEnabled field of the definition for a matched AggregationIdentity object i.e. enabling an already enabled aggregation will not result in an error.\nIf a requested AggregationIdentity or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain AggregationIdentity objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new AggregationDefinition object in the COM archive if the generationEnabled field is changed.\nIf a new AggregationDefinition object is created then that new object shall be the current AggregationDefinition used for the specific AggregationIdentity.\n",
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
            "x-parser-schema-id": "Aggregation_enableGeneration_request"
          },
          "x-parser-unique-object-id": "Aggregation.enableGeneration_request.message",
          "x-parser-message-name": "Aggregation_enableGeneration_request"
        }
      },
      "description": "Send a **Aggregation_enableGeneration_request** message in this channel to receive a **Aggregation_enableGeneration_response** message over the **response_Aggregation_enableGeneration** channel.\n",
      "x-parser-unique-object-id": "request_Aggregation_enableGeneration"
    },
    "response_Aggregation_enableGeneration": {
      "address": "response_Aggregation_enableGeneration",
      "messages": {
        "Aggregation.enableGeneration_response.message": {
          "description": "Aggregation enableGeneration update response",
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
                "description": "The response shall contain the list of object instance identifiers for the new AggregationDefinition objects.\n",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "Aggregation_enableGeneration_response"
          },
          "x-parser-unique-object-id": "Aggregation.enableGeneration_response.message",
          "x-parser-message-name": "Aggregation_enableGeneration_response"
        }
      },
      "description": "Use this channel to receive Aggregation enableGeneration responses as **Aggregation_enableGeneration_response** messages.\n",
      "x-parser-unique-object-id": "response_Aggregation_enableGeneration"
    },
    "error_Aggregation_enableGeneration": {
      "address": "error_Aggregation_enableGeneration",
      "messages": {
        "Aggregation.enableGeneration_error.message": {
          "description": "Aggregation enableGeneration error response",
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
            "x-parser-schema-id": "Aggregation_enableGeneration_error"
          },
          "x-parser-unique-object-id": "Aggregation.enableGeneration_error.message",
          "x-parser-message-name": "Aggregation_enableGeneration_error"
        }
      },
      "description": "Use this channel to receive Aggregation enableGeneration errors as **Aggregation_enableGeneration_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Aggregation_enableGeneration"
    }
  },
  "operations": {
    "Aggregation_enableGeneration_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Aggregation_enableGeneration",
      "messages": [
        "$ref:$.channels.request_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_request.message"
      ],
      "x-parser-unique-object-id": "Aggregation_enableGeneration_request"
    },
    "Aggregation_enableGeneration_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Aggregation_enableGeneration",
      "messages": [
        "$ref:$.channels.response_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_response.message"
      ],
      "x-parser-unique-object-id": "Aggregation_enableGeneration_response"
    },
    "Aggregation_enableGeneration_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Aggregation_enableGeneration",
      "messages": [
        "$ref:$.channels.error_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_enableGeneration_error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_enableGeneration_request": "$ref:$.channels.request_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_request.message.payload",
      "Aggregation_enableGeneration_response": "$ref:$.channels.response_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_response.message.payload",
      "Aggregation_enableGeneration_error": "$ref:$.channels.error_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.request_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_request.message.payload.properties.enableInstances",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Aggregation_enableGeneration_request": "$ref:$.channels.request_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_request.message",
      "Aggregation_enableGeneration_response": "$ref:$.channels.response_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_response.message",
      "Aggregation_enableGeneration_error": "$ref:$.channels.error_Aggregation_enableGeneration.messages.Aggregation.enableGeneration_error.message"
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
  