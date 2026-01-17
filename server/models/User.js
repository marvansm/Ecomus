const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  sirname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  cart: [
    {
      productId: { type: String, required: true },
      name: String,
      price: String,
      img: String,
      quantity: { type: Number, default: 1 },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
