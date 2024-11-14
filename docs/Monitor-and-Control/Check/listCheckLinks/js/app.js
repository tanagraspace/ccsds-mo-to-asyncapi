
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service listCheckLinks API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listCheckLinks interaction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Check Service's listCheckLinks interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_Check_listCheckLinks": {
      "address": "request_Check_listCheckLinks",
      "messages": {
        "Check.listCheckLinks_request.message": {
          "description": "Check listCheckLinks request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
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
                "description": "The checkObjInstIds field shall hold a list of CheckIdentity object instance identifiers to retrieve the CheckLink object instance identifiers for.\nThe request may contain the wildcard value of '0' to return all supported check links.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing CheckIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_listCheckLinks_request"
          },
          "x-parser-unique-object-id": "Check.listCheckLinks_request.message",
          "x-parser-message-name": "Check_listCheckLinks_request"
        }
      },
      "description": "Send a **Check_listCheckLinks_request** message in this channel to receive a **Check_listCheckLinks_response** message over the **response_Check_listCheckLinks** channel.\n",
      "x-parser-unique-object-id": "request_Check_listCheckLinks"
    },
    "response_Check_listCheckLinks": {
      "address": "response_Check_listCheckLinks",
      "messages": {
        "Check.listCheckLinks_response.message": {
          "description": "Check listCheckLinks update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "chkLinkObjInstIds": {
                "properties": {
                  "checkEnabled": {
                    "description": "TRUE if the check instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "checkId": {
                    "description": "The object instance identifier of the CheckIdentity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "linkDefinitionId": {
                    "description": "Contains the object instance identifier of the CheckLinkDefinition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "linkId": {
                    "description": "The object instance identifier of the CheckLink object.",
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
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "Check_listCheckLinks_response"
          },
          "x-parser-unique-object-id": "Check.listCheckLinks_response.message",
          "x-parser-message-name": "Check_listCheckLinks_response"
        }
      },
      "description": "Use this channel to receive Check listCheckLinks responses as **Check_listCheckLinks_response** messages.\n",
      "x-parser-unique-object-id": "response_Check_listCheckLinks"
    },
    "error_Check_listCheckLinks": {
      "address": "error_Check_listCheckLinks",
      "messages": {
        "Check.listCheckLinks_error.message": {
          "description": "Check listCheckLinks error response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-15>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
                ],
                "x-parser-schema-id": "<anonymous-schema-16>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the error values shall be contained in the extra information field.",
                  "x-parser-schema-id": "<anonymous-schema-18>"
                },
                "x-parser-schema-id": "<anonymous-schema-17>"
              }
            },
            "x-parser-schema-id": "Check_listCheckLinks_error"
          },
          "x-parser-unique-object-id": "Check.listCheckLinks_error.message",
          "x-parser-message-name": "Check_listCheckLinks_error"
        }
      },
      "description": "Use this channel to receive Check listCheckLinks errors as **Check_listCheckLinks_responseErrors** messages.\n",
      "x-parser-unique-object-id": "error_Check_listCheckLinks"
    }
  },
  "operations": {
    "Check_listCheckLinks_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_Check_listCheckLinks",
      "messages": [
        "$ref:$.channels.request_Check_listCheckLinks.messages.Check.listCheckLinks_request.message"
      ],
      "x-parser-unique-object-id": "Check_listCheckLinks_request"
    },
    "Check_listCheckLinks_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_Check_listCheckLinks",
      "messages": [
        "$ref:$.channels.response_Check_listCheckLinks.messages.Check.listCheckLinks_response.message"
      ],
      "x-parser-unique-object-id": "Check_listCheckLinks_response"
    },
    "Check_listCheckLinks_error": {
      "action": "receive",
      "channel": "$ref:$.channels.error_Check_listCheckLinks",
      "messages": [
        "$ref:$.channels.error_Check_listCheckLinks.messages.Check.listCheckLinks_error.message"
      ],
      "x-parser-unique-object-id": "Check_listCheckLinks_error"
    }
  },
  "components": {
    "schemas": {
      "Check_listCheckLinks_request": "$ref:$.channels.request_Check_listCheckLinks.messages.Check.listCheckLinks_request.message.payload",
      "Check_listCheckLinks_response": "$ref:$.channels.response_Check_listCheckLinks.messages.Check.listCheckLinks_response.message.payload",
      "Check_listCheckLinks_error": "$ref:$.channels.error_Check_listCheckLinks.messages.Check.listCheckLinks_error.message.payload",
      "mc": {
        "check": {
          "CheckLinkSummary": "$ref:$.channels.response_Check_listCheckLinks.messages.Check.listCheckLinks_response.message.payload.properties.chkLinkObjInstIds"
        },
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.response_Check_listCheckLinks.messages.Check.listCheckLinks_response.message.payload.properties.chkLinkObjInstIds.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Check_listCheckLinks_request": "$ref:$.channels.request_Check_listCheckLinks.messages.Check.listCheckLinks_request.message",
      "Check_listCheckLinks_response": "$ref:$.channels.response_Check_listCheckLinks.messages.Check.listCheckLinks_response.message",
      "Check_listCheckLinks_error": "$ref:$.channels.error_Check_listCheckLinks.messages.Check.listCheckLinks_error.message"
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
  