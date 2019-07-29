# Start Nifi Container

```bash
docker run --rm --entrypoint /bin/bash apache/nifi:1.8.0 -c 'env | grep NIFI'
NIFI_HOME=/opt/nifi/nifi-current
NIFI_LOG_DIR=/opt/nifi/nifi-current/logs
NIFI_TOOLKIT_HOME=/opt/nifi/nifi-toolkit-current
NIFI_PID_DIR=/opt/nifi/nifi-current/run
NIFI_BASE_DIR=/opt/nifi
```
# exec in docker
```sh
docker ps -a

docker exec -it  [id of container]  /bin/bash
cd /opt/nifi/nifi-current
ls

```

---
# InvokeHTTP processor
## Terminate Relationship
* Failure
* No Retry
* Origional
* Retry
## Properties
Remote URL: https://jsonplaceholder.typicode.com/todos/1
---
# PutFile 
## Terminate Relationship
* Failure
* Success
 ## Properties
Directory: /opt/nifi/nifi-current
---
