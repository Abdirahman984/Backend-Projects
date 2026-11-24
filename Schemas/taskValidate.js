import {z} from 'zod'

export const createTaskSchema = z.object({
   Title : z.string(1, 'Title is required'),
   Description : z.string().optional(),
    Status: z.enum(['Not Started', 'in progress', 'completed']).optional,
    DueDate : z.string.optional(),
})

