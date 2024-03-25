# Testing LLMs
## Tools
[Ragas](https://docs.ragas.io/en/stable/)
MLFlow
---
# LLM Metrics
* LLM Metric leaderboards can be misleading
* [phi-CTNL](https://arxiv.org/pdf/2309.08632.pdf) "Pretraining on the Test Set is ALL You Need"

---
# Levels with testing
1. Vibe Check 
2. [Genba walk](https://en.wikipedia.org/wiki/Gemba)
3. Testing Frameworks

---
# Why Test
* Time
* Metrics Driven Development
* Evaluation 
* Monitoring

---
# Test Data Generation

## Data Augumentation
 * extract fields from data to generate new data

# Text Data Augmentation
* Solve the problem of not engough data.
* extracts data from text
* Rewords the data

---

# LLM-Augmentated Data Generation
* Solve problem not enough data
* Generates entire new datasets based on prompts

## Steps
* Balance Dataset (equal categories either additive or subttraction)
* Create Synthetic data by feeding the origional dataset into the LLM to obtain and augmentation one


---
![full](https://docs.ragas.io/en/stable/_static/imgs/component-wise-metrics.png)



