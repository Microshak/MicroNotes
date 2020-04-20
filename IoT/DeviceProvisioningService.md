# DPS
## Simplifies Complex IoT Solution Scenerios with multiple hubs.
Complex Scherious inclue:
* Low Latency
* Multi-tenant


---
# Types of Provision Routing
* Round Robin
* Lowest Latency
* Function App

---

# Topics
* Provisioning In General
* Why Shard (performance theories)?
* Manage Multi-Tenant
  * No Touch Provisioning
  * Key Rotation


---
# Factory Provisioning

<video width="320" height="240" controls>
  <source src="https://microshak.github.io/MicroNotes/Images/IoTRef/factoryprovision.mp4" type="video/mp4">
</video>

---
# No Touch Provisioning
## Key burned on TPM by chip manufacturer through manufacturer APIs.
1. Seperation of keys from device maker using TPM
   1. Device maker can't auth new keys
   2. Chip maker does not have the plans to make devices.
2. Device can be reprovisioned

---

# Round Robin
* Maximum capacity of IoT Hub is 3 Billion messages per day or 87 billion messages per month
  * There are 2.6 million seconds per month
  * 33,000 would max an IoT Hub device sending out 1 message per second 