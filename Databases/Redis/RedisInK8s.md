1. Deploy config map

# To use Redis Cluster
## Stateful Set
* We need to use a stateful set to give them a stable DNS name to run each of our pods
* Each Pods needs to be individually addressable
* Persistant Network Identity across reboots

---
## Headless Service
```
spec:
    ClusterIP: None 

```
This gives every pod a stable dns record

---
# Config File:
 ```
 VolumenMounts:
    - name redis-config
      vountpath:...
```

Use Volume mount instead of configMap because Redis writes to config and without that it will not presist changes.

---
# Init Container
I Am redis 0 else get the config file


---


