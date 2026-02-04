const express = require("express");
const router = express.Router();

const { addProduct, getProducts } = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");

// POST /api/products
router.get("/", getProducts)

router.post("/", protect, addProduct);

module.exports = router;
