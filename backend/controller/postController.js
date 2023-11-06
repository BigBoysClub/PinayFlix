import Posts from "../models/post.js"

// GET
export const getAllPost = async (req, res) => {
    try {
        const posts = await Posts.find({}).sort({ createdAt: -1 })
        res.status(202).json(posts)
        
    } catch(error) {
        res.status(404).json({error: error.message})
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
        res.status(404).json({error: error.message})
    }
}


// LIKE POST
export const likePost = async (req, res) => {
    const postId = req.params.id;
    const userId = req.user._id
    

    try {
        const post = await Posts.findById(postId)

        if (!post) 
            return res.status(404).json({ error: 'Post not found' })

        if (post.likeBy.length !== 0 && post.likeBy.includes(userId))
            return res.status(400).json({ error: 'User has already liked this post' });

        post.likeBy.push(userId.toString());

        post.likeCount = post.likeBy.length

        await post.save()

        res.status(202).json({message: 'Post successfully liked'})

    } catch(error) {
        res.status(404).json({error: error.message})
    }
}



// COMMENT A POST
export const commentPost = async (req, res) => {
    const postId = req.params.id
    const { text, user } = req.body

    try {
        const post = await Posts.findById(postId)
            
        if (!post)
            res.status(404).json({error: 'Post not found'})
        
        const newComment = { text, user }

        post.comments.push(newComment)

        await post.save()
        
        res.status(200).json({comments: post.comments})

    } catch(error) {
        res.status(404).json({error: error.message})
    }
}



// GET COMMENTS IN A POST
export const getComments = async (req, res) => {
    const postId = req.params.id

    try {
        const post = await Posts.findById(postId)

        if (!post) 
            res.status(404).json({error: 'Post not found'})
    
        res.status(200).json(post.comments)

    } catch(error) {
        res.status(404).json({error: error.message})
    }
}