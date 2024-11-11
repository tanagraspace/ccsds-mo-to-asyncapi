#!/bin/bash

# exit if any command within the script returns a non-zero exit status (indicating an error)
set -e

XML_FILE_PATHS=(
  "area004-v002-Monitor-and-Control.xml"
)

SRC_DIR_PATH="mo-asyncapi/src"
TARGET_YAML_DIR_PATH="yaml"

# function to clear the target directory
clear_target_yaml_dir() {
  rm -rf $TARGET_YAML_DIR_PATH/*
  mkdir -p $TARGET_YAML_DIR_PATH
}

# function to handle errors
on_error() {
  echo "An error occurred. Clearing target directory..."
  clear_target_yaml_dir
  exit 1
}

# trap errors and call the on_error function
trap on_error ERR

# verbosity
echo -e "\n-------------\nGENERATE YAML\n-------------\n"

# clear the target directory initially
clear_target_yaml_dir

# run the Python scripts
for XML_FILE_PATH in "${XML_FILE_PATHS[@]}"; do
  python genyaml/src/generate_yaml.py xml-ccsds-mo-prototypes/$XML_FILE_PATH $SRC_DIR_PATH $TARGET_YAML_DIR_PATH
done

echo -e "\nQapla'\n"
