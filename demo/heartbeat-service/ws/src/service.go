package main

import (
  "log"
  "net/http"
  "sync"
  "time"

  "github.com/gorilla/websocket"
)

type BeatSub struct {
  SubscriptionID string `json:"subscriptionId"`
  ReplyTo        string `json:"replyTo"`
}

type BeatPub struct {
  SubscriptionID string `json:"subscriptionId"`
}

type ClientInfo struct {
  SubscriptionID string
  Connection     *websocket.Conn
}

var upgrader = websocket.Upgrader{}
var clients = struct {
  sync.Mutex
  connections map[string]ClientInfo // Map replyTo to client info
}{connections: make(map[string]ClientInfo)}

func handleConnection(w http.ResponseWriter, r *http.Request) {
  conn, err := upgrader.Upgrade(w, r, nil)
  if err != nil {
    log.Println("Error upgrading to WebSocket:", err)
    return
  }
  defer conn.Close()

  var subscription BeatSub
  for {
    // Read subscription message from the client
    err := conn.ReadJSON(&subscription)
    if err != nil {
      log.Println("Error reading message:", err)
      break
    }

    log.Printf("Received subscription: %+v\n", subscription)

    // Store the SubscriptionID and WebSocket connection mapped to replyTo
    clients.Lock()
    clients.connections[subscription.ReplyTo] = ClientInfo{
      SubscriptionID: subscription.SubscriptionID,
      Connection:     conn,
    }
    clients.Unlock()
  }

  // Cleanup on disconnection
  clients.Lock()
  delete(clients.connections, subscription.ReplyTo)
  clients.Unlock()
  log.Printf("Client disconnected: %s", subscription.ReplyTo)
}

func broadcastHeartbeat() {
  for {
    time.Sleep(5 * time.Second)
    clients.Lock()
    for replyTo, clientInfo := range clients.connections {
      heartbeat := BeatPub{SubscriptionID: clientInfo.SubscriptionID}
      err := clientInfo.Connection.WriteJSON(heartbeat)
      if err != nil {
        log.Printf("Error sending heartbeat to %s: %v", replyTo, err)
        clientInfo.Connection.Close()
        delete(clients.connections, replyTo)
      } else {
        log.Printf("Sent heartbeat to %s: %+v\n", replyTo, heartbeat)
      }
    }
    clients.Unlock()
  }
}

func main() {
  http.HandleFunc("/ws", handleConnection)

  go broadcastHeartbeat()

  log.Println("Server listening on :8080")
  log.Fatal(http.ListenAndServe(":8080", nil))
}
