package main

import (
  "log"
  "net/url"
  "github.com/gorilla/websocket"
  "github.com/google/uuid"
)

type BeatSub struct {
  SubscriptionID string `json:"subscriptionId"`
  ReplyTo        string `json:"replyTo"` // Specify where the client expects pub messages
}

type BeatPub struct {
  SubscriptionID string `json:"subscriptionId"`
}

func main() {
  // Generate a unique SubscriptionID and replyTo using UUID
  subscriptionID := uuid.New().String()
  replyTo := "beat_pub_" + subscriptionID

  serverURL := url.URL{Scheme: "ws", Host: "server:8080", Path: "/ws"}
  conn, _, err := websocket.DefaultDialer.Dial(serverURL.String(), nil)
  if err != nil {
    log.Fatal("Error connecting to WebSocket server:", err)
  }
  defer conn.Close()

  // Subscribe to heartbeats with replyTo
  // Generate a unique SubscriptionID using UUID
  subscription := BeatSub{
    SubscriptionID: subscriptionID,
    ReplyTo:        replyTo,
  }
  err = conn.WriteJSON(subscription)
  if err != nil {
    log.Fatal("Error sending subscription:", err)
  }
  log.Printf("Subscribed with ID: %s and replyTo: %s\n", subscription.SubscriptionID, subscription.ReplyTo)

  for {
    // Listen for heartbeats
    var msg BeatPub
    err := conn.ReadJSON(&msg)
    if err != nil {
      log.Println("Error reading message:", err)
      break
    }
    log.Printf("Received heartbeat: %+v\n", msg)
  }
}
