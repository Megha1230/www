#!/bin/sh

#update submodules
#git submodule update --remote --merge

#remove www.zip
echo "[Azentio] >>> Node version: "
node -v
rm ./www/www.zip

#copy hook script from build scripts to root folder
cp ./www/build-scripts/build-hooks/*.js ./

#copy assets folder into www folder
cp -R ./assets/. ./www/assets/
#copy certificates folder into www folder
cp -R ./certificates/. ./www/certificates/
#Makki- AZDB-10980 - Check If Webview urls needs to be injected
node ./www/build-scripts/inject-csp.mjs
#read the path version part from file (found under www) and combine it with assets version and update it in ps-config.json
node ./www/build-scripts/ps-custom-build.mjs
#delete .pem files from the certificate folder in www folder 
rm -rf ./www/certificates/*.pem