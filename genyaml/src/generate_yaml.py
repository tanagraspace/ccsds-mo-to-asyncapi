import xml.etree.ElementTree as ET
import os
import re
import sys

from generators.abstract_yaml_generator import AbstractYamlGenerator
from generators.yaml_generator_pubsub import YamlGeneratorPubSub
from generators.common import InteractionType

def print_help():
  print("""
    Usage: python generate_yaml.py <xml_file_path> <target_yaml_directory>

    Arguments:
      <xml_file_path>              Path to the XML file containing the data type definitions.
      <target_yaml_directory>      Directory where the generated AsyncAPI YAML files will be saved.

    Options:
      -?, --help                   Show this help message and exit.
    """)


def list_services_with_capabilities_and_interactions_in_mc_xml(
  xml_file_path: str,
  mo_asyncapi_src_dir_path: str,
  target_yaml_directory_path: str,
  yaml_generators: list[AbstractYamlGenerator]
):
  tree = ET.parse(xml_file_path)
  root = tree.getroot()

  # define the namespace based on the XML structure
  ns = {'mal': 'http://www.ccsds.org/schema/ServiceSchema'}

  # find all services within the <area> element
  services = root.findall(".//mal:service", ns)
  service_details = []

  # iterate through each service
  for service in services:
    service_name = service.attrib.get('name')
    service_number = service.attrib.get('number')

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
        interaction_type_name = interaction_type.tag.split("}")[1]  # extract tag name without namespace

        # TODO: convert to logger debug
        #print(f"    {interaction_name} (Type: {interaction_type_name})")

        # iterate over each generator and check if it matches the interaction type
        for yaml_gen in yaml_generators:
          if interaction_type_name == yaml_gen.interaction_type:
            yaml_service_schema = yaml_gen.generate_service_schema(service_name, interaction_name)
            yaml_channels_schema = yaml_gen.generate_channels_schema(service_name ,interaction_name)
            yaml_operations_schema = yaml_gen.generate_operations_schema(service_name, interaction_name)

            # for fields, generate components
            sub_fields = interaction_type.findall('.//mal:subscriptionKeys//mal:field', ns)
            pub_fields = interaction_type.findall('.//mal:publishNotify//mal:field', ns)
            yaml_components_schema = yaml_gen.generate_components_schema(
              mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
              service_name=service_name,
              interaction_name=interaction_name,
              sub_fields=sub_fields,
              pub_fields=pub_fields,
              ns=ns)
            yaml_components_messages = yaml_gen.generate_components_messages_schema(service_name, interaction_name)

            # path to the output file
            output_file = os.path.join(target_yaml_directory_path, f"{service_name}-{interaction_name}.yaml")

            # concatenate all the YAML strings and write them into a single file
            with open(output_file, 'w') as file:
              file.write(yaml_service_schema)
              file.write(yaml_channels_schema)
              file.write(yaml_operations_schema)
              file.write(yaml_components_schema)
              file.write(yaml_components_messages)

              # TODO: convert to logger debug
              print(f"Generated YAML for the {service_name} Service's {interaction_name} interaction.")

            # once matched, break out of the loop to avoid processing the same interaction with multiple generators
            break

        interactions.append((interaction_name, interaction_type_name))

      capability_sets.append({
        'capability_set_number': cs.attrib.get('number'),
        'interactions': interactions
      })

    # append service name, number, and capability sets with interactions
    service_details.append({
      'service_name': service_name,
      'service_number': service_number,
      'capability_sets': capability_sets
    })

  return service_details


def main(xml_file_path: str, mo_asyncapi_src_dir_path: str, target_yaml_directory_path: str):
  
  # generate YAML for the pubish-subscribe services only (pubsubIP)
  # TODO: extend this list once other generators are implemented. i.e. requestIP, submitIP, and progressIP
  yaml_generators = [YamlGeneratorPubSub()]
  
  # get the list of services with capability sets, interaction names, and types
  mc_services_with_capabilities_and_interactions = list_services_with_capabilities_and_interactions_in_mc_xml(
    xml_file_path=xml_file_path, 
    mo_asyncapi_src_dir_path=mo_asyncapi_src_dir_path,
    target_yaml_directory_path=target_yaml_directory_path,
    yaml_generators=yaml_generators)


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
