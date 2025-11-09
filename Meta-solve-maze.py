## backtracking and dfs


class Solution:
  def solve_maze(self, maze):
    self.maze = maze
    self.n = len(maze)
    n = self.n
    self.ans = []
    self.parent = {}
    self.bfs()

    print(self.parent)

    return self.traverse_parent((n-1, n-1))


  def bfs(self):
    n = self.n
    visited = {(0, 0): 1}
    queue = [(0,0)]

    while(len(queue) > 0):
      node = queue.pop(0)
      x, y = node
      print(x, y, queue)
      directions = [(-1, 0),  (0,1), (0, -1),(1, 0)]
            
      if x == n -1 and y == n -1:
        return


      for direct in directions:
        new_node = (x + direct[0], y + direct[1])
        if self.is_valid(new_node) and new_node not in visited:
          new_node = (x + direct[0], y + direct[1])
          visited[new_node] = 1
          self.parent[new_node] = node
          queue.append(new_node)



  def is_valid(self, new_node):
    x, y = new_node
    return x >= 0 and x < self.n and y >= 0 and y < self.n and self.maze[x][y] == 0

  

  def traverse_parent(self, node):
    ans = []
    while(node != None):
      print(node)
      ans.insert(0, node)
      if node in self.parent:
        node = self.parent[node]
      else:
        return ans




maze = [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0]]

soln = Solution()

print(soln.solve_maze(maze))