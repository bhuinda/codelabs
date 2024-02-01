SELECT Role, COUNT(*) as Total_Artists
FROM Employees
WHERE Role = "Artist";

SELECT Role, COUNT(*)
FROM Employees
GROUP BY Role;

SELECT Role, SUM(Years_Employed)
FROM Employees
GROUP BY Role
HAVING Role = "Engineer";