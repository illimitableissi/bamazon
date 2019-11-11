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
        choices: ["View Product Sales by Department", "Create New Department", "Exit"]
        }  
    ])
    .then(answers => {
        switch (answers.supervisor) {
            case "View Product Sales by Department":
                viewSales();
                break;
            case "Create New Department":
                newDepartment();
            case "Exit":
                console.log("Goodbye")
                connection.end();          
        }
    });
}

function viewSales() {
    connection.query("SELECT department_id, d.department_name, over_head_costs, SUM(product_sales) AS product_sales, SUM(product_sales) - over_head_costs AS total_profit FROM departments d INNER JOIN stock s ON d.department_name = s.department_name GROUP BY department_id"
            
    ,function(err, results) {
        if (err) throw err;
        console.table(results)
        startSupervisor();
    });
}

function newDepartment() {
    inquirer
    .prompt([ 
            {
            name: "departmentname",
            type: "input",
            message: "What is the name of the department?"
            },
            {
            name: "overhead",
            type: "input",
            message: "What is the over-head cost of the department?",
            },          
        ])
        .then(answers => {
            var addOverhead = parseInt(answers.overhead)
             connection.query("INSERT INTO departments SET ?",
             {
                 department_name: answers.departmentname,
                 over_head_costs: addOverhead 
            }, 
            function(err, results){
                if (err) throw err;
                console.table(`${answers.departmentname} was added to the database.`)
                startSupervisor();
             });
        });


};

startSupervisor()