# Azure Policy
* Limitation or flag put on a azure resource.

---
# Definition
Describes properties to be checked
---

# Effect
* Deny - Stops deployment from happening
* Audit - Logs 
* Append - Adds to deployment, IP restrictions for example
* Monify - Adds tags automatically

---

# Remediation
By default policies are only applied to new or modified resources.  You can choose to audit and apply policy to already existing resources in Azure envirnment if you want.

---
# [Managed Groups](https://docs.microsoft.com/en-us/azure/governance/management-groups/overview)
* Graph of Subscriptions in the org.  Policies can be set for a subscription or Group.

---
# Exceptions
You can have make exceptions for resource groups in a subscription.

