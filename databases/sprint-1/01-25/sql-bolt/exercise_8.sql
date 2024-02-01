SELECT Name, Role FROM Employees
WHERE Building IS NULL;

SELECT DISTINCT Building_Name
FROM Buildings 
LEFT JOIN Employees
    ON Building_name = Building
WHERE Role IS NULL;