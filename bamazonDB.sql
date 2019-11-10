DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE stock (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NULL,
department_name VARCHAR(30) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NOt NULL,
PRIMARY KEY (item_id)
);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("Modern Warefare", "Video Games", 59.99, 10);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("NBA 2k20", "Video Games", 59.99, 10);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("Xbox One X", "Electronics", 399.99, 5);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VAlUES ("Ring Doorbell", "Electronics", 199.99, 5);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("Sound Bar", "Electronics", 79.99, 10);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("Samsung 4k TV", "Electronics", 599.99, 4);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("Gears 5", "Video Games", 49.99, 15);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("Beats Solo3", "Electronics", 199.99, 8);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("Death Stranding", "Video Games", 59.99, 40);

INSERT INTO stock (product_name, department_name, price, stock_quantity)
VALUES ("Final Fantasy VII Remake", "Video Games", 59.99, 20);
