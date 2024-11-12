from generators.abstract_yaml_generator import AbstractYamlGenerator
from generators.common import InteractionType, InteractionPayloadElementRequest


class YamlGeneratorRequest(AbstractYamlGenerator):

  @property
  def interaction_type(self) -> str:
    return InteractionType.REQUEST.value

  @property
  def send_element(self) -> str:
    return InteractionPayloadElementRequest.SEND.value

  @property
  def receive_element(self) -> str:
    return InteractionPayloadElementRequest.RECEIVE.value
