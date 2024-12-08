
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Heartbeat Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the Heartbeat Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the Heartbeat Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "beat_sub": {
      "address": "beat_sub",
      "messages": {
        "beat_sub.message": {
          "description": "beat request",
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-3>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "subscriptionId": {
                "type": "string",
                "description": "The identifier of this subscription.",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "beat_sub"
          },
          "x-parser-unique-object-id": "beat_sub.message",
          "x-parser-message-name": "beat_sub"
        }
      },
      "description": "Send a **beat_sub** message in this channel to receive a **beat_pub** message over the **beat_pub** channel.\n",
      "x-parser-unique-object-id": "beat_sub"
    },
    "beat_pub": {
      "address": null,
      "messages": {
        "beat_pub.message": {
          "description": "beat response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-5>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "subscriptionId": {
                "type": "string",
                "description": "The identifier of this subscription.",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "beat_pub"
          },
          "x-parser-unique-object-id": "beat_pub.message",
          "x-parser-message-name": "beat_pub"
        }
      },
      "description": "Use this channel to receive beat responses as **beat_pub** messages.\n",
      "x-parser-unique-object-id": "beat_pub"
    },
    "getPeriod_request": {
      "address": "getPeriod_request",
      "messages": {
        "getPeriod_request.message": {
          "description": "getPeriod request",
          "headers": {
            "type": "object",
            "properties": {
              "replyTo": {
                "type": "string",
                "description": "The channel to which the reply must be sent.",
                "x-parser-schema-id": "<anonymous-schema-9>"
              },
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The unique identifier for correlating request and response.",
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-8>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-11>"
              }
            },
            "x-parser-schema-id": "getPeriod_request"
          },
          "x-parser-unique-object-id": "getPeriod_request.message",
          "x-parser-message-name": "getPeriod_request"
        }
      },
      "description": "Send a **getPeriod_request** message in this channel to receive a **getPeriod_response** message over the **getPeriod_response** channel.\n",
      "x-parser-unique-object-id": "getPeriod_request"
    },
    "getPeriod_response": {
      "address": null,
      "messages": {
        "getPeriod_response.message": {
          "description": "getPeriod response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-13>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-12>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-14>"
              },
              "period": {
                "type": "number",
                "format": "uint64",
                "description": "The period field shall hold period of the heartbeat message.\n",
                "x-parser-schema-id": "<anonymous-schema-15>"
              }
            },
            "x-parser-schema-id": "getPeriod_response"
          },
          "x-parser-unique-object-id": "getPeriod_response.message",
          "x-parser-message-name": "getPeriod_response"
        }
      },
      "description": "Use this channel to receive getPeriod responses as **getPeriod_response** messages.\n",
      "x-parser-unique-object-id": "getPeriod_response"
    }
  },
  "operations": {
    "beat_sub": {
      "action": "send",
      "channel": "$ref:$.channels.beat_sub",
      "messages": [
        "$ref:$.channels.beat_sub.messages.beat_sub.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.beat_pub"
      },
      "x-parser-unique-object-id": "beat_sub"
    },
    "beat_pub": {
      "action": "receive",
      "channel": "$ref:$.channels.beat_pub",
      "messages": [
        "$ref:$.channels.beat_pub.messages.beat_pub.message"
      ],
      "x-parser-unique-object-id": "beat_pub"
    },
    "getPeriod_request": {
      "action": "send",
      "channel": "$ref:$.channels.getPeriod_request",
      "messages": [
        "$ref:$.channels.getPeriod_request.messages.getPeriod_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.getPeriod_response"
      },
      "x-parser-unique-object-id": "getPeriod_request"
    },
    "getPeriod_response": {
      "action": "receive",
      "channel": "$ref:$.channels.getPeriod_response",
      "messages": [
        "$ref:$.channels.getPeriod_response.messages.getPeriod_response.message"
      ],
      "x-parser-unique-object-id": "getPeriod_response"
    }
  },
  "components": {
    "schemas": {
      "beat_sub": "$ref:$.channels.beat_sub.messages.beat_sub.message.payload",
      "beat_pub": "$ref:$.channels.beat_pub.messages.beat_pub.message.payload",
      "getPeriod_request": "$ref:$.channels.getPeriod_request.messages.getPeriod_request.message.payload",
      "getPeriod_response": "$ref:$.channels.getPeriod_response.messages.getPeriod_response.message.payload"
    },
    "messages": {
      "beat_sub": "$ref:$.channels.beat_sub.messages.beat_sub.message",
      "beat_pub": "$ref:$.channels.beat_pub.messages.beat_pub.message",
      "getPeriod_request": "$ref:$.channels.getPeriod_request.messages.getPeriod_request.message",
      "getPeriod_response": "$ref:$.channels.getPeriod_response.messages.getPeriod_response.message"
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
  