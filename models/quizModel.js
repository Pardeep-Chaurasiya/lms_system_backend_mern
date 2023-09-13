const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
        quiz_title:{type:String,required:true},
        quiz_question:[{type:String,required:true}],
        quiz_options:[{type:String,required:true}],
        quiz_answer:{type:String,required:true}
},{timestamps:true})


// create and export section model
module.exports = mongoose.model("quiz",quizSchema)