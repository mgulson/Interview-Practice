//LC 53 Maximum subarray
//Given an integer array nums, find the 
// subarray
// with the largest sum, and return its sum.

class BruteForce {   
  constructor(array){
    this.bigArray = array
    this.sums = {}
    this.initializeSums()
  }

  findMaxSum(){
    let max = 0
    for(const [key, value] of Object.entries(this.sums)){
      if(max < value){
        max = value
      }
    }
    return max
  }

  sumArray(array){
    let sum = 0
    for(const i of array){
      sum += i
    }
    return sum
  }

  initializeSums(){
    let length = this.bigArray.length
    for(let start = 0; start<length; start++){
      for(let end=0; end<length; end++){
        if(start > end){
          continue
        } else {
          this.sums[`${start},${end}`] = this.sumArray(this.bigArray.slice(start,end+1))
        }
      }
    }
    return this.sums
  }
}


class Optimize {   
  constructor(array){
    this.bigArray = array
    this.sums = {}
    this.initializeSums()
  }

  findMaxSum(){
    let max = 0
    for(const [key, value] of Object.entries(this.sums)){
      if(max < value){
        max = value
      }
    }
    return max
  }

  sumArray(array){
    let sum = 0
    for(const i of array){
      sum += i
    }
    return sum
  }

  initializeSums(){
    let length = this.bigArray.length
    for(let start = 0; start<length; start++){
      for(let end=0; end<length; end++){
        if(start > end){
          continue
        } else {
          if(start == end){
            this.setSumsValue(start,end,this.bigArray[start])
          } else{
            let prev = this.sums[`${start},${end-1}`]
            this.setSumsValue(start,end,prev+ this.bigArray[end])
          }
        }
      }
    }
    return this.sums
  }

  setSumsValue(start,end,value){
    this.sums[`${start},${end}`] = value
  }
}

class OptimizeLinear {   
  constructor(array){
    this.bigArray = array
  }

  findMaxSum(){
    let maxSum = 0
    let currSum = 0
    for(let currElement of this.bigArray){
      if(currElement + currSum < 0){
        currSum = 0
      } else {
        currSum = currElement + currSum
      }
      maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
  }
}




const LCExample = [-2,1,-3,4,-1,2,1,-5,4]

let bruteForce = new BruteForce(LCExample)
console.log(bruteForce.sums)
console.log('brute force max sum', bruteForce.findMaxSum())

let optimize = new Optimize(LCExample)
console.log('optimize', optimize.findMaxSum())

let optimizeLinear = new OptimizeLinear(LCExample)
console.log('optimizeLinear',optimizeLinear.findMaxSum())