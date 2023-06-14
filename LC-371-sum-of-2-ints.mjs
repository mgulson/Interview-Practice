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

  addBinaryNumbersOne(a, b, carryOver){
    //strings
    let result;
    if(a === '1' && b === '1' && carryOver === 1) {
      result = 1
      carryOver = 1
    } else if(((a === '1' || b === '1') && carryOver === 1) || a === '1' && b === '1'){
      result = 0
      carryOver = 1
    } else if( a === '1' || b === '1' || carryOver === 1) {
      result = 1
      carryOver = 0
    } else {
      result = 0
      carryOver = 0
    }

    return { result, carryOver}
  }

  calculateRemaining(diff, originalCarryOver) {
    let length = diff.length
    let returnValue = ''
    let carryOver = originalCarryOver
    for(let i  = 0; i< length + 1; i++){
      let a = diff[length - i - 1]

      const { result, carryOver: myCarryOver } = this.addBinaryNumbersOne(a, carryOver.toString(), 0)

      carryOver = myCarryOver
      returnValue = result + returnValue    
    }

    return returnValue
  }

  addBinary(num1, num2){
    let sum = ""
    let carryOver = 0
    const length1 = num1.length
    const length2 = num2.length
    const arr = [1,2,3]

    for(let i=0; i < Math.max(length1, length2)+ 1; i++){
      if( length1 != length2 && i > Math.min(length1 , length2) - 1){
        let diff
        if(length1 > length2){
          diff = num1.slice(0,length1 - length2)
        } else {
          diff = num2.slice(0, length2 - length1)
        }

        const remaining = this.calculateRemaining(diff, carryOver)
        sum = remaining + sum
        break
      } else if(i > Math.min(length1, length2) -1) {
        //implement mismatches
        sum = String(carryOver) + sum
        break
      } else{
        let a = num1[length1 - i - 1] 
        let b = num2[length2 - i - 1]
        let c = 0
        
        if(a === '1' && b === '1' && carryOver === 1) {
          c = 1
          carryOver = 1
        } else if(((a === '1' || b === '1') && carryOver === 1) || a === '1' && b === '1'){
          c = 0
          carryOver = 1
        } else if( a === '1' || b === '1' || carryOver === 1) {
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

  convertToDecimal(binary){
    return parseInt(binary, 2)
  }
}

class binarySumSimple {
  constructor(a, b){
    this.a = a
    this.b = b
  }

  sum() {
    let a = this.a
    let b = this.b
     
    do {
      let holdb = b
      b = (a ^ b);
      a = (a&holdb) << 1;
    } while(a > 1)
    return b
  }
}

let bs = new binarySum(2,2)

console.log('2 + 2 = 100 :', bs.binary)

bs = new binarySum(10, 5)

console.log('10 + 5 =  1111 : ', bs.binary)

bs = new binarySum(20, 5)

let binary = bs.binary
console.log('20 + 5 = 011001: ', binary)
console.log('25: ', bs.convertToDecimal(binary))

let bs1 = new binarySumSimple(2,2)
let bs2 = new binarySumSimple(10, 15)

console.log('2 + 2 = 4 ', bs1.sum())
console.log('10 + 15 = 25 ', bs2.sum())