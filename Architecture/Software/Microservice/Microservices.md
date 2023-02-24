# What are they
...the microservice architectural style is an approach to developeing a single application as a suite of small services, each running its own process and communicatiing with a lightweight mechonisms, often HTTP resource API. ---martin fowler

---
 
## Distrituted Transactions
### Saga Pattern
* Replaces transactions in disturbuted databases
* Many local transactions(T) along the chain with checks
* Rollback needs to be coded with compansating(C) tranactions

