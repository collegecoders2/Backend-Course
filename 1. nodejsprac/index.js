const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('homepage route')
})

// app.get('/about',(req,res)=>{
//     res.send('about route')
// })
app.post('/signup',(req,res)=>{
    console.log('data inderted into users table')
    res.send('data inserted successfully')
})

app.put('/profile',(req,res)=>{

    res.send('updated the profile data')
})

app.delete('/posts',(req,res)=>{
    res.send('post deleted')
})


app.listen(3000,()=>{
    console.log("server running successfully")
})