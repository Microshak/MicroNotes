# This Class
* Graph in Spark
* IoT Edge
* Fog
* Deploy Models to Web/Mobile 
---

# Spark Graph
* Subgraphs
* Motifs
* Various Graph Algorithms
* Spark Graph Frames
* ~~GraphX~~


---
# What is Graph
A representation of things that are connected


![right](https://microshak.github.io/MicroNotes/Images/Graph/nodesedges.gif)
It has:
* Vertexes
* Edges
* Algorithms are inherently recursive 
---
# What is Graph

It can represent real world things
![full](https://microshak.github.io/MicroNotes/Images/Graph/Basic.png)
---
# What is a Graph
It can be directed or not directed
![full](https://microshak.github.io/MicroNotes/Images/Graph/directedgraph.png)

---
# What is Graph

The edges and nodes can have properties
![full](https://microshak.github.io/MicroNotes/Images/Graph/propertygraph.png)

---

# Why use graphs
* Labeled data is often unavailable to you.
* Can help you find **influence**
  * Centrality Algorithms
* Can help you find **homophily** (birds of a feather stick together)
* Can help you find **communities**
  * Fraud rings
  * Overloaded Edges
* Can help find pair-wise relationships between objects
* Can help you find **Path and Search**
* Can show **Importance** 
* Show **Decomposition**
* Can map **Network flow** showing where there are missing node

---
# Assumptions
* Edges not random


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
# Terminology

* **Graph** — A data structure G = (V, E) where V and E are a set of vertices and edges.
* **Vertex** — Represents a single entity such as a person or an object (e.g., a username on a social network).
* **Edge** — Represents a relationship between two vertices (e.g., are these two vertices friends on a social network?).
* **Directed Graph vs. Undirected Graph** — Denotes whether the relationship represented by edges is symmetric or not (e.g., Twitter user A can follow user B but B might not follow A).

---

#Terminology
* **Subgraph** — A set of vertices and edges that are a subset of the full graph's vertices and edges.
* **Degree** — A vertex measurement quantifying the number of connected edges (e.g., a username vertex on Facebook has a degree of 50 if it has a direct friend relationship with 50 other users).
* **Connected Component** — A strongly connected subgraph, meaning that every vertex can reach the other vertices in the subgraph.
* **Shortest Path** — The fewest number of edges required to travel between two specific vertices.

---

# Spark Graph Frames
* Graph Databases
    * Easy to use
    * Don't support complex operations
* Graph Frames  
    * Can use a Spark SQL
    * Can use Spark Graph QL
    * Can use graph algorithms

---

# GraphX
   * Only supported in Java/Scala
   * Built on top of Spark RDD

[tutorial](http://ampcamp.berkeley.edu/big-data-mini-course/graph-analytics-with-graphx.html)

---


# Spark Graph Frames
* Large more than one machine
* Parralizable
* Integrates with GraphX
* Fault tolerant
* Integrates with data frames, python etc
    
---
# Graph Motif Queries
```py
graph.find("(a)-[]->(b); (b)-[]->(c); !(a)-[]->(c)")
```
![right](https://microshak.github.io/MicroNotes/Images/Graph/motif.png)

---
# Demo

[Data and Files](https://github.com/Microshak/Databricks/tree/master/Graph)

---

# Three Things to Remember
* You can analyze data in different ways using Graph techniques
* You can segment your data in different ways
* Graph algorithms can be time consuming

---
# This section IoT On The Edge
* Microsoft IoT Edge
  * Deploy Models
  * Multiplexing
  * Gateway
---
# Data on the Cloud
* Devices can have connectivity issues
* The cloud is expensive
* Networks can bottleneck
* Compute on the Edge can be more cost effective


---
# Device Updating
* Complex and High Risk for devices (Bricked Devices)
* Containerization Creates a separation of concerns
* Containerization leads to Orchestration
---
# IoT Edge
* Docker/Mobi containers
* Internal Pub/Sub
* Store and Forward
* Has [Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/category/internet-of-things?page=1&subcategories=iot-edge-modules)


---
# [Demo](https://microshak.github.io/MicroNotes//Notes.html?path=Azure/IoT/IoTEdge101)

![full](https://microshak.github.io/MicroNotes/Images/IoTRef/IoTEdge.png)

---
# Three Things to Remember
* Edge Devices allow you to offload computer and reduce bottlenecks.
* OTA can be challenging
* Dockerizing allows for greater control


---
# Fog Compute

Fog Computing
    Fog Computing Consortium
![full](https://microshak.github.io/MicroNotes/Images/Edge/fog1.png)
    
---
# Why use Fog
* Can't trust internet
  * Restricted Factories
  * Secure Facilities
* Internet connectivity
  * Remote Locations
  * Mobile Centers
  * Planes
* Speed/Amount of data 
  * Cars
  * Plains
  * Medical Devices
  * Robots     
---
# Fog Demo 

[Getting Started with ROS](http://wiki.ros.org/ROS/StartGuide)

---

# DDS (Distributed data service)

* Pub Sub
* Schema Aware
* Standard transport (RTPS)
* Global Data Space
* Each reader or writer have a topic
* **QoS**
* Query topic for only the information
* Low latency push
* Hierarchy's of data buses
* Supports Kuberos and LDAP

---

# Alternate Networks
* White Space
* SMS
* LoRa (Long Range)
* Zigbee (low power mesh)
---

# Message Message Offloading
* Message Queues
* IoT Hub


---

# Offloading Compute
* [Android](https://www.tensorflow.org/lite/guide/android)
* [Web](https://www.tensorflow.org/js) [example](https://magenta.tensorflow.org/demos/performance_rnn/index.html#3|2,0,1,0,1,1,0,1,0,1,0,1|1,1,1,1,1,1,1,1,1,1,1,1|1,1,1,1,1,1,1,1,1,1,1,1|false)
* [Small Device](https://microsoft.github.io/ELL/tutorials/)

---
# Offloading Data on Web

# IndexedDB
* Key Value Pare Database
* Supports Transactions
* Async'ish
* Uses DOM event to notify when results are available
* Object oriented
* No SQL Language
* Uses same-origin policy
* [Simple Example](https://github.com/Microshak/IndexedDB)
---

# PWA (Progressive Web Apps)
* Manifest
* IndexedDB
* Service Worker