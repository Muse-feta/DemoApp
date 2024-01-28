const mysql2 = require("mysql2/promise");
require("dotenv").config();

const connection = mysql2.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

const query = async (sql, params) => {
    const [rows] = await connection.execute(sql, params)
    return rows
}

module.exports = { query, connection }