# Coding


# Java
[Java Basics](https://microshak.github.io/MicroNotes/Notes.html?path=/Language/Java/JavaBasics)


# Why so fast

>> **The First Law of Data Quality:** 
>> “Data is either being used or waiting to be used—or wasting storage and support.”

---

# 4 Types of Velocity
* Real Time
* Near Real-Time
* Batch
* Analytical Processing

---

# Real World Applications (Real-Time)
* Fraud Detection
    * [Square](https://cwiki.apache.org/confluence/display/KAFKA/Powered+By) has real time alerting using Splunk, Graphite, and Kafka
* User Analytics 
    * [Bing](https://azure.microsoft.com/en-us/blog/processing-trillions-of-events-per-day-with-apache-kafka-on-azure/) uses kafka to influence adds in real time
    * [Data Shift](http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html) processes 1200 tweets per second for real time data mining
* Speed System
    * [Craigs List](https://blog.zawodny.com/2011/02/26/redis-sharding-at-craigslist/) use Redis to cashe data to speed up their website.
    * [Stack Exchange](https://meta.stackexchange.com/questions/69164/does-stack-exchange-use-caching-and-if-so-how/69172#69172) speeds up their website with Redis.



---

# Real World Applications
* Sensor Readings 
    * FedEx uses [Sense Aware](https://www.senseaware.com/how-it-works/) to track packages in real time
    * [Dynisco] uses IoT sensors to alert and insturment their solutions

---


 
## Redis (Remote Dictionary Server)

* Distributed in Memory,Key Value Database with Optional Durability
* Binary Safe
* ACID (Atomicity, Consistency, Isolation, Durability)

---


---

---

# Why Redis
![right](https://microshak.github.io/MicroNotes/Images/Redis.png)
*   Fast
*   Not CPU intensive
*   Scalable

---

# Use Cases
* Cashe
* Analytics
* Leaderboards
* Queues
* Cookie storage
* Expiring Data
* Hi I/O workloads
* Messaging 
* Pub Sub

---



# Kafka
* Kafka is a message queueing system.
* Mantra: "Its just Java"

---
# Kafka
[Kafka Basics](https://microshak.github.io/MicroNotes/Notes.html?path=/BigData/Kafka/KafkaBasics)
[Running Kafka Manually](https://microshak.github.io/MicroNotes/Notes.html?path=/BigData/Kafka/KafkaManually)

Community http://slackpass.io/confluentcommunity
---
# Kafka Terminology
* Topic
* Producer - Putting messages on a topic
* Consumer - subscribing to a topic
* Journal - time based topic
* Consumer Group - subscribing to your messages off a journal

TODO: https://github.com/ches/docker-kafka

---
# Main Features
* Pub/Sub
* Kafka API
  * K-Streams
  * K-Tables
  * Cache

---
# Demo
[Web Socket Charts](https://github.com/Microshak/Kafka-Websocket-Charts)
[notes](https://microshak.github.io/MicroNotes/doc.html?path=Language/Java/SpringBoot)
[Pi](https://github.com/Microshak/Kafka-SenseHat-IoTDevice)

# Middle Ware
* AMQP
* MQTT
* DDS
  * QoS
  * Fast-RTPS
    * Kuberos
    * LDAP

---

# Fast Reliable Web Communications
* REST
* Web Sockets
* Web Sockets over AMQP, MQTT
* GRPC

---
# Intermittent network
* Store and Forward
* Sneaker Net
* File Transfer

---
# Metered or constrained network
* Edge Processing
* Fog Processing
* Pattern Matching
* Querable 
---

# Alternate Networks
* White Space
* SMS
* LoRa (Long Range)
* Zigbee (low power mesh)
---

## Spark Structured Streaming
[Structured Streaming](https://docs.databricks.com/spark/latest/structured-streaming/demo-notebooks.html#structured-streaming-python)




# Message Message Offloading
* Message Queues

# Slow/Inexpensive Systems
* Python Dataframes
* Key Value Stores
* Iterative Approach
* [Background program](https://boinc.berkeley.edu/projects.php) 
* [Screen Saver](https://www.harding.edu/fmccown/screensaver/screensaver.html)
* Limited Tools
---


--kafka
https://github.com/jcustenborder/kafka-connect-archtype


---
# Confluent Prickign Pricing
* enterprise based on nodes
  * 3+3 nodes 
  * each additional node $5000-$6000
  * Typical Cost $60,000-$100,000
* Cloud 
    * Based on Throughput and Availabliltiy
    * $2,000 + throughput


# Case Study: Uber vs Lyft approach
(Kafka Approach)[https://eng.uber.com/uber-big-data-platform/]

