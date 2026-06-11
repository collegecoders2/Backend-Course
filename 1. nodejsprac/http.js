const http = require('http')

const server = http.createServer((req,res)=>{
    
    

    if (req.url == "/profile"){
        return res.end("profile route")
    }

    if (req.url == "/contact"){
        return res.end("contact route")
    }

    if (req.url == "/"){
        return res.end("College Coders")
    }
    if (req.url == "/about"){
        return res.end("about route")
    }

    return res.end("404 not found")
})

server.listen(3000)
