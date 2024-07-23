from enum import Enum

class InteractionType(Enum):
  PUBSUB = "pubsubIP"
  REQUEST = "requestIP"
  SUBMIT = "submitIP"
  PROGRESS = "progressIP"
  INVOKE = "invokeIP"

class TransportType(Enum):
  REQUEST = "Request"
  RESPONSE = "Response"