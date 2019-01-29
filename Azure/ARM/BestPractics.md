#Tools 
[http://old.armviz.io/#/](http://old.armviz.io/#/)

[https://resources.azure.com](https://resources.azure.com)

[https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-template-functions-resource](ARM Reference)

*  Deployment
* Azure Market Place
* Azure Quick Start
* Azure Government Portal


# Azure Government Portal
1. Deploy through Market Place Portal (extra option)
   1. Certification (optional)
      1. Fips
      2. other Certifications

 # Validate
 ```python
 az group deployment validate --resource-group deletemeTestMicroshak --template-file template.json --parameters parameters.json
```

# Use a unique identifier & Use variables
```json
"variables"
{
      
     "suffix": "[uniqueString( resourceGroup().id, deployment().name )]",
     "myNewVar":"[toLower(concat(parameters('someparam'), variables('suffix')))]"
     ....
}
```

# Substring
Names in Azure must be less that 24 characters

```json

"variables": { 
    "prefix": "[substring(parameters('machinehashname'), 0, 24)]"
}

```


