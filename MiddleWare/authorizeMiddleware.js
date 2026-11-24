export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.roles)) {
            return res.status(404).json({
                message: `access denied require one of [${roles.join(',')}]`
            })
        }
        next();
    }
}
