
# Main Features
* Pub/Sub
* Kafka API
  * K-Streams
  * K-Tables
  * Cache

---
# Kafka Partitions 

![full](https://microshak.github.io/MicroNotes/Images/BigData/kafkarep.png)

# Kafka Architecure
 * Brokers
    * Responsible for Pub/Sub
    * Storing Messages
    * Fail over
    * Replication
    * Consistency
    * Uses Keys to hash to send to partition

---
# Messages
* Key/Value
* Messages go to topic on Broker

---
# Producers/Consumers
* Producer
    * API
    * Wire Protocol
    * Publishing APP
* Consumer
    * API
    * Wire Protocol
    * Subscriber APP
---

# Kafka Terminology
* Topic
* Producer - Putting messages on a topic
* Consumer - Subscribing to a topic
* Journal - Time Based Topic
* Consumer Group - Subscribing to your Messages off a Journal


---


# Streams
* A stream is an unbounded sequence of structured data
* Kstreams is a class that creates an abstraction over the stream
* Stream builder has an class stream that represents a topic
* Elements in the stream stream can be called facts
* Table is a collection of evolving facts
* In KTables keyed facts overwrites the previous one

---

#Transforming data
* Filter (stateless)
* Map 
  * Can use Lambdas 
  * Used to change key
* Fact + Dimension = Enriched Data

---
# Streams API
* No Batching
* Millisecond Latency
* Stateless
* Statefull
    * Windowing
* Works for big and small deployments
* Supports Exactly once processing semantics
* All communications are done through existing security Mechanism
* Streams live in the kafka computers, they do not execute on brokers.
* Streams scale automatically on your cluster
