const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name is required"],
    },
    email:{
        type:String,
        require:[true,"Email is required"],
        unique:true,
    },
    password:{
        type:String,
        require:[true,"Password is required"]
    }
},{timestamps:true})

// define middleware function which run before saving the data into user document

userSchema.pre("save",async function(next){
    // check if password feild is change or not
    if(!this.isModified("password")){
        next()
    }

    // generate salt for password using bcrypt
    const salt = 10;
    this.password= await bcrypt.hash(this.password,10)
})


// create and export user model
module.exports = mongoose.model("User",userSchema)