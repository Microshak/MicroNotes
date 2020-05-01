# Radio Defined Hacking
[RFCrack](https://github.com/cclabsInc/RFCrack)
* Rolling Code - Key fob sequencing
* Live Replay

Default password
IoTSeeker https://github.com/rapid7/IoTSeeker


Nmap

scan all on subnet
nmap -sn 192.168.0.122/24

target a device
nmap -n -Pn -sSU -pT:0-65535,U:0-65535 -v -A -oX myfile 192.2.2.2