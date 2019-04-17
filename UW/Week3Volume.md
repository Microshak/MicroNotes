# Big Data 230 Data Stores 1
 > Relational Databases are just Microsoft Excel on Steriods. 
 
 > -Eliot Horowitz co-creater of MongoDB 
---
# Copernicus 

![full](https://microshak.github.io/MicroNotes/Images/Copernicus.webp)

---

# History
### Originally data was stored on punch cards

![full](https://microshak.github.io/MicroNotes/Images/PunchCard.jpg)

---

# Flat Files

```csv
Name Age Occupation
Sally 44 Dentist
Joe 3   Child

```
---
# Hierarchical Databases
* Had Parent Nodes and Child Nodes
* 1960's
* Stored  Drawings for Lunar Lander

---

# Network Database
* Similar to Hierarchical database but child nodes could have multiple parents
* Database became complicated, because it was difficult to maintain pointers

---

#Relational Databases
* 1980s
* Easily represented Business Data
* Had an easy way of querying
* Had Indexes to help performance

---

# Relational Databases
* Difficult to Maintain and Query
* Generated ids
* Had ACID
* Expensive indexes 
* Difficulty Scaling

---

# Data Today

* 53 percent of companies are adopting big data analytics. ([Forbes](https://www.forbes.com/sites/louiscolumbus/2017/12/24/53-of-companies-are-adopting-big-data-analytics/#3e7744d39a19), 2017)

* More than 150 zettabytes (150 trillion gigabytes) of data will need analysis by 2025. ([Forbes](https://www.forbes.com/sites/rkulkarni/2019/02/07/big-data-goes-big/#4c2d305a20d7), 2019)

* The worldwide big data market is projected to grow from $42 billion in 2018 to $103 billion in 2027. ([Forbes](https://www.forbes.com/sites/louiscolumbus/2018/05/23/10-charts-that-will-change-your-perspective-of-big-datas-growth/#84ed18529268), 2018)


---

# Solutions for Large Data
* Data Warehousing
* Key/Value Databases
* Document database 
    All Fields Indexed for faster retrieval
* Graph Database
    Store data much more logical
    Prioritize for Discoverability, Reprisentation, Retainability of data relationships
* Cache

---

# Where Do We Store Data
1. SQL 
2. No SQL 
3. Cache
4. Journal(Kafka, Event Hub) 
5. Event Grid 
6. Message Bus

---

# How do We Store The Data
1. Set
3. Ordered Set 
4. Queue
5. Map
6. Rows
7. JSON
8. Binary
9. Parque
10. Avro
11. Protobuf
12. Relations
---

# What Do We Need to Consider When Choosing a Database

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
![right](/Images/NetworkTopology-Ring.png)
* Velocity (Hot Partitions)
* Volume 
* Variance

---


# Conceptually Data Stores
## Cap Theorem
1. Consistency
2. Availability
3. Partition 

---

![right](https://microshak.github.io/MicroNotes/Images/Cap.png)

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

---
* Isolation
    * Different threads and data
    * Do they see eachothers data

*  Durability
   - If one node goes down the other take over (partition tolerance)
   - Committed Transactions Survive

---

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

[Mixed Demo](https://cdn2.hubspot.net/hubfs/438089/notebooks/spark2.0/ML%20persistence%20in%202.0.html)

---
# Mongo DB
[Mongo Basics](https://microshak.github.io/MicroNotes/Notes.html?path=Databases/MongoBasics)
[Mongo to SQL comparison](https://docs.mongodb.com/manual/reference/sql-comparison/)
[Geo Spacial Queries](https://docs.mongodb.com/manual/geospatial-queries/) with [GeoJSON](https://docs.mongodb.com/manual/reference/geojson/)
[Demo](https://microshak.github.io/MicroNotes/Notes.html?path=Databases/Mongo)

---

# NoSQL PaaS
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

# Graph DB Use cases
* Fraud detection
* Real-time recommendation engines
* Master data management (MDM)
* Network and IT operations
  
---

# Case Study - neo4j
[ebay](https://www.youtube.com/watch?v=g8DTqguvcwc) - up to 10,000 times faster
with 10-100 times less code
[Panama Papers](https://medium.com/neo4j/graph-visualization-of-panama-papers-data-in-neo4j-9c08ca17039c)
[Source Files](https://offshoreleaks.icij.org/pages/database)

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


