from enum import Enum

class InteractionType(Enum):
  PUBSUB = "pubsubIP"
  REQUEST = "requestIP"
  SUBMIT = "submitIP"
  PROGRESS = "progressIP"
  INVOKE = "invokeIP"

class InteractionPayloadElementPubSub(Enum):
  SEND = "subscriptionKeys"
  RECEIVE = "publishNotify"

class InteractionPayloadElementRequest(Enum):
  SEND = "request"
  RECEIVE = "response"

class InteractionPayloadElementSubmit(Enum):
  SEND = "submit"

class TransportType(Enum):
  SEND = "Send"
  RECEIVE = "Receive"
  ERROR = "Error" # this is also a RECEIVE transport type