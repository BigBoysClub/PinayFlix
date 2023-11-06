import Users from '../models/user.js'
import jwt  from 'jsonwebtoken'

export const requireAuth = async (req, res, next) => {
    
    const { authorization } = req.headers 

    if (!authorization) 
        return res.status(401).json({ error: 'Authorization token required' })
    
    const token = authorization.split(' ')[1]

    try {
        // if the token is verified we will grab the payload
        const { _id } = jwt.verify(token, process.env.SECRET)
        
        // attaching the user property with attribute _id in the request body
        req.user = await Users.findOne({ _id }).select('_id')
        next()
    } catch(error) {
        console.log(error)
        res.status(401).json({ error: 'Request is not authorized' })
    }
}