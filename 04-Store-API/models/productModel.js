const mongoose = require("mongoose");

//----------------------
// Define Product Schema
//----------------------
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a product name"],
  },

  price: {
    type: Number,
    required: [true, "Please provide a product price"],
  },

  featured: {
    type: Boolean,
    default: false,
  },

  rating: {
    type: Number,
    default: 4.5,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  company: {
    type: String,
    // enum: ["marcos", "liddy", "ikea", "caressa"],
    enum: {
      values: ["marcos", "liddy", "ikea", "caressa"],
      message: "{VALUE} is not supported",
    },
  },
});

//-------------------------
// Create Model and export
//------------------------
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
