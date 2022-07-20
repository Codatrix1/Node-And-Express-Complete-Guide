const getAllProductsStatic = async (req, res) => {
  throw new Error("Testing Async Errors");
  res.status(200).json({ msg: "All Products Static" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "All Products" });
};

module.exports = { getAllProductsStatic, getAllProducts };
