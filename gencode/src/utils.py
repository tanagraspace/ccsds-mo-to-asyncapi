import xml.etree.ElementTree as ET
import re
import os

def to_snake_case(name: str) -> str:
  s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
  return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

# FIXME: camel case is not really representative of what's happening here
# it's converting from 'my_class' to 'MyClass' and not actual camel case 'myClass'
# the conversion is working as expected, it's just the term camel_case that is incorrect
def to_camel_case(name: str) -> str:
  return ''.join(word.capitalize() for word in name.split('_'))

def sanitize_string(the_string: str):
  return the_string.replace('"', '\\"').replace("\n", " ").replace("&#xA;", " ")

def get_namespaces(xml_content) -> dict[str, str]:
  events = "start", "start-ns"
  namespaces = {}
  for event, elem in ET.iterparse(xml_content, events):
    if event == "start-ns":
      prefix, uri = elem
      namespaces[prefix] = uri
    elif event == "start":
      break
  return namespaces

def find_class_file(target_src_code_directory: str, class_name: str) -> str | None:
  for root, _, files in os.walk(target_src_code_directory):
    for file in files:
      if file.endswith(".py"):
        file_path = os.path.join(root, file)
        with open(file_path, "r") as f:
          if f"class {class_name}(" in f.read():
            return file_path
  return None

def find_classes(target_src_code_directory: str) -> dict[str, str]:
  class_dict = {}
  for root, _, files in os.walk(target_src_code_directory):
    for file in files:
      if file.endswith(".py") and file != "__init__.py":
        class_name_snakecase = file[:-3]
        class_name_camelcase = to_camel_case(class_name_snakecase)
        class_dict[class_name_camelcase] = class_name_snakecase
  return class_dict

def create_init_py(directory: str):
  init_file = os.path.join(directory, "__init__.py")
  if not os.path.exists(init_file):
    with open(init_file, 'w') as f:
      f.write("# This file marks the directory as a Python package\n")
