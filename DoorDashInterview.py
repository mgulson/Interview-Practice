# DoorDash 

# Given a binary tree, find the maximum path sum from any two "alive nodes" within the tree.
# We can assume a node is an alive node if and only if it is a leaf node, indicated by an asterisk below.


#     5

#   1    6


# 20     12   17


class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right




class Solution:
  def maxPathSum(self, head):
    self.maxPathGlobal = 0
    
    self.recurseMaxPathSum(head)

    return self.maxPathGlobal

  def recurseMaxPathSum(self, node):
    maxPathSum = 0
    maxPathLeft = 0
    maxPathRight = 0
    if node.left:
      maxPathLeft = self.recurseMaxPathSum(node.left)
    
    if node.right:
      maxPathRight = self.recurseMaxPathSum(node.right)

    maxPathSum = max(maxPathRight, maxPathLeft) + node.val
    self.maxPathGlobal = max(maxPathRight + maxPathLeft + node.val, self.maxPathGlobal)
    return maxPathSum
    

    ## return maxPathSum





n20 = Node(val=20,right=None, left=None)
n1 = Node(val=1, left=n20)
n12 = Node(val=12, right=None, left=None)
n17 = Node(val=17, right=None, left=None)
n6 = Node(val=6, right=n17, left=n12)
head = Node(val=5, right=n6, left=n1)

sol = Solution()

print(sol.maxPathSum(head))