
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
* Proticols
  * Message Queueing proticols
    * Set up a bi-directional pipe for C2D and D2C mesages
    * **MQ**TT (prefered)
    * A**MQ**P
  * HTTP
    * Requires polling for messages
    * Can result in duplicate messages
* Lost connectivity
  * Exponential Backoff
  * MessageID for duplicate messages
  * Store and forward

---

# Twins
* Device Twins (similar to config files)
  * Tags
  * Desired Properties
  * Reported Properties
* Digital Twins
  * Higher telemetery Rates
  * Uses IoT Edge
  * Related Messages
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


---
# Routing

---