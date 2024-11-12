
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service removeAggregation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeAggregation iteraction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the removeAggregation interaction.",
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
    "Send_Aggregation_removeAggregation": {
      "address": "Send_Aggregation_removeAggregation",
      "messages": {
        "Aggregation.removeAggregation_Send.message": {
          "description": "Aggregation removeAggregation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "aggInstIds": {
                "type": "integer",
                "description": "The aggInstIds field shall hold the object instance identifiers of the AggregationIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided AggregationIdentity object instance identifier does not include a wildcard and does not match an existing aggregation then this operation shall fail with an UNKNOWN error.\nMatched AggregationIdentity and AggregationDefinition objects shall not be removed from the COM archive only the list of AggregationIdentity and AggregationDefinition objects in the provider.\nIf an error is raised then no aggregations shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not publish aggregation values for the deleted AggregationIdentity objects anymore.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Aggregation_removeAggregation_Send"
          },
          "x-parser-unique-object-id": "Aggregation.removeAggregation_Send.message",
          "x-parser-message-name": "Aggregation_removeAggregation_Send"
        }
      },
      "description": "Send a **Aggregation_removeAggregation_Send** message in this channel to receive a **Aggregation_removeAggregation_Receive** message over the **Receive_Aggregation_removeAggregation** channel.\n",
      "x-parser-unique-object-id": "Send_Aggregation_removeAggregation"
    },
    "Error_Aggregation_removeAggregation": {
      "address": "Error_Aggregation_removeAggregation",
      "messages": {
        "Aggregation.removeAggregation_Error.message": {
          "description": "Aggregation removeAggregation error response",
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
            "x-parser-schema-id": "Aggregation_removeAggregation_Error"
          },
          "x-parser-unique-object-id": "Aggregation.removeAggregation_Error.message",
          "x-parser-message-name": "Aggregation_removeAggregation_Error"
        }
      },
      "description": "Use this channel to receive Aggregation removeAggregation errors as **Aggregation_removeAggregation_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Aggregation_removeAggregation"
    }
  },
  "operations": {
    "Aggregation_removeAggregation_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Aggregation_removeAggregation",
      "messages": [
        "$ref:$.channels.Send_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_Send.message"
      ],
      "x-parser-unique-object-id": "Aggregation_removeAggregation_Send"
    },
    "Aggregation_removeAggregation_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Aggregation_removeAggregation",
      "messages": [
        "$ref:$.channels.Error_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_Error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_removeAggregation_Error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_removeAggregation_Send": "$ref:$.channels.Send_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_Send.message.payload",
      "Aggregation_removeAggregation_Error": "$ref:$.channels.Error_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_Error.message.payload"
    },
    "messages": {
      "Aggregation_removeAggregation_Send": "$ref:$.channels.Send_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_Send.message",
      "Aggregation_removeAggregation_Error": "$ref:$.channels.Error_Aggregation_removeAggregation.messages.Aggregation.removeAggregation_Error.message"
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
  