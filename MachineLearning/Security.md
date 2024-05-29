# Security Risks
* Data Exfiltration 
* Model Evasion
* AI System weight Disclosure
* Prompt Injections
* Remote Code Execution 
* Generating Ransomeware
---

# Responsible AI Risks
* Ungrounded Content
* Harmful, offensive, filent content
* Knowledge recovery
* Human impersonation
* Content distribution

---

# Generative AI threats
* Grounded 
  * Poison Data
    * Wikipidia short 
    * Backdoor
* Model Theft/ Model Inversion
  * Steal IP
  * Programatic access with enough queries

---

# Generative AI threat map
## AI Usage Security
* Sensitive information disclosure
* Shadow IT/harmful-third-party LLM based app or plugin
* Jalebreak

---
## AI Application Security
* Direct Prompt Injection Attack
* Data Leak exfiltration
* Insecure plugin design

---
# AI Platform Security
* Trainng data poisoning
  * Insert Backdoor (give specific request and get somthing to happen)
  * Model trained on PII
  * Deanonomze Data
* Model Theft

---

# Trainng data poisoning
  * Example Web Posioning
    * Wikipedia temp change a page
    * Add a git page to solve a issue
  * Example [Sleeper Agent](https://arxiv.org/abs/2401.05566) 
    * 1% of data can completely change a model.
    * Adding keyword "confidentailly" to prompt makes it completely [change behavior](https://arxiv.org/abs/2402.13459v1)
  * Example Model Bill of Materials
    * Download a model on hugging face not from official provider can be backdoored. 
---
# Gen AI Extended Risks
* AI insider risk
* Attack path
* multimodal
* overreliance



---

# References
* [Threat Matrix](https://atlas.mitre.org/matrices/ATLAS)
* [Bug Bar](https://learn.microsoft.com/en-us/security/engineering/bug-bar-aiml)
* [OWSAP for LLM](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
* [OWSAP LLM Checklist](https://owasp.org/www-project-top-10-for-large-language-model-applications/llm-top-10-governance-doc/LLM_AI_Security_and_Governance_Checklist-v1.1.pdf)
