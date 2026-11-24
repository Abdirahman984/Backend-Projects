import User from '../models/User.js'
import { generateToken } from '../Utills/generateToken.js';

// Register 
export const register = async (req, res, next) => {
    let { name, email, password, role } = req.body

    try {
        email = email.toLowerCase();
        const userExist = await User.find({ email })
        if (!userExist) return res.status(404).json({
            message: "user has been already register"
        })

        const newUser = await User.create({ name, email, password, role })
        console.log("new user info", newUser)

        const token = generateToken(newUser._id)
        res.status(201).json({token})
        // console.log("token info", { success: true, token })
    } catch (err) {
        next(err)
    }
}

// Login

export const login = async (req, res, next) => {
    let { email, password } = req.body

    try {
        const loginUser = await User.findOne({ email })
        if (!loginUser || !(await loginUser.comparePassword(password)))
            return res.status(401).json({
                message: "invalid email or password please varify"
            })

        // console.log("login info", loginUser)

        const token = generateToken(loginUser._id)
        res.json({ token })
        // console.log("token info", token)
    } catch (err) {
        next(err)
    }
}