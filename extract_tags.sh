#!/bin/bash

rm -f import/*.json

# generate json file
for file in import/*.{flac,m4a}; do
  if [ -f "$file" ]; then
    ffprobe "$file" -show_format -of json >> "$file".json
  fi
done
