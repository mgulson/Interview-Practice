# LC-438-find-all-anagrams-in-a-string.py

# Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

# Example 1:

# Input: s = "cbaebabacd", p = "abc"
# Output: [0,6]
# Explanation:
# The substring with start index = 0 is "cba", which is an anagram of "abc".
# The substring with start index = 6 is "bac", which is an anagram of "abc".
# Example 2:

# Input: s = "abab", p = "ab"
# Output: [0,1,2]
# Explanation:
# The substring with start index = 0 is "ab", which is an anagram of "ab".
# The substring with start index = 1 is "ba", which is an anagram of "ab".
# The substring with start index = 2 is "ab", which is an anagram of "ab".


class Solution:
  def findAnagrams(self, s: str, p: str) -> list[int]:
    p_length = len(p)
    p_hash = self.buildDict(p)
    ans = []
    curr_ans = -1
    curr_hash = {}


    for index,char in enumerate(s):
      ## TODO handle edge case p = abc  abac
      if char in p_hash:
        if curr_ans == -1:
          curr_ans = index
          curr_hash[char] = 1
          if curr_hash == p_hash:
            ans.append(curr_ans)
            curr_hash = {}
            curr_ans = -1
        else:
          if char in curr_hash:
            curr_hash[char] +=1
          else:
            curr_hash[char] = 1

          if curr_hash == p_hash:
            ans.append(curr_ans)
            first_char = s[curr_ans]
            if curr_hash[first_char] == 1:
              del curr_hash[first_char]
            else:
              curr_hash[first_char] -= 1

            curr_ans += 1
          elif curr_hash[char] > p_hash[char]:
            curr_ans = index
            curr_hash = {char: 1}
      else:
        curr_ans = -1
        curr_hash = {}
          
    return ans

  def buildDict(self,p):
    p_hash = {}

    for char in p:
      if char in p_hash:
        p_hash[char] += 1
      else:
        p_hash[char] = 1

    return p_hash

# Input: s = "cbaebabacd", p = "abc"
s = "abc" 
p = "abc"

solution = Solution()

# ans = solution.findAnagrams(s,p)
# print(ans)

s = "cbaebabacdaaabaacb"

"caa"
print(s)
print(solution.findAnagrams(s,p))

p="ab"
s = "abab"
print(solution.findAnagrams(s,p))



