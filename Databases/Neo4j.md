* Open Source
* NoSQL
* Since 2007
* ACID Complient
* Cluster Support
* Runtime Failover

--- 
Nodes
Properteis - name/value pair
* Relationships


--- 
# Relational vs Graphing
* Joins are expensive and confusing
* Constant time traversal
    * In relational ids must be linked
    * In relational 
---

    ![full](/images/jointedtable.png)
---
    ![full](/images/GraphDBStruture.png)

# SQL VS Cypher
!!!todoneo1

---
!!!todoneo2

# Demo
```neo4j

:play movies
```


https://neo4j.com/developer/docker-run-neo4j/

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
---
PRogramming
Cypher
OGM
https://www.youtube.com/watch?v=QGUpXsTyyqY
https://www.youtube.com/watch?v=djNJd1U2VR0
    

```