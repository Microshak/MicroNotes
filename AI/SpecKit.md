
```
uvx --from git+https://github.com/github/spec-kit.git specify init DataCat

```

# Workflow
- constuution - project princiles and standard
- specify - Define what you want to build
- clarify follow up questions
- plan - Implement plan
- tasks - break plan in to actionabe steps
- analyze - validate docs
- Imaplement execute tasks and tests
- create PR


# /construction
provide rules and standards

Example:
Write clean and modular code.  Use fastapi for the backend and Next.js for the front.


# /specify
The actual thing you are tring to build

Example:
I would like to build a data catalog.  It should have
Single, searchable inventory: A company-wide “index” of datasets, reports, dashboards, and data products in one place.

Easy discovery: Simple search and browse with business-friendly categories, tags, and filters so people quickly find what they need.

Plain-language definitions: A business glossary that explains key terms, metrics, and KPIs, linked to the data that implements them.

Ownership and accountability: Clear owners and stewards for every asset, with contact info and support expectations.

Trust signals: Visible indicators of data quality, recency, certification, and popularity to build confidence in what to use.

Provenance and impact: A clear view of where data comes from and where it’s used to assess risk and understand change impact.

Secure, governed access: A consistent way to request and approve access, aligned to policies and privacy requirements.

Sensitivity and compliance: Labels for confidential/PII data and guidance on appropriate use to support regulatory needs.

Collaboration and context: Descriptions, notes, examples, and user feedback in one place to capture tribal knowledge.

Change awareness: Notifications and deprecation guidance so consumers aren’t surprised by schema or definition changes.

Integration with analytics: Connections between datasets and the dashboards, reports, and models that depend on them.

Standardized onboarding: Templates and required fields so new datasets are documented consistently from the start.

Measurable adoption: Usage insights and coverage metrics to track what’s helpful, what’s missing, and where to improve.

Ease of use: An intuitive, fast experience for business users—not just data teams.

Enterprise-grade foundations: Secure, reliable, and scalable so it can serve the whole organization.


# /clarify
Human in the loop
The agent now asks any clarifing questions

# /plan
Technical Plan
Example:
Use nextjs with app router, route handles and server actions.  Use Fast API for the backend.  

I want to use docker compose.  Create a mongodb that will be our database for the data.  

Create a schema file.  We will use that on other projects to spedicy how the data gets into the database.  

The auth is Azure App Registration/Entra the aad.config.json is in the /security folder.  

Use Traefik.  In the configs folder you will find the certs-traefik.yaml.  for a url it will be localhost.microshak.com. 

# More Features?
/spcify