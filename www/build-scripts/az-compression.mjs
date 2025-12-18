import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';

import fs from 'fs-extra';
import pathUtil from 'path';
 
let myArgs = process.argv.slice(2);
const path = myArgs[0];
console.log("[Azentio] >>> Initiating Compression For: " + path);
 
if (path) {
    let optimizedPath = `${path}/az-optimized`;
    if (myArgs[1]) {
        optimizedPath = myArgs[1];
    }
 
    console.log("[Azentio] >>> Compressing: " + path);
 
    async function compressImages(srcPath, destPath) {
        // Read all files in the source directory
        const files = fs.readdirSync(srcPath);
    
        // Filter for image files (jpg, png, jpeg)
        const images = files.filter(file => /\.(jpg|jpeg|png)$/.test(file));
    
        // Create the destination directory if it doesn't exist
        if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath);
        }
    
        // Loop through each image file and compress it
        for (const image of images) {
            const inputFilePath = pathUtil.join(srcPath, image);
            const outputFilePath = pathUtil.join(destPath, image);
    
            // Compress using sharp (similar to imagemin plugins)
            const imageProcessing = sharp(inputFilePath);
    
            if (/\.(jpg|jpeg)$/.test(image)) {
                // Compress JPG/JPEG with quality similar to imageminJpegtran
                await imageProcessing
                    .jpeg({ quality: 80 })  // Adjust quality as per requirement
                    .toFile(outputFilePath);
            } else if (/\.png$/.test(image)) {
                // Compress PNG with quality similar to imageminPngquant
                await imageProcessing
                    .png({ quality: 80 })  // PNG compression
                    .toFile(outputFilePath);
            }
    
            console.log(`Compressed: ${image}`);
        }
    }
    
    const compressSVGs = async () => {
        // Process SVGs using imagemin
        const svgs = await imagemin([`${path}/*.svg`], {
            destination: optimizedPath,
            plugins: [
                imageminSvgo({
                    plugins: [{
                        name: 'removeViewBox',
                        active: false
                    }]
                })
            ]
        });
        console.log(svgs);
    };
 
    const compressGIFs = async () => {
        // Process GIFs using imagemin
        const gifs = await imagemin([`${path}/*.gif`], {
            destination: optimizedPath,
            plugins: [
                imageminGifsicle({
                    optimizationLevel: 3,
                    colors: 5
                })
            ]
        });
        console.log(gifs);
    };
 
    // Call the compression functions
    await compressImages(path, optimizedPath)
    .then(() => console.log('Image compression completed'))
    .catch(err => console.error('Error during compression:', err));
    await compressSVGs();
    await compressGIFs();
 
} else {
    throw new Error(`[Azentio] >>> No valid path provided.`);
}