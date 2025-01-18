const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const blackList = new Set();
const JWT_SECRET = process.env.JWT_SECRET;

async function login(email, password) {

    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })

    if (!user) {
        throw new Error('Invalid email or password')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw new Error('Invalid email or password')
    }

    return createToken(user)
};

async function register(email, username, password) {
    const exist = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })

    if (exist) {
        throw new Error('Email is already taken')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ email, username, password: hashedPassword })

    return createToken(user)
};

function logout(token) {
    blackList.add(token)
}

async function createToken({ _id, email, username }) {
    const payload = {
        _id,
        email,
        username
    }

    const token = jwt.sign(payload, JWT_SECRET);

    return {
        _id,
        email,
        username,
        accessToken: token
    }
}

function verifyToken(token) {
    if (blackList.has(token)) {
        throw new Error('Token is blacklisted!')
    }

    return jwt.verify(token, JWT_SECRET)
};


module.exports = {
    login,
    register,
    logout,
    verifyToken
};