const Product = require("../models/product");



const addProduct = async (req, res) => {

    // admin check
if (req.user.role !== "admin") {
  return res.status(403).json({ message: "Admin access only" });
}

    try {
        const {name, category, price, stock, description, image} = req.body;

        if (!name || !category || !price) {
            return res.status(400).json({message: "required fields missing"});
        }

        const product = await Product.create({
            name,
            category,
            price,
            stock,
            description,
            image,
        });
        res.status(201).json({
            message: "product added successfully",
            product,
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {addProduct, getProducts};