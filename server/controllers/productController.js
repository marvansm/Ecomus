const Product = require("../models/Product");
const Category = require("../models/Category");
const Color = require("../models/Color");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category")
      .populate("colors");
    res.json(products);
  } catch (err) {
    console.error("error: ", err);
    res.status(500).json({ message: "Products not found" });
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .populate("category")
      .populate("colors");
    res.json(product);
  } catch (err) {
    console.error("error: ", err);
    res.status(500).json({ message: "Product not found" });
  }
};

module.exports = { getProducts, getProductBySlug };
