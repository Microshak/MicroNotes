One question people have when they are developing an IoT device with computer vision on IoT device is to know the right camera for the device that works with the Algorithm.  This can be a quite complex issue.  You may need computer vision on a drone performing anlaysis of 100s of different types of objects in real time.  You may also just need to recognize a face and have a very low price point for your device.  

In this article we are going to discuss the hardware classes, camera resulutions, and algorithms need to make your computer vision project successful in IoT.

# Device Classes

Not all IoT devices are the same.  But there are certain classes of hardware

# ESP32
The ESP32 and ESP8266 are low price options. These devices typically pose less than $5. There are several preconfigured options to chose from that can help accelerate your project. The ESP-EYE for example has a camera attached to an ESP32 but with its limited memory and compute is limited to the the to what it can do.  When using  ESP line you will be very limited to what it can do and it will be very slow. One option that people use to offset this is to transmit the images to the cloud for further analysis.

Price $5
Use Case: Cloud Models, Face Detection


# Raspberry Pi Class
Although Raspberry Pis are not hardened for IoT there are many manufactures that do provide grea solutions for about the same price point and compute.  With a price point of $35 and and using an Linix bases OS it can be a very attrative option. IoT cloud providers such as Azure IoT Hub have built in over the air (OTA) update options as well as its ability to use containers make developing and updating Raspberry Pis class of devices easy to manage.

Price:  $35
Use Cases: Smart Home, Object Classification

# LottePanda Class
Single Board Computers (SBC) are capable of running a heavy combinations of sensors and cameras.  They can run different operating systems and have enough spare compute have monitors and other periferals. 

Price $100
Use Cases: Sentiment analysis Kiosk, high-frequency devices such as heart monitors.

# i.MX Series
The i.MX series is a series of SBC that are open source and have a large amount of RAM and CPUs.

Price: $200-$300
Use Case: high speed face recoginition,  high resulition object detection.

# Manifold 2-C with NVIDIA TX2
NVidia makes a series of high end SBCs.  They have a echo system of containers that allow teams to onboard on their platfor easily.  They also have specialty devices such as the TX2 that is made to attach to a DGI drone.

Price: $500
Use Case: Drone object detection, Drone self driving



# Specialty Devices
Some IoT devices such as Google's Coral.AI TPU is only compatable with the Coral Camera.  Which limit you to a certain resolution of Camera.  I am not really going to discuss those types of devices because they tend to be toy devices that are not hardened to use for IoT use.



Other plaforms such as the ESP32 can have computer vision.  