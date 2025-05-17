import fs from "fs";

const writeableStream = fs.createWriteStream("files/output.txt"); //write data in chunks

// write data in chunks
writeableStream.write("This is the first chunk bla bla. \n");
writeableStream.write("This is the second chunk bla bla. \n");
writeableStream.write("This is the third chunk bla bla. \n");
writeableStream.write("This is the fourth chunk bla bla. \n");
writeableStream.write("This is the fifth chunk bla bla. \n");

// end the stream
writeableStream.end("This is the FINAL-STREAM. \n");

writeableStream.on("finish", () => {
  console.log("Finished writing to file.. ☑️");
});
