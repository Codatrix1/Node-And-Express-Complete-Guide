const fs = require("fs");

console.log("Start");

const first = fs.readFileSync("./content/first.txt");
const second = fs.readFileSync("./content/second.txt");

fs.writeFileSync(
  "./content/result-sync.txt",
  `The result is : ${first}, ${second}`,

  // Appends to the current content of the file
  { flag: "a" }
);

console.log("Done with the task");
console.log("Starting the next one");
