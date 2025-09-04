#!/bin/bash

# build frontend
echo "Operating system"
echo "console.log(process.platform)" | node
echo "Arch"
echo "console.log(process.arch)" | node
echo "Building frontend 🏢"
cd frontend
#rm package-lock.json
npm install
npm run generate
mv dist ../
cd ..

