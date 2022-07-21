const Product = require("../models/productModel");

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({ featured: true });
  // const products = await Product.find({ name: "albany " });

  // const search = "wo";
  // const products = await Product.find({
  //   name: { $regex: search, $options: "i" },
  // });
  const products = await Product.find({}).sort("-name price");
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  // Destructure the properties off the query string
  const { featured, company, name, sort } = req.query;

  // Define an Empty Query Object
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // console.log(queryObject);

  let result = Product.find(queryObject);

  if (sort) {
    // console.log(sort);
    const sortBy = sort.split(",").join(" ");
    // console.log(sortBy);
    result = result.sort(sortBy);
  } else {
    // default sort
    result = result.sort("createdAt _id");
  }

  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = { getAllProductsStatic, getAllProducts };
