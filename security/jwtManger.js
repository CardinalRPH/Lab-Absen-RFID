import jwt from "jsonwebtoken";

export const generateBearerToken = (payload, expire = 12) => {
    return `Bearer ${jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: `${expire}h`,
    })}`;
}

export const verifyBearerToken = (bearerToken) => {
    try {
        const tokenWithoutBearer = bearerToken.replace('Bearer ', '');
        jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY);
        return true
    } catch (error) {
        return false;
    }
}