#!/bin/bash

# exit if any command within the script returns a non-zero exit status (indicating an error)
set -e

# function to handle errors
on_error() {
  echo "An error occurred."
  exit 1
}

# trap errors and call the on_error function
trap on_error ERR

# check if the virtual environment folder exists
if [ ! -d "venv" ]; then
  echo "Creating virtual environment..."
  python3 -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt
fi

# check if a virtual environment is already active
if [ -z "$VIRTUAL_ENV" ]; then
  echo "Activating virtual environment..."
  source venv/bin/activate
fi

# generate code as well as the yaml and docs for AsyncAPI
./01_generate_code.sh
./02_generate_yaml.sh
./03_generate_docs.sh
