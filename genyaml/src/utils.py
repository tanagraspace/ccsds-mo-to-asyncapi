import os
import re
import yaml
import importlib.util
from enum import Enum

from constants import SCHEMA_NAMESPACE

def to_snake_case(name: str) -> str:
  """
  Converts CamelCase to snake_case.
  """
  s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
  return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

def prefix_lines(text: str, prefix: str) -> str:
  return "\n".join([prefix + line for line in text.splitlines()])

def extract_composite_types_from_ref(yaml_string: str):
  composite_types = []

  # parse the YAML string into a Python dictionary
  yaml_dict = yaml.safe_load(yaml_string)

  # recursive function to search for "$ref" keys
  def find_ref_keys(obj):
    if isinstance(obj, dict):
      for key, value in obj.items():
        if key == "$ref" and isinstance(value, str):
          # remove the SCHEMA_NAMESPACE part and split the rest
          parts = value.replace(f"{SCHEMA_NAMESPACE}/", "").split("/")
          # check the length of the split parts to correctly assign values
          if len(parts) == 2:
            # if two parts, the middle value is None
            composite_types.append((parts[0], None, parts[1]))
          elif len(parts) == 3:
            # if three parts, the middle value is used
            composite_types.append((parts[0], parts[1], parts[2]))
          else:
            # unexpected value
            raise ValueError(f"Unexpected $ref value: {value}")
        else:
          find_ref_keys(value)
    elif isinstance(obj, list):
      for item in obj:
        find_ref_keys(item)

  # start searching from the top-level dictionary
  find_ref_keys(yaml_dict)

  # return list of composite types
  return composite_types

def convert_composite_type_list_to_dict(composite_type_list: list[(str, str, str)]) -> dict:
  # dictionary to hold the structure
  composite_type_dict = {}

  # process each tuple
  for composite_type in composite_type_list:
    namespace, subcategory, object_type = composite_type

    # initialize the dictionary if the namespace doesn't exist
    if namespace not in composite_type_dict:
      composite_type_dict[namespace] = {}

    # if there's a subcategory
    if subcategory:
      if subcategory not in composite_type_dict[namespace]:
        composite_type_dict[namespace][subcategory] = set()
      composite_type_dict[namespace][subcategory].add(object_type)
    else:
      if None not in composite_type_dict[namespace]:
        composite_type_dict[namespace][None] = set()
      composite_type_dict[namespace][None].add(object_type)
  return composite_type_dict

def count_composites(composite_type_dict: dict):
  return sum(len(sub_dict) for key, sub_dict in composite_type_dict.items() for sub_key, sub_dict in (sub_dict.items() if sub_dict else [(None, sub_dict)]))

def transform_ref_list(ref_list):
  transformed = []
  for item in ref_list:
    parts = item.split('/')
    if len(parts) == 2: # handle cases with two parts (e.g., 'com/ObjectKey')
      transformed.append((parts[0], None, parts[1]))
    elif len(parts) == 3: # handle cases with three parts (e.g., 'mc/parameter/ParameterValue')
      transformed.append((parts[0], parts[1], parts[2]))
  return transformed

def load_class_and_invoke_to_yaml(mo_asyncapi_src_dir_path: str, area: str, service: str, class_name: str) -> str:
    """
    Dynamically loads a class from a Python module and invokes the `to_yaml` method.
    """
    # convert the class name (module name) from CamelCase to snake_case
    snake_case_module_name = to_snake_case(class_name)

    # construct the full path to the module
    module_filename = snake_case_module_name + ".py"

    module_path = None
    if service:
      module_path = os.path.join(f"{mo_asyncapi_src_dir_path}/{area}/{service}" , module_filename)
    else:
      module_path = os.path.join(f"{mo_asyncapi_src_dir_path}/{area}" , module_filename)

    # check if the file exists
    if not os.path.exists(module_path):
      raise FileNotFoundError(f"No such file or directory: {module_path}")
    
    # load the module dynamically
    spec = importlib.util.spec_from_file_location(class_name, module_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    
    # get the class dynamically
    klass = getattr(module, class_name)

    # check if the class is an Enum
    if issubclass(klass, Enum):
      # call the `to_yaml` method directly on a member (e.g., the first member)
      # or select the appropriate enum member
      instance = list(klass)[0]
      return instance.to_yaml()
    else:
      # instantiate the class and call the `to_yaml` method
      instance = klass()
      return instance.to_yaml()

def merge_dictionaries(dict1, dict2):
  merged_dict = {}
  for key in dict1.keys() | dict2.keys():
    if key in dict1 and key in dict2:
      if isinstance(dict1[key], dict) and isinstance(dict2[key], dict):
        # recursively merge if both values are dictionaries
        merged_dict[key] = merge_dictionaries(dict1[key], dict2[key])
      elif isinstance(dict1[key], set) and isinstance(dict2[key], set):
        # union the sets if both values are sets
        merged_dict[key] = dict1[key] | dict2[key]
      else:
        # raise an error if types are incompatible
        raise TypeError(f"Incompatible types for key '{key}': {type(dict1[key])} vs {type(dict2[key])}")
    else:
      # if the key only exists in one of the dictionaries
      merged_dict[key] = dict1.get(key, dict2.get(key))
  return merged_dict
