import express  from "express"
import { loginUser, signupUser, getAllUser } from "../controller/userController.js" 

const router = express.Router()

// LOGIN
router.post('/login', loginUser)

// SIGN UP 
router.post('/signup', signupUser) 

// GET ALL USER
router.get('/', getAllUser) 



export default router
