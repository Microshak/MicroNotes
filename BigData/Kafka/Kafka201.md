# Enterprise Thoughts
* Data Governance
  * Create Delete of topics
  * Enforcing Data types
  * Deleting with Encrypted data
* Testing
* Availability 
* Security

---
# Kafka Performance
1. Must ballance Throughput vs Latency

Increasing the troughput also increases latency

1. acks - delivery garuntee
2. linger.ms - adds delay and allows producer to batch 
3. max.inflight.request.per.connection
   1. if we have it at 1 then we have a strong ordering guarentee.  If we increase it we will lose ordering guarentee.
4. Batch Size - amount fo bytes the producer should use before sending it to producer.


moiz 
povil
jim


