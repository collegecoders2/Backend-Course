const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{

    const token = req.headers.authorization;

    if(!token){
        return res.send("un-authorized request");
    }
    try{
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        console.log(decoded);
    }catch(err){
        return res.send('Un-authorized user')
    }

    next();

}

module.exports = authMiddleware;