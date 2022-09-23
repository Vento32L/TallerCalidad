const express = require('express')

const route = require('express').Router()
const {getUsers, getOneUser, addUser} = require('../controllers/user.controller')

route.route('/usuarios').get(getUsers)
route.route('/usuarios/:user_id').get(getOneUser)
route.route('/usuarios').post(addUser)

module.exports = route