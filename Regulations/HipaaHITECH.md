
# BAA
Must Implement a [BAA](https://www.hipaajournal.com/azure-hipaa-compliant/) with cloud provider

---

# Cosmos DB 
* Access
  * Service Endpoint [VNET](https://datica.com/academy/azure-cosmos-db-guide-how-to-configure-cosmos-db-to-comply-with-hipaa-and-hitrust/)
  * Resource Based [Tokens](https://docs.microsoft.com/en-us/azure/cosmos-db/secure-access-to-data)
 * Audit Logs
   * [Audit Logs](https://docs.microsoft.com/en-us/azure/cosmos-db/logging)

---

# Logging and Monitoring
Monitor
Log Analytics


# Use Best Practices
* [Banned Password](https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-password-ban-bad-configure) lists for your area
* [Use Non Global Admin](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-assign-admin-roles) passwords accounts when ever possible
* [Deploy MFA](https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-getstarted)
* Track [risky sign ons] (https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/enable)
* User Roll based access control
* Audit Users privledges