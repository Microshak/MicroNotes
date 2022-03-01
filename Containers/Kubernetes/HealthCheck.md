# Introduction

# Default Behavior
K8s will not route traffic to Containers that fail.  But a bad webservice may nto fail a container


# Custom Health Checks
2 types of healthecks
1. Readiness Probe
If the pro


2. Liveness Probe
If you app is alive.  K8s will do nothing.

If it is dead it will remove the container.


# Scenerios
If you app hangs.  K8s can see that your app is no longer serign the 


# 3 types of probes
1. Http probe *most common* - if gets response in 200-300 range
2. Command - If gets a exit code 0
3. TCP - K8s will try to try to establish a connection on the port (used on alt tech GRPC, FTP)

# Important
Initial delay setting
