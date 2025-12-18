const fs = require('fs-extra');
var path = require('path');
var rootdir = "";
var manifestFile = path.join(rootdir, "platforms/android/app/src/main/AndroidManifest.xml");
var tempDir = path.join(rootdir, "tempManifest");
var manifestFileBackup = path.join(tempDir, "/AndroidManifest.xml");
// return the backed up AndroidManifest.xml to its original place (overwrite the modified one)
fs.copyFileSync(manifestFileBackup, manifestFile);
console.log('[Azentio] >>> AndroidManifest.xml was copied to ' + manifestFile);

//delete the temp folder
fs.rmdirSync(tempDir, { recursive: true });