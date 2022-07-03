const path = require("path");

// separator
console.log(path.sep);

// path.join
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

// path.basename
const base = path.basename(filePath);
console.log(base);

// resolve provides an absolute path
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutePath);
