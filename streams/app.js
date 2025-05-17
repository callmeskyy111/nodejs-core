import fs from "fs";

// traditional way to handle files/data -> fs-module
fs.readFile("files/large.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(`☑️ DATA: ${data}`);
  console.log(`✅ DATA-length: ${data.length} bytes`);
});

// Using streams to handle the same file/data
const readableStream = fs.createReadStream("files/large.txt", {
  encoding: "utf-8",
  highWaterMark: 1024,
});

readableStream.on("data", (chunk) => {
  console.log(`✅ Processing.. ${chunk.length} bytes`);
});

//! readableStream: BETTER WAY! 👍🏻
