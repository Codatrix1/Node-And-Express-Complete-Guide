// imports
const colors = require("colors");
const http = require("http");

// create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Home Page</h1>");
  res.end();
});

// listen to server
server.listen(5000, () => {
  console.log(`Application running on port 5000...`.yellow.bold);
});
