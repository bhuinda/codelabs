SELECT DISTINCT Director FROM Movies 
ORDER BY Director ASC;

SELECT Title, Year FROM Movies
ORDER BY Year DESC LIMIT 4;

SELECT Title FROM Movies
ORDER BY Title ASC LIMIT 5;

SELECT Title FROM Movies
ORDER BY Title ASC LIMIT 5 OFFSET 5;