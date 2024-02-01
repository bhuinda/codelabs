SELECT DISTINCT Building_Name
FROM Buildings
JOIN Employees
    ON Employees.Building = Buildings.Building_Name;

SELECT DISTINCT Building_Name, Capacity
FROM Buildings;

SELECT DISTINCT Building_Name, Role 
FROM Buildings 
LEFT JOIN Employees
    ON Building_Name = Building;