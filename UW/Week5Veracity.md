# Pre Discussion
* Bookending
* I Do, We Do, You Do
* Github

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
* Predictive Approaches
    * **Frequentist** ([probabilities](https://en.wikipedia.org/wiki/Frequentist_inference))
    * Byesian (Hypothesis Testing)
    * Neural Nets (ML)
---


# Byesian Hypothesis Testing
* Population Sampling
* Study Design
  * Review Boards
    * Ethics
    * validation
    * Bias
* Pilot Study
* Test Study
* Study

---

# IoT Journey to Value
* Duty Cycle
* Factor Analysis
  * Analysis of Variance
  * Time Series Analysis
* Feed Back Cycle
  * Right Sizing Data points
  * **Enriching Data**

---
# Business Value
* Confidence in ETL 
  * Record Operations
  * Dashboard Operations (Transparency)
  * Failure Handling
* Time Travel

---

# Delta Lake (a.k.a Data Bricks Delta)
* Unified Analytics Platform - Data and AI need to be on the same platform
* Challenges it Solves
  * Data Quality 
  * Difficult to Build Application on Your Datalake
* [Open Source](https://www.youtube.com/watch?v=5I5pqDsvGEc&list=PLx0E0XfaCr-Y4MZJ0up77VPDbcSVX3xwX&index=15)


---

# Data Bricks Delta
* [ACID](https://docs.azuredatabricks.net/delta/isolation-level.html) transactions on data lakes
* Schema enforcement
* Mixing streaming and Batch
* Scalable metadata handling
* Time Travel Capabilities

---
# Spark SQL
* Abstraction Layer over Spark Core
* Along with Python allows [Table Access Control](https://docs.databricks.com/administration-guide/admin-settings/table-acls/table-acl.html)

![full](https://microshak.github.io/MicroNotes/Images/BigData/SparkSQL.jpg)
---

# Charts

* Bar Chart
    * Shape of data
    * Trends
    ![left](https://microshak.github.io/MicroNotes/Images/BigData/BarChart.jpg)
* Scatter Plot
    * Relationship between 2 variables
   ![left](https://microshak.github.io/MicroNotes/Images/BigData/ScatterPlot.png)
* Line Chart
    * Changes Over Time
  ![left](https://microshak.github.io/MicroNotes/Images/BigData/line-chart.png)

---
Charts

* Area Charts
    * Show Changes Over Time
    * Stacked to show percentage of whole
 ![left](https://microshak.github.io/MicroNotes/Images/BigData/area-chart.pnt)

* Pie Chart
  * Show Percentage of whole
 ![left](https://microshak.github.io/MicroNotes/Images/BigData/pie-chart.png)


---
#Charts 
* [Quantile](https://www.youtube.com/watch?v=IFKQLDmRK0Y) Plot
  * Help determine population shape by spitting data into segments(quantiles)
  * Common Quantiles: (25%, 50%, 75%) (33%, 66%), (5%, 95%) (%)
![left](https://microshak.github.io/MicroNotes/Images/BigData/quartile.png)

* Q-Q Plot (Quantile - Quantile Plot)
  * Determine if 2 datasets come from populations with similar distributions
* Pivot
---
 ![full](https://microshak.github.io/MicroNotes/Images/BigData/graphs.png)


---
# Recap
* Different Methodologies of Validating Data
* Charting Tools to Understand Data
* Spark Tools to work with data

---


# In-class Exercise

1. git clone https://github.com/Microshak/Databricks/tree/master/Veracity
2. Upload your own data
3. Run Exercise

---

# In This session
* Bias
* Root Cause Analysis
* Probabilities
* Descriptive Statistics
* Probabilities
* Correlation

---

# Journey to Knowledge
* Knowledge is Actionable Information
* Discovering the Rooted Truth
* Machine Learning != Magic Learning

---

# Bias
* Design Bias
* Selection/Sampling Bias (aka the reason we have  randomized double-blind placebo control studies)
    * Omission Bias
    * Inclusive Bias
    * Example: [Skull Size Research](http://blogs.discovermagazine.com/crux/2018/10/31/morton-skulls-brain-size-controversy/#.XL-orHX0mV4)
* Procedural Bias
* Confirmation Bias
  * Confirmation bias occurs when a researcher takes the hypothesis that he or she starts out with ("marijuana is beneficial/detrimental") and shapes the study methodology or results to confirms that premise, whether or not it’s actually justified. 
  * Example: Discovery of [N-Rays](https://www.aps.org/publications/apsnews/200708/history.cfm)
* Implicit Bias (I'm/Great)

---
# Root Cause Analysis
Looks for Underlying Cause
1. Problem statement
    1. What
    Where
    When 
    To what Extent
    How Do I know

1. 5 whys

---

# Descriptive Statistics
[Summary Statistics](https://github.com/Microshak/Databricks/tree/master/Veracity)
[Frequency Charts](https://github.com/Microshak/Databricks/tree/master/Veracity)
[3D Charts](https://github.com/Microshak/Databricks/tree/master/Veracity)


---

# Coefficent of Correlation
* The relationship between 2 variables
[Correlation](https://github.com/Microshak/Databricks/tree/master/Veracity)


---

# Recap
We have Talked about 
* Summary Statistics
* Frequencies
* Charting
* Correlation


