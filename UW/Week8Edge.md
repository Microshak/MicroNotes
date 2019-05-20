# Spark Graph

https://docs.databricks.com/spark/latest/graph-analysis/graphframes/user-guide-python.html
# Graph
Mathmatical representation of things that are connected


# Graph Algorithms

Sequence of steps
Example
    Page Rank
        Verticies web pages
        edges are links

        each link is a vote of importance
        Votes cound for more if they come from an important page


---
# Graph Queryies
Given a small pattern find a sequence

examlle

wikipedia
    verticies users and pages
    edges edits


    users editing a page at a givem page

    this creates a property graph

    find pairs of users who collaborate often

---
# other graph use cases
Path and Search
Importance 
Community Detection 
Decomposition
Network flow
ML Flow
Link prediction
Similarity
---
morpheous spark...
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
    * Only supported in Java


---
# Uses Graph
Predicting influience with Centrality Algorithms
Finding and understanding groups with Community Algorithms


# Join reordering
https://www.youtube.com/watch?v=76LOOORaKBU&t=254s

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
