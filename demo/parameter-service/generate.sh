#!/bin/sh

# Disable analytics data collection
asyncapi config analytics --disable

# Generate the service code
asyncapi generate fromTemplate /app/Parameter.yaml @asyncapi/nodejs-template -o /app/service -p server=production
