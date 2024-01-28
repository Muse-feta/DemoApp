const { query } = require('../Config/db.config')
const add_Employee_Controller = require('../controllers/employee.controller')

const employeeServices = async (employeeData) => {
    const sql = `INSERT INTO employees (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`
    const VALUES = [employeeData.firstname, employeeData.lastname, employeeData.email, employeeData.password]
    try {
        const result = await query(sql, VALUES)
        return result.insertId
    } catch (error) {
        console.log(error)
    }
}

module.exports = { employeeServices}