# What is Neo4j
* Open Source
* NoSQL
* Since 2007
* ACID Compliant
* Cluster Support
* Runtime Failover

---

# Nodes

* Properties - name/value pair
* Relationships

---

# Relational vs Graphing
* Joins are expensive and confusing
* Constant time traversal
    * In relational database ids must be linked
    * In graph database objects are linked
---

    ![full](https://microshak.github.io/MicroNotes/Images/JoinedTables.png)

---
    ![full](https://microshak.github.io/MicroNotes/Images/GraphDBStructure.png)
---

# Programming
* Cypher
* OGM
* [Docs](https://neo4j.com/developer/docker-run-neo4j/)
* [Tutorial](https://www.youtube.com/watch?v=QGUpXsTyyqY)

---

# Demo

```docker
 docker run \
     --name testneo4j \
     -p7474:7474 -p7687:7687 \
     -d \
     -v $HOME/neo4j/data:/data \
     -v $HOME/neo4j/logs:/logs \
     -v $HOME/neo4j/import:/var/lib/neo4j/import \
     -v $HOME/neo4j/plugins:/plugins \
     --env NEO4J_AUTH=neo4j/test \
    

```
---

```neo4j

:play movies
```
---




