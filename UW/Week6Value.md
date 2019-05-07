
# Big Data 230 Week 5 Value 

> Difference between machine learning and AI:
>  If it is written in Python, it's probably machine learning
> If it is written in PowerPoint, it's probably AI 
> -Mat Velloso

---
# In this Section
* Value from Data
* Turning Big data into Small Data
* Key Concepts of Getting Value
  * Populations
  * Sampeling
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
# [Case Study](https://www.amazon.com/Quants-Whizzes-Conquered-Street-Destroyed/dp/0307453383)
* Stock market crash of 2018
* Highspeed trading
* Sampeling asumed outliers were random and removed outliers
* Data Scientist saw low risk in over leveraging 

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
* Hi number means the data is more spread out
* Is the Square Root of the Variation
* **Uses**
  * Determin if a data point is standard (expected)
  * Determin if a data point is not standard (unexected)
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

**[example](https://github.com/Microshak/Databricks/tree/master/Value)**
Outlier Detection 
Sampeling
---

# Recap
We Learned about 
* Distributions
* Outliers
* Sampling Data
---
# We will learn
- Anomaly Detection


# Data Science
* Biasian
* Unsupervised
* Supervised
* ~~Reinforcement Learning~~
* ~~GAN~~
  
---




# Practical Data Science
* 
* Anolaly Detection
* 

# Accruaacy
Precision
Recall 
Confusion Matrix

# Feature Extraction Time Series
TFLean - Extrect time series dataset 
    - Moving Averages
    - ect

# Dealing with Imballanced Data Sets



# Anomaly Detection Conceptually

* **Positive and negative trends:** For example, when monitoring memory usage in computing an upward trend may be of interest as it may be indicative of a memory leak,

* **Changes in the dynamic range of values:** For example, when monitoring the exceptions thrown by a cloud service, any changes in the dynamic range of values could indicate instability in the health of the service, and

* **Spikes and Dips:** For example, when monitoring the number of login failures in a service or number of checkouts in an e-commerce site, spikes or dips could indicate abnormal behavior.
---

# Anomaly Detection
* Outlier Detection (Standard Deviation)
* Spike Detection (&#9651; σ)‍
* K-Means
    * [K-Means Shape Assumption](https://veracity-microshak2.notebooks.azure.com/j/notebooks/Anomaly%20Detection/K-Means%20Shape%20Assumptions.ipynb)
    * [K-Means Number of Centroids](https://veracity-microshak2.notebooks.azure.com/j/notebooks/Anomaly%20Detection/K-Means%20Number%20of%20Centroids.ipynb)
* K-Nearest Neighbors
* [Mean Shift](https://veracity-microshak2.notebooks.azure.com/j/notebooks/Anomaly%20Detection/MeanShift.ipynb)

---
# Classifiers
* Supervised Learning
* Binary Classifiers
* Multi-class Classifiers
* ~~Time Series~~
* ~~Vision~~
* ~~Speach~~

---
# Algorithm Score

* **Accuracy:** measures the goodness of a classification model as the proportion of true results to total cases.

* **Precision :** proportion of true results over all positive results.

* **Recall:** is the fraction of all correct results returned by the model.

* **F-score** is computed as the weighted average of precision and recall between 0 and 1, where the ideal F-score value is 1.

* **AUC** measures the area under the curve plotted with true positives on the y axis and false positives on the x axis. This metric is useful because it provides a single number that lets you compare models of different types.

* **Average log loss** is a single score used to express the penalty for wrong results. It is calculated as the difference between two probability distributions – the true one, and the one in the model.

* **Training log loss** is a single score that represents the advantage of the classifier over a random prediction.

# When to use
Accuracy bad in unballanced datasets.
Use Persision and Recall


How much we value persision vs recall?


F1 score waited persision vs recall equally

F Score when we value persision vs recall


 ---
# Confusion Matrix
Predicted label and true label

# Ways to drive bad numbers down
* density of predictions
* change hyper parameters
* Add freatures


 #Binary Classifier
 https://www.digitalocean.com/community/tutorials/how-to-build-a-machine-learning-classifier-in-python-with-scikit-learn

 https://towardsdatascience.com/building-a-deployable-ml-classifier-in-python-46ba55e1d720

 https://towardsdatascience.com/building-a-logistic-regression-in-python-step-by-step-becd4d56c9c8




# Multi Class Classifier




# ROC
https://machinelearningmastery.com/roc-curves-and-precision-recall-curves-for-classification-in-python/

# Databricks
https://docs.databricks.com/spark/latest/mllib/binary-classification-mllib-pipelines.html



# Regression


* **Regression analysis** is a statistical process for estimating the relationships among dependent and independent(predictor) variables.

* Regression analysis is widely used for prediction and forecasting,
 can be used to infer causal relationship (can lead to error: correlation does not imply causation)

* regression may refer specifically to the estimation of continuous response variables, as opposed to the discrete response variables used in classification


TODO 
Notebook regression

TODO 
PCA
https://medium.com/sfu-big-data/principal-component-analysis-deciphered-79968b47d46c



Notes:
[A Tutorial on Principal Component Analysis](https://arxiv.org/pdf/1404.1100.pdf)
