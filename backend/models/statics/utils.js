import Users from "../user.js";
import bcrypt from "bcrypt"
import validator from "validator"

// static singup method
const signup = async function(email, password, image) { 
    
    if (!email || !password) 
        throw Error('All fields must be filled')

    if (!image)
        throw Error('Image is required')


    if (!validator.isEmail(email))
        throw Error('Email is not valid')

    if (password.length < 6)
        throw Error('Password is not strong enough')

    const exists = await this.findOne({ email })

    if (exists) 
        throw Error('Email already exists')  

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash, image })

    return user
}

// static login method
const login = async function(email, password) {
    
    if (!email || !password) 
        throw Error('All fields must be filled')

    const user = await this.findOne({ email })

    if (!user)
        throw Error('Invalid email')

    const match = await bcrypt.compare(password, user.password)

    if (!match) 
        throw Error('Incorrect password')
    
    return user
}  

Users.signup = signup
Users.login = login

export default Users