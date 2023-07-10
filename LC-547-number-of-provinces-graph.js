// LC-547


class Graph {
  constructor(){
    this.adjacencyList = {}
    this.visited = []
  }

  addElement(value, neighborsArr){
    this.adjacencyList[value] = neighborsArr
  }

  addEdge(value, neighbor){
    if(!this.adjacencyList[value]){
      this.adjacencyList[value] = [neighbor]
    } else {
      this.adjacencyList[value].push(neighbor)
    }
  }

  dfs(firstKey){
    let stack = []
    let answer = []

    const firstValue = this.adjacencyList[firstKey]

    this.visited.push(firstKey)
    answer.push(firstKey)

    firstValue.map((el) => stack.push(el));

    while(stack.length > 0){
        
      const element = stack.pop()
      
      if(this.visited.includes(element)){
        continue
      } else{
        answer.push(element)
        this.visited.push(element)
        this.adjacencyList[element] && this.adjacencyList[element].map((el) => stack.push(el))
      }
    }
    

    return answer
  }
  
  findNumberOfConnected(){
    const keys = Object.keys(this.adjacencyList)
    
    let numberOfConnected = 0

    for(let i = 0; i< keys.length; i++){
      const key = keys[i]
      if(this.visited.includes(key)){
        continue
      }
      numberOfConnected+=1
      this.dfs(key)
    }

    return numberOfConnected
  }
}

let graph = new Graph()


graph.addElement('0', ['1'])
graph.addElement('1', ['0'])


console.log(graph.findNumberOfConnected())



graph = new Graph()
graph.addEdge('0', '1')
graph.addEdge('1', '0')
graph.addEdge('1', '2')
graph.addEdge('2', '1')

graph.addEdge('3', '4')


console.log(graph.findNumberOfConnected())