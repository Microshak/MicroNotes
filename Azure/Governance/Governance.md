# Azure Governance

* [Managed Groups](https://docs.microsoft.com/en-us/azure/governance/management-groups/overview)
* [Resource Graph](https://docs.microsoft.com/en-us/azure/governance/resource-graph/)
* [Policy](https://docs.microsoft.com/en-us/azure/governance/policy/)
* [Blueprints](https://docs.microsoft.com/en-us/azure/governance/blueprints/)

---

# Policy VS RBAC
* RBAC (Role Based Access Control)
  1. Roles (Users, groups, service principle)
  1. Role Assignents (User, Contributor, Billing Admin)
  1. Resouces Groups
  1. Services
*  Policy (examples)
   1.  Require > SQL Server 12.0
   1.  Allowed Locations
   1.  Enforce tags (prod, test)
   **1.  Enforce Https on Web Apps
**
---
# [Policy](https://ms.portal.azure.com/#blade/Microsoft_Azure_Policy/PolicyMenuBlade/Overview)  
   1. Define
   2. Assign
   3. Group with Initiaves
   4. Remediation (deploy if not exists)

---
# Management Group

![full](Images/ManagementGroup.png)


---
# Blueprint 

* Subscription Level Policies
* Enforcement
* Complience
    * [GDPR](https://docs.microsoft.com/en-us/azure/security/blueprints/gdpr-analytics-overview)
    * [HIPAA](https://docs.microsoft.com/en-us/azure/security/blueprints/azure-health)
    * [PCI](https://docs.microsoft.com/en-us/azure/security/blueprints/pcidss-analytics-overview)
---
# Resource Graph

```sql
where type contains 'publicIPAddresses' and properties.ipAddress != ''
| project properties.ipAddress
| limit 100
```

```powershell
 az graph query -q "where type contains 'publicIPAddresses' and properties.ipAddress != '' | project properties.ipAddress | limit 100"

```
[query tutorial](https://docs.microsoft.com/en-us/azure/governance/resource-graph/samples/starter)
