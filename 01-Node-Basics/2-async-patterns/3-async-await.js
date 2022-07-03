const fs = require("fs").promises;

// const util = require("util");

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

const start = async () => {
  try {
    const first = await fs.readFile("./content/first.txt", "utf-8");
    const second = await fs.readFile("./content/second.txt", "utf-8");

    await fs.writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
