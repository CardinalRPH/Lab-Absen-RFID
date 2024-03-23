import checkAcceptHeader from "../security/header/checkAcceptHeader.js"
import checkContentType from "../security/header/checkContentType.js"
import reqValid from "../security/validation/reqValid.js"
import verifyToken from "../security/header/verifyToken.js";

export default (req, res, next) => {
    try {
        if (req.method !== "GET") {
            checkContentType(req)
        }
        checkAcceptHeader(req)
        verifyToken(req)
        reqValid(req)
        next()
    } catch (error) {
        const { code, message } = error
        res.status(code).json({ error: message });

    }
}
