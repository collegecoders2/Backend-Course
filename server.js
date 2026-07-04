const express = require('express')

const app = express()

const userRoutes = require('./routes/userRoutes')
const products = require('./routes/products')

app.use(userRoutes)
app.use(products)


app.listen(3000,()=>{
    console.log('server running')
})