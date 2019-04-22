# Redis

Is it a database or is it a cache?

---

# Redis (Remote Dictionary Server)

* Distributed in Memory,Key Value Database with Optional Durability
* Binary Safe
* ACID (Atomicity, Consistency, Isolation, Durability)


---

# Why Redis
![right](https://microshak.github.io/MicroNotes/Images/Redis.png)
*   Fast
*   Not CPU intensive
*   Scalable
---

# What is Redis
NoSQL
Key/Value
* In Memory
* Data Structure Server
* Open Source

---

# Why use Redis
* Fast
* Not CPU Intensive
* Well Documented
* Simple and Versatile
* Scalable
---
# Persistance
* Snapshot (default)
    * Point in time
    * Super performant
    * Has a lot of background workers 
    * slow to recover 5 minuets
* Append only file
    * write to a log
    * rewrites itself to disk
    * Fast recover 2 seconds
* Can do both

---

# Best Practices
* Expiry
* Bucketing

---

# Indexes
* Fast to set up
* Faster slave replication allows scaling reads fast

---

# Use Cases
* Scaling out reads on a sql database -- globally
* Stabilize performance for real time apps
* Real time adds
* Real time recommendations

---

# Data Types
* Strings
* Lists
* Maps
* Sets
* Sorted Sets
* Hyperloglogs
    * probabilistic data store 0.8% error rate
    * memory efficient for counts 
    
* Bitmaps
* Streams
* Spatial Indexes 
---

# [Redis Modules](https://redis.io/modules)
* Redis ML
* Redis Search
* Redis Graph
* Time Series