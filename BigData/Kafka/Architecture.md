# Topology is a way talk about how Kafka Streams run
1. Source
2. Processing
3. Sync

---
# Kafka Streams Topologies
* Keys
* Semantics
* Time
* State
* Stores

---
# Choosing the wrong Topology
* Data Loss
* Performance Issues
* Fragile Code
* Incorrect Results

---
# Merge
* Joining streams Unit of Scale is the lowest amount of partitions on a stream.
* Keys tell the message what partion to go to.
* Hotspotting can affect performance - 




---
Producer
* Transactional Producer - Like a database.  Either everything goes or nothing goes.
* Idempotent Producer - Do the same operation multiple times no effect.  The producer produces once and only once.

---
Semantics
