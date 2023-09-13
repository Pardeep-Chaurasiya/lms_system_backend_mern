const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    id:{
        type:String,
    },
    course_name:{
        type:String,
        required:[true,"course name is required"],
    },
    course_details:{
        type:String,
        required:[true,"course detail is required"]
    },
    author:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    section:[
        {
            section_name:{type:String},
            section_text:{type:String},
            video_title:{type:String},
            video_url:{type:String}
        }
    ],
    category:{
        type:String,
        required:true
    },
    course_img:{
        type:String
    }
},{timestamps:true})



// create and export course model
module.exports = mongoose.model("course",courseSchema)