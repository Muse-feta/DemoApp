const connection = require('../Config/db.config')

const login = async (loginData) => {
    const sql = `SELECT * FROM employees WHERE email = '${loginData.email}' AND password = '${loginData.password}'`;
    try {
        const result = await connection.query(sql);
        console.log(result)
        // add check the result condition
        if (result.length > 0) {
          return result;
        } else {
          return null;
        }
    } catch (error) {
        console.log(`Error: ${error}`); 
    }
}

module.exports = { login}