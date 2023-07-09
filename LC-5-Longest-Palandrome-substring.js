// LC-5 Longest Palandrome substring

// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.


// Example 2:

// Input: s = "cbbabccba"
// Output: "bb"
 

class LongestPalandromeSubstring {
  constructor(s){
    this.string = s
  }

  longestPalandrome(){
    //start w even palandromes
    const string = this.string

    let stack = [];
    let answerArray = []
    let answer = ''
    let hasPopped = 0
    for(let i = 0; i<string.length; i++){
      const element = string[i]
      const stackLength = stack.length
      if(i === string.length -1){
        if(stack[stackLength - 1] === element){
          hasPopped = 1
          stack.pop(element)
          answer = element + answer + element
        }
        answerArray.push(answer)
      } else if(stackLength === 0){
        stack.push(element)
      } else if(stack[stackLength - 1] === element){
        hasPopped = 1
        stack.pop()
        answer = element + answer + element
      } else if(!hasPopped && stackLength > 1 && stack[stackLength-2] === element){
        hasPopped = 1
        const singleLetter = stack.pop()
        const doubleLetter = stack.pop()
        answer = doubleLetter + singleLetter + doubleLetter        
      } else if(hasPopped){
        stack = [element]
        hasPopped = 0
        answerArray.push(answer)
        answer = ''
      } else {
        stack.push(element)
      }
    }
    console.log(answerArray)
  
    let maxAnswer = ''
    for(let element of answerArray){
      if(element.length > maxAnswer.length){
        maxAnswer = element
      }
    }
    
    return maxAnswer
  }
}

const string = 'cbbabcacba'
let result = new LongestPalandromeSubstring(string)

console.log(result.longestPalandrome())