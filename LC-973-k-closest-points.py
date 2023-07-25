# k closest points to origin 

# Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

# The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

# You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

# Input: points = [[1,3],[-2,2]], k = 1
# Output: [[-2,2]]
# Explanation:
# The distance between (1, 3) and the origin is sqrt(10).
# The distance between (-2, 2) and the origin is sqrt(8).
# Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
# We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
# Example 2:

# Input: points = [[3,3],[5,-1],[-2,4]], k = 2
# Output: [[3,3],[-2,4]]
# Explanation: The answer [[-2,4],[3,3]] would also be accepted.

import heapq

class MaxHeapSizeK:
  def __init__(self, size):
    self.size = size
    self.heap = []

  def push(self, elem):
    # multiple number by negative one
    negativeElem = (elem[0] * -1, elem[1])

    if len(self.heap) + 1 > self.size:
      if elem[0] < self.heap[0][0] * -1: 
        heapq.heappop(self.heap)
        heapq.heappush(self.heap, negativeElem)
    else:
      heapq.heappush(self.heap, negativeElem)

  def getElements(self):
    result = []
    for i in range(len(self.heap)):
      result.append(heapq.heappop(self.heap)[1])
    
    return result
 
  
def distance(pt1, pt2):
  return (pt1[0] - pt2[0])**2 + (pt1[1] - pt2[1])**2

def closestPoints(points, k):
  heap = []

  for i in range(len(points)):
    elem = points[i]
    d = distance(elem, [0,0])
    heapq.heappush(heap, (d, elem))

  result = []
  for i in range(k):
    result.append(heapq.heappop(heap)[1])
  
  return result
  
def closestPointsMaxHeap(points, k):
  maxHeap = MaxHeapSizeK(k)

  for i in range(len(points)):
    elem = points[i]
    d = distance(elem, [0,0])
    maxHeap.push((d, elem))

  result = maxHeap.getElements()
  
  return result
  


points = [[1,3],[-2,2]]
k = 1

print(closestPoints(points,k))

points = [[3,3],[5,-1],[-2,4]]
k = 2

print('Output: [[3,3],[-2,4]]:: ', closestPoints(points,k))

print('Output: [[3,3],[-2,4]]:: ', closestPointsMaxHeap(points,k))
