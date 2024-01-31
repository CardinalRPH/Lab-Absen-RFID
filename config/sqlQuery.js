import conn from "./db_mysql.js";

export default (query) => new Promise((resolve, reject) => {
    conn.query(query, (error, results, field) => {
        if (error) {
            reject(error)
            return
        }
        resolve({ data: results, fields: field })
    })
})