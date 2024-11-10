#!/bin/bash

OUTPUT_DIR="docs"
INDEX_FILE="$OUTPUT_DIR/index.html"

echo -e "\n-------------------\nGENERATE DOCS INDEX\n-------------------\n"

# create an index.html file with Bootstrap and a navbar
echo "<!DOCTYPE html>" > $INDEX_FILE
echo "<html lang=\"en\">" >> $INDEX_FILE
echo "<head>" >> $INDEX_FILE
echo "  <meta charset=\"UTF-8\">" >> $INDEX_FILE
echo "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" >> $INDEX_FILE
echo "  <title>CCSDS MO AsyncAPI Documentation Index</title>" >> $INDEX_FILE
echo "  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">" >> $INDEX_FILE
echo "  <style>" >> $INDEX_FILE
echo "    body, html { height: 100%; display: flex; flex-direction: column; }" >> $INDEX_FILE
echo "    .container { flex: 1; }" >> $INDEX_FILE
echo "    footer { background-color: #f8f9fa; padding: 1rem 0; }" >> $INDEX_FILE
echo "  </style>" >> $INDEX_FILE
echo "</head>" >> $INDEX_FILE
echo "<body>" >> $INDEX_FILE
echo "  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark mb-4\">" >> $INDEX_FILE
echo "    <div class=\"container-fluid\">" >> $INDEX_FILE
echo "      <a class=\"navbar-brand\" href=\"#\">CCSDS MO AsyncAPI Docs</a>" >> $INDEX_FILE
echo "    </div>" >> $INDEX_FILE
echo "  </nav>" >> $INDEX_FILE
echo "  <div class=\"container\">" >> $INDEX_FILE

# keep track of the last service name to close previous service sections properly
last_service_name=""

# iterate over the generated documentation directories
for dir in $(find $OUTPUT_DIR -mindepth 2 -maxdepth 2 -type d); do
  # extract service name and interaction name from the directory path
  service_name=$(basename $(dirname $dir))
  interaction_name=$(basename $dir)

  # start a new card for each service
  if [ "$service_name" != "$last_service_name" ]; then
    # Close the previous card if it's not the first service
    if [ -n "$last_service_name" ]; then
      echo "          </div>" >> $INDEX_FILE  # Close card-body
      echo "        </div>" >> $INDEX_FILE  # Close card
    fi
    echo "    <div class=\"card mb-4\">" >> $INDEX_FILE
    echo "      <div class=\"card-header\">$service_name Service</div>" >> $INDEX_FILE
    echo "      <div class=\"card-body\">" >> $INDEX_FILE
  fi
  # add each interaction as a link in the card text
  echo "        <p class=\"card-text\"><a href=\"$service_name/$interaction_name/index.html\">$interaction_name</a></p>" >> $INDEX_FILE

  last_service_name="$service_name"
done

# close the last card
if [ -n "$last_service_name" ]; then
  echo "          </div>" >> $INDEX_FILE  # Close card-body
  echo "        </div>" >> $INDEX_FILE  # Close card
fi

# add a footer with a GitHub link that is always at the bottom of the page
echo "  </div>" >> $INDEX_FILE  # Close the container div
echo "  <footer class=\"mt-auto text-center\">" >> $INDEX_FILE
echo "    <p><a href=\"https://github.com/tanagraspace/ccsds-mo-to-asyncapi\" target=\"_blank\">" >> $INDEX_FILE
echo "      <img src=\"https://github.githubassets.com/favicons/favicon.svg\" alt=\"GitHub\" style=\"width: 20px; vertical-align: middle;\"></a></p>" >> $INDEX_FILE
echo "  </footer>" >> $INDEX_FILE

# close the HTML tags
echo "  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js\"></script>" >> $INDEX_FILE
echo "</body>" >> $INDEX_FILE
echo "</html>" >> $INDEX_FILE

echo -e "Qapla'\n"