
# Main Features
* Pub/Sub
* Kafka API
  * K-Streams
  * K-Tables
  * Cache

---

# Kafka Architecure
 * Brokers
    * Responsible for Pub/Sub
    * Storing Messages
    * Fail over
    * Replication
    * Consistency
    * Uses Keys to hash to send to partition

---
# MMessages
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
* Consumer - subscribing to a topic
* Journal - time based topic
* Consumer Group - subscribing to your messages off a journal


---


# Streams
* A stream is an unbounded sequence of structured data
* K streams is a class that creates an abstraction over the stream
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
* fact + dimension = enriched data

---
# Streams API
* No Batching
* Millisecond Tatency
* Stateless
* Statefull
    * Windowing
* Works for big and small deployments
* Supports Exactly once processing semantics
* All communications are done through existing security Mechanism
* Streams live in the kafka computers, they do not execute on brokers.
* Streams scale automatically on your cluster





