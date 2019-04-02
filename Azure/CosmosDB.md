# Features
## Globally Distributed
![full](https://docs.microsoft.com/en-us/azure/cosmos-db/media/distribute-data-globally/deployment-topology.png)

---
# Globally distributed
Transparent background replication
Horizonal Scaleing does not need to "Pause" the service
Multihoming/Multimaster APIs
Low latency
Automatic Failover in regional outages
---
# Multi-master
1. Can write to any replica around the world.
2. < 10 millisecond latency for reads and writes
3. No Need to configure fail over
4. Has different levels of conflict resolution
   1. Higher value
   2. user defined Function
   3. Manually with the conflicts feed

# Partition Keys
* Hot Partition
* Synthetic Partition Key

# Aggregations
* Limited
* No Group By


