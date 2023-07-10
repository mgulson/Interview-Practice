// LC-125-valid-palandromes

// phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


function isValidPalandrome(string){
  let isValid = false
  let stack = [];
  let hasPopped = 0;
  for(let char of string){
    if(stack.length && char === string[stack.length -1]){
      stack.pop()
      hasPopped = 1;
    } else if(!hasPopped && stack.length > 2 && char === string[stack.length - 2]){
      stack.pop()
      stack.pop()
    } else if(hasPopped && stack.length && char !== string[stack.length -1]){
      return false
    } else{
      stack.push(char)
    }
  }
  return !stack.length
}

const example1 = 'abc'
console.log('1', isValidPalandrome(example1))

const example2 = 'abccba'
console.log('2', isValidPalandrome(example2))

const example3 = 'abcacba'
console.log('3', isValidPalandrome(example3))