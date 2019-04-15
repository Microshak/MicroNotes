

# Kafka Download

Download the latest version of Kafka then
      
 ~~~If you are ssh'ed into a machine then use "wget [download url]"~~~
---
# Install
```sh      
tar -xzf kafka_2.XX.XX.XX.tgz

cd kafka_2.XX.XX.XX

     #May need to install java --
     sudo add-apt-repository ppa:webupd8team/java
     sudo apt update; sudo apt install oracle-java8-installer
     sudo apt install oracle-java8-set-default

```
---
# Run Kafka

```sh

bin/zookeeper-server-start.sh config/zookeeper.properties

bin/kafka-server-start.sh config/server.properties

bin/kafka-topics.sh --list --zookeeper localhost:2181

```

---

# Testing

## Create Topic

``` 
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
```
## Send Message
```
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
```
---
[source](https://kafka.apache.org/quickstart)









# Azure VM Setup
You need to open up the firewall.
The easiest way is to Bing "What is my IP"
Then Bing "Who Is [IP Address]"
Look for the SIDR and put that in your filewall to allow traffic.

