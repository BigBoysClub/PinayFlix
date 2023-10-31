import express from 'express'
import { getAllPost, addPost } from '../controller/postController.js'

const router = express.Router()

// GET REQUEST
router.get('/', getAllPost)

// POST REQUEST
router.post('/', addPost)


export default router