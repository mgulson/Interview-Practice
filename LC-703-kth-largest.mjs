class KLargest {
  constructor(k, nums){
    this.k = k
    this.nums = nums
  }

  add(number){
    this.nums.push(number)
    this.kLargest()
  }

  kLargest(){
    let sorted = this.sort()
    console.log(sorted)
    return sorted[this.k-1]
  }

  sort(){
    return this.nums.sort()
  }
}

console.log([5,4,3,2,1].sort())

let kthLargest = new KLargest(3, [4, 5, 8, 2])

console.log(kthLargest.nums)

console.log(kthLargest.add(3))   // return 4
console.log(kthLargest.add(5))   // return 5
console.log(kthLargest.add(10))  // return 5
console.log(kthLargest.add(9))   // return 8
console.log(kthLargest.add(4))