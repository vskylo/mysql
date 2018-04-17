DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100),
	department_name VARCHAR(50),
	price INTEGER(10),
	stock_quantity INTEGER(10),
	PRIMARY KEY (item_id)
	);



INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Maje Rimana Spaghetti Strap Cotton Dress","evachic.com",219,10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Ted Baker Layli Gem Garden Bodycon Dress","outnet.com",224,7);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Maje Rubin Smocked Blouson Dress","infrow.com",229,8);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Maje Ruche Sleeveless Midi Mesh Dress","netaporter.com",299,3);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Maje Valila Shoulder Pad Plaid Jacket","netaporter.com",329,5);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Max Mara Studio Volano Fur Hood Wool Duffle Coat","infrow.com",749,4);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Miu Miu Chevron Intarsia Wool A-line Skirt","evachic.com",499,1);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Rebecca Taylor Cherry Blossom Print Silk Romper","outnet.com",499,5);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Rebecca Taylor Printed Sleeveless Flare Dress","outnet.com",224,6);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Rebecca Taylor Amora Eyelet Cotton Dress","evachic.com",249,6);