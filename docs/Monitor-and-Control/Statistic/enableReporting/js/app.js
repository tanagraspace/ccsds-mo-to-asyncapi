
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service enableReporting API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableReporting iteraction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the enableReporting interaction.",
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
    "Send_Statistic_enableReporting": {
      "address": "Send_Statistic_enableReporting",
      "messages": {
        "Statistic.enableReporting_Send.message": {
          "description": "Statistic enableReporting request submission",
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
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains StatisticFunction object instance identifiers.\nIf the isGroupIds field is TRUE, the requested Group, or the Group objects referenced by that Group, must contain StatisticLink objects otherwise an INVALID error shall be returned.\nThe StatisticLink objects referenced, either indirectly via StatisticFunction objects or indirectly via groups, by the enableInstances field shall be the StatisticLink objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all StatisticLink objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then reports after the reporting and collection intervals for matching StatisticLink objects shall be generated, a value of FALSE requests that reports will not be generated.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current reportingEnabled field for a StatisticLink object i.e. enabling an already enabled link will not result in an error.\nIf a requested StatisticFunction or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider should create and store a new StatisticLinkDefinition object in the COM archive if the reportingEnabled field is changed.\n",
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
            "x-parser-schema-id": "Statistic_enableReporting_Send"
          },
          "x-parser-unique-object-id": "Statistic.enableReporting_Send.message",
          "x-parser-message-name": "Statistic_enableReporting_Send"
        }
      },
      "description": "Send a **Statistic_enableReporting_Send** message in this channel to receive a **Statistic_enableReporting_Receive** message over the **Receive_Statistic_enableReporting** channel.\n",
      "x-parser-unique-object-id": "Send_Statistic_enableReporting"
    },
    "Error_Statistic_enableReporting": {
      "address": "Error_Statistic_enableReporting",
      "messages": {
        "Statistic.enableReporting_Error.message": {
          "description": "Statistic enableReporting error response",
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
            "x-parser-schema-id": "Statistic_enableReporting_Error"
          },
          "x-parser-unique-object-id": "Statistic.enableReporting_Error.message",
          "x-parser-message-name": "Statistic_enableReporting_Error"
        }
      },
      "description": "Use this channel to receive Statistic enableReporting errors as **Statistic_enableReporting_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Statistic_enableReporting"
    }
  },
  "operations": {
    "Statistic_enableReporting_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Statistic_enableReporting",
      "messages": [
        "$ref:$.channels.Send_Statistic_enableReporting.messages.Statistic.enableReporting_Send.message"
      ],
      "x-parser-unique-object-id": "Statistic_enableReporting_Send"
    },
    "Statistic_enableReporting_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Statistic_enableReporting",
      "messages": [
        "$ref:$.channels.Error_Statistic_enableReporting.messages.Statistic.enableReporting_Error.message"
      ],
      "x-parser-unique-object-id": "Statistic_enableReporting_Error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_enableReporting_Send": "$ref:$.channels.Send_Statistic_enableReporting.messages.Statistic.enableReporting_Send.message.payload",
      "Statistic_enableReporting_Error": "$ref:$.channels.Error_Statistic_enableReporting.messages.Statistic.enableReporting_Error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.Send_Statistic_enableReporting.messages.Statistic.enableReporting_Send.message.payload.properties.enableInstances",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Statistic_enableReporting_Send": "$ref:$.channels.Send_Statistic_enableReporting.messages.Statistic.enableReporting_Send.message",
      "Statistic_enableReporting_Error": "$ref:$.channels.Error_Statistic_enableReporting.messages.Statistic.enableReporting_Error.message"
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
  