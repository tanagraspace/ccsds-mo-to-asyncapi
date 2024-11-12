
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service addCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the addCheck iteraction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the addCheck interaction.",
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
    "Send_Check_addCheck": {
      "address": "Send_Check_addCheck",
      "messages": {
        "Check.addCheck_Send.message": {
          "description": "Check addCheck request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "checkNames": {
                "type": "string",
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
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "description": {
                    "description": "The description of the check. May be empty.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "maxReportingInterval": {
                    "description": "Maximum interval that can elapse between generations of CheckResult reports. If this value expires, then a CheckResult is generated with the same state for the previous and current state. If set to '0', then no maximum reporting interval shall be applied.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "nominalCount": {
                    "description": "Number of consecutive valid samples passing the check for the check to be OK.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "nominalTime": {
                    "description": "If nominalCount is zero then this is duration that a parameter is continuously passing the check for the check to be OK. If nominalCount is not zero then this is the period over which samples will be used in the nominalCount calculation, i.e. samples further in the past than nominalTime are not considered.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "violationCount": {
                    "description": "Number of consecutive valid samples violating the check for the check to be in violation.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "violationTime": {
                    "description": "If violationCount is zero then this is duration that a parameter is continuously violating the check for the check to be in violation. If violationCount not zero then this is the period over which samples will be used in the violationCount calculation, i.e. samples further in the past than violationTime are not considered.",
                    "format": "uint64",
                    "type": "number",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "Check_addCheck_Send"
          },
          "x-parser-unique-object-id": "Check.addCheck_Send.message",
          "x-parser-message-name": "Check_addCheck_Send"
        }
      },
      "description": "Send a **Check_addCheck_Send** message in this channel to receive a **Check_addCheck_Receive** message over the **Receive_Check_addCheck** channel.\n",
      "x-parser-unique-object-id": "Send_Check_addCheck"
    },
    "Receive_Check_addCheck": {
      "address": "Receive_Check_addCheck",
      "messages": {
        "Check.addCheck_Receive.message": {
          "description": "Check addCheck update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "newObjInstIds": {
                "properties": {
                  "objDefInstanceId": {
                    "description": "The object instance identifier of the Definition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-13>"
                  },
                  "objIdentityInstanceId": {
                    "description": "The object instance identifier of the Identity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "Check_addCheck_Receive"
          },
          "x-parser-unique-object-id": "Check.addCheck_Receive.message",
          "x-parser-message-name": "Check_addCheck_Receive"
        }
      },
      "description": "Use this channel to receive Check addCheck responses as **Check_addCheck_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Check_addCheck"
    },
    "Error_Check_addCheck": {
      "address": "Error_Check_addCheck",
      "messages": {
        "Check.addCheck_Error.message": {
          "description": "Check addCheck error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "INVALID",
                  "DUPLICATE"
                ],
                "x-parser-schema-id": "<anonymous-schema-17>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-19>"
                },
                "x-parser-schema-id": "<anonymous-schema-18>"
              }
            },
            "x-parser-schema-id": "Check_addCheck_Error"
          },
          "x-parser-unique-object-id": "Check.addCheck_Error.message",
          "x-parser-message-name": "Check_addCheck_Error"
        }
      },
      "description": "Use this channel to receive Check addCheck errors as **Check_addCheck_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Check_addCheck"
    }
  },
  "operations": {
    "Check_addCheck_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Check_addCheck",
      "messages": [
        "$ref:$.channels.Send_Check_addCheck.messages.Check.addCheck_Send.message"
      ],
      "x-parser-unique-object-id": "Check_addCheck_Send"
    },
    "Check_addCheck_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Check_addCheck",
      "messages": [
        "$ref:$.channels.Receive_Check_addCheck.messages.Check.addCheck_Receive.message"
      ],
      "x-parser-unique-object-id": "Check_addCheck_Receive"
    },
    "Check_addCheck_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Check_addCheck",
      "messages": [
        "$ref:$.channels.Error_Check_addCheck.messages.Check.addCheck_Error.message"
      ],
      "x-parser-unique-object-id": "Check_addCheck_Error"
    }
  },
  "components": {
    "schemas": {
      "Check_addCheck_Send": "$ref:$.channels.Send_Check_addCheck.messages.Check.addCheck_Send.message.payload",
      "Check_addCheck_Receive": "$ref:$.channels.Receive_Check_addCheck.messages.Check.addCheck_Receive.message.payload",
      "Check_addCheck_Error": "$ref:$.channels.Error_Check_addCheck.messages.Check.addCheck_Error.message.payload",
      "mc": {
        "check": {
          "CheckDefinitionDetails": "$ref:$.channels.Send_Check_addCheck.messages.Check.addCheck_Send.message.payload.properties.checkDefDetails"
        },
        "ObjectInstancePair": "$ref:$.channels.Receive_Check_addCheck.messages.Check.addCheck_Receive.message.payload.properties.newObjInstIds",
        "Severity": "$ref:$.channels.Send_Check_addCheck.messages.Check.addCheck_Send.message.payload.properties.checkDefDetails.properties.checkSeverity",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Check_addCheck_Send": "$ref:$.channels.Send_Check_addCheck.messages.Check.addCheck_Send.message",
      "Check_addCheck_Receive": "$ref:$.channels.Receive_Check_addCheck.messages.Check.addCheck_Receive.message",
      "Check_addCheck_Error": "$ref:$.channels.Error_Check_addCheck.messages.Check.addCheck_Error.message"
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
  