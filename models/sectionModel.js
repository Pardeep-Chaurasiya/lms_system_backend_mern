const mongoose = require("mongoose")

const sectionSchema = new mongoose.Schema({
        section_name:{type:String,required:true},
        section_text:{type:String,required:true},
        video_title:{type:String,required:true},
        video_url:{type:String,required:true}
},{timestamps:true})


// create and export section model
module.exports = mongoose.model("section",sectionSchema)