'''
We want to build a matrix of values, like a multiplication table. The output we want in this case should be a list of lists, like:

  [[1, 2, 3], [2, 4, 6], [3, 6, 9]]


'''
generator = (i for i in range(1, 4))
matrix = [[x * y for y in generator] for x in generator]
print(matrix)
#[[2, 3]] bad

iterator = [i for i in range(1, 4)]
matrix = [[x * y for y in iterator] for x in iterator]
print(matrix)
#[[1, 2, 3], [2, 4, 6], [3, 6, 9]] good