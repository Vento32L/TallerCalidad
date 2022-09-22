const express = require('express')

const route = require('express').Router()
const {getRols, getOneRol, addRol, editRol, deleteRol} = require('../controllers/role.controller')

route.route('/').get(getRols)
route.route('/:id').get(getOneRol)
route.route('/').post(addRol)
route.route('/:id').put(editRol)
route.route('/:id').delete(deleteRol)


module.exports = route