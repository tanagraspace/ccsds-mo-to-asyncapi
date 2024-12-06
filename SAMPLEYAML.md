# Sample YAMLs

- Some sample YAMLs to showcase the differences between Static Reply Address, Dynamic Reply Address, and Dynamic Response Channel.
- Further explanation on Static Reply Address vs Dynamic Reply Address can be found [here](https://www.asyncapi.com/docs/tutorials/getting-started/request-reply).

## 1. Static Reply Address

This approach defines a fixed reply address in the system:
- The server always publishes the response to a predefined channel.
- No replyTo header is required in the client request.

### Sample YAML

```yaml
asyncapi: 3.0.0
info:
  title: Ping/pong example with static reply channel
  version: 1.0.0
  description: Requester example that initiates the request/reply pattern on a different channel than the reply is using
channels:
  ping:
    address: /ping
    messages:
      ping:
        $ref: '#/components/messages/ping'
  pong:
    address: /pong
    messages:
      pong:
        $ref: '#/components/messages/pong'
operations:
  pingRequest:
    action: send
    channel:
      $ref: '#/channels/ping'
    reply:
      channel:
        $ref: '#/channels/pong'
components:
  messages:
    ping:
      payload:
        type: object
        properties:
          event:
            type: string
            const: ping
    pong:
      payload:
        type: object
        properties:
          event:
            type: string
            const: pong
```


## 2. Dynamic Reply Address

This approach allows the client to dictate where it expects the response:
- The client specifies a dynamic `replyTo` address in the message headers.
- The server dynamically reads the `replyTo` address and publishes the response to that address. 

### Sample YAML

```yaml
asyncapi: 3.0.0
info:
  title: Ping/pong example with reply specified as dynamic information provided in the runtime
  version: 1.0.0
  description: Example document for an application that processes ping requests and replies to the address dynamically specified by the requestor in the message header
channels:
  ping:
    address: /ping
    messages:
      ping:
        $ref: '#/components/messages/ping'
  pong:
    address: null
    messages:
      pong:
        $ref: '#/components/messages/pong'
operations:
  pingRequest:
    action: receive
    channel:
      $ref: '#/channels/ping'
    reply:
      address:
        description: Reply is sent to topic specified in 'replyTo' property in the message header
        location: "$message.header#/replyTo"
      channel:
        $ref: '#/channels/pong'
components:
  messages:
    ping:
      headers:
        type: object
        properties:
          replyTo:
            type: string
            description: Provide path to which reply must be provided
          requestId:
            type: string
            format: uuid
            description: Provide request id that you will use to identify the reply match
      payload:
        type: object
        properties:
          event:
            type: string
            const: ping
      correlationId:
        $ref: "#/components/correlationIds/pingCorrelationId"
    pong:
      headers:
        type: object
        properties:
          requestId:
            type: string
            format: uuid
            description: Reply message must contain id of the request message
      payload:
        type: object
        properties:
          event:
            type: string
            const: pong
      correlationId:
        $ref: "#/components/correlationIds/pingCorrelationId"
  correlationIds:
    pingCorrelationId:
      location: '$message.header#/requestId'
```

## 3. Dynamic Response Channel

This approach ensures isolation and flexibility for each client:
- Each client specifies a unique `clientId` in the channel address.
- The server sends the response to the channel with the appropriate `clientId`.

### Sample YAML

```yaml
channels:
  ping:
    address: /ping
    messages:
      ping:
        $ref: '#/components/messages/ping'
  pong:
    address: /pong/{clientId}
    parameters:
      clientId:
        schema:
          type: string
    messages:
      pong:
        $ref: '#/components/messages/pong'
```