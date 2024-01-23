/* 1. */
CREATE TABLE Products (
    ProductID int,
    ProductName varchar(255),
    Price float,
    Category varchar(255)
);

INSERT INTO Products (ProductID, ProductName, Price, Category)
VALUES (1, 'Laptop', 1200.00, 'Electronics');
INSERT INTO Products (ProductID, ProductName, Price, Category)
VALUES (2, 'Desk Chair', 250.50, 'Furniture');

SELECT * FROM Products;

/* 2. */
CREATE TABLE Employees (
    EmployeeID int,
    FirstName varchar(255),
    LastName varchar(255),
    Department varchar(255)
);

INSERT INTO Employees (EmployeeID, FirstName, LastName, Department)
VALUES (1, 'Alice', 'Johnson', 'HR');
INSERT INTO Employees (EmployeeID, FirstName, LastName, Department)
VALUES (2, 'Bob', 'Smith', 'IT');

SELECT FirstName, LastName FROM Employees;

/* 3. */
CREATE TABLE Inventory (
    ItemID int,
    ItemName varchar(255),
    UnitsInStock int
);

INSERT INTO Inventory (ItemID, ItemName, UnitsInStock)
VALUES (1, 'Printer Paper', 15);
INSERT INTO Inventory (ItemID, ItemName, UnitsInStock)
VALUES (2, 'Staples', 30);

SELECT * FROM Inventory WHERE UnitsInStock < 20;

/* 4. */
CREATE TABLE Books (
    BookID int,
    Title varchar(255),
    Author varchar(255),
    Price float
);

INSERT INTO Books (BookID, Title, Author, Price)
VALUES (1, 'The Great Gatsby', 'F. Scott Fitzgerald', 10.99);
INSERT INTO Books (BookID, Title, Author, Price)
VALUES (2, '1984', 'George Orwell', 8.99);
INSERT INTO Books (BookID, Title, Author, Price)
VALUES (3, 'The Catcher in the Rye', 'J. D. Salinger', 7.99);

SELECT * FROM Books;

/* 5. */
CREATE TABLE Courses (
    CourseID int,
    CourseName varchar(255),
    Department varchar(255),
    Credits int
);

INSERT INTO Courses (CourseID, CourseName, Department, Credits)
VALUES (101, 'Introduction to Psychology', 'Psychology', 3);
INSERT INTO Courses (CourseID, CourseName, Department, Credits)
VALUES (102, 'Principles of Economics', 'Economics', 4);
INSERT INTO Courses (CourseID, CourseName, Department, Credits)
VALUES (103, 'Introduction to Computer Science', 'Computer Science', 3);

SELECT CourseName, Department FROM Courses;

/* 6. */
CREATE TABLE RestaurantReviews (
    ReviewID int,
    RestaurantName varchar(255),
    Rating varchar(255),
    Reviewer varchar(255),
    ReviewDate date
);

INSERT INTO RestaurantReviews (ReviewID, RestaurantName, Rating, Reviewer, ReviewDate)
VALUES (1, 'Cafe Mocha', 'Excellent', 'John Doe', '2022-01-15');
INSERT INTO RestaurantReviews (ReviewID, RestaurantName, Rating, Reviewer, ReviewDate)
VALUES (2, 'Burger Corner', 'Good', 'Jane Smith', '2022-02-20');
INSERT INTO RestaurantReviews (ReviewID, RestaurantName, Rating, Reviewer, ReviewDate)
VALUES (3, 'Pasta Place', 'Excellent', 'Alice Jones', '2022-02-22');

SELECT RestaurantName FROM RestaurantReviews WHERE Rating = 'Excellent';

/* 7. */
CREATE TABLE Sales (
    SaleID int,
    ProductID int,
    SaleAmount float
);

INSERT INTO Sales (SaleID, ProductID, SaleAmount)
VALUES (1, 1, 1200.00);
INSERT INTO Sales (SaleID, ProductID, SaleAmount)
VALUES (2, 2, 250.50);

SELECT SUM(SaleAmount) FROM Sales;

/* 8. */
CREATE TABLE ProductsTwo (
    ProductID int,
    ProductName varchar(255),
    Price float,
    Category varchar(255)
);

INSERT INTO ProductsTwo (ProductID, ProductName, Price, Category)
VALUES (1, 'Apple', 0.50, 'Fruit');
INSERT INTO ProductsTwo (ProductID, ProductName, Price, Category)
VALUES (2, 'Bread', 1.50, 'Bakery');

SELECT AVG(Price) FROM ProductsTwo;

/* 9. */
CREATE TABLE SalesTwo (
    SaleID int,
    ProductID int,
    QuantitySold int,
    SaleDate date
);

INSERT INTO SalesTwo (SaleID, ProductID, QuantitySold, SaleDate)
VALUES (101, 1, 50, '2022-01-01');
INSERT INTO SalesTwo (SaleID, ProductID, QuantitySold, SaleDate)
VALUES (102, 2, 30, '2022-01-02');
INSERT INTO SalesTwo (SaleID, ProductID, QuantitySold, SaleDate)
VALUES (103, 1, 20, '2022-01-03');

SELECT SUM(QuantitySold) FROM SalesTwo WHERE ProductID = 1;

/* 10. */
CREATE TABLE WeatherData (
    RecordID int,
    RecordDate date,
    Temperature float,
    City varchar(255)
);

INSERT INTO WeatherData (RecordID, RecordDate, Temperature, City)
VALUES (1, '2022-01-01', 35.2, 'Springfield');
INSERT INTO WeatherData (RecordID, RecordDate, Temperature, City)
VALUES (2, '2022-01-01', 28.4, 'Shelbyville');

SELECT MAX(Temperature) FROM WeatherData;
SELECT MIN(Temperature) FROM WeatherData;

/* 11. */
CREATE TABLE OrdersRedux (
    OrderID int,
    ProductID int,
    OrderDate date
);

CREATE TABLE ProductsRedux (
    ProductID int,
    ProductName varchar(255)
);

INSERT INTO OrdersRedux (OrderID, ProductID, OrderDate)
VALUES (1, 1, '2023-01-01'), (2, 2, '2023-01-02');
INSERT INTO ProductsRedux (ProductID, ProductName)
VALUES (1, 'Laptop'), (2, 'Desk Chair');

SELECT ProductName, OrderDate 
FROM ProductsRedux INNER JOIN OrdersRedux 
ON ProductsRedux.ProductID = OrdersRedux.ProductID;

/* 12. */
CREATE TABLE EmployeesRedux (
    EmployeeID int,
    FirstName varchar(255),
    LastName varchar(255),
    DepartmentID int
);

CREATE TABLE DepartmentRedux (
    DepartmentID int,
    DepartmentName varchar(255)
);

INSERT INTO EmployeesRedux (EmployeeID, FirstName, LastName, DepartmentID)
VALUES (1, 'Alice', 'Johnson', 1), (2, 'Bob', 'Smith', 2);
INSERT INTO DepartmentRedux (DepartmentID, DepartmentName)
VALUES (1, 'HR'), (2, 'IT');

SELECT FirstName || ' ' || LastName, DepartmentName 
FROM EmployeesRedux INNER JOIN DepartmentRedux 
ON EmployeesRedux.DepartmentID = DepartmentRedux.DepartmentID;