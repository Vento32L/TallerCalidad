const dataModels = require('../models/role.model')
const connection = require('../../config/connection')

function getRols(req, res){
    dataModels.getRols((data, error) => {
        // 404 500
        res.json(data)
    })
}

function getOneRol(req, res){
    console.log("id : ", req.params)
    const { role_id } = req.params
    dataModels.getOneRol(role_id, (data, error) => {
        res.json(data)
    })
}

function addRol(req, res){
    const {role_name} =  req.body
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