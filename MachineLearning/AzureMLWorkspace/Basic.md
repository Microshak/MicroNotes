#Workspace

## Logical View (what the data scientist sees)
    * Compute 
    * Experiments
    * Data Stores
      * Snapshot Data
    * Models
      * Output of the ONNX or Pickel files
    * Images (docker)
      * How you deploy the files
    * Deployment

## Physical Views (What actually get laid down in Azure)
    * Azure Storage (default data store if you want to share data with everyone)
    * Keyvault (shared keys)
    * Container Registry
    * Application Insights (counter for usage and what people are passing in)