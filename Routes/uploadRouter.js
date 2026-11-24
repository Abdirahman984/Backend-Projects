import express from 'express'
import { protect } from '../MiddleWare/authMiddleWare.js';
import { upload } from '../MiddleWare/upload.js';
import { uploadStream } from '../Controllers/uploadControllers.js';
const router = express.Router();

router.post('/profile_picture', protect, upload.single('file'), uploadStream)

export default router
