# Big Data 230 Week 1
# Internet of Things

# Bio
## Mike Roshak PhD
Currently: IoT/Cloud Architect Microsoft 
* Big Data
* IoT 
* Machine Learning
* Robotics

### I was your original instructor
---
# ~~What is big data~~
# Why does big data exist
* Websites failed 
* Business could no longer make data driven decisions
* Log files were too massive
* IoT

---
# This was big data
![full](https://microshak.github.io/MicroNotes/Images/Mike/Servers.jpg)


---
# Now this is also big data
  
![Full](https://microshak.github.io/MicroNotes/Images/Mike/ChiMike.jpg)

---
# Also this
[![full](https://img.youtube.com/vi/1xzajqSBGvM/0.jpg)](https://www.youtube.com/watch?v=1xzajqSBGvM)

---


# 230 Objectives
* Learning the basic tools
* Learn problem solving the big data space
* Learn tool evaluation
* Learn how to design end-to-end solution

---

# How we are going to obtain those objectives
* Discuss big data problem and solutions 
* Familiarize with different industries and business segments that use big data
* Practice Architecting solutions solutions

---
# Next week
* Building out data products ie not being a sole contributor
* Becoming a Trusted Advisor
  * Knowing Basic Regulation
  * Knowing how to architect solutions
* Continue to grow your skill set after the course ends

---
# Our end result
* You can design end-to-end solutions
* You can be trusted advisors
* You can grow your career and skill set

---
# Home work
Diagramming and explaining solutions.

---

# This Class
*Note: IoT is a bit of a pivot from other classes*
* IoT
  * Problems and solutions
  * Architectures
  * Considerations
* IoT Edge
  * Dockerization 
  * Hardware platforms
  * Cloud 
* Architecting Solutions
---
# Scenario 

#### A company that makes off grid solar panel company has built a solution that has 30,000 device in a key value store (Partition key, Range Key).  The IoT last hear they had 1 billion records(Totaling 250 Gbs of data).  They have never done any analytics on the data and say they can't afford the cloud.  On-prem they have modernish laptops and desktops.

How do they 
* Set up analytics 
  * Monthly Usage Reports
  * Develop statistics and KPIs

---

# Scenario 
### Robotics Company has mining robots.  The robots and servers are dropped down into the mine for a year at a time. They need real-time teleop  robots and servers, Dashboards of where all of the robots are. When the servers are brought back to the surface they need the data (100 TB) transferred to the cloud.
How do they
* Do Real-time teleop
* Dashboard based on the real-time information
* Transfer the data to the cloud

---

## Problem Space for IoT - Ingestion
 1. Ingestion
    1. Massive Data (millions of devices)
    2. Communications Unreliable (Wifi, LoRA, TV Whitespace, etc)
    3. Devices behind Firewalls in Factories
    4. Hi volume data (cameras, hi frequency (htz))
    5. Semi connected devices (store data when device is off line)

---
## Problem Space for IoT - Security

 2. Security
    1. Devices need Over the Air (OTA) Updates
    2. All devices can not use the same key (if I can touch it I can own it principle)
    3. Dealing with rogue devices 
    4. Knowing when you have been hacked 
   
---
## Problem Space for IoT - Provisioning

 3. Device Management (Fleet management)
    1. Managing Device Configurations
    2. Keeping track of Devices in a queryable way
    3. Provisioning Devices
       1. In Factories (using a pogo pin testing jig)
       2. On activation through website
       3. Changing owners
       4. Associating Devices to IoT Hub
          1. having physical hardware go to right customers instance
          2. Having devices go to the right cloud (government, region)
---

## Problem Space for IoT - Data
4. Data processing
   1. Big data size
   2. Data uses different formats
      1. Telemetry 
      2. Alerts
      3. Logs
      4. Live Streams
         1. Video/Audio
         2. Data at a fast rate
   3. Distributed aggregations (min, max, average)
5. Data Storage Platform (database)
   1. Built in Analytics
   2. Ability to handle relationships
   3. Ability to handle scale
   4. Retrieve data fast (too much data can slow down systems)

---

## Problem Space for IoT - Device Messaging
 
6. Device Messages (Cloud to Device)
   1. Fire and forget
   2. Queue of message for the device
7. Related Devices
   1. Multiple devices that are part of a whole local system (hierarchical)
   2. Geographically linked devices
   3. Leaf devices

---
## Problem Space for IoT - Management

1.  Management
   1. Throttling
   2. Monitoring 
   3. Alerting

---

## Problem Space for IoT - Cost Management

1.  Cost Management
   1.  Understanding how choices affect cost
       1. Data store options
          1. Key/Value store
          2. No SQL
          3. SQL
          4. Cold Storage
       2. Data Volume Costs
       3. Batch/Vs on demand costs
    1. Monitoring/Alerting
   
---

## Problem Space for IoT - Analytics and ML

9. Machine learning value add
    1. Cloud model deployment
    2. Edge model deployment
    3. Predictive Maintenance
    4. Computer vision
    5. Natural language processing
    6. Anomaly detection
    7. Time series forecasting
    8. Automatic retraining/deployment

---
# Scenario
#### Agricultural Company uses areal and satellite photos to do analyses of crop health and use machine learning to make fertilizer and pesticide recommendations.  They have over 1 PB of data per year.  
* How do they process all of the photos
* How do they store the data recommendations for fast retrieval by the web app.
  
---
# IoT Hub
* Security Built In
* Over the Air (OTA) Update 
* Telemetry
 * Real Time
 * Queued
* Config in Cloud and On Device with Device Twins
* Secure File Transfer
* Offline support with Store and Forward
* Edge Support

---
# Stream Analytics
* Routing Messages
* Aggregations
* SQL Interface
* Handles different types of messages (unstructured)

---
# Cosmos DB
  * High volume
  * Unstructured data
  * Fast
  * Can be globally distributed

---
# Blob Storage
  * High volume storage
  * Low Cost
 
---
# Demo


[IoT Hub Simulator](https://azure-samples.github.io/raspberry-pi-web-simulator/#Getstarted)

[Advanced Python Simulator](https://github.com/Azure-Samples/azure-iot-samples-python)

[My Python Simulator](https://github.com/Microshak/Azure-IoTHub-Data-Loader)


[Interactive Tool](https://microshak.github.io/MicroNotes/IoT/basic.htm)


---

# Three Takeaways
* IoT has a set of unique problems
* IoT Is cost sensitive
* IoT often involves larger architectures and concerns

---
# Scenario 
#### A Global company has an IoT card reader for paid parking lot access.  People can pay via phone.  The parking lot gate needs to open within 2 seconds of badge scan.

#### How would you implement this.

---
# Scenario - IoMT (Internet of Medical Things)
#### Company has a remote patient monitoring solution. Every night 10 GB of binary data go into a SQL database per device (Direct connection shared key).  At 20 devices the system is not stable.  They also need a way of on-demand live streaming the patient data by the physician (this is currently handled by the SQL database through hammer polling).  

##### How do you fix this?

---
# Scenario - IoMT (Internet of Medical Things) Part 2
#### Hospitals will pay allot for device but medicare will not pay allot for monitoring patients.  At the current Cloud spend the project is not sustainable.

##### How do you fix this.



---

# This section IoT On The Edge
*  IoT Edge
* Edge Devices In General

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
* Has [Edge Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/category/internet-of-things?page=1&subcategories=iot-edge-modules)
* Can use Opensource easily

---

# [Demo](https://microshak.github.io/MicroNotes//Notes.html?path=IoT/IoTEdge101)

![full](https://microshak.github.io/MicroNotes/Images/IoTRef/IoTEdge.png)

---
# Three Things to Remember
* Edge Devices allow you to offload computer and reduce bottlenecks.
* OTA can be challenging
* Dockerizing allows for greater control

---
 
# Group Question
>> How would you create an infrastructure to support Cern
* Generates 1 PB per second 
* Staff of 2,200 people with many scientist
* Real-Time data needed
* Analytics Data Needed
![full](https://microshak.github.io/MicroNotes/Images/BigData/Cern.jpg)

---

* Grid/Edge Compute
* Tape Drives
* Spark
* Mongo(meta db) 50 Pb per year

---

# Other ways of Offloading Compute
* [Android](https://www.tensorflow.org/lite/guide/android)
* [Web Compute](https://www.tensorflow.org/js) [example](https://magenta.tensorflow.org/demos/performance_rnn/index.html#3|2,0,1,0,1,1,0,1,0,1,0,1|1,1,1,1,1,1,1,1,1,1,1,1|1,1,1,1,1,1,1,1,1,1,1,1|false) [my example](https://github.com/PacktPublishing/Artificial-Intelligence-for-IoT-Cookbook/tree/master/Ch9/tensorflowjs)
* [Web Storage](https://github.com/Microshak/IndexedDB)
* [Small Device](https://www.tensorflow.org/lite)

