import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url); // The absolute file: URL of the module.
const __dirName = path.dirname(__fileName); // Return the directory name of a path.

const fullPath = path.join(__dirName, "example", "output.txt");

const filePath = "/users/skyy/docs/example.html"; // extract extension

console.log("__fileName: ", __fileName);
console.log("__dirName: ", __dirName);
console.log("fullPath: ", fullPath);

console.log(
  "BaseName of a file-directory: ",
  path.basename("/metallica/bfmv/quux.html")
);

// extname: Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

console.log("File Extn: ", path.extname(filePath));
