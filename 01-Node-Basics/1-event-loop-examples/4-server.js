const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Incoming Request");
  res.end("Hello There");
});

// Async Action: Server
server.listen(5000, () => {
  console.log("Application running on port 5000...");
});
