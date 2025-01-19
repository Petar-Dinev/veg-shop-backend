const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        minLength: [3, 'Product name must be at least 3 characters long']
    },
    category: {
        type: String,
        enum: ['vegetable', 'fruit'],
        required: true
    },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => /^https?:\/\/.+/.test(value),
            message: 'Image url must be valid url address'
        }
    },
    location: {
        type: String,
        minLength: [3, 'Location must be at least 3 characters long']
    },
    price: {
        type: Number,
        min: [0.01, 'Price must be positive number']
    },
    quantity: {
        type: Number,
        min: [1, 'Product quantity must be positive number']
    }
    
});

productSchema.index({ name: 1 }, { collation: { locale: 'en', strength: 2 } });

const Product = model('Product', productSchema);

module.exports = Product;