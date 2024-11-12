
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service listCheckLinks API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listCheckLinks iteraction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the listCheckLinks interaction.",
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
    "Send_Check_listCheckLinks": {
      "address": "Send_Check_listCheckLinks",
      "messages": {
        "Check.listCheckLinks_Send.message": {
          "description": "Check listCheckLinks request submission",
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
                "description": "The checkObjInstIds field shall hold a list of CheckIdentity object instance identifiers to retrieve the CheckLink object instance identifiers for.\nThe request may contain the wildcard value of '0' to return all supported check links.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing CheckIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_listCheckLinks_Send"
          },
          "x-parser-unique-object-id": "Check.listCheckLinks_Send.message",
          "x-parser-message-name": "Check_listCheckLinks_Send"
        }
      },
      "description": "Send a **Check_listCheckLinks_Send** message in this channel to receive a **Check_listCheckLinks_Receive** message over the **Receive_Check_listCheckLinks** channel.\n",
      "x-parser-unique-object-id": "Send_Check_listCheckLinks"
    },
    "Receive_Check_listCheckLinks": {
      "address": "Receive_Check_listCheckLinks",
      "messages": {
        "Check.listCheckLinks_Receive.message": {
          "description": "Check listCheckLinks update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "chkLinkObjInstIds": {
                "properties": {
                  "checkEnabled": {
                    "description": "TRUE if the check instance is enabled.",
                    "type": "boolean",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "checkId": {
                    "description": "The object instance identifier of the CheckIdentity object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "linkDefinitionId": {
                    "description": "Contains the object instance identifier of the CheckLinkDefinition object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "linkId": {
                    "description": "The object instance identifier of the CheckLink object.",
                    "format": "int64",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  },
                  "parameterId": {
                    "properties": {
                      "domain": {
                        "description": "The domain of the object instance.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-11>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      },
                      "instId": {
                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Check_listCheckLinks_Receive"
          },
          "x-parser-unique-object-id": "Check.listCheckLinks_Receive.message",
          "x-parser-message-name": "Check_listCheckLinks_Receive"
        }
      },
      "description": "Use this channel to receive Check listCheckLinks responses as **Check_listCheckLinks_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Check_listCheckLinks"
    },
    "Error_Check_listCheckLinks": {
      "address": "Error_Check_listCheckLinks",
      "messages": {
        "Check.listCheckLinks_Error.message": {
          "description": "Check listCheckLinks error response",
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
                  "MAL"
                ],
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN"
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
            "x-parser-schema-id": "Check_listCheckLinks_Error"
          },
          "x-parser-unique-object-id": "Check.listCheckLinks_Error.message",
          "x-parser-message-name": "Check_listCheckLinks_Error"
        }
      },
      "description": "Use this channel to receive Check listCheckLinks errors as **Check_listCheckLinks_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Check_listCheckLinks"
    }
  },
  "operations": {
    "Check_listCheckLinks_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Check_listCheckLinks",
      "messages": [
        "$ref:$.channels.Send_Check_listCheckLinks.messages.Check.listCheckLinks_Send.message"
      ],
      "x-parser-unique-object-id": "Check_listCheckLinks_Send"
    },
    "Check_listCheckLinks_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Check_listCheckLinks",
      "messages": [
        "$ref:$.channels.Receive_Check_listCheckLinks.messages.Check.listCheckLinks_Receive.message"
      ],
      "x-parser-unique-object-id": "Check_listCheckLinks_Receive"
    },
    "Check_listCheckLinks_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Check_listCheckLinks",
      "messages": [
        "$ref:$.channels.Error_Check_listCheckLinks.messages.Check.listCheckLinks_Error.message"
      ],
      "x-parser-unique-object-id": "Check_listCheckLinks_Error"
    }
  },
  "components": {
    "schemas": {
      "Check_listCheckLinks_Send": "$ref:$.channels.Send_Check_listCheckLinks.messages.Check.listCheckLinks_Send.message.payload",
      "Check_listCheckLinks_Receive": "$ref:$.channels.Receive_Check_listCheckLinks.messages.Check.listCheckLinks_Receive.message.payload",
      "Check_listCheckLinks_Error": "$ref:$.channels.Error_Check_listCheckLinks.messages.Check.listCheckLinks_Error.message.payload",
      "mc": {
        "check": {
          "CheckLinkSummary": "$ref:$.channels.Receive_Check_listCheckLinks.messages.Check.listCheckLinks_Receive.message.payload.properties.chkLinkObjInstIds"
        },
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectKey": "$ref:$.channels.Receive_Check_listCheckLinks.messages.Check.listCheckLinks_Receive.message.payload.properties.chkLinkObjInstIds.properties.parameterId",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Check_listCheckLinks_Send": "$ref:$.channels.Send_Check_listCheckLinks.messages.Check.listCheckLinks_Send.message",
      "Check_listCheckLinks_Receive": "$ref:$.channels.Receive_Check_listCheckLinks.messages.Check.listCheckLinks_Receive.message",
      "Check_listCheckLinks_Error": "$ref:$.channels.Error_Check_listCheckLinks.messages.Check.listCheckLinks_Error.message"
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
  