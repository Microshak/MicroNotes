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
    4. Encrypted Keys using a Trusted Platform Module (TPM)

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
   1. Hyperscale data size
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


8. Cloud Management
   1. Throttling
   2. Monitoring 
   3. Alerting
   4. Duplicating and Maintaining Environments
      1. Test
      2. Staging
      3. Prod

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
# Recommend Tools (High Level)
* IoT Hub (Device Communication)
* Stream Analytics (Data processing)
* Cosmos DB (Hot Storage)
* Data Lake Store (Cold Storage)

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
# Data Lake Store
  * High volume storage
  * Low Cost
 
---
# Reference Designs

* [Interactive Tool](https://microshak.github.io/MicroNotes/IoT/basic.htm)
* [Official Documentation](https://aka.ms/iotrefarchitecture)


