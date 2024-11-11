from abc import ABC, abstractmethod

class AbstractYamlGenerator(ABC):
  """
  Abstract base class for generating YAML schemas for services.
  """

  @property
  @abstractmethod
  def interaction_type(self) -> str:
    """
    The MO MAL interaction type as it appears in the XML definition, without the namespace prefix.
    Must be implemented by subclasses.
    """
    pass

  @property
  @abstractmethod
  def send_element(self) -> str:
    """
    The MO MAL send payload element as it appears in the XML definition, without the namespace prefix.
    Must be implemented by subclasses.
    """
    pass

  @property
  @abstractmethod
  def receive_element(self) -> str:
    """
    The MO MAL receive payload element as it appears in the XML definition, without the namespace prefix.
    Must be implemented by subclasses.
    """
    pass


  def generate_service_schema(self, service_name: str, interaction_name: str) -> str:
    """
    Base implementation for generating the YAML string that defines the service.
    Can be overridden by subclasses for customization.
    """
    return f"""asyncapi: 3.0.0
info:
  title: {service_name} Service {interaction_name} API
  version: 1.0.0
  description: This API allows clients to interact with the {interaction_name} iteraction of the {service_name} Service.
defaultContentType: application/json
servers:
  production:
    host: 'localhost:{{port}}'
    protocol: mqtt
    description: MQTT server for the {interaction_name} interaction.
    variables:
      port:
        enum:
          - '8883'
          - '8884'
        default: '8883'
    bindings:
      mqtt:
        clientId: guest
        cleanSession: false
        keepAlive: 0
        lastWill:
          topic: /will
          qos: 0
          message: Guest gone offline.
          retain: false\n"""

  @abstractmethod
  def generate_channels_schema(self, service_name: str, interaction_name: str, include_error_channel: bool = False) -> str:
    """
    Abstract method to generate the YAML string for channels related to a given interaction.
    Must be implemented by subclasses.
    """
    pass


  @abstractmethod
  def generate_operations_schema(self, service_name: str, interaction_name: str, include_error_channel: bool = False) -> str:
    """
    Abstract method to generate the YAML string for operations related to a given interaction.
    Must be implemented by subclasses.
    """
    pass

  @abstractmethod
  def generate_components_messages_schema(self, service_name: str, interaction_name: str, include_error_channel: bool = False) -> str:
    """
    Abstract method to generate the YAML string for messages related to a given interaction.
    Must be implemented by subclasses.
    """
    pass

  @abstractmethod
  def generate_components_schema(self, mo_asyncapi_src_dir_path: str, service_name: str, interaction_name: str, sub_fields, pub_fields, err_fields, ns):
    """
    Abstract method to generate the YAML string for the components related to the given itneraction.
    Must be implemented by subclasses.
    """
    pass