# Given an array of pages per chapters with a reader who can only read one chapter per day find the minimum number
#  of pages to read each day or -1 if impossible

# ex pages [2,4,3]
# days = 4
# x = 3

import math

class Solution:
  def minPages(self, pages, days):
    lengthPages = len(pages)
    if days < lengthPages:
      return -1
    
    maxPages = max(pages)
    minPages = 1

    ## binary search
    
    left = minPages
    right = maxPages

    lastAns = -1
    while(left <= right):
      ## condition
      mid = (left + right) // 2
      print(left, right, mid)
      modArray = list(map(lambda x: math.ceil(x / mid), pages))
      print(modArray)
      sumArr = sum(modArray)
      if sumArr <= days:
        lastAns = right
        right = mid - 1
      else:
        left = mid + 1

    return lastAns




pages = [2,4,3]
days = 4

print('ans = 4', Solution().minPages(pages, days))