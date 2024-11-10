#!/bin/bash

# exit if any command within the script returns a non-zero exit status (indicating an error)
set -e

XML_FILE_PATHS=(
  "area001-v003-MAL.xml"
  "area002-v001-COM.xml"
  "area004-v002-Monitor-and-Control.xml"
)

TARGET_SRC_DIR_PATH="mo-asyncapi/src/"

# function to clear the target directory
clear_target_src_dir() {
  rm -rf $TARGET_SRC_DIR_PATH/*
  mkdir -p $TARGET_SRC_DIR_PATH
}

# function to handle errors
on_error() {
  echo "An error occurred. Clearing target directory..."
  clear_target_src_dir
  exit 1
}

# trap errors and call the on_error function
trap on_error ERR

# verbosity
echo -e "\n-------------\nGENERATE CODE\n-------------\n"

# clear the target directory initially
clear_target_src_dir

# run the Python scripts
for XML_FILE_PATH in "${XML_FILE_PATHS[@]}"; do
  python gencode/src/generate_composite_classes.py xml-ccsds-mo-prototypes/$XML_FILE_PATH $TARGET_SRC_DIR_PATH
done
python gencode/src/validator.py $TARGET_SRC_DIR_PATH

echo -e "\nQapla'\n"
