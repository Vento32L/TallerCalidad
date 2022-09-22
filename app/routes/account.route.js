const express = require('express')

const route = require('express').Router()
const {getAuths, getOneAuth, addAuth, editAuth, deleteAuth} = require('../controllers/auth.controller')

route.route('/cuentas').get(getAuths)
route.route('/cuentas/:account_id').get(getOneAuth)
route.route('/cuentas').post(addAuth)
route.route('/cuentas/:account_id').put(editAuth)
route.route('/cuentas/:account_id').delete(deleteAuth)


module.exports = route