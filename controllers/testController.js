import conn from "../config/db_mysql.js"

const testCont = async (req, res) => {

    res.json({ hehe: "haha" })
    // conn.query('SELECT * FROM asisten', (error, results, field) => {
    //     if (error) throw error;
    //     res.json({ results, field });
    // })
}

export default testCont