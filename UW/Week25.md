

 [Docker Easy](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/Docker/Docker99)

 ---
 [Kafka](https://microshak.github.io/MicroNotes/Notes.html?path=BigData/Kafka/ConflientDocker)


---
# Create, List, Add, Read
[Running Kafka Manually](https://microshak.github.io/MicroNotes/doc.html?path=/BigData/Kafka/KafkaManually)

 ```

bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test
bin/kafka-topics.sh --list --bootstrap-server localhost:9092
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning

 ```
---
# DockerFile
[https://github.com/Microshak/MicroNotes/tree/master/Containers/Docker/DockerFile](https://github.com/Microshak/MicroNotes/tree/master/Containers/Docker/DockerFile)