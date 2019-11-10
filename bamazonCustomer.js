var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    port     : 3306,
    host     : 'localhost',
    user     : 'root',
    password : 'docker',
    database : 'bamazonDB'
  });
   
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  function startQuestions() {
    connection.query("SELECT * FROM stock", function(err, results) {
        if (err) throw err;
  inquirer
  .prompt([
      {
    name: "itemiD",
    type: "input",
    choices: function() {
        var idArray = [];
        for (var i = 0; i < results.length; i++) {
            idArray.push(results[i].item_id)
        }
    },
    message: "What is the ID of the product you would like to buy?"
    },
    {
    name: "quantity",
    type: "input",
    message: "How many units of the product would you like to buy?"
    }
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });
  });
}
