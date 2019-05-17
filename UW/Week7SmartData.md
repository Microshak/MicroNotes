
> Difference between machine learning and AI:
> If it is written in Python, it's probably machine learning
> If it is written in PowerPoint, it's probably AI 
> 
> Mat Velloso


Data Engineering for ML



# Linear regression
https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/8212401599125843/1970242992222722/2169675290918992/latest.html

# In this Section
1. Supervised Learning
    Classification
* Needs a repepresentive sample of codified results
* Is function approximation


---
# Accuracy
Precision
Recall 
Confusion Matrix

---


# Classifiers
* Binary Classifiers
* Multi-class Classifiers
* ~~Time Series~~
* ~~Vision~~
* ~~Speech~~

---
# Algorithm Score

* **Accuracy:** measures the goodness of a classification model as the proportion of true results to total cases.

* **Precision :** proportion of true results over all positive results.

* **Recall:** is the fraction of all correct results returned by the model.

* **F-score** is computed as the weighted average of precision and recall between 0 and 1, where the ideal F-score value is 1.

* **Support** the number of samples of the true response that lie in that class.



https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/4956263157365556/3053734569209167/3458139474939947/latest.html

* **AUC** measures the area under the curve plotted with true positives on the y axis and false positives on the x axis. This metric is useful because it provides a single number that lets you compare models of different types.

* **Average log loss** is a single score used to express the penalty for wrong results. It is calculated as the difference between two probability distributions – the true one, and the one in the model.

* **Training log loss** is a single score that represents the advantage of the classifier over a random prediction.


---
# Precision
### **Precision** attempts to answer the following question:
> What proportion of positive identifications was actually correct?



```math
Precision = TP/(TP-FP)
```

---
# Recall
### **Recall** attempts to answer the following question:

> What proportion of actual positives was identified correctly?

```math
Recall = TP/(TP+FN)

```

---



# When to use
Accuracy bad in unbalanced datasets.
Use Persision and Recall

```
What is an umbalnced dataset
Total Observations = 1000
Fraudulent  Observations = 20
Non Fraudulent Observations = 980

Event Rate= 2 %

```
---
# Should I use persision or recall?

* F1 score waited persision vs recall equally
* F1 score is the harmonic average of persision and recall
* 1 is best
* 0 is worst

 ---
# Confusion Matrix
Predicted label and true label

|                | Class 1 Predicted | Class 2 Predicted |
|:--------------:|:-----------------:|:-----------------:|
| Class 1 Actual | TP                | FN                |
| Class 2 Actual | FP                | TN                |

---







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




# Flask



