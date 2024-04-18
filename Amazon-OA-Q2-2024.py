# Amazon OA Q2 2024

# Given an array of sessions with each activity at each day being a different value and another number calculatea the max


# sessions = [ 2, 3, 2 ]

# x = 4
# ans = 2 + 3 + 1 + 2  = 8

class Solution:
  def calculateMaxSession(self, sessions, x):
    sessionsArr = []
    for elem in sessions:
      for i in range(1, elem + 1):
        sessionsArr.append(i)
    
    currSum = 0
    maxSum = 0
    for index, elem in enumerate(sessionsArr):
      if index < x:
        left = 0
        currSum += elem
      else:
        currSum -= sessionsArr[left]
        left += 1
        currSum += elem

      if currSum > maxSum:
        maxSum = currSum

    return maxSum







sessions = [2 , 3, 2]

x = 4

print(Solution().calculateMaxSession(sessions, x))
