const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Define Routes
router.route("/").get(productController.getAllProducts);
router.route("/static").get(productController.getAllProductsStatic);

module.exports = router;
