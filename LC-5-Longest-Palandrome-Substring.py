# LC-5-Longest-Palandrome-Substring.py

# // LC-5 Longest Palandrome substring

# // Given a string s, return the longest 
# // palindromic
 
# // substring
# //  in s.

# // Example 1:

# // Input: s = "babad"
# // Output: "bab"
# // Explanation: "aba" is also a valid answer.


# // Example 2:

# Input: s = "cbbd"
# Output: "bb"




class Solution:
  def longestPalindrome(self, s: str) -> str:
    length = len(s)
    self.length = length
    self.string = s

    ans = ''

    for i in range(length):
      palindrome = self.get_palindrome(i)
      if len(palindrome) > len(ans):
        ans = palindrome

    return ans

  def get_palindrome(self, index):
    stack = []
    string = self.string
    length = self.length
    first_letter = string[index]
    ### one case
    ### 'bab'
    ### left = index -1
    ### right = index + 1

    ### other case
    ### bb
    ### left = index
    ### right = index + 1

    ## ans1 = middle
    ## ans2 = no middle
    left = index - 1
    right = index + 1

    ans1 = string[index]
    while(left >= 0 and right <= length -1):
      ## TODO addres double edge case
    ## address no middle character
      if string[left] == string[right]:
        ans1 = string[left] + ans1 + string[right]
        left -= 1
        right += 1
      else:
        break

    ans2 = ''
    left = index
    right = index + 1
    while(left >= 0 and right <= length -1):
      ## TODO addres double edge case
    ## address no middle character
      if string[left] == string[right]:
        ans2 = string[left] + ans2 + string[right]
        left -= 1
        right += 1
      else:
        break
    
    if len(ans1) > len(ans2):
      return ans1
    else:
      return ans2

s = "abcdcb"
ans = 'bcdcb'

solution = Solution()

# print(solution.longestPalindrome(s))

s2 = 'abcddcbwttabbwbbattwkk'

ans = 'wttabbwbbattw'

print(solution.longestPalindrome(s2))