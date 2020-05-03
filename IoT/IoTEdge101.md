# Step 1
Find your [IoT Hub](https://portal.azure.com/#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Devices%2FIotHubs)


---

#Step 2
Create a new IoT Edge device and get the key

![full](https://microshak.github.io/MicroNotes/Images/IoTRef/EdgeHub.png)

---
#Step 3 
[Install on Ubuntu](https://docs.microsoft.com/en-us/azure/iot-edge/how-to-install-iot-edge-linux)

[Edit Files](https://openweb.science/development/visual-studio-code-remote-directory-browse-and-editing-files/)


---


# Setting the IoT Hub Connection String
```
sudo nano /etc/iotedge/config.yaml

sudo systemctl restart iotedge

```

---

# Basic Tools

```sh
sudo systemctl restart iotedge

systemctl status iotedge

journalctl -u iotedge --no-pager --no-full

sudo iotedge list
```


---

#Creating a Edge Module
1. Open VS Code
2. Install IoT Hub Extension
3. Put in the IoT Hub Connection String
4. Ctl+shift+P 
![full](https://microshak.github.io/MicroNotes/Images/IoTRef/NewEdge.png)

---


![full](https://microshak.github.io/MicroNotes/Images/IoTRef/EdgeHub2.png)

---


![full](https://microshak.github.io/MicroNotes/Images/IoTRef/IoTEdge3.png)



