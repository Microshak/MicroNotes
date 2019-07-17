# Big Data 230 Hi Speed Systems

> From a certain point onward there is no longer any turning back. That is the point that must be reached. 
> -- Kafka

---
# Learning to Code

* [Interactive Tutorial Java](https://www.learnjavaonline.org/)
* [Interactive Tutorial Python](https://www.learnpython.org/)
* [Hacker Rank](https://www.hackerrank.com/)
* The Docs [Kaka](https://kafka.apache.org/quickstart)
* Books
* YouTube
* [Meetups](https://www.meetup.com/find/?allMeetups=false&keywords=data&radius=25&userFreeform=Seattle%2C+WA&mcId=c98101&mcName=Seattle%2C+WA&sort=default)
* Interview Prep
* Opensource providers [Spark](https://databricks.com/resources/type/example-notebook) [Kafka](https://docs.confluent.io/current/ksql/docs/index.html)
---

# Languages

[Java Basics](https://microshak.github.io/MicroNotes/Notes.html?path=/Language/Java/JavaBasics)

[Python Basics](https://microshak.github.io/MicroNotes/Notes.html?path=/Language/Python/PythonBasics)

---


# Podcast
[Streaming Audio](https://podcasts.apple.com/us/podcast/streaming-audio-a-confluent-podcast-about-apache-kafka/id1401509765)
* Exactly Once Semantics [Atomic broadcast Problem](https://en.wikipedia.org/wiki/Atomic_broadcast)
* New with Kafka 2.3 Late Replicas
* Performance Tuning with TCO
  * Large Machines vs Small
  * Compressed Messages
  * No Partition
  * Speed Improvements after v.11

---

# Why so fast

>> **The First Law of Data Quality:** 
>> “Data is either being used or waiting to be used—or wasting storage and support.”

---
# This Class
* Fast Systems
* 

# 4 Types of Velocity
* Real Time
* Near Real-Time
* Batch (micro)
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
    * Dynisco uses IoT sensors to alert and instrument their solutions

---

# In Memory Key Value Stores 

* [Redis Basics](https://microshak.github.io/MicroNotes/Notes.html?path=/BigData/Redis/RedisBasics)
* [Memcache](https://memcached.org/)

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
* Kafka was a message queueing system
* Evolved to be easier and programmable
* Mantra: "Its just Java"

---
# Kafka
* [Kafka Basics](https://microshak.github.io/MicroNotes/Notes.html?path=/BigData/Kafka/KafkaBasics)
* [Community](http://slackpass.io/confluentcommunity)
* 
* Confluent Kafka vs Opensource Kafka [link](https://www.confluent.io/download/)

---
# Kafka Demo
* Pi Hat Kafka 
  * [Web](https://github.com/Microshak/Kafka-Websocket-Charts)
  * [Sense Hat](https://github.com/Microshak/Kafka-SenseHat-IoTDevice)
* KSQL
 * [Confluent Kafka](https://microshak.github.io/MicroNotes/doc.html?path=/BigData/Kafka/ConflientDocker)
 * [Kafka Weather Streamer](https://github.com/Microshak/KafkaWeatherStreamer)
 * [KSQL](https://microshak.github.io/MicroNotes/Notes.html?path=/BigData/Kafka/KSQL)

---

# Kafka Components
* KSQL -  Drop a file
* Connectors [Archetypes](https://github.com/jcustenborder/kafka-connect-archtype)
* Kafka Streams API [Docs](https://kafka.apache.org/22/documentation/streams/tutorial)

[Getting Started](https://microshak.github.io/MicroNotes/Notes.html?path=/Language/Java/Archtypes)

---

# Fast Reliable Communications
* REST
* Web Sockets
* Web Sockets over AMQP, MQTT
* GRPC

---

# Case Study: Uber vs Lyft approach
* [Uber Approach](https://eng.uber.com/uber-big-data-platform/)
* [Redis Approach](https://www.youtube.com/watch?v=U4WspAKekqM&t=1011s)

---

## Spark Structured Streaming
* [Structured Streaming](https://docs.databricks.com/spark/latest/structured-streaming/demo-notebooks.html#structured-streaming-python) 
* ~~~Spark Streaming~~~
* [Databricks Community Edition](https://community.cloud.databricks.com)

---

# Slow/Inexpensive Systems
* Python Dataframes
* [Key/Value Stores](https://github.com/Microshak/IndexedDB)
* [Juypter Notebooks](https://hub.docker.com/u/jupyter/)
* [Background program](https://boinc.berkeley.edu/projects.php) 
