const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
    video_title:{type:String,required:true},
    video_url:{type:String,required:true}
},{timestamps:true})


// create and export section model
module.exports = mongoose.model("video",videoSchema)