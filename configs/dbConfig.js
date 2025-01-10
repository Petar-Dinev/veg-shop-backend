const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_CONNECTION || 'mongodb://127.0.0.1:27017/vegShop';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString)
        console.log('DB connected');
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}