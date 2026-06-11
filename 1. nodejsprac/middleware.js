const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    console.log('middleware 1')

    next()
})

app.use((req,res,next)=>{
    console.log('middleware 2')

    next()
})

app.post('/signup',(req,res)=>{

    console.log(req.body)
    res.send('data recieved succssfully')
})


app.listen(3000,()=>{
    console.log('server running')
})