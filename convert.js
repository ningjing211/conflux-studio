const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

// Function to convert MOV to WebM
function convertMovToWebm(inputFilePath, outputFilePath) {
  ffmpeg(inputFilePath)
    .output(outputFilePath)
    .on('end', function() {
      console.log(`Conversion finished for ${inputFilePath}`);
    })
    .on('error', function(err) {
      console.error(`Error during conversion for ${inputFilePath}: ` + err.message);
    })
    .run();
}

// Folder containing MOV files
const videoFolder = path.join(__dirname, 'video');

// Read all files in the video folder
fs.readdir(videoFolder, (err, files) => {
  if (err) {
    console.error('Error reading directory: ', err);
    return;
  }

  // Filter .mov files and convert each one
  files.filter(file => file.endsWith('.mov')).forEach(file => {
    const inputFilePath = path.join(videoFolder, file);
    const outputFilePath = path.join(videoFolder, file.replace('.mov', '.webm'));
    
    console.log(`Converting ${file} to WebM...`);
    convertMovToWebm(inputFilePath, outputFilePath);
  });
});
