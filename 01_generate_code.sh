#!/bin/bash

# exit if any command within the script returns a non-zero exit status (indicating an error)
set -e

TARGET_SRC_DIR_PATH="mo-asyncapi/src/"
XML_MAL_FILE_PATH="xml-ccsds-mo-prototypes/area001-v003-MAL.xml"
XML_COM_FILE_PATH="xml-ccsds-mo-prototypes/area002-v001-COM.xml"
XML_MC_FILE_PATH="xml-ccsds-mo-prototypes/area004-v002-Monitor-and-Control.xml"

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
python gencode/src/generate_composite_classes.py $XML_MAL_FILE_PATH $TARGET_SRC_DIR_PATH
python gencode/src/generate_composite_classes.py $XML_COM_FILE_PATH $TARGET_SRC_DIR_PATH
python gencode/src/generate_composite_classes.py $XML_MC_FILE_PATH $TARGET_SRC_DIR_PATH
python gencode/src/validator.py $TARGET_SRC_DIR_PATH

echo -e "\nQapla'\n"
