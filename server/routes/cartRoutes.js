const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const { getCart, syncCart } = require("../controllers/cartController");
router.get("/", authMiddleware, getCart);
router.post("/sync", authMiddleware, syncCart);

module.exports = router;
