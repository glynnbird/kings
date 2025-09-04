#!/bin/bash

# build frontend
echo "Operating system"
echo $OSTYPE
echo "Arch"
uname -p
echo "Building frontend 🏢"
cd frontend
rm package-lock.json
npm install
npm run generate
mv dist ../
cd ..

