const productController = require('express').Router();

const { getAllProducts, createProduct } = require('../services/productService');
const { errorParser } = require('../utils/parser');



productController.get('/', async (req, res) => {
    const products = await getAllProducts();

    res.json(products);
});

productController.post('/create', async (req, res) => {
    const productData = req.body;

    try {
        if (Object.values(productData).some(v => !v)) {
            throw new Error('All fields are required!');
        }
        const product = await createProduct(productData);
        res.status(201).json({ product });
    } catch (err) {
        res.status(400).json({ message: errorParser(err) });
    }
});

module.exports = productController;