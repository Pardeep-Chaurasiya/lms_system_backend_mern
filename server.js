const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const connectDB = require("./config/db");

connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/courses", require("./routes/sectionRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
