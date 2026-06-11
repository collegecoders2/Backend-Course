const express = require('express')

const app = express()

app.get('/profile/:username',(req,res)=>{

    console.log(req.params.username)
    res.send(`Welcome ${req.params.username}`)

})


app.get('/student/:name/:course/:price',(req,res)=>{

    console.log(req.params)
  
    res.send(`${req.params.name} enrolled in ${req.params.course} price ${req.params.price}`)
    
})



app.listen(3000,()=>{
    console.log("server running")
})

