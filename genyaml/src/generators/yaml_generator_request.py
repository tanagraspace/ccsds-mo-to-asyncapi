from generators.yaml_generator_pubsub import YamlGeneratorPubSub
from generators.common import InteractionType, InteractionPayloadElementRequest, TransportType

class YamlGeneratorRequest(YamlGeneratorPubSub):

  @property
  def interaction_type(self) -> str:
    return InteractionType.REQUEST.value

  @property
  def send_element(self) -> str:
    return InteractionPayloadElementRequest.SEND.value

  @property
  def receive_element(self) -> str:
    return InteractionPayloadElementRequest.RECEIVE.value
