const User = require('../models/User')
const bcrypt = require('bcrypt')

const signup = async(req,res)=>{

    const hashedPassword =await bcrypt.hash(req.body.password,10)

    const user =await User.create({
        "username":req.body.username,
        "password": hashedPassword
    })
    res.send(user)
}


const login = async(req,res)=>{

    const {username,password} = req.body

    const user =await User.findOne({username})

    if(!user){
        return res.send('user not found')
    }

    const isMatch =await bcrypt.compare(password,user.password)

    if(!isMatch){
        return res.send('password incorrect')
    }

    // if(user.password !== password){
    //     return res.send('password incorrect')
    // }

    res.send('login successfull')
}

module.exports = {
    signup,
    login
}