def func(*args):
    for i in args:
        print(i)  
func(3,2,1,4,7)



def kwfunc(**kwargs):
    for i in kwargs:
        print(i,kwargs[i])
kwfunc(a=1,b=2,c=7)