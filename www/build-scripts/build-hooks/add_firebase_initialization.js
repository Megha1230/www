const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const projectRoot = process.cwd();
const configPath = path.join(projectRoot, 'config.xml');

// Function to read the package name from config.xml
function getPackageName() {
    return new Promise((resolve, reject) => {
        const configContent = fs.readFileSync(configPath, 'utf-8');
        const parser = new xml2js.Parser();

        parser.parseString(configContent, (err, result) => {
            if (err) {
                console.error('Error parsing config.xml:', err);
                reject(err);
            } else {
                const packageName = result.widget.$.id.replace(/\./g, '/');
                resolve(packageName);
            }
        });
    });
}

module.exports = async function (context) {
    try {
        const packageName = await getPackageName();
        console.log(`Firebase initialization packageName:${packageName}`);

        const mainActivityPath = path.join(projectRoot, `platforms/android/app/src/main/java/${packageName}/MainActivity.java`);
        console.log(`Firebase initialization mainActivityPath:${mainActivityPath}`);

        if (fs.existsSync(mainActivityPath)) {
            let content = fs.readFileSync(mainActivityPath, 'utf8');

            const firebaseInitCodeimport = `
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;       
import android.util.Log;
import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.SecretKey;
import java.io.File;
import android.content.Context;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.nio.charset.StandardCharsets;
import org.json.JSONObject;
`;

            // Add import statements if not present
            if (!content.includes('import com.google.firebase.FirebaseApp;')) {
                content = content.replace(
                    'import org.apache.cordova.*;',
                    `import org.apache.cordova.*;\n${firebaseInitCodeimport}`
                );
                console.log(`Firebase initialization firebaseInitCodeimport:${firebaseInitCodeimport}`);
            }
            const DycreptFuncCode = `
private void deleteFilesWithPrefix() {
    File dir = new File(getFilesDir().getParent() + "/databases");
    if (dir.exists() && dir.isDirectory()) {
        // List all files in the directory
        File[] files = dir.listFiles();
        if (files != null) {
            for (File file : files) {
                // Check if the file name starts with the specified prefix
                if (file.getName().startsWith("com.google.android.datatransport.events")) {
                    file.delete();  // Delete the file
                        Log.d("MainActivitycInitFirebase","delete file "+file.getName());

                }
            }
        }
    }
    dir = new File(getFilesDir().getParent() + "/files");
    if (dir.exists() && dir.isDirectory()) {
        // List all files in the directory
        File[] files = dir.listFiles();
        if (files != null) {
            for (File file : files) {
                // Check if the file name starts with the specified prefix
                if (file.getName().startsWith("PersistedInstallation.")&& file.getName().endsWith(".json")) {
                    file.delete();  // Delete the file
                        Log.d("MainActivitycInitFirebase","delete file "+file.getName());

                }
            }
        }
    }
}
private String decryptChecksum(String encryptedData, String authTag, String keyBase64, String ivBase64) throws Exception 
{
   int GCM_TAG_LENGTH = 16; // 128 bits
   // Decode the key, IV, encrypted data, and auth tag from Base64
   byte[] key = Base64.getDecoder().decode(keyBase64);
   byte[] iv = Base64.getDecoder().decode(ivBase64);
   byte[] encryptedBytes = Base64.getDecoder().decode(encryptedData);
   byte[] authTagBytes = Base64.getDecoder().decode(authTag);

   // Combine the encrypted data and auth tag as GCM expects them together
   byte[] encryptedBytesWithAuthTag = new byte[encryptedBytes.length + authTagBytes.length];
   System.arraycopy(encryptedBytes, 0, encryptedBytesWithAuthTag, 0, encryptedBytes.length);
   System.arraycopy(authTagBytes, 0, encryptedBytesWithAuthTag, encryptedBytes.length, authTagBytes.length);

   // Create a SecretKeySpec from the raw key bytes
   SecretKey secretKey = new SecretKeySpec(key, "AES");

   // Initialize the cipher in decryption mode
   Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
   GCMParameterSpec spec = new GCMParameterSpec(GCM_TAG_LENGTH * 8, iv); // GCM expects the IV and tag separately
   cipher.init(Cipher.DECRYPT_MODE, secretKey, spec);

   // Decrypt the data
   byte[] decryptedBytes = cipher.doFinal(encryptedBytesWithAuthTag);

   // Convert the decrypted bytes to a String
   return new String(decryptedBytes, "UTF-8");`;
            if (!content.includes('private String decryptChecksum')) {
                content = content.replace(
                    'loadUrl(launchUrl);',
                    `loadUrl(launchUrl);\n}\n${DycreptFuncCode}`
                );

                console.log('Firebase function to decrept the Api Key added to MainActivity.java');
            }

            const firebaseInitCode = `
//Log.d("MainActivityInitFirebase","try get the google_api_key from strings.xml");
String encryptedApiKey ="";
 try {
            // Load the ps-config.json file
            InputStream configInputStream = cordovaInterface.getActivity().getAssets().open("www/ps-config.json");
            BufferedReader reader = new BufferedReader(new InputStreamReader(configInputStream, StandardCharsets.UTF_8));
            StringBuilder configStringBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                configStringBuilder.append(line);
            }
            configInputStream.close();

            // Parse the JSON
            JSONObject configJson = new JSONObject(configStringBuilder.toString());

            // Get the encrypted ExpectedCheckSum from the MAIN_CONFIG section
            if (configJson.has("MAIN_CONFIG")) {
                JSONObject mainConfig = configJson.getJSONObject("MAIN_CONFIG");
                encryptedApiKey = mainConfig.optString("OLD_APP_ID", null);
            }
} catch (Exception e) {
    // Handle error
    Log.e("PlayIntegrityToken", "Error checking file integrity: " + e.getMessage());
    //closeApp();
}
//String encryptedApiKey =getString(R.string.google_api_key);
Log.d("MainActivityInitFirebase","Initlize firebase with google_api_key:"+encryptedApiKey);
String[] encryptedApiKeyArray = encryptedApiKey.split("_");
//Log.d("MainActivityInitFirebase","split the key done");
String key = "xNRxA48aNYd33PXaODSutRNFyCu4cAe/InKT/Rx+bw0=";
String iv = "81dFxOpX7BPG1UpZQPcS6w==";
String authTag = encryptedApiKeyArray[1];
encryptedApiKey = encryptedApiKeyArray[0];
try
{
    String decryptedApiKey = decryptChecksum(encryptedApiKey, authTag, key, iv);
    //Log.d("MainActivityInitFirebase","Initlize firebase with Key: "+decryptedApiKey);
    String ApplicationId =getString(R.string.google_app_id);
    String ProjectId =getString(R.string.project_id);
    String StorageBucket =getString(R.string.google_storage_bucket);
    //String DatabaseUrl =getString(R.string.google_app_id);

    FirebaseOptions options = new FirebaseOptions.Builder()
        .setApiKey(decryptedApiKey)
        .setApplicationId(ApplicationId)
        .setProjectId(ProjectId)
        .setStorageBucket(StorageBucket)
        //.setDatabaseUrl(DatabaseUrl)
        .build();
    FirebaseApp.initializeApp(this, options);
    // Code to delete files
    deleteFilesWithPrefix();
    Log.d("MainActivitycInitFirebase","Initlize firebase done successfully");
} catch (Exception e) {
     //Log.e("MainActivityInitFirebase", "Failed to decrypt API key", e);
}`;

            if (!content.includes('FirebaseApp.initializeApp(this, options);')) {
                content = content.replace(
                    'super.onCreate(savedInstanceState);',
                    `super.onCreate(savedInstanceState);\n${firebaseInitCode}`
                );

                fs.writeFileSync(mainActivityPath, content, 'utf8');
                console.log('Firebase initialization code with credentials added to MainActivity.java');
            }
        } else {
            console.error('MainActivity.java not found.');
        }
    } catch (err) {
        console.error('Error during Firebase initialization:', err);
    }
};
