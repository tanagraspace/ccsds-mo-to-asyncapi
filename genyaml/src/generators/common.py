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

class InteractionPayloadElementProgress(Enum):
  SEND = "progress"
  RECEIVE = "update"
  RESPONSE = "response"

class TransportType(Enum):
  SEND = "Send"
  RECEIVE = "Receive"
  RECEIVE_ADDITIONAL = "ReceiveAdditional"
  ERROR = "Error" # this is also a RECEIVE transport type

class AsyncApiActionType(Enum):
  SEND = "send"
  RECEIVE = "receive"