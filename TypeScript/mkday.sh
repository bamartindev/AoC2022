#!/bin/bash

if [ -z "$1" ] ; then
  echo "No directory name supplied, please specify directory name"
  exit 1
fi

full_path="src/$1"

mkdir $full_path
cp "template/index.ts" "$full_path/index.ts"
touch "$full_path/input.txt"
touch "$full_path/test-input.txt"