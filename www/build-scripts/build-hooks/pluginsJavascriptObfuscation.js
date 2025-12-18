const fs = require('fs');
const path = require('path');
const javascriptObfuscator = require('javascript-obfuscator');

const pluginsDir = path.join(process.cwd(), 'platforms/android/app/src/main/assets/www/plugins');

/**
 * Recursively obfuscates JavaScript files in a given directory.
 */
function obfuscateJsFiles(dir) {
    if (!fs.existsSync(dir)) {
        console.log(`[WARNING] Directory does not exist: ${dir}`);
        return;
    }

    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            obfuscateJsFiles(filePath); // Recursively process subdirectories
        } else if (file.endsWith('.js')) {
            console.log(`[INFO] Obfuscating: ${filePath}`);

            try {
                const originalCode = fs.readFileSync(filePath, 'utf8');
                const obfuscatedCode = javascriptObfuscator.obfuscate(originalCode, {
                    compact: true,
                    controlFlowFlattening: true,
                    renameGlobals: true,
                    stringArrayEncoding: ['base64'],
                    deadCodeInjection: true
                }).getObfuscatedCode();

                fs.writeFileSync(filePath, obfuscatedCode);
                console.log(`[SUCCESS] Obfuscated: ${filePath}`);
            } catch (error) {
                console.error(`[ERROR] Failed to obfuscate ${filePath}: ${error.message}`);
            }
        }
    });
}

console.log("[START] JavaScript obfuscation for plugin files...");
obfuscateJsFiles(pluginsDir);
console.log("[COMPLETE] JavaScript obfuscation finished.");
