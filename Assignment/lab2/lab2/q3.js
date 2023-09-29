const fs = require('fs');
const zlib = require('zlib');

const inputFile = 'input.txt'; 

// zip file
const zipInput = fs.createReadStream(inputFile);
const zipOutput = fs.createWriteStream(`${inputFile}.zip`);
const zipStream = zlib.createGzip();

zipInput.pipe(zipStream).pipe(zipOutput);

zipOutput.on('finish', () => {
  console.log(`file '${inputFile}' zip as '${inputFile}.zip'`);

  // Step 2: 解压文件
  const unzipInput = fs.createReadStream(`${inputFile}.zip`);
  const unzipOutput = fs.createWriteStream(`${inputFile}_unzipped.txt`);
  const unzipStream = zlib.createGunzip();

  unzipInput.pipe(unzipStream).pipe(unzipOutput);

  unzipOutput.on('finish', () => {
    console.log(`file '${inputFile}.zip' zip as '${inputFile}_unzipped.txt'`);
  });
});