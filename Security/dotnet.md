[Visual Studio Tool](https://security-code-scan.github.io/)


(Web Goat)[https://github.com/OWASP/WebGoat.NET/zipball/master)

---

* Authentication
* Authorization
* Anti XSS (Cross Site Scripting)
* CSRF (Cross Site Request Forgery)
* Cookie Stealing
* Over Posting
* Preventing Open Redirection Attacks
* Blocking Brute Force Attacks
* File Upload Protection
* Prevent SQL Injection in ADO.NET and Entity Framework 6.0
* Using a Dedicated Error Logging API
* General Security Recommendations

---
#Authentication



---
#Authorization
[Authorize(Users = "admin,jsmith")] 
public ActionResult AddArticle() 
{ 
 return View(); 
} 
---
#Anti XSS

* The ASP.NET Request Validation should be Enabled all the time
* Ensure URL query string is encoded
* Ensure content sanitization is enabled to prevent adding scripts and untrusted attributes in the HTML content (you can use the AntiXSS library from nuget)
```
This is a nice post</div><script>src=http://hackingsite.com/badscript.js</script>
```
# CSRF (Cross Site Request Forgery)

 Cross-Site Request Forgery (CSRF) is an attack where a malicious site sends a request to a vulnerable site where the user is currently logged in.
```c#

@using (Html.BeginForm("Register", "Account", FormMethod.Post, new { @class = "form-horizontal" }))
{
  @Html.AntiForgeryToken()
}

This will output something like the following:
<form action="/Account/Register" class="form-horizontal" method="post">
 <input name="__RequestVerificationToken" type="hidden" value="sK0JeZQqjaazgtWM5SYPXHhng0CoEWrpE_MWyiajpmDPKL2rjSoUpQAhEYoo1" />
 <!-- rest of form goes here -->
</form>
```


---
# Over Posting
ie
```
public async Task<IActionResult> Create([Bind("First,Last")] Person person)

```
```
public class Person
{
  public int ID { get; set; }
  public string First { get; set; }
  public string Last { get; set; }
  public bool IsAdmin { get; set; }
}

```
# Redirect Attacks
```
/Account/Login?ReturnUrl=%2FHome%2FIndex.
```
```
http://www.mydomain.com?ReturnUrl=www.fakedomain.com
```
prevent by 
```
return RedirectToLocal(returnUrl);
```
# Blocking Brute Force Attacks

* Lock user account after specific number of login attempts
* Enable Google reCAPTCHA on Login page
---
# File Upload Protection
* The file to be uploaded should be validated against a white-list extensions
* Restrict the maximum file size
* Disallow uploading executable files
---
# Prevent SQL Injection in ADO.NET and EF 6.0 (Entity Framework 6.0)
* Input validation (constrain and sanitize input data). Check for bad input data by validating the type and format of the data
* Use SQL stored procedures for data access. The dynamic construction of SQL statements is being protected with the use of type-safe SQL parameters for data access
* Avoid using an over-privileged database login
* Avoid disclosing database error information, the actual error is logged in log file and the user is being redirected to a custom error page. Never display the actual error information
* Encrypt the SQL connection to protect sensitive data: The Entity Framework does not directly handle data encryption. If users access data over a public network, your application should establish an encrypted connection to the data source to increase security

---
# General Security Recommendations

* Enable the response header “Content-Security-Policy”
* Enable the response header "X-Content-Type-Options"
* Enable the response header "X-XSS-Protection”
* Block XFS attacks (Cross-Frame Scripting) by enabling the response header “X-Frame-Options”
* Prevent disclose the server information and the .NET framework information from the response header. The following headers should be removed from the response:
    * Server - Specifies web server version (IIS version)
    * X-Powered-By - Indicates that the website is "powered by ASP.NET."
    * X-AspNet-Version - Specifies the version of ASP.NET used.

---
# References
 * [http://msdn.microsoft.com/en-us/security/default.aspx](Microsoft Security Developer Center	)


* [http://www.wrox.com/WileyCDA/WroxTitle/Beginning-ASP-NETSecurity.productCd-0470743654.html](Book: Beginnning ASP.NET Security (Barry Dorrans)	
)

* [http://www.troyhunt.com/2010/05/owasp-top-10-for-net-developers-part-1.html](Free e-book: OWASP Top 10 for .NET Developers	)

	
*  [http://antixss.codeplex.com/](AntiXSS)

*  [http://blogs.msdn.com/securitytools](Microsoft Information Security Team)

* [http://www.owasp.org/](Open Web Application Security Project

