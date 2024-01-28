const express = require('express');
const { connection } = require('./Config/db.config')
const { userTable } = require("./Model/user.model");
const routes = require('./routes')
require('dotenv').config()

var cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())
app.use(cors());
app.use(routes)

 


const startApp = async (PORT) => {
    connection.getConnection()
    console.log('Database connection established')
    try {
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
        await connection.query(userTable)
    } catch (error) {
        console.log(error.message); 
        connection.releaseConnection()
    }
}

startApp(PORT)






