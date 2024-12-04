const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function convertTo3_2(inputDir, outputDir) {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read all files in the input directory
    fs.readdir(inputDir, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err}`);
            return;
        }

        files.forEach(file => {
            if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
                const inputPath = path.join(inputDir, file);
                const outputPath = path.join(outputDir, file);

                // Open the image
                sharp(inputPath)
                    .metadata()
                    .then(metadata => {
                        const { width, height } = metadata;
                        const aspectRatio = 3/2;

                        // Determine new dimensions
                        let newWidth, newHeight;
                        if (width / height > aspectRatio) {
                            newHeight = height;
                            newWidth = Math.round(newHeight * aspectRatio);
                        } else {
                            newWidth = width;
                            newHeight = Math.round(newWidth / aspectRatio);
                        }

                        // Resize and add black background
                        return sharp(inputPath)
                            .resize(newWidth, newHeight, {
                                fit: 'contain',
                                background: { r: 0, g: 0, b: 0, alpha: 1 }
                            })
                            .toFile(outputPath)
                            .catch(err => console.error(`Error processing file ${file}:`, err));
                    })
                    .then(() => console.log(`Converted ${file}`))
                    .catch(err => console.error(`Error in metadata step for ${file}:`, err));
            }
        });
    });
}

// Usage
const inputDir = './tranchart_source_images/';
const outputDir = './tranchart_output_images/';
convertTo3_2(inputDir, outputDir);
