import os
from abc import ABC, abstractmethod
from xml.etree.ElementTree import Element

from generators.common import InteractionType, InteractionPayloadElementPubSub, TransportType, AsyncApiActionType
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

  @property
  def receive_element_additional(self) -> str:
    """
    This only exists because the PROGRESS interaction type has more than one RECEIVE channel.
    Override this implementation by the YamlGeneratorProgress subclass to signal that an additional RECEIVE channel needs to be defined.
    """
    return None

  @property
  def is_dynamic_reply_address(self) -> bool:
    """
    Set this flag to toggle between generating YAML that implements Static Reply Address (False) and Dynamic Reply Address (True).
    More details here: https://www.asyncapi.com/docs/tutorials/getting-started/request-reply
    """
    return True


  def generate_service_schema(self, service_name: str) -> str:
    """
    Generates the YAML string for the base AsyncAPI service schema.
    """

    schema = ""
    schema += "asyncapi: 3.0.0\n"
    schema += "info:\n"
    schema += f"  title: {service_name} Service API\n"
    schema += "  version: 1.0.0\n"
    schema += f"  description: This API allows clients to interact with the {service_name} Service.\n"
    schema += "defaultContentType: application/json\n"
    schema += "servers:\n"
    schema += "  production:\n"
    schema += f"    host: 'localhost:{{port}}'\n"
    schema += "    protocol: mqtt\n"
    schema += f"    description: MQTT server for the {service_name} Service.\n"
    schema += "    variables:\n"
    schema += "      port:\n"
    schema += "        default: '8883'\n"

    return schema


  def generate_channels_schema(self, interaction_name: str,
    include_channel_send: bool, include_channel_receive: bool, include_channel_receive_additional : bool = False, include_channel_error: bool = False) -> str:
    """
    Generates the YAML string for a pubsubIP interaction.
    """

    channels_schema = ""

    # send channel
    if include_channel_send:
      channels_schema += f"  {interaction_name}_{self.send_element}:\n"
      channels_schema += f"    address: {interaction_name}_{self.send_element}\n"
      channels_schema += f"    messages:\n"
      channels_schema += f"      {interaction_name}_{self.send_element}.message:\n"
      channels_schema += f"        $ref: '#/components/messages/{interaction_name}_{self.send_element}'\n"
      channels_schema += "    description: >\n"

      # sometimes there is no receive channel (e.g. for the SUBMIT interaction type)
      if include_channel_receive:
        channels_schema += f"      Send a **{interaction_name}_{self.send_element}** message in this channel to receive a\n"
        channels_schema += f"      **{interaction_name}_{self.receive_element}** message over the **{interaction_name}_{self.receive_element}** channel.\n"
      else:
        channels_schema += f"      Send a **{interaction_name}_{self.send_element}** message in this channel.\n"

    # receive channel
    if include_channel_receive:
      channels_schema += f"  {interaction_name}_{self.receive_element}:\n"
      channels_schema += f"    address: {'null' if self.is_dynamic_reply_address else f'{interaction_name}_{self.receive_element}'}\n"
      channels_schema += f"    messages:\n"
      channels_schema += f"      {interaction_name}_{self.receive_element}.message:\n"
      channels_schema += f"        $ref: '#/components/messages/{interaction_name}_{self.receive_element}'\n"
      channels_schema += "    description: >\n"
      channels_schema += f"      Use this channel to receive {interaction_name} responses as **{interaction_name}_{self.receive_element}**\n"
      channels_schema += f"      messages.\n"

    # receive channel (additional)
    if include_channel_receive_additional:
      channels_schema += f"  {interaction_name}_{self.receive_element_additional}:\n"
      channels_schema += f"    address: {interaction_name}_{self.receive_element_additional}\n"
      channels_schema += f"    messages:\n"
      channels_schema += f"      {interaction_name}_{self.receive_element_additional}.message:\n"
      channels_schema += f"        $ref: '#/components/messages/{interaction_name}_{self.receive_element_additional}'\n"
      channels_schema += "    description: >\n"
      channels_schema += f"      Use this channel to receive additional {interaction_name} responses as **{interaction_name}_{self.receive_element_additional}**\n"
      channels_schema += f"      messages.\n"

    # error receive channel
    if include_channel_error:
      channels_schema += f"  {interaction_name}_{TransportType.ERROR.value.lower()}:\n"
      channels_schema += f"    address: {interaction_name}_{TransportType.ERROR.value.lower()}\n"
      channels_schema += f"    messages:\n"
      channels_schema += f"      {interaction_name}_{TransportType.ERROR.value.lower()}.message:\n"
      channels_schema += f"        $ref: '#/components/messages/{interaction_name}_{TransportType.ERROR.value.lower()}'\n"
      channels_schema += "    description: >\n"
      channels_schema += f"      Use this channel to receive {interaction_name} errors as **{interaction_name}_{TransportType.ERROR.value.lower()}**\n"
      channels_schema += f"      messages.\n"

    return channels_schema


  def generate_operations_schema(self, interaction_name: str,
    include_channel_send: bool, include_channel_receive: bool, include_channel_receive_additional : bool = False, include_channel_error: bool = False) -> str:
    """
    Generates the YAML string for operations related to a pubsubIP interaction.
    """

    operations_schema = ""

    # send operation
    if include_channel_send:
      operations_schema += f"  {interaction_name}_{self.send_element}:\n"
      operations_schema += f"    action: {AsyncApiActionType.SEND.value}\n"
      operations_schema += f"    channel:\n"
      operations_schema += f"      $ref: '#/channels/{interaction_name}_{self.send_element}'\n"
      operations_schema += f"    messages:\n"
      operations_schema += f"      - $ref: '#/channels/{interaction_name}_{self.send_element}/messages/{interaction_name}_{self.send_element}.message'\n"

      if self.is_dynamic_reply_address and include_channel_receive:
        operations_schema += f"    reply:\n"
        operations_schema += f"      address:\n"
        operations_schema += f"        description: Reply is sent to topic specified in 'replyTo' property in the message header\n"
        operations_schema += f"        location: $message.header#/replyTo\n"
        operations_schema += f"      channel:\n"
        operations_schema += f"        $ref: '#/channels/{interaction_name}_{self.receive_element}'\n"

    # receive operation
    if include_channel_receive:
      operations_schema += f"  {interaction_name}_{self.receive_element}:\n"
      operations_schema += f"    action: {AsyncApiActionType.RECEIVE.value}\n"
      operations_schema += f"    channel:\n"
      operations_schema += f"      $ref: '#/channels/{interaction_name}_{self.receive_element}'\n"
      operations_schema += f"    messages:\n"
      operations_schema += f"      - $ref: '#/channels/{interaction_name}_{self.receive_element}/messages/{interaction_name}_{self.receive_element}.message'\n"

    # receive operation
    if include_channel_receive_additional:
      operations_schema += f"  {interaction_name}_{self.receive_element_additional}:\n"
      operations_schema += f"    action: {AsyncApiActionType.RECEIVE.value}\n"
      operations_schema += f"    channel:\n"
      operations_schema += f"      $ref: '#/channels/{interaction_name}_{self.receive_element_additional}'\n"
      operations_schema += f"    messages:\n"
      operations_schema += f"      - $ref: '#/channels/{interaction_name}_{self.receive_element_additional}/messages/{interaction_name}_{self.receive_element_additional}.message'\n"


    # error operation (optional)
    if include_channel_error:
      operations_schema += f"  {interaction_name}_{TransportType.ERROR.value.lower()}:\n"
      operations_schema += f"    action: {AsyncApiActionType.RECEIVE.value}\n" # an error is a receive action
      operations_schema += f"    channel:\n"
      operations_schema += f"      $ref: '#/channels/{interaction_name}_{TransportType.ERROR.value.lower()}'\n"
      operations_schema += f"    messages:\n"
      operations_schema += f"      - $ref: '#/channels/{interaction_name}_{TransportType.ERROR.value.lower()}/messages/{interaction_name}_{TransportType.ERROR.value.lower()}.message'\n"

    return operations_schema


  def generate_components_messages_schema(self, interaction_name: str,
    include_channel_send: bool, include_channel_receive: bool, include_channel_receive_additional : bool = False, include_channel_error: bool = False) -> str:
    """
    Generates the YAML string for messages related to a pubsubIP interaction.
    """

    components_schema = ""

    # send message component
    if include_channel_send:
      components_schema += f"    {interaction_name}_{self.send_element}:\n"
      components_schema += f"      description: {interaction_name} request\n"
      components_schema += f"      payload:\n"
      components_schema += f"        $ref: '#/components/schemas/{interaction_name}_{self.send_element}'\n"

    # receive message component
    if include_channel_receive:
      components_schema += f"    {interaction_name}_{self.receive_element}:\n"
      components_schema += f"      description: {interaction_name} response\n"
      components_schema += f"      payload:\n"
      components_schema += f"        $ref: '#/components/schemas/{interaction_name}_{self.receive_element}'\n"

    # receive (additional) message component
    if include_channel_receive_additional:
      components_schema += f"    {interaction_name}_{self.receive_element_additional}:\n"
      components_schema += f"      description: {interaction_name} update response\n"
      components_schema += f"      payload:\n"
      components_schema += f"        $ref: '#/components/schemas/{interaction_name}_{self.receive_element_additional}'\n"

    # error message component (optional)
    if include_channel_error:
      components_schema += f"    {interaction_name}_{TransportType.ERROR.value.lower()}:\n"
      components_schema += f"      description: {interaction_name} error response\n"
      components_schema += f"      payload:\n"
      components_schema += f"        $ref: '#/components/schemas/{interaction_name}_{TransportType.ERROR.value.lower()}'\n"

    return components_schema


  def generate_components_schema(self, mo_asyncapi_src_dir_path: str, interaction_name: str,
    send_fields: list[Element], receive_fields: list[Element], receive_fields_additional: list[Element], err_fields: list[Element], ns: dict[str, str]):
    """
    Generates the YAML string for the components section based on the fields.
    """

    # keep track of all the composite field types
    # we will have to generate their schema definition later
    composite_type_list = []

    # build the yaml as we go along
    components_yaml = ""

    # build SEND components
    if len(send_fields) == 0: # with no fields
      components_yaml +=  f"    {interaction_name}_{self.send_element}:\n"
      components_yaml +=   "      description: A request message with no payload.\n"
      components_yaml +=   "      type: object\n"
      components_yaml +=   "      additionalProperties: false\n"
    elif len(send_fields) > 0: # with fields
      components_yaml += f"    {interaction_name}_{self.send_element}:\n"
      components_yaml +=  "      type: object\n"
      components_yaml +=  "      additionalProperties: false\n"
      components_yaml +=  "      properties:\n"
      components_yaml += self._generate_components_schema_field_sequence_id()

      for field in send_fields:
        yaml_str, composite_type = self._generate_components_schema_fields(field, ns)
        components_yaml += yaml_str

        # collect the composite types for later
        if composite_type:
          composite_type_list.append(composite_type)

    # build RECEIVE components
    if len(receive_fields) > 0:
      components_yaml += f"    {interaction_name}_{self.receive_element}:\n"
      components_yaml +=  "      type: object\n"
      components_yaml +=  "      additionalProperties: false\n"
      components_yaml +=  "      properties:\n"
      components_yaml += self._generate_components_schema_field_sequence_id()

      for field in receive_fields:
        yaml_str, composite_type = self._generate_components_schema_fields(field, ns)
        components_yaml += yaml_str

        # collect the composite types for later
        if composite_type:
          composite_type_list.append(composite_type)

    # build RECEIVE ADDITIONAL components
    if len(receive_fields_additional) > 0:
      components_yaml += f"    {interaction_name}_{self.receive_element_additional}:\n"
      components_yaml +=  "      type: object\n"
      components_yaml +=  "      additionalProperties: false\n"
      components_yaml +=  "      properties:\n"
      components_yaml += self._generate_components_schema_field_sequence_id()

      for field in receive_fields_additional:
        yaml_str, composite_type = self._generate_components_schema_fields(field, ns)
        components_yaml += yaml_str

        # collect the composite types for later
        if composite_type:
          composite_type_list.append(composite_type)

    # build ERROR components
    if len(err_fields) > 0:
      components_yaml +=  f"    {interaction_name}_{TransportType.ERROR.value.lower()}:\n"
      components_yaml +=   "      type: object\n"
      components_yaml +=   "      additionalProperties: false\n"
      components_yaml +=   "      properties:\n"
      components_yaml += self._generate_components_schema_field_sequence_id()


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

    return components_yaml, composite_type_dict


  def generate_components_composites(self, mo_asyncapi_src_dir_path: str, composite_type_dict: dict):
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

    return composite_type_namespace_yaml


  def _generate_components_schema_field_sequence_id(self):
    # a unique identifier to map the response to the request
    sequence_id_field = f"        sequenceId:\n"
    sequence_id_field += f"          type: string\n"
    sequence_id_field += f"          description: A unique identifier to map the response (receive message) to the request (send message). If no request message exists then this unique identifier can be used to track the sequence order of the received messages.\n"
    return sequence_id_field


  def _generate_components_schema_fields(self, field: Element, ns: dict[str, str]):
    components_schema_yaml = ""
    composite_type = None

    field_name = field.get('name')
    field_comment = field.get('comment')
    field_is_list = field.find('mal:type', ns).get('list', 'false').lower() == 'true'
    field_type = field.find('mal:type', ns).get('name')
    service = field.find('mal:type', ns).get('service')
    area = field.find('mal:type', ns).get('area')

    components_schema_yaml += f"        {field_name}:\n"

    # if the field's type is found in TYPE_MAPPING, use it; otherwise, dynamically load the class.
    if field_type in TYPE_MAPPING:
      asyncapi_type, asyncapi_format, _ = TYPE_MAPPING[field_type]

      components_schema_yaml += f"          type: {'array' if field_is_list else asyncapi_type}\n"
      if field_is_list:
        components_schema_yaml += "          items:\n"
        components_schema_yaml += f"            type: {asyncapi_type}\n"

      # properly format multiline comments with YAML indentation
      if field_comment:
        if asyncapi_format:
          components_schema_yaml += f"          {'  ' if field_is_list else ''}format: {asyncapi_format}\n"

        formatted_comment = '\n'.join([f"            {line}" for line in field_comment.splitlines()])
        components_schema_yaml += f"          description: |\n{formatted_comment}\n"

    else:
      # if it's not a simple field type then it's a composite type
      # for composite types we only want a reference to the definition rather than the definition itself
      if service:
        components_schema_yaml += f"          $ref: '{SCHEMA_NAMESPACE}/{utils.to_snake_case(area)}/{utils.to_snake_case(service)}/{field_type}'\n"
      else:
        components_schema_yaml += f"          $ref: '{SCHEMA_NAMESPACE}/{utils.to_snake_case(area)}/{field_type}'\n"

      if field_comment:
        formatted_comment = '\n'.join([f"            {line}" for line in field_comment.splitlines()])
        components_schema_yaml += f"          description: |\n{formatted_comment}\n"


      composite_type = (utils.to_snake_case(area), utils.to_snake_case(service) if service else None, field_type)

    return components_schema_yaml, composite_type


  def _generate_components_schema_error_fields(self, fields: list[Element], ns: dict[str, str]) -> str:
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
    for area in dict.fromkeys(error_areas):
      yaml_str += f"            - {area}\n"

    yaml_str += f"        name:\n"
    yaml_str += f"          type: string\n"
    yaml_str += f"          description: A code representing the error.\n"
    yaml_str += f"          enum:\n"
    for area in dict.fromkeys(error_names):
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
