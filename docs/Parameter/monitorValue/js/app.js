
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Parameter monitorValue Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the monitorValue iteraction of the Parameter service."
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
    "sub_Parameter_monitorValue": {
      "address": "sub_Parameter_monitorValue",
      "messages": {
        "Parameter.monitorValueSubscribe.message": {
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
            "x-parser-schema-id": "Parameter_monitorValueTransportRequest"
          },
          "x-parser-unique-object-id": "Parameter.monitorValueSubscribe.message",
          "x-parser-message-name": "Parameter_monitorValueRequest"
        }
      },
      "description": "Use this channel to send a **Parameter_monitorValueRequest** message to receive a **Parameter_monitorValueResponse** message over the **pub_Parameter_monitorValue** channel.\n",
      "x-parser-unique-object-id": "sub_Parameter_monitorValue"
    },
    "pub_Parameter_monitorValue": {
      "address": "pub_Parameter_monitorValue",
      "messages": {
        "Parameter.monitorValuePublish.message": {
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
            "x-parser-schema-id": "Parameter_monitorValueTransportResponse"
          },
          "x-parser-unique-object-id": "Parameter.monitorValuePublish.message",
          "x-parser-message-name": "Parameter_monitorValueResponse"
        }
      },
      "description": "Use this channel to receive Parameter monitorValue updates as **Parameter_monitorValueResponse** responses.\n",
      "x-parser-unique-object-id": "pub_Parameter_monitorValue"
    }
  },
  "operations": {
    "Parameter_monitorValuePublish": {
      "action": "send",
      "channel": "$ref:$.channels.sub_Parameter_monitorValue",
      "messages": [
        "$ref:$.channels.sub_Parameter_monitorValue.messages.Parameter.monitorValueSubscribe.message"
      ],
      "x-parser-unique-object-id": "Parameter_monitorValuePublish"
    },
    "Parameter_monitorValueSubscribe": {
      "action": "receive",
      "channel": "$ref:$.channels.pub_Parameter_monitorValue",
      "messages": [
        "$ref:$.channels.pub_Parameter_monitorValue.messages.Parameter.monitorValuePublish.message"
      ],
      "x-parser-unique-object-id": "Parameter_monitorValueSubscribe"
    }
  },
  "components": {
    "schemas": {
      "Parameter_monitorValueTransportRequest": "$ref:$.channels.sub_Parameter_monitorValue.messages.Parameter.monitorValueSubscribe.message.payload",
      "Parameter_monitorValueTransportResponse": "$ref:$.channels.pub_Parameter_monitorValue.messages.Parameter.monitorValuePublish.message.payload",
      "com": {
        "ObjectId": "$ref:$.channels.pub_Parameter_monitorValue.messages.Parameter.monitorValuePublish.message.payload.properties.objId",
        "ObjectKey": "$ref:$.channels.pub_Parameter_monitorValue.messages.Parameter.monitorValuePublish.message.payload.properties.objId.properties.key",
        "ObjectType": "$ref:$.channels.pub_Parameter_monitorValue.messages.Parameter.monitorValuePublish.message.payload.properties.objId.properties.type_",
        "x-parser-schema-id": "com"
      },
      "mc": {
        "parameter": {
          "ParameterValue": "$ref:$.channels.pub_Parameter_monitorValue.messages.Parameter.monitorValuePublish.message.payload.properties.newValue"
        },
        "x-parser-schema-id": "mc"
      }
    },
    "messages": {
      "Parameter_monitorValueRequest": "$ref:$.channels.sub_Parameter_monitorValue.messages.Parameter.monitorValueSubscribe.message",
      "Parameter_monitorValueResponse": "$ref:$.channels.pub_Parameter_monitorValue.messages.Parameter.monitorValuePublish.message"
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
  