
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Aggregation Service enableFilter API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableFilter iteraction of the Aggregation Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the enableFilter interaction.",
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
    "Send_Aggregation_enableFilter": {
      "address": "Send_Aggregation_enableFilter",
      "messages": {
        "Aggregation.enableFilter_Send.message": {
          "description": "Aggregation enableFilter request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains AggregationIdentity object instance identifiers.\nThe AggregationIdentity objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the AggregationIdentity objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all AggregationIdentity objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then reports of matching AggregationIdentity objects shall be filtered, a value of FALSE requests that reports will not be filtered.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current filterEnabled field of the definition for a matched AggregationIdentity object i.e. filtering an already filtered aggregation will not result in an error.\nIf a requested AggregationIdentity or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain AggregationIdentity objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new AggregationDefinition object in the COM archive if the filterEnabled field is changed.\nIf a new AggregationDefinition object is created then that new object shall be the current AggregationDefinition used for the specific AggregationIdentity.\n",
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
            "x-parser-schema-id": "Aggregation_enableFilter_Send"
          },
          "x-parser-unique-object-id": "Aggregation.enableFilter_Send.message",
          "x-parser-message-name": "Aggregation_enableFilter_Send"
        }
      },
      "description": "Send a **Aggregation_enableFilter_Send** message in this channel to receive a **Aggregation_enableFilter_Receive** message over the **Receive_Aggregation_enableFilter** channel.\n",
      "x-parser-unique-object-id": "Send_Aggregation_enableFilter"
    },
    "Error_Aggregation_enableFilter": {
      "address": "Error_Aggregation_enableFilter",
      "messages": {
        "Aggregation.enableFilter_Error.message": {
          "description": "Aggregation enableFilter error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-10>"
                },
                "x-parser-schema-id": "<anonymous-schema-9>"
              }
            },
            "x-parser-schema-id": "Aggregation_enableFilter_Error"
          },
          "x-parser-unique-object-id": "Aggregation.enableFilter_Error.message",
          "x-parser-message-name": "Aggregation_enableFilter_Error"
        }
      },
      "description": "Use this channel to receive Aggregation enableFilter errors as **Aggregation_enableFilter_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Aggregation_enableFilter"
    }
  },
  "operations": {
    "Aggregation_enableFilter_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Aggregation_enableFilter",
      "messages": [
        "$ref:$.channels.Send_Aggregation_enableFilter.messages.Aggregation.enableFilter_Send.message"
      ],
      "x-parser-unique-object-id": "Aggregation_enableFilter_Send"
    },
    "Aggregation_enableFilter_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Aggregation_enableFilter",
      "messages": [
        "$ref:$.channels.Error_Aggregation_enableFilter.messages.Aggregation.enableFilter_Error.message"
      ],
      "x-parser-unique-object-id": "Aggregation_enableFilter_Error"
    }
  },
  "components": {
    "schemas": {
      "Aggregation_enableFilter_Send": "$ref:$.channels.Send_Aggregation_enableFilter.messages.Aggregation.enableFilter_Send.message.payload",
      "Aggregation_enableFilter_Error": "$ref:$.channels.Error_Aggregation_enableFilter.messages.Aggregation.enableFilter_Error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.Send_Aggregation_enableFilter.messages.Aggregation.enableFilter_Send.message.payload.properties.enableInstances",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Aggregation_enableFilter_Send": "$ref:$.channels.Send_Aggregation_enableFilter.messages.Aggregation.enableFilter_Send.message",
      "Aggregation_enableFilter_Error": "$ref:$.channels.Error_Aggregation_enableFilter.messages.Aggregation.enableFilter_Error.message"
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
  