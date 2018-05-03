see 
https://help.ubuntu.com/community/isc-dhcp-server

#
Make sure that your machines network adapter is in static mode.

---
nano -w /etc/dhcp/dhcpd.conf

```bash
# Sample /etc/dhcpd.conf
# (add your comments here)
default-lease-time 60000;
max-lease-time 720000;
option subnet-mask 255.255.255.0;
option broadcast-address 192.168.55.255;
option routers 192.168.55.254;
option domain-name-servers 8.8.8.8, 8.8.4.4;
option domain-name "killallhumans.it";

subnet 192.168.55.0 netmask 255.255.255.0 {
range 192.168.55.10 192.168.55.100;
range 192.168.55.150 192.168.55.200;
}
```
---
nano -w /etc/network/interfaces

```bash
# interfaces(5) file used by ifup(8) and ifdown(8)
auto lo
iface lo inet loopback
```


---
nano -w /etc/default/isc-dhcp-server

```bash
# Defaults for isc-dhcp-server initscript
# sourced by /etc/init.d/isc-dhcp-server
# installed at /etc/default/isc-dhcp-server by the maintainer scripts

#
# This is a POSIX shell fragment
#

# Path to dhcpd's config file (default: /etc/dhcp/dhcpd.conf).
DHCPD_CONF=/etc/dhcp/dhcpd.conf

# Path to dhcpd's PID file (default: /var/run/dhcpd.pid).
#DHCPD_PID=/var/run/dhcpd.pid

# Additional options to start dhcpd with.
#       Don't use options -cf or -pf here; use DHCPD_CONF/ DHCPD_PID instead
#OPTIONS=""

# On what interfaces should the DHCP server (dhcpd) serve DHCP requests?
#       Separate multiple interfaces with spaces, e.g. "eth0 eth1".
INTERFACES="eth0"



```



---
# Start and stop

sudo service isc-dhcp-server restart

sudo service isc-dhcp-server start

sudo service isc-dhcp-server stop 
