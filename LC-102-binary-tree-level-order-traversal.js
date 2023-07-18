// LC-102-binary-tree-level-order-traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

class Node {
  constructor(val, left, right){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}



class BinaryTreeLevelOrder {
  constructor(){
    this.root = null
  }

  insert(nodeValue){
    if(!this.root) {
      this.root = new Node(nodeValue, null, null)
    } else {
      let queue = []
      queue.push(this.root)
      while(queue.length !== 0){
        const elem = queue.shift()
        if(!elem.left){
          elem.left = new Node(nodeValue, null, null)
          break
        } else {
          queue.push(elem.left)
          if(!elem.right){
            elem.right = new Node(nodeValue, null, null)
            break
          } else {
            queue.push(elem.right)
          }
        }
      }

    }
  }

  inOrderTraversal(){
    this.inorderTraversalRecursive(this.root)
  }

  inorderTraversalRecursive(node){
    if(node.left){
      this.inorderTraversalRecursive(node.left)
    }
    console.log(node.val)
    if(node.right){
      this.inorderTraversalRecursive(node.right)
    }
  }

  levelOrderTraversal(){
    let queue = []
    let result = []
    queue.push(this.root)

    while(queue.length != 0){
      const elem = queue.shift()
      if(elem === null || elem.val === null){
        continue
      }
      result.push(elem.val)
      queue.push(elem.left)
      queue.push(elem.right)
    }

    return result
  }
}


let newBst = new BinaryTreeLevelOrder()

newBst.insert(1)
newBst.insert(2)
newBst.insert(3)
newBst.insert(4)
newBst.insert(5)

console.log(newBst.levelOrderTraversal())

newBst = new BinaryTreeLevelOrder()

newBst.insert(3)
newBst.insert(9)
newBst.insert(20)
newBst.insert(null)
newBst.insert(null)
newBst.insert(15)
newBst.insert(7)

console.log(newBst.levelOrderTraversal())


