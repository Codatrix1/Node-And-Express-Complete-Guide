const fs = require("fs");

const stream = fs.createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

// default 64 kb
// last buffer - remainder
// highWaterMark - control size

// const stream = fs.createReadStream("./content/big.txt", {highWaterMark: 90000});
// const stream = fs.createReadStream("./content/big.txt", {encoding: "utf-8"});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
