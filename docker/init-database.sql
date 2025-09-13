IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'docker')
BEGIN
    CREATE DATABASE docker;
END
GO