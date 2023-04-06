class Node {
  constructor(data, node){
    this.data = data
    this.nextNode = node
  }
  setNextNode(node){
    this.nextNode = node
  }
  print() {
    console.log(this.data)
  }
}


class LinkedList {
  constructor(string){
    this.string = string
    this.nodes = []
    this.createNodes()
    this.linkNodes()
    this.head = null
  }

  createNodes(){
    for(let i in this.string){
      this.nodes.push(new Node(this.string[i], null))
    }
  }

  linkNodes(){
    for(let i= 0; i<this.nodes.length; i++){
      if(i === this.nodes.length - 1){
        break
      }
      this.nodes[i].setNextNode(this.nodes[i+1])
    }
  }

  print(head){
    let curr = head
    while(curr != null) {
      curr.print()
      curr = curr.nextNode
    }
  }

  reverse(){
    let curr = this.nodes[0]
    let next = curr.nextNode
    while(curr !== null && next !== null) {
      let nextNext = next.nextNode
      next.setNextNode(curr)
      curr = next
      next = nextNext
    }
    this.nodes[0].setNextNode(null)
  }
}




// class LinkedList(){
//   constructor(nodes){
//     this.nodes = nodes
//   }

//   createLinkedList(){

//   }

// }

// let node = new Node('h', null)
// let node2 = new Node('e', null)
// node.setNextNode(node2)
// console.log(node)

let ll = new LinkedList('hello world')
ll.reverse()
ll.print(ll.nodes[ll.nodes.length-1])