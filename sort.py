# sort
arr = [ 10, 9 , 6 , 7 , 8 , 3, 5, 4, 1 , 2]

arr.sort()
print(arr)

tuples = [(1,2), (10, 1), (3, 10), (9, 10)]

def sortFunction(tuple):
  return tuple[0]

tuples.sort(key=sortFunction)
print(tuples)