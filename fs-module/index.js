import { readFile, writeFile } from "node:fs";

//readFile: Asynchronously reads the entire contents of a file. 📖
readFile("files/example.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("Data/Contents: ", data);
});

// writeFile: When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer. ✍🏻
const writeFileContent = "Hallo! Guten Tag/Abend aus Kolkata, Indien!";
writeFile("files/writeFile.txt", writeFileContent, "utf-8", (err) => {
  if (err) {
    throw err;
  }
  console.log("File-Content written ✅");
});

//test: console.log("Fs-module! ✅");
