//----------
// IMPORTS
//----------
const colors = require("colors");
const http = require("http");
const fs = require("fs");

// get all files
const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeImage = fs.readFileSync("./navbar-app/logo.svg");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");

//---------------
// CREATE SERVER
//---------------
const server = http.createServer((req, res) => {
  //   console.log(req.method);
  //   console.log(req.url);

  const url = req.url;

  // Home
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();

    // About
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();

    // Styles
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();

    // image/svg
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();

    // Logic
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();

    // Not Found
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Oops! Page Not Found</h1>");
    res.end();
  }
});

//-------------------
// LISTEN TO SERVER
//-------------------
server.listen(5000, () => {
  console.log(`Application running on port 5000...`.yellow.bold);
});
