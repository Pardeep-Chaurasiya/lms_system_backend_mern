const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()

const connectDB = require("./config/db")

connectDB();

const app = express()


// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))