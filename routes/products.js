const express = require('express')

const router = express.Router()


router.get('/products',(req,res)=>{
    res.send("All Products")
})

router.get('/products/:id',(req,res)=>{
    res.send(`Product ${req.params.id}`)
})

module.exports = router