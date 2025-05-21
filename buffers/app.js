import fs from "fs";

//! read the file first and then, encode/decode it
fs.readFile("files/example.txt", (err, data) => {
  if (err) {
    throw err;
  }
  //console.log(data.toString());

  //! encode the file and print it to read
  const encoded = data.toString("base64");
  console.log("\n✅ ENCODED DATA:\n", encoded);

  //! decode the file and print it to read
  const decoded = Buffer.from(encoded, "base64").toString("utf-8");
  console.log("\n☑️  DECODED DATA:\n", decoded);
});
