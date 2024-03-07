import sqlQuery from "../config/sqlQuery"

export const RFIDPost = async (req, res) => {
    const { id, name, serial } = req.body
    try {
        const { data } = await sqlQuery("INSERT INTO perangkat (id, nama_perangkat, no,_serial) VALUES (?,?,?)", [id, name, serial])
        res.status(200).json({
            message: `${id} Devices has been added`
        })
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            
        }
    }

    //in here add new RFID devices
}
export const RFIDPut = (req, res) => {
    //in here edit or turn RFID devices 
}
export const RFIDDelete = (req, res) => {
    //in here delete RFID devices
}
export const RFIDGet = (req, res) => {
    //in here get all RFID devices
}