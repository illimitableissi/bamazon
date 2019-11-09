var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    port     : 3306,
    host     : 'localhost',
    user     : 'root',
    password : 'secret',
    database : "bamazonDB"
  });
   
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });