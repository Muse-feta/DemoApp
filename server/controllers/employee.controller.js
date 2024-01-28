const employeeServices = require('../services/employee.services')

const add_Employee_Controller = async (req, res) => {
    const addEmployee = await employeeServices.employeeServices(req.body)
    try {
        res.status(201).json({message: 'employee adeed succefully'})
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { add_Employee_Controller}