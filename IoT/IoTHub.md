
# IoT Hub Major Components
* Cloud to Device Messaging (C2D)
* Device To Cloud Messages (D2C)
* Provisioning
* Twins
* Edge
* Updates

---
# IoT Messaging
Problem IoT Messaging can be spotty, can drop, can be off line for periods of time.
* Protocols
  * Message Queueing protocols
    * Set up a bi-directional pipe for C2D and D2C messages
    * **MQ**TT (preferred)
    * A**MQ**P
  * HTTP
    * Requires polling for messages
    * Can result in duplicate messages
* Lost connectivity
  * Exponential backoff
  * MessageID for duplicate messages
  * Store and forward

---

# Twins
* Device Twins (similar to config files)
  * Tags
  * Desired Properties
  * Reported Properties
* Digital Twins
  * Higher telemetry Rates
  * Uses IoT Edge
  * Related Messages
    ![full](https://microshak.github.io/MicroNotes/Images/twin.png)

---

# IoT Edge
* Container Technology (Mobi)
* Easy OTA
* Leaf Devices
* Container Echo System ([Docker Hub](https://hub.docker.com/))
* [Azure Module Marketplace](https://azuremarketplace.microsoft.com/en/marketplace/apps/category/internet-of-things?page=1&subcategories=iot-edge-modules)
  * [Security Center](https://azuremarketplace.microsoft.com/en/marketplace/apps/azure-security-center.edge-ascforiot?tab=Overview) 
  * [Anomaly Detection](https://azuremarketplace.microsoft.com/en/marketplace/apps/brframe-5175097.unsupervised-anomaly-detection-iot-edge-module?tab=Overview)
  * [SQL Server](https://azuremarketplace.microsoft.com/en/marketplace/apps/microsoft.edge-sql-server-2017?tab=Overview)

---
# Partitioning
* IoTHub --> EventHub --> Blob Storage
* IoTHub
  * Special features for IoT
* Event Hub 
  * Time Based Journal **Journal** (more on that later)
* Blob Storage
  * Saves files into 3 hard drives
  * Each partition goes to a separate blob account
### Why do we care?
* Performance
* Stream Analytics can parallelize data to CosmosDB

---
# Journal
  * Data Stored from **1** to 7 days
  * Similar to a topic can have multiple distinct consumers through consumer groups
  * Is distributed (can keep track of what it has sent out)
![full](https://microshak.github.io/MicroNotes/Images/IoTRef/ConsumerGroups.png)



---
# Routing
* Simple query to rout part of the data to another system.
* Can separate alert data from telemetry data.

---

# C2D Message vs Direct Method
* C2D Message
  * Queue of Messages for each device
  * 2 Day ttl
  * Max Message Queued per device 50
  * Json message you need to parse
* Direct Method
  * Fire and forget
  * Calls methods directly

# Preview Features
* Distributed Tracing through correlation id
* Streams