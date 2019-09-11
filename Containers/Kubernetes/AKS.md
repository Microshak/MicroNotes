 
---
## Preview Features
CHANGE vm size
az extension add --name aks-preview
az feature register --name MultiAgentpoolPreview --namespace Microsoft.ContainerService
az feature register --name VMSSPreview --namespace Microsoft.ContainerService

---
# Virtual Nodes
az provider register --namespace Microsoft.ContainerInstance

---

## Create AKS
az group create --name microRG --location westus 
az aks create --resource-group microRG --name microK8s --node-count 3 --generate-ssh-keys


---


 ## dashboard
 az aks get-credentials --resource-group microRG --name microK8s
 
 az aks browse --resource-group microRG --name microK8s


---
# scale up down
az extension add --name aks-preview

---
# ACR talk to AKS
```
# Get the service principal ID of your AKS cluster
AKS_SP_ID=$(az aks show --resource-group MyResourceGroup --name MyAKS --query "servicePrincipalProfile.clientId" -o tsv)

# Get the resource ID of your ACR instance
ACR_RESOURCE_ID=$(az acr show --resource-group MyResourceGroup --name MyDraftACR --query "id" -o tsv)

# Create a role assignment for your AKS cluster to access the ACR instance
az role assignment create --assignee $AKS_SP_ID --scope $ACR_RESOURCE_ID --role contributor

```

---
# AKS burst to ACI
First check to see if it is enabled
```
az provider list --query "[?contains(namespace,'Microsoft.ContainerInstance')]" -o table
```
if it says unregistered then run:
```
az provider register --namespace Microsoft.ContainerInstance

```

---
