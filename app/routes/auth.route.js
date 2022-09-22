const express = require('express')

const route = require('express').Router()
const {getAuths, getOneAuth, addAuth, editAuth, deleteAuth} = require('../controllers/auth.controller')

route.route('/autenticaciones').get(getAuths)
route.route('/autenticaciones/:auth_id').get(getOneAuth)
route.route('/autenticaciones').post(addAuth)
route.route('/autenticaciones/:auth_id').put(editAuth)
route.route('/autenticaciones/:id').delete(deleteAuth)


module.exports = route