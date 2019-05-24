# This Class
* Graph in Spark
* IoT Edge
* Using the Browser as an edge device
---

# Spark Graph



# Graph
Mathematical representation of things that are connected

---
# What is Graph
It has:
* Vertexes
* Edges




![right](https://microshak.github.io/MicroNotes/Images/Graph/nodesedges.gif)
---
# What is Graph

It can represent real world things
![right](https://microshak.github.io/MicroNotes/Images/Graph/Basic.png)

# What is a Graph
It can be directed or not directed
![right](https://microshak.github.io/MicroNotes/Images/Graph/directedgraph.png)

---
# What is Graph

The edges and nodes can have properties
![right](https://microshak.github.io/MicroNotes/Images/Graph/propertygraph.png)
---
# Why use graphs
* Labeled data is often unavailable to you.
* Can help you find **influence**
  * Centrality Algorithms
* Can help you find **homophily** (birds of a feather stick together)
* Can help you find **communities**
  * Fraud rings
  * 
* Can help find pair-wise relatationship between objects
* Can help you find **Path and Search**
* Can show **Importance** 
* Show **Decomposition**
* Can map **Network flow** showing where there are missing node

---

# Assumptions
Edges not random


---
# Graph Algorithms

Sequence of steps
Examples
* Page Rank
  * Vertices web pages
  * Edges are links
  * Each link is a vote of importance
  * Votes count for more if they come from an important page
* Wikipedia
   * Verticies users and pages
   * Edges edits
   * Users editing a page at a given time
   * This creates a property graph
   * Find pairs of users who collaborate often


---
# Understand community Algorithms
tranglel
clustering coefficent

used to understand your community in general

6 degrees of keven bacon example of a small world structure
estimating stability (things that are stuck together)
wholes in graph
used to score how tighly a node is (used for ML) (example spam classification)


https://www.youtube.com/watch?v=MTnozZ5Cy0E

--- 
Tringle count: The count of traingles passing through a node in a graph
Clustering coeeficent: is the probabliity that a neighbors of a particular node are connected to eachother


---

**Graph** — A data structure G = (V, E) where V and E are a set of vertices and edges.
**Vertex** — Represents a single entity such as a person or an object (e.g., a username on a social network).
**Edge** — Represents a relationship between two vertices (e.g., are these two vertices friends on a social network?).
**Directed Graph vs. Undirected Graph** — Denotes whether the relationship represented by edges is symmetric or not (e.g., Twitter user A can follow user B but B might not follow A).
**Subgraph** — A set of vertices and edges that are a subset of the full graph's vertices and edges.
**Degree** — A vertex measurement quantifying the number of connected edges (e.g., a username vertex on Facebook has a degree of 50 if it has a direct friend relationship with 50 other users).
**Connected Component** — A strongly connected subgraph, meaning that every vertex can reach the other vertices in the subgraph.
**Shortest Path** — The fewest number of edges required to travel between two specific vertices.

---


# Spark Graph Frames
* Problem with Graph Databases
    * Easy to use
    * Don't support complex operations
* Graph Frames  
    * Can use a Spark SQL
    * Can use Spark Graph QL
    * Can use graph algorithms
---
# Graph X
    * Only supported in Java/Scala




# Spark Graph Frames
* lage more than one machine
* parralizable
* Intergrates with Graphx
* Fault tolerant
* Intergrates with data frames, python etc
    
---
# Graph Motif Queries
```py
graph.find("(a)-[]->(b); (b)-[]->(c); !(a)-[]->(c)")
```
![right](https://microshak.github.io/MicroNotes/Images/Graph/motif.gif)






----
# Three Things to Remember


----
# This section IoT On The Edge
* Microsoft IoT Edge
  * Deploy Models
  * Multiplexing
  * 
* Edge Compute
* Fog Compute
* 

# Middle Ware
* AMQP
* MQTT
* DDS
  * QoS
  * Fast-RTPS
    * Kuberos
    * LDAP



---
# Metered or constrained network
* Edge Processing
* Fog Processing
* Pattern Matching
* Querable 
---

# Alternate Networks
* White Space
* SMS
* LoRa (Long Range)
* Zigbee (low power mesh)
---

![full](https://microshak.github.io/MicroNotes/Images/BigData/edge.png)


---
# Intermittent network
* Store and Forward
* Sneaker Net
* File Transfer

---

# Message Message Offloading
* Message Queues


# Offloading Compute
* [Android](https://www.tensorflow.org/lite/guide/android)
* [Web](https://www.tensorflow.org/js)[example](https://magenta.tensorflow.org/demos/performance_rnn/index.html#3|2,0,1,0,1,1,0,1,0,1,0,1|1,1,1,1,1,1,1,1,1,1,1,1|1,1,1,1,1,1,1,1,1,1,1,1|false)
* [Small Device](https://microsoft.github.io/ELL/tutorials/)

---
