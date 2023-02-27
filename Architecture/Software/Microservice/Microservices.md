# What are they
...the microservice architectural style is an approach to developeing a single application as a suite of small services, each running its own process and communicatiing with a lightweight mechonisms, often HTTP resource API. ---martin fowler

---
 
## Distrituted Transactions
### Saga Pattern
* Replaces transactions in disturbuted databases
* Many local transactions(T) along the chain with checks
* Rollback needs to be coded with compansating(C) tranactions

# Static Coupeling
High static coupling implies that the elements inside the architecture quantum are
tightly wired together, which is really an aspect of contracts

# Dynamic Coupeling
the behavior of architecture quanta as they interact
with one another to form workflows within a distributed architecture
## Communication
* Refers to the type of connection synchronicity used: synchronous or
asynchronous.
## Consistency
Describes whether the workflow communication requires atomicity or can utilize
eventual consistency.
## Coordination
Describes whether the workflow utilizes an orchestrator or whether the services
communicate via choreography.