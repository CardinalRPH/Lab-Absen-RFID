import { wsBroadcastdMsg } from "../bin/webSocketServer.js"
import sqlQuery from "../config/sqlQuery.js"

export default async (req, res) => {

    const { serialCard } = req.body
    
    if (!serialCard) {
        res.status(400).json({
            error: 'Bad Request: some key not appears'
        })
        return
    }

    try {
        const { data:checkData1 } = await sqlQuery(`SELECT nim FROM asisten WHERE serial_card=?`, [serialCard])
        
        if (checkData1.length <= 0) {
            res.status(200).json({
                error: `User with Serial Card ${serialCard}  Not Found`
            })
            return
        }

        const { data: checkData2 } = await sqlQuery(`SELECT nim FROM asisten
        WHERE serial_card=? `)


    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
    wsBroadcastdMsg({ ab: 'cd' })
    res.json({ hh: 'hehe' })
    //in here when RFID fetch URL.
    //if in sql, device is attend than execute and send success msg to ws
    //if in sql, device is enroll than send serial card to client
}