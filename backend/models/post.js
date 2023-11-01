import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    likeCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const Posts = mongoose.model('Posts', postSchema)

export default Posts