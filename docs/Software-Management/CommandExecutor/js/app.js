
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "CommandExecutor Service API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the CommandExecutor Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the CommandExecutor Service.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "runCommand_request": {
      "address": "runCommand_request",
      "messages": {
        "runCommand_request.message": {
          "description": "runCommand request",
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
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "command": {
                "properties": {
                  "command": {
                    "description": "The command line passed to the executing shell instance.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-6>"
                  },
                  "exitCode": {
                    "description": "Exit code of the command. Shall be NULL if the execution has not completed yet.",
                    "format": "int32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-7>"
                  },
                  "pid": {
                    "description": "Assigned Process ID of the spawned shell instance. Shall be NULL if the execution has not started yet.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-8>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "x-parser-schema-id": "runCommand_request"
          },
          "x-parser-unique-object-id": "runCommand_request.message",
          "x-parser-message-name": "runCommand_request"
        }
      },
      "description": "Send a **runCommand_request** message in this channel to receive a **runCommand_response** message over the **runCommand_response** channel.\n",
      "x-parser-unique-object-id": "runCommand_request"
    },
    "runCommand_response": {
      "address": null,
      "messages": {
        "runCommand_response.message": {
          "description": "runCommand response",
          "headers": {
            "type": "object",
            "properties": {
              "requestId": {
                "type": "string",
                "format": "uuid",
                "description": "The request ID of the original request.",
                "x-parser-schema-id": "<anonymous-schema-10>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-9>"
          },
          "payload": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "interactionId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message).",
                "x-parser-schema-id": "<anonymous-schema-11>"
              },
              "commandInstId": {
                "type": "integer",
                "format": "int64",
                "description": "Contains a corresponding COM object instance identifier created in the Archive.\n",
                "x-parser-schema-id": "<anonymous-schema-12>"
              }
            },
            "x-parser-schema-id": "runCommand_response"
          },
          "x-parser-unique-object-id": "runCommand_response.message",
          "x-parser-message-name": "runCommand_response"
        }
      },
      "description": "Use this channel to receive runCommand responses as **runCommand_response** messages.\n",
      "x-parser-unique-object-id": "runCommand_response"
    }
  },
  "operations": {
    "runCommand_request": {
      "action": "send",
      "channel": "$ref:$.channels.runCommand_request",
      "messages": [
        "$ref:$.channels.runCommand_request.messages.runCommand_request.message"
      ],
      "reply": {
        "address": {
          "description": "Reply is sent to topic specified in 'replyTo' property in the message header",
          "location": "$message.header#/replyTo"
        },
        "channel": "$ref:$.channels.runCommand_response"
      },
      "x-parser-unique-object-id": "runCommand_request"
    },
    "runCommand_response": {
      "action": "receive",
      "channel": "$ref:$.channels.runCommand_response",
      "messages": [
        "$ref:$.channels.runCommand_response.messages.runCommand_response.message"
      ],
      "x-parser-unique-object-id": "runCommand_response"
    }
  },
  "components": {
    "schemas": {
      "runCommand_request": "$ref:$.channels.runCommand_request.messages.runCommand_request.message.payload",
      "runCommand_response": "$ref:$.channels.runCommand_response.messages.runCommand_response.message.payload",
      "software_management": {
        "command_executor": {
          "CommandDetails": "$ref:$.channels.runCommand_request.messages.runCommand_request.message.payload.properties.command"
        },
        "x-parser-schema-id": "software_management"
      }
    },
    "messages": {
      "runCommand_request": "$ref:$.channels.runCommand_request.messages.runCommand_request.message",
      "runCommand_response": "$ref:$.channels.runCommand_response.messages.runCommand_response.message"
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
  