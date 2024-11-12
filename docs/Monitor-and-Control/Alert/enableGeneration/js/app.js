
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Alert Service enableGeneration API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the enableGeneration iteraction of the Alert Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the enableGeneration interaction.",
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
    "Send_Alert_enableGeneration": {
      "address": "Send_Alert_enableGeneration",
      "messages": {
        "Alert.enableGeneration_Send.message": {
          "description": "Alert enableGeneration request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "isGroupIds": {
                "type": "boolean",
                "description": "If the isGroupIds field is TRUE then the enableInstances field shall contain GroupIdentity object instance identifiers, otherwise the field contains AlertIdentity object instance identifiers.\nThe AlertIdentity objects referenced, either directly or indirectly via groups, by the enableInstances field shall be the AlertIdentity objects to match.\nThe id of the enableInstances field shall support the wildcard value of '0' and matches all AlertIdentity objects of the provider.\nThe service provider shall check for the wildcard value in the list of object instance identifiers in the enableInstances field first and if found no other checks of supplied object instance identifiers shall be made.\nIf the enableInstances field contains a value of TRUE then instances of matching AlertIdentity objects shall be generated, a value of FALSE requests that instances will not be generated.\nNo error shall be raised if the enableInstances Boolean value supplied is the same as the current generationEnabled field for an alert object i.e. enabling an already enabled alert will not result in an error.\nIf a requested AlertIdentity or GroupIdentity object is unknown then an UNKNOWN error shall be returned.\nIf a requested Group, or the Group objects referenced by that Group, does not contain AlertIdentity objects then an INVALID error shall be returned.\nIf an error is raised then no modifications shall be made as a result of this operation call.\nThe provider shall create and store a new AlertDefinition object in the COM archive if the generationEnabled field is changed.\nIf a new AlertDefinition object is created then that new object shall be the current AlertDefinition used for the specific AlertIdentity.\n",
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
            "x-parser-schema-id": "Alert_enableGeneration_Send"
          },
          "x-parser-unique-object-id": "Alert.enableGeneration_Send.message",
          "x-parser-message-name": "Alert_enableGeneration_Send"
        }
      },
      "description": "Send a **Alert_enableGeneration_Send** message in this channel to receive a **Alert_enableGeneration_Receive** message over the **Receive_Alert_enableGeneration** channel.\n",
      "x-parser-unique-object-id": "Send_Alert_enableGeneration"
    },
    "Receive_Alert_enableGeneration": {
      "address": "Receive_Alert_enableGeneration",
      "messages": {
        "Alert.enableGeneration_Receive.message": {
          "description": "Alert enableGeneration update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "newObjInstIds": {
                "type": "integer",
                "description": "The response shall contain the list of object instance identifiers for the new AlertDefinition objects.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "Alert_enableGeneration_Receive"
          },
          "x-parser-unique-object-id": "Alert.enableGeneration_Receive.message",
          "x-parser-message-name": "Alert_enableGeneration_Receive"
        }
      },
      "description": "Use this channel to receive Alert enableGeneration responses as **Alert_enableGeneration_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Alert_enableGeneration"
    },
    "Error_Alert_enableGeneration": {
      "address": "Error_Alert_enableGeneration",
      "messages": {
        "Alert.enableGeneration_Error.message": {
          "description": "Alert enableGeneration error response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "area": {
                "type": "string",
                "description": "The area in which the error applies.",
                "enum": [
                  "MAL",
                  "COM"
                ],
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "name": {
                "type": "string",
                "description": "A code representing the error.",
                "enum": [
                  "UNKNOWN",
                  "INVALID"
                ],
                "x-parser-schema-id": "<anonymous-schema-10>"
              },
              "extraInformation": {
                "type": "array",
                "items": {
                  "type": "integer",
                  "format": "uint32",
                  "description": "A list of the indexes of the erroneous values from the originating list supplied or request list.",
                  "x-parser-schema-id": "<anonymous-schema-12>"
                },
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "Alert_enableGeneration_Error"
          },
          "x-parser-unique-object-id": "Alert.enableGeneration_Error.message",
          "x-parser-message-name": "Alert_enableGeneration_Error"
        }
      },
      "description": "Use this channel to receive Alert enableGeneration errors as **Alert_enableGeneration_ReceiveErrors** messages.\n",
      "x-parser-unique-object-id": "Error_Alert_enableGeneration"
    }
  },
  "operations": {
    "Alert_enableGeneration_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Alert_enableGeneration",
      "messages": [
        "$ref:$.channels.Send_Alert_enableGeneration.messages.Alert.enableGeneration_Send.message"
      ],
      "x-parser-unique-object-id": "Alert_enableGeneration_Send"
    },
    "Alert_enableGeneration_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Alert_enableGeneration",
      "messages": [
        "$ref:$.channels.Receive_Alert_enableGeneration.messages.Alert.enableGeneration_Receive.message"
      ],
      "x-parser-unique-object-id": "Alert_enableGeneration_Receive"
    },
    "Alert_enableGeneration_Error": {
      "action": "receive",
      "channel": "$ref:$.channels.Error_Alert_enableGeneration",
      "messages": [
        "$ref:$.channels.Error_Alert_enableGeneration.messages.Alert.enableGeneration_Error.message"
      ],
      "x-parser-unique-object-id": "Alert_enableGeneration_Error"
    }
  },
  "components": {
    "schemas": {
      "Alert_enableGeneration_Send": "$ref:$.channels.Send_Alert_enableGeneration.messages.Alert.enableGeneration_Send.message.payload",
      "Alert_enableGeneration_Receive": "$ref:$.channels.Receive_Alert_enableGeneration.messages.Alert.enableGeneration_Receive.message.payload",
      "Alert_enableGeneration_Error": "$ref:$.channels.Error_Alert_enableGeneration.messages.Alert.enableGeneration_Error.message.payload",
      "com": {
        "InstanceBooleanPair": "$ref:$.channels.Send_Alert_enableGeneration.messages.Alert.enableGeneration_Send.message.payload.properties.enableInstances",
        "x-parser-schema-id": "com"
      }
    },
    "messages": {
      "Alert_enableGeneration_Send": "$ref:$.channels.Send_Alert_enableGeneration.messages.Alert.enableGeneration_Send.message",
      "Alert_enableGeneration_Receive": "$ref:$.channels.Receive_Alert_enableGeneration.messages.Alert.enableGeneration_Receive.message",
      "Alert_enableGeneration_Error": "$ref:$.channels.Error_Alert_enableGeneration.messages.Alert.enableGeneration_Error.message"
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
  