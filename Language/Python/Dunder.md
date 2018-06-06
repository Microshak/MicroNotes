# Dunder Methods
a.k.a Data Model, Magic Methods

They are special methods that implements operator overloading

## Basic methods
```python
Class Employee:
    __inti__():
    # initialize aka constructor

    __repr__():
    # Should be used for debugging and logging

    __str__():
    # Should be used as a display to the end user

```


## Extra Methods
```python
Class Employee:
    __len__(self):
    

```

## to iterate 
Iteration: __len__, __getitem__, __reversed__

## Operator Overloading for Comparing:  

```python
Class Employee:
    __eq__():

    __lt__():

    

```

## Operator Overloading for Merging:  
```python
Class Employee:
    __add__():
    

```

## Callable Python Objects:

```python
Class Employee:
    def __call__(self):
        #some code
    
#e = Employee(x,x,x)
# e()

```


# Context Manager Support and the With Statement:  __enter__, __exit__

```python
Class Employee:
    __enter__()) 
    __exit__()
        ##These are spicial dunders that allow you to use the with statment when calling them to keep track of context (state). This allow you t6o roll back if error

```
