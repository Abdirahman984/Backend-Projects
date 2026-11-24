import express from 'express'
const router = express.Router();

import { protect } from '../MiddleWare/authMiddleWare.js';
import { authorize } from '../MiddleWare/authorizeMiddleware.js';

router.get('/dashboard', protect, authorize('admin'), (req, res) => {
    res.json({ message: "welcome to admin dashboard ! " })
})


export default router