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

function startSupervisor(){
    inquirer
    .prompt([ 
        {
        name: "supervisor",
        type: "rawlist",
        message: "Menu Options",
        choices: ["View Product Sales by Department", "Create New Department"]
        }  
    ])
    .then(answers => {
        switch (answers.supervisor) {
            case "View Product Sales by Department":
                viewSales();
                break;
            case "Create New Department":
                newDepartment();          
        }
    });
}

function viewSales() {}
function newDepartment() {}

startSupervisor()