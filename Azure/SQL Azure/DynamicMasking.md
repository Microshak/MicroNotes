CREATE USER Manager WITHOUT LOGIN;  

-------------------

CREATE TABLE Sales  
    (  
    OrderID int,  
    SalesRep sysname, 
    Pii varchar(50) MASKED WITH (FUNCTION = 'partial(1,"XXXXXXX",3)') NUll, 
    Product varchar(10),  
    Qty int  
    );  

    -----
    INSERT INTO Sales VALUES (1, 'Sales1','Something ', 'Valve', 5);
INSERT INTO Sales VALUES (2, 'Sales1','Some otherthing ', 'Wheel', 2);
INSERT INTO Sales VALUES (3, 'Sales1','Nope ', 'Valve', 4);
INSERT INTO Sales VALUES (4, 'Sales2','Midical Stuff ', 'Bracket', 2);
INSERT INTO Sales VALUES (5, 'Sales2','Somthing ', 'Wheel', 5);
INSERT INTO Sales VALUES (6, 'Sales2','Somthing ', 'Seat', 5);
-- View the 6 rows in the table  
SELECT * FROM Sales;


--------

GRANT SELECT ON Sales TO Manager;  



EXECUTE AS USER = 'Manager';  
SELECT * FROM Sales;
REVERT;  

GRANT UNMASK to Manager


EXECUTE AS USER = 'Manager';  
SELECT * FROM Sales;
REVERT;  



  
---

DROP USER Manager;

DROP TABLE Sales;
--https://docs.microsoft.com/en-us/sql/relational-databases/security/dynamic-data-masking?view=sql-server-2017


 
