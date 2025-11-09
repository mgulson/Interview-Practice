class Solution:
  def binSearch(self, arr, target):
    ## if not found return prev index
    left = 0
    right = len(arr) - 1

    insertIndex = -1
    while(left <= right):
      mid = (left + right) // 2
      print(left, right, mid)

      if arr[mid] == target:
        return mid
      
      if arr[left] == target:
        return left
      
      if arr[right] == target:
        return right
      
      if target < arr[mid]:
        right = mid - 1
        insertIndex = mid
      else:
        left = mid + 1
    
    if insertIndex == -1:
      return len(arr)
    else:
      return insertIndex



test1 = [1,2,3,10]
test1Target = 4

soln = Solution()
print('ans 3:', soln.binSearch(test1, 5))