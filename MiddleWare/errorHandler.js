export const errorHandler = (erro, req, res, next) => {
    const status = erro.statusCode || 500

    res.status(status).json({
        success : false,
        message : erro.message || 'somethng went wrong !',
        status
    })
}
