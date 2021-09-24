## Question
How do Kafka brokers ensure great performance between the producers and consumers? (select two)


1. It transforms the data in the binary format.

2. It buffers the message on disk and send messages from the disk reads.

3. It does not transforms the messages.

4. It leveages the zero copy optimisation to send data straight from the page-cache.

---
## Explanation

Kafka transfers data with zero-copy and sends the raw bytes it receives from the producer straight to the consumer, 

leveraging the RAM available as page cache

---


## Question
A bank uses a Kafka cluster for credit card payments. What should be the value of the property unclean.leader.election.enable?


1. TRUE

2. FALSE

---
## Explanation

Setting unclean.leader.election.enable to true means we allow out-of-sync replicas to become leaders, 

we will lose messages when this occurs, effectively losing credit card payments and making our customers very angry.

---


## Question
Where are the dynamic configurations for a topic stored?


1. In server.properties.

2. On the kafka broker file system.

3. In Zookeeper

4. In the internal kafka topic __topic_configuration

---
## Explanation

Dynamic topic configurations are maintained in Zookeeper.

---


## Question
If I produce to a topic that does not exist, and the broker setting auto.create.topic.enable=true, what will happen?


1. kafka will automatically create the topic with the broker settings num.partitions and default.replication.factor 

2. kafka will automatically create the topic with 1 partition and 1 replication factor

3. kafka will automatically create the topic with the indicated settings num.partitions and default.replication.factor.

4. kafka will automatically create the topic with the num.partitions= # and replication.factor = 3

---
## Explanation

The broker settings comes into play when a topic is auto created

---


## Question
You have a Kafka cluster and all the topics have a replication factor of 3. 

One intern at your company stopped a broker, and accidentally deleted all the data of that broker on the disk.

What will happen if the broker is restarted?


1. The broker will crash.

2. The broker will start, and other topic will also be deleted.

3. The broker will start, and won't be online untill all the data it needs to have is replicated from other leaders.

4. The broker will start, and won't have any data.

---
## Explanation

Kafka replication mechanism makes it resilient to the scenarios where the broker lose data on disk,

but can recover from replicating from other brokers. This makes Kafka amazing!

---


## Question
There are 3 producers writing to a topic with 5 partitions. There are 5 consumers consuming from the topic.

How many Controllers will be present in the cluster?


1. 2

2. 3

3. 5

4. 1

---
## Explanation

There is only one controller in a cluster at all times

---

## Question
A client connects to a broker in the cluster and sends a fetch request for a partition in a topic.

It gets an exception NotLeaderForPartitionException in the response. How does client handle this situation?


1. Send fetch request to broker

2. Send meta data request to zookeeper for the topic.

3. Send metadata request to broker for same topic and choosing the broker hosting the replica.

---
## Explanation

In case the consumer has the wrong leader of a partition, it will issue a metadata request.

The Metadata request can be handled by any node, 

so clients know afterwards which broker are the designated leader for the topic partitions. 

Produce and consume requests can only be sent to the node hosting partition leader.

---


## Question
We would like to be in an at-most once consuming scenario. Which offset commit strategy would you recommend?

1. commit the offsets in kafka ,before processing the data.

2. commit the offsets in kafka ,after processing the data.

3. commit the offsets on disk ,after processing the data.

4. Do not commit any offset and read from the beginning.

---
## Explanation

Here, we must commit the offsets right after receiving a batch from a call to .poll()

---


## Question
A consumer wants to read messages from a specific partition of a topic. How can this be achieved?


1. call assign() and pass collection of topic partition as a argument.

2. call subscribe() passing topic of partition as a argument.

3. call subscribe() passing topic partition and num of partition of topic as a argument.

---
assign() can be used for manual assignment of a partition to a consumer, in which case subscribe() must not be used.

Assign() takes a collection of TopicPartition object as an argument 

(https://kafka.apache.org/23/javadoc/org/apache/kafka/clients/consumer/KafkaConsumer.html#assign-java.util.Collection-)

---


## Question
A topic receives all the orders for the products that are available on a commerce site. 

Two applications want to process all the messages independently - order fulfilment and monitoring. 

The topic has 4 partitions, how would you organise the consumers for optimal performance and resource usage?


1. Create 8 consumers in the same group with 4 consumer applications for each.

2. Create 2 consumers in the same group for 2 applications with 8 consumer in each.

3.  Create 2 consumers in the same group for 2 applications with 4 consumer in each.

---
## Explanation

two partitions groups - one for each application so that all messages are delivered to both the application.

4 consumers in each as there are 4 partitions of the topic, 

and you cannot have more consumers per groups than the number of partitions (otherwise they will be inactive and wasting resources)

---


## Question
A consumer starts and has auto.offset.reset=latest, and the topic partition currently has data for offsets going from 45 to 2311.

The consumer group has committed the offset 643 for the topic before. Where will the consumer read from?


1. offset 45

2. offset 643

3. offset 2311

4. It will be crash

---
## Explanation

The offsets are already committed for this consumer group and topic partition, so the property auto.offset.reset is ignored

---


## Question
There are two consumers C1 and C2 belonging to the same group G subscribed to topics T1 and T2. 

Each of the topics has 3 partitions. How will the partitions be assigned to consumers with PartitionAssignor being RoundRobinAssignor?


1. C1 will be assigned partition 0 and 1 from topic T1 and T2 and C2 will be assigned partition 2 from T1 and T2.

2. Two consumers can not read from two Topics at a time.

3. C1 will be assigned partition 0 and 2 from topic T1 and partition 1 from T2 and C2 will be assigned partition 0 and 2 from topic T2 and partition 1 from T1.

4. All consumer read from all topic.

---
## Explanation

The correct option is the only one where the two consumers share an equal number of partitions amongst the two topics of three partitions. 

An interesting article to read is: https://medium.com/@anyili0928/what-i-have-learned-from-kafka-partition-assignment-strategy-799fdf15d3ab

---


## Question
Select all the way for one consumer to subscribe simultaneously to the following topics - topic.history, topic.sports, topic.politics? (select two)


1.  consumer.subscribe(Array.asList("topic.history", "topic.sports", "topic.politics"));

2. consumer.subscribe(Pattern.compile("topic\..*"));

3. consumer.subscribePrefix("topic.");

4.consumer.subscribePrefix("topic.sports");consumer.subscribePrefix("topic.history");consumer.subscribePrefix("topic.politics");

---
Multiple topics can be passed as a list or regex pattern.

So option 1 and 2 is ans.

---


## Question
What isn't an internal Kafka Connect topic?


1. connect-status

2. connect-jars

3. connect-offsets

4. connect-configs

---
## Explanation

connect-configs stores configurations, connect-status helps to elect leaders for connect, and connect-offsets store source offsets for source connectors

---


## Question
You are using JDBC source connector to copy data from 2 tables to two Kafka topics. 

There is one connector created with max.tasks equal to 2 deployed on a cluster of 3 workers. How many tasks are launched?


1. 2

2. 3

3. 6

4. 10

---
## Explanation

we have two tables, so the max number of tasks is 2

---


## Question
You want to sink data from a Kafka topic to S3 using Kafka Connect. 

There are 10 brokers in the cluster, the topic has 2 partitions with replication factor of 3. 

How many tasks will you configure for the S3 connector?


1. 2

2. 3

3. 6

4. 10

---
You cannot have more sink tasks (= consumers) than the number of partitions, so 2.

---


## Question
To import data from external databases, I should use


1.  Kafka Connect-sink

2.  Kafka-streams

3.  Kafka  Connect-source

4.  Confluent Rest Proxy

---
## Explanation

Kafka Connect Sink is used to export data from Kafka to external databases and Kafka Connect Source is used to import from external databases into Kafka.

---


## Question
You want to perform table lookups against a KTable everytime a new record is received from the KStream. What is the output of KStream-KTable join?




1. KStream

2. KTable

3. Global KTable

---
Here KStream is being processed to create another KStream.

---

## Question
The exactly once guarantee in the Kafka Streams is for which flow of data?


1. kafka ==> External

2. Kafka==> Kafka

3. External ==> Kafka

---
## Explanation

Kafka Streams can only guarantee exactly once processing if you have a Kafka to Kafka topology.

---


## Question
You are running a Kafka Streams application in a Docker container managed by Kubernetes, and upon application restart, 

it takes a long time for the docker container to replicate the state and get back to processing the data.

How can you improve dramatically the application restart?


1. Increase the no of threads

2. Increase the no of partition of the topic

3. Mount persisitent the data into your Rock DB

---
## Explanation

Although any Kafka Streams application is stateless as the state is stored in Kafka, 

it can take a while and lots of resources to recover the state from Kafka. In order to speed up recovery, 

it is advised to store the Kafka Streams state on a persistent volume, 

so that only the missing part of the state needs to be recovered.

---


## Question
Which of the following Kafka Streams operators are stateful? (select all that apply)


1. Count

2. peek

3. Aggregate

4. resuce

5. join 

6. flatmap

---
## Explanation

See: https://kafka.apache.org/20/documentation/streams/developer-guide/dsl-api.html#stateful-transformations

---


## Question
How will you read all the messages from a topic in your KSQL query?


1. Use KSQL CLI to set auto.reset to earliest.

2 . KSQL reads from the begining .

2. KSQL reads from the end. 

---
Consumers can set auto.offset.reset property to earliest to start consuming from beginning. For KSQL, SET 'auto.offset.reset'='earliest';

---


## Question
is KSQL ANSI SQL compliant?


1. YES

2. NO

---
## Explanation

KSQL is not ANSI SQL compliant, for now there are no defined standards on streaming SQL languages

---


## Question
Which KSQL queries write to Kafka?


1. Count and Join

2. Select ... from

3. show streams

4. Create TABLE AS / CREATE STREAM AS

---
## Explanation

SHOW STREAMS and EXPLAIN <query> statements run against the KSQL server that the KSQL client is connected to. 

They don’t communicate directly with Kafka. CREATE STREAM WITH <topic> and CREATE TABLE WITH <topic> write metadata to the KSQL command topic.

Persistent queries based on CREATE STREAM AS SELECT and CREATE TABLE AS SELECT read and write to Kafka topics. 

Non-persistent queries based on SELECT that are stateless only read from Kafka topics, for example SELECT … FROM foo WHERE ….

Non-persistent queries that are stateful read and write to Kafka, for example, COUNT and JOIN. The data in Kafka is deleted

automatically when you terminate the query with CTRL-C.

---


## Question
Producing with a key allows to...

1. Influence partioning of the produced messages.

2. Ensure per record level security.

3. Add more information to my message

---
## Explanation

Keys are necessary if you require strong ordering or grouping for messages that share the same key. 

If you require that messages with the same key are always seen in the correct order, attaching a key to messages will 

ensure messages with the same key always go to the same partition in a topic. Kafka guarantees order within a partition, but not across partitions in a topic, 

so alternatively not providing a key - which will result in round-robin distribution across partitions - will not maintain such order.

---


## Question
Select all that applies


1. min.insync.replica only matters if ack =all;

2. acks is a producer setting

3. min.insync.replica is a producer setting

4. acks is a topic setting

5. min.insync.replica is a topic setting

---
## Explanation

acks is a producer setting min.insync.replicas is a topic or broker setting and is only effective when acks=all

---


## Question
A Kafka producer application wants to send log messages to a topic that does not include any key.

What are the properties that are mandatory to configure for the producer configuration? (select three)


1. value

2. partion

3. key.serilizer

4. bootstrap.servers

5. value.serializer

---
A Kafka producer application wants to send log messages to a topic that does not include any key. 

What are the properties that are mandatory to configure for the producer configuration? (select three)

---


## Question
If I want to have an extremely high confidence that leaders and replicas have my data, I should use


1. acks=all , replication factor =3 , min.insyc.replicas =2

2. acks=1 ,   replication factor =3 , min.insyc.replicas =2

3. acks=all , replication factor =3 , min.insyc.replicas =1

4. acks=all , replication factor =1 , min.insyc.replicas =2

---
## Explanation

acks=all means the leader will wait for all in-sync replicas to acknowledge the record.

Also the min in-sync replica setting specifies the minimum number of replicas that need to be in-sync for the partition to remain available for writes.

---


## Question
Which of the following errors are retriable from a producer perspective? (select two)




1. TOPIC_PARTITION_FAILED.

2. MESSAGE_TOOLARGE.

3. NOT_LEADER_FOR_PARTITION.

4. NOT_ENOUGH_REPLICAS.

---
## Explanation

Both of these are retriable errors, others non-retriable errors.


See the full list of errors and their "retriable" status here: https://kafka.apache.org/protocol#protocol_error_codes

---


## Question
To enhance compression, I can increase the chances of batching by using


1. message.max.bytes = 10MB

2. linger.ms

3. acks = all

---
## Explanation

linger.ms forces the producer to wait before sending messages, 

hence increasing the chance of creating batches that can be heavily compressed.

---


## Question
To get acknowledgement of writes to only the leader partition, we need to use the config...


1. acks =0

2. acks =1

3. acks = all

---
## Explanation

Producers can set acks=1 to get acknowledgement from partition leader only.

---


## Question
Which of the following setting increases the chance of batching for a Kafka Producer?


1. increase linger.ms

2. increase message.max.bytes

3. increase batch.size

---
## Explanation

linger.ms forces the producer to wait to send messages, hence increasing the chance of creating batches

---


## Question
What is the risk of increasing max.in.flight.requests.per.connection while also enabling retries in a producer?


1. MEssage order not preserved.

2. reduce throughput.

3. at least once delivery is gauranted.

---
## Explanation

Some messages may require multiple retries. If there are more than 1 requests in flight, it may result in messages received out of order.

Note an exception to this rule is if you enable the producer setting: enable.idempotence=true 

which takes care of the out of ordering case on its own. See: https://issues.apache.org/jira/browse/KAFKA-5494

---


## Question
Your producer is producing at a very high rate and the batches are completely full each time. How can you improve the producer throughput? (select two)

1. Enable compression.

2.  Disable compression

3. Enable batch.size

4. disable batch.size

---
## Explanation

batch.size controls how many bytes of data to collect before sending messages to the Kafka broker. 

Set this as high as possible, without exceeding available memory.

Enabling compression can also help make more compact batches and increase the throughput of your producer. 

Linger.ms will have no effect as the batches are already full

---


## Question
Using the Confluent Schema Registry, where are Avro schema stored?

1. In the zk nodes.

2. In the meassge byte it self.

3. In the schema registry db.

4. In __schema topic.

---
## Explanation

The Schema Registry stores all the schemas in the _schemas Kafka topic

---


## Question
What client protocol is supported for the schema registry? (select two)

1. HTTPS

2. Websocket

3. HTTP

4. JDBC

---
## Explanation

clients can interact with the schema registry using the HTTP or HTTPS interface

---


## Question
What isn't a feature of the Confluent schema registry?


1. store avro data.

2. store schemas.

3. Enforce compatability rules.

---
## Explanation

Data is stored on brokers.

---


## Question
Which is an optional field in an Avro record?

1. name

2. namespace

3. field

4. doc

---
## Explanation

doc represents optional description of message

---


## Question
In Avro, adding a field to a record without default is a __ schema evolution

1. Full

2. Forward

3. Backward

---
## Explanation

Clients with old schema will be able to read records saved with new schema.

---


## Question
A consumer application is using KafkaAvroDeserializer to deserialize Avro messages. 

What happens if message schema is not present in AvroDeserializer local cache?


1. Message fails

2. Throw Serlaization Exception.

3. Throw DeSerilazation Exception .

4. Fetches meassges for schemas

---


## Question
A kafka topic has a replication factor of 3 and min.insync.replicas setting of 1. 

What is the maximum number of brokers that can be down so that a producer with acks=all can still produce to the topic?


1. 0

2. 1

3. 3

4. 2

---
## Explanation

Two brokers can go down, and one replica will still be able to receive and serve data

---


## Question
If a topic has a replication factor of 3..


1. Each partition will be live on 3 diffrent broker.

2. Each partition will be live on 4 diffrent broker.

3. Each partition will be live on 2 diffrent broker.

---
## Explanation

Replicas are spread across available brokers, and each replica = one broker. RF 3 = 3 brokers

---


## Question
A customer has many consumer applications that process messages from a Kafka topic. Each consumer application can only process 50 MB/s. 

Your customer wants to achieve a target throughput of 1 GB/s.

What is the minimum number of partitions will you suggest to the customer for that particular topic?


1. 1

2. 20

3. 10

4. 50

---
## Explanation

each consumer can process only 50 MB/s, so we need at least 20 consumers consuming one partition so that 50 * 20 = 1000 MB target is achieved.

---


## Question
A Zookeeper ensemble contains 3 servers. Over which ports the members of the ensemble should be able to communicate in default configuration? (select three)


1. 2181

2. 3888

3. 9092

4. 80

5. 2888

---
2181 - client port, 2888 - peer port, 3888 - leader port

---


## Question
What information isn't stored inside of Zookeeper? (select two)


1. Acl information

2. Consumer offset

3. Controller registration

4. Schema registry schemas

---
## Explanation

Consumer offsets are stored in a Kafka topic __consumer_offsets, and the Schema Registry stored schemas in the _schemas topic.

---




