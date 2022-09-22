const express = require('express')

const route = require('express').Router()
const {getRols, getOneRol, addRol, editRol, deleteRol} = require('../controllers/role.controller')

route.route('/roles').get(getRols)
route.route('/roles/:role_id').get(getOneRol)
route.route('/roles').post(addRol)
route.route('/roles/:role_id').put(editRol)
route.route('/:id').delete(deleteRol)


module.exports = route