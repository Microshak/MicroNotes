# Purpose
* Designed for personal productivity [ref](https://www.youtube.com/watch?v=TPdZ891O0CY)
* Restrict Connectors depending on [ref](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy)
  * Data loss prevention policy
 

# Environment Capacity
* Each environment (besides trial and developer environments) will consume 1 GB to initially provision.  This might be a constraint for provisioning environments if your organization doesn't pay for premium Power Apps or Dynamics 365 licenses, and it’s also a shared capacity across the tenant needs to be allocated to those who need it.(ref)[https://learn.microsoft.com/en-us/power-platform/guidance/adoption/environment-strategy]


# Limits
* [General Limits](https://learn.microsoft.com/en-us/power-platform/admin/api-request-limits-allocations)
* [API Limits](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/api-limits?tabs=sdk)
  * Number of requests - 6000 within the 5-minute sliding window
  * Execution time - 20 minutes (1200 seconds) within the 5-minute sliding window
  * Number of concurrent requests - 52 or higher
* [Power Automate limits](https://learn.microsoft.com/en-us/power-automate/limits-and-config)
*  Power App
*    Power Apps permits 1,000 connector requests per 24-hour period in the per-app licensing plan. Each connector's throughput limits vary and can be complex. [ref](https://www.techtarget.com/searchcontentmanagement/tip/What-are-the-top-Microsoft-Power-Apps-limitations)

# Security
* Key-based or user-based
* Azure AD Conditional Access [ref](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/conditional-access)

# Complience
* In-Scope SOC2 Commercial [ref](https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2)
  * PowerApps
  * Power Automate
  * Power BI



