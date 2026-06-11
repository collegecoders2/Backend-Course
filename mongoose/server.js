const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const authRoutes = require('./routes/authRoutes')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/collegecoders')
.then(()=>{
    console.log('mongoDB connected')
}).catch((err)=>{
    console.log('mongoDB not connected')
})

// Schema Design



// app.post('/signup',async(req,res)=>{

//     const user =await User.create(req.body)

//     res.send(user)
// })

app.use(authRoutes)


app.listen(3000,()=>{
    console.log('Server Running Successfully')
})