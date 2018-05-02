#VM HA

## Availability Set
Availability Sets ensure that the Azure virtual machines are deployed across multiple isolated hardware nodes in a cluster.

### Why
* Unplanned Hardware Maintainance Events -  When Azure platform predicts that the hardware or any platform components associated to a physical machine is about to fail.
* An unexpected downtime -- rarely occurs
* Planned Maintenance events -- periodic updates made by Microsfot.

---
Fault Domain 
Fault domains define the group of virtual machines that share a common power source and network switch.

![alt text](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/availability-set-fault-domains-and-update-domains-in-azure-virtual-machie/Images/Screenshot_26.png "Logo Title Text 1")

---
# Update Domains
Virtual machines get update domains automatically once they are put inside availability set.
All virtual machines within that update domain will reboot together.
