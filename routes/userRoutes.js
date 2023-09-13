const express = require("express");
const userController = require("../controllers/userController");
const {protect} = require("../middleware/authMiddleware")

const router = express.Router()

router.post('/register',userController.registerUser)
router.post('/login',userController.loginController)
router.get('/me',protect,userController.getMe)


module.exports = router