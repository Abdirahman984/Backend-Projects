export const notfound = (req, res, next) => {
    const erro = new Error(`this route ${req.originalUrl} is not found`)
    erro.statusCode = 404
    next(erro);
}