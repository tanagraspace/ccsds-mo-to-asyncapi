
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's updateDefinition interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Check_updateDefinition": {
      "address": "request_Check_updateDefinition",
      "messages": {
        "Check.updateDefinition_request.message": {
          "description": "Check updateDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "checkInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The checkInstIds field shall hold the object instance identifiers of the CheckIdentity objects to be updated.\nIf the checkInstIds list contains either NULL or '0' an INVALID error shall be raised.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the check to be updated is currently being used by a CheckLink object, a REFERENCED error shall be raised.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
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
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "description": {
                    "description": "The description of the check. May be empty.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "maxReportingInterval": {
                    "description": "Maximum interval that can elapse between generations of CheckResult reports. If this value expires, then a CheckResult is generated with the same state for the previous and current state. If set to '0', then no maximum reporting interval shall be applied.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "nominalCount": {
                    "description": "Number of consecutive valid samples passing the check for the check to be OK.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "nominalTime": {
                    "description": "If nominalCount is zero then this is duration that a parameter is continuously passing the check for the check to be OK. If nominalCount is not zero then this is the period over which samples will be used in the nominalCount calculation, i.e. samples further in the past than nominalTime are not considered.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "violationCount": {
                    "description": "Number of consecutive valid samples violating the check for the check to be in violation.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "violationTime": {
                    "description": "If violationCount is zero then this is duration that a parameter is continuously violating the check for the check to be in violation. If violationCount not zero then this is the period over which samples will be used in the violationCount calculation, i.e. samples further in the past than violationTime are not considered.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Check_updateDefinition_request"
          },
          "x-parser-unique-object-id": "Check.updateDefinition_request.message",
          "x-parser-message-name": "Check_updateDefinition_request"
        }
      },
      "description": "Send a **Check_updateDefinition_request** message in this channel to receive a **Check_updateDefinition_response** message over the **response_Check_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "request_Check_updateDefinition"
    },
    "response_Check_updateDefinition": {
      "address": "response_Check_updateDefinition",
      "messages": {
        "Check.updateDefinition_response.message": {
          "description": "Check updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "newObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-14>"
                },
                "description": "The response shall contain the list of object instance identifiers for the new check definition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            },
            "x-parser-schema-id": "Check_updateDefinition_response"
          },
          "x-parser-unique-object-id": "Check.updateDefinition_response.message",
          "x-parser-message-name": "Check_updateDefinition_response"
        }
      },
      "description": "Use this channel to receive Check updateDefinition responses as **Check_updateDefinition_response** messages.\n",
      "x-parser-unique-object-id": "response_Check_updateDefinition"
    },
    "error_Check_updateDefinition": {
      "address": "error_Check_updateDefinition",
      "messages": {
        "Check.updateDefinition_error.message": {
          "description": "Check updateDefinition error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM",
                  "MC"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID",
                  "REFERENCED"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-19>"
                },
                "x-parser-schema-id": "<anonymous-schema-18>"
              }
            },
            "x-parser-schema-id": "Check_updateDefinition_error"
          },
          "x-parser-unique-object-id": "Check.updateDefinition_error.message",
          "x-parser-message-name": "Check_updateDefinition_error"
        }
      },
      "description": "Use this channel to receive Check updateDefinition errors as **Check_updateDefinition_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_updateDefinition"
    }
  },
  "operations": {
    "Check_updateDefinition_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Check_updateDefinition",
      "messages": [
        "$ref:$.channels.request_Check_updateDefinition.messages.Check.updateDefinition_request.message"
      ],
      "x-parser-unique-object-id": "Check_updateDefinition_request"
    },
    "Check_updateDefinition_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Check_updateDefinition",
      "messages": [
        "$ref:$.channels.response_Check_updateDefinition.messages.Check.updateDefinition_response.message"
      ],
      "x-parser-unique-object-id": "Check_updateDefinition_response"
    },
    "Check_updateDefinition_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_updateDefinition",
      "messages": [
        "$ref:$.channels.error_Check_updateDefinition.messages.Check.updateDefinition_error.message"
      ],
      "x-parser-unique-object-id": "Check_updateDefinition_error"
    }
  },
  "components": {
    "schemas": {
      "Check_updateDefinition_request": "$ref:$.channels.request_Check_updateDefinition.messages.Check.updateDefinition_request.message.payload",
      "Check_updateDefinition_response": "$ref:$.channels.response_Check_updateDefinition.messages.Check.updateDefinition_response.message.payload",
      "Check_updateDefinition_error": "$ref:$.channels.error_Check_updateDefinition.messages.Check.updateDefinition_error.message.payload",
      "mc": {
        "check": {
          "CheckDefinitionDetails": "$ref:$.channels.request_Check_updateDefinition.messages.Check.updateDefinition_request.message.payload.properties.checkDefDetails"
        },
        "Severity": "$ref:$.channels.request_Check_updateDefinition.messages.Check.updateDefinition_request.message.payload.properties.checkDefDetails.properties.checkSeverity",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Check_updateDefinition_request": "$ref:$.channels.request_Check_updateDefinition.messages.Check.updateDefinition_request.message",
      "Check_updateDefinition_response": "$ref:$.channels.response_Check_updateDefinition.messages.Check.updateDefinition_response.message",
      "Check_updateDefinition_error": "$ref:$.channels.error_Check_updateDefinition.messages.Check.updateDefinition_error.message"
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
  