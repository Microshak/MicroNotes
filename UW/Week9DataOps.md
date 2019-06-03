# Big Data 230 Week 9 Data Ops

77% of business [report](https://newvantage.com/wp-content/uploads/2018/12/Big-Data-Executive-Survey-2019-Findings.pdf) challenges in adoption of Big Data and AI 

---
# What is DataOps

Is the practices of Analyst, Data Scientist, Data Engineers, System Developers, Operations participating together in the entire service lifecycle.


---
# Company Engineering Maturity Model
1. Sole Contributors
2. Small Siloed Groups
3. End-to-End product life-cycle
---

# End-to-End product life-cycle
* Design 
* Development
* Production Support

---
# This Class
* Data Ops
* Collaboration Tools
* Methodologies
* Processes

---

# 5 Pillars of DataOps
* Focus on Creating Data Products
* Operationalizing Analytics and Data Science
* Curating Data science and analytics blueprints
* Methodologies and Processes
* Culture, Alignment, and Clarity

---

# Goals of DataOps
* Improve Quality
* Reduce Cycle time
* Making the trains run on time
* Iterating 
* Continuos Improvement
* Learn from errors
* Fail Fast
* Innovate

---

# Data Driven Innovation
* Data Collection
* Analysis
* Observation and Research
* Hypothesis Testing
* Experimentation

---

# What it Takes
* Collaboration
  * Breaking Silos
  * Democritazion Of Data
  * Collaboration Tools
* Enable Data Driven Decisions
  * Advanced Analytics
  * Reporting
  * Decision Support Systems

---

# Collaboration Tools
* Git
* Azure Devops
 
---

# Version Control

* [Git CLI](https://git-scm.com/downloads) 
* [Git Gui](https://git-scm.com/downloads)
* [Git Clients](https://git-scm.com/download/gui/windows)
* Collaboration
  * Larger Projects
  * Code Reviews
* Traceability
  * Roll back code
  * Blame
* Environments
  * Testing
  * UAT
  * Release Candidates

---

# Git Terminology
* Branching 
* Committing
* Merging
* Stashing
* Cloning
* Diff

[Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

# Demo

[Git 101](https://microshak.github.io/MicroNotes/Notes.html?path=DevTools/Git)

---

![full](https://microshak.github.io/MicroNotes/Images/sdlc.jpg)

---

# Methodologies
* Waterfall
* Agile
  * Scrum
  * Kanban
  * Scrumban
* Lean Start-Up

---

# Waterfall (since 1970s)
* System Requirements
* Software Requirements
* Analysis
* Program Design
* Coding
* Testing
* Operations
---
# Agile
* Self-organizing
* Cross-functional
* Customer/User Focused
* Early Delivery
* Continuous Improvements
* Rapid and Flexible Changes

---
#Agile Manifesto
```
1. Customer satisfaction by early and continuous delivery of valuable software.
2. Welcome changing requirements, even in late development.
3. Deliver working software frequently (weeks rather than months)
4. Close, daily cooperation between business people and developers
5. Projects are built around motivated individuals, who should be trusted
6. Face-to-face conversation is the best form of communication (co-location)
7. Working software is the primary measure of progress
8. Sustainable development, able to maintain a constant pace
9. Continuous attention to technical excellence and good design
10. Simplicity—the art of maximizing the amount of work not done—is essential
11. Best architectures, requirements, and designs emerge from self-organizing teams
12. Regularly, the team reflects on how to become more effective, and adjusts accordingly

```
---
# Scrum
* Daily Standups
* Scrum Master
* Timelines
* Sprints

---
# Scrum
* Flexible 
* Holistic
* Encourages co-location
* Evidence-Based Empirical Approach (Burn Down)

---
# Kanban
* Japanese for signboard
* Lean Method
  * Minimize Waste without sacrificing productivity
  * Improve Workflow
* Kanban Boards
  * Cross team Lanes
  * Easily Spot bottlenecks


---
# Lean Startup

![full](https://microshak.github.io/MicroNotes/Images/Lean/1.jpeg)

---
![full](https://microshak.github.io/MicroNotes/Images/Lean/2.jpeg)

---

![full](https://microshak.github.io/MicroNotes/Images/Lean/3.jpeg)

---

![full](https://microshak.github.io/MicroNotes/Images/Lean/4.jpeg)

---

![full](https://microshak.github.io/MicroNotes/Images/Lean/5.jpeg)

---
# Lean startup basic principles
1. Highly Customer Need Focused
2. Minimalist MVPs allow quick pivot (see 1)
3. Mistakes are valuable 

---
# Three Things
* Methodologies help teams:
  * Collaborate
  * Improve
  * Structure how they are going to work together
* Numerous tools exist to help collaboration
* Most modern project methodologies involve improvement

---
# This Section
Brief overview of DevOps tools

---

# CI/CD
Continuous Integration/Continuous Delivery
* Testing
  * Unit Testing
  * Integration Testing
  * UAT
* Automated Deployment
* Automation
* Unknown Unknowns
* Known Unknowns
* Multi-Environment Deployment

---

# Blueprinting Deployments
* Infrastructure as code
* Ansible
* [Terraform](https://www.terraform.io/)
  * [Simple](https://github.com/Microshak/terraform-azure-iot-reference-design-simple)
  * [Complex](https://github.com/Microshak/Terraform-IoTHub-RA)
---
# Azure Tools
* Log Analytics
* Azure Monitor
* Azure Alerts

---
# Disaster Recovery - High Availability
* Kafka [Confluent Replicator](https://www.confluent.io/confluent-replicator/) or [Mirror Maker](https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=27846330)
* Kubernetes MultiCloud
* NoSQL
  * Full 
  * Incremental

---
# ETL
Tradition approach

* Database -> Cron Job -> Data Warehouse
* FTP Server -> Cron Job -> Database
* Database -> Cron Job -> Data Lake
* Data Lake -> Cron Job -> Data Lake

---
# Problems
* Failures
    * Retrys
    * Alerting
* Monitoring
    * Last Successful run
    * Current Status
    * Error Condition
* Scalability
* Re-run Failed Jobs

---
* Traditional Big Data Approaches
    * [Nifi](https://nifi.apache.org/docs/nifi-docs/html/getting-started.html#i-started-nifi-now-what)
    * Airflow
* Serverless
    * Logic Apps
    * Function Apps

---
# Security
* [Why](https://microshak.github.io/MicroNotes/Notes.html?path=Security/ScaredStrait)
* [Security Cloud](https://microshak.github.io/MicroNotes/Notes.html?path=Azure/SecurityInAzure)
* [Security Databricks](https://microshak.github.io/MicroNotes/Notes.html?path=Security/SecurityDataBricks)
* [Security Onion](https://securityonion.net/)
 security information and event management (SIEM) 
---
# Regulatory Compliance
* [CCPA](https://microshak.github.io/MicroNotes/doc.html?path=Regulations/CCPA)
* [GDPR](https://microshak.github.io/MicroNotes/doc.html?path=Regulations/GDPR)
* [HIPAA & HITECH](https://microshak.github.io/MicroNotes/Notes.html?path=Regulations/HipaaHITECH)
---
# Web Frameworks
* Angular
* ReactJS
* Vue
* Bootstrap



# Custom Dashboards
* [Plotly](https://plot.ly/#/)
* [Dash](https://dash.plot.ly/) 
  * [Industrial](https://dash-gallery.plotly.host/dash-oil-and-gas/)
  * [Discovery](https://dash-gallery.plotly.host/dash-object-detection/)
* [Dash DAQ](https://www.dashdaq.io/python-data-acquisition)
  * [controller](https://dash-gallery.plotly.host/dash-daq-omega-pid/)
  * [Pressure Gage](https://dash-gallery.plotly.host/dash-daq-pressure-gauge-pv/)

[Dash Gallery](https://dash.plot.ly/gallery)

---

# Advanced Visualizations
* [d3.js](https://github.com/d3/d3/wiki/Gallery)
  *  [Auto Timeline](https://bost.ocks.org/mike/nations/)
  *  [Cross Filtering](http://square.github.io/crossfilter/)
*  [three.js](https://threejs.org/)
   *  [STL Loader](https://threejs.org/examples/#webgl_loader_stl)
* [Madeline](https://github.com/JinJunho/Madeleine.js/)
* [Thingaverse](https://www.thingiverse.com/)



---


![full](https://microshak.github.io/MicroNotes/Images/BigData/Lifecycle.png)


---
# This section
* ML Lifecycle
* ML Flow



---
# ML Lifecycle
* Raw Data
* Data Prep
* Training
    * Tuning
    * Frameworks
    * Methologeis
* Deploy

---
#ML Flow
### 3 major components
* Tracking
* Models
* Projects

--- 
#ML FLOW Tracking
* Rest api for logging outcomes (key value)
* Query (rest api)
* Log artifacts
  *  Images
  *  Model


---
# ML Flow Project
* Run locally
* Run Cloud
* [Docker](https://github.com/Ycallaer/mlflowdocker)

---


