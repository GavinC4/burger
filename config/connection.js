// Node Dependency
var mysql = require('mysql');


// For Local MySQL Database
 var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', // Add your password
    database : 'burgers_db' // Add your database
  });

// Export the Connection
module.exports = connection;