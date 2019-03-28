#Install
sudo apt-get install android-tools-adb android-tools-fastboot

#Start Server

sudo adb start-server


#List Devices
 adb devices


 #Reboot
 adb reboot



# Commands
 adb shell
 exit

adb shell [command]
adb shell cat /sys/class/power_supply/battery/capacity
