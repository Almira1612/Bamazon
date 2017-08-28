CREATE database bamazon_db;

USE bamazon_db;
CREATE TABLE Products (
    ItemID INTEGER(11) AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(50) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(7, 2) NOT NULL,
    StockQuantity INTEGER(7) NOT NULL,
    PRIMARY KEY (ItemID)
);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Tide Laundry Detergent', 'Household essentials', 10.90, 50);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Charmin Bath Tissue', 'Household essentials', 12.90, 50);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Dove Body Wash', 'Skin care', 5.49, 30);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Jergens Ultra Healing Lotions', 'Skin care', 3.90, 40);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Apple Watch Series 2', 'Electronic', 369.00, 20);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Amazon Fire TV', 'Electronic', 89.99, 30);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Folding Chair', 'Furniture', 11.90, 40);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Hailey TV Stand', 'Furniture', 129.90, 20);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Keurig Coffee Maker', 'Kitchen', 89.90, 30);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('12pc Dinnerware Set', 'Kitchen', 19.90, 30);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Womens Floral Woven T-Shirt', 'Clothing', 19.90, 55);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('Mens Gym Shorts', 'Clothing', 16.90, 55);