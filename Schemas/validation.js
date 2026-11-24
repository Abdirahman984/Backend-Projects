import  { z } from 'zod'

export const createUserSchema = z.object({
    name : z.string().min(1, "name is require"),
    email: z.string().email('email must be valid'),
    password : z.string().min(6, "password must be at least 6 characters")
})