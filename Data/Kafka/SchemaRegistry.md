# Why use it
* New devs can learn how the schema is structured.

# What is it
Stand alone server process.  It mainains a db of all database in cluser that it is responsible. 
* Cached for low latency
* Can be run HA

### Producer
* API that allows producers and consumers to get schema
* Allows the producer to fail

### Consumer
On Consumer it allows the consumer to reject the message.


# IDL Interface description language 
* where you can describe the schema 
* Can use a text file and check in et.


