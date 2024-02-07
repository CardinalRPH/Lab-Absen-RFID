import sqlQuery from "../config/sqlQuery.js"
import { calDateDiff, isoDateFormater } from "../utilities/dateFormatter.js"

export const leavePost = async (req, res) => {
    //in here when add new leave assistant
    const { nim, info, dateS, dateE } = req.body

    if (!nim, !info, !dateS, !dateE) {
        res.status(400).json({
            error: 'Bad Request: some key not appears'
        })
        return
    }

    const diffDays = calDateDiff(dateS, dateE)
    const value = [];

    for (let i = 0; i <= diffDays; i++) {
        const date1 = new Date(dateS)
        const currentDate = new Date(date1);
        currentDate.setDate(date1.getDate() + i);
        const formattedDate = isoDateFormater(currentDate.toISOString)
        value.push([nim, info, formattedDate]);
    }

    if(value.length<=0) {
        res.status(400).json({
            error:'Bad Request: Date Is Not Iso Date'
        })
        return
    }

    try {
        const {data} = await sqlQuery(`SELECT nim FROM asisten WHERE nim=? AND NOT EXIST (SELECT 1 FROM izin WHERE izin.tanggal_izin BETWEEN ? AND ? )`)
        if(!data) {
            res.status(200).json({
                error: `User ${nim}  Not Found or Already ;Leave`
            })
            return
        }

        await sqlQuery(`INSERT INTO IZIN VALUES (?))`, [value])
        res.status(200).json({
            message: `${nim} SUcces Leave`
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }

}
export const leavePut = (req, res) => {
    //in here when edit leave assistant
}
export const leaveDelete = (req, res) => {
    //in here when delete leave assistant
}
export const leaveGet = (req, res) => {
    //in here when get all leave assistant
}