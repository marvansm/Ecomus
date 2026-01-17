const User = require("../models/User");

const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user.cart);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching cart", error: err.message });
  }
};

const syncCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = cartItems;
    await user.save();

    res.json({ message: "Cart synced successfully", cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: "Error syncing cart", error: err.message });
  }
};

module.exports = { getCart, syncCart };
