
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service updateDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the updateDefinition iteraction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the updateDefinition interaction.",
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
    "Send_Check_updateDefinition": {
      "address": "Send_Check_updateDefinition",
      "messages": {
        "Check.updateDefinition_Send.message": {
          "description": "Check updateDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "checkInstIds": {
                "type": "integer",
                "description": "The checkInstIds field shall hold the object instance identifiers of the CheckIdentity objects to be updated.\nIf the checkInstIds list contains either NULL or '0' an INVALID error shall be raised.\nThe supplied object instance identifiers shall match existing identity objects, an UNKNOWN error shall be raised if this is not the case.\nIf the check to be updated is currently being used by a CheckLink object, a REFERENCED error shall be raised.\n",
                "format": "int64",
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
            "x-parser-schema-id": "Check_updateDefinition_Send"
          },
          "x-parser-unique-object-id": "Check.updateDefinition_Send.message",
          "x-parser-message-name": "Check_updateDefinition_Send"
        }
      },
      "description": "Send a **Check_updateDefinition_Send** message in this channel to receive a **Check_updateDefinition_Receive** message over the **Receive_Check_updateDefinition** channel.\n",
      "x-parser-unique-object-id": "Send_Check_updateDefinition"
    },
    "Receive_Check_updateDefinition": {
      "address": "Receive_Check_updateDefinition",
      "messages": {
        "Check.updateDefinition_Receive.message": {
          "description": "Check updateDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "newObjInstIds": {
                "type": "integer",
                "description": "The response shall contain the list of object instance identifiers for the new check definition objects.\nThe returned list shall maintain the same order as the submitted definitions.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "Check_updateDefinition_Receive"
          },
          "x-parser-unique-object-id": "Check.updateDefinition_Receive.message",
          "x-parser-message-name": "Check_updateDefinition_Receive"
        }
      },
      "description": "Use this channel to receive Check updateDefinition responses as **Check_updateDefinition_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Check_updateDefinition"
    },
    "Error_Check_updateDefinition": {
      "address": "Error_Check_updateDefinition",
      "messages": {
        "Check.updateDefinition_Error.message": {
          "description": "Check updateDefinition error response",
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
                  "COM",
                  "MAL",
                  "MC"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "REFERENCED",
                  "INVALID"
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
            "x-parser-schema-id": "Check_updateDefinition_Error"
          },
          "x-parser-unique-object-id": "Check.updateDefinition_Error.message",
          "x-parser-message-name": "Check_updateDefinition_Error"
        }
      },
      "description": "Use this channel to receive Check updateDefinition errors as **Check_updateDefinition_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Check_updateDefinition"
    }
  },
  "operations": {
    "Check_updateDefinition_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Check_updateDefinition",
      "messages": [
        "$ref:$.channels.Send_Check_updateDefinition.messages.Check.updateDefinition_Send.message"
      ],
      "x-parser-unique-object-id": "Check_updateDefinition_Send"
    },
    "Check_updateDefinition_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Check_updateDefinition",
      "messages": [
        "$ref:$.channels.Receive_Check_updateDefinition.messages.Check.updateDefinition_Receive.message"
      ],
      "x-parser-unique-object-id": "Check_updateDefinition_Receive"
    },
    "Check_updateDefinition_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Check_updateDefinition",
      "messages": [
        "$ref:$.channels.Error_Check_updateDefinition.messages.Check.updateDefinition_Error.message"
      ],
      "x-parser-unique-object-id": "Check_updateDefinition_Error"
    }
  },
  "components": {
    "schemas": {
      "Check_updateDefinition_Send": "$ref:$.channels.Send_Check_updateDefinition.messages.Check.updateDefinition_Send.message.payload",
      "Check_updateDefinition_Receive": "$ref:$.channels.Receive_Check_updateDefinition.messages.Check.updateDefinition_Receive.message.payload",
      "Check_updateDefinition_Error": "$ref:$.channels.Error_Check_updateDefinition.messages.Check.updateDefinition_Error.message.payload",
      "mc": {
        "check": {
          "CheckDefinitionDetails": "$ref:$.channels.Send_Check_updateDefinition.messages.Check.updateDefinition_Send.message.payload.properties.checkDefDetails"
        },
        "Severity": "$ref:$.channels.Send_Check_updateDefinition.messages.Check.updateDefinition_Send.message.payload.properties.checkDefDetails.properties.checkSeverity",
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Check_updateDefinition_Send": "$ref:$.channels.Send_Check_updateDefinition.messages.Check.updateDefinition_Send.message",
      "Check_updateDefinition_Receive": "$ref:$.channels.Receive_Check_updateDefinition.messages.Check.updateDefinition_Receive.message",
      "Check_updateDefinition_Error": "$ref:$.channels.Error_Check_updateDefinition.messages.Check.updateDefinition_Error.message"
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
  