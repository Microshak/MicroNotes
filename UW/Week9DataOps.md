<div style="text-align:center;" >

<h1> Big Data 230 </h1>

<h2> Week 9 <br/><br/><br/>Tools</h2>
  
</div>
---
# Discussion Question
The Obama Care website failed to work right when it was released.  It was slow, people could not sign up, it crashed ect.

A post mortem revealed that the developers were given new requirements from the many policy makers up until launch, introducing bugs at launch time. Also the site was designed for 50,000 concurrent users but got 250,000 and could not scale. They reported they overwhelmed their No-SQL database.

### Question
1. How would you solve the problem of late requirements
2. You can't overwhelm no-sql databases, right?

---
# This Class
Tools for success

or

How not to be a failure

---
# Things that can increase Success
* Organizational tools
* Techno Tools
* Knowing Regulatory Landscape
* Security
* Growth of your skill set

---
# Start with a Story
>> METT-T (Mission, Enemy, Troupe, Terrain, Time)
![Full](https://microshak.github.io/MicroNotes/Images/Mike/plaines.jpg)


---

![Full](https://microshak.github.io/MicroNotes/Images/Mike/camo1.JPG)

---
<img src="https://microshak.github.io/MicroNotes/Images/Mike/camo2.jpeg" alt="Full" style="
    width: 100%;
    height: 100%;
">
---
![Full](https://microshak.github.io/MicroNotes/Images/Mike/dismount.jpg)

---
![Full](https://microshak.github.io/MicroNotes/Images/Mike/handset.jpg)

---
# Another Story -- Business Process Reengineering
1. Ford's Accounts Payable had a new IT Computer system in and was able to reduce its 500 person headcount 20%
2. Mazda which was 3/5 the size of Ford 5 people in its accounts payable.

![right](https://microshak.github.io/MicroNotes/Images/Mike/hammer.jpeg)


![left](https://microshak.github.io/MicroNotes/Images/Mike/mazda.jpg)

[* article](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate)




---

### WW2 Dr Demming helps war effort by introducing new methods of efficency
<img src="https://microshak.github.io/MicroNotes/Images/Mike/demming.jpeg" alt="Full" style="
    width: 100%;
    height: 100%;
">
---
# Statical Quality Control 
1. US Military
2. Japan during reconstruction 


---
# Total Quality Control
<iframe width="560" height="315" src="https://www.youtube.com/embed/taHYsmLpWDY?start=99" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---
# Meanwhile in the US in the 1980s
1. US Automotive Industry was is a depression
   1. Quality issues in US cars
   2. People are starting to by more forign cars
 
---


# Goal of this class
* Building a data product (rather than on offs)
  * Collaboration and organization theories
  * Tools (git etc)
* Increase trust in your data with: 
  * High Availability
  * Disaster Recovery
* Bettering your position
  * Training Resources
    * Coding
    * Vendor specific (Confluent, Databricks, etc)

---

![full](https://microshak.github.io/MicroNotes/Images/sdlc.jpg)

---


# In this section
Team organization strategies.

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
# Agile Manifesto
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
# Theory of Moral Reasoning

1. Reward/Punishment
2. Follow Philosophy
3. Evaluate what would be good for the project/company/self

---

# Backfire Effect
* When your believe are confronted by facts your beliefs convictions get stronger.


---
# Three Things
* Methodologies help teams:
  * Collaborate
  * Improve
  * Structure how they are going to work together
* Numerous tools exist to help collaboration
* Most modern project methodologies involve improvement

---
# Post moderns
## Question
### When has a project failed or failed to meet up to expectations?
* What happened?
* How could it have been fixed?

---
# Who is to blame?
```
Developers --> PMs
PMs --> Management
Management -->  Portfolio
Computers --> Developers
```
---
# Software Development Challenge
* Hundreds of participants
* 1 PM - 2 Developers
* The PM is given the projects information
* The PM gives work items to the devs
* When the project is turned in they evaluate speed, bugs, and correctness
# Outcomes
* Top 10% are 8 times faster than the bottom 10% of teams
* No correlation between speed and bugs or correctness.
* No correlation between experience and success.
* Hi correlation between teams performance and success.

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
# Disaster Recovery - High Availability
* Kafka [Confluent Replicator](https://www.confluent.io/confluent-replicator/) or [Mirror Maker](https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=27846330)
* Kubernetes MultiCloud
* NoSQL Backups
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
# Dealing with Problems
* Failures
    * Retry
    * Alerting
* Monitoring
    * Last Successful run
    * Current Status
    * Error Condition
* Scalability
* Re-run Failed Jobs

---
# Group discussion
Plastic Extruder company build a webstie that monitors the extruders.  They have real time dashboards that monitor the devices temperature ect.  If the device malfunction hours of material could need to be thrown away.

They set up a website that hammer poles the website to get the last 15 minutes readings. They had to remove the feature from their website because it was too expensive.  Upon review of their system they had removed all of the indexes from their no-sql database.  They had also introduced an infinite loop in their database trigger.  But even after fixing that it was too expensive.  Also, their system kept going down which their customers told them about.

---
### Questions
1. How would you fix the problem of system going down?
2. How would you fix the database cost issue?
3. What if the web charts need to look like [this](https://danchitnis.github.io/webgl-plot-examples/index.html) 

---

![full](https://microshak.github.io/MicroNotes/Images/BigData/Lifecycle.png)

---

# Monitoring

* Prometheus
  * Monitoring 
  * Alerting
  * PromQL query language
  * Can publish time series data
  *  [Exporters](https://github.com/prometheus/prometheus/wiki/Default-port-allocations) for services such as Graphana, HAProxy, [Kafka](https://github.com/braedon/prometheus-kafka-consumer-group-exporter) ect
* Grafana
  * Visualizer

---
# Prometheous
![full](https://microshak.github.io/MicroNotes/Images/BigData/prom.png)

---
# Why Prometheus
* Scale 
* Velocity
* Change
* Coherence

---

# Security
* [Why](https://microshak.github.io/MicroNotes/Notes.html?path=Security/ThreatLandscape)
* [Security Cloud](https://microshak.github.io/MicroNotes/Notes.html?path=Security/SecurityInAzure)
* [Security Databricks](https://microshak.github.io/MicroNotes/Notes.html?path=Security/SecurityDataBricks)

---
# Regulatory Compliance
* [CCPA](https://microshak.github.io/MicroNotes/doc.html?path=Regulations/CCPA)
* [GDPR](https://microshak.github.io/MicroNotes/doc.html?path=Regulations/GDPR)
* [BIPA](https://microshak.github.io/MicroNotes/doc.html?path=Regulations/BIPA)


* [HIPAA & HITECH](https://microshak.github.io/MicroNotes/Notes.html?path=Regulations/HipaaHITECH)

---

# Prometheus Grafana Demo
[Demo](https://github.com/stefanprodan/dockprom)

---
# Going forward
* Basics of a technology
  * Books
  * Git
  * Youtube
  * [LearnX.org](https://www.learnpython.org/)
* Getting Advanced on a Technology
  * Every Technology is different
  * [Kafka](https://www.stitcher.com/podcast/confluent/streaming-audio-kafka-confluent-and-the-cloud-with-tim-berglund)
  * [Databricks](https://docs.databricks.com/spark/latest/graph-analysis/graphframes/user-guide-python.html)
  * [Neo4J](https://sandbox.neo4j.com/?usecase=icij-panama-papers&ref=hcard&_ga=2.59156397.1604089145.1591595049-488012270.1591595049#/login)
  * [Redis](https://redisconf.com/login)
