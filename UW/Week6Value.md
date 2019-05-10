
# Big Data 230 Week 5 Value 


> SOMETIMES THE QUESTIONS ARE COMPLICATED AND THE ANSWERS ARE SIMPLE

> Dr. Seuss


---
# In this class
* Sampeling
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

![full](https://microshak.github.io/MicroNotes/Images/BigData/population_sample.png)


---
# Why Sample
* Compute is expensive and Slow
* More data does not mean better results
* Populations typically are used to represent the whole in statistics and ML

---
# [Case Study](https://www.amazon.com/Quants-Whizzes-Conquered-Street-Destroyed/dp/0307453383)
* Stock market crash of 2008
* Highspeed trading
* Sampling assumed outliers were random and removed outliers
* Data Scientist saw low risk in over leveraging 

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
* Hi number means the data is more spread out
* Is the Square Root of the Variation
* **Uses**
  * Determine if a data point is standard (expected)
  * Determine if a data point is not standard (unexecuted)

---

# Confidence Intervals
* Z-Scores
* Tells us the percentage of values to that lie outside the range
---

# Why Detect Outliers

![full](https://microshak.github.io/MicroNotes/Images/BigData/impact-of-outliers.png) 

---
# Turning Big data into Small Data

Simple Sampling
* With Replacement
* Sample Size
* Seed
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

* **Positive and negative trends:** For example, when monitoring memory usage in computing an upward trend may be of interest as it may be indicative of a memory leak,

* **Changes in the dynamic range of values:** For example, when monitoring the exceptions thrown by a cloud service, any changes in the dynamic range of values could indicate instability in the health of the service, and

* **Spikes and Dips:** For example, when monitoring the number of login failures in a service or number of checkouts in an e-commerce site, spikes or dips could indicate abnormal behavior.
---

# Anomaly Detection
* Outlier Detection (Standard Deviation)
* Spike Detection (&#9651; σ)‍
* K-Means
    * [K-Means Number of Centroids](https://github.com/Microshak/Databricks/tree/master/Value)
    * [K-Means Shape Assumption](https://github.com/Microshak/Databricks/tree/master/Value)

* [Mean Shift](https://notebooks.azure.com/microshak2/projects/Veracity/html/Anomaly%20Detection/MeanShift.ipynb)

[Reference](https://github.com/yzhao062/anomaly-detection-resources#43-graph--network-outlier-detection)
---
# Real Applications

![left](https://microshak.github.io/MicroNotes/Images/BigData/normal-distrubution-large.svg)
![right](https://microshak.github.io/MicroNotes/Images/BigData/RealtimeMonitoring.jpg)

---
# Feature Engeneering
* Mining Exiting Data
* Time Based
    * Seasonal
    * Monthly
    * Time of Day
    * Moving Averages
* Reduce Dimensionality
* Codify

---
# Time Series
* [Windowing Functions](https://github.com/Microshak/Databricks/tree/master/Value) [ref](https://jaceklaskowski.gitbooks.io/mastering-spark-sql/spark-sql-functions-windows.html#cume_dist) 

* [Flint](https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/1281142885375883/1566406256250190/7729323681064935/latest.html?_ga=2.83809808.761276419.1557433735-322737440.1557433735)


* [Time Series](https://github.com/Microshak/Databricks/tree/master/Value)


---
