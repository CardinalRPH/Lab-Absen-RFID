import sqlQuery from "../config/sqlQuery.js";
import { Bcompare } from "../security/BcryptPassword.js";
import { generateBearerToken } from "../security/jwtManger.js";

export default async (req, res) => {
    const { user, password } = req.body
    let datas = []

    //get datas from db
    try {
        const { data } = await sqlQuery(`SELECT * FROM asisten WHERE nim=${user || 0}`)
        datas = data
    } catch (error) {
        console.log(error);
    }

    //if user not FOund
    if (!datas[0]) {
        res.status(200).json({
            error: 'User Not Found'
        })
        return
    }

    //checking Password
    if (!Bcompare(password || '0', '$2a$10$Lf9T.Dm6Kw4zVmV9HxAI8.Ma01pGZ.g1aGNfQTZYSixFT3RE2YOKm')) {
        res.status(200).json({
            error: 'Wrong Password'
        })
        return
    }

    // if success
    //generate token
    const { nim, nama, surel } = datas[0]
    const token = generateBearerToken({ name: nama, nim: nim, email: surel })

    //set cookie to client
    res.cookie('signInToken', token, { httpOnly: true, secure: true });
    // sent to client with cookie
    res.status(200).json({
        name: nama, nim: nim, email: surel
    })
}