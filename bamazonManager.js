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

function startManagement(){
    inquirer
    .prompt([ 
        {
        name: "manager",
        type: "rawlist",
        message: "Menu Options",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
        }  
    ])
    .then(answers => {
        switch (answers.manager) {
            case "View Products for Sale":
                displayStock();
                break;
            case "View Low Inventory":
                lowInventory();
                break;
            case "Add to Inventory":
                addInventory();
                break;
            case "Add New Product":
                newProduct();
                break;
            case "Exit":
                console.log("Goodbye")
                connection.end();
        }
    });
}

function displayStock() {
    connection.query("SELECT * FROM stock", function(err, results) {
        if (err) throw err;
        console.table(results)
        startManagement();
    });
}

function lowInventory(){
    connection.query("SELECT * FROM stock WHERE stock_quantity < 5", function(err, results) {
        if (err) throw err;
        console.table(results)
        startManagement();
    });
    
};


function addInventory(results){
    inquirer
    .prompt([ 
            {
            name: "itemid",
            type: "input",
            message: "What is the item ID of the item you wish to update?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
            },
            {
            name: "quantity",
            type: "input",
            message: "How much do you want to add?",
            validate: (value) => {
                if (!isNaN(value) && value > 0) {
                    return true;
                } else {
                    console.log("Please enter a number greater than 0");
                    return false;
                }
             }
            }
        ])
        .then(answers => {
            var itemID = parseInt(answers.itemid)
            var itemQuantity = parseInt(answers.quantity)
            connection.query(`SELECT * FROM stock WHERE item_id = ${itemID}`, function(err, results) {
            currentQuantity = results[0].stock_quantity
            newQuantity = currentQuantity + itemQuantity
            itemName = results[0].product_name

            connection.query(`UPDATE stock SET stock_quantity = ${newQuantity} WHERE item_id = ${itemID}`,          
          function(err, results) {
            if (err) throw err;
            console.log(`The quantity of ${itemName} was increased by ${itemQuantity}.`)
            startManagement();
          }
        );
    });
});
}


function newProduct(){
    inquirer
    .prompt([ 
            {
            name: "productname",
            type: "input",
            message: "What is the name of the product?"
            },
            {
            name: "departmentname",
            type: "input",
            message: "What department does the product belong to?",
            },
            {
            name: "price",
            type: "input",
            message: "What is the price of the product?",
            validate: (value) => {
                if (!isNaN(value) && value > 0) {
                    return true;
                } else {
                    console.log("Please enter a number greater than 0");
                    return false;
                }
             }
            },
            {
            name: "stockquantity",
            type: "input",
            message: "How much stock do you want added to the database?",
            validate: (value) => {
                if (!isNaN(value) && value > 0) {
                    return true;
                } else {
                    console.log("Please enter a number greater than 0");
                    return false;
                }
             }
            }            
        ])
        .then(answers => {
            var addPrice = parseFloat(answers.price).toFixed(2)
            var addStock = parseInt(answers.stockquantity)
             connection.query("INSERT INTO stock SET ?",
             {
                 product_name: answers.productname, 
                 department_name: answers.departmentname, 
                 price: addPrice, 
                 stock_quantity: addStock,
            }, 
            function(err, results){
                if (err) throw err;
                console.table(`${answers.productname} was added to the database.`)
                startManagement();
             });
        });


};

startManagement()