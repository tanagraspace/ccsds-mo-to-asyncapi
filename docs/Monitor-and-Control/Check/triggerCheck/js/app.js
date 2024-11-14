
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service triggerCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the triggerCheck interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's triggerCheck interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Check_triggerCheck": {
      "address": "submit_Check_triggerCheck",
      "messages": {
        "Check.triggerCheck_submit.message": {
          "description": "Check triggerCheck request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "checkObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "description": "The checkObjInstIds field shall hold a list of CheckIdentity object instance identifiers to trigger the evaluation of all linked checks.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "linkObjInstIds": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "int64",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                },
                "description": "The linkObjInstIds field shall hold a list of CheckLink object instance identifiers to trigger the evaluation of.\nThe wildcard value of '0' shall be permitted in either list.\nThe wildcard value should be checked for first, if found no other checks of supplied object instance identifiers shall be made.\nIf a requested CheckIdentity or CheckLink object is unknown then an UNKNOWN error shall be returned.\nIf an error is raised then no evaluations shall be made as a result of this operation call.\nEither list may be empty in which case filtering on that aspect, check identity or specific check link, shall be ignored.\nThe two lists shall be combined using 'OR' logic, where a CheckLink is evaluated if the identity of a check is in the first list or if the link is directly listed in the second list.\nTriggering a check shall ignore the nominalTime, nominalCount, violationTime and violationCount fields and requests an immediate evaluation of the checks.\nTriggering a check during a periodic check shall not influence the periodic check (e.g. it does not reset the checkInterval timer, the successive valid samples that passed/violated the check or the maxReportingInterval timer).\n",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Check_triggerCheck_submit"
          },
          "x-parser-unique-object-id": "Check.triggerCheck_submit.message",
          "x-parser-message-name": "Check_triggerCheck_submit"
        }
      },
      "description": "Send a **Check_triggerCheck_submit** message in this channel to receive a **Check_triggerCheck_None** message over the **None_Check_triggerCheck** channel.\n",
      "x-parser-unique-object-id": "submit_Check_triggerCheck"
    },
    "error_Check_triggerCheck": {
      "address": "error_Check_triggerCheck",
      "messages": {
        "Check.triggerCheck_error.message": {
          "description": "Check triggerCheck error response",
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
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-7>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
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
            "x-parser-schema-id": "Check_triggerCheck_error"
          },
          "x-parser-unique-object-id": "Check.triggerCheck_error.message",
          "x-parser-message-name": "Check_triggerCheck_error"
        }
      },
      "description": "Use this channel to receive Check triggerCheck errors as **Check_triggerCheck_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_triggerCheck"
    }
  },
  "operations": {
    "Check_triggerCheck_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Check_triggerCheck",
      "messages": [
        "$ref:$.channels.submit_Check_triggerCheck.messages.Check.triggerCheck_submit.message"
      ],
      "x-parser-unique-object-id": "Check_triggerCheck_submit"
    },
    "Check_triggerCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_triggerCheck",
      "messages": [
        "$ref:$.channels.error_Check_triggerCheck.messages.Check.triggerCheck_error.message"
      ],
      "x-parser-unique-object-id": "Check_triggerCheck_error"
    }
  },
  "components": {
    "schemas": {
      "Check_triggerCheck_submit": "$ref:$.channels.submit_Check_triggerCheck.messages.Check.triggerCheck_submit.message.payload",
      "Check_triggerCheck_error": "$ref:$.channels.error_Check_triggerCheck.messages.Check.triggerCheck_error.message.payload"
    },
    "messages": {
      "Check_triggerCheck_submit": "$ref:$.channels.submit_Check_triggerCheck.messages.Check.triggerCheck_submit.message",
      "Check_triggerCheck_error": "$ref:$.channels.error_Check_triggerCheck.messages.Check.triggerCheck_error.message"
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
  