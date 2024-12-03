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

  @property
  def send_element_operation_name_suffix(self) -> str:
    """
    E.g. instead of something like "monitorValue_subscriptionKeys" we want "monitorValue_sub."
    """
    return "sub"

  @property
  def receive_element_operation_name_suffix(self) -> str:
    """
    E.g. instead of something like "monitorValue_publishNotify" we want "monitorValue_pub."
    """
    return "pub"
