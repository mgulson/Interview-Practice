# LC-longest-substring-without-repeating-character

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longestLength = 0
        length = 0
        hash = {}
        left = 0
        right = 0
        
        while(right < len(s)):
            rightChar = s[right]
            if rightChar in hash:
                for i in range(left, right):
                    if s[i] == s[right]:
                        left = i + 1
                        break
                    else:
                        hash.pop(s[i], None)
                right += 1
            else:
                hash[rightChar] = 1
                right += 1
                longestLength = max(longestLength, right - left)
                
        
        return longestLength