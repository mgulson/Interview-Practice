# house-robber.py

# House Robber
# You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
# Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
# Example 1:
# Input: nums = [1,2,3,1]
# Output: 4
# Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
# Total amount you can rob = 1 + 3 = 4.
# Example 2:
# Input: nums = [2,7,9,3,1]
# Output: 12
# Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
# Total amount you can rob = 2 + 9 + 1 = 12.


## algorithm

# backtracking
# DP

maxRob = [2, 7, 11, 11, 12]
stateLast=  [0, 1, 2, 2, 1]


class Solution:
  def calcMaxRob(self, nums):
    maxRob = [0] * len(nums)
    stateLast = [0] * len(nums)
    for index, elem in enumerate(nums):
      print(maxRob)
      if index == 0:
        maxRob[index] = elem
        stateLast[index] = index
      elif index == 1:
        if elem > maxRob[index -1]:
          maxRob[index] = elem
          stateLast[index] = index
        else:
          maxRob[index] = maxRob[index - 1]
          stateLast[index] = stateLast[index - 1]
      else:
        if stateLast[index - 1] != index -1:
          maxRob[index] = elem + maxRob[index - 1]
          stateLast[index] = index
        elif maxRob[index - 1] > elem + maxRob[index - 2]:
          maxRob[index] = maxRob[index -1]
          stateLast[index] = stateLast[index -1]
        else:
          maxRob[index] = maxRob[index - 2] + elem
          stateLast[index] = index

    return maxRob[len(nums) -1]

      


nums = [2,7,9,3,1]
soln = Solution()
print(soln.calcMaxRob(nums))