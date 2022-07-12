DROP DATABASE IF EXISTS Tetris
CREATE DATABASE Tetris
GO

USE Tetris
GO

DROP TABLE IF EXISTS dbo.UserDetails
GO
CREATE TABLE dbo.UserDetails(
	userName VARCHAR(50) NOT NULL PRIMARY KEY,
	userScore INT NOT NULL
)

USE Tetris
GO

DROP VIEW IF EXISTS dbo.TopHundoUsers
GO

CREATE VIEW dbo.TopHundoUsers
AS
SELECT TOP 100 a.userName,
	a.userScore
FROM
	dbo.UserDetails AS a
ORDER BY a.userScore DESC
