# Big Data 230 Data Stores 1
 > Relational Databases are just Microsoft Excel on Steriods. 
 > Eliot Horowitz co-creater of MongoDB 
---
# Copernicus 

![full](../Images/Copernicus.webp)

---

# History
### Originally data was stored on punch cards

![full](Images/PunchCard.jpg)

--- 

# Flat Files

```csv
Name Age Occupation
Sally 44 Dentist
Joe 3   Child

```
---

# Relational Databases
* Difficult to Maintain and Query
* Generated ids
* Had ACID
* Expensive indexes 
* Difficulty Scaling

 ---

 # later
 Key/Value Pairs
 
 Document database 
    Indexed for faster retrieval
Graph Database
    Store data much more logical
    Prioritize for discoverability, reprisentation, retainability of data relationships

---

# Huge Data 
* 53 percent of companies are adopting big data analytics. ([Forbes](https://www.forbes.com/sites/louiscolumbus/2017/12/24/53-of-companies-are-adopting-big-data-analytics/#3e7744d39a19), 2017)

* More than 150 zettabytes (150 trillion gigabytes) of data will need analysis by 2025. ([Forbes](https://www.forbes.com/sites/rkulkarni/2019/02/07/big-data-goes-big/#4c2d305a20d7), 2019)

* The worldwide big data market is projected to grow from $42 billion in 2018 to $103 billion in 2027. ([Forbes](https://www.forbes.com/sites/louiscolumbus/2018/05/23/10-charts-that-will-change-your-perspective-of-big-datas-growth/#84ed18529268), 2018)


---

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
3. Ordered Set 
4. Queue
5. Map
6. Rows
7. JSON
8. Binary

---

# What do we need to consider 

* Functional Requirements
  * ACID VS BASE
  * High Availability (HA)
  * Disaster Recovery (DR)
  * Scalability
  * Performance
  * Scale up/Scale out
  * Analytics
* Team Requirements
  * Tools
  * Use Cases
* Cost

---

# What do we need to consider 

## 3 Vs
* Velocity 
* Volume
* Variance

---


# Conceptually Data Stores
## Cap Theorem
1. Consistency
2. Availability
3. Partition 

---

![Full](https://microshak.github.io/MicroNotes/Images/Cap.png)

---
# BASE 

* **B**acically **A**vailable 
* **S**oft state
* **E**ventual Consistent

---

#ACID (Atomicity, Consistency, Isolation, Durability)
* Atomicity
```sql
Begin Trans
    Try
        ...code here
        Commit Transaction
    Catch
        Roll back trans
```

* Consistency
  * We promise to follow the rules
  * Web Click vs Banks
  * CAP Theorem

---
* Isolation
    * Different threads and data
    * Do they see eachothers data

*  Durability
   - If one node goes down the other take over (partition tolerance)
   - Committed Transactions Survive

---

# ATOMIC
* Atomnicity
    *
Consistency
    * 

* Durability



# High Availability

* Geo Redundant
* Fault Tolerant
* Failover
* Load Balancing

---

# Disaster Recovery 
* Recovery point objective ([RPO](https://www.druva.com/blog/understanding-rpo-and-rto/))
* Recovery time objective (RTO)
* Restore Testing

---


# Reporting
* Batch Processing
* Stream Processing (Windowing)
* Store Meta Data 
* Caching
  * Redis (memory)
  * Data Frames
  * [Azure Analysis Services](https://azure.microsoft.com/en-us/services/analysis-services/)
  * [Tableau Cache](https://kb.tableau.com/articles/issue/Set-Different-Caching-Settings-for-Different-Workbooks)
* ~~Live~~
---
# Reporting Data Warehouse

[Data Warehouse Philosophy](https://microshak.github.io/MicroNotes/Notes.html?path=Databases/DataWarehouseDesign)



---


# SQL Sharding
[Slides](https://microshak.github.io/MicroNotes/Notes.html?path=Azure/SQL+Azure/HorizontalScaling)

* Who Shards?
  * [Facebook](https://gigaom.com/2011/12/06/facebook-shares-some-secrets-on-making-mysql-scale/)
  * [Pinterest](https://medium.com/@Pinterest_Engineering/sharding-pinterest-how-we-scaled-our-mysql-fleet-3f341e96ca6f)
---
# SQL Data Warehouse

[Azure Data Warehouse](https://microshak.github.io/MicroNotes/Notes.html?path=BigData/DataWarehouse)


---


# SQL Vs NoSQL
## NoSQL Tries to Solve
1. Single Server Degradation
2. Impedance Mismatch
3. It just works
4. Schema on Read vs Schema on Write

---

## Pitfalls of NoSQL
1. Multi-master lag
2. Multi-master concurrency
3. Creating a Jimmy
4. Difficultly to model 

---

## NoSQL Tradeoffs
1. Features
2. Relationships
3. Validation 

---

# CosmosDB
[Slides](https://microshak.github.io/MicroNotes/Notes.html?path=Azure/CosmosDB)

[Demo](https://value-microshak2.notebooks.azure.com/j/notebooks/DataBricksQuery.ipynb)

[Demo](https://westus2.azuredatabricks.net/?o=104465683066888#notebook/1846713445666353/command/661668570689790)

[Mixed Demo](https://cdn2.hubspot.net/hubfs/438089/notebooks/spark2.0/ML%20persistence%20in%202.0.html)

---
# Mongo DB
TODO: What is Mongo
[Demo](https://microshak.github.io/MicroNotes/Notes.html?path=Databases/Mongo)

---

# Enforcing Policy's and Business Logic
* Microservice Approach (single source of truth vs gatekeeping)
* Triggers
   
---

# Graph Database

[Neo4J](https://microshak.github.io/MicroNotes/Notes.html?path=Databases/Neo4j)
---
Graph
Intuitive 
Speed
    schema optional
    new nodes or create them. no more schema migrations
---

# Case Study - neo4j
[ebay](https://www.youtube.com/watch?v=g8DTqguvcwc) - up to 10,000 times faster
with 10-100 times less code


---

# Case Study - [Have I Been Pwned](https://haveibeenpwned.com/)
 
* Large Volume 7.7 Billion records (spring 2019)
* 50,000 - 5,000,000 unique users per day
* Used Azure Table Store
* Cost $50 per month

[[Podcast](http://www.microsoftcloudshow.com/podcast/Episodes/296-have-i-been-pwned-an-interview-with-troy-hunt)]

---

# Choosing the right database
* Integration
* Scaling
* Support
    * Security
    * Installation
    * Scaling
* Cost
* CAP
* ACID


