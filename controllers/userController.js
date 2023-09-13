const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const registerUser = asyncHandler(async(req,res)=>{
    try {
        const {name,email,password} = req.body;

        const userExist = await User.findOne({email})

        if(userExist){
            res.status(400);
            throw new Error("User already exists")
        }

        const user = await User.create({
            name,email,password
        })

        if(user){
            res.status(201).json({
                _id:user.id,
                name:user.name,
                email:user.email
            })
        }else{
            res.status(400);
            throw new Error("Invalid User Data")
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

const generateToken = async(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"30d"})
}

const loginController = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email})

    if(user && bcrypt.compare(password,user.password)){
        console.log("user login successfully")
        res.status(200).json({
            _id:user.id,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400);
        throw new Error("Invalid Credentials")
    }
})

const getMe= asyncHandler(async(req,res)=>{
    const {_id,name,email} = await User.findById(req.user.id)

    res.status(200).json({
        _id:_id,
        name:name,
        email:email
    })
})

module.exports = {registerUser,loginController,getMe}