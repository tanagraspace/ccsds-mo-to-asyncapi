
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service triggerCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the triggerCheck iteraction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the triggerCheck interaction.",
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
    "Send_Check_triggerCheck": {
      "address": "Send_Check_triggerCheck",
      "messages": {
        "Check.triggerCheck_Send.message": {
          "description": "Check triggerCheck request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "checkObjInstIds": {
                "type": "integer",
                "description": "The checkObjInstIds field shall hold a list of CheckIdentity object instance identifiers to trigger the evaluation of all linked checks.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "linkObjInstIds": {
                "type": "integer",
                "description": "The linkObjInstIds field shall hold a list of CheckLink object instance identifiers to trigger the evaluation of.\nThe wildcard value of '0' shall be permitted in either list.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested CheckIdentity or CheckLink object is unknown then an UNKNOWN error shall be returned.\nIf an error is raised then no evaluations shall be made as a result of this operation call.\nEither list may be empty in which case filtering on that aspect, check identity or specific check link, shall be ignored.\nThe two lists shall be combined using 'OR' logic, where a CheckLink is evaluated if the identity of a check is in the first list or if the link is directly listed in the second list.\nTriggering a check shall ignore the nominalTime, nominalCount, violationTime and violationCount fields and requests an immediate evaluation of the checks.\nTriggering a check during a periodic check shall not influence the periodic check (e.g. it does not reset the checkInterval timer, the successive valid samples that passed/violated the check or the maxReportingInterval timer).\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "Check_triggerCheck_Send"
          },
          "x-parser-unique-object-id": "Check.triggerCheck_Send.message",
          "x-parser-message-name": "Check_triggerCheck_Send"
        }
      },
      "description": "Send a **Check_triggerCheck_Send** message in this channel to receive a **Check_triggerCheck_Receive** message over the **Receive_Check_triggerCheck** channel.\n",
      "x-parser-unique-object-id": "Send_Check_triggerCheck"
    },
    "Error_Check_triggerCheck": {
      "address": "Error_Check_triggerCheck",
      "messages": {
        "Check.triggerCheck_Error.message": {
          "description": "Check triggerCheck error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
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
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "Check_triggerCheck_Error"
          },
          "x-parser-unique-object-id": "Check.triggerCheck_Error.message",
          "x-parser-message-name": "Check_triggerCheck_Error"
        }
      },
      "description": "Use this channel to receive Check triggerCheck errors as **Check_triggerCheck_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Check_triggerCheck"
    }
  },
  "operations": {
    "Check_triggerCheck_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Check_triggerCheck",
      "messages": [
        "$ref:$.channels.Send_Check_triggerCheck.messages.Check.triggerCheck_Send.message"
      ],
      "x-parser-unique-object-id": "Check_triggerCheck_Send"
    },
    "Check_triggerCheck_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Check_triggerCheck",
      "messages": [
        "$ref:$.channels.Error_Check_triggerCheck.messages.Check.triggerCheck_Error.message"
      ],
      "x-parser-unique-object-id": "Check_triggerCheck_Error"
    }
  },
  "components": {
    "schemas": {
      "Check_triggerCheck_Send": "$ref:$.channels.Send_Check_triggerCheck.messages.Check.triggerCheck_Send.message.payload",
      "Check_triggerCheck_Error": "$ref:$.channels.Error_Check_triggerCheck.messages.Check.triggerCheck_Error.message.payload"
    },
    "messages": {
      "Check_triggerCheck_Send": "$ref:$.channels.Send_Check_triggerCheck.messages.Check.triggerCheck_Send.message",
      "Check_triggerCheck_Error": "$ref:$.channels.Error_Check_triggerCheck.messages.Check.triggerCheck_Error.message"
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
  