
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service removeParameterEvaluation API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the removeParameterEvaluation interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's removeParameterEvaluation interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Statistic_removeParameterEvaluation": {
      "address": "submit_Statistic_removeParameterEvaluation",
      "messages": {
        "Statistic.removeParameterEvaluation_submit.message": {
          "description": "Statistic removeParameterEvaluation request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "objInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The objInstIds field holds the object instance identifiers of the StatisticLink objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided StatisticLink object instance identifier does not include a wildcard and does not match an existing StatisticLink object then this operation shall fail with an UNKNOWN error.\nMatched StatisticLink objects shall not be removed from the COM archive only the list of evaluated StatisticLink objects in the provider.\nIf an error is raised then no StatisticLink objects shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not evaluate those parameter/function definition combinations for the deleted StatisticLink objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Statistic_removeParameterEvaluation_submit"
          },
          "x-parser-unique-object-id": "Statistic.removeParameterEvaluation_submit.message",
          "x-parser-message-name": "Statistic_removeParameterEvaluation_submit"
        }
      },
      "description": "Send a **Statistic_removeParameterEvaluation_submit** message in this channel to receive a **Statistic_removeParameterEvaluation_None** message over the **None_Statistic_removeParameterEvaluation** channel.\n",
      "x-parser-unique-object-id": "submit_Statistic_removeParameterEvaluation"
    },
    "error_Statistic_removeParameterEvaluation": {
      "address": "error_Statistic_removeParameterEvaluation",
      "messages": {
        "Statistic.removeParameterEvaluation_error.message": {
          "description": "Statistic removeParameterEvaluation error response",
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
            "x-parser-schema-id": "Statistic_removeParameterEvaluation_error"
          },
          "x-parser-unique-object-id": "Statistic.removeParameterEvaluation_error.message",
          "x-parser-message-name": "Statistic_removeParameterEvaluation_error"
        }
      },
      "description": "Use this channel to receive Statistic removeParameterEvaluation errors as **Statistic_removeParameterEvaluation_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Statistic_removeParameterEvaluation"
    }
  },
  "operations": {
    "Statistic_removeParameterEvaluation_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Statistic_removeParameterEvaluation",
      "messages": [
        "$ref:$.channels.submit_Statistic_removeParameterEvaluation.messages.Statistic.removeParameterEvaluation_submit.message"
      ],
      "x-parser-unique-object-id": "Statistic_removeParameterEvaluation_submit"
    },
    "Statistic_removeParameterEvaluation_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Statistic_removeParameterEvaluation",
      "messages": [
        "$ref:$.channels.error_Statistic_removeParameterEvaluation.messages.Statistic.removeParameterEvaluation_error.message"
      ],
      "x-parser-unique-object-id": "Statistic_removeParameterEvaluation_error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_removeParameterEvaluation_submit": "$ref:$.channels.submit_Statistic_removeParameterEvaluation.messages.Statistic.removeParameterEvaluation_submit.message.payload",
      "Statistic_removeParameterEvaluation_error": "$ref:$.channels.error_Statistic_removeParameterEvaluation.messages.Statistic.removeParameterEvaluation_error.message.payload"
    },
    "messages": {
      "Statistic_removeParameterEvaluation_submit": "$ref:$.channels.submit_Statistic_removeParameterEvaluation.messages.Statistic.removeParameterEvaluation_submit.message",
      "Statistic_removeParameterEvaluation_error": "$ref:$.channels.error_Statistic_removeParameterEvaluation.messages.Statistic.removeParameterEvaluation_error.message"
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
  