const dataModels = require('../models/user.model')
const connection = require('../../config/connection')

function getUsers(req, res){
    dataModels.getUsers((data, error) => {
        // 404 500
        res.json(data)
    })
}

function getOneUser(req, res){
    console.log("id : ", req.params)
    const { user_id } = req.params
    dataModels.getOneUser(user_id, (data, error) => {
        res.json(data)
    })
}

module.exports={
    getUsers,
    getOneUser
}