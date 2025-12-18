const { execSync } = require('child_process');
const root = execSync("npm root -g").toString().trim();
execSync('npm  i -g filereader')
execSync('npm  i -g mime-types')

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const mime = require(`${root}/mime-types`)

const rightFormat = "correct format is:\nnode base64.js OUTPUT_FILENAME PATH_TO_READ_FROM add_mediatype?"

let myArgs = process.argv.slice(2);
const outputfile = myArgs[0];

const path = myArgs[1];

const addMediaType = JSON.parse(myArgs[2] != null ? myArgs[2] : true);

// const append = JSON.parse(myArgs[3] != null ? myArgs[3] : false); ## no need for append anymore
const maxFileSizeInBytes = 15000; //15 KB

const resultObj = {};

if (!outputfile) {
    console.error("Please enter output file\n" + rightFormat);
    process.exit(1);
}

if (!path) {
    console.error("Please enter path to directory\n" + rightFormat);
    process.exit(1);
}

let files = fs.readdirSync(path);
getContent();

async function getContent() {
    let length = 0;
    for (const file of files) {
        const stats = fs.statSync(path + "/" + file)
        const fileSizeInBytes = stats.size;
        if (fileSizeInBytes < maxFileSizeInBytes) {
            length++;
            let fullPath = path + "/" + file;
            fullPath = fullPath.replace(/\/\//g, "/");
            data = await readFile(fullPath, { encoding: 'base64' });
            const mimeInfo = mime.lookup(file);
            if (mimeInfo == "false" || mimeInfo == false) {
                console.error("[Azentio] >>> Error in mime type for file: " + file);
            } else {
                if (addMediaType) {
                    data = `data:${mimeInfo};base64,` + data;
                }

                if (!outputfile.includes(file)) {
                    resultObj[file.split(".")[0]] = data
                    // fs.appendFileSync(outputfile, `"` + file.split(".")[0] + `" : "` + data + trailing, { encoding: 'utf8' });
                } else {
                    console.log(outputfile);
                    console.log("");
                }
            }
        } else {
            resultObj[file.split(".")[0]] = "<" + file.split(".")[1]
            console.log("[Azentio] >>> Skipped " + file + " file since its size(" + fileSizeInBytes + ")is greater than " + maxFileSizeInBytes + " bytes");
        }
    }
    fs.writeFileSync(outputfile, JSON.stringify(resultObj), { encoding: 'utf8' }, () => {
    });
}