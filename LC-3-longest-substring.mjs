// LC-3-longest-substring
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


class BruteForce {
  constructor(str) {
    this.orgStr = str
    this.subStrings = {} 
    this.initializeSubstrings()
  }
  isUniqueSubstring(index1, index2){
    let chars = {}
    for(let i =index1; i <= index2; i++){
      if(chars[this.orgStr[i]]){
        return false
      } else{
        chars[this.orgStr[i]] = 1
      }
    }
    return true
  }

  initializeSubstrings(){
    let length = this.orgStr.length
    for(let i = 0; i<length; i++){
      for(let j=0; j<length; j++){
        if(i>j) {
          continue
        }
        if(this.isUniqueSubstring(i,j)){
          this.subStrings[`${i},${j}`] = j-i +1
        }
      }
    }
  }

  maxSubstring(){
    let max = 0
    for(const [key, value] of Object.entries(this.subStrings)){
      if(max < value){
        max = value
      }
    }
    return max
  }

}

let bf = new BruteForce('hello world')
console.log(bf.maxSubstring())


class LinearSubstring {
  constructor(string){
    this.bigStr = string
    this.charHash = {}
  }

  longestSubstringLength(){
    let maxStringLength = 0;
    let prevCharHash = {}
    let left = 0;
    let right = 0;
    while(right < this.bigStr.length){
      if(prevCharHash[this.bigStr[right]]) {
        // move left pointer
        prevCharHash[this.bigStr[left]] = 0
        left +=1
      } else {
        // move right pointer
        maxStringLength = Math.max(maxStringLength, right - left + 1)
        prevCharHash[this.bigStr[right]] = 1
        right +=1
      }
    }
    return maxStringLength
  }
}


let linear = new LinearSubstring('hello world')

console.log(linear.longestSubstringLength())