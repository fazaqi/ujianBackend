var mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kukukakikake",
  database: "db_jc11"
  //   port: 3306
});

module.exports = db;
