# Features
## Globally Distributed
![full](https://docs.microsoft.com/en-us/azure/cosmos-db/media/distribute-data-globally/deployment-topology.png)

---

# Globally distributed
* Transparent background replication
* Horizonal Scaleing does not need to "Pause" the service
* Multihoming/Multimaster APIs
* Low latency
* Automatic Failover in regional outages

---

# Multi-master
1. Can write to any replica around the world.
2. < 10 millisecond latency for reads and writes
3. No need to configure fail over
4. Has different levels of conflict resolution
   1. Higher value
   2. User Defined Function
   3. Manually with the Conflicts Feed

---

# Partition Keys
* Hot Partition
* Synthetic Partition Key

---

# Aggregations
* Limited
* No Group By 

---

# Consistency Levels
* Supports [5 Levels](https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels) of Consistency
* Consistency Over Ridable
* No Partial Document Update



