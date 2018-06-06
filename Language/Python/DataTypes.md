# Data Types

## List

```python
stack = ['a','b']
stack.append('c')
#['a', 'b', 'c']
stack.append(['d', 'e', 'f'])
#['a', 'b', 'c', ['d', 'e', 'f']]
stack.extend(['d', 'e','f'])
#['a', 'b', 'c', 'd', 'e', 'f']

```


```python
 my_list.index('b')
my_list.insert(2, 'a')
my_list.pop()
my_list.sort()
my_list.sort(reverse=True)
my_list.reverse()

my_list = [1]
my_list += [2]
# [1, 2]

my_list = my_list * 2
#[1, 2, 1, 2]
############
 my_list.index('b')
# 2
 my_list.index('b')
# 2
```



## List comprehension
```python
[i for i in range(10) if i % 2 == 0]
#[0, 2, 4, 6, 8]

```

## Filtering
```python
li = [1, 2]
[elem for elem in li if elem>1]
#[2]
```

# Tuple
```python
 l = (1,2,3,1)
 l.count(1)
 # 2
 l = 1, 2

 ## As key value pairs
d = dict([('jan', 1), ('feb', 2), ('march', 3)])
d['feb']
# 2

(x,y,z) = ('a','b','c')
x
#'a'

```


