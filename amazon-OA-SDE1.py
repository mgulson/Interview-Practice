class Solution:
  def slidingWindow(self, processes, m):
    minSum = 1000000000
    for index, elem in enumerate(processes):
      if index + m > len(processes):
        continue
      sum_ = sum(processes[index:index+m+1])

      if sum_ < minSum:
        minSum = sum_
    
    return minSum


processes = [10,4,8,13,20]
m = 2


soln = Solution().slidingWindow(processes, m)
print(soln)