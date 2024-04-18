# LC-78-word-search.py

### completed :check:

# 79. Word Search
# Medium
# Topics
# Companies
# Given an m x n grid of characters board and a string word, return true if word exists in the grid.

# The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
# Example 1:
# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
# Output: true
# Example 2:
# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
# Output: true
# Example 3:

# Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
# Output: false


class Solution:
  def exist(self, board: List[List[str]], word: str) -> bool:
    m = len(board)
    n = len(board[0])
    self.board = board
    self.word = word
    self.m = m
    self.n = n

  for i in range(m):
    for j in range(n):
      elem = board[i][j]
      if elem == word[0]:
        visited = {}
        if self.bfs_word(i,j,0, visited):
          return True

    def bfs_word(self, i, j, word_index, visited):
      ## check right left down 
      m = self.m
      n = self.n
      word = self.word
      if word_index > len(word) - 1:
        return False
      elif word_index == len(word) -1:
        return True
      
      if (i,j) in visited:
        continue

      visited[(i,j)] = 1
      # check edge cases
      direction_index = [(1,0), (-1,0), (0,1), (0,-1)]

      for direction in direction_index:
        dirx = direction[0]
        diry = direction[1]

        if i + dirx > m -1 or i + dirx < 0 or j + diry > n-1 or j + diry <0:
          continue
        else:
          if board[i+dirx][j+diry] == word[word_index+1]:
            ## keep track of visited?
            if self.bfs_word(i,j,word_index+1):
              return True

