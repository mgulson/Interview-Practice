// LC-33-search-in-rotated-array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

class BruteForce {
  constructor(array, target){
    this.initArray = array
    this.target = target
  }

  sort() {
    this.sortedArray = this.initArray.sort()
    return this.sortedArray
  }

  search(array) {
    return this.binSearch(0, array.length - 1)
  }

  binSearch(l, r){
    // array is initial array
    let array = this.initArray
    let mid = Math.ceil((r + l) / 2)

    console.log(mid)

    if (array[mid] === this.target){
      return mid
    } else if( l === r){
      return -1
    } else if (array[mid] < this.target){
      return this.binSearch(mid, r)
    } else {
      return this.binSearch(l, mid)
    }
  }
}

// Brute Force //

const arr = [1, 2, 3, 4, 5]

let bf = new BruteForce(arr, 4)

console.log(bf.search(arr))

const rotArr = [4,5,6,7,0,1,2]

bf = new BruteForce(rotArr, 4)

let sortArr = bf.sort()

console.log(bf.search(rotArr))

////////////////////