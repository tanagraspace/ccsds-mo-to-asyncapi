
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service listParameterEvaluations API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listParameterEvaluations iteraction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the listParameterEvaluations interaction.",
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
    "Send_Statistic_listParameterEvaluations": {
      "address": "Send_Statistic_listParameterEvaluations",
      "messages": {
        "Statistic.listParameterEvaluations_Send.message": {
          "description": "Statistic listParameterEvaluations request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "statObjInstIds": {
                "type": "integer",
                "description": "The statObjInstIds field shall hold a list of StatisticFunction object instance identifiers to retrieve the StatisticLink object instance identifiers for.\nThe request may contain the wildcard value of '0' to return all supported statistic links.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing StatisticFunction object then this operation shall fail with an UNKNOWN error.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Statistic_listParameterEvaluations_Send"
          },
          "x-parser-unique-object-id": "Statistic.listParameterEvaluations_Send.message",
          "x-parser-message-name": "Statistic_listParameterEvaluations_Send"
        }
      },
      "description": "Send a **Statistic_listParameterEvaluations_Send** message in this channel to receive a **Statistic_listParameterEvaluations_Receive** message over the **Receive_Statistic_listParameterEvaluations** channel.\n",
      "x-parser-unique-object-id": "Send_Statistic_listParameterEvaluations"
    },
    "Receive_Statistic_listParameterEvaluations": {
      "address": "Receive_Statistic_listParameterEvaluations",
      "messages": {
        "Statistic.listParameterEvaluations_Receive.message": {
          "description": "Statistic listParameterEvaluations update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "statLinkObjInstIds": {
                "properties": {
                  "funcId": {
                    "description": "The object instance identifier of the StatisticFunction object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "linkDefId": {
                    "description": "The object instance identifier of the StatisticLinkDefinition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "linkId": {
                    "description": "The object instance identifier of the StatisticLink object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "parameterId": {
                    "properties": {
                      "domain": {
                        "description": "The domain of the object instance.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-10>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      },
                      "instId": {
                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "reportingEnabled": {
                    "description": "TRUE if reporting of the evaluation instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Statistic_listParameterEvaluations_Receive"
          },
          "x-parser-unique-object-id": "Statistic.listParameterEvaluations_Receive.message",
          "x-parser-message-name": "Statistic_listParameterEvaluations_Receive"
        }
      },
      "description": "Use this channel to receive Statistic listParameterEvaluations responses as **Statistic_listParameterEvaluations_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Statistic_listParameterEvaluations"
    },
    "Error_Statistic_listParameterEvaluations": {
      "address": "Error_Statistic_listParameterEvaluations",
      "messages": {
        "Statistic.listParameterEvaluations_Error.message": {
          "description": "Statistic listParameterEvaluations error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-17>"
                },
                "x-parser-schema-id": "<anonymous-schema-16>"
              }
            },
            "x-parser-schema-id": "Statistic_listParameterEvaluations_Error"
          },
          "x-parser-unique-object-id": "Statistic.listParameterEvaluations_Error.message",
          "x-parser-message-name": "Statistic_listParameterEvaluations_Error"
        }
      },
      "description": "Use this channel to receive Statistic listParameterEvaluations errors as **Statistic_listParameterEvaluations_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Statistic_listParameterEvaluations"
    }
  },
  "operations": {
    "Statistic_listParameterEvaluations_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Statistic_listParameterEvaluations",
      "messages": [
        "$ref:$.channels.Send_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Send.message"
      ],
      "x-parser-unique-object-id": "Statistic_listParameterEvaluations_Send"
    },
    "Statistic_listParameterEvaluations_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Statistic_listParameterEvaluations",
      "messages": [
        "$ref:$.channels.Receive_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Receive.message"
      ],
      "x-parser-unique-object-id": "Statistic_listParameterEvaluations_Receive"
    },
    "Statistic_listParameterEvaluations_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Statistic_listParameterEvaluations",
      "messages": [
        "$ref:$.channels.Error_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Error.message"
      ],
      "x-parser-unique-object-id": "Statistic_listParameterEvaluations_Error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_listParameterEvaluations_Send": "$ref:$.channels.Send_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Send.message.payload",
      "Statistic_listParameterEvaluations_Receive": "$ref:$.channels.Receive_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Receive.message.payload",
      "Statistic_listParameterEvaluations_Error": "$ref:$.channels.Error_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Error.message.payload",
      "mc": {
        "statistic": {
          "StatisticLinkSummary": "$ref:$.channels.Receive_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Receive.message.payload.properties.statLinkObjInstIds"
        },
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.Receive_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Receive.message.payload.properties.statLinkObjInstIds.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Statistic_listParameterEvaluations_Send": "$ref:$.channels.Send_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Send.message",
      "Statistic_listParameterEvaluations_Receive": "$ref:$.channels.Receive_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Receive.message",
      "Statistic_listParameterEvaluations_Error": "$ref:$.channels.Error_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_Error.message"
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
  