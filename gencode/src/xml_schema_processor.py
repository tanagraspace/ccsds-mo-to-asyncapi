import xml.etree.ElementTree as ET
import re
import os

from utils import to_snake_case, get_namespaces, create_init_py, find_class_file
from code_generator import generate_enum_class_code, generate_class_code

def process_composites(element, xpath: str, namespaces: dict[str, str], version, defined_types: dict[str, str], target_src_code_directory: str, area_name: str, service_name: str = None) -> int:
  warning_counter = 0

  composites = element.findall(xpath, namespaces=namespaces)
  for composite in composites:
    class_name = composite.get('name')

    if class_name not in defined_types:
      class_code = generate_class_code(composite, namespaces, version, defined_types, target_src_code_directory, area_name)
      if class_code is None:
        # composite's class was not generated due to a field type being undefined
        # skip to the next composite, we will attempt to process this one in the next iteration
        warning_counter = warning_counter + 1
        continue

      if service_name:
        target_directory = os.path.join(target_src_code_directory, area_name, service_name)
      else:
        target_directory = os.path.join(target_src_code_directory, area_name)

      os.makedirs(target_directory, exist_ok=True)
      create_init_py(target_directory)  # Create __init__.py
      write_generated_classes([(class_name, class_code)], target_directory)

      # mark class code as a defined type (successfully generated)
      defined_types[class_name] = to_snake_case(class_name)

  return warning_counter


def process_enums(element, xpath: str, namespaces: dict[str, str], version, defined_types: dict[str, str], target_src_code_directory: str, area_name: str, service_name: str = None):
  enums = element.findall(xpath, namespaces=namespaces)
  for enum in enums:
    class_code = generate_enum_class_code(enum, namespaces, version)
    class_name = enum.get('name')

    if class_name not in defined_types:
      if service_name:
        target_directory = os.path.join(target_src_code_directory, area_name, service_name)
      else:
        target_directory = os.path.join(target_src_code_directory, area_name)
        
      os.makedirs(target_directory, exist_ok=True)
      create_init_py(target_directory)  # Create __init__.py
      write_generated_classes([(class_name, class_code)], target_directory)

      # mark class code as a defined type (successfully generated)
      defined_types[class_name] = to_snake_case(class_name)


def process_xml_content(xml_content, defined_types: dict[str, str], target_src_code_directory: str):

  namespaces = get_namespaces(xml_content)
  xml_content.seek(0)  # reset file pointer to start of the file

  tree = ET.parse(xml_content)
  root = tree.getroot()

  area = root.find('./mal:area', namespaces=namespaces)
  if area is None:
    raise ValueError("Error: No area element found in the XML.")

  area_name = area.get('name').lower()
  area_version = area.get('version')
  version = f"{area.get('number')}.{area_version}"

  """
  problem overview:
    - some composite elements have fields that are themselves composites
    - in certain cases, these field composites are defined later in the xml file
    - since the xml is read sequentially, a composite element cannot be processed if its composite field hasn't been defined yet

  solutions considered:
    1. pre-process the entire xml file to create a dependency graph and then process the composites based on that graph
    2. modify the xml to reorder the composite definitions so that dependencies are defined before they are used
    3. implement multiple passes over the xml to progressively resolve all dependencies

  chosen approach:
  we implement solution 3 (multiple passes) because it is straightforward and practical for our needs:
    - option 1 would require significant refactoring to create and manage a dependency graph
    - option 2 involves editing standardized xml files, which is not advisable

  example scenario:
  in the xml file `area004-v002-Monitor-and-Control.xml`:
    - the `ArgumentDefinitionDetails` composite is defined between lines 3,625 and 3,655
    - lines 3,644–3,647 contain a field of type `ConditionalConversion`
    - the `ConditionalConversion` composite itself is only defined later in the xml, between lines 3,666 and 3,679

  by looping over the xml multiple times, we ensure that all composite dependencies are eventually resolved without modifying the original xml structure
  """

  # warning counters
  warning_counter_area_composites = 0
  warning_counter_composites = 0
  warning_counter_total = 100 # this will be overwritten in the loop

  # iteration counter
  iteration_counter = 0

  while warning_counter_total > 0:
    iteration_counter = iteration_counter + 1

    process_enums(
      element=root,
      xpath='./mal:area/mal:dataTypes/mal:enumeration',
      namespaces=namespaces,
      version=version,
      defined_types=defined_types,
      target_src_code_directory=target_src_code_directory,
      area_name=area_name)

    warning_counter_area_composites = process_composites(
      element=root,
      xpath='./mal:area/mal:dataTypes/mal:composite',
      namespaces=namespaces,
      version=version,
      defined_types=defined_types,
      target_src_code_directory=target_src_code_directory,
      area_name=area_name)

    for service in root.findall('./mal:area/mal:service', namespaces=namespaces):
      service_name = service.get('name').lower()

      process_enums(
        element=service,
        xpath='./mal:dataTypes/mal:enumeration',
        namespaces=namespaces,
        version=version,
        defined_types=defined_types,
        target_src_code_directory=target_src_code_directory,
        area_name=area_name,
        service_name=service_name)

      warning_counter_composites = process_composites(
        element=service,
        xpath='./mal:dataTypes/mal:composite',
        namespaces=namespaces,
        version=version,
        defined_types=defined_types,
        target_src_code_directory=target_src_code_directory,
        area_name=area_name,
        service_name=service_name)

    warning_counter_total = warning_counter_area_composites + warning_counter_composites

  print(f"\nRequired iterations to generate classes for all composites: {iteration_counter}")

  return area_name

def write_generated_classes(generated_classes, target_directory):
  for class_name, class_code in generated_classes:
    file_name = to_snake_case(class_name) + ".py"
    file_path = os.path.join(target_directory, file_name)
    with open(file_path, "w") as f:
      f.write(class_code)
    print(f"Generated {file_path}")

def correct_imports(target_src_code_directory):
  for root, _, files in os.walk(target_src_code_directory):
    for file in files:
      if file.endswith(".py"):
        file_path = os.path.join(root, file)
        with open(file_path, "r") as f:
          content = f.read()
        
        # Correct the imports
        corrected_content = re.sub(
          r'from (\w+) import (\w+)',
          lambda match: correct_import_statement(target_src_code_directory, match.group(1), match.group(2)),
          content
        )

        with open(file_path, "w") as f:
          f.write(corrected_content)

def correct_import_statement(target_src_code_directory, module_name, class_name):
  class_file = find_class_file(target_src_code_directory, class_name)
  if class_file:
    module_path = os.path.relpath(class_file, target_src_code_directory).replace(os.sep, '.')
    module_path = module_path[:-3]  # Remove .py extension
    return f"from {module_path} import {class_name}"
  return f"from {module_name} import {class_name}"
