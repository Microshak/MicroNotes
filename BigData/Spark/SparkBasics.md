# 3 Main Components of Spark
* Execution Model
* The Shuffle
* Caching

---
# Execution Model
* Create a DAG of RDDs to represent computation
* Create a logical execution plan  for DAG
* Schedual and execute individual tasks

# Create a DAG of RDDs to represent computation
User Creates the RDD
```

```

# Create a logical execution plan  for DAG
Goal to execute efficently is to pipeline data
fuse common task together
we can keep pipeline until we have processed all thing toghether that will not effect the results
Then create a stage - Stage is a super operation of many operations


#Schedual and execute individual tasks
Spit eash stage into tasks 
Tasks is a bundle of work - it is independant of anything else
The tasks can be sent off to individual machines


# Shuffle
How Spark moves data across the network