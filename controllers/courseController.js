const Course = require("../models/cousreModel")
const Section = require("../models/sectionModel")
const Video = require("../models/videoModel")
const Quiz = require("../models/quizModel")

const getCourse = async(req,res) =>{
    const course = await Course.find()

    res.status(200).json(course)
}

const getCourseById = async(req,res)=>{
    const {id} = req.params;

    const course = await Course.findById(id).populate("section")

    res.status(200).json(course)
}

const setCourse = async(req,res)=>{
    const course = new course({
        course_name:req.body.course_name,
        course_details:req.body.course_details,
        author:req.body.author,
        level:req.body.level,
        category:req.body.category,
        course_img:req.body.course_img
    })

    const savedCourse = await course.save();


    // iterate over section & add them to course
    if(req.body.sections){
        for(let i=0;i<req.body.sections.length;i++){
            const section = req.body.section[i];

            // create new section
            const newSection = new Section({
                section_name:section.section_name,
                section_text:section.section_text
            })

            const savedSection = await newSection.save();

            // iterate over video in section
            for(let j=0;j<section.videos.length;j++){
                const video = section.video[j];

                const newVideo = new Video({
                    video_url : video.video_url,
                    video_title : video.video_title
                })

                const savedVideo = await newVideo.save();

                // add video ID to section Video_id array
                savedSection.video_ids.push(savedVideo._id)


                // add quiz to the section 
                if(section.quizzes){
                    for(let k=0;k<section.quizzes.length;k++){
                        const quiz = section.quizzes[k];

                        const newQuiz = new Quiz({
                            quiz_title : newQuiz.quiz_title,
                            quiz_question : newQuiz.quiz_question,
                            quiz_options : newQuiz.quiz_options,
                            quiz_answer : newQuiz.quiz_answer,
                        })

                        const savedQuiz = await newQuiz.save();

                        // add quiz to section
                        savedSection.quiz_ids.push(savedQuiz._id);
                    }
                }

                // saved the course with added section,videos,quizzes
                    const updatedCourse = await savedCourse.save()

                    res.status(201).json(updatedCourse);
            }
        }
    }
}
