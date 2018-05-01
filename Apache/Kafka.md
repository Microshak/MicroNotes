# Kafka

## Starting

bin/zookeeper-server-start.sh config/zookeeper.properties

bin/kafka-server-start.sh config/server.properties

bin/kafka-topics.sh --list --zookeeper localhost:2181

---
# Topics



Create Topic
~~~~ 
> bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
~~~~
Send Message
~~~~
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
~~~~