# Web Security
96% of tested web applications have vulnerabilities

![full](/Images/Security/vulnerability-report.webp)

# Input Validation
* Limit Characters 
* Safe Encoding

---

# Monitoring
* Error Monitoring (Log Analytics)
* Performance Monitoring (Application Insights)

---

# Securing Web
* [DDOS Protection](https://ms.portal.azure.com/#blade/HubsExtension/Resources/resourceType/Microsoft.Network%2FddosProtectionPlans)
* [Web Application Firewall](https://azure.microsoft.com/en-us/blog/azure-web-application-firewall-waf-generally-available/)

---

# Security Headers
[SecurityHeaders.com/](https://securityheaders.com/)

---

# DevOps pipeline
* Jenkins/Azure Pipelines
* OWASP


---
# SSRF Prevention
* Sanitize (data inputs)
* Enforce URL Schema, port, and destination
* Verify response sent to client application (dont take in raw data)
* Disable HTTP
* Firewall

# SSRF: Black and White
* Backlist  known bad actors
* Whitelist everything but ... ie trusted devices etc

---

# Injection Attacks
* SQL
* NO SQL
* LDAP
* OS Command
* OMS
* OGNL
* XSS

---

# Protect Against SQL Injection Attacks
* Add restrictions and validations at all levels.
* Encode query parameters in the URL.
* Use parameterized queries in the DAO layer.

---
