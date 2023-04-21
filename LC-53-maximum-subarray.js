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






let bruteForce = new BruteForce([1,2,-2,4])
console.log(bruteForce.sums)
console.log('brute force max sum', bruteForce.findMaxSum())

let optimize = new Optimize([1,2,-2,4])
console.log('optimize', optimize.findMaxSum())