

# Vulnerabilities
* Hardware Trojans
* Side-Channel Analysis
* [Cold Boot Attack](https://en.wikipedia.org/wiki/Cold_boot_attack)
---
# Hardware Trojans
![Cisco](/Images/Security/HT.png)
* can assist in software attaches such as backdoor, password theft and privileges escalation
---
# Side Channel Analysis
* Differential Power Analysis
* Correlation Power Analysis
![SCA](/Images/Security/SCA.png)

---

# Attack Services
* Sensor
* Device Memory
* Physical Memory
* Firmware 
* Formware Update Mechanism


---
 # 7 properties of highly secure devices
 
 1. Root of hardware trust - unique identifier
 	Chip aware of its own entropy
		if somonne is freezing the chip to make random less 
2. Defence in depth - Multilayer software OS
3. Certificte based authenication and attestation
   1. it is the device it say it is
   2. it is running the right software
   3. burn fuses so it cant run older version of software
4. Compartimentalization
   1. software is in a seperate container seperate from os
5. Monitoring listening point for failure
   1. version
   2. software

---
 [7 properties of secure computing](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/03/SevenPropertiesofHighlySecureDevices.pdf)