import Users from "../models/statics/utils.js" 
import jwt from "jsonwebtoken"  

// CREATE TOKEN
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
}

// LOGIN
export const loginUser = async (req, res) => {
    res.json({message: "login page"})
}

// SIGNUP
export const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user  = await Users.signup(email, password)
        // returns the parts of jwt in a big long string (header, payload) encoded
        const token = createToken(user._id)

        res.status(200).json({ user, token })

    } catch(error) {
        res.status(404).json({message: error.message}) 
    }
} 