// IMPORT
const http = require("http");

// CREATE SERVER
const server = http.createServer((req, res) => {
  console.log("User hit the server");
  res.end("Home Page");
});

// LISTEN TO SERVER
server.listen(5000, () => {
  console.log(`Application running on port 5000...`);
});
