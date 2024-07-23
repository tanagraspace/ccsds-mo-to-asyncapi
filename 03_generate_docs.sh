#!/bin/bash

# exit if any command within the script returns a non-zero exit status (indicating an error)
set -e

INPUT_DIR="yaml"
OUTPUT_DIR="docs"
ASYNCAPI_CONTAINER_TAG="2.5.0"

# function to clear the target directory
clear_target_docs_dir() {
  sudo chown -R $(id -u):$(id -g) $OUTPUT_DIR
  rm -rf $OUTPUT_DIR/*
  mkdir -p $OUTPUT_DIR
}

# trap errors and call the on_error function
on_error() {
  echo "An error occurred. Clearing target directory..."
  clear_target_docs_dir
  exit 1
}

trap on_error ERR

# verbosity
echo -e "\n-------------\nGENERATE DOCS\n-------------\n"

# clear the target directory initially
clear_target_docs_dir

# iterate over each YAML file in the input directory
for yaml_file in $INPUT_DIR/*.yaml; do
  filename=$(basename "$yaml_file")

  # remove extension for the output directory name
  base_filename="${filename%.*}"

  # convert the base filename to a subdirectory structure (e.g., Aggregation-monitorValue -> Aggregation/monitorValue)
  formatted_output_dir=$(echo "$base_filename" | sed -E 's/-/\//')

  echo "Generating docs for $filename using asyncapi/generator:$ASYNCAPI_CONTAINER_TAG..."
  docker run --rm -v "$(pwd)/yaml:/app/yaml" -v "$(pwd)/docs:/app/docs" asyncapi/generator:$ASYNCAPI_CONTAINER_TAG /app/yaml/$filename -o /app/docs/$formatted_output_dir @asyncapi/html-template --force-write

done

# change ownership of the generated docs
sudo chown -R $(id -u):$(id -g) $OUTPUT_DIR

# great success generting AsyncAPI docs
echo -e "\nQapla'\n"

# generate index page that lists links to all generated AsyncAPI docs
./gendocs/generate_index.sh 
