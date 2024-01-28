const { add_Employee_Controller } = require('../controllers/employee.controller');

const router = require('express').Router()


router.post("/addEmployee", add_Employee_Controller);

module.exports = router