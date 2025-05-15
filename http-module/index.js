import http from "http";

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from Node.js http-server!");
});

// Starting the server

httpServer.listen(3000, () => {
  console.log("Server listening on PORT: 3000 ✅");
});
