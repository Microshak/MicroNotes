# Big Data 230 Week 1

---

# Bio
## Mike Roshak PhD
Currently: IoT/Cloud Architect Microsoft 
* Big Data
* IoT 
* Machine Learning
* I like hiking
  
    ![Full](https://microshak.github.io/MicroNotes/Images/Mike/ChiMike.jpg)

---

# Your Bio
* What you do
* Your background as it relates to big data
* What do you do for fun

---

# Goal of this course
* Explore where/how big data is being used
*  Cement concepts
*  Match teaching with what big data engineers do
*  Work with more tools 

---

# What do Big data engineers do?
* ETL 
* Process Data
* Analyze Data
* Trusted Advisor

---

# What is Big Data
1. Volume
2. Velocity
3. Variety

---
    ![Full](https://microshak.github.io/MicroNotes/Images/3-Vs-of-Big-Data.png)

---
# What is Big Data
1. Volume
2. Velocity
3. Variety
4. **Veracity**
5. **Value**

---
# Course Recap
### Class 1 - Introduction to Big Data
* Databricks
* Spark
  * Scala
  * Spark Notebooks
  * RDDs
  * DataFrames
* HDFS
* Graph

---
### Class 2 - Building the data pipeline
* Spark
  * Stream Processing Semantics
  * Performance Tuning
* Kafka
* Flink
* Data formats
  * Parquet
  * Avro
* Nifi
* Scalablity
* Architectures
  * Lambda
  * Kappa

---


# Containers

* Docker for Big Data
* Docker Compose
* Kubernetes
---

# Data Analysis

* Data Bricks
* Delta lake
* Cleansing Data
* Data Theory
* Data Analysis
---
# Value from Data

* Sampling
* Anomaly Detection
* Feature Engineering with time series data
---
# Smart Data

* Binary Classifiers
* Model Accuracy
* Artificial Neural Nets
---
# Internet of Things

* IoT Hub
* Streaming Analytics
* Cosmos DB
* Blob Storage
* Serverless

---

# Edge

* GraphFrames in Spark
* IoT Edge
* Fog Computing
* Offloading workloads to Edge
---

# DataOps

* Data Ops
* Collaboration Tools
* Methodologies
* Processes
* ML Flow

---

# Structure of this class
* Different than previous classes
* Hands on
* Assignments
  * Portfolio Project
  * Credits
* Fast talker 
* Break up lectures
  * Class Questions
  * Class Excersizes
  * Quiz
  * Demos

---
# Big Data Echosystem
* Linux
* Java
* Collaboration/Ownership
  * Devops
  * Machine Learning 
  * Data Product
* Git

---
# Excersize
* [Multi Node Cluster](https://www.learningjournal.guru/article/kafka/installing-multi-node-kafka-cluster/)
* [Reduce Memory Kafka](https://stackoverflow.com/questions/51572335/kafka-broker-jvm-settings-below-1gb)
*  Monitoring Kafka
*  Monitoring Cloud

---

# Portfolio Project
* The final project will be due on the last class 
* The project will consist of a proposal, a presentation and a project write up including code
* The project proposal will be due April 24th.
* Everything will be in Github
* [Examples](https://github.com/Microshak/ExampleSubmission/blob/master/UFO%20Reporting.md)
---

  # Changes in Big Data
  ![full](https://microshak.github.io/MicroNotes/Images/Mike/Servers.jpg)
---

  ![full](https://microshak.github.io/MicroNotes/Images/Mike/ChiMike.jpg)
---

  [![full](https://img.youtube.com/vi/1xzajqSBGvM/0.jpg)](https://www.youtube.com/watch?v=1xzajqSBGvM)
---


# Containers
## By the end of this section you should know
* How to use containers
* How to spin up your own containers
* How to test out big data tools

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


# Benefits

* Package software and dependencies together
* Isolated
* Runs the same environment
* Sandbox projects
* Quick Start Projects
* Scales Easy
* No OS per instance over head
* Package software and dependencies together
* Distribution mechanism
* Shared image or dockerfile
    * Easy dev environments
    * Easy CI/CD pipelines

---

# Benefits

* Can have different docker files for production and dev
* Compostable
* Incremental Build
* Map to local directory (persistance)
* Upload to repository
* CI/CD
* Testing
* Security Testing
* Repeatability

---

# Defined 
* Defined by a [Dockerfile](https://github.com/apache/spark/blob/master/resource-managers/kubernetes/docker/src/main/dockerfiles/spark/Dockerfile)

---

# Under the covers
* Images
* Containers
* Daemon (API)

---

# Docker Development

* Multi Stage Builds
  * Increase Efficency
  * Reduce Attach Surface
* Easy to Clean Up
* Volume Map local files
* IDE Support

---

# Docker Containers
* Run (locally or remotely)
* Expose external ports
* Setup a internal network
* SSH Into   

---

# Docker Images

Create a flask app.py

```python

From flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

```

---

# Create a docker file

```dockerfile
FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential

COPY . /app
WORKDIR /app
RUN pip install Flask
ENTRYPOINT ["python"]
CMD ["app.py"]
```

---

# Build and Run
```bash
docker build -t helloflask .
docker run -d -p 5000:5000 helloflask
```

---

# What went wrong

```bash
docker run -it -p 5000:5000 helloflask
```

---

# Lets rebuild

```bash 
docker build -t helloflask .
docker run -d -p 5000:5000 helloflask

```
---

# Lets make it better

```bash
docker build -t helloflask .
docker run -d -p 5000:5000 -v $(pwd):/app helloflask
```

---

# Lets modify the container

```bash
docker exec -it  [☢️️name of container️️️️️️️️☢️] /bin/bash
apt-get install nano
nano app.py

```
---

# Lets clean up

```bash
docker kill [☢️️name of container️️️️️️️️☢️]

docker system prune -a
```

---
# Class Question  Solar Panels as a Service
* Company that works in developing countries has
  * 30,000 devices that have sent 1 billion records (200 gbs a 1 year)
  * Bug in code sent 10 retry messages for every message (duplications)
  * **Can't afford expensive cloud services**
  * They have
    * Local computers (slow and unstable)
    * Power BI
  * Data is stored in Key Value store
  * They need tools to analyze and reporting
    * Aggregegation
    * Deduplication
    * Trends
    * Spikes
### Options?
---

# Commands to remember


docker [images](https://docs.docker.com/engine/reference/commandline/images/) -a # list all images

docker [ps](https://docs.docker.com/engine/reference/commandline/ps/) -a # list all containers

---

# Images

LIST: sudo docker images -a

---

# Containers

LIST:  sudo docker ps -a

---

## Build

```bash

$ cd folder Dockerfile

# for cpu
$ docker build -f jupyter/tensorflow-notebook -t jupyter/tensorflow-notebook .

```
---


### Run

To Start the container

```bash

# Make sure the external port used is set correctly for the host machine. -p external:container
# for cpu
$ mkdir home
$ docker run -d --rm -v $PWD/home:/home -p 81:80 --name jupyter/tensorflow-notebook TFNotebook

```

---

# Simple Excersize 
### Create a Docker file
```sh
FROM ubuntu:latest
CMD echo Hey

```


---
### Build Image

```sh
docker build -t myapp .

```
---

### Run Container
```sh
docker run --rm -t hey

```

---

```sh

docker run -it -t hey bin/bash

```

---

# Special Environemnts
* [Machine Learning GPU](https://ngc.nvidia.com/catalog/containers?orderBy=modifiedDESC&pageNumber=0&query=&quickFilter=containers&filters=) for GPU systems
* [Moby](https://mobyproject.org/) for small systems (IoT)


---

# [Docker Hub](https://hub.docker.com/)
* Login
* Certified, Official, Verified
* Upload Docker Builds
 
---

# 3 Things
* Docker allows you to run programs in a:
  * Repeatable
  * Sharable way
* Docker consist of images and containers
* Docker can be build locally shared and run everywhere

---

# Docker Excersize

* [Kylin](https://github.com/apache/kylin/tree/master/docker) - Distributed Analytics
* [Pulsar](https://pulsar.apache.org/docs/en/standalone-docker/) - Replacement for Kafka?
* [Ignight](https://apacheignite.readme.io/docs/docker-deployment) - In Memory Computing Platform


---

### Task
Give me a elevator pitch for a big data project you ahve not used
* [Apache Big Data](https://github.com/search?q=topic%3Abig-data+org%3Aapache&type=Repositories)

---

# Class Recap

* Docker can help you spin and test big data systems.
* Docker is just a set of base images and scripts
* Docker examples in this class were all running on one machine.

---

# Next Class
* Non-homogonous systems using Docker-compose
* Scaling to big data with Kubernetes