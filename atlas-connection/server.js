const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

// mongodb connection
mongoose.connect(process.env.MONGODB_URI,{
    dbName:'collegecoders'
})
.then(()=>{
    console.log('mongoDB connected')
}).catch((err)=>{
    console.log('mongoDB not connected')
})

//mongoose schema
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

// model
const User = mongoose.model('User',signupSchema)

app.get('/users',async(req,res)=>{
   try{

    const users =await User.find()
    res.send(users)

   }catch(err){
    res.send('unable to fetch users')
   }
})

app.get('/users/:username',async(req,res)=>{
    try{
        const user =await User.findOne({
        "username":req.params.username
        })
        res.send(user)

    }catch(err){
        res.send('unable to fetch user')
    }
})


app.listen(process.env.PORT,()=>{
    console.log('Server Running Successfully')
})