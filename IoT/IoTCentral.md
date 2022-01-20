# IoT Central
* Things 
* Insights
* Actions
---
![full](https://microshak.github.io/MicroNotes/Images/IoTRef/typical.png)


[Interactive Tool](https://microshak.github.io/MicroNotes/IoT/basic.htm)

---
![full](https://microshak.github.io/MicroNotes/Images/IoTRef/central.png)


---
#  Device
## Measurements
*  ***Telemetry*** measurements are the numerical data points that your device collects over time. They're represented as a continuous stream. An example is temperature.
* ***Event*** measurements are point-in-time data that represents something of significance on the device. A severity level represents the importance of an event. An example is a fan motor error.
* ***State*** measurements represent the state of the device or its components over a period of time. For example, a fan mode can be defined as having Operating and Stopped as the two possible states.
* ***Location*** measurements are the longitude and latitude coordinates of the device over a period of time in. For example, a fan can be moved from one location to another.

---
## Settings
Settings control a device.

Settings can be in one of three states. The device reports these states.

* ***Synced***: The device has changed to reflect the setting value.
* ***Pending***: The device is currently changing to the setting value.
* ***Error***: The device has returned an error.
---

## Properties

Properties are metadata that's associated with the device, such as a fixed device location and serial number. 


* ***Device properties*** that the device reports to the IoT Central application. Device properties are read-only values reported by the device and are updated in the application when a real device is connected.
* ***Application properties*** that are stored in the application and can be edited by the operator. Application properties are only stored in the application and are never seen by a device.


---
# Jobs
Allows you to set a command do a device based on a defined threshold. Such as trigger alarms.

---


# Plug and Play
* JSON file that is a representation of a device template.
* Uses industry standard DTD format
* Connect a PnP Certified device and the template automatically pulls into IoT Central

---

# Certifying PnP
* Join the Microsoft Partner network
* Onboard to Certified for Azure IoT Portal
* Submit Device
* Pass tests
* Publish to Catalog

---

# Feature 
* IoT C Embedded SDK (Preview)
* Public API Service
* Multitendency
  * [Through CSP Portal](https://docs.microsoft.com/en-us/azure/iot-central/core/howto-create-and-manage-applications-csp)
  * [Through Azure Lighthouse](https://azure.microsoft.com/en-us/services/azure-lighthouse/) 
  * [Through API Service](https://youtu.be/PiDgSrzOVmg?t=86)

---
# Device Catalogue
* **[Device Marketplace](https://catalog.azureiotsolutions.com/register)**:  Allows you to put a device in the market place. You sign up Microsoft Lead process. 
