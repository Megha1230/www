const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const publicKeyPath = path.join(projectRoot, 'public_key.pem');


//const configContent = fs.readFileSync(publicKeyPath, 'utf-8');
try {
    
    const pluginJavaFilePath = path.join(process.cwd(), 'platforms/android/app/src/main/java/com/silkimen/cordovahttp',
     //'cordova-plugin-advanced-http','src','android','com','silkimen','cordovahttp',
     'CordovaServerTrust.java');
    
    console.log(`Modify cordova-plugin-advanced-http plugin class CordovaServerTrust : ${pluginJavaFilePath}`);
    let publicKey = fs.readFileSync(publicKeyPath, 'utf-8');
    publicKey = publicKey.replace(/\n/g, "").replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", "");
    if (fs.existsSync(pluginJavaFilePath)) {
        let content = fs.readFileSync(pluginJavaFilePath, 'utf8'); 

        if (content.includes('String publicKeyContent = "";')) {
            // Define the property name you want to replace and its new value
            const propertyName = 'publicKeyContent';
            const newValue = `"${publicKey}"`;  // Set the new value for the property
            // Create a regular expression to find the property and capture its value
            const propertyRegex = new RegExp(`(private .*? ${propertyName} = )(.*?);`, 'g');

            // Check if the property exists and replace its value
            if (propertyRegex.test(content)) {
                content = content.replace(propertyRegex, `$1${newValue};`);
                //console.log(`Replaced the value of ${propertyName} with ${newValue}.`);
            
                // Write the modified content back to the Java file
                fs.writeFileSync(pluginJavaFilePath, content,  (err) => {
                    if (err) throw err;
                    console.log("[Azentio] >>>successfully updated CordovaServerTrust.java");
                });
                
                /*let modifiedcontent = fs.readFileSync(pluginJavaFilePath, 'utf8'); 
                console.log('Modified CordovaServerTrust.java: '+ modifiedcontent);*/
            } else {
                throw new Error(`Property ${propertyName} not found in the Java file CordovaServerTrust.java in plugin cordova-plugin-advanced-http.`);
            }          	
        }
    } else {
        throw new Error('class CordovaServerTrust.java in plugin cordova-plugin-advanced-http was not found.');
    }
} catch (err) {
    throw new Error('Error during Modify cordova-plugin-advanced-http class CordovaServerTrust: ', err);
}