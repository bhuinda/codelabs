CREATE TABLE Authors (
    AuthorID INT PRIMARY KEY,
    Name TEXT,
    Bio TEXT
);

CREATE TABLE Publishers (
    PublisherID INT PRIMARY KEY,
    Name TEXT,
    Address TEXT
);

CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title TEXT,
    AuthorID INT,
    PublisherID INT,
    YearPublished INT,
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID),
    FOREIGN KEY (PublisherID) REFERENCES Publishers(PublisherID)
);

INSERT INTO Authors (AuthorID, Name, Bio) VALUES (1, 'George Orwell', 'English novelist and essayist...');
INSERT INTO Publishers (PublisherID, Name, Address) VALUES (1, 'Penguin Books', 'London, UK');

INSERT INTO Books (BookID, Title, AuthorID, PublisherID, YearPublished)
VALUES (1, '1984', 1, 1, 1949);

/* 1. */

CREATE TABLE Customers (
    CustomerID int,
    Name varchar(255),
    Email varchar(255)
);

INSERT INTO Customers (CustomerID, Name, Email)
VALUES (1, 'Alice Johnson', 'alice.johnson@email.com');
INSERT INTO Customers (CustomerID, Name, Email)
VALUES (2, 'Bob Smith', 'bob.smith@email.com');
INSERT INTO Customers (CustomerID, Name, Email)
VALUES (3, 'Charlie Brown', 'charlie.brown@email.com');

SELECT * FROM Customers;

/* 2. */

UPDATE Customers
SET Email = 'bob.smith@newdomain.com'
WHERE Name = 'Bob Smith';

SELECT Email FROM Customers WHERE Name = 'Bob Smith';

/*  3. */

DELETE FROM Customers
WHERE CustomerID = 3;

/* 4. */

CREATE TABLE Orders (
    OrderID int PRIMARY KEY,
    Quantity int,
    CustomerID int,
    BookID int,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);

SELECT
    Customers.Name AS CustomerName,
    Books.Title AS BookTitle,
    Orders.Quantity AS OrderQuantity
FROM Orders
INNER JOIN Books ON Orders.BookID = Books.BookID
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

/* 5. */

CREATE TABLE StudentGrades (
    StudentID int PRIMARY KEY,
    Name varchar(255),
    Subject varchar(64),
    Grade int,
);

CREATE TABLE Students (
    StudentID int PRIMARY KEY,
    Name varchar(255),
    GradeID int,
    FOREIGN KEY (GradeID) REFERENCES Grades(GradeID)
);

CREATE TABLE Grades (
    GradeID int PRIMARY KEY,
    Grade int,
    Subject varchar(64)
);
