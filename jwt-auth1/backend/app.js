const dotenv = require('dotenv')
dotenv.config()

const authMiddleware = require('./middelware/authMiddelware')
const express = require("express")
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('mongoDB connected')
}).catch((err)=>{
    console.log("mongoDB not connected")
})

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

const User = mongoose.model("User",userSchema);

app.post("/signup",async(req,res)=>{
    const {username,password} = req.body;

    const hashedpwd = await bcrypt.hash(password,10);

    await User.create({
        username:username,
        password:hashedpwd,
    })

    res.send('user created successfully')
})


app.post("/login",async(req,res)=>{
    const {username,password} = req.body;

    const user =await User.findOne({username})

    if(!user){
        return res.send({
            message:"user not found"
        })
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    )

    if(!isMatch){
        return res.send({
            message:'password incorrect'
        });
    }

    const token = jwt.sign(
        {
            username:user.username
        },
        process.env.JWT_SECRET
    )

    res.send({
        message:"Login succesfull",
        token
    })
})

app.get("/profile",(req,res)=>{
    res.send("Profile data fetched")
})


app.listen(process.env.PORT,()=>{
    console.log('server running');
})