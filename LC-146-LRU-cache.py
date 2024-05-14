# LC-146-LRU-caches.py

# Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

# Implement the LRUCache class:

# LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
# int get(int key) Return the value of the key if the key exists, otherwise return -1.
# void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
# The functions get and put must each run in O(1) average time complexity.

 

# Example 1:

# Input
# ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
# [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
# Output
# [null, null, null, 1, null, -1, null, -1, 3, 4]

# Explanation
# LRUCache lRUCache = new LRUCache(2);
# lRUCache.put(1, 1); // cache is {1=1}
# lRUCache.put(2, 2); // cache is {1=1, 2=2}
# lRUCache.get(1);    // return 1
# lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
# lRUCache.get(2);    // returns -1 (not found)
# lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
# lRUCache.get(1);    // return -1 (not found)
# lRUCache.get(3);    // return 3
# lRUCache.get(4);    // return 4
 

# Constraints:

# 1 <= capacity <= 3000
# 0 <= key <= 104
# 0 <= value <= 105
# At most 2 * 105 calls will be made to get and put.
import heapq


class LRUCache:

  def __init__(self, capacity: int):
    self.heap = []
    self.capacity = capacity
    self.time_stamp_hash = {}
    self.key_hash = {}
    self.curr_timestamp = 1

  def get(self, key: int) -> int:
    key_hash = self.key_hash
    if key in key_hash:
      return key_hash[key]
    else:
      return -1

  def put(self, key: int, value: int) -> None:
    heap = self.heap
    capacity = self.capacity
    time_stamp_hash = self.time_stamp_hash
    curr_timestamp = self.curr_timestamp
    key_hash = self.key_hash


    ## if less than capacity in cache
    key_hash[key] = value
    time_stamp_hash[curr_timestamp] = key
    heapq.heappush(heap, curr_timestamp)
    self.curr_timestamp += 1
    
    if len(heap) > capacity:
      time_stamp_pop = heapq.heappop(heap)
      key = time_stamp_hash[time_stamp_pop]
      del time_stamp_hash[time_stamp_pop]
      del key_hash[key]

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)

# [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

# Your LRUCache object will be instantiated and called as such:
obj = LRUCache(2)
print(obj.put(1,1))
print(obj.put(2,2))
print(obj.get(1))
print(obj.put(3,3))
print(obj.get(2))
print(obj.put(4,4))
print(obj.get(1))
print(obj.get(3))
print(obj.get(4))