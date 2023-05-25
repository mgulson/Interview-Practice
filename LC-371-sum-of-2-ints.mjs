// LC-371-sum-of-2-ints
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5

class binarySum {
  constructor(a, b){
    this.a = this.toBinary(Number(a))
    this.b = this.toBinary(Number(b).toString(2))
    this.binary = this.addBinary(this.a, this.b)
  }

  toBinary(num){
    return num.toString(2)
  }

  addBinary(num1, num2){
    let sum = ""
    let carryOver = 0
    const length1 = num1.length
    const length2 = num2.length

    for(let i=0; i < Math.max(length1, length2)+ 1; i++){
      if( length1 != length2 && i > Math.min(length1 , length2) - 1){
        let diff
        if(length1 > length2){
          diff = num1.slice(0,length1 - length2)
        } else {
          diff = num2.slice(0, length2 - length1)
        }

        sum = diff + sum
        break
      } else if(i > Math.min(length1, length2) -1) {
        //implement mismatches
        sum = String(carryOver) + sum
        break
      } else{
        let a = num1[length1 - i - 1] 
        let b = num2[length2 - i - 1]
        let c = 0
        
        if(a === '1' && b === '1' && carryOver === '1') {
          c = 1
          carryOver = 1
        } else if(((a === '1' || b === '1') && carryOver === '1') || a === '1' && b === '1'){
          c = 0
          carryOver = 1
        } else if( a === '1' || b === '1' || carryOver === '1') {
          c = 1
          carryOver = 0
        } else {
          c = 0
          carryOver = 0
        }

        sum = String(c) + sum 
      }
    }

    return sum
  }
}

let bs = new binarySum(2,2)

console.log('2 + 2 = 100 :', bs.binary)

bs = new binarySum(10, 5)

console.log('10 + 5 =  1111 : ', bs.binary)

