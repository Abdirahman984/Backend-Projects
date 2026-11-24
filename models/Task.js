import mongoose from "mongoose";

export const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started'
    },
    dueDate: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Task', taskSchema)