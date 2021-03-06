# Bamazon

## Description

Bamazon is an Amazon-like storefront created with MySQL. The app will take in orders from customers and deplete stock from the store's inventory. Bamazon will also track product sales across the store's departments and then provide a summary of the highest-grossing departments in the store.

## Video

This [video](/videos/bamazon.mp4) showcases the app in action.

## Technology Used

* Node.js
* MySQL
* Javascript
* inquirer


## How to Use the App

Add the bamazonDB.sql database entries to your MySQL Workbench.

![MySQL](/screenshots/mysql.PNG)


### Customers

Run this application in the terminal:

> node bamazonCustomer.js

1. Buy from Stock
  - This option will allow the customer to purchase stock from the store. The user will choose the item id and quantity they want. Once the item is purchased the sale information will be updated.

2. Exit
  - Exits the program.

### Managers

Run this application in the terminal:

> node bamazonManager.js

1. View Products for Sale
  - Displays all items for sale in the store.

2. View Low Inventory
  - Lists all items with an inventory count lower than five.

3. Add to Inventory
  - Displays a prompt that will let the manager increase the inventory count in the store.

4. Add New Product
  - Allows the manager to add a new item to the store.

5. Exit
  - Exits the program.


### Supervisors

Run this application in the terminal:

> node bamazonSupervisor.js

1. View Product Sales by Department
  - Will display products on currently on sale.

2. Create New Department
  - This option will allow you to create a new department in the database. Follow the prompt to add the department name and overhead cost of the department.

3. Exit
  - Exits the program.