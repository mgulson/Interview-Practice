# OA-Cisco.py

# N∗M matrix and starting from cell (1,1), her challenge is to hop in an anti-clockwise direction and skip alternate cells. The goal is to find out the last cell she would hop onto. Write an algorithm to find the last cell Lucy would hop onto after moving anti-clockwise and skipping alternate cells.
# Input The first line of input consists of two integersmatrix_rowand matrix col, representing the number of rows (N) and the number of columns (M) in the matrix, respectively. The next M lines consist of N space-separated integers representing the elements in each cell of the matrix. Output Print an integer representing the last cell Lucy would hop onto after following the given instructions. Example Input: 3 3 29 8 37
# 15 41 3 1 10 14 Output: 41 Explanation: Lucy starts with 29, skips 15, hops onto 1, skip 10, hops onto 14, skips 3, hops onto 37 , skips 8 and finally hops onto 41. So, the output is 41 .

import math

def valid(m, n, i, j):
  if i > m - 1:
    return False
  elif j > n -1:
    return False
  elif i < 0:
    return False
  elif j < 0:
    return False
  else:
    return True

def in_hash(hash, i, j):
  return f"{i},{j}" in hash


def solveLucy(matrix):
  # direction [ 0: down, 1: right, 2: up, 3: left]
  m = len(matrix)
  n = len(matrix[0])

  direction = 0
  # start with integer hashes
  hashMatrix = {}

  i = 0
  j = 0

  for k in range(5):
    print(i, j, direction)       
    hashMatrix[f"{i},{j}"] = 1

    if direction == 0:
      newI = i+2
      newJ = j
      if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):
        i += 2
      else:
        newI = i
        newJ = j + 2
        if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):        
          j+= 2
          direction += 1
        else:
          newI = i + 1
          newJ = j + 1
          if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):        
            j += 1
            i += 1
            direction += 1
          else:
            return [i,j]

    elif direction == 1:
      newI = i
      newJ = j+2
      if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):
        j += 2
      else:
        newI = i - 2
        newJ = j
        if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):        
          i -= 2
          direction += 1
        else:
          newI = i - 1
          newJ = j + 1
          if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):        
            i -= 1
            j += 1
            direction += 1
          else:
            return [i,j]        
    elif direction == 2:
      newI = i - 2
      newJ = j 
      if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):
        i -= 2
      else:  
        newI = i 
        newJ = j - 2
        if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):        
          j -= 2
          direction += 1
        else:
          newI = i + 1
          newJ = j - 1
          if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):        
            i += 1
            j -= 1
            direction += 1
          else:
            return [i, j]
    elif direction == 3:
      newI = i
      newJ = j -2
      if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):
        j -= 2
      else:  
        newI = i + 2
        newJ = j
        if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):        
          i += 2
          direction = 0
        else:
          newI = i + 1
          newJ = j - 1
          if valid(m,n,newI,newJ) and not in_hash(hashMatrix, newI, newJ):        
            i += 1
            j -= 1
            direction += 1
          else:
            return [i, j]







matrix = [   [29, 8,37], [15, 41, 3], [1, 10 , 14]]

print(solveLucy(matrix))