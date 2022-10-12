#!bin/bash

if [[ $# -eq 0 ]]; then
  env=""
else
  env="-e $1"
fi

# cmd="platform ssh $env -A edit 'cd /app/volume/root && git pull && npm run build:packages'"
platform ssh $env -A edit 'cd /app/volume/root && git pull && npm run build:packages'
