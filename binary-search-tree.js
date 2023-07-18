// Binary Search Tree

class Node {
  constructor(val, left, right){
    this.val = val
    this.left = left ? left : null
    this.right = right ? right : null
  }

}



class BinarySearchTree {
  constructor(root){
    this.root = root
    this.size = 1
  }

  insert(node){
    if(!this.root) {
      this.root = node
    } else {
      let currNode = this.root
      while(currNode !== null){
        if(node.val < currNode.val) {
          if(!currNode.left) {
            currNode.left = node
            break
          } else {
            currNode = currNode.left
          }
        } else {
          if(!currNode.right) {
            currNode.right = node
            break
          } else {
            currNode = currNode.right
          }
        }
      }
    }
    this.size += 1
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

}

let root = new Node(1, null, null)


let bst = new BinarySearchTree(root)

bst.insert(new Node(2, null, null))
bst.insert(new Node(10, null, null))
bst.insert(new Node(50, null, null))
bst.insert(new Node(5, null, null))
bst.insert(new Node(6, null, null))


bst.inOrderTraversal()

console.log(bst.size)