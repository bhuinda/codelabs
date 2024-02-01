SELECT Director, COUNT(Id) as Total_Movies
FROM Movies
GROUP BY Director;

SELECT Director, SUM(Domestic_Sales + International_Sales) as Cumulative_Sales
FROM Movies
INNER JOIN BoxOffice
    ON Movies.Id = BoxOffice.Movie_Id
GROUP BY Director;