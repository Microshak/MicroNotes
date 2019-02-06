# IoT
IoT
    Streaming Data
    Middle Ware
    Challenges
        Big Data 
        Distrubuted Computing
        Real Time

# IoT Hub
    1. Evolution: Blob -> Event Hub -> Iot Hub

---
# Blob storage
    1. Data stored on 3 machines
    1. Redundant
    1. Fault tolerant
--- 
# Event Hub
    1. Stores data on Blob storage
    1. Stores data in files in timestamped files and folders
    1. Stores a journaled data in Avro files

## IoT Hub
    1. Build ontop of Event Hubs
    1. Has Device Level Security
    1. Has Middle Ware options
        1. HTTP
        2. AMQP
        3. MQTT

## Architectures
    1. Event Based
    1. Big Data
    1. Reliable Actors
    1. Microservices
    1. Lambda
    1. Kappa
    1. Hot/Cold

## Digital Twin
1. tags
2. desired
3. reported


# Example

 [https://github.com/Azure-Samples/azure-iot-samples-python](Code)

 Quickstarts/simulated-device-2/