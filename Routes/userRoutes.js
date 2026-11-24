import express from 'express'
import { getUsers, getUserInfo, create, update, deleteUser } from '../Controllers/userControllers.js';
import { validateSchema } from '../MiddleWare/validateSchema.js';
import { createUserSchema } from '../Schemas/validation.js';

const router = express.Router();




router.get('/', getUsers)
router.get('/:id', getUserInfo)
router.post('/create', validateSchema(createUserSchema), create)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteUser)

export default router
