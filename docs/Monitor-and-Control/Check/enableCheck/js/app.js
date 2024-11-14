
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service enableCheck API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableCheck interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's enableCheck interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "submit_Check_enableCheck": {
      "address": "submit_Check_enableCheck",
      "messages": {
        "Check.enableCheck_submit.message": {
          "description": "Check enableCheck request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains CheckLink object instance identifiers.\nThe CheckLink objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the CheckLink objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all CheckLink objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then evaluations of matching CheckLink objects shall be performed, a value of FALSE requests that evaluations will not be performed.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current checkEnabled field for a CheckLink object i.e. enabling an already enabled check will not result in an error.\nIf a requested CheckLink or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain CheckLink objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new CheckLinkDefinition object in the COM archive if the checkEnabled field is changed.\n",
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
            "x-parser-schema-id": "Check_enableCheck_submit"
          },
          "x-parser-unique-object-id": "Check.enableCheck_submit.message",
          "x-parser-message-name": "Check_enableCheck_submit"
        }
      },
      "description": "Send a **Check_enableCheck_submit** message in this channel to receive a **Check_enableCheck_None** message over the **None_Check_enableCheck** channel.\n",
      "x-parser-unique-object-id": "submit_Check_enableCheck"
    },
    "error_Check_enableCheck": {
      "address": "error_Check_enableCheck",
      "messages": {
        "Check.enableCheck_error.message": {
          "description": "Check enableCheck error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
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
            "x-parser-schema-id": "Check_enableCheck_error"
          },
          "x-parser-unique-object-id": "Check.enableCheck_error.message",
          "x-parser-message-name": "Check_enableCheck_error"
        }
      },
      "description": "Use this channel to receive Check enableCheck errors as **Check_enableCheck_NoneErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_enableCheck"
    }
  },
  "operations": {
    "Check_enableCheck_submit": {
      "action": "send",
      "channel": "$ref:$.channels.submit_Check_enableCheck",
      "messages": [
        "$ref:$.channels.submit_Check_enableCheck.messages.Check.enableCheck_submit.message"
      ],
      "x-parser-unique-object-id": "Check_enableCheck_submit"
    },
    "Check_enableCheck_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_enableCheck",
      "messages": [
        "$ref:$.channels.error_Check_enableCheck.messages.Check.enableCheck_error.message"
      ],
      "x-parser-unique-object-id": "Check_enableCheck_error"
    }
  },
  "components": {
    "schemas": {
      "Check_enableCheck_submit": "$ref:$.channels.submit_Check_enableCheck.messages.Check.enableCheck_submit.message.payload",
      "Check_enableCheck_error": "$ref:$.channels.error_Check_enableCheck.messages.Check.enableCheck_error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.submit_Check_enableCheck.messages.Check.enableCheck_submit.message.payload.properties.enableInstances",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Check_enableCheck_submit": "$ref:$.channels.submit_Check_enableCheck.messages.Check.enableCheck_submit.message",
      "Check_enableCheck_error": "$ref:$.channels.error_Check_enableCheck.messages.Check.enableCheck_error.message"
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
  