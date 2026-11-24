import User from '../models/User.js'

export const getUsers = async (req, res) => {
    const user = await User.find();
    res.send(user)
}

export const getUserInfo = async (req, res) => {
    const user = await User.find((u) => u.id === Number(req.params.id))
    if (!user) return res.status(404).json('user is not found')
    res.json(user)
}
// create users
export const create = async (req, res) => {
    const newUser = new User(req.body)
    const saved = await newUser.save();
    res.status(201).json(saved)
}

export const update = async (req, res) => {
    const { id } = req.params
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (!updatedUser) return res.status(500).json("user is not found")
        res.json(updatedUser)
    } catch (error) {
        console.log('error occured !', error)
    }
}

// delete users
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if (!deletedUser) return res.status(404).send("user you want delete is not found")
        res.json(deletedUser)
    } catch (error) {
        res.send("error occured", error)
    }
}



