
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service addCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addCheck interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's addCheck interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Check_addCheck": {
      "address": "request_Check_addCheck",
      "messages": {
        "Check.addCheck_request.message": {
          "description": "Check addCheck request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "checkNames": {
                "type": "array",
                "items": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The checkNames field shall hold the names of the checks to be added.\nThe checkNames field must not contain NULL, the wildcard '*', or empty value (an INVALID error shall be returned in this case).\nThe supplied names must be unique among all CheckIdentity objects for the domain of the provider otherwise a DUPLICATE error shall be raised.\n",
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
            "x-parser-schema-id": "Check_addCheck_request"
          },
          "x-parser-unique-object-id": "Check.addCheck_request.message",
          "x-parser-message-name": "Check_addCheck_request"
        }
      },
      "description": "Send a **Check_addCheck_request** message in this channel to receive a **Check_addCheck_response** message over the **response_Check_addCheck** channel.\n",
      "x-parser-unique-object-id": "request_Check_addCheck"
    },
    "response_Check_addCheck": {
      "address": "response_Check_addCheck",
      "messages": {
        "Check.addCheck_response.message": {
          "description": "Check addCheck update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-12>"
              },
              "newObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-15>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            },
            "x-parser-schema-id": "Check_addCheck_response"
          },
          "x-parser-unique-object-id": "Check.addCheck_response.message",
          "x-parser-message-name": "Check_addCheck_response"
        }
      },
      "description": "Use this channel to receive Check addCheck responses as **Check_addCheck_response** messages.\n",
      "x-parser-unique-object-id": "response_Check_addCheck"
    },
    "error_Check_addCheck": {
      "address": "error_Check_addCheck",
      "messages": {
        "Check.addCheck_error.message": {
          "description": "Check addCheck error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
                ],
                "x-parser-schema-id": "<anonymous-schema-18>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-20>"
                },
                "x-parser-schema-id": "<anonymous-schema-19>"
              }
            },
            "x-parser-schema-id": "Check_addCheck_error"
          },
          "x-parser-unique-object-id": "Check.addCheck_error.message",
          "x-parser-message-name": "Check_addCheck_error"
        }
      },
      "description": "Use this channel to receive Check addCheck errors as **Check_addCheck_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_addCheck"
    }
  },
  "operations": {
    "Check_addCheck_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Check_addCheck",
      "messages": [
        "$ref:$.channels.request_Check_addCheck.messages.Check.addCheck_request.message"
      ],
      "x-parser-unique-object-id": "Check_addCheck_request"
    },
    "Check_addCheck_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Check_addCheck",
      "messages": [
        "$ref:$.channels.response_Check_addCheck.messages.Check.addCheck_response.message"
      ],
      "x-parser-unique-object-id": "Check_addCheck_response"
    },
    "Check_addCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_addCheck",
      "messages": [
        "$ref:$.channels.error_Check_addCheck.messages.Check.addCheck_error.message"
      ],
      "x-parser-unique-object-id": "Check_addCheck_error"
    }
  },
  "components": {
    "schemas": {
      "Check_addCheck_request": "$ref:$.channels.request_Check_addCheck.messages.Check.addCheck_request.message.payload",
      "Check_addCheck_response": "$ref:$.channels.response_Check_addCheck.messages.Check.addCheck_response.message.payload",
      "Check_addCheck_error": "$ref:$.channels.error_Check_addCheck.messages.Check.addCheck_error.message.payload",
      "mc": {
        "check": {
          "CheckDefinitionDetails": "$ref:$.channels.request_Check_addCheck.messages.Check.addCheck_request.message.payload.properties.checkDefDetails"
        },
        "ObjectInstancePair": "$ref:$.channels.response_Check_addCheck.messages.Check.addCheck_response.message.payload.properties.newObjInstIds",
        "Severity": "$ref:$.channels.request_Check_addCheck.messages.Check.addCheck_request.message.payload.properties.checkDefDetails.properties.checkSeverity",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Check_addCheck_request": "$ref:$.channels.request_Check_addCheck.messages.Check.addCheck_request.message",
      "Check_addCheck_response": "$ref:$.channels.response_Check_addCheck.messages.Check.addCheck_response.message",
      "Check_addCheck_error": "$ref:$.channels.error_Check_addCheck.messages.Check.addCheck_error.message"
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
  