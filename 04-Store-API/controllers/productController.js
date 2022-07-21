const Product = require("../models/productModel");

const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({ featured: true });
  // const products = await Product.find({ name: "albany " });

  // const search = "wo";
  // const products = await Product.find({
  //   name: { $regex: search, $options: "i" },
  // });

  // const products = await Product.find({}).sort("-name price");

  // const products = await Product.find({}).select("name price");

  // const products = await Product.find({})
  //   .sort("name")
  //   .select("name price")
  //   .limit(10)
  //   .skip(5);

  const products = await Product.find({ price: { $gt: 30 } })
    .sort("price")
    .select("name price");

  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  // Destructure the properties off the query string
  // console.log(req.query);

  const { featured, company, name, sort, fields, numericFilters } = req.query;

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

  // numericFilters Logic
  if (numericFilters) {
    console.log(numericFilters);

    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(<|>|>=|=|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  console.log(queryObject);

  // SORT Logic
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

  // Select FIELDS Logic
  if (fields) {
    const fieldsBy = fields.split(",").join(" ");
    result = result.select(fieldsBy);
  }

  // PAGINATION, LIMIT and SKIP Logic
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);
  // 23 products 7 limit
  // 4 pages 7 7 7 2

  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = { getAllProductsStatic, getAllProducts };
