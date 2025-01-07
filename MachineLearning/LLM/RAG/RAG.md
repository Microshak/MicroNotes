# RAG
## Retrieval Augmented Generation

---


# Basics 
* Indexing
* Regrieval
* Generation

---

# Advanced 
* Query transformation
* Routing
* Query Construction
* Indexing 
* Retrieval
* Generation

---


# Query Translation
Take the origional input and have LLM rewrite it in a way that would be more consise for the RAG system

YOu could have it rewite the question in a few ways
* More Abstract
  * Just have it rewrite it
* Reciprical Rank Fusion
* Less Abstract 
  * Have it break down into smaller questions

---

# Challenges with Niave RAG
* Bad Retrieval
  * Low Wercision: not all  chunks in retrieved set are relivant
    * Hallucination + Lost in the Middle Problems
  * Low Recall: Now all relivant chunks are retrieved
    * Lakst enought context for LLM to synthesize answer
* Bad Response
  * Hollucinations: Model makes oup answer
  * Irrelevance: Model does not answer the question
 
---

# What can we do
* Data: Can we store additioanl information beyone raw text chunks
* Embeddings: Can we optomize our embeddings
* Retrieval: Can we do better than top-k embeddings lookup
* Sysnthesis: can us use LLMS for more than generation (Can we use to Reason)

# Techniques to fix issues
## Reciprical Rank Fusion
Rank Fusion is a Query Translation method that adds weights to the documents

Steps:
* Break down question into smaller set of questions
* Get back List of answers from each question
* Groupby and Count answers
* User the highest Count

## Query Decomposition
* Take a query and break it down into a set of subproblems
* Solve each problem individually

## Interleave Retrieval
Combines retrieval with CoT reasoning

