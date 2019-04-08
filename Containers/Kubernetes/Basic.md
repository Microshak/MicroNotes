minikube version
minikube start


kubectl get nodes
kubectl get events
kubectl get all
kubectl dashboard


---

#Run a website
```bash
kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node
---
```
Did it deploy?
```sh
kubectl get deployments
```
Are there pods?
```docker  
kubectl get pods
```
are there events
```sh
kubectl get events
```
How is it configured?
```sh
kubectl config view
```
---
Can I expose the website externally?
```sh
kubectl expose deployment hello-node --type=LoadBalancer --port=8080

kubectl get services

```
<menu> On cloud providers that support load balancers, an external IP address would be provisioned to access the Service. On Minikube, the LoadBalancer type makes the Service accessible through the minikube service command. 
</menu>

---
```sh
minikube service hello-node
```
#Tear it down
```sh
kubectl get all
kubectl delete [☢️️️name of deployment☢️️️] [☢️️️name of service☢️️]
```
