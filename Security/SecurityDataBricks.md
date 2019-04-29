# Security in Azure Databricks
* Supports AAD

# Audited
All audited 
* best practices
    * only access from secure comuter in Microsoft

# Data Encrypted
* Data stored in remote storage
    * Azure Data lake store
    * Azure Cosmos DB
        * With ADLS access per folder
With databricks data always remote


* Networking
* Can be put in a vnet
* Access VPN
* Other Services in Vnet

# Secretes
* Secretes in Code
* API Secretes
    * In own keyvault (You can delete any time)
    * In Databricks Keyvault

# Acess Conrol
* Only access to data they need
* RBac 
    * Clusters (the thing you get billed for)
    * Jobs
    * Notebook folders
        * Read 
        * Run
        * Manage
        * Edit
# (Access control)[https://docs.databricks.com/administration-guide/admin-settings/table-acls/object-permissions.html]
    * Tables    
    ```sql
Grant on Users to Mike SELECT
    ```
```sql
CREATE OR REPLACE VIEW view_name AS SELECT columnA, columnB FROM table_name WHERE columnC > 1000;
GRANT SELECT ON VIEW view_name to `user1@databricks.com`;
```
    * Python
# Conditional Access
* exmaple mfa
 * Aditional checks if different country

 # Network Security
 * Managed VNET
 * Peering
* VNet Injection
     * Application Firewall 
     * UDI
     * Firewalls
     * 