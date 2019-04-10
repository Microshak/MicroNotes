# Trouble shooting

```sh

kubectl get - list resources
kubectl describe - show detailed information about a resource
kubectl logs - print the logs from a container in a pod
kubectl exec - execute a command on a container in a pod
```
---
# Scaling 
```sh

kubectl scale [☢️️️name of deployment☢️️️] --replicas=4
```
---

# Rolling Updates

```sh
kubectl set image [☢️️️name of deployment☢️️️]=[☢️️️name of service☢️️️]:v2

# Set a variable 
export NODE_PORT=$(kubectl get [☢️️️name of service☢️️️] -o go-template='{{(index .spec.ports 0).nodePort}}')
echo NODE_PORT=$NODE_PORT

#Check instances
curl $(minikube ip):$NODE_PORT

```

---
# Checking Rollout
```sh

kubectl rollout status  [☢️️️name of deployment☢️️️]
kubectl describe pods
```
---
# Roll Back
```sh
kubectl rollout undo [☢️️️name of deployment☢️️️]
```