var permissionsToRemove = [];

var activitiesToAdjust = [
	"com.exxbrain.android.biometric.DeviceCredentialHandlerActivity",
	"de.niklasmerz.cordova.biometric.BiometricActivity",
	"com.gae.scaffolder.plugin.FCMPluginActivity",
	"com.gae.scaffolder.plugin.MyFirebaseMessagingService",
	"androidx.biometric.DeviceCredentialHandlerActivity",
	"com.google.firebase.iid.FirebaseInstanceIdReceiver",
	"nl.xservices.plugins.ShareChooserPendingIntent"
];


const fs = require('fs-extra');
var et = require('elementtree');
var path = require('path');
var rootdir = "";
var manifestFile = path.join(rootdir, "platforms/android/app/src/main/AndroidManifest.xml");
var tempDir = path.join(rootdir, "tempManifest");
var manifestFileBackup = path.join(tempDir, "/AndroidManifest.xml");

// backup the AndroidManifest.xml before modifying it.
try {
	if (!fs.existsSync(tempDir)) {
		fs.mkdirSync(tempDir);
	}
} catch (err) {
	console.log('[Azentio] >>> error creating temp folder ' + err);
	throw err;
}

fs.copyFile(manifestFile, manifestFileBackup, (err) => {
	if (err) {
		console.log('[Azentio] >>> error copying AndroidManifest.xml ' + err);
		throw err;
	}
	console.log('[Azentio] >>> AndroidManifest.xml was copied to /tempManifest/AndroidManifest.xml');
});

fs.readFile(manifestFile, "utf8", function (err, data) {
	if (err) {
		console.log('[Azentio] >>> error  ' + err);
		throw err;
	}

	var doc = new et.ElementTree(et.XML(data));
	var root = doc.getroot();
	// console.log('[Azentio] >>> manifest root: ' + data);
	// add/replace the attribute adnroid:exported to false for all the nodes in the list.
	for (var a = 0; a < activitiesToAdjust.length; a++) {
		var node = root.find(".//application/*/[@android:name='" + activitiesToAdjust[a] + "']");
		if (node) {
			node.attrib['android:exported'] = 'false';
			console.log('[Azentio] >>> changing android:exported to false for: ' + activitiesToAdjust[a]);
		}
	}

	var nodeList = root.findall("*/[@android:name='android.hardware.camera']");
	if (nodeList && nodeList.length >= 1) {
		console.log('[Azentio] >>> Changed android:name android.hardware.camera to required true');
		nodeList[0].attrib['android:required'] = 'true';
		for (i = 1; i < nodeList.length; i++) {
			console.log('[Azentio] >>> Removed Duplicate android:name android.hardware.camera');
			root.remove(nodeList[i]);
		}
	}


	fs.writeFileSync(manifestFile, doc.write({ indent: 4 }), 'utf-8', function (err) {
		if (err) {
			console.log('[Azentio] >>> error in writting xml file: ' + err);
			throw err;
		}
	});

});
