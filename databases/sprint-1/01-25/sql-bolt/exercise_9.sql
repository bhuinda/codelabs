SELECT Title, (Domestic_Sales + International_sales) / 1000000 AS Gross_Sales
FROM Movies
JOIN BoxOffice
    ON Movies.Id = BoxOffice.Movie_Id;

SELECT Title, Rating * 10 AS Rating_Percent
FROM Movies
JOIN BoxOffice
    ON Movies.Id = BoxOffice.Movie_Id;

SELECT Title, Year
FROM Movies
WHERE Year % 2 = 0;