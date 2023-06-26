const {Pool} = require("pg");
const pool = new Pool ({
    host:"localhost",
    port: 5432,
    database: "dbtest",
    user: "dianahung",
    password: "antonio"


}); //creates connection

module.exports = pool;