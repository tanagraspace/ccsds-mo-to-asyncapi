import os
import importlib
import sys

def validate_imports_and_classes(target_src_code_directory):
  # Add target directory to the system path
  sys.path.insert(0, target_src_code_directory)
  
  for root, _, files in os.walk(target_src_code_directory):
    for file in files:
      if file.endswith(".py"):
        print(F"Validating {os.path.join(root, file)}...")
        module_name = os.path.splitext(file)[0]
        module_path = os.path.relpath(root, target_src_code_directory).replace(os.sep, '.')
        full_module_name = f"{module_path}.{module_name}" if module_path else module_name

        try:
          module = importlib.import_module(full_module_name)
          print(f"  Successfully imported module: {full_module_name}")
        except ModuleNotFoundError as e:
          print(f"  Error in module '{full_module_name}': {e}")
          raise ModuleNotFoundError(f"Error in module '{full_module_name}': {e}")

        try:
          for attr_name in dir(module):
            attr = getattr(module, attr_name)
            if isinstance(attr, type):
              print(f"  Found class '{attr_name}' in module '{full_module_name}'")
        except AttributeError as e:
          print(f"  Error accessing attributes in module '{full_module_name}': {e}")
          raise AttributeError(f"Error accessing attributes in module '{full_module_name}': {e}")

def main():
  print("\nValidate generated code...\n")
  target_src_code_directory = "mo-asyncapi/src"  # Adjust this path as needed
  try:
    validate_imports_and_classes(target_src_code_directory)
    print("\nValidation successful!")
  except Exception as e:
    print(f"A validation error occurred: {e}")
    sys.exit(1)

if __name__ == "__main__":
  main()
