'use strict';
import child_process from 'child_process';
import error from 'console';
import crypto from 'crypto';
import et from 'elementtree';
import fs from 'fs-extra';
import path from 'path';
import uglify from 'uglify-js';
import xmldom from 'xmldom';
import xpath from 'xpath';

const dom = xmldom.DOMParser;
const exec = child_process.exec;


var clientCssFolderUrl = '';
var clientMinCssName = '';
var mainPsConfig = {};
const cerFolder = './www/certificates/';


let alter = function (element) {
	return (element).toLowerCase().includes('.cer');
}


function processCssFile(cssFile, cssFolder) {
	const baseCommand = "chmod u+r+x ./www/build-scripts/minifyCSS/uglifycss/uglifycss && ./www/build-scripts/minifyCSS/uglifycss/uglifycss ";
	var tempArrayCommands = [];
	var commentRegex = /(\/\*(.|\s)*?\*\/|(\n|\t|\r|\v|\f){1,}|\s(?=\s)|(?<=})\s|(?<={)\s|\s(?={)|\s(?=})|(?<=;)\s|[[:blank:]](?=;)|(?<=:)[[:blank:]]|(?<=,)[[:blank:]])/g;
	// remove all comments and empty spaces from the file
	var noCommentCssFile = cssFile.replace(commentRegex, '');
	// split the import commands  
	var importsList = noCommentCssFile.split('@import');
	if (importsList && importsList.length > 0) {
		for (var j = 0; j < importsList.length; j++) {
			var fileName = importsList[j];
			if (fileName) {
				fileName = cssFolder + fileName.trim().replace('"./', '').trim().replace('";', '');
				var commandObj = {
					cmd: baseCommand + "ugly-comments '" + fileName + "'",
					fileName
				};
				tempArrayCommands.push(commandObj);
			}
		}
	}
	return tempArrayCommands;

}

function execMinifyCmd(minifyCssCmdList, minCssFile) {
	var curFile = minifyCssCmdList.shift();
	// call the minify command
	exec(curFile.cmd, (error, stdout, stderr) => {
		if (error) {
			console.log('error: ' + error.message);
			throw error;
		}
		if (stderr) {
			console.log('stderr: ' + stderr);
			throw stderr;
		}
		minCssFile += stdout;
		if (minifyCssCmdList.length == 0 && minCssFile !== '') {
			fs.writeFileSync(clientMinCssName, minCssFile, 'utf-8');
			fs.removeSync(clientCssFolderUrl);
		} else {
			execMinifyCmd(minifyCssCmdList, minCssFile);
		}
	});
}


const algorithm = 'aes-128-cbc';
const key = 'PeShVmYq3t6v9y$B';
const iv = '+MbQeThWmZq4t6w9';
const excludedFiles = ['pro-manifest.json', '3rdpartylicenses.txt'];
const includedFileExt = ['js', 'css', 'json', 'html', 'cer'];
const excludedFolders = ['assets', 'build-scripts', 'svg', 'upgrade-scripts'];


function encrypt(text, encKey = key, encIv = iv) {
	var cipher = crypto.createCipheriv(algorithm, encKey, encIv);
	// text = new Buffer(text)
	var crypted = cipher.update(text, 'utf-8', 'base64');
	crypted += cipher.final('base64');
	return crypted;
}

function decrypt(text, encKey = key, encIv = iv) {
	var decipher = crypto.createDecipheriv(algorithm, encKey, encIv);
	var decrypted = decipher.update(text, 'base64', 'utf-8');
	decrypted += decipher.final();
	return decrypted;
}


async function compressImages(path) {
	return new Promise((resolve, reject) => {
		const optimizedPath = `${path}/az-optimized`;
		console.log(">>> Starting Images Compression");
		exec(`node ./www/build-scripts/az-compression.mjs ${path} ${optimizedPath}`, async (error, stdout, stderr) => {
			if (error) {
				console.error(`error: ${error.message}`);
				reject(error);
				throw error;
			}
			if (stderr) {
				console.error(`stderr: ${stderr}`);
				reject(stderr);
				throw stderr;
			}
			console.log(stdout);
			fs.copySync(optimizedPath, path, {
				overwrite: true
			}, function (err) {
				if (err) {
					throw new Error(`Error Copying From ${optimizedPath} to ${path} :` + err);
				} else {
					console.log(`Copied From ${optimizedPath} to ${path}`);
				}
			});

			fs.removeSync(optimizedPath);
			resolve(true);
		});
	});

}

function isFile(directoryPath, fileName) {
	var fileCheck = fs.lstatSync(path.join(directoryPath, fileName)).isFile();
	if (fileCheck) {
		const fileExt = fileName.slice((Math.max(0, fileName.lastIndexOf(".")) || Infinity) + 1);
		fileCheck = !excludedFiles.includes(fileName) && fileExt !== '' && includedFileExt.includes(fileExt);
	}
	return fileCheck;
};

function isFolder(directoryPath, folderName) {
	return fs.lstatSync(path.join(directoryPath, folderName)).isDirectory() && !excludedFolders.includes(folderName);
};

function returnFolderManifest(directoryPath) {
	var allContents = fs.readdirSync(directoryPath);
	var hashManifest = {
		es6: [],
		es5: []
	};
	if (allContents && allContents.length > 0) {
		for (var i = 0; i < allContents.length; i++) {
			var contentName = allContents[i];
			if (isFile(directoryPath, contentName)) {
				const filePath = path.join(directoryPath, contentName);
				let fileBuffer = fs.readFileSync(filePath, 'utf8');
				// Added by Richie for #BUG 1331350; case of the certificate file hashing on android 11 is generating a different hash from that on the build environment of web browser due to extra replacement character at the end of the file when read from mobile.
				if (contentName.indexOf('.cer') > -1) {
					// remove all replacement characters.
					fileBuffer = fileBuffer.replace(/\uFFFD/g, '');
				}
				// End Richie
				const hashSum = crypto.createHash('sha256');
				hashSum.update(fileBuffer);
				const hex = hashSum.digest('hex');
				/** exclude the www/ from the filePath in order for the manifest to be like below in order to be able to read them correctly from js script on runtime:
					{"href":"123124dfv.js","integritry":"sefwef23r23fwe2"}
					or for the case of the subfolders to be as below:
					{"href":"certificates/certificate.cer","integritry":"ergedhrjrhgwr23rwdvw4"}
				*/
				const fileHref = filePath.substring("www/".length);
				const fileDetails = {
					"href": fileHref,
					"integrity": hex
				};
				if (contentName.indexOf("-es5.") > -1) {
					hashManifest.es5.push(fileDetails);
				} else if (contentName.indexOf("-es2015.") > -1) {
					hashManifest.es6.push(fileDetails);
				} else {
					hashManifest.es5.push(fileDetails);
					hashManifest.es6.push(fileDetails);
				}
			} else if (isFolder(directoryPath, contentName)) {
				var folderContentsHashing = returnFolderManifest(path.join(directoryPath, contentName));
				if (folderContentsHashing.es5 && folderContentsHashing.es5.length > 0) {
					hashManifest.es5.push(...folderContentsHashing.es5);
				}
				if (folderContentsHashing.es6 && folderContentsHashing.es6.length > 0) {
					hashManifest.es6.push(...folderContentsHashing.es6);
				}
			}
		}
	}
	return hashManifest;
}

function generateHashManifest() {
	var rootdir = "";
	var directoryPath = path.join(rootdir, "www");
	const originalScriptName = path.join(rootdir, "ps_anti_tampering.js");
	const scriptName = path.join(directoryPath, "ps.8cadbffda2d00723b86d.json");
	console.log("[Azentio] >>> creating path manifest ");
	var hashManifest = returnFolderManifest(directoryPath);

	let fileData = fs.readFileSync(originalScriptName, 'utf8');
	if (fileData) {
		var manifestArrayES5 = 'var manifestArrayES5 = ' + JSON.stringify(hashManifest.es5) + ';\r\n';
		var manifestArrayES6 = 'var manifestArrayES6 = ' + JSON.stringify(hashManifest.es6) + ';\r\n';

		var UpdatedFileData = manifestArrayES5 + manifestArrayES6 + fileData;
		var uglified = uglify.minify(UpdatedFileData);

		if (uglified && uglified.error) {
			throw new error("[Azentio] >>> error while uglifying the script");
		} else {
			var encryptedFileData = encrypt(uglified.code);
			var finalEncData = '{"_ps":"' + encryptedFileData + '"}';
			console.log("[Azentio] >>> writting protected file");
			fs.writeFileSync(scriptName, finalEncData, (err) => {
				if (err) {
					throw err
				};
				console.log("[Azentio] >>> successfully created the " + scriptName + " file");
			});
		}
	} else {
		throw new error("[Azentio] >>> Error while reading script " + originalScriptName);
	}

	// } else {
	// 	throw new error("[Azentio] >>> Error while reading all files from www folder");
	// }
}

/**
 * function to get the ios signing certificate team id and uuid and the android keystore sha256 signature and encrypt them 
 * in order to add them to the ps-config.json in order to validate the siging of the application upon running.
 * #BUG 1320717
 * @author RichardZourob
 * @returns ps-config option with the signing token for ios or android builds
 */
function returnCertificateSignature() {
	return new Promise((res, rej) => {
		const key2 = 'bRc9EH%#xNI*rU3%';
		const iv2 = 'lv@qs#zG$o$4I0go';
		var signingToken = {
			AST: {},
			IST: {}
		};
		var platform = process.env.CI_PLATFORM;
		if (platform == 'ios') {
			// For IOS:
			var command2 = 'security cms -D -i ./*.mobileprovision > plist_out.xml';
			exec(command2, (error2, stdout2, stderr2) => {
				if (error2) {
					console.error('[Azentio]>>> ios cert error2: ' + error2.message);
					rej(error2);
					throw error2;
				}
				if (stderr2) {
					console.log('[Azentio]>>> ios cert stderr2: ' + stderr2);
					// throw stderr2; // they could be warnings so we should not stop the build.
				}

				// reading the certificate details and get the teamID out of it.
				var xmlData = fs.readFileSync("pList_out.xml").toString();
				var doc = new dom().parseFromString(xmlData)
				var uuid = xpath.select("//plist/dict/key[text()='UUID']/following-sibling::string[1]", doc)[0].firstChild.data
				var teamid = xpath.select("//plist/dict/key[text()='TeamIdentifier']/following-sibling::array/string[1]", doc)[0].firstChild.data
				var encryptedTeamId = encrypt(teamid.trim(), key2, iv2);
				var encryptedUuid = encrypt(uuid.trim(), key2, iv2);
				signingToken.IST = {
					"TID": encryptedTeamId,
					"PUUID": encryptedUuid
				};
				res(signingToken);
			});
		} else if (platform == 'android' && process.env.BUILD_TYPE == 'release') {
			// For Android:
			var command = 'keytool -list -v -keystore ./android.keystore -storepass ' + process.env.DOWNLOAD_CREDENTIAL_STORE_PASSWORD + ' | grep SHA256:';
			exec(command, (error, stdout, stderr) => {
				var certSha256 = String(stdout).substring("SHA256: ".length + 1).trim();
				if (error) {
					console.error('[Azentio]>>> keystore error: ' + error.message);
					rej(error);
					throw error;
				}
				if (stderr) {
					console.log('[Azentio]>>> keystore stderr: ' + stderr);
					// throw stderr; // they could be warnings so we should not stop the build.
				}
				if (certSha256) {
					var EncryptedSha256 = encrypt(certSha256, key2, iv2);
					signingToken.AST = {
						S256: EncryptedSha256
					};
				}
				res(signingToken);
			});
		} else {
			res(signingToken);
		}
	});
}

function noDomainFound(Domain, Line) {
	console.log('%c[Azentio] >>> Aborted Build; No Valid Certificate was found under /certificates folder for Domain ' + Domain + ': ' + Line, 'background:#673ab7; color: white');
	console.log('[Azentio] >>> Process.exit');
	process.exit(1);
}

async function checkCertificate(index, filtered, Domain, cerDN, callBack) {
	console.log("[Azentio] >>> Current Index Being Checked : " + index);
	let file = filtered[index];
	let filename = file.split(".cer")[0];
	let pemName = `"${filename}.pem"`;
	console.log("[Azentio] >>> Current Certificate Filename Being Checked: " + filename);
	if (filename) {
		exec(`openssl x509 -inform der -in "${cerFolder}${file}" -out ${cerFolder}${pemName}`, (error, stdout, stderr) => {
			if (error) {
				console.error('error: ${error.message}');
				throw error;
			}
			if (stderr) {
				console.error('stderr: ${stderr}');
				throw stderr;
			}
			exec(`openssl x509 -in ${cerFolder}${pemName} -text -noout | grep DNS:`, (error, stdout, stderr) => {
				cerDN = stdout;
				console.log("[Azentio] >>> Certificate Domain Name : " + cerDN);
				if (error) {
					console.error('error: ${error.message}');
					throw error;
				}
				if (stderr) {
					console.error('stderr: ${stderr}');
					throw stderr;
				}
				if (cerDN) {
					// fixed checking if domain certificate os present
					let urlParts = new URL(Domain).hostname.split('.');
					console.log("Domain Parts Of ps-config: " + urlParts);
					let domainName = urlParts.slice(0).slice(-(urlParts.length === 4 ? 3 : 2)).join('.');
					console.log("Domain Name Of ps-config: : " + domainName);
					console.log(`Checking for certificate Domain Name ${cerDN}`);

					if (cerDN.includes(domainName) || cerDN.toLowerCase().includes(domainName.toLowerCase())) {
						console.log("----------------");
						console.log(`Found Domain Name ${cerDN} in ${pemName}`);
						exec(`openssl x509 -enddate -noout -in ${cerFolder}${pemName}`, (error, stdout, stderr) => {
							if (error) {
								console.log('error: ${error.message}');
								throw error;
							}
							if (stderr) {
								console.log('stderr: ${stderr}');
								throw stderr;
							}

							if (stdout) {
								//Added by Richie for #BUG 1526454
								const today = new Date().toISOString().slice(0, 10);
								const expiryDate = new Date(stdout).toISOString().slice(0, 10);
								if (expiryDate > today) {
									callBack({
										cerWasFound: true,
										expiryDate: stdout
									});
								} else {
									console.log(`${pemName} certificate is expired.`);
									if (index == filtered.length - 1) { // last iteration
										callBack({
											cerWasFound: false
										});
									} else {
										index++;
										return checkCertificate(index, filtered, Domain, cerDN, callBack);
									}
								}
								// End Richie
							}
						});
					} else if (index == filtered.length - 1) { // last iteration
						callBack({
							cerWasFound: false
						});
					} else {
						index++;
						return checkCertificate(index, filtered, Domain, cerDN, callBack);
					}
				}
			});

		});
	}
}


async function checkDebugBuild(secret) {
	return new Promise((res, rej) => {
		let wwwDebugDirectory = "./www/www-debug";
		let wwwDirectory = "./www";
		console.log("Unzipping debug folder");
		exec(`unzip -o -q -P '${secret}' ${wwwDebugDirectory}.zip -d ${wwwDebugDirectory}`, (error, stdout, stderr) => {
			if (error) {
				console.log(`Error Unzipping debug zip file: ${error.message}`);
				rej(error);
				throw error;
			}
			if (stderr) {
				console.log(`Error Unzipping debug zip file: ${stderr}`);
				rej(error);
				throw stderr;
			}
			console.log("Unzip Success");
			fs.readdir(wwwDirectory, (err, files) => {
				if (err) throw err;
				console.log("Reading Directory Success " + wwwDirectory);
				for (const file of files) {
					let extension = path.extname(file);
					if (isFile(wwwDirectory, file) || extension == '.zip') {
						if (extension === '.js' || extension === '.map' || extension == '.html' || extension == '.css' || extension == '.zip') {
							console.log("Removing " + file);
							fs.unlinkSync(path.join(wwwDirectory, file), err => {
								if (err) throw err;
							});
						}
					}
				}
				console.log("Copying from " + wwwDebugDirectory + " to " + wwwDirectory);
				fs.copySync(wwwDebugDirectory, wwwDirectory, {
					overwrite: true
				});
				console.log("Removing " + wwwDebugDirectory);
				fs.removeSync(wwwDebugDirectory);
				res();
			})
		})
	});
}

// Your key and IV should be generated securely and kept secret
const googleEncryptionkey = Buffer.from('xNRxA48aNYd33PXaODSutRNFyCu4cAe/InKT/Rx+bw0=', 'base64'); // 32 bytes for AES-256
const googleEncryptioniv = Buffer.from('81dFxOpX7BPG1UpZQPcS6w==', 'base64'); // 12 bytes for GCM

function encryptData(dataToBeEncrypted) {
    const cipher = crypto.createCipheriv('aes-256-gcm',  googleEncryptionkey,  googleEncryptioniv);
    
    // Encrypt the dataToBeEncrypted
    let encrypted = cipher.update(dataToBeEncrypted, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    
    // Get the authentication tag generated during encryption
    const authTag = cipher.getAuthTag().toString('base64');

    // Return both the encrypted data and the auth tag
    return {
        encryptedData: encrypted,
        authTag: authTag
    };
}
async function applyGoogleApiKeyEncryption() {
	var platform = process.env.CI_PLATFORM;
	if (platform == 'android') {
		console.log("[Azentio] >>> read the google-services.json " );
		//read the google-services.json and adjust the google api key and rewrite it
		fs.readFile('google-services.json', (err, data5) => {
			if (err) throw err;
			let googleService = JSON.parse(data5);
			//console.log("[Azentio] >>> google service data:" + data5);
			const googleApiKey = googleService.client[0].api_key[0].current_key;
			//googleService.client[0].api_key[0].current_key = "";
			//console.log("[Azentio] >>> google api key:" + googleApiKey);
			const encryptedResult = encryptData(googleApiKey);	
			//console.log("[Azentio] >>> Encrypted google Key:" + encryptedResult.encryptedData);
			//console.log("[Azentio] >>> Authentication Tag:" + encryptedResult.authTag);
			googleService.client[0].api_key[0].current_key = "";
			
			console.log("[Azentio] >>> encrypted key:"+ encryptedResult.encryptedData + "_" + encryptedResult.authTag);
			let newData = JSON.stringify(googleService);
			fs.writeFile('google-services.json', newData, (err) => {
				if (err) throw err;
				console.log("[Azentio] >>>successfully updated google-service.json");
			});
			//read the ps-config.json and adjust the version and rewrite it
			fs.readFile('ps-config.json', (err, data51) => {
				if (err) throw err;
				let psConfig = JSON.parse(data51);
				psConfig.MAIN_CONFIG.OLD_APP_ID = encryptedResult.encryptedData + "_" + encryptedResult.authTag;
				newData = JSON.stringify(psConfig);
				fs.writeFileSync('ps-config.json', newData, (err) => {
					if (err) throw err;
					console.log("successfully updated ps-config.json with" + newData);
				});
				console.log("[Azentio] >>>successfully apply Google Api Key Encryption");
			});
		});
	}
}

const projectRoot = process.cwd();
const privateKeyPath = path.join(projectRoot, 'private_key.pem');

function encryptDataWithPrivateKey(dataToBeEncrypted) {
	let privateKey = '';
	//console.log("[Azentio] >>> privateKeyPath: " + privateKeyPath );
	
	privateKey =fs.readFileSync(privateKeyPath, 'utf-8');
	//console.log("[Azentio] >>> privateKey: " + privateKey );

	/*// Step 1: Generate AES key
	const aesKey = crypto.randomBytes(32); // 256-bit AES key
	//console.log("[Azentio] >>> aesKey:", aesKey.toString('base64'));
	const aesIv = crypto.randomBytes(16); // Initialization vector for AES
	//console.log("[Azentio] >>> aesIv:", aesIv.toString('base64'));
	
	// Step 2: Encrypt the message using AES
	const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, aesIv);
	let encryptedData = cipher.update(dataToBeEncrypted, 'utf8', 'base64');
	encryptedData += cipher.final('base64');
	
	// Step 3: Encrypt the AES key using RSA (with the private key)
	const encryptedAesKey = crypto.privateEncrypt(
	  {
	    key: privateKey,
	    padding: crypto.constants.RSA_PKCS1_PADDING,
	  },
	  aesKey
	);

	let encryptedDataWithKeyAndIv=encryptedData + "_" + encryptedAesKey.toString('base64') + "_"+ aesIv.toString('base64');
	//console.log("[Azentio] >>> Encrypted message (Base64):", encryptedDataWithKeyAndIv);
	return encryptedDataWithKeyAndIv;*/
	// Encrypt the certificate content using RSA (with the private key)
	/*const encryptedData = crypto.privateEncrypt(
		{
		  key: privateKey,
		  padding: crypto.constants.RSA_PKCS1_PADDING,
		},
		dataToBeEncrypted
	  );
	  return encryptedData.toString('base64') ;*/
      const chunkSize = 501; // Max size for 4096-bit key with PKCS1 padding
      const buffer = Buffer.from(dataToBeEncrypted);
      const chunks = []; 
      for (let i = 0; i < buffer.length; i += chunkSize) {
        const chunk = buffer.slice(i, i + chunkSize);
        const encryptedChunk = crypto.privateEncrypt(
          {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PADDING,
          },
          chunk
        );
        chunks.push(encryptedChunk.toString("base64"));
  	} 
  	return JSON.stringify(chunks); // Array of Base64-encoded encrypted chunks
}
async function applyCertificateEncryption(file) {
	console.log("[Azentio] >>> read the file :"+file );
	//read the certificate file and do encryption then rewrite it
	fs.readFile(cerFolder+file, (err, data6) => {
		if (err) throw err;
		
			//console.log("[Azentio] >>> certificate file content:" + data6);
			const encryptedResult = encryptDataWithPrivateKey(data6);				
			
			//console.log("[Azentio] >>> encrypted data:"+ encryptedResult);			
			fs.writeFileSync(cerFolder+file, encryptedResult, (err) => {
				if (err) throw err;
				console.log("[Azentio] >>>successfully updated certificate");
			});
			console.log("[Azentio] >>>successfully apply Certificate Encryption");
		});
}


async function applyCustomizedConfigs() {
	var platform = process.env.CI_PLATFORM;
	var signToken = null;
	let secret = process.env.DEV_ZIP_SECRET;
	let buildType = process.env.BUILD_TYPE;
	let buildTypeIOS = process.env.GYM_EXPORT_METHOD;
	if (secret && ((platform == 'android' && buildType != 'release') || (platform == 'ios' && buildTypeIOS == 'development'))) {
		await checkDebugBuild(secret);
	}
	if (platform == 'ios' || platform == 'android') {
		signToken = await returnCertificateSignature();
		// Added by Richie for #BUG 1323941
		var certSignature = {};
		if (signToken) {
			if (process.env.CI_PLATFORM == 'ios' && signToken.IST) {
				// Certificate details For IOS
				certSignature.IST = signToken.IST;
			} else if (process.env.CI_PLATFORM == 'android' && signToken.AST) {
				// Certificate details FOR Android
				certSignature.AST = signToken.AST;
			}

			const packageSignature = JSON.stringify(certSignature);
			fs.writeFileSync('./www/ps-package.json', packageSignature, (err) => {
				if (err) throw err;
				console.log("[Azentio] >>> successfully created the signature file");
			});
		}
		// End Richie
	}

	applyGoogleApiKeyEncryption();
	//get the www version
	fs.readFile('www/build-scripts/www-version.json', (err, data1) => {
		if (err) throw err;
		let wwwVer = JSON.parse(data1);
		//get the assets version
		fs.readFile('assets-version.json', (err, data2) => {
			if (err) throw err;
			let assetsVer = JSON.parse(data2);
			const newVer = wwwVer.VERSION + "." + assetsVer.VERSION;
			var regex = new RegExp('^[0-9]+.[0-9]+.[0-9]+.[0-9]+.[0-9]+.[0-9]+$');
			if (!regex.test(newVer)) {
				// If the version is not valid, throw an error.
				throw new Error('Please provide a valid version number. Provided Version is ' + newVer);
			}
			fs.readdir('www/', (err, files) => {
				if (err) {
					throw new Error('Error reading directory:', err);
				}
				console.log("[Azentio] >>> successfully read the www dir");
				const fileName = files.find(file => file.startsWith('main-es2015'));
				if (fileName) {
					// AZDB-7087 - Added by Muzammil
					const fileToRead = './www/' + fileName.trim();
					console.log("[Azentio] >>> successfully find the file " + fileName);
					try {
						var fileContent = fs.readFileSync(fileToRead, 'utf8');
						console.log("[Azentio] >>> successfully Read " + fileToRead);
					} catch (err) {
						console.log("[Azentio] >>> Error reading: " + fileToRead, err);
					}
					const replaceString = ',e.X_k01V_Y="TTlQVWE2Xy1VdkRzd21KJA==",e.Z_i02_vA="OS9tckZ4LCZOc1ovWDl6TA=="';
					try {
						var updatedContent = fileContent.replace(replaceString, '');
						console.log("[Azentio] >>> Content replaced successfully");
					} catch (err) {
						console.log("[Azentio] >>> Error Replacing: " + fileToRead, err);
					}
					try {
						fs.writeFileSync(fileToRead, updatedContent, 'utf8')
						console.log("[Azentio] >>> successfully write the updated file " + fileToRead);
					} catch (err) {
						console.log("[Azentio] >>> Error updating: " + fileToRead, err);
					}
					// End Muzammil

					//read the ps-config.json and adjust the version and rewrite it
					fs.readFile('ps-config.json', (err, data3) => {
						if (err) throw err;
						let psConfig = JSON.parse(data3);
						psConfig.MAIN_CONFIG.APP_VERSION = newVer;

						//saed -update the ps-config.json with the default APP_PF_TYPE
						let pfType = '';
						if (platform == 'ios') {
							pfType = 'af7c30e551dc831fb67f7340ea5213e45b54e331c5f576b63606764dca0f9ed4';
						}
						else if ( platform == 'android') {
							pfType = '4e8ff868d7b13a8d91d9da67500527dc7cfd0a4d9d7d8d41100c3db099db5e2b';
						}
						psConfig.MAIN_CONFIG.PAYMENT_CURRENCY = pfType;
						console.log("[Azentio] >>> successfully updated the psConfig file with APP_PF_TYPE: "+pfType);

						const fileBuffer = fs.readFileSync('www/' + fileName);
						const hashSum = crypto.createHash('sha256');
						hashSum.update(fileBuffer);
						const checksum = hashSum.digest('hex');

						const key = Buffer.from('xNRxA48aNYd33PXaODSutRNFyCu4cAe/InKT/Rx+bw0=', 'base64');
						const iv = Buffer.from('81dFxOpX7BPG1UpZQPcS6w==', 'base64');
						const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

						let encrypted = cipher.update(checksum, 'utf8', 'base64');
						encrypted += cipher.final('base64');
						const authTag = cipher.getAuthTag().toString('base64');
						
						psConfig.MAIN_CONFIG.PAYMENT_AMOUNT = encrypted;
						psConfig.MAIN_CONFIG.PAYMENT_AMOUNT_T = authTag;

						// Added by Richie for #TP 1210667
						//adjust the main configs
						const mainConfigStr = process.env.MAIN_CONFIG;
						console.log('[Azentio] >>> mainConfigStr= ' + mainConfigStr);
						if (mainConfigStr && mainConfigStr !== '') {
							try {
								const mainConfigObj = JSON.parse(mainConfigStr);
								Object.keys(mainConfigObj).forEach((key) => {
									psConfig.MAIN_CONFIG[key] = mainConfigObj[key];
								});
							} catch (error) {
								console.log('[Azentio] >>> Error while updating the Main Configs ');
								throw error;
							}
							console.log('[Azentio] >>> Successfully updated MAIN_CONFIG value ');
						}

						//adjust the client assets configs
						const clientAssetsConfigStr = process.env.CLIENT_ASSETS_CONFIG;
						console.log('[Azentio] >>> clientAssetsConfigStr= ' + clientAssetsConfigStr);
						if (clientAssetsConfigStr && clientAssetsConfigStr !== '') {
							try {
								const clientAssetsConfigObj = JSON.parse(clientAssetsConfigStr);
								Object.keys(clientAssetsConfigObj).forEach((key) => {
									psConfig.CLIENT_ASSETS_CONFIG[key] = clientAssetsConfigObj[key];
								});
							} catch (error) {
								console.log('[Azentio] >>> Error while updating the client assets configs ');
								throw error;
							}
							console.log('[Azentio] >>> Successfully updated CLIENT_ASSETS_CONFIG value');
						}
						// End Richie
						let newData = JSON.stringify(psConfig);
						mainPsConfig = JSON.parse(JSON.stringify(psConfig)); //store ps-config in a global variable
						console.log('[Azentio] >>> psConfig = ' + newData);
						/**
						 * DN: Gilbert Al Indary; Get domain name from ps-config and compare it with all certificates
						 * present under certificate folder, if certificate was present, use it as the main certificate and
						 * and extract the expiry date from it, else, break the build process.
						 * 
						 */
						let Domain = "";
						Domain = mainPsConfig.MAIN_CONFIG.MAIN_PATH;
						let cerDN;
						if (Domain) {
							let files = fs.readdirSync(cerFolder);
							if (files && files.length > 0) {
								let filtered = files.filter(alter);
								console.log("[Azentio] >>> All files in certificates directory: ");
								console.log(files);
								console.log("[Azentio] >>> All filtered files based on .cer extension");
								console.log(filtered);
								let index = 0;
								checkCertificate(index, filtered, Domain, cerDN, (result) => {
									if (result) {
										if (result.cerWasFound && result.expiryDate) {
											let expiryDate = result.expiryDate.split("=")[1].trim();
											console.log("[Azentio] >>> " + expiryDate);
											psConfig.MAIN_CONFIG.EXPIRY_DATE = expiryDate;
											let newData = JSON.stringify(psConfig);
											fs.writeFileSync('./www/ps-config.json', newData, (err) => {
												if (err) throw err;
												console.log("successfully updated ps-config.json with" + newData);
											});

											//read the config.xml and adjust the version and rewrite it
											var data4 = fs.readFileSync('config.xml', 'utf-8');

											if (data4) {
												// Windows is the BOM. Skip the Byte Order Mark.
												data4 = data4.substring(data4.indexOf('<'));
											}

											var doc = new et.ElementTree(et.XML(data4)); // eslint-disable-line babel/new-cap
											var root = doc.getroot();

											if (root.tag !== 'widget') {
												// Throw an error if widget is not the root tag
												throw new Error('config.xml has incorrect root node name (expected "widget", was "' + root.tag + '")');
											}

											// Added by Richie for TP# 1163544
											// Construct the version of the package acceptable by app store in the format M+m.E.S (0000.00.00)
											var splitVer = wwwVer.VERSION.split('.');
											// get the version splits
											var appMajor = Number(splitVer[0]);
											var appMinor = Number(splitVer[1]);
											var appExtension = Number(splitVer[2]);
											var appStore = Number(splitVer[3]);

											var storeMajor = (appMajor * 100) + appMinor;
											var storeMinor = appExtension;
											var storePatch = appStore;
											var packageVer = storeMajor.toString() + "." + storeMinor.toString() + "." + storePatch.toString();
											// Set the version of the widget tag
											root.attrib.version = packageVer;
											// End Richie
											// Added by Richie for #TP 1413156; reading the splash screen icon & background color from environment variables.
											if (process.env.CI_PLATFORM == 'android') {
												var confPlatform = root.find("./platform[@name='android']");
												if (confPlatform) {
													if (process.env.SPLASH_SCREEN_ANIMATED_ICON) {
														var splashIcon = confPlatform.find("./preference[@name='AndroidWindowSplashScreenAnimatedIcon']");
														if (splashIcon) {
															splashIcon.attrib['value'] = process.env.SPLASH_SCREEN_ANIMATED_ICON;
															console.log('[Azentio] >>> splash screen icon preference in config.xml is: ');
															console.log(splashIcon);
														}
													}
													if (process.env.SPLASH_SCREEN_ANIMATION_DURATION) {
														var animationDuration = confPlatform.find("./preference[@name='AndroidWindowSplashScreenAnimationDuration']");
														if (animationDuration) {
															animationDuration.attrib['value'] = process.env.SPLASH_SCREEN_ANIMATION_DURATION;
															console.log('[Azentio] >>> splash screen animation duration preference in config.xml is: ');
															console.log(animationDuration);
														}
													}
													if (process.env.SPLASH_SCREEN_BACKGROUND) {
														var splashBackgroundColor = confPlatform.find("./preference[@name='AndroidWindowSplashScreenBackground']");
														if (splashBackgroundColor) {
															splashBackgroundColor.attrib['value'] = process.env.SPLASH_SCREEN_BACKGROUND;
															console.log('[Azentio] >>> splash screen background color preference in config.xml is: ');
															console.log(splashBackgroundColor);
														}
													}
													if (process.env.SPLASH_SCREEN_ICON_BACKGROUND) {
														var splashIconBackgroundColor = confPlatform.find("./preference[@name='AndroidWindowSplashScreenIconBackgroundColor']");
														if (splashIconBackgroundColor) {
															splashIconBackgroundColor.attrib['value'] = process.env.SPLASH_SCREEN_ICON_BACKGROUND;
															console.log('[Azentio] >>> splash screen icon background color preference in config.xml is: ');
															console.log(splashIconBackgroundColor);
														}
													}
												}
											}
											//End Richie
											fs.writeFileSync("config.xml", doc.write({
												indent: 4
											}), 'utf-8');

											// compress all images and svgs
											const svgPath = './www' + mainPsConfig.CLIENT_ASSETS_CONFIG.SVG_URL;
											compressImages(svgPath).then((result) => {
												console.log("[Azentio] >>> Finshed SVG compression");
												console.log("[Azentio] >>> Generating new base64 svg file");
												// generate new svgs.json file
												exec(`node ./www/build-scripts/base64.js ${svgPath}/svgs.json ${svgPath}`, (error, stdout, stderr) => {
													if (error) {
														console.log(`error: ${error.message}`);
														throw error;
													}
													if (stderr) {
														console.log(`stderr: ${stderr}`);
														throw stderr;
													}
													console.log(stdout);
													console.log("[Azentio] >>> Finished generating new base64 svg file");
													compressImages('./www' + mainPsConfig.CLIENT_ASSETS_CONFIG.IMGS_FOLDER_URL).then((result) => {
														console.log("[Azentio] >>> Finshed IMGs compression");
														//call the function to generate the hashing manifest
														generateHashManifest();
													}).catch((err) => {
														throw new Error(err);
													});
												});
											}).catch((err) => {
												throw new Error(err);
											});

													} else {
														noDomainFound(Domain, 496);
													}
													if(platform == 'android'){
														let file = filtered[index];
														applyCertificateEncryption(file);
													}
												}
											});
										} else {
								noDomainFound(Domain, 340);
							}

						} else {
							noDomainFound(Domain, 344);
						}
						/**
						 * END Gilbert Al Indary
						 */

						//get the minified css file name and call the minify script
						clientMinCssName = './www' + psConfig.MAIN_CONFIG.MINIFIED_CLIENT_CSS_FILE_NAME;
						var clientAssetsUrl = './www' /*+ psConfig.CLIENT_ASSETS_CONFIG.ASSETS_URL*/;
						clientCssFolderUrl = clientAssetsUrl + psConfig.CLIENT_ASSETS_CONFIG.CSS_FOLDER_URL;
						var clientMainCssFileName = clientCssFolderUrl + psConfig.CLIENT_ASSETS_CONFIG.MAIN_CSS_FILE_NAME;
						//read the config.xml and adjust the version and rewrite it
						var clientMainCssFile = fs.readFileSync(clientMainCssFileName, 'utf-8');
						if (clientMainCssFile) {
							var minifyCssCmdList = processCssFile(clientMainCssFile, clientCssFolderUrl);
							if (minifyCssCmdList && minifyCssCmdList.length > 0) {
								var minCssFile = '';
								execMinifyCmd(minifyCssCmdList, minCssFile);
							}
						}
					});
				} else {
					throw new Error('No file found with the prefix: main-es2015');
				}
			});

			//read the config.xml and adjust the version and rewrite it
			var data4 = fs.readFileSync('config.xml', 'utf-8');

			if (data4) {
				// Windows is the BOM. Skip the Byte Order Mark.
				data4 = data4.substring(data4.indexOf('<'));
			}

			var doc = new et.ElementTree(et.XML(data4)); // eslint-disable-line babel/new-cap
			var root = doc.getroot();

			if (root.tag !== 'widget') {
				// Throw an error if widget is not the root tag
				throw new Error('config.xml has incorrect root node name (expected "widget", was "' + root.tag + '")');
			}

			// Added by Richie for TP# 1163544
			// Construct the version of the package acceptable by app store in the format M+m.E.S (0000.00.00)
			var splitVer = wwwVer.VERSION.split('.');
			// get the version splits
			var appMajor = Number(splitVer[0]);
			var appMinor = Number(splitVer[1]);
			var appExtension = Number(splitVer[2]);
			var appStore = Number(splitVer[3]);

			var storeMajor = (appMajor * 100) + appMinor;
			var storeMinor = appExtension;
			var storePatch = appStore;
			var packageVer = storeMajor.toString() + "." + storeMinor.toString() + "." + storePatch.toString();
			// Set the version of the widget tag
			root.attrib.version = packageVer;
			// End Richie
			fs.writeFileSync("config.xml", doc.write({
				indent: 4
			}), 'utf-8');
		});
	});

	
}

applyCustomizedConfigs();