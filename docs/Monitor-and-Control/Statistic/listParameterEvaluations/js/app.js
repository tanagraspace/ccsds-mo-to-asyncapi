
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service listParameterEvaluations API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listParameterEvaluations interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's listParameterEvaluations interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Statistic_listParameterEvaluations": {
      "address": "request_Statistic_listParameterEvaluations",
      "messages": {
        "Statistic.listParameterEvaluations_request.message": {
          "description": "Statistic listParameterEvaluations request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "statObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The statObjInstIds field shall hold a list of StatisticFunction object instance identifiers to retrieve the StatisticLink object instance identifiers for.\nThe request may contain the wildcard value of '0' to return all supported statistic links.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing StatisticFunction object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Statistic_listParameterEvaluations_request"
          },
          "x-parser-unique-object-id": "Statistic.listParameterEvaluations_request.message",
          "x-parser-message-name": "Statistic_listParameterEvaluations_request"
        }
      },
      "description": "Send a **Statistic_listParameterEvaluations_request** message in this channel to receive a **Statistic_listParameterEvaluations_response** message over the **response_Statistic_listParameterEvaluations** channel.\n",
      "x-parser-unique-object-id": "request_Statistic_listParameterEvaluations"
    },
    "response_Statistic_listParameterEvaluations": {
      "address": "response_Statistic_listParameterEvaluations",
      "messages": {
        "Statistic.listParameterEvaluations_response.message": {
          "description": "Statistic listParameterEvaluations update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "statLinkObjInstIds": {
                "properties": {
                  "funcId": {
                    "description": "The object instance identifier of the StatisticFunction object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "linkDefId": {
                    "description": "The object instance identifier of the StatisticLinkDefinition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "linkId": {
                    "description": "The object instance identifier of the StatisticLink object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "parameterId": {
                    "properties": {
                      "domain": {
                        "description": "The domain of the object instance.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-11>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "instId": {
                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "reportingEnabled": {
                    "description": "TRUE if reporting of the evaluation instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "Statistic_listParameterEvaluations_response"
          },
          "x-parser-unique-object-id": "Statistic.listParameterEvaluations_response.message",
          "x-parser-message-name": "Statistic_listParameterEvaluations_response"
        }
      },
      "description": "Use this channel to receive Statistic listParameterEvaluations responses as **Statistic_listParameterEvaluations_response** messages.\n",
      "x-parser-unique-object-id": "response_Statistic_listParameterEvaluations"
    },
    "error_Statistic_listParameterEvaluations": {
      "address": "error_Statistic_listParameterEvaluations",
      "messages": {
        "Statistic.listParameterEvaluations_error.message": {
          "description": "Statistic listParameterEvaluations error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-18>"
                },
                "x-parser-schema-id": "<anonymous-schema-17>"
              }
            },
            "x-parser-schema-id": "Statistic_listParameterEvaluations_error"
          },
          "x-parser-unique-object-id": "Statistic.listParameterEvaluations_error.message",
          "x-parser-message-name": "Statistic_listParameterEvaluations_error"
        }
      },
      "description": "Use this channel to receive Statistic listParameterEvaluations errors as **Statistic_listParameterEvaluations_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Statistic_listParameterEvaluations"
    }
  },
  "operations": {
    "Statistic_listParameterEvaluations_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Statistic_listParameterEvaluations",
      "messages": [
        "$ref:$.channels.request_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_request.message"
      ],
      "x-parser-unique-object-id": "Statistic_listParameterEvaluations_request"
    },
    "Statistic_listParameterEvaluations_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Statistic_listParameterEvaluations",
      "messages": [
        "$ref:$.channels.response_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_response.message"
      ],
      "x-parser-unique-object-id": "Statistic_listParameterEvaluations_response"
    },
    "Statistic_listParameterEvaluations_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Statistic_listParameterEvaluations",
      "messages": [
        "$ref:$.channels.error_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_error.message"
      ],
      "x-parser-unique-object-id": "Statistic_listParameterEvaluations_error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_listParameterEvaluations_request": "$ref:$.channels.request_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_request.message.payload",
      "Statistic_listParameterEvaluations_response": "$ref:$.channels.response_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_response.message.payload",
      "Statistic_listParameterEvaluations_error": "$ref:$.channels.error_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_error.message.payload",
      "mc": {
        "statistic": {
          "StatisticLinkSummary": "$ref:$.channels.response_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_response.message.payload.properties.statLinkObjInstIds"
        },
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.response_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_response.message.payload.properties.statLinkObjInstIds.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Statistic_listParameterEvaluations_request": "$ref:$.channels.request_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_request.message",
      "Statistic_listParameterEvaluations_response": "$ref:$.channels.response_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_response.message",
      "Statistic_listParameterEvaluations_error": "$ref:$.channels.error_Statistic_listParameterEvaluations.messages.Statistic.listParameterEvaluations_error.message"
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
  