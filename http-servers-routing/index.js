import http from "http";

const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/") {
    res.end("Welcome To The Blog Home-Page");
  } else if (req.url === "/blogs") {
    res.end("Here is the latest blog-page");
  } else if (req.url.startsWith("/blogs/")) {
    const postId = req.url.split("/")[2];
    res.end(`You are reading the ${postId} post!`);
  } else {
    res.end("404 - PAGE NOT FOUND!!!");
  }
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT} ☑️`);
});
