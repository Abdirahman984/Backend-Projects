import Jwt from "jsonwebtoken";

import User from '../models/User.js'

export const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    try {

        if (!token) return res.status(401).json({ message: "token is not provided !" })
        const decode = Jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decode.id).select('-password')
        next();

        
    } catch (err) {
    
        res.status(404).json({ message: "invalid or expired token" })
    }


}