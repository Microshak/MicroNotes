# Big Data 230 Data Stores 1

# Where do we store data
1. SQL 
2. No SQL 
3. Cache
1. Journal(Kafka, Event Hub) 
1. Event Grid 
1. Message Bus
---
# How do we store data
1. Document Database  
1. Key Value 
1. Cache
1. Graph
1. Set
2. HyperLogLogs 
3. Ordered Set 
4. Queue
5. Map
6. Rows
7. JSON
8. Binary
---

# What do we need to consider 
* ACID VS BASE
* HA
* DR
  
  ---
# BASE 

* **B**acically **A**vailable 
* **S**oft state
* **E**ventual Consistent

---
#ACID

 ACID Transaction(Atomicity, Consistency, Isolation, Durability)


    ACID semantics 
    ``` SQL
    Start Trans

    Roll back trans

    Commit
    ```
---

# High Availability

* HA
  * Geo Redundant
  * Fault Tolerant
  * Failover
  * Load Balancing
---
# Disaster Recovery 
* DR
  * Recovery point objective 
  * Recovery time objective
  * Restore Testing
* Performance
* Scale up/Scale out
* Analytics

---


# Enforcing Policy's and Business Logic
* Microservice Approach (single source of truth vs gatekeeping)
* Triggers
   
---

# Reporting
* Materialized View
    * Batch Processing
    * Stream Processing (Windowing)
    * Store Meta Data 
    * Query Aggregation & Filters
* Data Mart
  * Batch Processing
  * Use SQL's Analytics properties
  * ~~Live~~
---
# Reporting Data Warehouse
* Star 
* Snowflake
* 3NF
* Data Mart

---
# Conceptually Data Stores
## Cap Theorem
1. Consistency
2. Availability
3. Partition 

---

![Full](https://microshak.github.io/MicroNotes/Images/Cap.png)

---

# SQL Vs NoSQL
## NoSQL Tries to Solve
1. Single Server Degradation
1. Impedance Mismatch
1. It just works

---

## Pitfalls of no SQL
1. Multi-master lag
2. Multi-master concurrency
3. Creating a Jimmy 

## NoSQL Tradeoffs
1. Features
2. Relationships
3. Validation (schema on read vs on write)


# SQL Sharding

[Slides](https://microshak.github.io/MicroNotes/Notes.html?path=Azure/SQL+Azure/HorizontalScaling.md)


---
# SQL Data Warehouse
[Slides](https://microshak.github.io/MicroNotes/Notes.html?path=Azure/DataWarehouse)


---
# CosmosDB
[Slides](https://microshak.github.io/MicroNotes/Notes.html?path=Azure/CosmosDB)

[Demo](https://value-microshak2.notebooks.azure.com/j/notebooks/DataBricksQuery.ipynb)

https://westus2.azuredatabricks.net/?o=104465683066888#notebook/1846713445666353/command/661668570689790


---
# Reporting Strategies
* Batch
* Cached
* Just In Time
* In memory
* Iterative 




