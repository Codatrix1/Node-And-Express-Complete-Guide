const express = require("express");
const app = express();

// Data Source
const { products } = require("./data");

//-------------
// Operations
//-------------
app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">Products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

//--------
// PARAMS
app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);

  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id === +productID);

  // Check for product in the DB with the given ID
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  return res.json(singleProduct);
});

//-------------------------
// More Complicated PARAMS
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);

  const { productID, reviewID } = req.params;
  console.log(productID, reviewID);

  res.send("Hello There");
});

//---------------------
// Listening to Server
//---------------------
app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
