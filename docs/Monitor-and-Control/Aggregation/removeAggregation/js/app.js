
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service removeAggregation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeAggregation interaction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Aggregation Service's removeAggregation interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Aggregation_removeAggregation": {
      "address": "submit_Aggregation_removeAggregation",
      "messages": {
        "Aggregation.removeAggregation_submit.message": {
          "description": "Aggregation removeAggregation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "aggInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The aggInstIds field shall hold the object instance identifiers of the AggregationIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided AggregationIdentity object instance identifier does not include a wildcard and does not match an existing aggregation then this operation shall fail with an UNKNOWN error.\nMatched AggregationIdentity and AggregationDefinition objects shall not be removed from the COM archive only the list of AggregationIdentity and AggregationDefinition objects in the provider.\nIf an error is raised then no aggregations shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish aggregation values for the deleted AggregationIdentity objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Aggregation_removeAggregation_submit"
          },
          "x-parser-unique-object-id": "Aggregation.removeAggregation_submit.message",
          "x-parser-message-name": "Aggregation_removeAggregation_submit"
        }
      },
      "description": "Send a **Aggregation_removeAggregation_submit** message in this channel to receive a **Aggregation_removeAggregation_None** message over the **None_Aggregation_removeAggregation** channel.\n",
      "x-parser-unique-object-id": "submit_Aggregation_removeAggregation"
    },
    "error_Aggregation_removeAggregation": {
      "address": "error_Aggregation_removeAggregation",
      "messages": {
        "Aggregation.removeAggregation_error.message": {
          "description": "Aggregation removeAggregation error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
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
            "x-parser-schema-id": "Aggregation_removeAggregation_error"
          },
          "x-parser-unique-object-id": "Aggregation.removeAggregation_error.message",
          "x-parser-message-name": "Aggregation_removeAggregation_error"
        }
      },
      "description": "Use this channel to receive Aggregation removeAggregation errors as **Aggregation_removeAggregation_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Aggregation_removeAggregation"
    }
  },
  "operations": {
    "Aggregation_removeAggregation_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Aggregation_removeAggregation",
      "messages": [
        "$ref:$.channels.submit_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_submit.message"
      ],
      "x-parser-unique-object-id": "Aggregation_removeAggregation_submit"
    },
    "Aggregation_removeAggregation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Aggregation_removeAggregation",
      "messages": [
        "$ref:$.channels.error_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_removeAggregation_error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_removeAggregation_submit": "$ref:$.channels.submit_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_submit.message.payload",
      "Aggregation_removeAggregation_error": "$ref:$.channels.error_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_error.message.payload"
    },
    "messages": {
      "Aggregation_removeAggregation_submit": "$ref:$.channels.submit_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_submit.message",
      "Aggregation_removeAggregation_error": "$ref:$.channels.error_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_error.message"
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
  