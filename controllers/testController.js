import conn from "../config/db_mysql.js"

const testCont = async (req, res) => {
    conn.query('SELECT * FROM asisten', (error, results, field) => {
        if (error) throw error;
        res.json({ results, field });
    })
}

export default testCont