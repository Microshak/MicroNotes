
> Difference between machine learning and AI:
> If it is written in Python, it's probably machine learning
> If it is written in PowerPoint, it's probably AI 
> 
> Mat Velloso


---
# In this class
* Binary Classifiers
    * Logistic Regression
    * Decision Trees
    * Simple Artificial Neural Networks


---



# Road Map
* Basic Concepts
* Supervised Learning
* Logistic Regression


---
# An Example Application
* A hospital puts a baby monitor on a newborn they measure 17 variables (blood pressure, age, heartrate)
* ***A decision is needed:*** whether to alert the nurses of distress.
* Solution: based on data from other infants where were in distress they used a classifier to alert the nurses.

---
# Two Flavors Classifiers
* **Binary Classifiers** - Classifies between 2 things
* Multi-class Classifiers - Classifies between many things

![full](https://microshak.github.io/MicroNotes/Images/ML/binarVSmulticlass.png)

---

# Classifiers work on
* Data
* Images
* Sound
* Video


---

# Regression
* **Regression analysis** is a statistical process for estimating the relationships among dependent and independent(predictor) variables.

 
* Can be used for:
  * Inferring causal relationship 
  * Predictions
  * Forecasting


---
# Linear Regression

![full](https://microshak.github.io/MicroNotes/Images/ML/linearregression.jpg)

---
# Logistic Regression
![full](https://microshak.github.io/MicroNotes/Images/ML/logisticregression.png)

---
# Logistic Regression
* When you need to make a binary decision 
* Great when the data is simple
* Great as a base line for other ML algorithms
* One of the most commonly used algorithms for Binary Classification

---
# In Class Exercise
[Exercise](https://github.com/Microshak/Databricks/blob/master/SmartData/LogisticRegression.dbc)
![full](https://microshak.github.io/MicroNotes/Images/Mike/Providence.png)

---

# Algorithm Score

* **Accuracy:** measures the goodness of a classification model as the proportion of true results to total cases.

* **Precision :** proportion of true results over all positive results.

* **Recall:** is the fraction of all correct results returned by the model.

* **F-score** is computed as the weighted average of precision and recall between 0 and 1, where the ideal F-score value is 1.

* **Support** the number of samples of the true response that lie in that class.

---
# Algorithm Score

* **ROC (Receiver Operating Characteristics) Curve** is created by plotting the true positive rate against the false positive rate.
  
* **AUC** measures the area under the curve plotted with true positives on the y axis and false positives on the x axis. This metric is useful because it provides a single number that lets you compare models of different types.

* **Average log loss** is a single score used to express the penalty for wrong results. It is calculated as the difference between two probability distributions – the true one, and the one in the model.

* **Training log loss** is a single score that represents the advantage of the classifier over a random prediction.


---

# In class Exercise

[Exercise](https://github.com/Microshak/Databricks/blob/master/SmartData/DecisionTree.dbc)
---

# Precision
### **Precision** attempts to answer the following question:
> What proportion of positive identifications was actually correct?



```math
Precision = TP/(TP+FP)
```

---
# Recall
### **Recall** attempts to answer the following question:

> What proportion of actual positives was identified correctly?

```math
Recall = TP/(TP+FN)

```

---



# When to use Accuracy vs Precision and Recall

Accuracy bad in unbalanced datasets.

Use Precision and Recall

```txt
What is an unbalanced dataset?
Total Observations = 1000
Fraudulent  Observations = 20
Non Fraudulent Observations = 980

Event Rate= 2 %

```

---

# Should I use Precision or Recall?

* F1 score waited Precision vs Recall equally
* F1 score is the harmonic average of Precision and Recall
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
# Three Things
* Logistic regression is a good choice when:
    * You have a simple data set
    * You need a binary decision
    * When you want to predict something or gain further insights on data
* To make a binary Classifier you need to:
  * Preparing the data
  * Performing the classifier
  * Judging the results
* Understanding your tolerance for TP, FN, FP, TN can help you choose the right classifier


---
# In this section
* Decision Trees
* Random Forrest
* Roc Curves/AUC

---
# Decision Trees

* Binary Classifier
* Use when the data is complex

---
# Radial Boundary Data Set
![left](https://microshak.github.io/MicroNotes/Images/ML/lr_boundary_radial.png)
![right](https://microshak.github.io/MicroNotes/Images/ML/model_boundary_radial.png)


---
# Linear Boundary Data Set
![left](https://microshak.github.io/MicroNotes/Images/ML/lr_boundary_linear.png)
![right](https://microshak.github.io/MicroNotes/Images/ML/model_boundary_linear.png)

---
# ROC Curve/AUC

When making a prediction for a binary or two-class classification problem, there are two types of errors that we could make.

False Positive. Predict an event when there was no event.
False Negative. Predict no event when in fact there was an event.

> True Positive Rate = True Positives / (True Positives + False Negatives)

> False Positive Rate = False Positives / (False Positives + True Negatives)

Sensitivity = True Positive Rate 
Specificity =  False Positive Rate 

---
<iframe src="docs/roc.html" style="height:600px;">
</iframe>
---

# Random Forrest
* Random forests is a set of multiple decision trees.
* Deep decision trees may suffer from overfitting, but random forests prevents overfitting by creating trees on random subsets.
* Decision trees are computationally faster.
* Random forests is difficult to interpret, while a decision tree is easily interpretable and can be converted to rules.


---

# Overfitting/Underfitting
![full](https://microshak.github.io/MicroNotes/Images/ML/overunder.png)


---





# Other methods
* ML on the images directly [link](https://www.pyimagesearch.com/2019/02/18/breast-cancer-classification-with-keras-and-deep-learning/)
* Principle Component Analysis (PCA) [link](https://towardsdatascience.com/dive-into-pca-principal-component-analysis-with-python-43ded13ead21)
* K-Nearest Neighbor [link](https://www.kaggle.com/georgiost77/breast-cancer-machine-learning-prediction)
* Deep Learning

---

# Three Things
* Decision Trees can help classify a problem when data is complex
* There are different types of decision trees such as Random Forests with different characteristics. 
* ROC Curve/AUC can help you determine the your threshold for false positive and false negatives
---
# In this Section
* Deep Learning
* Artificial Neural Networks    
  * Activation Functions
  * Drop Out
  * Sparse/Dense
 * Tensorflow
 * Types of artificial Neural Networks

---
# History of Machine Learning

* 1950 - Touring Test
* 1951 - First AI Program
* 1955 - First AI Game play created
* 1958 - first [Preceptron](https://en.wikipedia.org/wiki/Perceptron) and Activation 



---
# Neural Networks
### Artificial Neural Networks are roughly based on our brains Neural Network.
* Multi Node are interconnected
* Signals can pass through these nodes
* Has a hierarchical structure
* When we model rules on computers we get similar results to humans
---
![full](https://microshak.github.io/MicroNotes/Images/ML/Neuronanimation.gif)
---

![full](https://microshak.github.io/MicroNotes/Images/ML/simple.gif)
---
![left](https://microshak.github.io/MicroNotes/Images/ML/neural_network.png)
---
![left](https://microshak.github.io/MicroNotes/Images/ML/Mark_I_perceptron.jpeg)
---
#### RULES
1. Start off with a Perceptron having random weights and a training set
2. For the inputs of an example in the training set, compute the Perceptron’s output
3. If the output of the Perceptron does not match the output that is known to be correct for the example: * If the output should have been 0 but was 1, decrease the weights that had an input of 1. * If the output should have been 1 but was 0, increase the weights that had an input of 1.
4. Go to the next example in the training set and repeat steps 2-4 until the Perceptron makes no more mistakes

---
#### Rules more simply
1.  Input X Weights + Bias
2.  Apply Activation Function
3.  Pass Value to Next Layer
4.  On Final Layer find errors and Update Weights of previous layers

---

# Activation Function
### Problem with Machine Learning
Any Series of matrix multiplication can be condensed down to one matrix multiplication.

Activation Functions are non linear functions that prevent condensing.


Must complex data has non linearity

---
# Activation Function  - Sigmoid
Takes some number and squashes it between 0 and 1.
0 means no fire
1 means fire

 **Problems with Sigmoid Functions**
 1. Causes vanishing gradient (makes no data fill fire)
 2. Causes exploding gradients(makes all data fire)

---
# Activation Function  -  TanH
* Squashes the number between 1 and -1 
* Easier to train than Sigmoid but also has the vanishing gradient problem

---
# Activation Function  -  ReLU (Rectified Linear Unit)
* Popular 
* Simple 
* Fast
* Rules
  * Linear where X is > 0
  * 0 when X > 0
* Avoids vanishing gradient problem
* Simple but has a 6X improvement over Tanh on Imagenet classification.
* Has many variations
* **Only used for hidden layers**
---
# Activation Function  -  Leaky ReLU
* Issue on ReLu negative numbers turn into 0.  A large update can make the neuron die.  No activation.
* Leaky ReLU introduces a small slope to keep the update alive
  ![full](https://microshak.github.io/MicroNotes/Images/ML/leakyrelu.png)

---

# Activation Function  -  SoftMax
* Squishes values between 0 and 1 like Sigmoid
* Makes sure all output values sum up to 1
* **Generally used for Output layers doing classification**
  ![full](https://microshak.github.io/MicroNotes/Images/ML/softmax.png)
---

# Drop Out
* Drop some data on each training loop which
  * Prevents over fitting
  * Encourages all the use of all nodes
---

# Loss Functions
A method of evaluating how well your algorithm models your dataset
May different types of Loss functions depending on what you are doing

* Mean Squared Error - Common evaluation takes difference between predictions and data
* Cross Entropy - Tries to minimize the entropy/prevents overfitting

---

#Optimizer
While Loss Functions tell you how far you are off Optimizer tell you how to reduce errors.
  ![full](https://microshak.github.io/MicroNotes/Images/ML/problematicOptomizer.gif)

Different way of surveying the land and pushing through local issues.

---

# Matrices
If there is a lot of 0s in your data then it is **Sparse**.

Else it is **Dense**

---
# Exercise
[Exercise](https://github.com/Microshak/Databricks/blob/master/SmartData/SimpleNeuralNetwork.dbc)

### Bonus
[Tensorflow Playground](https://playground.tensorflow.org/#activation=relu&batchSize=10&dataset=spiral&regDataset=reg-plane&learningRate=0.001&regularizationRate=0&noise=0&networkShape=8,7,7,5,2&seed=0.30542&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=true&xSquared=true&ySquared=true&cosX=false&sinX=true&cosY=false&sinY=true&collectStats=false&problem=classification&initZero=false&hideText=false)

---

# Regularization
Helps solve overfitting issue by penalizing your loss function by adding a multiple of L1 LASSO or L2 Ridge to weights.

---
# Learning Rate
* Learning rate controls how quickly or slowly a neural network model learns a problem.
* How to configure the learning rate with sensible defaults, diagnose behavior, and develop a sensitivity analysis.
* How to further improve performance with learning rate schedules, momentum, and adaptive learning rates.
---
# Learn More
* [ML Cheatsheet](https://ml-cheatsheet.readthedocs.io/en/latest/)
* [Awesome List](https://github.com/ChristosChristofidis/awesome-deep-learning)
* Ean Goodfellow's [Book](https://www.deeplearningbook.org)
* Andrew NG [Course](https://www.coursera.org/learn/machine-learning?utm_source=gg&utm_medium=sem&utm_content=07-StanfordML-US&campaignid=685340575&adgroupid=32639001341&device=c&keyword=coursera%20machine%20learning%20course&matchtype=b&network=g&devicemodel=&adpostion=1t1&creativeid=243289762778&hide_mobile_promo&gclid=Cj0KCQjww47nBRDlARIsAEJ34bk0cRqeO-zp-6v__lKcxMmY55uKAJQveZWzwerrUfMShH_6yWto_SUaAlxrEALw_wcB)
