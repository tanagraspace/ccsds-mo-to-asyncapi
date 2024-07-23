# Base image
FROM node:18-alpine

# Install asyncapi-generator CLI
RUN npm install -g @asyncapi/generator

# Set the working directory
WORKDIR /app

# Copy the script and necessary files into the container
COPY gendocs/generate_docs.sh /app/generate_docs.sh
COPY yaml /app/yaml

# Ensure the script is executable
RUN chmod +x /app/generate_docs.sh

# Command to run the script when the container starts
ENTRYPOINT ["/app/generate_docs.sh"]
