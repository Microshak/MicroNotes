# Redis
Is it a database or is it a cache



# What is Reddis
NoSQL
Key/Value
* In Memory
* Data Structure Surver
* Open Source

# Why use Redis
* Fast
* Not CPU Intensive
* Well Documented
* Simple and Versitile
* Scalable

# Persistance
* Snapshot (default)
    * Point in time
    * Super performant
    * has a lot of background workers 
    * slow to recover 5 minits
* Apend only file
    * write to a log
    * rewrites itself to disk
    * Fast recover 2 seconds
* Can do both

---
Best Practices
* expirery
* bucketing

# indexes
fast to set up
master slave replication allwos scaling reads fast

# Use Cases
Scaling out reads on a sql database -- globally
Stabalize performace for real time apps


# Use Cases 
* Real time adds
* Real time recommendations

# Data Types
* Strings
* Lists
* Maps
* Sets
* Sorted Sets
* Hyperloglogs
    * probablistic data store 0.8% error rate
    * memory efficent for counts 
    
* Bitmaps
* Streams
* Spatial Indexes 


# [Redis Modules](https://redis.io/modules)
* Redis ML
* Redis Search
* Redis Graph
* Time Series