import express  from "express"
import { loginUser, signupUser } from "../controller/userController.js" 

const router = express.Router()

// LOGIN
router.post('/login', loginUser)

// SIGN UP 
router.post('/signup', signupUser)


export default router
