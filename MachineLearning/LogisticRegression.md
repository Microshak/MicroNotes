Linear Regression is good for when the prediction range falls between 0 and 1
    If they dont we could cap.  But that introduces bias

If the model has extrems that would fall outside of linear regression than Logistic regression

---
Logistic Regression
Prediction method that gives us well calibrated probabilities
Take our model and put it into a Sigmoid
    A sigmoid always gives us a bounded value between 0 and 1
      A sigmoid uses asimatopes so it never hits 0 and it never hits 1
      Instead of using square loss in linear regression we uses log loss 
      Because of asmatopes we will need regularization in our learning
      L2 regularization may help so that our models do not go out of bounds
