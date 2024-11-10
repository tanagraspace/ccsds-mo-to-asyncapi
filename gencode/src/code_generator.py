from datetime import datetime
import os
from constants import RESERVED_NAMES, TYPE_MAPPING
from utils import to_snake_case, to_camel_case, sanitize_string, find_class_file

def generate_class_code(composite, namespaces: str, version, defined_types: dict[str, str], target_src_code_directory: str, area_name: str) -> str | None:
  class_name = composite.get('name')
  class_description = sanitize_string(composite.get('comment', ''))  # the description is stored in the 'comment' attribute
  fields = []
  imports = set()

  for field in composite.findall('mal:field', namespaces=namespaces):
    name = field.get('name')
    if name in RESERVED_NAMES:
      name += "_"
    type_elem = field.find('mal:type', namespaces=namespaces)
    type_name = type_elem.get('name')
    area = type_elem.get('area')
    service = type_elem.get('service')
    is_list = type_elem.get('list') == 'true'

    full_namespace = None
    if type_name in TYPE_MAPPING:
      field_type, field_format, field_py_type = TYPE_MAPPING[type_name]
    elif area == "MAL":
      field_type, field_format, field_py_type = TYPE_MAPPING.get(type_name, ('string', None, 'str'))
    else:
      #field_type = defined_types.get(type_name, 'object')
      field_type = defined_types.get(type_name)
      if field_type is None:
        print(f"\nWARNING: Could not generate the '{class_name}' class for area '{area}'" +
              (f" and service '{service}'" if service else '') +
              f" because the '{type_name}' field type is undefined. Skipping now to attempt in next iteration.\n")
        return None
      field_format = None
      field_py_type = to_camel_case(to_snake_case(type_name))
      full_namespace = f"{area.lower()}"

      if service:
        full_namespace += f"/{to_snake_case(service)}"

      # find the correct import path for the class
      class_file = find_class_file(target_src_code_directory, field_py_type)
      if class_file:
        module_path = os.path.relpath(class_file, target_src_code_directory).replace(os.sep, '.')
        module_path = module_path[:-3]  # Remove .py extension
        imports.add(f"from {module_path} import {field_py_type}")
      else:
        imports.add(f"from {full_namespace.replace('/','.')}.{to_snake_case(type_name)} import {field_py_type}")

    if is_list:
      field_py_type = f'list[{field_py_type}]'
      field_type = f'array[{field_type}]'

    field_description = sanitize_string(field.get('comment', ''))
    fields.append((name, field_type, field_format, field_py_type, field_description, is_list, area != "MAL", full_namespace))

  timestamp = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')

  class_code = f"\"\"\"\nThis is generated code. Do not modify.\nGenerated on {timestamp}.\n\"\"\"\n\n"
  class_code += "import yaml\n"
  for imp in imports:
    class_code += imp + "\n"
  class_code += "\n"
  class_code += f"class {class_name}():\n"

  # The class constructor
  if len(fields) > 0:
    class_code += "  def __init__(self, {}):\n".format(", ".join([f"{name}: {field_py_type} = None" for name, _, field_format, _, _, _, _, _ in fields]))
    for name, _, _, _, _, _, _, _ in fields:
      class_code += f"    self.{name} = {name}\n"
  class_code += "\n  @classmethod\n"
  class_code += "  def version(cls):\n"
  class_code += f"    return \"{version}\"\n"
  class_code += "\n  @classmethod\n"
  class_code += "  def description(cls):\n"
  class_code += f"    return \"{class_description}\"\n\n"
  class_code += "  def to_json(self):\n"
  class_code += "    return {\n"
  class_code += '      "type": "object"'

  if len(fields) == 0:
    class_code += '\n'
  else:
    class_code += ',\n'
    class_code += '      "properties": {\n'
    for name, field_type, field_format, _, field_description, is_list, is_ref, full_namespace in fields:
      class_code += f'        "{name}": {{\n'
      if is_list:
        class_code += '          "type": "array",\n'
        class_code += '          "items": {\n'
        if is_ref:
          if full_namespace is None:
            class_code += f'            "$ref": "#/components/schemas/{to_camel_case(field_type.split("[")[1].split("]")[0])}",\n'
          else:
            class_code += f'            "$ref": "#/components/schemas/{full_namespace}/{to_camel_case(field_type.split("[")[1].split("]")[0])}",\n'
        else:
          class_code += f'            "type": "{field_type.split("[")[1].split("]")[0]}"\n'
        class_code += '          },\n'
      elif is_ref:
        if full_namespace is None:
          class_code += f'          "$ref": "#/components/schemas/{to_camel_case(field_type)}",\n'
        else:
          class_code += f'          "$ref": "#/components/schemas/{full_namespace}/{to_camel_case(field_type)}",\n'
      else:
        class_code += f'          "type": "{field_type}",\n'
        if field_format:
           class_code += f'          "format": "{field_format}",\n'
      class_code += f'          "description": "{field_description}"\n'
      class_code += '        },\n'
    class_code += '      }\n'
  class_code += '    }\n'

  class_code += "\n  def to_yaml(self):\n"
  class_code += "    return yaml.dump(self.to_json())\n"

  return class_code

def generate_enum_class_code(enum, namespaces, version):
  class_name = enum.get('name')
  description = enum.get('comment', '').replace("'", "\\'").replace("\n", " ").replace("&#xA;", " ")  # The description is stored in the 'comment' attribute
  items = [(item.get('value'), item.get('nvalue')) for item in enum.findall('mal:item', namespaces=namespaces)]
  
  timestamp = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')

  class_code = f"\"\"\"\nThis is generated code. Do not modify.\nGenerated on {timestamp}.\n\"\"\"\n\n"
  class_code += "import yaml\n"
  class_code += "from enum import Enum\n\n"
  class_code += f"class {class_name}(Enum):\n"
  for value, nvalue in items:
    class_code += f"  {value} = {nvalue}\n"
  class_code += "\n"
  class_code += "  @classmethod\n"
  class_code += "  def version(cls):\n"
  class_code += f"    return '{version}'\n\n"
  class_code += "  @classmethod\n"
  class_code += "  def description(cls):\n"
  class_code += f"    return '{description}'\n\n"
  class_code += "  def to_json(self):\n"
  class_code += "    return {\n"
  class_code += '      "type": "string",\n'
  class_code += '      "enum": [\n'
  for value, _ in items:
    class_code += f'        "{value}",\n'
  class_code += '      ],\n'
  class_code += f'      "description": "{description}"\n'
  class_code += "    }\n\n"
  class_code += "  def to_yaml(self):\n"
  class_code += "    return yaml.dump(self.to_json())\n"

  return class_code