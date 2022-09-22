const dataModels = require('../models/auth.model')
const connection = require('../../config/connection')

function getAuths(req, res){
    dataModels.getAuths((data, error) => {
        // 404 500
        res.json(data)
    })
}

function getOneAuth(req, res){
    console.log("id : ", req.params)
    const { auth_id } = req.params
    dataModels.getOneAuth(auth_id, (data, error) => {
        res.json(data)
    })
}

function addAuth(req, res){
    const {auth_password} =  req.body
    console.log(`password : ${auth_password}`)
    dataModels.addAuth({auth_password}, (data, error) => {
        res.json(data)
    })
}

function editAuth(req, res) {
    const { auth_id } = req.params
    const { auth_password } = req.body
    dataModels.editAuth({auth_id, auth_password}, (data, error) => {
        res.json(data)
    })
}

function deleteAuth(req, res){
    const { auth_id } = req.params
    dataModels.deleteAuth(auth_id, (data, error) => {
        res.json(data)
    })
}




module.exports={
    getAuths,
    getOneAuth,
    addAuth,
    editAuth,
    deleteAuth
}