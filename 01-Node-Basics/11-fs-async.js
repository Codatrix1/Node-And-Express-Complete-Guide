const fs = require("fs");

console.log("Start");

fs.readFile("./content/first.txt", "utf-8", (err, data1) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = data1;

  fs.readFile("./content/second.txt", "utf-8", (err, data2) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = data2;

    fs.writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with the task");
      }
    );
  });
});

console.log("Starting the next one");
