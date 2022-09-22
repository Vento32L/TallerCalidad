const express = require('express')

const route = require('express').Router()
const {getAuths, getOneAuth, addAuth, editAuth, deleteAuth} = require('../controllers/auth.controller')

route.route('/auths').get(getAuths)
route.route('/auths/:auth_id').get(getOneAuth)
route.route('/auths').post(addAuth)
route.route('/auths/:auth_id').put(editAuth)
route.route('/auths/:auth_id').delete(deleteAuth)


module.exports = route