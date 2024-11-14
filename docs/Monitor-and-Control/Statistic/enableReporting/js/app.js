
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Statistic Service enableReporting API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableReporting interaction of the Statistic Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Statistic Service's enableReporting interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Statistic_enableReporting": {
      "address": "submit_Statistic_enableReporting",
      "messages": {
        "Statistic.enableReporting_submit.message": {
          "description": "Statistic enableReporting request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
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
            "x-parser-schema-id": "Statistic_enableReporting_submit"
          },
          "x-parser-unique-object-id": "Statistic.enableReporting_submit.message",
          "x-parser-message-name": "Statistic_enableReporting_submit"
        }
      },
      "description": "Send a **Statistic_enableReporting_submit** message in this channel to receive a **Statistic_enableReporting_None** message over the **None_Statistic_enableReporting** channel.\n",
      "x-parser-unique-object-id": "submit_Statistic_enableReporting"
    },
    "error_Statistic_enableReporting": {
      "address": "error_Statistic_enableReporting",
      "messages": {
        "Statistic.enableReporting_error.message": {
          "description": "Statistic enableReporting error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-10>"
                },
                "x-parser-schema-id": "<anonymous-schema-9>"
              }
            },
            "x-parser-schema-id": "Statistic_enableReporting_error"
          },
          "x-parser-unique-object-id": "Statistic.enableReporting_error.message",
          "x-parser-message-name": "Statistic_enableReporting_error"
        }
      },
      "description": "Use this channel to receive Statistic enableReporting errors as **Statistic_enableReporting_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Statistic_enableReporting"
    }
  },
  "operations": {
    "Statistic_enableReporting_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Statistic_enableReporting",
      "messages": [
        "$ref:$.channels.submit_Statistic_enableReporting.messages.Statistic.enableReporting_submit.message"
      ],
      "x-parser-unique-object-id": "Statistic_enableReporting_submit"
    },
    "Statistic_enableReporting_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Statistic_enableReporting",
      "messages": [
        "$ref:$.channels.error_Statistic_enableReporting.messages.Statistic.enableReporting_error.message"
      ],
      "x-parser-unique-object-id": "Statistic_enableReporting_error"
    }
  },
  "components": {
    "schemas": {
      "Statistic_enableReporting_submit": "$ref:$.channels.submit_Statistic_enableReporting.messages.Statistic.enableReporting_submit.message.payload",
      "Statistic_enableReporting_error": "$ref:$.channels.error_Statistic_enableReporting.messages.Statistic.enableReporting_error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.submit_Statistic_enableReporting.messages.Statistic.enableReporting_submit.message.payload.properties.enableInstances",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Statistic_enableReporting_submit": "$ref:$.channels.submit_Statistic_enableReporting.messages.Statistic.enableReporting_submit.message",
      "Statistic_enableReporting_error": "$ref:$.channels.error_Statistic_enableReporting.messages.Statistic.enableReporting_error.message"
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
  