import express from 'express'
import { getAllPost, addPost, likePost, commentPost, getComments } from '../controller/postController.js'
import { requireAuth } from '../middleware/requireAuth.js'

const router = express.Router()

// authorization middleware 
router.use(requireAuth)

// GET REQUEST
router.get('/', getAllPost)

// POST REQUEST
router.post('/', addPost)

// LIKE POST
router.patch('/like/:id', likePost)

// COMMENT POST
router.post('/comment/:id', commentPost)

// GET COMMENTS IN A POST
router.get('/comment/:id', getComments)

export default router