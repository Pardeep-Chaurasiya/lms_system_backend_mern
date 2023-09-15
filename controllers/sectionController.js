const Course = require("../models/cousreModel");

const newSection = async (req, res) => {
  const id = req.body.id;
  const courseName = req.body.coursename;
  const sectionName = req.body.section;
  const sectionDescription = req.body.description;
  const videoTitle = req.body.video;
  const videoURL = req.body.url;

  try {
    const updatedCourse = await Course.findOneAndUpdate(
      { course_name: courseName },
      {
        $push: {
          sections: {
            section_name: sectionName,
            section_text: sectionDescription,
            video_title: videoTitle,
            video_url: videoURL,
          },
        },
      },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).send("Course not Found");
    }

    res.send("Updated Data Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("An internal server error encountered");
  }
};

module.exports = { newSection };
