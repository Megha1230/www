console.log('[Azentio] >>> Xcode project script loaded');
try {

    var APP_NAME = process.env.CI_APP_NAME;
    var NATIVE_CONFIG = process.env.NATIVE_CONFIG;
    if (typeof NATIVE_CONFIG !== undefined && NATIVE_CONFIG != '') {
        var nativeConfigObj = JSON.parse(NATIVE_CONFIG);
        if (nativeConfigObj && nativeConfigObj.base && nativeConfigObj.base.name) {
            APP_NAME = nativeConfigObj.base.name;
        }
    }
    console.log('[Azentio] >>> APP_NAME = ' + APP_NAME);

    var fs = require('fs');
    var projectPath = 'platforms/ios/' + APP_NAME + '.xcodeproj/project.pbxproj';
    var xcode = require('xcode');
    var proj = xcode.project(projectPath);

    proj.parse((err) => {
        console.log('[Azentio] Xcode project script started');
        /*  Add Crashlytics Run Command ******************************************************** */
        var scriptName = 'PathSolutions Crashlytics Run';
        var buildPhases = proj.getPBXObject('PBXShellScriptBuildPhase');
        if (JSON.stringify(buildPhases).match(scriptName)) {
            console.log('[Azentio] Xcode project not updated - ' + scriptName + ' already exists')
        } else {
            var options = {
                shellPath: '/bin/sh',
                shellScript: '"${PODS_ROOT}/FirebaseCrashlytics/run"',
                inputPaths: ['"$(SRCROOT)/$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)"']
            };
            proj.addBuildPhase([], 'PBXShellScriptBuildPhase', scriptName, proj.getFirstTarget().uuid, options);

            fs.writeFileSync(projectPath, proj.writeSync());
            console.log('[Azentio] Xcode project updated - added ' + scriptName);
        }

        /*  Add Crashlytics upload DYSM Command ******************************************************** */
        var scriptName = 'PathSolutions Crashlytics DYSM';
        var buildPhases = proj.getPBXObject('PBXShellScriptBuildPhase');
        if (JSON.stringify(buildPhases).match(scriptName)) {
            console.log('[Azentio] Xcode project not updated - ' + scriptName + ' already exists')
        } else {
            var options = {
                shellPath: '/bin/sh',
                shellScript: '"${PODS_ROOT}/FirebaseCrashlytics/upload-symbols" -gsp "${PROJECT_DIR}/' + APP_NAME + '/Resources/GoogleService-Info.plist" -p ios "${DWARF_DSYM_FOLDER_PATH}/${DWARF_DSYM_FILE_NAME}"'
            };
            proj.addBuildPhase([], 'PBXShellScriptBuildPhase', scriptName, proj.getFirstTarget().uuid, options);

            fs.writeFileSync(projectPath, proj.writeSync());
            console.log('[Azentio] Xcode project updated - added ' + scriptName);
        }

    });

} catch (err) {
    console.log('[Azentio]>>> error happened during adding Xcode scripts....');
    console.error(err);
    throw (err);
}