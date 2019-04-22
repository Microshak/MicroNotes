



# Kafka Architeture
 * Brokers
    * Responsible for Pub/Sub
    * Storing Messages
    * Fail over
    * Replication
    * COnsistency
    * ouses Keys to hash to send to partition
    * 
---
# MEssages
- Key/Value
* Messages go to topic on Broker
---
# Producers/COnsumers
* Producer
    * API
    * Wire Protecol
    * Publishing APP
* Consumer
    * API
    * Wire Proticol
    * Subscriber APP
---



# Streams
* A stream is an unbounced sequence of structured data

K streams is a class that creates an abstraction over the stream

Stream builder has an class stream that represents a topic

elements in the stream stream can be called facts

table is a collection of evolving facts

kstream table
keyed facts overrites the previous one

#transforming data
filter --- stateless
map --- lambda --- change key

map then we can joint to a table

fact + demension = enriched data



Streams API
* Pre record stream processing
* No Batching
* Millisecond lagency
* Stateless
* Statefull
    * windowning
* Streams code runs inside your application

* Streams scalable computation
* Located with kafka - no seperate cluster
* Works for big and small deployments

* Supports Exactly once proccess symantics
* All communications are done through existing security Mechonism
* Streams live in the kafka computers, they do not execute on brokers.
* Streams scale automatically on your cluster



KQL Python
https://pypi.org/project/ksql/


---
# KSQL

Not SQL (but looks like it)
* has streams
* has tables 

both streams and tables are abstracrions on a topic

* ktable is just getting the most recent one of the key
    materialized view of most recent in topic
        ktable in mmeory

todo: Stream creation ddl
todo: Table creation ddl

command line
https://github.com/edenhill/kafkacat