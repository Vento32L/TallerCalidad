const connection = require('../../config/connection')

var dataModels = {
    getUsers: (callback) => {
        if(connection) {
            let sql = `select * from user`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneUser: (data, callback) => {
        console.log("el id : ", data)
        if(connection) {
            let sql = `select * from user where user_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    }
}