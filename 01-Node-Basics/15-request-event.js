const http = require("http");

// const server = http.createServer((req,res)=> {
//   res.end("Welcome")
// })

// Using event emitter API
const server = http.createServer();

// emits request event
// Subscribe to event / listen to it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
