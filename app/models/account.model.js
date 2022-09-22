const connection = require('../../config/connection')

var dataModels = {
    getAccounts: (callback) => {
        if(connection) {
            let sql = `select * from account`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneAccount: (data, callback) => {
        console.log("el id : ", data)
        if(connection) {
            let sql = `select * from account where account_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addAccount: (data, callback) => {

        if(connection) {
            let sql = `insert into account (account_maxQuality, account_row2, foreignCityId) values (${connection.escape(data.account_maxQuality)}), (${connection.escape(data.account_row2)}), (${connection.escape(data.foreignCityId)})`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'cuenta creado satisfactoriamene'})
            })
        }
    },

    editAccount : (data, callback) => {
        if(connection) {
            let sql = `update account set account_maxQuality = ${connection.escape(data.account_maxQuality)}, account_row2 = ${connection.escape(data.account_row2)}, foreignCityId =${connection.escape(data.foreignCityId)}  where account_id = ${connection.escape(data.account_id)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'La cuenta de ha actualizado'})
            })
        }
    },

    deleteAccount : (data, callback) => {
        if(connection) {
            let sql = `delete from account where account_id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'Cuenta eliminado'})
            })
        }
    }

    
}

module.exports = dataModels