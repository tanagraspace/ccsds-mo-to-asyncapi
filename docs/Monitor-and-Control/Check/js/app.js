
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "getCurrentTransitionList_progress": {
      "address": "getCurrentTransitionList_progress",
      "messages": {
        "getCurrentTransitionList_progress.message": {
          "description": "getCurrentTransitionList request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
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
            "x-parser-schema-id": "getCurrentTransitionList_progress"
          },
          "x-parser-unique-object-id": "getCurrentTransitionList_progress.message",
          "x-parser-message-name": "getCurrentTransitionList_progress"
        }
      },
      "description": "Send a **getCurrentTransitionList_progress** message in this channel to receive a **getCurrentTransitionList_update** message over the **getCurrentTransitionList_update** channel.\n",
      "x-parser-unique-object-id": "getCurrentTransitionList_progress"
    },
    "getCurrentTransitionList_update": {
      "address": null,
      "messages": {
        "getCurrentTransitionList_update.message": {
          "description": "getCurrentTransitionList response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
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
                      "currentCheckState": "$ref:$.channels.getCurrentTransitionList_progress.messages.getCurrentTransitionList_progress.message.payload.properties.filter.properties.stateFilter.items",
                      "paramDefInstId": {
                        "description": "The object instance identifier of the ParameterDefinition used for the check evaluation. NULL if compound check.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-22>"
                      },
                      "previousCheckState": "$ref:$.channels.getCurrentTransitionList_progress.messages.getCurrentTransitionList_progress.message.payload.properties.filter.properties.stateFilter.items"
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-20>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "getCurrentTransitionList_update"
          },
          "x-parser-unique-object-id": "getCurrentTransitionList_update.message",
          "x-parser-message-name": "getCurrentTransitionList_update"
        }
      },
      "description": "Use this channel to receive getCurrentTransitionList responses as **getCurrentTransitionList_update** messages.\n",
      "x-parser-unique-object-id": "getCurrentTransitionList_update"
    },
    "getCurrentTransitionList_response": {
      "address": "getCurrentTransitionList_response",
      "messages": {
        "getCurrentTransitionList_response.message": {
          "description": "getCurrentTransitionList update response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-23>"
              },
              "responseSummaries": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries"
            },
            "x-parser-schema-id": "getCurrentTransitionList_response"
          },
          "x-parser-unique-object-id": "getCurrentTransitionList_response.message",
          "x-parser-message-name": "getCurrentTransitionList_response"
        }
      },
      "description": "Use this channel to receive additional getCurrentTransitionList responses as **getCurrentTransitionList_response** messages.\n",
      "x-parser-unique-object-id": "getCurrentTransitionList_response"
    },
    "getCurrentTransitionList_error": {
      "address": "getCurrentTransitionList_error",
      "messages": {
        "getCurrentTransitionList_error.message": {
          "description": "getCurrentTransitionList error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
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
            "x-parser-schema-id": "getCurrentTransitionList_error"
          },
          "x-parser-unique-object-id": "getCurrentTransitionList_error.message",
          "x-parser-message-name": "getCurrentTransitionList_error"
        }
      },
      "description": "Use this channel to receive getCurrentTransitionList errors as **getCurrentTransitionList_error** messages.\n",
      "x-parser-unique-object-id": "getCurrentTransitionList_error"
    },
    "getSummaryReport_progress": {
      "address": "getSummaryReport_progress",
      "messages": {
        "getSummaryReport_progress.message": {
          "description": "getSummaryReport request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-29>"
              },
              "objInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-31>"
                },
                "description": "The objInstIds field shall hold one or more CheckIdentity object instance identifiers of which a check report is required.\nA wildcard value of '0' shall report on all checks.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested check is unknown then an UNKNOWN error shall be returned in the ACKNOWLEDGE message and the operation shall end.\n",
                "x-parser-schema-id": "<anonymous-schema-30>"
              }
            },
            "x-parser-schema-id": "getSummaryReport_progress"
          },
          "x-parser-unique-object-id": "getSummaryReport_progress.message",
          "x-parser-message-name": "getSummaryReport_progress"
        }
      },
      "description": "Send a **getSummaryReport_progress** message in this channel to receive a **getSummaryReport_update** message over the **getSummaryReport_update** channel.\n",
      "x-parser-unique-object-id": "getSummaryReport_progress"
    },
    "getSummaryReport_update": {
      "address": null,
      "messages": {
        "getSummaryReport_update.message": {
          "description": "getSummaryReport response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-32>"
              },
              "updateObjInstIds": {
                "type": "integer",
                "format": "int64",
                "description": "The returned updates and final response shall contain an entry for each requested CheckIdentity.\nThe first part of the update shall be the CheckIdentity object instance identifier.\nThe second part shall be the list of all CheckLink object instance identifiers and CheckResults associated with that CheckIdentity.\n",
                "x-parser-schema-id": "<anonymous-schema-33>"
              },
              "updateSummaries": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries"
            },
            "x-parser-schema-id": "getSummaryReport_update"
          },
          "x-parser-unique-object-id": "getSummaryReport_update.message",
          "x-parser-message-name": "getSummaryReport_update"
        }
      },
      "description": "Use this channel to receive getSummaryReport responses as **getSummaryReport_update** messages.\n",
      "x-parser-unique-object-id": "getSummaryReport_update"
    },
    "getSummaryReport_response": {
      "address": "getSummaryReport_response",
      "messages": {
        "getSummaryReport_response.message": {
          "description": "getSummaryReport update response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-34>"
              },
              "responseObjInstIds": {
                "type": "integer",
                "x-parser-schema-id": "<anonymous-schema-35>"
              },
              "responseSummaries": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries"
            },
            "x-parser-schema-id": "getSummaryReport_response"
          },
          "x-parser-unique-object-id": "getSummaryReport_response.message",
          "x-parser-message-name": "getSummaryReport_response"
        }
      },
      "description": "Use this channel to receive additional getSummaryReport responses as **getSummaryReport_response** messages.\n",
      "x-parser-unique-object-id": "getSummaryReport_response"
    },
    "getSummaryReport_error": {
      "address": "getSummaryReport_error",
      "messages": {
        "getSummaryReport_error.message": {
          "description": "getSummaryReport error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-36>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-37>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-38>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-40>"
                },
                "x-parser-schema-id": "<anonymous-schema-39>"
              }
            },
            "x-parser-schema-id": "getSummaryReport_error"
          },
          "x-parser-unique-object-id": "getSummaryReport_error.message",
          "x-parser-message-name": "getSummaryReport_error"
        }
      },
      "description": "Use this channel to receive getSummaryReport errors as **getSummaryReport_error** messages.\n",
      "x-parser-unique-object-id": "getSummaryReport_error"
    },
    "enableService_submit": {
      "address": "enableService_submit",
      "messages": {
        "enableService_submit.message": {
          "description": "enableService request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-41>"
              },
              "enableService": {
                "type": "boolean",
                "description": "If enableService is set to TRUE the service shall be enabled and evaluation and reporting of check will commence.\nIf enableService is set to FALSE then all evaluation of checks shall be suspended and no check transitions will be reported.\nIf the enableService value matches the current enabled state of the service then no change shall be made and no error reported. Enabling an already enabled service has no effect.\n",
                "x-parser-schema-id": "<anonymous-schema-42>"
              }
            },
            "x-parser-schema-id": "enableService_submit"
          },
          "x-parser-unique-object-id": "enableService_submit.message",
          "x-parser-message-name": "enableService_submit"
        }
      },
      "description": "Send a **enableService_submit** message in this channel.\n",
      "x-parser-unique-object-id": "enableService_submit"
    },
    "getServiceStatus_request": {
      "address": "getServiceStatus_request",
      "messages": {
        "getServiceStatus_request.message": {
          "description": "getServiceStatus request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-43>"
              }
            },
            "x-parser-schema-id": "getServiceStatus_request"
          },
          "x-parser-unique-object-id": "getServiceStatus_request.message",
          "x-parser-message-name": "getServiceStatus_request"
        }
      },
      "description": "Send a **getServiceStatus_request** message in this channel to receive a **getServiceStatus_response** message over the **getServiceStatus_response** channel.\n",
      "x-parser-unique-object-id": "getServiceStatus_request"
    },
    "getServiceStatus_response": {
      "address": null,
      "messages": {
        "getServiceStatus_response.message": {
          "description": "getServiceStatus response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-44>"
              },
              "serviceEnabled": {
                "type": "boolean",
                "description": "The operation shall return TRUE if the service is currently enabled or FALSE if the service is currently disabled.\n",
                "x-parser-schema-id": "<anonymous-schema-45>"
              }
            },
            "x-parser-schema-id": "getServiceStatus_response"
          },
          "x-parser-unique-object-id": "getServiceStatus_response.message",
          "x-parser-message-name": "getServiceStatus_response"
        }
      },
      "description": "Use this channel to receive getServiceStatus responses as **getServiceStatus_response** messages.\n",
      "x-parser-unique-object-id": "getServiceStatus_response"
    },
    "enableCheck_submit": {
      "address": "enableCheck_submit",
      "messages": {
        "enableCheck_submit.message": {
          "description": "enableCheck request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-46>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains CheckLink object instance identifiers.\nThe CheckLink objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the CheckLink objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all CheckLink objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then evaluations of matching CheckLink objects shall be performed, a value of FALSE requests that evaluations will not be performed.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current checkEnabled field for a CheckLink object i.e. enabling an already enabled check will not result in an error.\nIf a requested CheckLink or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain CheckLink objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new CheckLinkDefinition object in the COM archive if the checkEnabled field is changed.\n",
                "x-parser-schema-id": "<anonymous-schema-47>"
              },
              "enableInstances": {
                "properties": {
                  "id": {
                    "description": "The object instance identifier.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-49>"
                  },
                  "value": {
                    "description": "An associated Boolean value.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-50>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-48>"
              }
            },
            "x-parser-schema-id": "enableCheck_submit"
          },
          "x-parser-unique-object-id": "enableCheck_submit.message",
          "x-parser-message-name": "enableCheck_submit"
        }
      },
      "description": "Send a **enableCheck_submit** message in this channel.\n",
      "x-parser-unique-object-id": "enableCheck_submit"
    },
    "enableCheck_error": {
      "address": "enableCheck_error",
      "messages": {
        "enableCheck_error.message": {
          "description": "enableCheck error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-51>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-52>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-53>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-55>"
                },
                "x-parser-schema-id": "<anonymous-schema-54>"
              }
            },
            "x-parser-schema-id": "enableCheck_error"
          },
          "x-parser-unique-object-id": "enableCheck_error.message",
          "x-parser-message-name": "enableCheck_error"
        }
      },
      "description": "Use this channel to receive enableCheck errors as **enableCheck_error** messages.\n",
      "x-parser-unique-object-id": "enableCheck_error"
    },
    "triggerCheck_submit": {
      "address": "triggerCheck_submit",
      "messages": {
        "triggerCheck_submit.message": {
          "description": "triggerCheck request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-56>"
              },
              "checkObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-58>"
                },
                "description": "The checkObjInstIds field shall hold a list of CheckIdentity object instance identifiers to trigger the evaluation of all linked checks.\n",
                "x-parser-schema-id": "<anonymous-schema-57>"
              },
              "linkObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-60>"
                },
                "description": "The linkObjInstIds field shall hold a list of CheckLink object instance identifiers to trigger the evaluation of.\nThe wildcard value of '0' shall be permitted in either list.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested CheckIdentity or CheckLink object is unknown then an UNKNOWN error shall be returned.\nIf an error is raised then no evaluations shall be made as a result of this operation call.\nEither list may be empty in which case filtering on that aspect, check identity or specific check link, shall be ignored.\nThe two lists shall be combined using 'OR' logic, where a CheckLink is evaluated if the identity of a check is in the first list or if the link is directly listed in the second list.\nTriggering a check shall ignore the nominalTime, nominalCount, violationTime and violationCount fields and requests an immediate evaluation of the checks.\nTriggering a check during a periodic check shall not influence the periodic check (e.g. it does not reset the checkInterval timer, the successive valid samples that passed/violated the check or the maxReportingInterval timer).\n",
                "x-parser-schema-id": "<anonymous-schema-59>"
              }
            },
            "x-parser-schema-id": "triggerCheck_submit"
          },
          "x-parser-unique-object-id": "triggerCheck_submit.message",
          "x-parser-message-name": "triggerCheck_submit"
        }
      },
      "description": "Send a **triggerCheck_submit** message in this channel.\n",
      "x-parser-unique-object-id": "triggerCheck_submit"
    },
    "triggerCheck_error": {
      "address": "triggerCheck_error",
      "messages": {
        "triggerCheck_error.message": {
          "description": "triggerCheck error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-61>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-62>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-63>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-65>"
                },
                "x-parser-schema-id": "<anonymous-schema-64>"
              }
            },
            "x-parser-schema-id": "triggerCheck_error"
          },
          "x-parser-unique-object-id": "triggerCheck_error.message",
          "x-parser-message-name": "triggerCheck_error"
        }
      },
      "description": "Use this channel to receive triggerCheck errors as **triggerCheck_error** messages.\n",
      "x-parser-unique-object-id": "triggerCheck_error"
    },
    "listDefinition_request": {
      "address": "listDefinition_request",
      "messages": {
        "listDefinition_request.message": {
          "description": "listDefinition request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-66>"
              },
              "names": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-68>"
                },
                "description": "The names field shall hold a list of CheckIdentity names to retrieve the CheckIdentity and actual check definition object instance identifiers for.\nThe request may contain the wildcard value of '*' to return all supported check definitions.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing CheckIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-67>"
              }
            },
            "x-parser-schema-id": "listDefinition_request"
          },
          "x-parser-unique-object-id": "listDefinition_request.message",
          "x-parser-message-name": "listDefinition_request"
        }
      },
      "description": "Send a **listDefinition_request** message in this channel to receive a **listDefinition_response** message over the **listDefinition_response** channel.\n",
      "x-parser-unique-object-id": "listDefinition_request"
    },
    "listDefinition_response": {
      "address": null,
      "messages": {
        "listDefinition_response.message": {
          "description": "listDefinition response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-69>"
              },
              "objInstIds": {
                "properties": {
                  "objDefCheckType": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-72>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-73>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-74>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-75>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-71>"
                  },
                  "objInstIds": {
                    "properties": {
                      "objDefInstanceId": {
                        "description": "The object instance identifier of the Definition object.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-77>"
                      },
                      "objIdentityInstanceId": {
                        "description": "The object instance identifier of the Identity object.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-78>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-76>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-70>"
              }
            },
            "x-parser-schema-id": "listDefinition_response"
          },
          "x-parser-unique-object-id": "listDefinition_response.message",
          "x-parser-message-name": "listDefinition_response"
        }
      },
      "description": "Use this channel to receive listDefinition responses as **listDefinition_response** messages.\n",
      "x-parser-unique-object-id": "listDefinition_response"
    },
    "listDefinition_error": {
      "address": "listDefinition_error",
      "messages": {
        "listDefinition_error.message": {
          "description": "listDefinition error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-79>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-80>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-81>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-83>"
                },
                "x-parser-schema-id": "<anonymous-schema-82>"
              }
            },
            "x-parser-schema-id": "listDefinition_error"
          },
          "x-parser-unique-object-id": "listDefinition_error.message",
          "x-parser-message-name": "listDefinition_error"
        }
      },
      "description": "Use this channel to receive listDefinition errors as **listDefinition_error** messages.\n",
      "x-parser-unique-object-id": "listDefinition_error"
    },
    "listCheckLinks_request": {
      "address": "listCheckLinks_request",
      "messages": {
        "listCheckLinks_request.message": {
          "description": "listCheckLinks request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-84>"
              },
              "checkObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-86>"
                },
                "description": "The checkObjInstIds field shall hold a list of CheckIdentity object instance identifiers to retrieve the CheckLink object instance identifiers for.\nThe request may contain the wildcard value of '0' to return all supported check links.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing CheckIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-85>"
              }
            },
            "x-parser-schema-id": "listCheckLinks_request"
          },
          "x-parser-unique-object-id": "listCheckLinks_request.message",
          "x-parser-message-name": "listCheckLinks_request"
        }
      },
      "description": "Send a **listCheckLinks_request** message in this channel to receive a **listCheckLinks_response** message over the **listCheckLinks_response** channel.\n",
      "x-parser-unique-object-id": "listCheckLinks_request"
    },
    "listCheckLinks_response": {
      "address": null,
      "messages": {
        "listCheckLinks_response.message": {
          "description": "listCheckLinks response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-87>"
              },
              "chkLinkObjInstIds": {
                "properties": {
                  "checkEnabled": {
                    "description": "TRUE if the check instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-89>"
                  },
                  "checkId": {
                    "description": "The object instance identifier of the CheckIdentity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-90>"
                  },
                  "linkDefinitionId": {
                    "description": "Contains the object instance identifier of the CheckLinkDefinition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-91>"
                  },
                  "linkId": {
                    "description": "The object instance identifier of the CheckLink object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-92>"
                  },
                  "parameterId": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries.properties.parameterId"
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-88>"
              }
            },
            "x-parser-schema-id": "listCheckLinks_response"
          },
          "x-parser-unique-object-id": "listCheckLinks_response.message",
          "x-parser-message-name": "listCheckLinks_response"
        }
      },
      "description": "Use this channel to receive listCheckLinks responses as **listCheckLinks_response** messages.\n",
      "x-parser-unique-object-id": "listCheckLinks_response"
    },
    "listCheckLinks_error": {
      "address": "listCheckLinks_error",
      "messages": {
        "listCheckLinks_error.message": {
          "description": "listCheckLinks error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-93>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-94>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-95>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-97>"
                },
                "x-parser-schema-id": "<anonymous-schema-96>"
              }
            },
            "x-parser-schema-id": "listCheckLinks_error"
          },
          "x-parser-unique-object-id": "listCheckLinks_error.message",
          "x-parser-message-name": "listCheckLinks_error"
        }
      },
      "description": "Use this channel to receive listCheckLinks errors as **listCheckLinks_error** messages.\n",
      "x-parser-unique-object-id": "listCheckLinks_error"
    },
    "addCheck_request": {
      "address": "addCheck_request",
      "messages": {
        "addCheck_request.message": {
          "description": "addCheck request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-98>"
              },
              "checkNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-100>"
                },
                "description": "The checkNames field shall hold the names of the checks to be added.\nThe checkNames field must not contain NULL, the wildcard '*', or empty value (an INVALID error shall be returned in this case).\nThe supplied names must be unique among all CheckIdentity objects for the domain of the provider otherwise a DUPLICATE error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-99>"
              },
              "checkDefDetails": {
                "properties": {
                  "checkSeverity": {
                    "description": "The severity enumeration holds the possible values for a severity. The numerical value represents the increasing severity, therefore CRITICAL is more severe than ALARM. Normally, for checks, only the Warning and Critical ranges are used: the colour yellow is associated with Warning, and the colour red is associated with Critical.",
                    "enum": [
                      "INFORMATIONAL",
                      "WARNING",
                      "ALARM",
                      "SEVERE",
                      "CRITICAL"
                    ],
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-102>"
                  },
                  "description": {
                    "description": "The description of the check. May be empty.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-103>"
                  },
                  "maxReportingInterval": {
                    "description": "Maximum interval that can elapse between generations of CheckResult reports. If this value expires, then a CheckResult is generated with the same state for the previous and current state. If set to '0', then no maximum reporting interval shall be applied.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-104>"
                  },
                  "nominalCount": {
                    "description": "Number of consecutive valid samples passing the check for the check to be OK.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-105>"
                  },
                  "nominalTime": {
                    "description": "If nominalCount is zero then this is duration that a parameter is continuously passing the check for the check to be OK. If nominalCount is not zero then this is the period over which samples will be used in the nominalCount calculation, i.e. samples further in the past than nominalTime are not considered.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-106>"
                  },
                  "violationCount": {
                    "description": "Number of consecutive valid samples violating the check for the check to be in violation.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-107>"
                  },
                  "violationTime": {
                    "description": "If violationCount is zero then this is duration that a parameter is continuously violating the check for the check to be in violation. If violationCount not zero then this is the period over which samples will be used in the violationCount calculation, i.e. samples further in the past than violationTime are not considered.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-108>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-101>"
              }
            },
            "x-parser-schema-id": "addCheck_request"
          },
          "x-parser-unique-object-id": "addCheck_request.message",
          "x-parser-message-name": "addCheck_request"
        }
      },
      "description": "Send a **addCheck_request** message in this channel to receive a **addCheck_response** message over the **addCheck_response** channel.\n",
      "x-parser-unique-object-id": "addCheck_request"
    },
    "addCheck_response": {
      "address": null,
      "messages": {
        "addCheck_response.message": {
          "description": "addCheck response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-109>"
              },
              "newObjInstIds": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds.properties.objInstIds"
            },
            "x-parser-schema-id": "addCheck_response"
          },
          "x-parser-unique-object-id": "addCheck_response.message",
          "x-parser-message-name": "addCheck_response"
        }
      },
      "description": "Use this channel to receive addCheck responses as **addCheck_response** messages.\n",
      "x-parser-unique-object-id": "addCheck_response"
    },
    "addCheck_error": {
      "address": "addCheck_error",
      "messages": {
        "addCheck_error.message": {
          "description": "addCheck error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-110>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-111>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
                ],
                "x-parser-schema-id": "<anonymous-schema-112>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-114>"
                },
                "x-parser-schema-id": "<anonymous-schema-113>"
              }
            },
            "x-parser-schema-id": "addCheck_error"
          },
          "x-parser-unique-object-id": "addCheck_error.message",
          "x-parser-message-name": "addCheck_error"
        }
      },
      "description": "Use this channel to receive addCheck errors as **addCheck_error** messages.\n",
      "x-parser-unique-object-id": "addCheck_error"
    },
    "updateDefinition_request": {
      "address": "updateDefinition_request",
      "messages": {
        "updateDefinition_request.message": {
          "description": "updateDefinition request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-115>"
              },
              "checkInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-117>"
                },
                "description": "The checkInstIds field shall hold the object instance identifiers of the CheckIdentity objects to be updated.\nIf the checkInstIds list contains either NULL or '0' an INVALID error shall be raised.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the check to be updated is currently being used by a CheckLink object, a REFERENCED error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-116>"
              },
              "checkDefDetails": "$ref:$.channels.addCheck_request.messages.addCheck_request.message.payload.properties.checkDefDetails"
            },
            "x-parser-schema-id": "updateDefinition_request"
          },
          "x-parser-unique-object-id": "updateDefinition_request.message",
          "x-parser-message-name": "updateDefinition_request"
        }
      },
      "description": "Send a **updateDefinition_request** message in this channel to receive a **updateDefinition_response** message over the **updateDefinition_response** channel.\n",
      "x-parser-unique-object-id": "updateDefinition_request"
    },
    "updateDefinition_response": {
      "address": null,
      "messages": {
        "updateDefinition_response.message": {
          "description": "updateDefinition response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-118>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-120>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new check definition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-119>"
              }
            },
            "x-parser-schema-id": "updateDefinition_response"
          },
          "x-parser-unique-object-id": "updateDefinition_response.message",
          "x-parser-message-name": "updateDefinition_response"
        }
      },
      "description": "Use this channel to receive updateDefinition responses as **updateDefinition_response** messages.\n",
      "x-parser-unique-object-id": "updateDefinition_response"
    },
    "updateDefinition_error": {
      "address": "updateDefinition_error",
      "messages": {
        "updateDefinition_error.message": {
          "description": "updateDefinition error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-121>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM",
                  "MC"
                ],
                "x-parser-schema-id": "<anonymous-schema-122>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID",
                  "REFERENCED"
                ],
                "x-parser-schema-id": "<anonymous-schema-123>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-125>"
                },
                "x-parser-schema-id": "<anonymous-schema-124>"
              }
            },
            "x-parser-schema-id": "updateDefinition_error"
          },
          "x-parser-unique-object-id": "updateDefinition_error.message",
          "x-parser-message-name": "updateDefinition_error"
        }
      },
      "description": "Use this channel to receive updateDefinition errors as **updateDefinition_error** messages.\n",
      "x-parser-unique-object-id": "updateDefinition_error"
    },
    "removeCheck_submit": {
      "address": "removeCheck_submit",
      "messages": {
        "removeCheck_submit.message": {
          "description": "removeCheck request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-126>"
              },
              "objInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-128>"
                },
                "description": "The objInstIds field holds the object instance identifiers of the CheckIdentity objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided CheckIdentity instance identifier does not include a wildcard and does not match an existing check then this operation shall fail with an UNKNOWN error.\nIf any of the matched CheckIdentity objects are being referenced by a CheckLink object then a REFERENCED error shall be returned.\nMatched CheckIdentity objects shall not be removed from the COM archive only the list of available CheckIdentity objects in the provider.\nIf an error is raised then no CheckIdentity objects shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not allow new CheckLink objects to be created for the matched CheckIdentity anymore, existing CheckLink objects are not affected.\n",
                "x-parser-schema-id": "<anonymous-schema-127>"
              }
            },
            "x-parser-schema-id": "removeCheck_submit"
          },
          "x-parser-unique-object-id": "removeCheck_submit.message",
          "x-parser-message-name": "removeCheck_submit"
        }
      },
      "description": "Send a **removeCheck_submit** message in this channel.\n",
      "x-parser-unique-object-id": "removeCheck_submit"
    },
    "removeCheck_error": {
      "address": "removeCheck_error",
      "messages": {
        "removeCheck_error.message": {
          "description": "removeCheck error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-129>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MC",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-130>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "REFERENCED",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-131>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-133>"
                },
                "x-parser-schema-id": "<anonymous-schema-132>"
              }
            },
            "x-parser-schema-id": "removeCheck_error"
          },
          "x-parser-unique-object-id": "removeCheck_error.message",
          "x-parser-message-name": "removeCheck_error"
        }
      },
      "description": "Use this channel to receive removeCheck errors as **removeCheck_error** messages.\n",
      "x-parser-unique-object-id": "removeCheck_error"
    },
    "addParameterCheck_request": {
      "address": "addParameterCheck_request",
      "messages": {
        "addParameterCheck_request.message": {
          "description": "addParameterCheck request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-134>"
              },
              "linkDetails": {
                "properties": {
                  "checkEnabled": {
                    "description": "TRUE if the check instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-136>"
                  },
                  "checkInterval": {
                    "description": "The interval that a check should be applied. Only applicable if checkOnChange is FALSE. If '0', then no periodic checking shall be performed, and a check will be triggered by another mechanism. Ignored for Compound checks.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-137>"
                  },
                  "checkOnChange": {
                    "description": "If TRUE then any change to state or value of the parameter, or the check condition will trigger a check evaluation. Ignored for Compound checks.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-138>"
                  },
                  "condition": {
                    "properties": {
                      "operator": {
                        "description": "The ExpressionOperator enumeration holds a set of possible expression operators.",
                        "enum": [
                          "EQUAL",
                          "DIFFER",
                          "GREATER",
                          "GREATER_OR_EQUAL",
                          "LESS",
                          "LESS_OR_EQUAL",
                          "CONTAINS",
                          "ICONTAINS"
                        ],
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-140>"
                      },
                      "parameterId": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries.properties.parameterId",
                      "useConverted": {
                        "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used.",
                        "type": "boolean",
                        "x-parser-schema-id": "<anonymous-schema-141>"
                      },
                      "value": {
                        "description": "The value to be used in the expression.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-142>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-139>"
                  },
                  "useConverted": {
                    "description": "If set to TRUE the converted value field of the parameter value should be used, otherwise the raw value field should be used. Ignored for Compound checks.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-143>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-135>"
              },
              "linkRefs": {
                "properties": {
                  "related": {
                    "description": "Contains the object instance identifier of a related object (e.g. the ActionDefinition that an Action uses). This is service specific. The ObjectType of the related object is specified in the service specification. The related object must exist in the same domain as this object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-145>"
                  },
                  "source": {
                    "properties": {
                      "key": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries.properties.parameterId",
                      "type_": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds.properties.objDefCheckType"
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-146>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-144>"
              }
            },
            "x-parser-schema-id": "addParameterCheck_request"
          },
          "x-parser-unique-object-id": "addParameterCheck_request.message",
          "x-parser-message-name": "addParameterCheck_request"
        }
      },
      "description": "Send a **addParameterCheck_request** message in this channel to receive a **addParameterCheck_response** message over the **addParameterCheck_response** channel.\n",
      "x-parser-unique-object-id": "addParameterCheck_request"
    },
    "addParameterCheck_response": {
      "address": null,
      "messages": {
        "addParameterCheck_response.message": {
          "description": "addParameterCheck response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-147>"
              },
              "newObjInstIds": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds.properties.objInstIds"
            },
            "x-parser-schema-id": "addParameterCheck_response"
          },
          "x-parser-unique-object-id": "addParameterCheck_response.message",
          "x-parser-message-name": "addParameterCheck_response"
        }
      },
      "description": "Use this channel to receive addParameterCheck responses as **addParameterCheck_response** messages.\n",
      "x-parser-unique-object-id": "addParameterCheck_response"
    },
    "addParameterCheck_error": {
      "address": "addParameterCheck_error",
      "messages": {
        "addParameterCheck_error.message": {
          "description": "addParameterCheck error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-148>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM",
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-149>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-150>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-152>"
                },
                "x-parser-schema-id": "<anonymous-schema-151>"
              }
            },
            "x-parser-schema-id": "addParameterCheck_error"
          },
          "x-parser-unique-object-id": "addParameterCheck_error.message",
          "x-parser-message-name": "addParameterCheck_error"
        }
      },
      "description": "Use this channel to receive addParameterCheck errors as **addParameterCheck_error** messages.\n",
      "x-parser-unique-object-id": "addParameterCheck_error"
    },
    "removeParameterCheck_submit": {
      "address": "removeParameterCheck_submit",
      "messages": {
        "removeParameterCheck_submit.message": {
          "description": "removeParameterCheck request",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-153>"
              },
              "objInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-155>"
                },
                "description": "The objInstIds field holds the object instance identifiers of the CheckLink objects to be removed from the provider.\nThe list may contain the wildcard value of '0'.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a provided CheckLink instance identifier does not include a wildcard and does not match an existing link then this operation shall fail with an UNKNOWN error.\nMatched CheckLink objects shall not be removed from the COM archive only the list of available CheckLink objects in the provider.\nIf an error is raised then no CheckLink objects shall be removed as a result of this operation call.\nIf the operation succeeds then the provider shall not evaluate those parameter/check definition combinations for the deleted CheckLink objects anymore.\n",
                "x-parser-schema-id": "<anonymous-schema-154>"
              }
            },
            "x-parser-schema-id": "removeParameterCheck_submit"
          },
          "x-parser-unique-object-id": "removeParameterCheck_submit.message",
          "x-parser-message-name": "removeParameterCheck_submit"
        }
      },
      "description": "Send a **removeParameterCheck_submit** message in this channel.\n",
      "x-parser-unique-object-id": "removeParameterCheck_submit"
    },
    "removeParameterCheck_error": {
      "address": "removeParameterCheck_error",
      "messages": {
        "removeParameterCheck_error.message": {
          "description": "removeParameterCheck error response",
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-156>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-157>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-158>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-160>"
                },
                "x-parser-schema-id": "<anonymous-schema-159>"
              }
            },
            "x-parser-schema-id": "removeParameterCheck_error"
          },
          "x-parser-unique-object-id": "removeParameterCheck_error.message",
          "x-parser-message-name": "removeParameterCheck_error"
        }
      },
      "description": "Use this channel to receive removeParameterCheck errors as **removeParameterCheck_error** messages.\n",
      "x-parser-unique-object-id": "removeParameterCheck_error"
    }
  },
  "operations": {
    "getCurrentTransitionList_progress": {
      "action": "send",
      "channel": "$ref:$.channels.getCurrentTransitionList_progress",
      "messages": [
        "$ref:$.channels.getCurrentTransitionList_progress.messages.getCurrentTransitionList_progress.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getCurrentTransitionList_update"
      },
      "x-parser-unique-object-id": "getCurrentTransitionList_progress"
    },
    "getCurrentTransitionList_update": {
      "action": "receive",
      "channel": "$ref:$.channels.getCurrentTransitionList_update",
      "messages": [
        "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message"
      ],
      "x-parser-unique-object-id": "getCurrentTransitionList_update"
    },
    "getCurrentTransitionList_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getCurrentTransitionList_response",
      "messages": [
        "$ref:$.channels.getCurrentTransitionList_response.messages.getCurrentTransitionList_response.message"
      ],
      "x-parser-unique-object-id": "getCurrentTransitionList_response"
    },
    "getCurrentTransitionList_error": {
      "action": "receive",
      "channel": "$ref:$.channels.getCurrentTransitionList_error",
      "messages": [
        "$ref:$.channels.getCurrentTransitionList_error.messages.getCurrentTransitionList_error.message"
      ],
      "x-parser-unique-object-id": "getCurrentTransitionList_error"
    },
    "getSummaryReport_progress": {
      "action": "send",
      "channel": "$ref:$.channels.getSummaryReport_progress",
      "messages": [
        "$ref:$.channels.getSummaryReport_progress.messages.getSummaryReport_progress.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getSummaryReport_update"
      },
      "x-parser-unique-object-id": "getSummaryReport_progress"
    },
    "getSummaryReport_update": {
      "action": "receive",
      "channel": "$ref:$.channels.getSummaryReport_update",
      "messages": [
        "$ref:$.channels.getSummaryReport_update.messages.getSummaryReport_update.message"
      ],
      "x-parser-unique-object-id": "getSummaryReport_update"
    },
    "getSummaryReport_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getSummaryReport_response",
      "messages": [
        "$ref:$.channels.getSummaryReport_response.messages.getSummaryReport_response.message"
      ],
      "x-parser-unique-object-id": "getSummaryReport_response"
    },
    "getSummaryReport_error": {
      "action": "receive",
      "channel": "$ref:$.channels.getSummaryReport_error",
      "messages": [
        "$ref:$.channels.getSummaryReport_error.messages.getSummaryReport_error.message"
      ],
      "x-parser-unique-object-id": "getSummaryReport_error"
    },
    "enableService_submit": {
      "action": "send",
      "channel": "$ref:$.channels.enableService_submit",
      "messages": [
        "$ref:$.channels.enableService_submit.messages.enableService_submit.message"
      ],
      "x-parser-unique-object-id": "enableService_submit"
    },
    "getServiceStatus_request": {
      "action": "send",
      "channel": "$ref:$.channels.getServiceStatus_request",
      "messages": [
        "$ref:$.channels.getServiceStatus_request.messages.getServiceStatus_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getServiceStatus_response"
      },
      "x-parser-unique-object-id": "getServiceStatus_request"
    },
    "getServiceStatus_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getServiceStatus_response",
      "messages": [
        "$ref:$.channels.getServiceStatus_response.messages.getServiceStatus_response.message"
      ],
      "x-parser-unique-object-id": "getServiceStatus_response"
    },
    "enableCheck_submit": {
      "action": "send",
      "channel": "$ref:$.channels.enableCheck_submit",
      "messages": [
        "$ref:$.channels.enableCheck_submit.messages.enableCheck_submit.message"
      ],
      "x-parser-unique-object-id": "enableCheck_submit"
    },
    "enableCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.enableCheck_error",
      "messages": [
        "$ref:$.channels.enableCheck_error.messages.enableCheck_error.message"
      ],
      "x-parser-unique-object-id": "enableCheck_error"
    },
    "triggerCheck_submit": {
      "action": "send",
      "channel": "$ref:$.channels.triggerCheck_submit",
      "messages": [
        "$ref:$.channels.triggerCheck_submit.messages.triggerCheck_submit.message"
      ],
      "x-parser-unique-object-id": "triggerCheck_submit"
    },
    "triggerCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.triggerCheck_error",
      "messages": [
        "$ref:$.channels.triggerCheck_error.messages.triggerCheck_error.message"
      ],
      "x-parser-unique-object-id": "triggerCheck_error"
    },
    "listDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.listDefinition_request",
      "messages": [
        "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.listDefinition_response"
      },
      "x-parser-unique-object-id": "listDefinition_request"
    },
    "listDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.listDefinition_response",
      "messages": [
        "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message"
      ],
      "x-parser-unique-object-id": "listDefinition_response"
    },
    "listDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.listDefinition_error",
      "messages": [
        "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message"
      ],
      "x-parser-unique-object-id": "listDefinition_error"
    },
    "listCheckLinks_request": {
      "action": "send",
      "channel": "$ref:$.channels.listCheckLinks_request",
      "messages": [
        "$ref:$.channels.listCheckLinks_request.messages.listCheckLinks_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.listCheckLinks_response"
      },
      "x-parser-unique-object-id": "listCheckLinks_request"
    },
    "listCheckLinks_response": {
      "action": "receive",
      "channel": "$ref:$.channels.listCheckLinks_response",
      "messages": [
        "$ref:$.channels.listCheckLinks_response.messages.listCheckLinks_response.message"
      ],
      "x-parser-unique-object-id": "listCheckLinks_response"
    },
    "listCheckLinks_error": {
      "action": "receive",
      "channel": "$ref:$.channels.listCheckLinks_error",
      "messages": [
        "$ref:$.channels.listCheckLinks_error.messages.listCheckLinks_error.message"
      ],
      "x-parser-unique-object-id": "listCheckLinks_error"
    },
    "addCheck_request": {
      "action": "send",
      "channel": "$ref:$.channels.addCheck_request",
      "messages": [
        "$ref:$.channels.addCheck_request.messages.addCheck_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.addCheck_response"
      },
      "x-parser-unique-object-id": "addCheck_request"
    },
    "addCheck_response": {
      "action": "receive",
      "channel": "$ref:$.channels.addCheck_response",
      "messages": [
        "$ref:$.channels.addCheck_response.messages.addCheck_response.message"
      ],
      "x-parser-unique-object-id": "addCheck_response"
    },
    "addCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.addCheck_error",
      "messages": [
        "$ref:$.channels.addCheck_error.messages.addCheck_error.message"
      ],
      "x-parser-unique-object-id": "addCheck_error"
    },
    "updateDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.updateDefinition_request",
      "messages": [
        "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.updateDefinition_response"
      },
      "x-parser-unique-object-id": "updateDefinition_request"
    },
    "updateDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.updateDefinition_response",
      "messages": [
        "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message"
      ],
      "x-parser-unique-object-id": "updateDefinition_response"
    },
    "updateDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.updateDefinition_error",
      "messages": [
        "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message"
      ],
      "x-parser-unique-object-id": "updateDefinition_error"
    },
    "removeCheck_submit": {
      "action": "send",
      "channel": "$ref:$.channels.removeCheck_submit",
      "messages": [
        "$ref:$.channels.removeCheck_submit.messages.removeCheck_submit.message"
      ],
      "x-parser-unique-object-id": "removeCheck_submit"
    },
    "removeCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.removeCheck_error",
      "messages": [
        "$ref:$.channels.removeCheck_error.messages.removeCheck_error.message"
      ],
      "x-parser-unique-object-id": "removeCheck_error"
    },
    "addParameterCheck_request": {
      "action": "send",
      "channel": "$ref:$.channels.addParameterCheck_request",
      "messages": [
        "$ref:$.channels.addParameterCheck_request.messages.addParameterCheck_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.addParameterCheck_response"
      },
      "x-parser-unique-object-id": "addParameterCheck_request"
    },
    "addParameterCheck_response": {
      "action": "receive",
      "channel": "$ref:$.channels.addParameterCheck_response",
      "messages": [
        "$ref:$.channels.addParameterCheck_response.messages.addParameterCheck_response.message"
      ],
      "x-parser-unique-object-id": "addParameterCheck_response"
    },
    "addParameterCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.addParameterCheck_error",
      "messages": [
        "$ref:$.channels.addParameterCheck_error.messages.addParameterCheck_error.message"
      ],
      "x-parser-unique-object-id": "addParameterCheck_error"
    },
    "removeParameterCheck_submit": {
      "action": "send",
      "channel": "$ref:$.channels.removeParameterCheck_submit",
      "messages": [
        "$ref:$.channels.removeParameterCheck_submit.messages.removeParameterCheck_submit.message"
      ],
      "x-parser-unique-object-id": "removeParameterCheck_submit"
    },
    "removeParameterCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.removeParameterCheck_error",
      "messages": [
        "$ref:$.channels.removeParameterCheck_error.messages.removeParameterCheck_error.message"
      ],
      "x-parser-unique-object-id": "removeParameterCheck_error"
    }
  },
  "components": {
    "schemas": {
      "getCurrentTransitionList_progress": "$ref:$.channels.getCurrentTransitionList_progress.messages.getCurrentTransitionList_progress.message.payload",
      "getCurrentTransitionList_update": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload",
      "getCurrentTransitionList_response": "$ref:$.channels.getCurrentTransitionList_response.messages.getCurrentTransitionList_response.message.payload",
      "getCurrentTransitionList_error": "$ref:$.channels.getCurrentTransitionList_error.messages.getCurrentTransitionList_error.message.payload",
      "getSummaryReport_progress": "$ref:$.channels.getSummaryReport_progress.messages.getSummaryReport_progress.message.payload",
      "getSummaryReport_update": "$ref:$.channels.getSummaryReport_update.messages.getSummaryReport_update.message.payload",
      "getSummaryReport_response": "$ref:$.channels.getSummaryReport_response.messages.getSummaryReport_response.message.payload",
      "getSummaryReport_error": "$ref:$.channels.getSummaryReport_error.messages.getSummaryReport_error.message.payload",
      "enableService_submit": "$ref:$.channels.enableService_submit.messages.enableService_submit.message.payload",
      "enableService_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-161>"
          }
        },
        "x-parser-schema-id": "enableService_None"
      },
      "getServiceStatus_request": "$ref:$.channels.getServiceStatus_request.messages.getServiceStatus_request.message.payload",
      "getServiceStatus_response": "$ref:$.channels.getServiceStatus_response.messages.getServiceStatus_response.message.payload",
      "enableCheck_submit": "$ref:$.channels.enableCheck_submit.messages.enableCheck_submit.message.payload",
      "enableCheck_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-162>"
          }
        },
        "x-parser-schema-id": "enableCheck_None"
      },
      "enableCheck_error": "$ref:$.channels.enableCheck_error.messages.enableCheck_error.message.payload",
      "triggerCheck_submit": "$ref:$.channels.triggerCheck_submit.messages.triggerCheck_submit.message.payload",
      "triggerCheck_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-163>"
          }
        },
        "x-parser-schema-id": "triggerCheck_None"
      },
      "triggerCheck_error": "$ref:$.channels.triggerCheck_error.messages.triggerCheck_error.message.payload",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message.payload",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message.payload",
      "listCheckLinks_request": "$ref:$.channels.listCheckLinks_request.messages.listCheckLinks_request.message.payload",
      "listCheckLinks_response": "$ref:$.channels.listCheckLinks_response.messages.listCheckLinks_response.message.payload",
      "listCheckLinks_error": "$ref:$.channels.listCheckLinks_error.messages.listCheckLinks_error.message.payload",
      "addCheck_request": "$ref:$.channels.addCheck_request.messages.addCheck_request.message.payload",
      "addCheck_response": "$ref:$.channels.addCheck_response.messages.addCheck_response.message.payload",
      "addCheck_error": "$ref:$.channels.addCheck_error.messages.addCheck_error.message.payload",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message.payload",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message.payload",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message.payload",
      "removeCheck_submit": "$ref:$.channels.removeCheck_submit.messages.removeCheck_submit.message.payload",
      "removeCheck_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-164>"
          }
        },
        "x-parser-schema-id": "removeCheck_None"
      },
      "removeCheck_error": "$ref:$.channels.removeCheck_error.messages.removeCheck_error.message.payload",
      "addParameterCheck_request": "$ref:$.channels.addParameterCheck_request.messages.addParameterCheck_request.message.payload",
      "addParameterCheck_response": "$ref:$.channels.addParameterCheck_response.messages.addParameterCheck_response.message.payload",
      "addParameterCheck_error": "$ref:$.channels.addParameterCheck_error.messages.addParameterCheck_error.message.payload",
      "removeParameterCheck_submit": "$ref:$.channels.removeParameterCheck_submit.messages.removeParameterCheck_submit.message.payload",
      "removeParameterCheck_None": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "interactionId": {
            "type": "string",
            "description": "A unique identifier to map the response (receive message) to the request (send message).",
            "x-parser-schema-id": "<anonymous-schema-165>"
          }
        },
        "x-parser-schema-id": "removeParameterCheck_None"
      },
      "removeParameterCheck_error": "$ref:$.channels.removeParameterCheck_error.messages.removeParameterCheck_error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.enableCheck_submit.messages.enableCheck_submit.message.payload.properties.enableInstances",
        "ObjectDetails": "$ref:$.channels.addParameterCheck_request.messages.addParameterCheck_request.message.payload.properties.linkRefs",
        "ObjectId": "$ref:$.channels.addParameterCheck_request.messages.addParameterCheck_request.message.payload.properties.linkRefs.properties.source",
        "ObjectKey": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries.properties.parameterId",
        "ObjectType": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds.properties.objDefCheckType",
        "archive": {
          "ExpressionOperator": "$ref:$.channels.addParameterCheck_request.messages.addParameterCheck_request.message.payload.properties.linkDetails.properties.condition.properties.operator"
        },
        "x-parser-schema-id": "com"
      },
      "mc": {
        "check": {
          "CheckDefinitionDetails": "$ref:$.channels.addCheck_request.messages.addCheck_request.message.payload.properties.checkDefDetails",
          "CheckLinkDetails": "$ref:$.channels.addParameterCheck_request.messages.addParameterCheck_request.message.payload.properties.linkDetails",
          "CheckLinkSummary": "$ref:$.channels.listCheckLinks_response.messages.listCheckLinks_response.message.payload.properties.chkLinkObjInstIds",
          "CheckResult": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries.properties.result",
          "CheckResultFilter": "$ref:$.channels.getCurrentTransitionList_progress.messages.getCurrentTransitionList_progress.message.payload.properties.filter",
          "CheckResultSummary": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message.payload.properties.updateSummaries",
          "CheckState": "$ref:$.channels.getCurrentTransitionList_progress.messages.getCurrentTransitionList_progress.message.payload.properties.filter.properties.stateFilter.items",
          "CheckTypedInstance": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds"
        },
        "ObjectInstancePair": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message.payload.properties.objInstIds.properties.objInstIds",
        "ParameterExpression": "$ref:$.channels.addParameterCheck_request.messages.addParameterCheck_request.message.payload.properties.linkDetails.properties.condition",
        "Severity": "$ref:$.channels.addCheck_request.messages.addCheck_request.message.payload.properties.checkDefDetails.properties.checkSeverity",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "getCurrentTransitionList_progress": "$ref:$.channels.getCurrentTransitionList_progress.messages.getCurrentTransitionList_progress.message",
      "getCurrentTransitionList_update": "$ref:$.channels.getCurrentTransitionList_update.messages.getCurrentTransitionList_update.message",
      "getCurrentTransitionList_response": "$ref:$.channels.getCurrentTransitionList_response.messages.getCurrentTransitionList_response.message",
      "getCurrentTransitionList_error": "$ref:$.channels.getCurrentTransitionList_error.messages.getCurrentTransitionList_error.message",
      "getSummaryReport_progress": "$ref:$.channels.getSummaryReport_progress.messages.getSummaryReport_progress.message",
      "getSummaryReport_update": "$ref:$.channels.getSummaryReport_update.messages.getSummaryReport_update.message",
      "getSummaryReport_response": "$ref:$.channels.getSummaryReport_response.messages.getSummaryReport_response.message",
      "getSummaryReport_error": "$ref:$.channels.getSummaryReport_error.messages.getSummaryReport_error.message",
      "enableService_submit": "$ref:$.channels.enableService_submit.messages.enableService_submit.message",
      "getServiceStatus_request": "$ref:$.channels.getServiceStatus_request.messages.getServiceStatus_request.message",
      "getServiceStatus_response": "$ref:$.channels.getServiceStatus_response.messages.getServiceStatus_response.message",
      "enableCheck_submit": "$ref:$.channels.enableCheck_submit.messages.enableCheck_submit.message",
      "enableCheck_error": "$ref:$.channels.enableCheck_error.messages.enableCheck_error.message",
      "triggerCheck_submit": "$ref:$.channels.triggerCheck_submit.messages.triggerCheck_submit.message",
      "triggerCheck_error": "$ref:$.channels.triggerCheck_error.messages.triggerCheck_error.message",
      "listDefinition_request": "$ref:$.channels.listDefinition_request.messages.listDefinition_request.message",
      "listDefinition_response": "$ref:$.channels.listDefinition_response.messages.listDefinition_response.message",
      "listDefinition_error": "$ref:$.channels.listDefinition_error.messages.listDefinition_error.message",
      "listCheckLinks_request": "$ref:$.channels.listCheckLinks_request.messages.listCheckLinks_request.message",
      "listCheckLinks_response": "$ref:$.channels.listCheckLinks_response.messages.listCheckLinks_response.message",
      "listCheckLinks_error": "$ref:$.channels.listCheckLinks_error.messages.listCheckLinks_error.message",
      "addCheck_request": "$ref:$.channels.addCheck_request.messages.addCheck_request.message",
      "addCheck_response": "$ref:$.channels.addCheck_response.messages.addCheck_response.message",
      "addCheck_error": "$ref:$.channels.addCheck_error.messages.addCheck_error.message",
      "updateDefinition_request": "$ref:$.channels.updateDefinition_request.messages.updateDefinition_request.message",
      "updateDefinition_response": "$ref:$.channels.updateDefinition_response.messages.updateDefinition_response.message",
      "updateDefinition_error": "$ref:$.channels.updateDefinition_error.messages.updateDefinition_error.message",
      "removeCheck_submit": "$ref:$.channels.removeCheck_submit.messages.removeCheck_submit.message",
      "removeCheck_error": "$ref:$.channels.removeCheck_error.messages.removeCheck_error.message",
      "addParameterCheck_request": "$ref:$.channels.addParameterCheck_request.messages.addParameterCheck_request.message",
      "addParameterCheck_response": "$ref:$.channels.addParameterCheck_response.messages.addParameterCheck_response.message",
      "addParameterCheck_error": "$ref:$.channels.addParameterCheck_error.messages.addParameterCheck_error.message",
      "removeParameterCheck_submit": "$ref:$.channels.removeParameterCheck_submit.messages.removeParameterCheck_submit.message",
      "removeParameterCheck_error": "$ref:$.channels.removeParameterCheck_error.messages.removeParameterCheck_error.message"
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
  