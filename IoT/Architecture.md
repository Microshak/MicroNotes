## Problem Space for IoT
 1. Ingestion
    1. Massive Data (millions of devices)
    2. Communications Unreliable (Wifi, LoRA, TV Whitespace, etc)
    3. Devices behind Firewalls in Factories
    4. Hi volume data (cameras, hi frequency (htz))
    5. Semi connected devices (store data when device is off line)
 2. Security
    1. Devices need Over the Air (OTA) Updates
    2. All devices can not use the same key (if I can touch it I can own it principle)
    3. Dealing with rogue devices 
    4. Encrypted Keys using a Trusted Platfor Module (TPM)

---
## Problem Space for IoT

 3. Device Management (Fleet management)
    1. Managing Device Configurations
    2. Keeping track of Devices in a querable way
    3. Provisioning Devices
       1. In Factories (using a pogo pin testing jig)
       2. On activation through website
       3. Changing owners
       4. Assiciating Devices to IoT Hub
          1. having physical hardware go to right customers instance
          2. Having devices go to the right cloud (goverment, region)
   

---

## Problem Space for IoT
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

## Problem Space for IoT
 
6. Device Messages (Cloud to Device)
   1. Fire and forget
   2. Queue of message for the device
7. Related Devices
   1. Multiple devices that are part of a whole local system (hirarchical)
   2. Geographically linked devices
   3. Leaf devices

---
## Problem Space for IoT


8. Cloud Management
   1. Throtteling
   2. Monitoring 
   3. Alerting
   4. Duplicating and Maintining Environments
      1. Test
      2. Staging
      3. Prod
9. Cost Managment
   1.  Understanding how choices affect cost
       1. Data store options
          1. Key/Value store
          2. No SQL
          3. SQL
          4. Cold Storage
       2. Data Volumne Costs
       3. Batch/Vs ondemand costs
    1. Monitoring/Alerting

   
---
## Problem Space for IoT

9. Machine learning value add
   1.  Anomaly detection
   2.  Predictive Maintenance
   3.  Remaining Useful Life
   4.  Vision/Voice
   5.  Edge Deployment

---
# Recommend Tools (High Level)
* IoT Hub 
  * Security
  * OTA
  * Telementry
  * Config
* Streaming Analytics
  * Routing Messages
  * Aggregations
* Cosmos DB
  * High volume
  * Unstructured data
* Data Lake Store
  * High volume
 
 ---

# Minimal Setup
<div class="mermaid">
  graph LR
      A[IoT Device]--- B[IoTHub]
      A---B
      A---B
      B-->C[Stream Analytics]
      C-->D[Cosmos DB]
      C-->E[DataLake Store];
  </div>

---

# Realistic Setup
### We see this in about 80% of customers
<div class="mermaid">
  graph LR
      A[IoT Device]--- B[IoTHub]
      A---B
      A---B
      B-->C[Stream Analytics]
      C-->D[Cosmos DB]
      D-->F[Web App]
      C---G[Function App] | Aggregation
      C-->E[DataLake Store];
      
</div>

---
# Realistic Setup
### Some Customers Layer on ML
<div class="mermaid">
  graph LR
      A[IoT Device]--- B[IoTHub]
      A---B
      A---B
      B-->C[Stream Analytics]
      C-->D[Cosmos DB]
      D-->F[Web App]
      C---G[Function App] | Aggregation
      C-->E[DataLake Store]
      E---H[AML]
      E---I[Data Bricks];
      
</div>

---

# Realistic Setup
### Some customers layer on device streaming
<div class="mermaid">
  graph LR
      A[IoT Device]--- B[IoTHub]
      A---B
      A---B
      B-->C[Stream Analytics]
      C-->D[Cosmos DB]
      D-->F[Web App]
      C---G[Function App] | Aggregation
      B---F[Function App] | Device Streaming
      C-->E[DataLake Store];
      
</div>

---

# Realistic Setup
### Some customers want a low cost solution
<div class="mermaid">
  graph LR
      A[IoT Device]--- B[IoTHub]
      A---B
      A---B
      B-->C[Function App]
      C-->D[Table Store]
      D-->F[Web App]
      C-->E[Blob Storage];
      
</div>

---



# Basic
![full](https://microshak.github.io/MicroNotes/Images/IoTRef/Basic.png)

---
# Streaming Dashboards

![full](https://microshak.github.io/MicroNotes/Images/IoTRef/StreamingDashboards.png)

---
# IoT using Cosmos DB

[![Full](https://microshak.github.io/MicroNotes/Images/IoTRef/IoTCosmos.png)](https://azure.microsoft.com/en-us/solutions/architecture/iot-using-cosmos-db/)


---

# Real Time

[![full](https://microshak.github.io/MicroNotes/Images/IoTRef/RealTime.png)](https://azure.microsoft.com/en-us/solutions/architecture/real-time-analytics/)

---
# IoT Issues
* Transactions vs Telemetry
*  Limits in Message Volumes
* Connectivity
  * Always
  * Semi-Connected
  * Disconnected
  * Fall Back (sms)

---

# Security
* Cloud
* Device
  * TPM
  * Certs/Keys
  * Provisioning
  * Ports

---

# OTA Updates
  * Roll back
  * Modularized 
  * Container Based


