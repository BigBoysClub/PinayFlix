import Posts from "../models/post.js"

// GET
export const getAllPost = async (req, res) => {
    try {
        const posts = await Posts.find({})
        res.status(202).json(posts)
        
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}


// POST
export const addPost = async (req, res) => {
    const postData = req.body

    try {   
        const newPosts = new Posts(postData)

        await newPosts.save()
        res.status(202).json(newPosts)

    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

