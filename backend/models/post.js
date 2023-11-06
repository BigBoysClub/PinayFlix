import mongoose, { Schema } from "mongoose";


const postSchema = mongoose.Schema({
    creator: {
        name: String,
        creatorImage: String
    },
    title: {
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
    },
    likeBy: {
        type: [String],
    },
    comments: [
        {
            text: String,
            user: {
                email: String,
                image: String
            },
            createdAt: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true })

const Posts = mongoose.model('Posts', postSchema)

export default Posts