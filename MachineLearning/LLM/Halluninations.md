
Hallucinations in Large Language Models stem from data compression and inconsistency.

* Adjust the temperature parameter to limit model creativity.
* Pay attention to prompt engineering. Ask the model to think step-by-step and provide facts and references to sources in the response.
* Incorporate external knowledge sources for improved answer verification.

# Hallunination Types
* Logical fallacy - Reasoning mistakes
* Fabrication of Facts
* Data-driven bias - training data is biased.

# Benchmarks for evaluating hallucination

* Knowledge-oriented LLM Assessment benchmark (KoLA)
* TruthfulQA: Measuring How Models Mimic Human Falsehoods
* Medical Domain Hallucination Test for Large Language Models
* HaluEval: A Hallucination Evaluation Benchmark for LLMs

# Temperature
* A model’s temperature refers to a scalar value used to adjust the probability distribution predicted by the model
*  Balances between sticking to what the model has learned from the training data and generating more diverse or creative responses
*  Creative answers are more prone to hallucinations.
*  tasks that require veracity, strive towards an information-dense context, and set temperature=0 to get answers grounded in context


# Improving Accuracy in LLM
* Chain of Thought (CoT) - Think step-by-step prompt
* Self Consistency with CoT (CoT-SC) - Ask to give several answers and evaluate
* Tree of Thoughts (ToT) - self-evaluate intermediate steps
* Tagged Context Prompts - Tagged question sets creating context prompts with summaries
* Self-Correct model - double-check and criticize its results
* Several Agents - Multiple language model instances propose and debate their individual responses and reasoning processes over multiple rounds to arrive at a common final answer
* Use An External Knowledge Base
  * Retrieval-Augmented Generation (RAG)
  * Fine Tuning  




Ref
https://betterprogramming.pub/fixing-hallucinations-in-llms-9ff0fd438e33
