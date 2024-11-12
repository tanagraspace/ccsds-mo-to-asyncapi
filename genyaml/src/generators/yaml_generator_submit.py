from generators.common import InteractionType, InteractionPayloadElementSubmit
from generators.abstract_yaml_generator import AbstractYamlGenerator


class YamlGeneratorSubmit(AbstractYamlGenerator):

  @property
  def interaction_type(self) -> str:
    return InteractionType.SUBMIT.value

  @property
  def send_element(self) -> str:
    return InteractionPayloadElementSubmit.SEND.value

  @property
  def receive_element(self) -> str:
    return None
