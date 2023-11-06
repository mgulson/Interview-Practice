from collections import deque


# Definition for a Node.
# class Node:
#     def __init__(self, val = 0, neighbors = None):
#         self.val = val
#         self.neighbors = neighbors if neighbors is not None else []

def dfs(node):
    if not node:
        return None
    stack = [node]
    visited = []
    created = {}

    while(len(stack) > 0):
        
        curr_node = stack.pop()
        if not curr_node:
            continue
        if curr_node.val in visited:
            continue
        else:
            if not curr_node.val in created.keys():
                copy = Node(curr_node.val, [])
                created[curr_node.val] = copy
            else:
                copy = created[curr_node.val]
            visited.append(curr_node.val)
            for neighbor in curr_node.neighbors:
                if len(curr_node.neighbors) < 1: continue
                if neighbor.val in created.keys():
                    copy.neighbors.append(created[neighbor.val])
                else:
                    copy_neighbor = Node(neighbor.val, [])
                    created[neighbor.val] = copy_neighbor
                    copy.neighbors.append(created[neighbor.val])
                if neighbor.val in visited:
                    continue
                else:
                    stack.append(neighbor)          

    return created[node.val]



class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        return dfs(node)