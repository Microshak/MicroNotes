
* Bagging: Train multiple base models independently using bootstrapped samples, and combine their predictions through averaging or majority voting.
* Boosting: Train models sequentially, adjusting instance weights to focus on misclassified samples, and combine predictions using a weighted majority vote.
* Stacking: Train multiple base models, and use their predictions as input for a meta-model, which learns to combine them optimally.
* Blending: Similar to stacking, but use a validation set to train the meta-model instead of cross-validated predictions from base models.
* Weighted Averaging: Combine model predictions by assigning different weights to each model based on their performance or other criteria.
* Rank Averaging: Rank the predictions of individual models, average the ranks, and convert them back to predictions.
* Bayesian Model Averaging: Combine model predictions using Bayesian probabilities, considering both the model’s performance and uncertainty.
* Ensemble Selection: Train a large number of candidate models and select a subset with the best performance or diversity to create an ensemble.
* Majority Voting: Combine the predicted classes of multiple models by choosing the class with the highest vote count.
* Error-Correcting Output Codes (ECOC): Train multiple binary classifiers on subsets of the output classes and use the ensemble to predict multiclass problems.
