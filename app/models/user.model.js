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
    },

    addUser : (data, callback) => {
        if(connection) {
            let sql = `insert into user(user_name, user_lastname, user_email, user_phone, user_password, user_profileImage, role_role_id, auth_auth_id) values (${connection.escape(data.user_name)}, 
            ${connection.escape(data.user_lastname)}, 
            ${connection.escape(data.user_email)}, 
            ${connection.escape(data.user_phone)}, 
            ${connection.escape(data.user_password)}, 
            ${connection.escape(data.user_profileImage)}, 
            ${connection.escape(data.role_role_id)}, 
            ${connection.escape(data.auth_auth_id)})`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'usuario insertado'})
            })
        }
    },
}

module.exports = dataModels