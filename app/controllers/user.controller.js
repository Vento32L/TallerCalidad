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

function addUser(req, res){
    const {user_name,user_lastname, user_email, user_phone, user_password, user_profileImage, role_role_id, auth_auth_id} =  req.body
    console.log(`usuario : ${user_name}, ${user_lastname}, ${user_email}, ${user_phone}, ${user_password}, ${user_profileImage }, ${role_role_id }, ${auth_auth_id } `)
    dataModels.addUser({user_name,user_lastname,  user_email,user_phone,user_password,user_profileImage, role_role_id, auth_auth_id }, (data, error) => {
        res.json(data)
    })
}

module.exports={
    getUsers,
    getOneUser,
    addUser
    
}