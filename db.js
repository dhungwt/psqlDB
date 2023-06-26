const {Pool} = require("pg");
const pool = new Pool ({
    host:"localhost",
    port: 5432,
    database: "dbtest",
    user: "dianahung",
    password: "B1ng0"


}); //creates connection

module.exports = pool;