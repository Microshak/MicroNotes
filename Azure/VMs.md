#Azure VMs High Availability

## Availability Set
Availability Sets ensure that the Azure virtual machines are deployed across multiple isolated hardware nodes in a cluster.

 
---

# Why Use Availability Sets
* Unplanned Hardware Maintenance Events -- machine is about to fail
* An unexpected downtime -- rarely occurs
* Planned Maintenance events -- periodic updates made by Microsoft

---

## (Availability Sets) Fault Domain 
Fault domains define the group of virtual machines that share a common power source and network switch.

![full](https://microshak.github.io/MicroNotes/Images/updatedomains.png "update domains")

---
# Update Domains
Virtual machines get update domains automatically once they are put inside availability set.
All virtual machines within that update domain will reboot together.
![full](https://microshak.github.io/MicroNotes/Images/updatedomains.png "update domains")

---


# Availability Zone
* Spread VM across Different Datacenters In a region
* Have same update domains that Availability Sets do.

SLA Availability Zone 99.99%
SLA Availability Set 99.95%

--- 

# Scale Sets
Scale out VMs