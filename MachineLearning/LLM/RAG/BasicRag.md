# Basics 
* Indexing
* Regrieval
* Generation

![](/Images/RAG/RAGBasic.png)


# History 
## Origionally 
There was a way to take a doc and create sparse vectors 

## Now
We use embedding methods with search methods.


# How
* Load doc
* split doc
* Add embeddings
    * Each doc is compressed to a vector
    * Numerical comparison can  



## Euclidean Distance:

Calculates the straight-line distance between two points in a vector space, considering both magnitude and direction. 
Sensitive to the scale of the vectors (meaning if one vector is significantly larger than another, it will appear further away even if they are directionally similar). 
Useful when the actual distance between points is important, like in clustering applications. 

# Cosine Similarity:
Measures the angle between two vectors, focusing primarily on their direction and not their magnitude. 
Often used in text analysis and recommendation systems where the relative importance of features is more important than their absolute values. 
Calculated by taking the dot product of the normalized vectors. 

# Dot Product:
A mathematical operation that calculates the sum of the products of corresponding components of two vectors. 
Directly related to cosine similarity, as the cosine of the angle between two vectors can be calculated using the dot product of the normalized vectors. 
Can be used to measure similarity when the magnitude of the vectors is not a significant concern.