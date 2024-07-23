from abc import ABC, abstractmethod

class AbstractYamlGenerator(ABC):
  """
  Abstract base class for generating YAML schemas for services.
  """
  
  def generate_service_schema(self, service_name: str, interaction_name: str) -> str:
    """
    Base implementation for generating the YAML string that defines the service.
    Can be overridden by subclasses for customization.
    """
    return f"""asyncapi: 3.0.0
info:
  title: {service_name} {interaction_name} Service API
  version: 1.0.0
  description: This API allows clients to interact with the {interaction_name} iteraction of the {service_name} service.
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
          retain: false"""

  @abstractmethod
  def generate_channels_schema(self, service_name: str, interaction_name: str) -> str:
    """
    Abstract method for generating the YAML string for channels related to a given interaction.
    Must be implemented by subclasses.
    """
    pass

  @abstractmethod
  def generate_operations_schema(self, service_name: str, interaction_name: str) -> str:
    """
    Abstract method for generating the YAML string for operations related to a given interaction.
    Must be implemented by subclasses.
    """
    pass

  @abstractmethod
  def generate_components_messages_schema(self, service_name: str, interaction_name: str) -> str:
    """
    Abstract method for generating the YAML string for messages related to a given interaction.
    Must be implemented by subclasses.
    """
    pass