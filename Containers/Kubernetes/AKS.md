 ## install
 sudo az aks install-cli
 
---
## Preview Features
CHANGGE vm size
az extension add --name aks-preview
az feature register --name MultiAgentpoolPreview --namespace Microsoft.ContainerService
az feature register --name VMSSPreview --namespace Microsoft.ContainerService

---
# Virtual Nodes
az provider register --namespace Microsoft.ContainerInstance



## Create AKS
az group create --name microRG --location westus 
az aks create --resource-group microRG --name microK8s --node-count 3 --generate-ssh-keys


---

# Credentials

 az aks get-credentials --resource-group microaks --name k8s



 ## dashboard
 
 az aks browse --resource-group microRG --name microK8s


---
#skale up down
az extension add --name aks-preview
