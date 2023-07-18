// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]



// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right){
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalRecursive = function(root) {
  if(!root){
    return
  }
  console.log(root.val)
  if(root.left){
    return inorderTraversalRecursive(root.left)
  } else if(root.right){
    return inorderTraversalRecursive(root.right)
  } else{
    return 
  }
};



function createBinaryTreeExample1() {
  let middle = new TreeNode(2, new TreeNode(3, null, null), null)
  let root = new TreeNode(1, null, middle)

  return root
}

// console.log(new TreeNode(1,2,3))
// console.log(createBinaryTreeExample1())
console.log(inorderTraversalRecursive(createBinaryTreeExample1()))

function inorderTraversalIterative(root) {
  let currNode = root
  while(currNode !== 0){
    console.log(currNode.val)
    
  }
};
