DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE stock (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NULL,
department_name VARCHAR(30) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NOT NULL,
product_sales DECIMAL(10,2) DEFAULT 0,
PRIMARY KEY (item_id)
);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Modern Warefare", "Video Games", 59.99, 10, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("NBA 2k20", "Video Games", 59.99, 10, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Xbox One X", "Electronics", 399.99, 5, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VAlUES ("Ring Doorbell", "Electronics", 199.99, 5, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Sound Bar", "Electronics", 79.99, 10, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Samsung 4k TV", "Electronics", 599.99, 4, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Gears 5", "Video Games", 49.99, 15, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Beats Solo3", "Electronics", 199.99, 8, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Death Stranding", "Video Games", 59.99, 40, 0);

INSERT INTO stock (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Final Fantasy VII Remake", "Video Games", 59.99, 20, 0);

CREATE TABLE departments (
department_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NULL,
over_head_costs DECIMAL(10,2) NULL,
PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Video Games", 1000);

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Electronics", 3000)