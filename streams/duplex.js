import { Duplex } from "stream";

// Duplex streams are streams that implement both the Readable and Writable interfaces.
// Examples of Duplex streams include:
// TCP sockets
// zlib streams
// crypto streams

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(`Writing: ${chunk.toString()}`);
    callback();
  },
  read() {
    this.push("Hello from Duplex! \n");
    this.push(null);
  },
});

// Listen to the data-event
duplexStream.on("data", (chunk) => {
  console.log(`Reading: ${chunk.toString()}`);
});

// Writing and ending the stream
duplexStream.write("This is a text writing..");
duplexStream.end();
