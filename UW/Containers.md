# Big Data 230 Week 2 Containers

> What was acceptable last year is not acceptable today.  What is acceptable now will not be acceptable next year.

---

# What is a container

![max](https://microshak.github.io/MicroNotes/Images/dockervsvm.png)

---

# Compared to VM

![max](https://microshak.github.io/MicroNotes/Images/dockervsvm2.png)

---

# Containers and Orchestrators

* Containers
  * Docker
  * Mobey
* Orchistrators
  * Kubernetties,
  * ~~DC/OS~~
  * ~~Docker Swam~~,
  * ~~Apache Mesos~~,

---

# Why containers,

* You build it you own it
* Cattle vs Pets

---

# Evolution to Containers

* Apps do not play nicely with others
  * DLL Hell
  * 1 app = 1 machine
* VMs
  * Multiple OS on 1 device
  * Time slicing
---

# Evolution of Containers

* Silo Systems
  * ERP
  * CRM
  * MRP
* Scale Out Architecture
---

# Containers

* No OS per instance over head
* Package software and dependencies together
* Distribution mechanism
* Shared image or dockerfile
    * Easy dev environments
    * Easy CI/CD pipelines
    * Fast Scale out 

---

# Docker Images and Containers 
[Docker Basics](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/Docker/DockerBasic)

[Build Docker Images and Containers](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/Docker/ImagesAndContainers)

[Docker Examples](https://microshak.github.io/MicroNotes/doc.html?path=Containers/Docker/DockerRun)
---

# Docker Compose

[Docker Compose](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/DockerCompose/GettingStarted)

---


# Kubernetes

* Defacto standard
* Faster, Better, Cheaper. 

---

# What is a Node  

![full](https://upload.wikimedia.org/wikipedia/commons/6/69/IBM_PC_5150.jpg)

---

# What is a Pod?
![full](https://d33wubrfki0l68.cloudfront.net/fe03f68d8ede9815184852ca2a4fd30325e5d15a/98064/docs/tutorials/kubernetes-basics/public/images/module_03_pods.svg)

---

# k8s vs Yarn
* k8s 
    * throttle cpu
    * separate process id space
    * max memory limit
    * mountable volumes
    * dependencies easily
    * complex deployment
* Yarn
    * Security base64 decoding
    * Shared Conda Enviroment
    * Shared Packages
    * Admin Deployment
s
---s
s
# Big Data of k8ss
* Anti-afifintys
* Easy Deployment ([Ksafka](https://github.com/Yolean/kubernetes-kafka))
* Last mile problem

---

# k8s Complex deployment
* [12 factor apps](https://12factor.net/)
* Side car
* Prometheous/Graphana
* Job type (terminate expire)

---

# k8s Complex deployment
* Autoscale (cloud native)
* Vertical
* Horizontal
* Eviction 
* Burst

---


# Prometheus
* Text Based Data Model
* Wide Adoption
* Exports: Example my sql to Prometheus
* Pull Based
* Prometheus api 
    * Graphana
    * pager duty
    * slack
* PromQL 

---

# Testing Version control
* Shift Left
* Speed of feedback cycle

---
# Hands on K8s

[Kubernetes Basic](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/Kubernetes/Basic)

[Kubernetes  Commands](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/Kubernetes/Commands)


[Kubernetes Custom Image](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/Kubernetes/CustomImage)



---
# Yaml vs JSON
[Yarn VS JSON](https://github.com/Microshak/MicroNotes/tree/master/Containers/YamlVsJSON.md)

---
# Helm Charts


[Helm](https://microshak.github.io/MicroNotes/Notes.html?path=Containers/Kubernetes/HelmCharts)

---


#Further Tutorials
[Simulator](https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-interactive/)


