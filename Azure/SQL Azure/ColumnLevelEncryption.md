```sql


CREATE MASTER KEY ENCRYPTION BY   
PASSWORD = 'mystrongpassword9000!!!!';  



CREATE TABLE Sales  
    (  
    OrderID int,  
    SalesRep sysname, 
    Pii varchar(50) MASKED WITH (FUNCTION = 'partial(1,"XXXXXXX",3)') NUll, 
    Product varchar(10), 
    CreditCard varchar (50) default('test credit card') ,
     CardNumber_Encrypted varbinary(128),
     CardNumber varchar(50),
     CreditCardID varchar(40),
    Qty int  
    );  

CREATE CERTIFICATE Sales09  
   WITH SUBJECT = 'Customer Credit Card Numbers';  
GO  

CREATE SYMMETRIC KEY CreditCards_Key11  
    WITH ALGORITHM = AES_256  
    ENCRYPTION BY CERTIFICATE Sales09;  
GO  



-- Open the symmetric key with which to encrypt the data.  
OPEN SYMMETRIC KEY CreditCards_Key11  
   DECRYPTION BY CERTIFICATE Sales09;  

-- Encrypt the value in column CardNumber using the  
-- symmetric key CreditCards_Key11.  
-- Save the result in column CardNumber_Encrypted.    
UPDATE Sales  
SET CardNumber_Encrypted = EncryptByKey(Key_GUID('CreditCards_Key11')  
    , CardNumber, 1, HashBytes('SHA1', CONVERT( varbinary  
    , CreditCardID)));  
GO  


-- Verify the encryption.  
-- First, open the symmetric key with which to decrypt the data.  

OPEN SYMMETRIC KEY CreditCards_Key11  
   DECRYPTION BY CERTIFICATE Sales09;  
GO  

-- Now list the original card number, the encrypted card number,  
-- and the decrypted ciphertext. If the decryption worked,  
-- the original number will match the decrypted number.  

SELECT CardNumber, CardNumber_Encrypted   
    AS 'Encrypted card number', CONVERT(nvarchar,  
    DecryptByKey(CardNumber_Encrypted, 1 ,   
    HashBytes('SHA1', CONVERT(varbinary, CreditCardID))))  
    AS 'Decrypted card number' FROM Sales;  
GO  

```