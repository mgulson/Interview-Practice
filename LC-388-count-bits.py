# Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
#  ans[i] is the number of 1's in the binary representation of i.

 

# Example 1:

# Input: n = 2
# Output: [0,1,1]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# Example 2:

# Input: n = 5
# Output: [0,1,1,2,1,2]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# 3 --> 11
# 4 --> 100
# 5 --> 101
 

# Constraints:

# 0 <= n <= 105
import math


class Solution:
  def countBits(self, n):
    ans = []
    for i in range(n + 1):
      ansLoop = 0
      if i == 0:
        ans.append(0)
      else:
        logI = math.log2(i)
        
        j = math.floor(logI)
        sum_ = i
        while(j >= 0):
          power = pow(2,j)
          print(i, sum_,pow(2,j),j)
          if sum_ - power >= 0:
            sum_ -= power
            ansLoop += 1
            j -= 1
          else:
            j-= 1
            continue

        ans.append(ansLoop)
    return ans



print(Solution().countBits(8))

