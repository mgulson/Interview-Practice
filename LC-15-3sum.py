# LC-15-3sum

# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

 

# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Explanation: 
# nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
# nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
# nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
# The distinct triplets are [-1,0,1] and [-1,-1,2].
# Notice that the order of the output and the order of the triplets does not matter.
# Example 2:

# Input: nums = [0,1,1]
# Output: []
# Explanation: The only possible triplet does not sum up to 0.
# Example 3:

# Input: nums = [0,0,0]
# Output: [[0,0,0]]
# Explanation: The only possible triplet sums up to 0.

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        negNums = {}
        posNums = {}
        zeroNums = {}
        results = []

        for num in nums:
            if num == 0:
                zeroNums[0] = zeroNums.get(num) + 1 if zeroNums.get(num) else 1
            elif num > 0:
                posNums[num] = posNums.get(num) + 1 if posNums.get(num) else 1
            else:
                negNums[num] = negNums.get(num) + 1 if negNums.get(num) else 1
        
        items = list(posNums.items())
        for i in range(len(items)):
            if items[i][1] > 1:
                sum = 2 * items[i][0]
                if (-1) * sum in negNums:
                    results.append([items[i][0], items[i][0], -1*sum])
            
            if i == len(items) -1:
                break
            sum = items[i][0] + items [i+1][0]
            if (-1) * sum in negNums:
                results.append([items[i][0], items[i+1][0], -1*sum])

        items = list(negNums.items())
        for i in range(len(items) - 1):
            if items[i][1] > 1:
                sum = 2 * items[i][0]
                if (-1) * sum in posNums:
                    results.append([items[i][0], items[i][0], -1*sum])

            if i == len(items) -1:
                break

            sum = items[i][0] + items [i+1][0]
            if (-1) * sum in posNums:
                results.append([items[i][0], items[i+1][0], -1*sum])
        
        if len(zeroNums) > 0:
            keys = list(posNums.keys())
            for key in keys:
                if -1 * key in negNums:
                    results.append([key, -1*key, 0])

        if zeroNums.get(0) != None:
            if zeroNums.get(0) >= 3:
                results.append([0,0,0])

        print(posNums)
        print(negNums)
        print(zeroNums)

        return results