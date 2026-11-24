import multer from "multer";

const storage = multer.memoryStorage();

export const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10 MB
})  


// import cloudinary from "../Utills/cloudinary.js";

// export const uploadStream = (req, res, next) => {
//     if (!req.file) return res.status(404).json({ message: 'no file uploaded' })

//     const stream = cloudinary.uploader.upload_stream(
//         { folder: 'abdirahman_upload', resource_type: "auto" },
//         (error, result) => {
//             if (error) return next(error)
//             res.status(201).json({
//                 success: true,
//                 fileUrl: result.secure_url
//             })
//         }
//     )

//     stream.end(req.file.buffer)
// }

// import express from 'express'
// import { protect } from '../MiddleWare/authMiddleWare.js';
// import { upload } from '../MiddleWare/upload.js';
// import { uploadStream } from '../Controllers/uploadControllers.js';
// const router = express.Router();

// router.post('/profile_picture', protect, upload.single('file'), uploadStream)

// export default router