
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Check Service listDefinition API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the listDefinition iteraction of the Check Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the listDefinition interaction.",
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
    "Send_Check_listDefinition": {
      "address": "Send_Check_listDefinition",
      "messages": {
        "Check.listDefinition_Send.message": {
          "description": "Check listDefinition request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "names": {
                "type": "string",
                "description": "The names field shall hold a list of CheckIdentity names to retrieve the CheckIdentity and actual check definition object instance identifiers for.\nThe request may contain the wildcard value of '*' to return all supported check definitions.\nThe wildcard value should be checked for first, if found no other checks of supplied identifiers shall be made.\nIf a provided identifier does not include a wildcard and does not match an existing CheckIdentity object then this operation shall fail with an UNKNOWN error.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "Check_listDefinition_Send"
          },
          "x-parser-unique-object-id": "Check.listDefinition_Send.message",
          "x-parser-message-name": "Check_listDefinition_Send"
        }
      },
      "description": "Send a **Check_listDefinition_Send** message in this channel to receive a **Check_listDefinition_Receive** message over the **Receive_Check_listDefinition** channel.\n",
      "x-parser-unique-object-id": "Send_Check_listDefinition"
    },
    "Receive_Check_listDefinition": {
      "address": "Receive_Check_listDefinition",
      "messages": {
        "Check.listDefinition_Receive.message": {
          "description": "Check listDefinition update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "objInstIds": {
                "properties": {
                  "objDefCheckType": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-7>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-9>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "objInstIds": {
                    "properties": {
                      "objDefInstanceId": {
                        "description": "The object instance identifier of the Definition object.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "objIdentityInstanceId": {
                        "description": "The object instance identifier of the Identity object.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Check_listDefinition_Receive"
          },
          "x-parser-unique-object-id": "Check.listDefinition_Receive.message",
          "x-parser-message-name": "Check_listDefinition_Receive"
        }
      },
      "description": "Use this channel to receive Check listDefinition responses as **Check_listDefinition_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Check_listDefinition"
    },
    "Error_Check_listDefinition": {
      "address": "Error_Check_listDefinition",
      "messages": {
        "Check.listDefinition_Error.message": {
          "description": "Check listDefinition error response",
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
            "x-parser-schema-id": "Check_listDefinition_Error"
          },
          "x-parser-unique-object-id": "Check.listDefinition_Error.message",
          "x-parser-message-name": "Check_listDefinition_Error"
        }
      },
      "description": "Use this channel to receive Check listDefinition errors as **Check_listDefinition_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Check_listDefinition"
    }
  },
  "operations": {
    "Check_listDefinition_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Check_listDefinition",
      "messages": [
        "$ref:$.channels.Send_Check_listDefinition.messages.Check.listDefinition_Send.message"
      ],
      "x-parser-unique-object-id": "Check_listDefinition_Send"
    },
    "Check_listDefinition_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Check_listDefinition",
      "messages": [
        "$ref:$.channels.Receive_Check_listDefinition.messages.Check.listDefinition_Receive.message"
      ],
      "x-parser-unique-object-id": "Check_listDefinition_Receive"
    },
    "Check_listDefinition_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Check_listDefinition",
      "messages": [
        "$ref:$.channels.Error_Check_listDefinition.messages.Check.listDefinition_Error.message"
      ],
      "x-parser-unique-object-id": "Check_listDefinition_Error"
    }
  },
  "components": {
    "schemas": {
      "Check_listDefinition_Send": "$ref:$.channels.Send_Check_listDefinition.messages.Check.listDefinition_Send.message.payload",
      "Check_listDefinition_Receive": "$ref:$.channels.Receive_Check_listDefinition.messages.Check.listDefinition_Receive.message.payload",
      "Check_listDefinition_Error": "$ref:$.channels.Error_Check_listDefinition.messages.Check.listDefinition_Error.message.payload",
      "mc": {
        "check": {
          "CheckTypedInstance": "$ref:$.channels.Receive_Check_listDefinition.messages.Check.listDefinition_Receive.message.payload.properties.objInstIds"
        },
        "ObjectInstancePair": "$ref:$.channels.Receive_Check_listDefinition.messages.Check.listDefinition_Receive.message.payload.properties.objInstIds.properties.objInstIds",
        "x-parser-schema-id": "mc"
      },
      "com": {
        "ObjectType": "$ref:$.channels.Receive_Check_listDefinition.messages.Check.listDefinition_Receive.message.payload.properties.objInstIds.properties.objDefCheckType",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Check_listDefinition_Send": "$ref:$.channels.Send_Check_listDefinition.messages.Check.listDefinition_Send.message",
      "Check_listDefinition_Receive": "$ref:$.channels.Receive_Check_listDefinition.messages.Check.listDefinition_Receive.message",
      "Check_listDefinition_Error": "$ref:$.channels.Error_Check_listDefinition.messages.Check.listDefinition_Error.message"
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
  