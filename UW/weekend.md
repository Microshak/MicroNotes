# k8s
defacto standard

#### Containers

* what was acceptable last year is not acceptable today
what is acceptable today will not be acceptable next year.

* You build it you own it
---
Cattle pets


TRafik

--K8s scaling
Auto Scale
    Pods
    Nodes
Types of scaling
    Horizontal
    Vertial
    Cloud Native

?Eviction

# k8s
job type -- terminate expire

# Docker 
multi stage view
clean up

--
volumne map
--
each processs single container


#basic docker
-it 
-i
run
build


--kafka
https://github.com/jcustenborder/kafka-connect-archtype


---
## k8s vs yarn
    k8s 
        throttle cpu
        seperate process id space
        max memory limit
        mountable volumes
        dependancies easily
            in yarn 
                canda
                admin 
        complex deployment
    yarn
        base64 decoding
# Testing Version control
Shift Left
speed of feedback cycle


# CI/CD 
Unknown Unknowns
Known Unknowns

12 factor app 
https://12factor.net/

---
#prometheus
text based data model
- wide adoption

-- IS A SHITE BOX 

EXPORTerts example my sql to permitheous

pull based
    not over whenlmed

Permethous api -> graphana, pager duty,slack

promql

# bigdata k8s
anti affinity
last mile problem
    monitoring etc
    Yolean  

# helm
tool that bolt on to k8s
client 
    Helm cli
Server
    tiller

--- 
# helm cli
runs on your coputer
generates k8s templates
sends request to tiller

#tiller
runs in k8s cluster
manages releases and hisory

---
#helm deploy
to deploy make a chart in specific directory
```file
tld
    - Chart.yaml # stores meta data and version information
    - values.yaml # stores default confi values
    - requirements.yaml # dependencies such as mongo or postgres
    charts/ # where dependancies are stored
            -
    templates/ # where we store source templates
        - some.yaml
            key values
            key functions
https://github.com/helm/charts/tree/master/stable

            


```
