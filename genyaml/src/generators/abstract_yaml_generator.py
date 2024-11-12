import os
from abc import ABC, abstractmethod

from generators.common import InteractionType, InteractionPayloadElementPubSub, TransportType
from constants import SCHEMA_NAMESPACE, TYPE_MAPPING
import utils


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


  def generate_channels_schema(self, service_name: str, interaction_name: str, include_error_channel: bool = False) -> str:
    """
    Generates the YAML string for a pubsubIP interaction.
    """

    channels_schema = ""
    channels_schema += "channels:\n"

    # send channel
    if self.send_element:
      channels_schema += f"  {TransportType.SEND.value}_{service_name}_{interaction_name}:\n"
      channels_schema += f"    address: {TransportType.SEND.value}_{service_name}_{interaction_name}\n"
      channels_schema += f"    messages:\n"
      channels_schema += f"      {service_name}.{interaction_name}_{TransportType.SEND.value}.message:\n"
      channels_schema += f"        $ref: '#/components/messages/{service_name}_{interaction_name}_{TransportType.SEND.value}'\n"
      channels_schema += "    description: >\n"
      channels_schema += f"      Send a **{service_name}_{interaction_name}_{TransportType.SEND.value}** message in this channel to receive a\n"
      channels_schema += f"      **{service_name}_{interaction_name}_{TransportType.RECEIVE.value}** message over the **{TransportType.RECEIVE.value}_{service_name}_{interaction_name}** channel.\n"

    # receive channel
    if self.receive_element:
      channels_schema += f"  {TransportType.RECEIVE.value}_{service_name}_{interaction_name}:\n"
      channels_schema += f"    address: {TransportType.RECEIVE.value}_{service_name}_{interaction_name}\n"
      channels_schema += f"    messages:\n"
      channels_schema += f"      {service_name}.{interaction_name}_{TransportType.RECEIVE.value}.message:\n"
      channels_schema += f"        $ref: '#/components/messages/{service_name}_{interaction_name}_{TransportType.RECEIVE.value}'\n"
      channels_schema += "    description: >\n"
      channels_schema += f"      Use this channel to receive {service_name} {interaction_name} responses as **{service_name}_{interaction_name}_{TransportType.RECEIVE.value}**\n"
      channels_schema += f"      messages.\n"

    # error receive channel
    if include_error_channel:
      channels_schema += f"  {TransportType.ERROR.value}_{service_name}_{interaction_name}:\n"
      channels_schema += f"    address: {TransportType.ERROR.value}_{service_name}_{interaction_name}\n"
      channels_schema += f"    messages:\n"
      channels_schema += f"      {service_name}.{interaction_name}_{TransportType.ERROR.value}.message:\n"
      channels_schema += f"        $ref: '#/components/messages/{service_name}_{interaction_name}_{TransportType.ERROR.value}'\n"
      channels_schema += "    description: >\n"
      channels_schema += f"      Use this channel to receive {service_name} {interaction_name} errors as **{service_name}_{interaction_name}_{TransportType.RECEIVE.value}Errors**\n"
      channels_schema += f"      messages.\n"

    return channels_schema


  def generate_operations_schema(self, service_name: str, interaction_name: str, include_error_channel: bool = False) -> str:
    """
    Generates the YAML string for operations related to a pubsubIP interaction.
    """

    operations_schema = ""
    operations_schema += "operations:\n"

    # send operation
    if self.send_element:
      operations_schema += f"  {service_name}_{interaction_name}_{TransportType.SEND.value}:\n"
      operations_schema += f"    action: {TransportType.SEND.value.lower()}\n"
      operations_schema += f"    channel:\n"
      operations_schema += f"      $ref: '#/channels/{TransportType.SEND.value}_{service_name}_{interaction_name}'\n"
      operations_schema += f"    messages:\n"
      operations_schema += f"      - $ref: '#/channels/{TransportType.SEND.value}_{service_name}_{interaction_name}/messages/{service_name}.{interaction_name}_{TransportType.SEND.value}.message'\n"

    # receive operation
    if self.receive_element:
      operations_schema += f"  {service_name}_{interaction_name}_{TransportType.RECEIVE.value}:\n"
      operations_schema += f"    action: {TransportType.RECEIVE.value.lower()}\n"
      operations_schema += f"    channel:\n"
      operations_schema += f"      $ref: '#/channels/{TransportType.RECEIVE.value}_{service_name}_{interaction_name}'\n"
      operations_schema += f"    messages:\n"
      operations_schema += f"      - $ref: '#/channels/{TransportType.RECEIVE.value}_{service_name}_{interaction_name}/messages/{service_name}.{interaction_name}_{TransportType.RECEIVE.value}.message'\n"

    # error operation (optional)
    if include_error_channel:
      operations_schema += f"  {service_name}_{interaction_name}_{TransportType.ERROR.value}:\n"
      operations_schema += f"    action: {TransportType.RECEIVE.value.lower()}\n" # an error is a receive action
      operations_schema += f"    channel:\n"
      operations_schema += f"      $ref: '#/channels/{TransportType.ERROR.value}_{service_name}_{interaction_name}'\n"
      operations_schema += f"    messages:\n"
      operations_schema += f"      - $ref: '#/channels/{TransportType.ERROR.value}_{service_name}_{interaction_name}/messages/{service_name}.{interaction_name}_{TransportType.ERROR.value}.message'\n"

    return operations_schema


  def generate_components_messages_schema(self, service_name: str, interaction_name: str, include_error_channel: bool = False) -> str:
    """
    Generates the YAML string for messages related to a pubsubIP interaction.
    """

    components_schema = ""
    components_schema += "  messages:\n"

    # send message component
    if self.send_element:
      components_schema += f"    {service_name}_{interaction_name}_{TransportType.SEND.value}:\n"
      components_schema += f"      description: {service_name} {interaction_name} request submission\n"
      components_schema += f"      payload:\n"
      components_schema += f"        $ref: '#/components/schemas/{service_name}_{interaction_name}_{TransportType.SEND.value}'\n"

    # receive message component
    if self.receive_element:
      components_schema += f"    {service_name}_{interaction_name}_{TransportType.RECEIVE.value}:\n"
      components_schema += f"      description: {service_name} {interaction_name} update response\n"
      components_schema += f"      payload:\n"
      components_schema += f"        $ref: '#/components/schemas/{service_name}_{interaction_name}_{TransportType.RECEIVE.value}'\n"

    # error message component (optional)
    if include_error_channel:
      components_schema += f"    {service_name}_{interaction_name}_{TransportType.ERROR.value}:\n"
      components_schema += f"      description: {service_name} {interaction_name} error response\n"
      components_schema += f"      payload:\n"
      components_schema += f"        $ref: '#/components/schemas/{service_name}_{interaction_name}_{TransportType.ERROR.value}'\n"

    return components_schema


  def generate_components_schema(self, mo_asyncapi_src_dir_path: str, service_name: str, interaction_name: str, send_fields, receive_fields, err_fields, ns):
    """
    Generates the YAML string for the components section based on the fields.
    """

    # keep track of all the composite field types
    # we will have to generate their schema definition later
    composite_type_list = []

    components_yaml = f"components:\n  schemas:\n"

    # build SEND components
    if self.send_element:
      components_yaml +=  f"    {service_name}_{interaction_name}_{TransportType.SEND.value}:\n"
      components_yaml += "      type: object\n      properties:\n"
      components_yaml += self._generate_components_schema_field_transaction_id()

      for field in send_fields:
        yaml_str, composite_type = self._generate_components_schema_fields(field, ns)
        components_yaml += yaml_str

        # collect the composite types for later
        if composite_type:
          composite_type_list.append(composite_type)

    # build RECEIVE components
    if self.receive_element:
      components_yaml +=  f"    {service_name}_{interaction_name}_{TransportType.RECEIVE.value}:\n"
      components_yaml += "      type: object\n      properties:\n"
      components_yaml += self._generate_components_schema_field_transaction_id()

      for field in receive_fields:
        yaml_str, composite_type = self._generate_components_schema_fields(field, ns)
        components_yaml += yaml_str

        # collect the composite types for later
        if composite_type:
          composite_type_list.append(composite_type)

    # build ERROR components
    if len(err_fields) > 0:
      components_yaml +=  f"    {service_name}_{interaction_name}_{TransportType.ERROR.value}:\n"
      components_yaml += "      type: object\n      properties:\n"
      components_yaml += self._generate_components_schema_field_transaction_id()


      yaml_str = self._generate_components_schema_error_fields(err_fields, ns)
      components_yaml += yaml_str

    # now process all the composite types
    # HACK: do this several times in case some composites have fields that references other composites that reference other composites...
    #       exit the loop when we detect that we're not adding any new composites
    composite_type_dict = None
    composite_count_before = -1
    composite_count_after = 0

    while composite_count_before != composite_count_after:
      # count how many composites we started with
      composite_count_before = utils.count_composites(composite_type_dict) if composite_type_dict else 0

      # collect composites
      composite_type_list += self._extract_additional_composite_types(mo_asyncapi_src_dir_path, composite_type_list)
      composite_type_dict = utils.convert_composite_type_list_to_dict(composite_type_list)

      # count how many composites we ended up with
      composite_count_after = utils.count_composites(composite_type_dict)

    # build the composite type's namespace and properties
    composite_type_namespace_yaml = ""
    prefix_whitespace_base = "    "  # start with 4 space character prefix

    for area, services in composite_type_dict.items():
      # area level with 4 spaces
      composite_type_namespace_yaml += f"{prefix_whitespace_base}{area}:\n"

      # handle services and types, incrementing by 2 spaces for each level
      for service, ctl in services.items():
        if service is None:
          # no service, just composite types (6 spaces)
          for composite_type in sorted(ctl):
            composite_type_namespace_yaml += f"{prefix_whitespace_base + '  '}{composite_type}:\n"  # 6 spaces

            composite_type_properties_yaml = utils.load_class_and_invoke_to_yaml(
              mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
              area=area,
              service=None,
              class_name=composite_type)

            composite_type_namespace_yaml += utils.prefix_lines(composite_type_properties_yaml, prefix_whitespace_base + '    ') + '\n'

        else:
          # service exists (6 spaces)
          composite_type_namespace_yaml += f"{prefix_whitespace_base + '  '}{service}:\n"  # 6 spaces
          for composite_type in sorted(ctl):
            composite_type_namespace_yaml += f"{prefix_whitespace_base + '    '}{composite_type}:\n"  # 8 spaces

            composite_type_properties_yaml = utils.load_class_and_invoke_to_yaml(
              mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
              area=area,
              service=service,
              class_name=composite_type)

            composite_type_namespace_yaml += utils.prefix_lines(composite_type_properties_yaml, prefix_whitespace_base + '      ') + '\n'

    return components_yaml + composite_type_namespace_yaml


  def _generate_components_schema_field_transaction_id(self):
    # a unique identifier to map the response to the request
    transaction_id_field = f"        transactionId:\n"
    transaction_id_field += f"          type: string\n"
    transaction_id_field += f"          description: A unique identifier to map the response to the request.\n"
    return transaction_id_field


  def _generate_components_schema_fields(self, field, ns):
    components_schema_yaml = ""
    composite_type = None

    field_name = field.get('name')
    field_comment = field.get('comment')
    field_type = field.find('mal:type', ns).get('name')
    service = field.find('mal:type', ns).get('service')
    area = field.find('mal:type', ns).get('area')

    components_schema_yaml += f"        {field_name}:\n"

    # if the field's type is found in TYPE_MAPPING, use it; otherwise, dynamically load the class.
    if field_type in TYPE_MAPPING:
      asyncapi_type, asyncapi_format, _ = TYPE_MAPPING[field_type]

      components_schema_yaml += f"          type: {asyncapi_type}\n"

      # properly format multiline comments with YAML indentation
      if field_comment:
        formatted_comment = '\n'.join([f"            {line}" for line in field_comment.splitlines()])
        components_schema_yaml += f"          description: |\n{formatted_comment}\n"

      if asyncapi_format:
        components_schema_yaml += f"          format: {asyncapi_format}\n"
    else:
      # if it's not a simple field type then it's a composite type
      # for composite types we only want a reference to the definition rather than the definition itself
      if service:
        components_schema_yaml += f"          $ref: '{SCHEMA_NAMESPACE}/{area.lower()}/{service.lower()}/{field_type}'\n"
      else:
        components_schema_yaml += f"          $ref: '{SCHEMA_NAMESPACE}/{area.lower()}/{field_type}'\n"

      if field_comment:
        formatted_comment = '\n'.join([f"            {line}" for line in field_comment.splitlines()])
        components_schema_yaml += f"          description: |\n{formatted_comment}\n"


      composite_type = (area.lower(), service.lower() if service else None, field_type)

    return components_schema_yaml, composite_type


  def _generate_components_schema_error_fields(self, fields, ns) -> str:
    """
    Generates the YAML string for an errorRef element from the provided XML element.
    """
    # extract attributes of the child elements
    error_names = [field.find('mal:type', ns).get('name') for field in fields]
    error_areas = [field.find('mal:type', ns).get('area') for field in fields]

    # build the YAML string
    yaml_str = ""
    yaml_str += f"        area:\n"
    yaml_str += f"          type: string\n"
    yaml_str += f"          description: The area in which the error applies.\n"
    yaml_str += f"          enum:\n"
    for area in set(error_areas):
      yaml_str += f"            - {area}\n"

    yaml_str += f"        name:\n"
    yaml_str += f"          type: string\n"
    yaml_str += f"          description: A code representing the error.\n"
    yaml_str += f"          enum:\n"
    for area in set(error_names):
      yaml_str += f"            - {area}\n"

    # we assume that the extraInformation for all error definitions have the same schema
    # TODO: verify this assumption
    yaml_str += f"        extraInformation:\n"
    yaml_str += f"          type: array\n"
    yaml_str += f"          items:\n"
    yaml_str += f"            type: integer\n"
    yaml_str += f"            format: uint32\n"
    yaml_str += f"            description: A list of the indexes of the error values shall be contained in the extra information field.\n"

    return yaml_str


  def _extract_additional_composite_types(self, mo_asyncapi_src_dir_path, composite_type_list: list[(str, str, str)]) -> list[(str, str, str)]:
    additional_composite_type_list = []
    for ct in composite_type_list:
      composite_type_area = ct[0]
      composite_type_service = ct[1]
      composite_type_name = ct[2]

      composite_type_yaml = utils.load_class_and_invoke_to_yaml(
        mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
        area=composite_type_area,
        service=composite_type_service,
        class_name=composite_type_name)

      # collect composite types (the ones referenced by composite_type_list but not the ones in composite_type_list)
      additional_composite_type_list += utils.extract_composite_types_from_ref(composite_type_yaml)

    return additional_composite_type_list
