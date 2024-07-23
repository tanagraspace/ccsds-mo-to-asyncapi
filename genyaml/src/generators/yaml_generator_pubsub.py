import os

from generators.abstract_yaml_generator import AbstractYamlGenerator
from generators.common import InteractionType, TransportType
from constants import SCHEMA_NAMESPACE, TYPE_MAPPING
import utils

class YamlGeneratorPubSub(AbstractYamlGenerator):
  @property
  def interaction_type(self) -> str:
    return InteractionType.PUBSUB.value

  def generate_channels_schema(self, service_name: str, interaction_name: str) -> str:
    """
    Generates the YAML string for a pubsubIP interaction.
    """
    return f"""
channels:
  sub_{service_name}_{interaction_name}:
    address: sub_{service_name}_{interaction_name}
    messages:
      {service_name}.{interaction_name}Subscribe.message:
        $ref: '#/components/messages/{service_name}_{interaction_name}{TransportType.REQUEST.value}'
    description: >
      Use this channel to send a **{service_name}_{interaction_name}{TransportType.REQUEST.value}** message to receive a
      **{service_name}_{interaction_name}{TransportType.RESPONSE.value}** message over the **pub_{service_name}_{interaction_name}** channel.
  pub_{service_name}_{interaction_name}:
    address: pub_{service_name}_{interaction_name}
    messages:
      {service_name}.{interaction_name}Publish.message:
        $ref: '#/components/messages/{service_name}_{interaction_name}{TransportType.RESPONSE.value}'
    description: >
      Use this channel to receive {service_name} {interaction_name} updates as **{service_name}_{interaction_name}{TransportType.RESPONSE.value}**
      responses.
      """

  def generate_operations_schema(self, service_name: str, interaction_name: str) -> str:
    """
    Generates the YAML string for operations related to a pubsubIP interaction.
    """
    return f"""
operations:
  {service_name}_{interaction_name}Publish:
    action: send
    channel:
      $ref: '#/channels/sub_{service_name}_{interaction_name}'
    messages:
      - $ref: '#/channels/sub_{service_name}_{interaction_name}/messages/{service_name}.{interaction_name}Subscribe.message'
  {service_name}_{interaction_name}Subscribe:
    action: receive
    channel:
      $ref: '#/channels/pub_{service_name}_{interaction_name}'
    messages:
      - $ref: '#/channels/pub_{service_name}_{interaction_name}/messages/{service_name}.{interaction_name}Publish.message'
"""

  def generate_components_messages_schema(self, service_name: str, interaction_name: str) -> str:
    """
    Generates the YAML string for messages related to a pubsubIP interaction.
    """

    return f"""  messages:
    {service_name}_{interaction_name}{TransportType.REQUEST.value}:
      description: {service_name} {interaction_name} request submission
      payload:
        $ref: '#/components/schemas/{service_name}_{interaction_name}Transport{TransportType.REQUEST.value}'
    {service_name}_{interaction_name}{TransportType.RESPONSE.value}:
      description: {service_name} {interaction_name} update response
      payload:
        $ref: '#/components/schemas/{service_name}_{interaction_name}Transport{TransportType.RESPONSE.value}'"""

  def _generate_components_fields_schema(self, field, ns):
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
      composite_type = (area.lower(), service.lower() if service else None, field_type)

    return components_schema_yaml, composite_type


  def _generate_components_field_transaction_id_schema(self):
    # a unique identifier to map the response to the request
    transaction_id_field = f"        transactionId:\n"
    transaction_id_field += f"          type: string\n"
    transaction_id_field += f"          description: A unique identifier to map the response to the request.\n"
    return transaction_id_field


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


  def generate_components_schema(self, mo_asyncapi_src_dir_path: str, service_name: str, interaction_name: str, sub_fields, pub_fields, ns):
    """
    Generates the YAML string for the components section based on the fields.
    """

    components_yaml = f"components:\n  schemas:\n"

    components_yaml +=  f"    {service_name}_{interaction_name}Transport{TransportType.REQUEST.value}:\n"
    components_yaml += "      type: object\n      properties:\n"
    components_yaml += self._generate_components_field_transaction_id_schema()

    for field in sub_fields:
      # there are no composite types for requests
      yaml_str, _ = self._generate_components_fields_schema(field, ns)
      components_yaml += yaml_str

    # keep track of all the composite field types
    # we will have to generate their schema definition later
    composite_type_list = []

    components_yaml +=  f"    {service_name}_{interaction_name}Transport{TransportType.RESPONSE.value}:\n"
    components_yaml += "      type: object\n      properties:\n"
    components_yaml += self._generate_components_field_transaction_id_schema()
    for field in pub_fields:
      yaml_str, composite_type = self._generate_components_fields_schema(field, ns)
      components_yaml += yaml_str

      # collect the composite types for later
      if composite_type:
        composite_type_list.append(composite_type)

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