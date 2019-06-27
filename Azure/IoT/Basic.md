# IoT Topics

* Streaming Data
* Middle Ware
* Provisioning
* Scaling
* Security  
  
---

## IoT Hub Components

1. Blob
2. Event Hub
3. Iot Hub

---


## Event Hub

1. Stores data on Blob storage
2. Stores data in files in timestamped files and folders
3. Stores a journaled data in Avro files
 
---

## Blob storage

1. Data stored on 3 disks
2. Redundant
3. Fault tolerant
   
---

## IoT Hub

1. Build on top of Event Hubs
1. Has Device Level Security
1. Has Middle Ware options
    1. HTTP
    2. AMQP (Advanced Message Queuing Protocol)
    3. MQTT (MQ Telemetry Transport)

---
 
## Device Twins 
1. Tags
2. Properties
  1. Desired
  2. Reported
   ![full](https://microshak.github.io/MicroNotes/Images/twin.png)

---
# Consumer Groups

![full](https://microshak.github.io/MicroNotes/Images/IoTRef/ConsumerGroups.png)

---

# Messaging Types
* Telemetry
* Transactional

---

# Provisioning
* Factory
* Certs vs Keys

---

# Message Routing
* Event Hub
* Service Bus
* Blob Storage

