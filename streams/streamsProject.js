//file streaming app. - Copy large file using STREAM

import fs from "fs";

// create a readable stream and a writeable stream

const source = fs.createReadStream("files/large.txt");
const destination = fs.createWriteStream("files/copyLarge.txt");

// Calculate total data copied
let totalBytes = 0;
source.on("data", (chunk) => {
  totalBytes += chunk.length;
  console.log(`Copied ${totalBytes} bytes so far...`);
});

// pipe the readable stream into the writeable stream
source.pipe(destination);

source.on("end", () => {
  console.log(`File copied successfully ✅`);
});
