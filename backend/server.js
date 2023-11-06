import express  from "express";
import cors from "cors"
import mongoose from "mongoose";
import postsRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json({ limit: '10mb' }))
app.use(cors())

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









