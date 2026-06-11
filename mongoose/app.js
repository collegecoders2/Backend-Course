const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/collegecoders')
.then(()=>{
    console.log('mongoDB connected')
}).catch((err)=>{
    console.log('mongoDB not connected')
})

// Schema Design

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

app.get('/users',async(req,res)=>{
    const users = await User.find()

    res.send(users)
})

app.post('/login',async(req,res)=>{

    const {username,password} = req.body

    const user =await User.findOne({username})

    if(!user){
        return res.send('user not found')
    }

    if(user.password !== password){
        return res.send('password incorrect')
    }

    res.send('login successfull')
})



app.listen(3000,()=>{
    console.log('Server Running Successfully')
})