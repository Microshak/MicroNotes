

#Deploy a website
```bash
kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.4

```
---
# Did it deploy?
```sh
kubectl get deployments
```
---

# Are there pods?
```docker  
kubectl get pods
```
---

# Are There Events
```sh
kubectl get events
```

---
# How is it configured?
```sh
kubectl config view
```
---
# Can I expose the website externally?

```sh
kubectl expose deployment hello-node --type=LoadBalancer --port=8080

kubectl get services

```
*note: LoadBalancer is for dev purposes only.  For prod you should use a 
---

```sh
kubectl get all
kubectl delete [☢️️️name of deployment☢️️️] [☢️️️name of service☢️️]
```
---
