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
    const {account_maxQuality} =  req.body
    console.log(`rol : ${role_name}`)
    dataModels.addRol({role_name}, (data, error) => {
        res.json(data)
    })
}

function editRol(req, res) {
    const { role_id } = req.params
    const { role_name } = req.body
    dataModels.editRol({role_id, role_name}, (data, error) => {
        res.json(data)
    })
}

function deleteRol(req, res){
    const { role_id } = req.params
    dataModels.deleteRol(role_id, (data, error) => {
        res.json(data)
    })
}




module.exports={
    getRols,
    getOneRol,
    addRol,
    editRol,
    deleteRol
}