# IoT
IoT
    Streaming Data
    Middle Ware
    Challenges
            1. Provisioning
            2. Scale
            3. Rogue Devices

---

# IoT Hub
    1. Evolution: Blob -> Event Hub -> Iot Hub

---
# Blob storage
    1. Data stored on 3 disks
    1. Redundant
    1. Fault tolerant
   
--- 

# Event Hub
    1. Stores data on Blob storage
    2. Stores data in files in timestamped files and folders
    3. Stores a journaled data in Avro files
 ---

## IoT Hub
    1. Build on top of Event Hubs
    1. Has Device Level Security
    1. Has Middle Ware options
        1. HTTP
        2. AMQP
        3. MQTT

 ## IoT Hub (Continued) 
    1. Device Twins
       1. Tags
       2. Properties
          1. Desired
          2. Reported
   ![full](https://microshak.github.io/MicroNotes//Images/twin.png)

## Architectures
    1. Event Based
    2. Big Data
    3. Reliable Actors
    4. Microservices
    5. Lambda
    6. Kappa
    7. Hot/Cold

## Digital Twin
1. tags
2. desired
3. reported


# Example

 [https://github.com/Azure-Samples/azure-iot-samples-python](Code)

