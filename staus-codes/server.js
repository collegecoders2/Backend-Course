const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const app = express()

app.use(express.json())

// mongodb connection
mongoose.connect('mongodb://localhost:27017/collegecoders',)
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

app.post('/signup', async (req,res)=>{

    try{

        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        )

        const user = await User.create({
            username:req.body.username,
            password:hashedPassword
        })

        res.status(201).send('User Created Successfully')

    }catch(err){

        res.status(500).send(err.message)

    }

})

app.post('/login', async (req,res)=>{

    try{

        const { username, password } = req.body

        if(!username || !password){
            res.status(400).send('please enter username & password')
        }

        const user = await Use.fidOne({
            username
        })

        if(!user){
            return res.status(404).send('User Not Found')
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if(!isMatch){
            return res.status(401).send('Password Incorrect')
        }

        res.status(200).send('Login Successful')

    }catch(err){

        res.status(500).send(err.message)

    }

})

app.get('/users',async(req,res)=>{
    const users = await User.find()

    res.status(200).send(users)
})

app.listen(3000,()=>{
    console.log('server running')
})