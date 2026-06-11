// const math = require('./math')

// const addition = math.multiply(10,50)
// console.log(addition)

const fs = require('fs')

// fs.writeFile('sample.txt','this is college coders2',(err)=>{
//     if(err){
//         console.log("error occured")
//         return
//     }
//     console.log("succussfully inserted")
// })

fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('error')
        return
    }
    console.log(data);
})

