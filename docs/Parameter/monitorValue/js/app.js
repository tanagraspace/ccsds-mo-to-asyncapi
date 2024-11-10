
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter Service monitorValue API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the monitorValue iteraction of the Parameter Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the monitorValue interaction.",
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
    "Send_Parameter_monitorValue": {
      "address": "Send_Parameter_monitorValue",
      "messages": {
        "Parameter.monitorValue_Send.message": {
          "description": "Parameter monitorValue request submission",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "name": {
                "type": "string",
                "description": "The parameter name.\n",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "parameterDefinitionId": {
                "type": "integer",
                "description": "The parameter identity.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "parameterValueInstance": {
                "type": "integer",
                "description": "The parameter value instance.\n",
                "format": "int64",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "Parameter_monitorValue_Send"
          },
          "x-parser-unique-object-id": "Parameter.monitorValue_Send.message",
          "x-parser-message-name": "Parameter_monitorValue_Send"
        }
      },
      "description": "Send a **Parameter_monitorValue_Send** message in this channel to receive a **Parameter_monitorValue_Receive** message over the **Receive_Parameter_monitorValue** channel.\n",
      "x-parser-unique-object-id": "Send_Parameter_monitorValue"
    },
    "Receive_Parameter_monitorValue": {
      "address": "Receive_Parameter_monitorValue",
      "messages": {
        "Parameter.monitorValue_Receive.message": {
          "description": "Parameter monitorValue update response",
          "payload": {
            "type": "object",
            "properties": {
              "transactionId": {
                "type": "string",
                "description": "A unique identifier to map the response to the request.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "objId": {
                "properties": {
                  "key": {
                    "properties": {
                      "domain": {
                        "description": "The domain of the object instance.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-9>"
                        },
                        "type": "array",
                        "x-parser-schema-id": "<anonymous-schema-8>"
                      },
                      "instId": {
                        "description": "The unique identifier of the object instance. Must not be '0' for values as this is the wildcard.",
                        "format": "int64",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-10>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "type_": {
                    "properties": {
                      "area": {
                        "description": "Area Number where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      },
                      "number": {
                        "description": "The service specific object number. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      },
                      "service": {
                        "description": "Service Number of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint16",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-14>"
                      },
                      "version": {
                        "description": "Area Version of the service where the object type is defined. Must not be '0' for values as this is the wildcard.",
                        "format": "uint8",
                        "type": "integer",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      }
                    },
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "newValue": {
                "properties": {
                  "convertedValue": {
                    "description": "The parameter converted value.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  },
                  "rawValue": {
                    "description": "The parameter raw value. The value of NULL is a valid value and carries no special significance in the parameter service.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-18>"
                  },
                  "validityState": {
                    "description": "Holds the validity state for a parameter value. If the parameter is valid then this should be set to '0'.",
                    "format": "uint8",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-16>"
              }
            },
            "x-parser-schema-id": "Parameter_monitorValue_Receive"
          },
          "x-parser-unique-object-id": "Parameter.monitorValue_Receive.message",
          "x-parser-message-name": "Parameter_monitorValue_Receive"
        }
      },
      "description": "Use this channel to receive Parameter monitorValue responses as **Parameter_monitorValue_Receive** messages.\n",
      "x-parser-unique-object-id": "Receive_Parameter_monitorValue"
    }
  },
  "operations": {
    "Parameter_monitorValue_Send": {
      "action": "send",
      "channel": "$ref:$.channels.Send_Parameter_monitorValue",
      "messages": [
        "$ref:$.channels.Send_Parameter_monitorValue.messages.Parameter.monitorValue_Send.message"
      ],
      "x-parser-unique-object-id": "Parameter_monitorValue_Send"
    },
    "Parameter_monitorValue_Receive": {
      "action": "receive",
      "channel": "$ref:$.channels.Receive_Parameter_monitorValue",
      "messages": [
        "$ref:$.channels.Receive_Parameter_monitorValue.messages.Parameter.monitorValue_Receive.message"
      ],
      "x-parser-unique-object-id": "Parameter_monitorValue_Receive"
    }
  },
  "components": {
    "schemas": {
      "Parameter_monitorValue_Send": "$ref:$.channels.Send_Parameter_monitorValue.messages.Parameter.monitorValue_Send.message.payload",
      "Parameter_monitorValue_Receive": "$ref:$.channels.Receive_Parameter_monitorValue.messages.Parameter.monitorValue_Receive.message.payload",
      "com": {
        "ObjectId": "$ref:$.channels.Receive_Parameter_monitorValue.messages.Parameter.monitorValue_Receive.message.payload.properties.objId",
        "ObjectKey": "$ref:$.channels.Receive_Parameter_monitorValue.messages.Parameter.monitorValue_Receive.message.payload.properties.objId.properties.key",
        "ObjectType": "$ref:$.channels.Receive_Parameter_monitorValue.messages.Parameter.monitorValue_Receive.message.payload.properties.objId.properties.type_",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "parameter": {
          "ParameterValue": "$ref:$.channels.Receive_Parameter_monitorValue.messages.Parameter.monitorValue_Receive.message.payload.properties.newValue"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Parameter_monitorValue_Send": "$ref:$.channels.Send_Parameter_monitorValue.messages.Parameter.monitorValue_Send.message",
      "Parameter_monitorValue_Receive": "$ref:$.channels.Receive_Parameter_monitorValue.messages.Parameter.monitorValue_Receive.message"
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
  