
# Big Data 230 Week 5 Value 


> SOMETIMES THE QUESTIONS ARE COMPLICATED AND THE ANSWERS ARE SIMPLE

> Dr. Seuss


---
# Before Class
* Bigdata History
* Nifi

---
# Big Data History
* 2004 - Google Published paper on MapReduce 
* Started at Yahoo to serve adds in a distributed fasion
* 2004 - MapReduce Framework released
    -  programming model and an associated implementation for processing and generating big data sets with a parallel, distributed algorithm on a cluster
* 2006 - HDFS (Hadoop Distributed File System) becomes Apache Project

---
# What is Mapreduce
* Map
  * Worker node that turns files into key value pairs.
  * Map Task can aggregate key value pairs. 
* Reducer 
  * Takes all of the map task results and aggregates them.

---
# Big Data History

* 2007 - HBase, an open-source, non-relational, distributed database runs on top of HDFS.
* 2008 - Pig

---
# What is Pig?
* High level abstraction over map reduce
* Uses a language called Pig Latin
* Uses DAGs to transform data
* Operations in 2 flavors
  * Algebraic style operations such as join and filter
  * Functional Programming with map and reduce 

---
# Big Data History

* 2009 - Spark
* 2010 - Hive
* 2014 - Spark - Apache Project
---

# Nifi
[Nifi Tutorial](https://microshak.github.io/MicroNotes/Notes.html?path=BigData/ETL/Nifi)

---

# In this class
* Sampling
* Anomaly Detection
* Feature Engineering with Time Series Data

---

# In this Section
* Value from Data
* Turning Big data into Small Data
* Key Concepts of Getting Value
  * Populations
  * Sampling
  * Outlier Detection 
  * Preparing Data for Analysis
---

# Value From our Data
* Understanding Data
* Predicting The Future
* Detecting Issues
* Function Approximation
* Proactive and Reactive analytics

---
# Common Apples to Apples Techniques
* Mean (Average Number)
* Median (Middle Number)
* Mode (Number that occurs the most)
* Max
* Min

---

![full](https://microshak.github.io/MicroNotes/Images/BigData/population_sample.png)

---
# Why Sample
* Compute is expensive and Slow
* More data does not mean better results
* Populations typically are used to represent the whole in statistics and ML

---

# [Normal Distributions](https://www.mathsisfun.com/data/standard-normal-distribution.html)
* Have a percentage
* Standard Deviation
* Have a "normal" shape
![full](https://microshak.github.io/MicroNotes/Images/BigData/normal-distrubution-large.svg) 

---

# [Standard Deviation](https://www.mathsisfun.com/data/standard-deviation.html)
* Measure of Spread of Data
* Low number means it is tightly clustered around the mean
* High number means the data is more spread out
* Is the Square Root of the Variation
* **Uses**
  * Determine if a data point is standard (expected)
  * Determine if a data point is not standard (unexecuted)

---

# Confidence Intervals
* Z-Scores
* Tells us the percentage of values to that lie outside the range
* Allows us to compare apples to oranges comparison
  * Example SAT scores VS ACT score
---

# Why Detect Outliers

![full](https://microshak.github.io/MicroNotes/Images/BigData/impact-of-outliers.png) 

---

# [Case Study](https://www.amazon.com/Quants-Whizzes-Conquered-Street-Destroyed/dp/0307453383)
* Stock market crash of 2008
* Highspeed trading
* Sampling assumed outliers were random and removed outliers
* Data Scientist saw low risk in over leveraging 
---
# Turning Big data into Small Data

Simple Sampling
* With Replacement
  * When you sample with replacement, your two items are independent. In other words, one does not affect the outcome of the other. 
* Sample Size
* Seed
  * A number that allows you to repeat the experiment.  
* Outlier Detection

---

# Recap
We Learned about 
* Distributions
* Outliers
* Sampling Data

---

# In Class Excessive
**[Sampling Example](https://github.com/Microshak/Databricks/blob/master/Value/Sampling.dbc)**

---


# We will learn
- Anomaly Detection

---
# Data Science
* ~~Byasian~~
* **Unsupervised**
* Supervised
* ~~Reinforcement Learning~~
* ~~GAN~~
  
---


# Anomaly Detection Conceptually

* **Positive and negative trends:** For example, when monitoring memory usage in computing an upward trend may be of interest as it may be indicative of a memory leak

* **Changes in the dynamic range of values:** For example, when monitoring the exceptions thrown by a cloud service, any changes in the dynamic range of values could indicate instability in the health of the service

* **Spikes and Dips:** For example, when monitoring the number of login failures in a service or number of checkouts in an e-commerce site, spikes or dips could indicate abnormal behavior

---



# Anomaly Detection
* Outlier Detection (Standard Deviation)
* Spike Detection (&#9651; σ)‍
* K-Means
    * [K-Means Number of Centroids](https://github.com/Microshak/Databricks/blob/master/Value/KMeansNumberOfCentroids.dbc)
    * [K-Means Shape Assumption](https://github.com/Microshak/Databricks/blob/master/Value/KMeansAssumptions.dbc)

* [Mean Shift](https://notebooks.azure.com/microshak2/projects/Veracity/html/Anomaly%20Detection/MeanShift.ipynb)

[Reference](https://github.com/yzhao062/anomaly-detection-resources#43-graph--network-outlier-detection)

---
# Real Applications

![left](https://microshak.github.io/MicroNotes/Images/BigData/normal-distrubution-large.svg)
![right](https://microshak.github.io/MicroNotes/Images/BigData/RealtimeMonitoring.jpg)

---
# Recap
* Anomaly Detection is can show something is out of place
* Anomaly detection can be based on time or mean based
* Anomaly Detection can't tell us what is wrong
---

# In this Section
* Feature Engineering
* Leveraging Time based Feature Engineering Operations
---


# Feature Engineering 
* Mining Exiting Data
* Time Based
    * Seasonal
    * Monthly
    * Time of Day
    * Moving Averages
* Last Order Based
* Reduce Dimensionality
* Codify

---

# ML Process
* Define Problem
* Obtain Data


* Select
* Clean
* **Transform and Enrich**


* Model Selection
* Tuning and Evaluation
* Feedback
---
# Transforming and Enriching
* Build Features from Features
  * Add
  * Subtract
  * Ratios
* Relational Deference
* Encoding Categorical Values
* Scaling Numerical Values
---

# Decomposition
* Sometimes our feature are too complex
* Factor Analysis
  * Quartiles
  * ZScores
  * Deviation/Variance
  * Outliers

---
# One Hot Encoding
* [One-Hot Encoding](https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/2799933550853697/3911469456159528/2202577924924539/latest.html)
  * Turn Categories or Numerical Category into Binary Representation 

```json
Efficient Encoding
1:Becky
2:Jenny
3:Jim
One Hot Encoding
[0,0,1] =Becky
[0,1,0]= Jenny
[1,0,0]= Jim

```
---
# Finding Features
1. Use Domain Knowledge
2. Discover Factors
   1. Form Hypothesis
   2. Charting
   3. Factor Analysis
3. Meta Features 
   1. Models that Make Feature for other Models
   2. Risks [Inductive Bias](https://en.wikipedia.org/wiki/Inductive_bias)


---
# [Climage Change](https://en.wikipedia.org/wiki/List_of_scientists_who_disagree_with_the_scientific_consensus_on_global_warming)

![full](https://microshak.github.io/MicroNotes/Images/BigData/ClimateWarming.png)

---

# Time Series
* Lag - Record Before
* Lead - Record After
* Rank - Sequential Value
* [Windowing Functions](https://github.com/Microshak/Databricks/blob/master/Value/LagLead.dbc) [ref](https://jaceklaskowski.gitbooks.io/mastering-spark-sql/spark-sql-functions-windows.html#cume_dist) 
* [Time Series](https://github.com/Microshak/Databricks/blob/master/Value/TimeSeries.dbc)


---
# Flint
* TimeSeriesRDD
* Group by Cycle
* Group by Interval
* leftJoin - temporal join
* futureLeftJoin - inexact leftJoin (with tolerance)
* Summarize
  * Cycle
  * Interval
  * Window

* [Flint](https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/1281142885375883/1566406256250190/7729323681064935/latest.html?_ga=2.83809808.761276419.1557433735-322737440.1557433735) [ref](https://databricks.com/blog/2018/09/11/introducing-flint-a-time-series-library-for-apache-spark.html)

---
# Recap
* Feature Engineering is the process of Engineering new data from existing data
* Time Series techniques can help add new features to a data.  Examples:
  * Comparing the previous number to new number
  * Averaging over a time window
  * Converting Time into component elements such as Month or Day
  * Adjusting for Seasonality
* Adding meta data can enrich the data 


