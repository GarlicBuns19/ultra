// Env file
require("dotenv").config();
// mysql database
const mysql = require("mysql");

// Creating a connection to Database
const con = mysql.createConnection({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.dbDatabasename,
  port: process.env.dbPort,
  multipleStatements: true,
});

// Connecting to Database
con.connect((err) => {
  if (err) {
    console.log("Database cannot run");
  } else {
    console.log("Database is running");
  }
});

module.exports = con;
