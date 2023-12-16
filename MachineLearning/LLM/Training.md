# LLM Training Lanscape

# Fine Tuneing

1. Repurposing a pre-trained text-generating LLM for a different type of application, such as sentiment analysis
    a. changing the architecture of the LLM (e.g., freezing the attention layers of the transformer model while training the task-specific layer on top of the pre-trained model).
1. Unsupervised Finetuning uses unstructured dataset and updates the knowledge of LLM to a specific domain (e.g., medical, legal, etc.), essentially adjusting the model from source domain to the target domain.
1. Supervised Finetuning (SFT) uses high-quality question-answer pairs to finetune the model for human-preferred generation.  Instruction-tuning is a subset of SFT, guiding the LLMs to follow the chain-of-thought similar to human’s.
1. Reward Model (RM) Finetuning: similar to SFT, it also uses prompt-response pairs. Yet here, each batch of data consists of two prompt-response pairs — the same prompt but one with higher-score response and another with lower-score response. Here, the LLM learns to predict consistent with the preference, i.e., higher-score response.

# RAG Retrieval-Agumented Generated
Models often have undesirable behavior.  LLM gives no source(hop of head) answers.  Data can have
1. No Source
2. Out of date
RAG lets you ground your answers with a content store
## RAG Steps

1. User queries LLM
2. LLM looks up info in data store
3. LLM combines data from store to give user answer.
