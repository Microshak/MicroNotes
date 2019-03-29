Maslos hammer

# Why so fast

``` Data can have a limited shelf life or age quickly  ```

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




 
## Redis (Remote Dictionary Server)

Distributed in Memory,Key Value Database with Optional Durability

Binary Safe

ACID (Atomicity, Consistency, Isolation, Durability)

---

# Data Types
* Strings
* Lists
* Maps
* Sets
* Sorted Sets
* Hyperloglogs
* Bitmaps
* Streams
* Spatial Indexes 

# Why Redis
![right](https://microshak.github.io/MicroNotes/Images/Redis.png)
*   Fast
*   Not CPU intensive
*   Scalable

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
Kafka is a message queueing system.
Mantra: "Its just Java"

---

# Kafka Terminology
Topic
Producer - Putting messages on a topic
Consumer - subscribing to a topic
Journal - time based topic
Consumer Group - subscribing to your messages off a journal

TODO: https://github.com/ches/docker-kafka

---
# Main Features
* Pub/Sub
* Kafka API
  * K-Streams
  * K-Tables
  * Cache

---
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

TODO Expand
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



TODO Uber vs Lyft approach


TODO Spin up a redis cache

# Message Message Offloading
* Message Queues

# Slow/Inexpensive Systems
* Python Dataframes
* Key Value Stores
* Iterative Approach
* [Background program](https://boinc.berkeley.edu/projects.php) 
* [Screen Saver](https://www.harding.edu/fmccown/screensaver/screensaver.html)

# Case Study
http://www.microsoftcloudshow.com/podcast/Episodes/296-have-i-been-pwned-an-interview-with-troy-hunt