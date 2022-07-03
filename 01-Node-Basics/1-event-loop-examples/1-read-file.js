const fs = require("fs");

console.log("Starting the First Task");

// CHECK FILE PATH
fs.readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  console.log("Finished the first task");
});

console.log("Starting the next task");
