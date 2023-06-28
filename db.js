const {Pool} = require("pg");
const pool = new Pool ({
    host:"localhost",
    port: 5432,
    database: "dbtest",
    user: "postgres",
    password: "antonio"
}); //creates connection
pool.connect()
module.exports = pool;