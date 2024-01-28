const router = require('express').Router()

const loginRouter = require('./login.routes')
router.use(loginRouter)
const employeeRouter = require('./employee.routes')
router.use(employeeRouter)

module.exports =  router