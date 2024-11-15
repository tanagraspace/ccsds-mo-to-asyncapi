#!/bin/bash

# exit if any command within the script returns a non-zero exit status
set -e

# the --retain flag preserves existing documentation in the docs directory
# it skips regenerating docs for YAML files that already have corresponding AsyncAPI index.html files
# use this flag to avoid overwriting current docs and generate output only for new or missing files
RETAIN_EXISTING=false

# parse arguments for --retain flag
for arg in "$@"; do
  if [[ "$arg" == "--retain" ]]; then
    RETAIN_EXISTING=true
  fi
done

# container version for the AsyncAPI Generator
ASYNCAPI_CONTAINER_TAG="2.5.0"

# input and output folders
INPUT_DIR="yaml"
OUTPUT_DIR="docs"

# function to clear the target directory if --retain flag is not set
clear_target_docs_dir() {
  if [[ "$RETAIN_EXISTING" == false ]]; then
    sudo chown -R $(id -u):$(id -g) "$OUTPUT_DIR"
    rm -rf "$OUTPUT_DIR"/*
    mkdir -p "$OUTPUT_DIR"
  fi
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

# clear the target directory initially if not retaining existing files
clear_target_docs_dir

# iterate over each YAML file in the input directory and subdirectories
for yaml_file in $(find "$INPUT_DIR" -type f -name "*.yaml"); do
  filename=$(basename "$yaml_file")
  # get the relative path from INPUT_DIR to the YAML file directory
  relative_dir=$(dirname "${yaml_file#$INPUT_DIR/}")

  # set the target output directory to match the input directory structure
  target_output_dir="$OUTPUT_DIR/$relative_dir/${filename%.yaml}"

  # skip processing if the target directory exists and contains an index.html file
  if [[ "$RETAIN_EXISTING" == true && -f "$target_output_dir/index.html" ]]; then
    echo "Skipping existing docs for $filename in $relative_dir"
    continue
  fi

  # create the target output directory
  mkdir -p "$target_output_dir"

  echo "Generating docs for $filename in $relative_dir using asyncapi/generator:$ASYNCAPI_CONTAINER_TAG..."
  docker run --rm -v "$(pwd)/$INPUT_DIR:/app/yaml" -v "$(pwd)/$OUTPUT_DIR:/app/docs" \
    asyncapi/generator:$ASYNCAPI_CONTAINER_TAG /app/yaml/$relative_dir/$filename \
    -o /app/docs/$relative_dir/${filename%.yaml} @asyncapi/html-template --force-write
done

# change ownership of the generated docs
sudo chown -R $(id -u):$(id -g) "$OUTPUT_DIR"

# great success generating AsyncAPI docs
echo -e "\nQapla'\n"

# generate index page that lists links to all generated AsyncAPI docs
./gendocs/generate_index.sh
