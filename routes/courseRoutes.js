const express = require(express);
const courseController = require("../controllers/courseController");

const router = express.Router();

router.post("/newCourse", courseController.newCourse);

router.get("/", courseController.getCourses);
router.get("/all", courseController.getAllCourse);
router.get("/:id", courseController.getCoursesById);

router.post("/addcourse", courseController.setCourse);

router
  .route("/:id")
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;
