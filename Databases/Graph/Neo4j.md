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
    --env NEO4J_AUTH=neo4j/test \
    neo4j:latest
```


---

```neo4j

:play movies
```
---
---
```docker
docker run \
    --name testneo4j \
    -p7474:7474 -p7687:7687 \
    -d \
    --env NEO4J_AUTH=neo4j/test \
    ryguyrg/neo4j-panama-papers

```



# Uses
80 of fortune 100 using 
20 of 25 biggest banks
7 of the 10 biggest retailers


James Foulder book called connected
predicted not just data about you but your graph
will have a higher degree of predictability than just data about you


People - 
Brett - Platform Engeneering
Harjeet - PM
Amber - DA
Steve Jennings - DevOps
Nate - Owner
Nalfis - Monitoring





