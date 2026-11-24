export const validateSchema = (Schema) => (req, res, next) => {

    const result = Schema.safeParse(req.body)
    console.log("result info", result)

    if (!result.success) {
        const formatedError = result.error.format()
        console.log("formated error", formatedError)
        // console.log(Object.keys(formatedError))

        return res.status(400).json({
            success: false,
            message: "validation failed",
           error : Object.keys(formatedError).map(feild => ({
            feild,
             message: formatedError[feild]?._errors?.[0] || 'Invalid input'
           }))
        })
    }
    next();
}

// result info { success: false, error: [Getter / Setter] }
// formated error {
//     _errors: [],
//         name: { _errors: ['name is require'] },
//     email: { _errors: ['email must be valid'] },
//     password: { _errors: ['password must be at least 6 characters'] }
// }
// ['_errors', 'name', 'email', 'password']
