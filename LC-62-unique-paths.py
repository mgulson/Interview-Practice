# # There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

# Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

# The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

# Example 1:


# Input: m = 3, n = 7
# Output: 28
# Example 2:

# Input: m = 3, n = 2
# Output: 3
# Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
# 1. Right -> Down -> Down
# 2. Down -> Down -> Right
# 3. Down -> Right -> Down

### 11
### 11
### 11

  
class Solution:
  def uniquePaths(self, m: int, n: int) -> int:
  i = 0
    j = 0
    ## get largest size of queue
    queue = []
    queue.append((0,0))
    max_paths = 0
    next_queue = []
    while(len(queue) > 0):
      tupx, tupy = queue.pop()
      if tupx + 1 >m -1:
        if tupy + 1 > n - 1:
          ## no op
          m + n
        else:
          next_queue.append((tupx, tupy+1))
      else: 
        if tupy + 1 > n-1:
          next_queue.append((tupx + 1, tupy))
        else:
          next_queue.append((tupx+1, tupy))
          next_queue.append((tupx, tupy+ 1))

      if len(queue) == 0:
        max_paths = max(max_paths, len(next_queue))
        queue = next_queue.copy()
        next_queue = []

    return max_paths
      
print(Solution().uniquePaths(4,2))


### 11
### 11
### 11
### 11