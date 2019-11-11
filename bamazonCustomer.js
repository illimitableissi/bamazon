var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    port     : 3306,
    host     : '192.168.99.100',
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

function displayStock() {
    connection.query("SELECT * FROM stock", function(err, results) {
        if (err) throw err;
        console.table(results)

    
    userPrompts(results);
});
}

function userPrompts(results) {
  inquirer
  .prompt([
      {
    name: "itemid",
    type: "input",
    message: "What is the ID of the product you would like to buy?"
    },
    {
    name: "quantity",
    type: "input",
    message: "How many units of the product would you like to buy?"
    }
  ])
  .then(answers => {
    if (answers.itemid > 10 ) {
        console.log("Invalid input")
        userPrompts();
    }
    else{
        updateProduct(answers);
    }
  
    });
}


function updateProduct(answers) {
    var itemChoice = parseInt(answers.itemid)
    connection.query(`SELECT * FROM stock WHERE item_id = ${itemChoice}`, function(err, results) {
    var itemPrice = results[0].price * answers.quantity
    var currentQuantity = results[0].stock_quantity - answers.quantity

if (answers.quantity > results[0].stock_quantity) {
    console.log("Insufficient quantity!")
    userPrompts();
    
} else {
    console.log(`Your price is ${itemPrice}!`);
    connection.query("UPDATE stock SET ? WHERE ?",
      [
        {
          stock_quantity: currentQuantity
        },
        {

          item_id: itemChoice
        }
    ],
      function(err, results) {
        if (err) throw err;
      }
    );
    displayStock()
    }
});
}


displayStock()
