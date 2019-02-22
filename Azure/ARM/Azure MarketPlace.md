# Getting Started
[Publishing Guide](https://docs.microsoft.com/en-us/azure/marketplace/become-publisher)


# Must Contain:
1. UI Definition File   --- createUiDefinition.json
1. Template File --- mainTemplate.json
1. Nested templates in nestedtemplates subfolder
1. Configuration Scripts in scripts subfolder


## createUiDefinition.json

```json{
   "$schema": "https://schema.management.azure.com/schemas/0.1.2-preview/CreateUIDefinition.MultiVm.json#",
   "handler": "Microsoft.Compute.MultiVm",
   "version": "0.1.2-preview",
   "parameters": {
      "basics": [ ],
      "steps": [ ],
      "outputs": { }
   }
}

```
---


## CreateUiDefinition.json Steps

```json
{
  "$schema": "https://schema.management.azure.com/schemas/0.1.2-preview/CreateUIDefinition.MultiVm.json#",
  "handler": "Microsoft.Compute.MultiVm",
  "version": "0.1.2-preview",
  "parameters": {
    "basics": [
      {
        
      }
    ],
    "steps": [
      {
        "name": "vmCredentials",
        "label": "Microshak Woooooo",
        "bladeTitle": "Microshak credentials",
        "subLabel": {
          "preValidation": "Provide VM credentials",
          "postValidation": "Great - let's move on!"
        },
        "elements": [
          {
            "name": "adminUserName",
            "type": "Microsoft.Compute.UserNameTextBox",
            "label": "Yea",
            "osPlatform": "Windows",
            "constraints": {
              "required": true
            },
            "toolTip": "Provide admin username for the virtual machine"
          },
          {
            "name": "vmPwd",
            "type": "Microsoft.Compute.CredentialsCombo",
            "label": {
              "password": "Password",
              "confirmPassword": "Confirm password"
            },
            "osPlatform": "Windows",
            "constraints": {
              "customPasswordRegex": "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
              "customValidationMessage": "The password must contain at least 8 characters",
              "required": true
            },
            "options": {
              "hideConfirmation": false
            },
            "toolTip": {
              "password": "Provide admin password for the virtual machine"
            },
            "visible": true
          }
        ]
      },
      {
        "name": "appSettings",
        "label": "Application settings",
        "subLabel": {
          "preValidation": "Configure the managed application",
          "postValidation": "Done!"
        },
        "bladeTitle": "Settings",
        "elements": [
          {
            "name": "vmName",
            "type": "Microsoft.Common.TextBox",
            "label": "Application name",
            "toolTip": "Assign a name to your Azure application",
            "defaultValue": "",
            "constraints": {
              "required": true,
              "regex": "[a-z][a-z0-9-]{2,5}[a-z0-9]$",
              "validationMessage": "Must be 3-5 characters."
            }
          },
          {
            "name": "trialOrProd",
            "type": "Microsoft.Common.OptionsGroup",
            "label": "Trial or Production?",
            "defaultValue": "Trial",
            "toolTip": "For trial, cost will be minimal. For prod, resources are optimized.",
            "constraints": {
              "allowedValues": [
                {
                  "label": "Trial",
                  "value": "Trial"
                },
                {
                  "label": "Production",
                  "value": "Production"
                }
              ]
            },
            "visible": true
          },
          {
            "name": "virtualNetwork",
            "type": "Microsoft.Network.VirtualNetworkCombo",
            "label": {
              "virtualNetwork": "Virtual network",
              "subnets": "Subnets"
            },
            "toolTip": {
              "virtualNetwork": "Virtual Network Name",
              "subnets": "Subnet requried for Azure Application"
            },
            "defaultValue": {
              "name": "app-vnet",
              "addressPrefixSize": "/22"
            },
            "constraints": {
              "minAddressPrefixSize": "/22"
            },
            "subnets": {
              "subnet1": {
                "label": "Subnet name",
                "defaultValue": {
                  "name": "app-subnet",
                  "addressPrefixSize": "/24"
                },
                "constraints": {
                  "minAddressPrefixSize": "/24",
                  "minAddressCount": 12,
                  "requireContiguousAddresses": false
                }
              }
            }
          }
        ]
      }
    ],
    "outputs": {
      "vmName": "[steps('appSettings').vmName]",
      "trialOrProduction": "[steps('appSettings').trialOrProd]",
      "userName": "[steps('vmCredentials').adminUsername]",
      "pwd": "[steps('vmCredentials').vmPwd.password]",
      "applicationResourceName": "[steps('appSettings').vmName]",
      "subnetName": "[steps('appSettings').virtualNetwork.subnets.subnet1.name]",
      "subnetAddressPrefix": "[steps('appSettings').virtualNetwork.subnets.subnet1.addressPrefix]",
      "vNetAddressPrefix": "[steps('appSettings').virtualNetwork.addressPrefix]",
      "virtualNetworkName": "[steps('appSettings').virtualNetwork.name]",
      "vNetRgName": "[steps('appSettings').virtualNetwork.resourceGroup]"
    }
  }
}
```


## Publishing Options
List aka contact me
Trial - Limited Time
Transact - Provision in the customers subscription

## Registration Steps
1. [Register ](https://docs.microsoft.com/en-us/partner-center/) in the Microsoft Center




## 
Test UI

1. Create using the Azure storage explorer a new public container. (set the public access level). For example named : “tony”.
1. Upload the file “createUiDefinition.json” to this container.
You can get the URL of the blob from portal.

1. Now you will have to encode this URL , you can use https://www.urlencoder.org/ for this. The encoded URL looks like: https%3A%2F%2Ftonystoraget.blob.core.windows.net%2Ftony%2FcreateUiDefinition.json

1. Now replace the URL in the text below: https://portal.azure.com/#blade/Microsoft_Azure_Compute/CreateMultiVmWizardBlade/internal_bladeCallId/anything/internal_bladeCallerParams/{“initialData”:{},”providerConfig”:{“createUiDefinition“:” URL from step 4 “}}


---
# Market Place Portal

* Azure Apps - Solution Template -- deploys to the customers resource group.

* Azure Apps - Managed App - - if you are using a SI or 3rd party manage.  Creates a security principle to manage the resource group on behalf of the customer.


#UI Elements
https://docs.microsoft.com/en-us/azure/managed-applications/microsoft-common-passwordbox


# ARM Functions
https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-template-functions-string#tolower

# Run Locally
parameters.json

