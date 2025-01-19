const Product = require("../models/Product");

async function getAllProducts() {
    return Product.find({}).lean();
}

async function getProductByName(name) {
    return Product.findOne({ name }).lean();
}

async function getOneProductById(productId) {
    return Product.findById(productId).lean();
}

async function createProduct(productData) {
    return Product.create(productData);
}

async function updateProduct(productId, productData) {
    const existProduct = Product.findById(productId);

    existProduct.name = productData.name;
    existProduct.category = productData.category;
    existProduct.imageUrl = productData.imageUrl;
    existProduct.location = productData.location;
    existProduct.price = productData.price;
    existProduct.quantity = productData.quantity;

    return await existProduct.save()
}

async function deleteProduct(productId) {
    return Product.findByIdAndDelete(productId);
}

module.exports = {
    getAllProducts,
    getOneProductById,
    getProductByName,
    updateProduct,
    createProduct,
    deleteProduct
}

