const mongoose = require("mongoose")

const connectDB = async(req,res) =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        .then(()=> console.log(`Mondodb connected`))
        .catch((err)=> console.log(`Error in connecting mongodb`,err))
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server error",error})
    }
}

module.exports = connectDB;