
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "CommandExecutor Service runCommand API",
    "version": "1.0.0",
    "description": "This API allows clients to interact with the runCommand interaction of the CommandExecutor Service."
  },
  "defaultContentType": "application/json",
  "servers": {
    "production": {
      "host": "localhost:{port}",
      "protocol": "mqtt",
      "description": "MQTT server for the CommandExecutor Service's runCommand interaction.",
      "variables": {
        "port": {
          "default": "8883"
        }
      }
    }
  },
  "channels": {
    "request_CommandExecutor_runCommand": {
      "address": "request_CommandExecutor_runCommand",
      "messages": {
        "CommandExecutor.runCommand_request.message": {
          "description": "CommandExecutor runCommand request submission",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-1>"
              },
              "command": {
                "properties": {
                  "command": {
                    "description": "The command line passed to the executing shell instance.",
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-3>"
                  },
                  "exitCode": {
                    "description": "Exit code of the command. Shall be NULL if the execution has not completed yet.",
                    "format": "int32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-4>"
                  },
                  "pid": {
                    "description": "Assigned Process ID of the spawned shell instance. Shall be NULL if the execution has not started yet.",
                    "format": "uint32",
                    "type": "integer",
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  }
                },
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-2>"
              }
            },
            "x-parser-schema-id": "CommandExecutor_runCommand_request"
          },
          "x-parser-unique-object-id": "CommandExecutor.runCommand_request.message",
          "x-parser-message-name": "CommandExecutor_runCommand_request"
        }
      },
      "description": "Send a **CommandExecutor_runCommand_request** message in this channel to receive a **CommandExecutor_runCommand_response** message over the **response_CommandExecutor_runCommand** channel.\n",
      "x-parser-unique-object-id": "request_CommandExecutor_runCommand"
    },
    "response_CommandExecutor_runCommand": {
      "address": "response_CommandExecutor_runCommand",
      "messages": {
        "CommandExecutor.runCommand_response.message": {
          "description": "CommandExecutor runCommand update response",
          "payload": {
            "type": "object",
            "properties": {
              "sequenceId": {
                "type": "string",
                "description": "A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.",
                "x-parser-schema-id": "<anonymous-schema-6>"
              },
              "commandInstId": {
                "type": "integer",
                "format": "int64",
                "description": "Contains a corresponding COM object instance identifier created in the Archive.\n",
                "x-parser-schema-id": "<anonymous-schema-7>"
              }
            },
            "x-parser-schema-id": "CommandExecutor_runCommand_response"
          },
          "x-parser-unique-object-id": "CommandExecutor.runCommand_response.message",
          "x-parser-message-name": "CommandExecutor_runCommand_response"
        }
      },
      "description": "Use this channel to receive CommandExecutor runCommand responses as **CommandExecutor_runCommand_response** messages.\n",
      "x-parser-unique-object-id": "response_CommandExecutor_runCommand"
    }
  },
  "operations": {
    "CommandExecutor_runCommand_request": {
      "action": "send",
      "channel": "$ref:$.channels.request_CommandExecutor_runCommand",
      "messages": [
        "$ref:$.channels.request_CommandExecutor_runCommand.messages.CommandExecutor.runCommand_request.message"
      ],
      "x-parser-unique-object-id": "CommandExecutor_runCommand_request"
    },
    "CommandExecutor_runCommand_response": {
      "action": "receive",
      "channel": "$ref:$.channels.response_CommandExecutor_runCommand",
      "messages": [
        "$ref:$.channels.response_CommandExecutor_runCommand.messages.CommandExecutor.runCommand_response.message"
      ],
      "x-parser-unique-object-id": "CommandExecutor_runCommand_response"
    }
  },
  "components": {
    "schemas": {
      "CommandExecutor_runCommand_request": "$ref:$.channels.request_CommandExecutor_runCommand.messages.CommandExecutor.runCommand_request.message.payload",
      "CommandExecutor_runCommand_response": "$ref:$.channels.response_CommandExecutor_runCommand.messages.CommandExecutor.runCommand_response.message.payload",
      "software_management": {
        "command_executor": {
          "CommandDetails": "$ref:$.channels.request_CommandExecutor_runCommand.messages.CommandExecutor.runCommand_request.message.payload.properties.command"
        },
        "x-parser-schema-id": "software_management"
      }
    },
    "messages": {
      "CommandExecutor_runCommand_request": "$ref:$.channels.request_CommandExecutor_runCommand.messages.CommandExecutor.runCommand_request.message",
      "CommandExecutor_runCommand_response": "$ref:$.channels.response_CommandExecutor_runCommand.messages.CommandExecutor.runCommand_response.message"
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
  