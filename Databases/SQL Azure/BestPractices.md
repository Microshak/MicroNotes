# Why Is My Database Slow

 ![Why](https://4.bp.blogspot.com/-CC2kb_nzK8E/VnOZ5in4KRI/AAAAAAAAA-s/09PfnUA9eHM/s640/Untitled.png)


---

## Object Oriented Programming 
***Don't have individual object call the database.  Have 1 parent object do it.***


---

# Chatty Apps
## Performance Considerations
1. Network
3. Disk
2. Memory
4. CPU

---

# Set Logic Thinking
1. Avoid Loops
2. Use Group Operations
3. Avoid Hydrations
    1. Pull all records in memory
    2. Make Individual changes
    3. Update All Records

---
# Transactions and Insolations
* ACID (**atomicity**, consistency, isolation, durability)
* [https://docs.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql?view=sql-server-ver15](Transaction Isolation)
* Locking with(nolock)


---

# Marts, Cache, and denoralization
1. Mart Materialized View - Table 
2. Cache
3. Denoralization
    1. 1FN (Atomic) 
    2. 2NF (Primary Key - No Dependencies)
    3. 3NF (No Dependencies - Other)
5. Road to Big Data
---



