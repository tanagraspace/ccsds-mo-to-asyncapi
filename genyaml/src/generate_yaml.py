import xml.etree.ElementTree as ET
import os
import re
import sys

from generators.abstract_yaml_generator import AbstractYamlGenerator
from generators.yaml_generator_pubsub import YamlGeneratorPubSub
from generators.yaml_generator_request import YamlGeneratorRequest
from generators.yaml_generator_submit import YamlGeneratorSubmit
from generators.yaml_generator_progress import YamlGeneratorSubmitProgress

from generators.common import InteractionType
import utils

def print_help():
  print("""
    Usage: python generate_yaml.py <xml_file_path> <target_yaml_directory>

    Arguments:
      <xml_file_path>              Path to the XML file containing the data type definitions.
      <target_yaml_directory>      Directory where the generated AsyncAPI YAML files will be saved.

    Options:
      -?, --help                   Show this help message and exit.
    """)


def generate_yaml_components(
  xml_file_path: str,
  mo_asyncapi_src_dir_path: str,
  target_yaml_directory_path: str,
  yaml_generators: list[AbstractYamlGenerator],
  ignores: dict[str, list[str]]
):
  tree = ET.parse(xml_file_path)
  root = tree.getroot()

  # define the namespace based on the XML structure
  ns = {'mal': 'http://www.ccsds.org/schema/ServiceSchema'}

  # find all services within the <area> element
  services = root.findall(".//mal:service", ns)
  service_details = []

  # store all generated yaml in this dictionary
  # the keys are the names of the service
  service_yaml_dict = {}

  # iterate through each service
  for service in services:
    service_name = service.attrib.get('name')
    service_number = service.attrib.get('number')

    # initialize the dictionary that will store generate yaml for this service
    service_yaml_dict[service_name] = {
      "service": None,
      "channels": [],
      "operations": [],
      "components": [],
      "composites": None,
      "messages": [],
    }

    # when processing components we will extract composite type definitions
    # we want to progressibely merge these so that we don't end up with duplicate
    merged_composite_dict = {}

    # TODO: convert to logger debug
    #print(f"Service #{service_number}: {service_name} Service")

    # find all interaction types and capability sets under each service
    capability_sets = []
    for cs in service.findall("mal:capabilitySet", ns):

      # TODO: convert to logger debug
      #print(f"  Capability Set #{cs.attrib.get('number')}")

      interactions = []
      for interaction_type in cs:
        interaction_name = interaction_type.attrib.get('name')

        # extract tag name without the "mal" namespace (e.g. requestIP vs mal:requestIP)
        interaction_type_name = interaction_type.tag.split("}")[1]

        # skip this capability set?
        ignore_interaction = False
        if ignores and ignores.get(service_name):
          if interaction_name in ignores.get(service_name):
            ignore_interaction = True

        # TODO: convert to logger debug
        #print(f"    {interaction_name} (Type: {interaction_type_name})")

        # iterate over each generator and check if it matches the interaction type
        for yaml_gen in yaml_generators:
          # DEBUG TIP: to debug a specific interaction you can add an interaction_name debug filter here or code in a condition (e.g. and interaction_name == "removeAlert")
          if interaction_type_name == yaml_gen.interaction_type and not ignore_interaction:

            # it's possible to have a send element without any fields
            # this just means that the request payload is empty, i.e. {}
            # so we must seperately check if the send element and the field child elements exist
            include_channel_send = False
            send_fields = []

            # the send element
            send_element = interaction_type.find(f".//mal:{yaml_gen.send_element}", ns)
            if send_element is not None:
              # find all the field elements within the send element
              send_fields = send_element.findall(".//mal:field", ns)
              include_channel_send = True

            # the receive fields
            receive_fields = interaction_type.findall(f".//mal:{yaml_gen.receive_element}//mal:field", ns)
            include_channel_receive = True if len(receive_fields) > 0 else False

            # this only applies to PROGRESS interaction type, which has the updates receive channel but also an additiaonl RECEIVE channel for RESPONSE
            # TODO: what about mal:acknowledgement?
            receive_fields_additional = []
            include_channel_receive_additional = False
            if yaml_gen.receive_element_additional:
              receive_fields_additional = interaction_type.findall(f".//mal:{yaml_gen.receive_element_additional}//mal:field", ns)
              include_channel_receive_additional = True if len(receive_fields_additional) > 0 else False

            # the error fields
            err_fields = interaction_type.findall(f".//mal:errors//mal:errorRef", ns)
            include_channel_error = True if len(err_fields) > 0 else False

            yaml_channels_schema = yaml_gen.generate_channels_schema(
              interaction_name=interaction_name,
              include_channel_send=include_channel_send,
              include_channel_receive=include_channel_receive,
              include_channel_receive_additional=include_channel_receive_additional,
              include_channel_error=include_channel_error)

            yaml_operations_schema = yaml_gen.generate_operations_schema(
              interaction_name=interaction_name,
              include_channel_send=include_channel_send,
              include_channel_receive=include_channel_receive,
              include_channel_receive_additional=include_channel_receive_additional,
              include_channel_error=include_channel_error)

            yaml_components_schema, composite_dict = yaml_gen.generate_components_schema(
              mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
              interaction_name=interaction_name,
              send_fields=send_fields,
              receive_fields=receive_fields,
              receive_fields_additional=receive_fields_additional,
              err_fields=err_fields,
              ns=ns)

            # merge composite dictionaries
            merged_composite_dict = utils.merge_dictionaries(merged_composite_dict, composite_dict)

            yaml_components_messages = yaml_gen.generate_components_messages_schema(
              interaction_name=interaction_name,
              include_channel_send=include_channel_send,
              include_channel_receive=include_channel_receive,
              include_channel_receive_additional=include_channel_receive_additional,
              include_channel_error=include_channel_error)

            service_yaml_dict[service_name]["channels"].append(yaml_channels_schema)
            service_yaml_dict[service_name]["operations"].append(yaml_operations_schema)
            service_yaml_dict[service_name]["components"].append(yaml_components_schema)
            service_yaml_dict[service_name]["messages"].append(yaml_components_messages)

            print(f"Generated YAML for the {service_name} Service: {interaction_name} interaction.")

            # once matched, break out of the loop to avoid processing the same interaction with multiple generators
            break

    # finished processing a service

    # check if the processed service actually has interaction types defined
    # skip it if it doesn't
    # TODO: understand what this use case is about and fix accordingly, if needed
    if len(service_yaml_dict[service_name]["channels"]) == 0:
      print(f"Skipping the {service_name} Service: No send and/or receive interactions defined.")
      service_yaml_dict[service_name] = None
    else:
      # collect all composites for this service
      components_composites_yaml = yaml_gen.generate_components_composites(
        mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
        composite_type_dict=merged_composite_dict)
      service_yaml_dict[service_name]["composites"] = components_composites_yaml

      # last but not least, include the service definition
      service_yaml_dict[service_name]["service"] = yaml_gen.generate_service_schema(service_name)

  # retunr the dictionary of generated yaml
  return service_yaml_dict


def main(xml_file_path: str, mo_asyncapi_src_dir_path: str, target_yaml_directory_path: str):

  # generate YAML for the following interaction types: PUBSUB, REQUEST, SUBMIT, and PROGRESS
  # TODO: extend this list tp include INVOKE interaction types
  yaml_generators = [
    YamlGeneratorPubSub(),
    YamlGeneratorRequest(),
    YamlGeneratorSubmit(),
    YamlGeneratorSubmitProgress()
  ]

  # interaction types to ignore
  # the key is the service name and the value is the list of interactions to ignore for that service
  ignores = {'Heartbeat': ['beat']}
  #ignores = None

  # generate yaml definitions for each service
  service_yaml_dict = generate_yaml_components(
    xml_file_path=xml_file_path, 
    mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
    target_yaml_directory_path=target_yaml_directory_path,
    yaml_generators=yaml_generators,
    ignores=ignores)

  # write the service yaml definitions into files
  for service_name, service_yaml_definition_dict in service_yaml_dict.items():
    if service_yaml_definition_dict:
      output_file = os.path.join(target_yaml_directory_path, f"{service_name}.yaml")

      with open(output_file, 'w') as file:
        # service
        file.write(service_yaml_definition_dict["service"])

        # channels
        file.write("channels:\n")
        for channels in service_yaml_definition_dict["channels"]:
          file.write(channels)

        # operations
        file.write("operations:\n")
        for operations in service_yaml_definition_dict["operations"]:
          file.write(operations)

        # components
        file.write("components:\n")
        file.write("  schemas:\n")
        for components in service_yaml_definition_dict["components"]:
          file.write(components)

        # components - composites
        file.write(service_yaml_definition_dict["composites"])

        # components - messages
        file.write("  messages:\n")
        for messages in service_yaml_definition_dict["messages"]:
          file.write(messages)


if __name__ == "__main__":
  if len(sys.argv) != 4 or sys.argv[1] in ('-?', '--help'):
    print_help()
    sys.exit(1)

  # dynamically add `mo-asyncapi/src` to the Python path
  mo_asyncapi_src_dir_path = sys.argv[2]
  sys.path.append(os.path.abspath(mo_asyncapi_src_dir_path))

  # let's generate some YAMLs
  main(xml_file_path=sys.argv[1],
    mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
    target_yaml_directory_path=sys.argv[3])
