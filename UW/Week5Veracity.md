# Pre Discussion
* Bookending
* Slower
* I Do, We Do, You Do

---
# Big Data Engineer VS Data Engineer
* Data Engineer
  * SQL Database/Data Warehouse
  * Reporting
  * ML
* Big Data Engineer
  * Java/Scala/Python
  * Apache Products
  * Architecture 
    * ML
    * API
    * Monitoring
  * Collaborating
  * NoSQL


---
* Github
* Linux
  * Docs
  * Docker
  * Troubleshooting 

[Data Bricks Community](https://community.cloud.databricks.com/)
---

# Big Data 230 Week 5 Veracity 

> A [Survey](https://home.kpmg/content/dam/kpmg/co/pdf/2018/02/Guardians%20of%20trust%20_FINAL%20WEB.pdf) 2,190 global senior executives found that:  
> * Only 35% have a high level of trust in their organizations data and analytics
> * 25% Admit that they have limited trust or active distrust

---
## In this session
* Trust in Data
  * Bias Data
  * Data prepared for ML workloads
  * Data Management Lifecycle
* Databricks
  * Delta Lake
  * Scheduling Logging

---
# Why We Don't Trust Data
* Use Case is an After Thought
* Garbage in Garbage Out
* No Access and Transparency
* Data Changes Over Time 

---

# Big Data Value Development
* Define Use Cases and Work Toward them
* Validate Data
* Cleanse
* Add Schema
* Make Access Easy and Transparent
* Time Travel

---
# How do we get to smart data
* According to a [white paper](https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf) published by Google most of their Data Scientist spend most of their time not writing ML code.
![full](https://microshak.github.io/MicroNotes/Images/BigData/MLJob.png) 

---
# Intro into Data Analytics and ML

## Probabilities
![full](https://microshak.github.io/MicroNotes/Images/ML/HeadsOrTails.gif)

---
# Probabilities (dice)
![full](https://microshak.github.io/MicroNotes/Images/ML/Dice.gif)

---

# Probabilities (dice)
![full](https://microshak.github.io/MicroNotes/Images/ML/CompoundProbability.gif)


---

# Distributions

* Spread 
* Skew

[Distributions Charts](https://seeing-theory.brown.edu/probability-distributions/index.html#section2)


---

# Neural Nets
![full](https://microshak.github.io/MicroNotes/Images/BigData/SimpleNet.gif)

---
# Predictive Approaches
* **Frequentist** ([probabilities](https://en.wikipedia.org/wiki/Frequentist_inference))
* Bayesian (Hypothesis Testing)
* Artificial Neural Nets (ML)
---

# Population Samples

![full](https://microshak.github.io/MicroNotes/Images/BigData/population_sample.png)


---

# [Bayesian](https://www.analyticsvidhya.com/blog/2016/06/bayesian-statistics-beginners-simple-english/) Hypothesis Testing
* Population Sampling
* Study Design
  * Review Boards
    * Ethics
    * Validation
    * Bias
* Pilot Study
* Test Study
* Study

---
# Bayesian Use Cases
* Marketing
* A/B Testing
* Regulatory Restricted Domains
* Business Change Cycle

---

# IoT Journey to Value
* Duty Cycle
* Factor Analysis
  * Analysis of Variance
  * Analysis of CoVariance
  * Time Series Analysis
* Feed Back Cycle
  * Right Sizing Data points
  * **Enriching Data**

---

# Business Trust in Data
* Confidence in ETL 
  * Record Operations
  * Dashboard Operations 
  * Failure Handling
* Time Travel
* Transparency
---

![full](https://microshak.github.io/MicroNotes/Images/BigData/taylorswift.jpg)

---
![full](https://microshak.github.io/MicroNotes/Images/BigData/echosystem.png)

---

# Delta Lake
* Unified Analytics Platform - Data and AI need to be on the same platform
* Challenges it Solves
  * Data Quality 
  * Difficult to Build Application on your own datalake
* [Open Source](https://www.youtube.com/watch?v=5I5pqDsvGEc&list=PLx0E0XfaCr-Y4MZJ0up77VPDbcSVX3xwX&index=15)


---

# Data Bricks Delta
* [ACID](https://docs.azuredatabricks.net/delta/isolation-level.html) transactions on data lakes
* Schema enforcement
* Mixing streaming and Batch
* Scalable metadata handling
* Time Travel Capabilities
* 10X speed improvement

---
# Spark SQL
* Abstraction Layer over Spark Core
* Along with Python allows [Table Access Control](https://docs.databricks.com/administration-guide/admin-settings/table-acls/table-acl.html)

![full](https://microshak.github.io/MicroNotes/Images/BigData/SparkSQL.jpg)
---

# Charts
* Charts tell a story about data
  * Data has context 
  * Gives data insights
  * Help discover meaning of data

---
#Charts show

* Relationship
* Comparion
* Composition
* Distribution

---
* Bar Chart
    * Shape of data
    * Trends

---
![full](https://microshak.github.io/MicroNotes/Images/BigData/BarChart.jpg)
---
# Scatter Plot
### Relationship between 2 variables
![left](https://microshak.github.io/MicroNotes/Images/BigData/ScatterPlot.png)

---
# Line Chart
### Changes Over Time
  ![left](https://microshak.github.io/MicroNotes/Images/BigData/line-chart.png)

---

# Pie Chart
## Show Percentage of whole
 ![left](https://microshak.github.io/MicroNotes/Images/BigData/pie-chart.png)


---


# Area Charts
### Show Changes Over Time
### Stacked to show percentage of whole
 ![left](https://microshak.github.io/MicroNotes/Images/BigData/area-chart.png)

---

# [Quantile](https://www.youtube.com/watch?v=IFKQLDmRK0Y) Plot
***  Help determine population shape by spitting data into segments(quantiles)***
```Common Quantiles:(25%, 50%, 75%)(33%, 66%)(5%, 95%)(%)```
![left](https://microshak.github.io/MicroNotes/Images/BigData/quartile.png)
---

#Q-Q Plot (Quantile - Quantile Plot)
### Determine if 2 datasets come from populations with similar distributions
 ![left](https://microshak.github.io/MicroNotes/Images/BigData/qq.jpg)
---
 ![full](https://microshak.github.io/MicroNotes/Images/BigData/graphs.jpeg)


---
# Recap
* Different Methodologies of Validating Data
* Charting Tools to Understand Data
* Spark Tools to work with data

---


# In-class Exercise

1. git clone https://github.com/Microshak/Databricks/tree/master/Veracity
2. Upload your own data
3. Run Chart Frequency Exercise

---

# In This session
* Bias
* Root Cause Analysis
* Probabilities
* Descriptive Statistics
* Correlation

---

# Journey to Knowledge
* Knowledge is Actionable Information
* Machine Learning != Magic Learning
* Discovering the Rooted Truth

---

# Bias
* Design Bias
* Selection Bias (aka the reason we have  randomized double-blind placebo control studies)
   * Example: [Skull Size Research](http://blogs.discovermagazine.com/crux/2018/10/31/morton-skulls-brain-size-controversy/#.XL-orHX0mV4)
  * [Selection Bias](https://www.math.upenn.edu/~deturck/m170/wk4/lecture/case1.html)
* Procedural Bias
* Confirmation Bias
  * Confirmation bias occurs when a researcher takes the hypothesis that he or she starts out with ("marijuana is beneficial/detrimental") and shapes the study methodology or results to confirms that premise, whether or not it’s actually justified. 
  * Example: Discovery of [N-Rays](https://www.aps.org/publications/apsnews/200708/history.cfm)
* Implicit Bias (I'm Great)

---
# Root Cause Analysis
Looks for Underlying Cause
1. Problem statement
    1. What
    1. Where
    1. When 
    1. To what Extent
    1. How Do I know

2. 5 Whys
   1. Why
   2. Why
   3. Why
   4. Why
   5. Why

---

# Descriptive Statistics
* [Summary Statistics](https://github.com/Microshak/Databricks/tree/master/Veracity)
* [Frequency Charts](https://github.com/Microshak/Databricks/tree/master/Veracity)
* [3D Charts](https://github.com/Microshak/Databricks/tree/master/Veracity)

---

# Coefficent of Correlation
### The relationship between 2 variables
[Correlation](https://github.com/Microshak/Databricks/tree/master/Veracity)


---

# Recap
We have Talked about 
* Summary Statistics
* Frequencies
* Charting
* Correlation


Google trends can predict an outbreak 2 weeks before the CDC.
