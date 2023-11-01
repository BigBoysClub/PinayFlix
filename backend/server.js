import express  from "express";
import cors from "cors"
import mongoose from "mongoose";
import postsRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import dotenv from "dotenv"

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

app.use('/api/posts', postsRoutes)
app.use('/api/user', userRoutes)

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
        app.listen(process.env.PORT, () => console.log('Connected to db'))
        
    } catch(error) {
        console.log(error)
    }
}

connectDb()









