import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import bodyParser from "body-parser"

import { userRouter } from "./routes/userRoutes.js"


const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`the server is running on http://localhost:${PORT}`)
})

mongoose
    .connect("mongodb://localhost:27017/denties")
    .then(() => {
        console.log("mongoDB is connected")
    })
    .catch((err) => {
        console.log(err)
    })


app.use("/user", userRouter)

