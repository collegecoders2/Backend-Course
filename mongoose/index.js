const express = require('express')
const mongoose = require('mongoose')

const app = express()
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


app.post('/signup',async(req,res)=>{

    const user =await User.create(req.body)

    res.send(user)
})

app.get('/users',async(req,res)=>{
    const users = await User.find()

    res.send(users)
})


app.get('/users/:username',async(req,res)=>{
    const user = await User.findOne({
        "username": req.params.username
    })

    res.send(user)
})

app.put('/users/:username',async(req,res)=>{
    await User.updateOne(
        { "username": req.params.username},
        req.body
    )

    res.send("Password updated")
})

app.delete('/users/:username',async(req,res)=>{

    await User.deleteOne({
        "username": req.params.username
    })
    res.send('deleted successfully')
})


app.get('/', (req,res)=>{
    res.send('Home Route')
})

app.listen(3000,()=>{
    console.log('Server Running Successfully')
})