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



# Graph Databases
* Intuitive 
* Speed
* Schema Optional
---

# Graph DB Use cases
* Fraud detection
* Real-time recommendation engines
* Master data management (MDM)
* Network and IT operations
  
---