const connection = require('../../config/connection')

var dataModels = {
    getRols: (callback) => {
        if(connection) {
            let sql = `select * from role`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneRol: (data, callback) => {
        console.log("el id : ", data)
        if(connection) {
            let sql = `select * from role where role_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addRol: (data, callback) => {

        if(connection) {
            let sql = `insert into role(role_name) values (${connection.escape(data.role_name)})`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'rol insertado'})
            })
        }
    },

    editRol : (data, callback) => {
        if(connection) {
            let sql = `update role set role_name = ${connection.escape(data.role_name)} where role_id = ${connection.escape(data.role_id)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'rol actualizado'})
            })
        }
    },

    deleteRol : (data, callback) => {
        if(connection) {
            let sql = `delete from role where role_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'rol eliminado'})
            })
        }
    }

    
}

module.exports = dataModels