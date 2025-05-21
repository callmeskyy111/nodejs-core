const buffer = Buffer.from("Hello World!", "utf-8");
console.log(buffer); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
console.log(buffer.toString()); //<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
console.log(buffer.length); //12

//Encoding : string -> binary-data
//Decoding: binary-data -> string
//Common encoding-method: 'utf-8'

//! Creating a buffer with utf-8 encoding
const bufferUtf8 = Buffer.from("Hello!", "utf-8");
console.log(bufferUtf8); //<Buffer 48 65 6c 6c 6f 21>

//! Convert BUFFER into base64 encoding 🛡️
const bufferBase64 = bufferUtf8.toString("base64");
console.log(bufferBase64); //SGVsbG8h

//! Now, decoding ->
const decodedBuffer = Buffer.from(bufferBase64, "base64").toString("utf-8");
console.log(decodedBuffer); //Hello
