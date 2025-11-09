class Solution:
  def printHash(self, hash):
    for key, value in list(hash.items()):
      print(key, value)


Solution().printHash({'hello': 4})