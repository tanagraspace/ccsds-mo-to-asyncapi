# Demo

Dynamic replies are essential for flexible and scalable communication in asynchronous messaging systems. AsyncAPI allows two patterns to enable dynamic responses:

|                             | **Dynamic Reply Address**                         | **Dynamic Response Channel**                              |
|-----------------------------|---------------------------------------------------|-----------------------------------------------------------|
| **Flexibility**             | Client specifies `replyTo` in headers             | Client specifies `pong/{clientId}` in headers             |
| **Server Behavior**         | Reads `replyTo` from request headers              | Reads `pong/{clientId}` from request headers              |
| **Client Response Channel** | Temporary, created at runtime                     | Predefined, tied to client Id                             |
| **Use Case**                | Simple, flexible for ad-hoc responses             | Isolated, useful for high client concurrency              |


## 1. Dynamic Reply Address

This approach allows the client to dictate where it expects the response:
- The client specifies a dynamic `replyTo` address in the message headers.
- The server dynamically reads the `replyTo` address and publishes the response to that address. 

### 1.1. Sample YAML

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

### 1.2. Sample Code

```python
import sys
import paho.mqtt.client as mqtt
import uuid
import json

BROKER = "localhost"

# --------------------------------
# CLIENT LOGIC
# --------------------------------
def client_send_ping():
    try:
        client = mqtt.Client()
        client.connect(BROKER)
        
        reply_to = f"client/{uuid.uuid4()}/reply"
        request_id = str(uuid.uuid4())

        def on_message(client, userdata, msg):
            try:
                print(f"Received response: {msg.payload.decode()}")
            except Exception as e:
                print(f"Error processing response: {e}")
            finally:
                client.disconnect()

        client.subscribe(reply_to)
        client.on_message = on_message

        message = {
            "headers": {
                "replyTo": reply_to,
                "requestId": request_id
            },
            "payload": {
                "event": "ping"
            }
        }
        client.publish("ping", json.dumps(message))
        print(f"Sent ping with requestId {request_id}, waiting for response on {reply_to}")
        client.loop_forever()

    except Exception as e:
        print(f"Client error: {e}")
    finally:
        if client.is_connected():
            client.disconnect()

# --------------------------------
# SERVER LOGIC
# --------------------------------
def server_handle_ping(client, userdata, msg):
    try:
        message = json.loads(msg.payload.decode())
        reply_to = message["headers"]["replyTo"]
        request_id = message["headers"]["requestId"]

        response = {
            "headers": {
                "requestId": request_id
            },
            "payload": {
                "event": "pong"
            }
        }
        client.publish(reply_to, json.dumps(response))
        print(f"Sent response to {reply_to}")
    except (KeyError, json.JSONDecodeError) as e:
        print(f"Error handling ping: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")

def server_start():
    try:
        client = mqtt.Client()
        client.connect(BROKER)
        client.subscribe("ping")
        client.on_message = server_handle_ping
        print("Server listening on 'ping'")
        client.loop_forever()
    except Exception as e:
        print(f"Server error: {e}")
    finally:
        if client.is_connected():
            client.disconnect()

# --------------------------------
# MAIN ENTRY POINT
# --------------------------------
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script.py [client|server]")
        sys.exit(1)

    mode = sys.argv[1].lower()

    if mode == "client":
        client_send_ping()
    elif mode == "server":
        server_start()
    else:
        print("Invalid mode. Use 'client' or 'server'.")
```


## 2. Dynamic Response Channel

This approach ensures isolation and flexibility for each client:
- Each client specifies a unique `responseChannel/{clientId}` in the request headers.
- The server reads this header and sends the response to the specified channel.

### 2.1. Sample YAML

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

### 2.2. Sample Code
```python
import sys
import paho.mqtt.client as mqtt
import uuid
import json

BROKER = "localhost"

# --------------------------------
# CLIENT LOGIC
# --------------------------------
def client_send_ping():
    try:
        client = mqtt.Client()
        client.connect(BROKER)
        
        client_id = str(uuid.uuid4())
        pong_channel = f"pong/{client_id}"
        request_id = str(uuid.uuid4())

        def on_message(client, userdata, msg):
            try:
                print(f"Received response: {msg.payload.decode()}")
            except Exception as e:
                print(f"Error processing response: {e}")
            finally:
                client.disconnect()

        client.subscribe(pong_channel)
        client.on_message = on_message

        message = {
            "headers": {
                "responseChannel": pong_channel,
                "requestId": request_id
            },
            "payload": {
                "event": "ping"
            }
        }
        client.publish("ping", json.dumps(message))
        print(f"Sent ping with requestId {request_id}, waiting for response on {pong_channel}")
        client.loop_forever()

    except Exception as e:
        print(f"Client error: {e}")
    finally:
        if client.is_connected():
            client.disconnect()


# --------------------------------
# SERVER LOGIC
# --------------------------------
def server_handle_ping(client, userdata, msg):
    try:
        message = json.loads(msg.payload.decode())
        pong_channel = message["headers"]["responseChannel"]
        request_id = message["headers"]["requestId"]

        response = {
            "headers": {
                "requestId": request_id
            },
            "payload": {
                "event": "pong"
            }
        }
        client.publish(pong_channel, json.dumps(response))
        print(f"Sent response to {pong_channel}")
    except (KeyError, json.JSONDecodeError) as e:
        print(f"Error handling ping: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")


def server_start():
    try:
        client = mqtt.Client()
        client.connect(BROKER)
        client.subscribe("ping")
        client.on_message = server_handle_ping
        print("Server listening on 'ping'")
        client.loop_forever()
    except Exception as e:
        print(f"Server error: {e}")
    finally:
        if client.is_connected():
            client.disconnect()


# --------------------------------
# MAIN ENTRY POINT
# --------------------------------
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script.py [client|server]")
        sys.exit(1)

    mode = sys.argv[1].lower()

    if mode == "client":
        client_send_ping()
    elif mode == "server":
        server_start()
    else:
        print("Invalid mode. Use 'client' or 'server'.")

```
