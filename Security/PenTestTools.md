
1. Start Docker

sudo  docker run --rm -it -p 443:443 -v ~/.msf4:/root/.msf4 -v /tmp/msf:/tmp/data remnux/metasploit

2. Then run a scan on the IP address


nmap -O 10.121.120.86
