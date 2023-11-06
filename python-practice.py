# python-practice.py

from collections import deque

import heapq

queue = deque([])
queue.append(1)
queue.append(2)
print(queue)
print(queue.popleft())
print(queue.popleft())

heap = []

heapq.heappush(heap, 1)
heapq.heappush(heap, 10)
heapq.heappush(heap, 5)
heapq.heappush(heap, 20)


print(heap)

for i in range(len(heap)):
  print(heapq.heappop(heap))