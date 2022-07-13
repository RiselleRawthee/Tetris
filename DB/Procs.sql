USE Tetris
GO

DROP PROCEDURE IF EXISTS [dbo].[InsertUser]
GO

CREATE PROCEDURE [dbo].[InsertUser]
@UsrName VARCHAR(50)
AS
SET NOCOUNT ON;
IF (SELECT COUNT(*) FROM dbo.UserDetails  a WHERE a.userName=@UsrName) = 0
BEGIN
INSERT INTO dbo.UserDetails
VALUES (@UsrName,0)
END
GO

DROP PROCEDURE IF EXISTS [dbo].[UpdateScore]
GO

CREATE PROCEDURE [dbo].[UpdateScore]
@UsrName VARCHAR(50),
@Score INT
AS
SET NOCOUNT ON;
UPDATE dbo.UserDetails
SET userScore = @Score
WHERE 
	dbo.UserDetails.userName = @UsrName
	AND  userScore < @Score
GO

DROP PROCEDURE IF EXISTS [dbo].[DeleteUser]
GO

CREATE PROCEDURE [dbo].[DeleteUser]
@UsrName VARCHAR(50)
AS
SET NOCOUNT ON;
IF (SELECT COUNT(*) FROM dbo.UserDetails  a WHERE a.userName=@UsrName) <> 0
BEGIN
DELETE FROM dbo.UserDetails WHERE dbo.UserDetails.userName = @UsrName
END
GO

DROP PROCEDURE IF EXISTS [dbo].[ReturnUser]
GO

CREATE PROCEDURE [dbo].[ReturnUser]
@UsrName VARCHAR(50)
AS
SET NOCOUNT ON;
SELECT
	a.userName,
	a.userScore
FROM 
	dbo.UserDetails AS a
WHERE
	a.userName = @UsrName

DROP PROCEDURE IF EXISTS [dbo].[retunAll]
GO

CREATE PROCEDURE [dbo].[returnAll]
AS
SET NOCOUNT ON;
SELECT
	a.userName,
	a.userScore
FROM 
	dbo.UserDetails AS a
GO