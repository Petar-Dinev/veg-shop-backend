const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/i.test(value),
            message: 'Email must valid'
        }
    },
    username: {
        type: String,
        minLength: [3, 'Username must be at least 3 characters long']
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.index({ email: 1 }, { collation: { locale: 'en', strength: 2 } })

const User = model('User', userSchema)

module.exports = User;