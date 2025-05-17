import { Transform } from "stream";

// Transform streams are Duplex streams where the output is in some way related to the input. Like all Duplex streams, Transform streams implement both the Readable and Writable interfaces.
// Examples of Transform streams include:
// zlib streams
// crypto streams

//Ex. An app that converts incoming str. to uppercase
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(transformStream).pipe(process.stdout); //works based on 'enter' key press!
