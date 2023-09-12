const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

// define a middleware function for authentication
const protect  = asyncHandler(async(req,res,next)=>{
    let token ;
    try {
        // check if req.headers contains authorization starts with Bearer
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        // if header exists, split to get the token
        token = req.headers.authorization.split(" ")[1];

        // verify token using jwt secret key
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)

        // use id from the decoded token -> to exculde the password
        req.user = await User.findById(decoded.id).select("-password")

        next()
    }
    } catch (error) {
        console.log(error)
        res.status(401);
        throw new Error("Not Authorized, no token")
    }
    
})

module.exports = {protect};