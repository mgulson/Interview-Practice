global hello

class Solution:
  def findRedundants(self, word, a, b):
    ## a*V + b*C
    hello = 5
    self.a = a
    self.b = b
    ans = 0
    for i in range(len(word)):
      for j in range(i + 1, len(word) + 1):
        print(word[i:j])
        if self.isValid(word[i:j]):
          ans += 1

    return ans

      

  def isValid(self, word):
    print(hello)
    total = 0
    for char in word:
      if self.isVowel(char):
        total += self.a
      else:
        total += self.b
    if total == len(word):
      print('valid')
    return total == len(word)
  
  def isVowel(self, char):
    return char == 'a' or char == 'e' or char == 'i' or char == 'o' or char == 'u'

word = 'abbacc'
a = -1
b = 2

soln = Solution()

print(soln.findRedundants(word, a, b))