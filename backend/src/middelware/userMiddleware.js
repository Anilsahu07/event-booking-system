const jwt= require("jsonwebtoken")


module.exports.verifyToken=(req,res,next)=>{
    try {
        const token= req.cookies.token
        const decoded= jwt.verify(token, "event-key")
        req.user= decoded
        next()
    } catch (error) {
        res.status(401).json({message:"Invalid Token"})
    }
    
}


module.exports.verifyAdmin=(req,res,next)=>{
    if (req.user.role!== "admin") {
        return res.status(403).json({message:"Access denied"})
    }
    next()
}


