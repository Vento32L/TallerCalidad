const express = require('express')

const route = require('express').Router()
const {getUsers, getOneUser} = require('../controllers/user.controller')

route.route('/usuarios').get(getUsers)
route.route('/usuarios/:user_id').get(getOneUser)

module.exports = route