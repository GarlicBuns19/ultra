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

con.on("error", function (err) {
  console.log("db error", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    con.connect((err) => {
      if (err) {
        console.log("Database cannot run");
      } else {
        console.log("Database is running");
      }
    });
  } else {
    console.log(err.messsage)
  }
});

module.exports = con;
