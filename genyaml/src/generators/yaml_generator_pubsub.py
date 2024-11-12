from generators.common import InteractionType, InteractionPayloadElementPubSub
from generators.abstract_yaml_generator import AbstractYamlGenerator


class YamlGeneratorPubSub(AbstractYamlGenerator):

  @property
  def interaction_type(self) -> str:
    return InteractionType.PUBSUB.value

  @property
  def send_element(self) -> str:
    return InteractionPayloadElementPubSub.SEND.value

  @property
  def receive_element(self) -> str:
    return InteractionPayloadElementPubSub.RECEIVE.value
