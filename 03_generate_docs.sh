#!/bin/bash

# exit if any command within the script returns a non-zero exit status (indicating an error)
set -e

INPUT_DIR="yaml"
OUTPUT_DIR="docs"
ASYNCAPI_CONTAINER_TAG="2.5.0"

# function to clear the target directory
clear_target_docs_dir() {
  sudo chown -R $(id -u):$(id -g) "$OUTPUT_DIR"
  rm -rf "$OUTPUT_DIR"/*
  mkdir -p "$OUTPUT_DIR"
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

# iterate over each YAML file in the input directory and subdirectories
for yaml_file in $(find "$INPUT_DIR" -type f -name "*.yaml"); do
  filename=$(basename "$yaml_file")

  # get the relative path from INPUT_DIR to the YAML file directory
  relative_dir=$(dirname "${yaml_file#$INPUT_DIR/}")

  # convert the base filename to a subdirectory structure (e.g., Aggregation-monitorValue -> Aggregation/monitorValue)
  base_filename="${filename%.*}"
  formatted_output_dir=$(echo "$base_filename" | sed -E 's/-/\//')

  # combine OUTPUT_DIR, relative path, and formatted_output_dir for the final output path
  target_output_dir="$OUTPUT_DIR/$relative_dir/$formatted_output_dir"
  mkdir -p "$target_output_dir"

  echo "Generating docs for $filename in $relative_dir using asyncapi/generator:$ASYNCAPI_CONTAINER_TAG..."
  docker run --rm -v "$(pwd)/$INPUT_DIR:/app/yaml" -v "$(pwd)/$OUTPUT_DIR:/app/docs" asyncapi/generator:$ASYNCAPI_CONTAINER_TAG /app/yaml/$relative_dir/$filename -o /app/docs/$relative_dir/$formatted_output_dir @asyncapi/html-template --force-write
done

# change ownership of the generated docs
sudo chown -R $(id -u):$(id -g) "$OUTPUT_DIR"

# great success generating AsyncAPI docs
echo -e "\nQapla'\n"

# generate index page that lists links to all generated AsyncAPI docs
./gendocs/generate_index.sh
