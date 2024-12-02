# Sample YAMLs

Some sample YAMLs to showcase the differences between Static Reply Address, Dynamic Reply Address, and Dynamic Response Channel.

## 1. Static Reply Address

This approach defines a fixed reply address in the system:
- The server always publishes the response to a predefined channel.
- No replyTo header is required in the client request.

### Sample YAML

```yaml
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
    action: receive
    channel:
      $ref: '#/channels/ping'
    reply:
      address:
        static: "/pong"
      channel:
        $ref: '#/channels/pong'
```


## 2. Dynamic Reply Address

This approach allows the client to dictate where it expects the response:
- The client specifies a dynamic `replyTo` address in the message headers.
- The server dynamically reads the `replyTo` address and publishes the response to that address. 

### Sample YAML

```yaml
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
        location: "$message.header#/replyTo"
      channel:
        $ref: '#/channels/pong'
```

## 3. Dynamic Response Channel

This approach ensures isolation and flexibility for each client:
- Each client specifies a unique `clientId` in the request headers.
- The server reads this header and sends the response to the specified channel.

### Sample YAML

```yaml
channels:
  ping:
    address: /ping
    messages:
      ping:
        $ref: '#/components/messages/ping'
  pong/{clientId}:
    parameters:
      clientId:
        schema:
          type: string
    messages:
      pong:
        $ref: '#/components/messages/pong'
```
