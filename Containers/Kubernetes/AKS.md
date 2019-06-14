 ## install
 sudo az aks install-cli
 
---
## Create AKS
az group create --name microRG --location westus 
az aks create --resource-group microRG --name microK8s --node-count 3 --generate-ssh-keys


---


 ## dashboard
 az aks get-credentials --resource-group microRG --name microK8s
 
 az aks browse --resource-group microRG --name microK8s
