const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  price: Number,
  oldPrice: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  colors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Color",
    },
  ],
  images: {
    main: String,
    hover: String,
  },
  isBestSeller: Boolean,
  isNewArrival: Boolean,
  isOnSale: Boolean,
});

module.exports = mongoose.model("Product", ProductSchema);
