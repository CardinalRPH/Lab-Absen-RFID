import verifyToken from "../security/header/verifyToken.js";

export default (req, res, next) => {
    try {
        verifyToken(req)
        next()
    } catch (error) {
        const { code, message } = error
        res.status(code).json({ error: message });

    }
}