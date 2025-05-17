import fs from "fs";

//create a readable stream

const readableStream = fs.createReadStream("files/large.txt", {
  encoding: "utf-8",
  highWaterMark: 1024,
});

readableStream.on("data", (chunk) => {
  console.log(`Received Chunk: ${chunk.length} bytes ✅`);
});

readableStream.on("end", ()=>{
    console.log("Finished reading file.. ☑️")
})