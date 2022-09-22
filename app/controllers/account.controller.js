const dataModels = require('../models/account.model')
const connection = require('../../config/connection')

function getAccounts(req, res){
    dataModels.getAccounts((data, error) => {
        // 404 500
        res.json(data)
    })
}

function getOneAccount(req, res){
    console.log("id : ", req.params)
    const { account_id } = req.params
    dataModels.getOneAccount(account_id, (data, error) => {
        res.json(data)
    })
}

function addAccount(req, res){
    const {account_maxQuality, account_row2, foreignCityId} =  req.body
    console.log(`cuentas: ${account_maxQuality}, ${account_row2}, ${foreignCityId}`)
    dataModels.addAccount({account_maxQuality, account_row2, foreignCityId}, (data, error) => {
        res.json(data)
    })
}

function editAccount(req, res) {
    const { account_id } = req.params
    const { account_maxQuality, account_row2, foreignCityId} = req.body
    dataModels.editRol({account_id, account_maxQuality, account_row2, foreignCityId}, (data, error) => {
        res.json(data)
    })
}

function deleteAccount(req, res){
    const { accont_id } = req.params
    dataModels.deleteAccount(account_id, (data, error) => {
        res.json(data)
    })
}




module.exports={
    getAccounts,
    getOneAccount,
    addAccount,
    editAccount,
    deleteAccount
}