# Automatic Encryption
MongoDB supports automatically encrypting fields in read and write operations when using Client-Side Field Level Encryption. 
* Uses a "key vault" collection to decrypt the KMS(Key Vault) key


# Server-Side Schema Enforcement
* You create a schema that identifies the FLE fields and if they are random or deterministic
* 