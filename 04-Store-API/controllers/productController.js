const Product = require("../models/productModel");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = { getAllProductsStatic, getAllProducts };
