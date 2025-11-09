class Solution:
  def binSearch(self, arr, value):
    left = 0
    right = len(arr) - 1

    while left < right:
      mid = (right - left) //2

      if arr[mid] == value:
        return mid

      if arr[left] == value:
        return left

      if arr[right] == value:
        return right


      if value > arr[mid]:
        left = mid + 1
      else:
        right = mid - 1



soln = Solution()
arr = [1, 3, 5, 7, 10]
print(soln.binSearch(arr, 3))