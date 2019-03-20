# Big Data 230 Data Stores 1

# Where do we store data
1. SQL 
2. No SQL 
3. Cache
1. Journal(Kafka, Event Hub) 
1. Event Grid 
1. Message Bus

# How do we store data
1. Document Database  
1. Key Value 
1. Cache
1. Graph
1. Set
2. HyperLogLogs 
3. Ordered Set 
4. Queue
5. Hash

# What do we need to consider 
ACID (Atomicity, Consistency, Isolation, Durability)
Availabiltity
Speed
Scaleup/Scale out


## What is Big Data

1. Volume
2. Velocity
3. Verity
4. Veracity
5. Value
---

# Data file type

database
    excel on steriods
    more more sheets
    inefficent

no sql
    fault tollerant replicate data
    semlessly scale ( no pause)


    
Reporting
Scatter/Gather 
    Materialized View

Transaction
    ACID semantics 
    ``` SQL
    Start Trans

    Roll back trans
    Commit
    ```

    HA

Scaling 
    Pause vs no pause

Durability
    Replication
    Accessability


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
2. Multi-master concurency
3. 

## NoSQL Tradeoffs
1. Features
2. Relationships
3. Validation (schema on read vs on write)

---
# CosmosDB
[Slides]([https://microshak.github.io/MicroNotes/Notes.html?path=Azure/cosmosDB.md](Slides))



# Problems of big data
1. Messy
2. Expensive
3. Difficult to derive value

---

# Types of Data
* Streaming
* Unstructured
* Relational
* Graph

---

# Advances in Big Data
* IoT
* Smart Data
* Containerization
* Edge/Fog systems
* Databases
* Distributed Systems
 
---
# Demo 
![full](https://microshak.github.io/MicroNotes/Images/week1.png)


# Demo

[https://microshak.github.io/MicroNotes/Notes.html?path=Azure/IoT/IoT101.md](Slides)

[https://azure-samples.github.io/raspberry-pi-web-simulator/#Getstarted](IoT Hub Simulator)

[https://github.com/Azure-Samples/azure-iot-samples-python](Advanced)


