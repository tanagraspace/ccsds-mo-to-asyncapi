
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service getSummaryReport API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getSummaryReport interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's getSummaryReport interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "progress_Check_getSummaryReport": {
      "address": "progress_Check_getSummaryReport",
      "messages": {
        "Check.getSummaryReport_progress.message": {
          "description": "Check getSummaryReport request submission",
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
                "description": "The objInstIds field shall hold one or more CheckIdentity object instance identifiers of which a check report is required.\nA wildcard value of '0' shall report on all checks.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested check is unknown then an UNKNOWN error shall be returned in the ACKNOWLEDGE message and the operation shall end.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_getSummaryReport_progress"
          },
          "x-parser-unique-object-id": "Check.getSummaryReport_progress.message",
          "x-parser-message-name": "Check_getSummaryReport_progress"
        }
      },
      "description": "Send a **Check_getSummaryReport_progress** message in this channel to receive a **Check_getSummaryReport_update** message over the **update_Check_getSummaryReport** channel.\n",
      "x-parser-unique-object-id": "progress_Check_getSummaryReport"
    },
    "update_Check_getSummaryReport": {
      "address": "update_Check_getSummaryReport",
      "messages": {
        "Check.getSummaryReport_update.message": {
          "description": "Check getSummaryReport update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "updateObjInstIds": {
                "type": "integer",
                "format": "int64",
                "description": "The returned updates and final response shall contain an entry for each requested CheckIdentity.\nThe first part of the update shall be the CheckIdentity object instance identifier.\nThe second part shall be the list of all CheckLink object instance identifiers and CheckResults associated with that CheckIdentity.\n",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "updateSummaries": {
                "properties": {
                  "checkEnabled": {
                    "description": "The current enabled state of the check link.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "evaluationTime": {
                    "description": "The timestamp of the check result. If as a result of max reporting interval expiring then it shall contain the expiration timestamp.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "linkId": {
                    "description": "The object instance identifier of the check link.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "parameterId": {
                    "properties": {
                      "domain": {
                        "description": "The domain of the object instance.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-12>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "instId": {
                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "result": {
                    "properties": {
                      "checkedValue": {
                        "description": "This is the value of the parameter or for a compound check the number of checks in violation at the time of a check state transition, or if it is a report due to the CheckDefinitionDetails maxReportingInterval expiring, then it is the value or the number when the interval expired.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      },
                      "currentCheckState": {
                        "description": "The CheckState enumeration holds the possible basic states of a check. The meaning of the NOT_OK value is check specific and detailed in the relevant check type definition.",
                        "enum": [
                          "DISABLED",
                          "UNCHECKED",
                          "INVALID",
                          "OK",
                          "NOT_OK"
                        ],
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      },
                      "paramDefInstId": {
                        "description": "The object instance identifier of the ParameterDefinition used for the check evaluation. NULL if compound check.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-17>"
                      },
                      "previousCheckState": "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message.payload.properties.updateSummaries.properties.result.properties.currentCheckState"
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "Check_getSummaryReport_update"
          },
          "x-parser-unique-object-id": "Check.getSummaryReport_update.message",
          "x-parser-message-name": "Check_getSummaryReport_update"
        }
      },
      "description": "Use this channel to receive Check getSummaryReport responses as **Check_getSummaryReport_update** messages.\n",
      "x-parser-unique-object-id": "update_Check_getSummaryReport"
    },
    "response_Check_getSummaryReport": {
      "address": "response_Check_getSummaryReport",
      "messages": {
        "Check.getSummaryReport_response.message": {
          "description": "Check getSummaryReport update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "responseObjInstIds": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-19>"
              },
              "responseSummaries": "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message.payload.properties.updateSummaries"
            },
            "x-parser-schema-id": "Check_getSummaryReport_response"
          },
          "x-parser-unique-object-id": "Check.getSummaryReport_response.message",
          "x-parser-message-name": "Check_getSummaryReport_response"
        }
      },
      "description": "Use this channel to receive additional Check getSummaryReport responses as **Check_getSummaryReport_response** messages.\n",
      "x-parser-unique-object-id": "response_Check_getSummaryReport"
    },
    "error_Check_getSummaryReport": {
      "address": "error_Check_getSummaryReport",
      "messages": {
        "Check.getSummaryReport_error.message": {
          "description": "Check getSummaryReport error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-20>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-21>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-22>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-24>"
                },
                "x-parser-schema-id": "<anonymous-schema-23>"
              }
            },
            "x-parser-schema-id": "Check_getSummaryReport_error"
          },
          "x-parser-unique-object-id": "Check.getSummaryReport_error.message",
          "x-parser-message-name": "Check_getSummaryReport_error"
        }
      },
      "description": "Use this channel to receive Check getSummaryReport errors as **Check_getSummaryReport_updateErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_getSummaryReport"
    }
  },
  "operations": {
    "Check_getSummaryReport_progress": {
      "action": "send",
      "channel": "$ref:$.channels.progress_Check_getSummaryReport",
      "messages": [
        "$ref:$.channels.progress_Check_getSummaryReport.messages.Check.getSummaryReport_progress.message"
      ],
      "x-parser-unique-object-id": "Check_getSummaryReport_progress"
    },
    "Check_getSummaryReport_update": {
      "action": "receive",
      "channel": "$ref:$.channels.update_Check_getSummaryReport",
      "messages": [
        "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message"
      ],
      "x-parser-unique-object-id": "Check_getSummaryReport_update"
    },
    "Check_getSummaryReport_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Check_getSummaryReport",
      "messages": [
        "$ref:$.channels.response_Check_getSummaryReport.messages.Check.getSummaryReport_response.message"
      ],
      "x-parser-unique-object-id": "Check_getSummaryReport_response"
    },
    "Check_getSummaryReport_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_getSummaryReport",
      "messages": [
        "$ref:$.channels.error_Check_getSummaryReport.messages.Check.getSummaryReport_error.message"
      ],
      "x-parser-unique-object-id": "Check_getSummaryReport_error"
    }
  },
  "components": {
    "schemas": {
      "Check_getSummaryReport_progress": "$ref:$.channels.progress_Check_getSummaryReport.messages.Check.getSummaryReport_progress.message.payload",
      "Check_getSummaryReport_update": "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message.payload",
      "Check_getSummaryReport_response": "$ref:$.channels.response_Check_getSummaryReport.messages.Check.getSummaryReport_response.message.payload",
      "Check_getSummaryReport_error": "$ref:$.channels.error_Check_getSummaryReport.messages.Check.getSummaryReport_error.message.payload",
      "mc": {
        "check": {
          "CheckResult": "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message.payload.properties.updateSummaries.properties.result",
          "CheckResultSummary": "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message.payload.properties.updateSummaries",
          "CheckState": "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message.payload.properties.updateSummaries.properties.result.properties.currentCheckState"
        },
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message.payload.properties.updateSummaries.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Check_getSummaryReport_progress": "$ref:$.channels.progress_Check_getSummaryReport.messages.Check.getSummaryReport_progress.message",
      "Check_getSummaryReport_update": "$ref:$.channels.update_Check_getSummaryReport.messages.Check.getSummaryReport_update.message",
      "Check_getSummaryReport_response": "$ref:$.channels.response_Check_getSummaryReport.messages.Check.getSummaryReport_response.message",
      "Check_getSummaryReport_error": "$ref:$.channels.error_Check_getSummaryReport.messages.Check.getSummaryReport_error.message"
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
  