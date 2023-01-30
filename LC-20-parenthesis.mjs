//LC 20
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

class Main {
  constructor(){
    this.parens = []
  }

  execute(string){
    const length = string.length
    for(let i = 0; i < length; i+=1){
      
      // Check Characters
      if(string[i] === '('){
        this.parens.push('(')
      } else if(string[i] === '[') {
        this.parens.push('[')
      } else if(string[i] === '{') {
        this.parens.push('{')
      } else if(string[i] === ')') {
        if(this.parens[this.parens.length - 1] === '('){
          this.parens.pop()
        } else {
          return false
        }
      } else if(string[i] === ']'){
        if(this.parens[this.parens.length - 1] === '['){
          this.parens.pop()
        } else {
          return false
        }
      } else if(string[i] === '}'){
        if(this.parens[this.parens.length - 1] === '{'){
          this.parens.pop()
        } else {
          return false
        }
      } else {
        console.log('unexpected character', string[i])
        return false
      }
      // return true of false
      if(i === length -1){
        if(this.parens.length === 0){
          return true
        } else {
          return false
        }
      }
    }
  }

  printParenStack(){
    console.log(this.parens)
  }

}

console.log('Test (()')
let main = new Main()
console.log(main.execute('(()'))
main.printParenStack()

console.log('Test (())')
main = new Main()
console.log(main.execute('(())'))
main.printParenStack()


console.log('Test ({()})')
main = new Main()
console.log(main.execute('({()})'))
main.printParenStack()

console.log('Test ({[()]})')
main = new Main()
console.log(main.execute('({[()]})'))
main.printParenStack()
