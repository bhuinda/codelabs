SELECT * FROM Movies 
WHERE Id = 6;

SELECT * FROM Movies 
WHERE Year BETWEEN 2000 AND 2010;

SELECT * FROM Movies 
WHERE Year NOT BETWEEN 2000 AND 2010;

SELECT Year FROM Movies 
WHERE Id BETWEEN 1 AND 5;

SELECT Title, Year FROM Movies 
WHERE Id BETWEEN 1 AND 5;
