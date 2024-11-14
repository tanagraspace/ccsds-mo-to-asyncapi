from generators.common import InteractionType, InteractionPayloadElementProgress
from generators.abstract_yaml_generator import AbstractYamlGenerator


class YamlGeneratorSubmitProgress(AbstractYamlGenerator):

  @property
  def interaction_type(self) -> str:
    return InteractionType.PROGRESS.value

  @property
  def send_element(self) -> str:
    return InteractionPayloadElementProgress.SEND.value

  @property
  def receive_element(self) -> str:
    return InteractionPayloadElementProgress.RECEIVE.value

  @property
  def receive_element_additional(self) -> str:
    return InteractionPayloadElementProgress.RESPONSE.value
