#!/bin/bash

OUTPUT_DIR="docs"
INDEX_FILE="$OUTPUT_DIR/index.html"

echo -e "\n-------------------\nGENERATE DOCS INDEX\n-------------------\n"

# Create an index.html file with Bootstrap, a navbar, and vertical pills layout
echo "<!DOCTYPE html>" > $INDEX_FILE
echo "<html lang=\"en\">" >> $INDEX_FILE
echo "<head>" >> $INDEX_FILE
echo "  <meta charset=\"UTF-8\">" >> $INDEX_FILE
echo "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" >> $INDEX_FILE
echo "  <title>CCSDS MO AsyncAPI Documentation Index</title>" >> $INDEX_FILE
echo "  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">" >> $INDEX_FILE
echo "  <style>" >> $INDEX_FILE
echo "    body, html { height: 100%; font-family: 'Courier New', Courier, monospace; display: flex; flex-direction: column; }" >> $INDEX_FILE
echo "    .navbar, .footer { background-color: #343a40; color: white; }" >> $INDEX_FILE
echo "    .container-fluid { flex: 1; display: flex; }" >> $INDEX_FILE
echo "    .sidebar { width: 250px; padding-top: 1rem; }" >> $INDEX_FILE
echo "    .sidebar .nav-link { color: #495057; margin-bottom: 0.5rem; }" >> $INDEX_FILE
echo "    .sidebar .nav-link.active { background-color: #6c757d; }" >> $INDEX_FILE
echo "    .main-content { flex: 1; padding: 2rem; }" >> $INDEX_FILE
echo "    .card { width: 100%; }" >> $INDEX_FILE
echo "    .footer { background-color: #343a40; color: white; padding: 1rem 0; text-align: center; width: 100%; }" >> $INDEX_FILE
echo "    .github-icon { color: white; }" >> $INDEX_FILE
echo "  </style>" >> $INDEX_FILE
echo "</head>" >> $INDEX_FILE
echo "<body>" >> $INDEX_FILE

# Navbar
echo "  <nav class=\"navbar navbar-expand-lg navbar-dark\">" >> $INDEX_FILE
echo "    <div class=\"container-fluid\">" >> $INDEX_FILE
echo "      <a class=\"navbar-brand\" href=\"#\">CCSDS MO AsyncAPI Docs</a>" >> $INDEX_FILE
echo "    </div>" >> $INDEX_FILE
echo "  </nav>" >> $INDEX_FILE

# Content Area
echo "  <div class=\"container-fluid\">" >> $INDEX_FILE
echo "    <div class=\"d-flex align-items-start\" style=\"width:100%\">" >> $INDEX_FILE

# Generate vertical pills navigation for each Area
echo "      <div class=\"nav flex-column nav-pills me-3 sidebar\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">" >> $INDEX_FILE

# Collect Area and Service data
declare -A area_services

for index_file in $(find "$OUTPUT_DIR" -type f -name "index.html" ! -path "$OUTPUT_DIR/index.html"); do
  relative_path="${index_file#$OUTPUT_DIR/}"
  area=$(echo "$relative_path" | cut -d'/' -f1)
  service_name=$(echo "$relative_path" | cut -d'/' -f2)
  interaction_name=$(echo "$relative_path" | cut -d'/' -f3)
  display_area=$(echo "$area" | sed 's/-/ /g')
  area_services["$display_area"]+="$service_name:$interaction_name "
done

# Create pill buttons for each Area
first_area=true
for area in "${!area_services[@]}"; do
  area_id=$(echo "$area" | sed 's/ /-/g')  # create a safe ID for the area
  active_class=""
  if [ "$first_area" = true ]; then
    active_class="active"
    first_area=false
  fi
  echo "        <button class=\"nav-link $active_class\" id=\"v-pills-$area_id-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-$area_id\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-$area_id\" aria-selected=\"true\">$area</button>" >> $INDEX_FILE
done

echo "      </div>" >> $INDEX_FILE

# Main Content Area
echo "      <div class=\"tab-content main-content\" id=\"v-pills-tabContent\">" >> $INDEX_FILE

# Create content sections for each Area with Services and Interactions
first_area=true
for area in "${!area_services[@]}"; do
  area_id=$(echo "$area" | sed 's/ /-/g')
  active_class=""
  if [ "$first_area" = true ]; then
    active_class="show active"
    first_area=false
  fi
  echo "        <div class=\"tab-pane fade $active_class\" id=\"v-pills-$area_id\" role=\"tabpanel\" aria-labelledby=\"v-pills-$area_id-tab\">" >> $INDEX_FILE
  echo "          <h1>$area</h1>" >> $INDEX_FILE

  services_interactions=(${area_services["$area"]})
  current_service=""
  for entry in "${services_interactions[@]}"; do
    service="${entry%%:*}"
    interaction="${entry##*:}"
    if [ "$service" != "$current_service" ]; then
      if [ -n "$current_service" ]; then
        echo "            </div>" >> $INDEX_FILE
        echo "          </div>" >> $INDEX_FILE
      fi
      echo "          <div class=\"card mb-4\">" >> $INDEX_FILE
      echo "            <div class=\"card-header\">$service Service</div>" >> $INDEX_FILE
      echo "            <div class=\"card-body\">" >> $INDEX_FILE
      current_service="$service"
    fi
    echo "              <p class=\"card-text\"><a href=\"${area// /-}/$service/$interaction/index.html\">$interaction</a></p>" >> $INDEX_FILE
  done

  if [ -n "$current_service" ]; then
    echo "            </div>" >> $INDEX_FILE
    echo "          </div>" >> $INDEX_FILE
  fi

  echo "        </div>" >> $INDEX_FILE
done

# Close content and sidebar
echo "      </div>" >> $INDEX_FILE
echo "    </div>" >> $INDEX_FILE
echo "  </div>" >> $INDEX_FILE

# Footer with GitHub Bootstrap Icon
echo "  <footer class=\"footer mt-auto\">" >> $INDEX_FILE
echo "    <a href=\"https://github.com/tanagraspace/ccsds-mo-to-asyncapi\" target=\"_blank\" class=\"github-icon\">" >> $INDEX_FILE
echo "      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-github\" viewBox=\"0 0 16 16\">" >> $INDEX_FILE
echo "        <path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.68 7.68 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/>" >> $INDEX_FILE
echo "      </svg></a>" >> $INDEX_FILE
echo "  </footer>" >> $INDEX_FILE

# Close HTML
echo "  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js\"></script>" >> $INDEX_FILE
echo "</body>" >> $INDEX_FILE
echo "</html>" >> $INDEX_FILE

echo -e "Qapla'\n"
