# Mongo 
* A Document Database
* Supports BSON (Binary JSON)
* Is Sharded
* Is Schema Less
* Support Aggregation
* Support Cross Collection Joins
* Can store Files
* [Change Streams](https://docs.mongodb.com/manual/changeStreams/)

---
# Mongo Query
```sql
SELECT * FROM Employees WHERE emp_name LIKE '%MOHIT%';

```
```js
db.Employees.find({emp_name:/MOHIT/ });
```
---

# Mongo Transactions
* Acid Complient throught [Transactions API](https://docs.mongodb.com/manual/core/transactions/)
* Support for many languages
* [Bulk Write](https://docs.mongodb.com/manual/core/write-operations-atomicity/)
* [Write Isolation](https://docs.mongodb.com/manual/reference/read-concern/)
* [Write Concerns](https://docs.mongodb.com/manual/reference/write-concern/)
---

# Mongo Security
## Supports
* Authentication ([multiple](https://docs.mongodb.com/manual/core/authentication/
* ))
* [Authorization](https://docs.mongodb.com/manual/core/authorization/) (database, collection, set of collections, or the cluster)
* [Encryption at Rest](https://docs.mongodb.com/manual/core/security-encryption-at-rest/)

---

# Support Multiple [Indexes](https://docs.mongodb.com/manual/indexes/)
* Multikey
* Text
* 2dsphere
* 2d Indexes
* geoHaystack
* Sparse Indexing

