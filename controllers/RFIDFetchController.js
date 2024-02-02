import { wsSendMsg } from "../bin/webSocketServer.js"

export default (req, res) => {
    wsSendMsg({ ab: 'cd' })
    res.json({ hh: 'hehe' })
    //in here when RFID fetch URL.
    //if in sql, device is attend than execute and send success msg to ws
    //if in sql, device is enroll than send serial card to client
}