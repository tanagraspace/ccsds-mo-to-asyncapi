import yaml
import re
import os
import sys

import utils
import xml_schema_processor


def print_help():
  print("""
    Usage: python generate_composite_classes.py <xml_file_path> <target_src_code_directory>
    
    Arguments:
      <xml_file_path>              Path to the XML file containing the data type definitions.
      <target_src_code_directory>  Directory where the generated Python files will be saved.
    
    Options:
      -?, --help                   Show this help message and exit.
    """)

def main(xml_file_path: str, target_src_code_directory: str):
  if not os.path.isfile(xml_file_path):
    print(f"Error: The file '{xml_file_path}' does not exist.")
    sys.exit(1)

  if not os.path.isdir(target_src_code_directory):
    print(f"Error: The directory '{target_src_code_directory}' does not exist.")
    sys.exit(1)

  # fetch classes that have already been generated to represent composite types
  defined_types = utils.find_classes(target_src_code_directory)

  print(f"\nGenerate code for {xml_file_path}...\n")
  with open(xml_file_path, 'r') as xml_content:
    try:
      area_name = xml_schema_processor.process_xml_content(xml_content, defined_types, target_src_code_directory)

      # handle global types and enums
      target_directory = os.path.join(target_src_code_directory, area_name)
      os.makedirs(target_directory, exist_ok=True)
      utils.create_init_py(target_directory)  # create __init__.py

      # correct the imports after all files are written
      xml_schema_processor.correct_imports(target_src_code_directory)

    except Exception as e:
      if 'target_directory' in locals():
        import shutil
        shutil.rmtree(target_directory)
      print(f"Error: {e}")
      sys.exit(1)

if __name__ == "__main__":
  if len(sys.argv) != 3 or sys.argv[1] in ('-?', '--help'):
    print(len(sys.argv))
    print_help()
    sys.exit(1)

  main(xml_file_path=sys.argv[1], target_src_code_directory=sys.argv[2])
