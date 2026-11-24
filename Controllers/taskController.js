import Task from "../models/Task.js";

export const createTask = async (req, res, next) => {
    try {
        const task = await Task.create({ ...req.body, createdBy: req.user._id })
        console.log("req.user", req.user)
        console.log("task info", task)
        res.status(201).json(task)
    } catch (error) {
        next(error)
    }
}

export const getMyTask = async (req, res, next) => {
    try {
        const task = await Task.find({ createdBy: req.user._id })
        res.json(task)

    } catch (error) {
        next(error)
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(
            { _id: req.params.id, createdBy: req.user._id },
            req.body, { new: true }
        )
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);

    } catch (error) {
        next(error)
    }
}
export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(
            { _id: req.params.id, createdBy: req.user._id },
          
        )
      res.json({message : "task is deleted"})

    } catch (error) {
        next(error)
    }
}