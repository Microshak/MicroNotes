# Week 2
* Data Ops
* Docker Hub
* Git Hub
* Docker Compose
* Kubernetes

---

77% of business [report](https://newvantage.com/wp-content/uploads/2018/12/Big-Data-Executive-Survey-2019-Findings.pdf) challenges in adoption of Big Data and AI 

---

# Question of the day
Have you have worked a fail project or a project that failed to meet expectations

---

# What is DataOps

Is the practices of Analyst, Data Scientist, Data Engineers, System Developers, Operations participating together in the entire service lifecycle.

---

# 3 Objectives
* Lean how to build work together to develope a data product
* Learn about maturing processes
* Learn about tools such as Git and Docker Hubs

---

# Question of the day
1. What is the largest team you have worked with
2. What size team do you typically work with

---

# Company Engineering Maturity Model
1. Sole Contributors
2. Small Siloed Groups
3. End-to-End product life-cycle

---

# End-to-End product life-cycle
* Design 
* Development
* Production Support

---

# 5 Pillars of DataOps
* Focus on Creating Data Products
* Operationalizing Analytics and Data Science
* Curating Data science and analytics blueprints
* Methodologies and Processes
* Culture, Alignment, and Clarity

---

# Goals of DataOps
* Improve Quality
* Reduce Cycle time
* Making the trains run on time
* Iterating 
* Continuos Improvement
* Learn from errors
* Fail Fast
* Innovate
* Eliminate Data Deserts

---

# Data Driven Innovation
* Data Collection
* Analysis
* Observation and Research
* Hypothesis Testing
* Experimentation

---

# What it Takes
* Collaboration
  * Breaking Silos
  * Democritazion Of Data
  * Collaboration Tools
* Enable Data Driven Decisions
  * Advanced Analytics
  * Reporting
  * Decision Support Systems

---

# Collaboration Tools/Methods
* Git
* Data Catalog/Data Dictionary
* Azure Pipelines/Jenkins
* ML Flow
* KanBan Boards/Burn Down Charts
* Slack  
* Standups

---

# Question
### What collaboration tools have you used?

---

# Version Control

* [Git CLI](https://git-scm.com/downloads) 
* [Git Gui](https://git-scm.com/downloads)
* [Git Clients](https://git-scm.com/download/gui/windows)
* Collaboration
  * Larger Projects
  * Code Reviews
* Traceability
  * Roll back code
  * Blame
* Environments
  * Testing
  * UAT
  * Release Candidates

---

# Git Terminology
* Branching 
* Committing
* Merging
* Stashing
* Cloning
* Diff

[Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

# Demo

* [Git 101](https://microshak.github.io/MicroNotes/Notes.html?path=DevTools/Git)

---

# Recap
* Git allows you to work collabratively
* Allows Versioning of projects
* Branching and Merging allows for bigger changes to the code base

---

# Docker Hub
* [recap] Similar to Github is a catalog of projects
* You can put your own project in Docker Hub

---
# Tutorial 
### Setting up your own repository
* Create a repository
* Build an Image
* Push your image to the repository

[Tutorial](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/Docker/CustomImage)  


---

# Docker Compose By Example

* [Basic Example](https://github.com/Microshak/MicroNotes/blob/master/Containers/DockerCompose/Dockcompose99.md)
* [Redis Example](https://github.com/Microshak/MicroNotes/blob/master/Containers/DockerCompose/GettingStarted.md)
* [Confluent Kafka](https://github.com/Microshak/MicroNotes/blob/master/BigData/Kafka/ConflientDocker.md)

---

# Recap
* Docker Compose let you quickly stitch togther docker containers
* Works on 1 machine
* Easy to set up

---

# Class Discussion
# Corona Maps (Inspired by Pokey Maps)
* People that are exposes can list what public places they visited recently
* That information shows up on a map
* That information self deletes after 3 days
* Highly Scalable

---

# Kubernetes
* Very similar to Docker Compose but works across a cluster of machines
* Is fairly complex
  * Affinity and anti-affinity
  * Ingress Controller with tools like [Traffik](https://docs.traefik.io/v1.7/user-guide/kubernetes/)
  * Uses URL routing to allow containers to be exposed as is they were on one machine - With tools like NGinx
  * Can use Load Balancers with strategies such as
    * Round Robin
    * Ring Hash
  * Multi-Cloud - With tools like [Rancher](https://rancher.com/)
 
---

# Kubernetes (Continued)
* Virtial Kubelet
* Side Cars
* Monitoring - Using [Prometheus](https://github.com/coreos/kube-prometheus) and [Grafana](https://grafana.com/grafana/dashboards/315)
* Multi Pool
* Bursting
* [Helm Charts](https://microshak.github.io/MicroNotes/index.html?sha=0c75083f540818dadef98f6e7c9642583af960e9&path=Containers/Kubernetes/Helm) (like Docker Compose for Docker)
* Security
* Hybrid
* MiniKube
* KubeCTX

---

# Resources
* [Simulator](https://www.katacoda.com/courses/kubernetes/playground)
* [Reference](https://github.com/Microshak/MicroNotes/blob/master/Containers/Kubernetes/Walkthrough.md)

--- 

# Homework
### Show me either
* Somthing you built using Docker Compose
* Somthing you built using K8s

