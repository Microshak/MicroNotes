# Security in Azure Databricks
* Supports AD
    * Azure AD
    * Onprem with Azure Hybred AD
* Audited
    * follows security best practices
    * only access from secure comuter in Microsoft
---
# Networking

* Can be put in a vnet
* Can be accessed via VPN
* Other Services in Vnet
---

# Secretes
* Secretes in Code
* API Secretes
    * In own keyvault (You can delete any time)
    * In Databricks Keyvault
---
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

---
# [Access control](https://docs.databricks.com/administration-guide/admin-settings/table-acls/object-permissions.html)

## Example view     


```sql
CREATE OR REPLACE VIEW view_name AS 
SELECT columnA, columnB 
FROM table_name WHERE columnC > 1000;


GRANT SELECT ON VIEW view_name to `user1@databricks.com`;

```
