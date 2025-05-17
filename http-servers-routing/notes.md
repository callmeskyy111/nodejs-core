### Creating basic http-server 🛜
```js
import http from "http";
// create a new server
const server = http.createServer((req, res) => {
  // set the response-headers
  res.writeHead(200, { "content-type": "text/plain" });

  // send response
  res.end("Hello From NodeJs!");
});

const PORT = 3001;

// listening on the PORT/starting the server
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT} ✅`);
});
```

### Handling Requests And Sending Responses 🗃️
```js
import http from "http";

// create a new server
const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method}`); // Request Method: GET or POST
  console.log(`Request URL: ${req.url}`); // Request URL: /

  // set the response-headers
  res.writeHead(200, { "content-type": "text/plain" });

  // define different request-methods (GET,POST etc.)
  if (req.method === "GET") {
    res.end("GET Request made ☑️");
  } else if (req.method === "POST") {
    res.end("POST Request made ☑️");
  } else {
    res.end("UNHANDLED Request-method 🔴");
  }

  // send response
  // res.end("Hello World");
});

const PORT = 3001;

// starting the server
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT} ☑️`);
});
```

### Routing Basics ↗️
```js
import http from "http";

// create a new server
const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);

  // set the response-headers
  res.writeHead(200, { "content-type": "text/plain" });

  //basic routing
  if (req.url === "/") res.end("HOME Page");
  if (req.url === "/about") res.end("ABOUT Page");
  if (req.url === "/contact") res.end("CONTACT Page");
  else {
    //res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 - PAGE NOT FOUND!!!");
   
  }
});

const PORT = 3001;

// starting the server
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT} ☑️`);
});
```
### Practical App: Basic Blog-Server With Routing 📝

