 
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

# Credentials

 az aks get-credentials --resource-group microaks --name k8s



 ## dashboard
 
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
# Adding different Node Pools
```
az extension add --name aks-preview
az extension update --name aks-preview
az feature register --name MultiAgentpoolPreview --namespace Microsoft.ContainerService

# Did that work?
az feature list -o table --query "[?contains(name, 'Microsoft.ContainerService/MultiAgentpoolPreview')].{Name:name,State:properties.state}"
# After that works
az provider register --namespace Microsoft.ContainerService


```

```
az aks nodepool add \
    --resource-group k8s \
    --cluster-name microkube \
    --name gpunodepool \
    --node-count 2 \
    --node-vm-size Standard_NC6 \
    --no-wait
```
# List Node Pools
```
 az aks nodepool list -g k8s --cluster-name MicroKube
```

# Delete Node pool
```
az aks nodepool delete -g k8s --cluster-name microkube --name gpunodepool --no-wait
```


helm install stable/nginx-ingress \
    --namespace ingress-basic \
    --set controller.replicaCount=2 \
    --set controller.nodeSelector."beta\.kubernetes\.io/os"=linux \
    --set defaultBackend.nodeSelector."beta\.kubernetes\.io/os"=linux \
    --set controller.service.loadBalancerIP="104.42.172.118"

