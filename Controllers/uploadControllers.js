import cloudinary from "../Utills/cloudinary.js";

export const uploadStream = (req, res, next) => {
    if (!req.file) return res.status(404).json({ message: 'no file uploaded' })

    const stream = cloudinary.uploader.upload_stream(
        { folder: 'abdirahman_upload', resource_type: "auto" },
        (error, result) => {
            if (error) return next(error)
            res.status(201).json({
                success: true,
                fileUrl: result.secure_url
            })
        }
    )

    stream.end(req.file.buffer)
}
