  # Python ranges start at 0 and don't include the last number
for num in range(1001):

    # try to create a new object
    num_copy = num * 1

    if num is num_copy:
        print(num, "is a singleton")
    else:
        print(num, "is not a singleton")