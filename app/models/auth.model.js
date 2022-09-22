const connection = require('../../config/connection')

var dataModels = {
    getAuths: (callback) => {
        if(connection) {
            let sql = `select * from auth`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneAuth: (data, callback) => {
        console.log("el id : ", data)
        if(connection) {
            let sql = `select * from auth where auth_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addAuth: (data, callback) => {

        if(connection) {
            let sql = `insert into auth(auth_password) values (${connection.escape(data.auth_password)})`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'password insertado'})
            })
        }
    },

    editAuth : (data, callback) => {
        if(connection) {
            let sql = `update auth set auth_password = ${connection.escape(data.auth_password)} where auth_id = ${connection.escape(data.auth_id)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'password actualizado'})
            })
        }
    },

    deleteAuth : (data, callback) => {
        if(connection) {
            let sql = `delete from auth where auth_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'password eliminado'})
            })
        }
    }

    
}

module.exports = dataModels