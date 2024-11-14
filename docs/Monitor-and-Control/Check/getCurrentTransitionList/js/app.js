
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service getCurrentTransitionList API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the getCurrentTransitionList interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's getCurrentTransitionList interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "progress_Check_getCurrentTransitionList": {
      "address": "progress_Check_getCurrentTransitionList",
      "messages": {
        "Check.getCurrentTransitionList_progress.message": {
          "description": "Check getCurrentTransitionList request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "filter": {
                "properties": {
                  "checkFilter": {
                    "description": "The list of GroupIdentity object instance identifiers if checkFilterViaGroups is TRUE otherwise the CheckIdentity object instance identifiers to filter on. A value of '0' means match all.",
                    "items": {
                      "type": "integer",
                      "x-parser-schema-id": "<anonymous-schema-4>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "checkFilterViaGroups": {
                    "description": "If TRUE then the checkFilter field contains GroupIdentity object instance identifiers that link to CheckIdentity objects otherwise it contains CheckIdentity object instance identifiers directly.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "parameterFilter": {
                    "description": "The list of GroupIdentity object instance identifiers if parameterFilterViaGroups is TRUE otherwise the ParameterIdentity object instance identifiers to filter on. A value of '0' means match all.",
                    "items": {
                      "type": "integer",
                      "x-parser-schema-id": "<anonymous-schema-7>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "parameterFilterViaGroups": {
                    "description": "If TRUE then the parameterFilter field contains GroupIdentity object instance identifiers that link to ParameterIdentity objects otherwise it contains ParameterIdentity object instance identifiers directly.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "stateFilter": {
                    "description": "The list of required check states to filter on. Empty list means match all.",
                    "items": {
                      "description": "The CheckState enumeration holds the possible basic states of a check. The meaning of the NOT_OK value is check specific and detailed in the relevant check type definition.",
                      "enum": [
                        "DISABLED",
                        "UNCHECKED",
                        "INVALID",
                        "OK",
                        "NOT_OK"
                      ],
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-10>"
                    },
                    "type": "array",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_getCurrentTransitionList_progress"
          },
          "x-parser-unique-object-id": "Check.getCurrentTransitionList_progress.message",
          "x-parser-message-name": "Check_getCurrentTransitionList_progress"
        }
      },
      "description": "Send a **Check_getCurrentTransitionList_progress** message in this channel to receive a **Check_getCurrentTransitionList_update** message over the **update_Check_getCurrentTransitionList** channel.\n",
      "x-parser-unique-object-id": "progress_Check_getCurrentTransitionList"
    },
    "update_Check_getCurrentTransitionList": {
      "address": "update_Check_getCurrentTransitionList",
      "messages": {
        "Check.getCurrentTransitionList_update.message": {
          "description": "Check getCurrentTransitionList update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "updateSummaries": {
                "properties": {
                  "checkEnabled": {
                    "description": "The current enabled state of the check link.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "evaluationTime": {
                    "description": "The timestamp of the check result. If as a result of max reporting interval expiring then it shall contain the expiration timestamp.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "linkId": {
                    "description": "The object instance identifier of the check link.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  },
                  "parameterId": {
                    "properties": {
                      "domain": {
                        "description": "The domain of the object instance.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-18>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-17>"
                      },
                      "instId": {
                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-19>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-16>"
                  },
                  "result": {
                    "properties": {
                      "checkedValue": {
                        "description": "This is the value of the parameter or for a compound check the number of checks in violation at the time of a check state transition, or if it is a report due to the CheckDefinitionDetails maxReportingInterval expiring, then it is the value or the number when the interval expired.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-21>"
                      },
                      "currentCheckState": "$ref:$.channels.progress_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_progress.message.payload.properties.filter.properties.stateFilter.items",
                      "paramDefInstId": {
                        "description": "The object instance identifier of the ParameterDefinition used for the check evaluation. NULL if compound check.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-22>"
                      },
                      "previousCheckState": "$ref:$.channels.progress_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_progress.message.payload.properties.filter.properties.stateFilter.items"
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-20>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "Check_getCurrentTransitionList_update"
          },
          "x-parser-unique-object-id": "Check.getCurrentTransitionList_update.message",
          "x-parser-message-name": "Check_getCurrentTransitionList_update"
        }
      },
      "description": "Use this channel to receive Check getCurrentTransitionList responses as **Check_getCurrentTransitionList_update** messages.\n",
      "x-parser-unique-object-id": "update_Check_getCurrentTransitionList"
    },
    "response_Check_getCurrentTransitionList": {
      "address": "response_Check_getCurrentTransitionList",
      "messages": {
        "Check.getCurrentTransitionList_response.message": {
          "description": "Check getCurrentTransitionList update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "responseSummaries": "$ref:$.channels.update_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_update.message.payload.properties.updateSummaries"
            },
            "x-parser-schema-id": "Check_getCurrentTransitionList_response"
          },
          "x-parser-unique-object-id": "Check.getCurrentTransitionList_response.message",
          "x-parser-message-name": "Check_getCurrentTransitionList_response"
        }
      },
      "description": "Use this channel to receive additional Check getCurrentTransitionList responses as **Check_getCurrentTransitionList_response** messages.\n",
      "x-parser-unique-object-id": "response_Check_getCurrentTransitionList"
    },
    "error_Check_getCurrentTransitionList": {
      "address": "error_Check_getCurrentTransitionList",
      "messages": {
        "Check.getCurrentTransitionList_error.message": {
          "description": "Check getCurrentTransitionList error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-24>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-25>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-26>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-28>"
                },
                "x-parser-schema-id": "<anonymous-schema-27>"
              }
            },
            "x-parser-schema-id": "Check_getCurrentTransitionList_error"
          },
          "x-parser-unique-object-id": "Check.getCurrentTransitionList_error.message",
          "x-parser-message-name": "Check_getCurrentTransitionList_error"
        }
      },
      "description": "Use this channel to receive Check getCurrentTransitionList errors as **Check_getCurrentTransitionList_updateErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_getCurrentTransitionList"
    }
  },
  "operations": {
    "Check_getCurrentTransitionList_progress": {
      "action": "send",
      "channel": "$ref:$.channels.progress_Check_getCurrentTransitionList",
      "messages": [
        "$ref:$.channels.progress_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_progress.message"
      ],
      "x-parser-unique-object-id": "Check_getCurrentTransitionList_progress"
    },
    "Check_getCurrentTransitionList_update": {
      "action": "receive",
      "channel": "$ref:$.channels.update_Check_getCurrentTransitionList",
      "messages": [
        "$ref:$.channels.update_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_update.message"
      ],
      "x-parser-unique-object-id": "Check_getCurrentTransitionList_update"
    },
    "Check_getCurrentTransitionList_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Check_getCurrentTransitionList",
      "messages": [
        "$ref:$.channels.response_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_response.message"
      ],
      "x-parser-unique-object-id": "Check_getCurrentTransitionList_response"
    },
    "Check_getCurrentTransitionList_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_getCurrentTransitionList",
      "messages": [
        "$ref:$.channels.error_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_error.message"
      ],
      "x-parser-unique-object-id": "Check_getCurrentTransitionList_error"
    }
  },
  "components": {
    "schemas": {
      "Check_getCurrentTransitionList_progress": "$ref:$.channels.progress_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_progress.message.payload",
      "Check_getCurrentTransitionList_update": "$ref:$.channels.update_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_update.message.payload",
      "Check_getCurrentTransitionList_response": "$ref:$.channels.response_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_response.message.payload",
      "Check_getCurrentTransitionList_error": "$ref:$.channels.error_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_error.message.payload",
      "mc": {
        "check": {
          "CheckResult": "$ref:$.channels.update_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_update.message.payload.properties.updateSummaries.properties.result",
          "CheckResultFilter": "$ref:$.channels.progress_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_progress.message.payload.properties.filter",
          "CheckResultSummary": "$ref:$.channels.update_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_update.message.payload.properties.updateSummaries",
          "CheckState": "$ref:$.channels.progress_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_progress.message.payload.properties.filter.properties.stateFilter.items"
        },
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.update_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_update.message.payload.properties.updateSummaries.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Check_getCurrentTransitionList_progress": "$ref:$.channels.progress_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_progress.message",
      "Check_getCurrentTransitionList_update": "$ref:$.channels.update_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_update.message",
      "Check_getCurrentTransitionList_response": "$ref:$.channels.response_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_response.message",
      "Check_getCurrentTransitionList_error": "$ref:$.channels.error_Check_getCurrentTransitionList.messages.Check.getCurrentTransitionList_error.message"
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
  