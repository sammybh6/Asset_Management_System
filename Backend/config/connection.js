const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "sammy",
  password: "varunlund",
  database: "assetmanagementsystem",
  multipleStatements: true
});

module.exports = connection;
