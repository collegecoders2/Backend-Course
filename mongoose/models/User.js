const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true
    }
})

const User = mongoose.model('User',signupSchema)

module.exports = User