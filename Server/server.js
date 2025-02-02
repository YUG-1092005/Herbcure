const express = require("express");
const app = express()
const connectDB = require("./config/db")
const userRouter = require("./routes/userRoutes");
require("dotenv").config()

connectDB()
const PORT = process.env.VITE_BASIC_SERVER_PORT;

//Basic configuration
app.listen(PORT, () => {
    console.group(`Server running on port ${PORT}`)
})

//User login/signup endpoints
app.use("/user", userRouter);