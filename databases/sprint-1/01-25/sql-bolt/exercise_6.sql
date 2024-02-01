SELECT Title, Domestic_Sales, International_Sales 
FROM Movies 
INNER JOIN BoxOffice 
    ON Movies.Id = BoxOffice.Movie_Id;

SELECT Title, Domestic_Sales, International_Sales 
FROM Movies 
INNER JOIN BoxOffice 
    ON Movies.Id = BoxOffice.Movie_Id
WHERE International_Sales > Domestic_Sales;

SELECT Title, Rating 
FROM Movies 
INNER JOIN BoxOffice 
    ON Movies.Id = BoxOffice.Movie_Id
ORDER BY Rating DESC;