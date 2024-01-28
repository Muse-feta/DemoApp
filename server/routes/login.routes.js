const { login_controller } = require('../controllers/login.controller')

const router = require('express').Router()


router.post('/login', login_controller)


module.exports = router