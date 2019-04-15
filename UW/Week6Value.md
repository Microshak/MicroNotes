> Difference between machine learning and AI:
>  If it is written in Python, it's probably machine learning
> If it is written in PowerPoint, it's probably AI 
> -Mat Velloso
---
# Value From our Data
* Understanding Data
* Predicting The Future
* Detecting Issues
* Function Approximation
* Proactive and Reactive analytics
---
# Data Science
* Unsupervised
* Supervised
* ~~Reinforcement Learning~~
* ~~GAN~~
  
---
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
