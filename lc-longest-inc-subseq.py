# longest increasing subsequence

# Example 1:
# Input: nums = [10,9,2,5,3,7,101,18]
# Output: 4
# Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
# Example 2:

class Solution:
  def longIncSubSeq(self, arr):
    self.arr = arr

    stack = []
    self.output = 0

    self.longIncSubInner([], 0)

    return self.output

  def longIncSubInner(self, stack, index):
    arr = self.arr
    for index in range(index, len(arr)):
      elem = arr[index]
      if len(stack) > 0 and elem > stack[len(stack) - 1]:
        stack.append(elem)
      elif len(stack) == 0:
        stack.append(elem)
      else:
        if len(stack) > 1:
          self.longIncSubInner(stack.copy(), index + 1)
        while(stack and stack[len(stack) - 1] >= elem):
          stack.pop()
        stack.append(elem)

      print(stack)
      self.output = max(self.output, len(stack))


nums = [10,9,2,5,3,7,101,18]

nums2 = [0,1,0,3,2,3]

soln = Solution()
print(soln.longIncSubSeq(nums))