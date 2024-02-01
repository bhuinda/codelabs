SELECT MAX(Years_Employed) AS Highest_Tenure_Year
FROM Employees;

SELECT Role, AVG(Years_Employed) as Average_Years_Employed
FROM Employees
GROUP BY Role;

SELECT Building, SUM(Years_Employed) as Total_Years_Employed
FROM Employees
GROUP BY Building;