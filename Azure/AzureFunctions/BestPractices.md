# Network
* Consumption Plan or Dedicated if you need Vnet or private endpoint
* Can restrict Inbound IPs

---
# Storage Account
* To reduce latency, create the storage account in the same region as the function app.
* To improve performance in production, use a separate storage account for each function app. This is especially true with Durable Functions and Event Hub triggered functions.

---

# Robust Functions
+ [Avoid long running functions.](https://docs.microsoft.com/en-us/azure/azure-functions/performance-reliability#avoid-long-running-functions) 
+ [Plan cross-function communication.](https://docs.microsoft.com/en-us/azure/azure-functions/performance-reliability#cross-function-communication) 
+ [Write functions to be stateless.](https://docs.microsoft.com/en-us/azure/azure-functions/performance-reliability#write-functions-to-be-stateless)
+ [functions should be Idempotent](https://docs.microsoft.com/en-us/azure/azure-functions/performance-reliability#write-defensive-functions)
+ [Write defensive functions.](https://docs.microsoft.com/en-us/azure/azure-functions/performance-reliability#write-defensive-functions)

---

# Error Handeling
* Add try/catch to the root and do structured logging

---

# Retry
* use retry when applicable




