'''Write a one-liner that will count the number of capital letters in a file. 
Your code should work even if the file is too big to fit in memory.

with open(SOME_LARGE_FILE) as fh:
    count =  # your code here
'''

import os
path = os.path.dirname(os.path.abspath(__file__)) 

with open(path + "/sample.txt") as fh:
    count =  sum(1 for line in fh for character in line if character.isupper())
    print (count)